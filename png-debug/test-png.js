const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SCG_URL = 'http://localhost:8000/scg';

async function run() {
    console.log('[PNG Test] Starting...\n');

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1920, height: 1080 },
        args: ['--disable-web-security', '--allow-running-insecure-content']
    });

    const page = await browser.newPage();
    await page.setCacheEnabled(false);

    try {
        console.log('[1] Opening SCg page...');
        await page.goto(SCG_URL, { waitUntil: 'networkidle0', timeout: 30000 });

        // Wait for SCWeb init
        console.log('[2] Waiting for SCWeb...');
        await page.waitForFunction(() => typeof window.SCWeb !== 'undefined', { timeout: 15000 });
        await new Promise(r => setTimeout(r, 2000));

        // Create a test SVG directly in the page
        console.log('[3] Creating test SVG...');
        await page.evaluate(() => {
            const container = document.getElementById('window-container');
            container.innerHTML = `
                <div class="panel panel-default sc-window" id="test_window" sc_addr="12345">
                    <div class="panel-body" id="test_window_body"></div>
                </div>
            `;

            const body = document.getElementById('test_window_body');
            body.innerHTML = `
                <svg class="SCgSvg" width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#333"/>
                        </marker>
                    </defs>
                    <rect x="50" y="50" width="150" height="60" rx="8" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
                    <text x="125" y="85" text-anchor="middle" font-family="Arial" font-size="14" fill="#333">Node 1</text>
                    <rect x="400" y="200" width="150" height="60" rx="8" fill="#e8f5e9" stroke="#388e3c" stroke-width="2"/>
                    <text x="475" y="235" text-anchor="middle" font-family="Arial" font-size="14" fill="#333">Node 2</text>
                    <path d="M 200 80 Q 300 150 400 200" fill="none" stroke="#666" stroke-width="2" marker-end="url(#arrow)"/>
                    <circle cx="300" cy="400" r="30" fill="#fff3e0" stroke="#f57c00" stroke-width="2"/>
                    <text x="300" y="405" text-anchor="middle" font-family="Arial" font-size="12" fill="#333">Node 3</text>
                    <path d="M 475 260 L 475 350 Q 475 370 330 400" fill="none" stroke="#666" stroke-width="2" marker-end="url(#arrow)"/>
                    <path d="M 270 400 Q 150 400 125 110" fill="none" stroke="#666" stroke-width="2" marker-end="url(#arrow)"/>
                </svg>
            `;
        });

        const svgExists = await page.evaluate(() => document.querySelector('svg.SCgSvg') !== null);
        console.log('[4] SVG exists:', svgExists);

        if (!svgExists) {
            console.log('[FAIL] SVG not created');
            await new Promise(r => setTimeout(r, 30000));
            await browser.close();
            return;
        }

        // Analyze SVG
        console.log('\n[5] Analyzing SVG...');
        const svgInfo = await page.evaluate(() => {
            const svg = document.querySelector('svg.SCgSvg');
            const bbox = svg.getBBox();
            const images = svg.querySelectorAll('image');
            const uses = svg.querySelectorAll('use');
            return {
                bbox: { w: bbox.width, h: bbox.height },
                imageCount: images.length,
                useCount: uses.length,
                totalElements: svg.querySelectorAll('*').length
            };
        });
        console.log(JSON.stringify(svgInfo, null, 2));

        // PNG Export with full inlining
        console.log('\n[6] PNG Export...');
        const pngResult = await page.evaluate(async () => {
            const debugLogs = [];
            function log(msg) { debugLogs.push(msg); }

            try {
                const svg = document.querySelector('svg.SCgSvg');
                if (!svg) return { success: false, error: 'SVG not found', logs: debugLogs };

                const bbox = svg.getBBox();
                const w = Math.ceil(bbox.width + 20);
                const h = Math.ceil(bbox.height + 20);

                const clone = svg.cloneNode(true);
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                clone.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
                clone.setAttribute('width', w);
                clone.setAttribute('height', h);
                clone.setAttribute('viewBox', (bbox.x - 10) + ' ' + (bbox.y - 10) + ' ' + w + ' ' + h);

                // Inline computed styles
                const origAll = svg.querySelectorAll('*');
                const cloneAll = clone.querySelectorAll('*');
                log(`Inlining styles for ${origAll.length} elements...`);

                for (let i = 0; i < origAll.length; i++) {
                    const computed = window.getComputedStyle(origAll[i]);
                    let styleStr = '';
                    for (let j = 0; j < computed.length; j++) {
                        const prop = computed[j];
                        let value = computed.getPropertyValue(prop);
                        // Inline url() references
                        const urlRegex = /url\(["']?(https?:\/\/[^"'\)]+)["']?\)/g;
                        let match;
                        while ((match = urlRegex.exec(value)) !== null) {
                            const fullUrl = match[1];
                            try {
                                const response = await fetch(fullUrl);
                                if (response.ok) {
                                    const blob = await response.blob();
                                    const base64 = await new Promise((resolve) => {
                                        const reader = new FileReader();
                                        reader.onloadend = () => resolve(reader.result);
                                        reader.readAsDataURL(blob);
                                    });
                                    value = value.replace(match[0], `url("${base64}")`);
                                    log(`Inlined url() in style: ${prop}`);
                                }
                            } catch (e) { }
                        }
                        styleStr += prop + ':' + value + ';';
                    }
                    cloneAll[i].setAttribute('style', styleStr);
                }
                log('Styles inlined');

                // Inline <image> elements
                const cloneImages = clone.querySelectorAll('image');
                log(`Found ${cloneImages.length} <image> elements`);
                for (const cloneImg of cloneImages) {
                    const href = cloneImg.getAttribute('xlink:href') || cloneImg.getAttribute('href');
                    if (href && !href.startsWith('data:')) {
                        try {
                            const response = await fetch(href);
                            if (response.ok) {
                                const blob = await response.blob();
                                const base64 = await new Promise((resolve) => {
                                    const reader = new FileReader();
                                    reader.onloadend = () => resolve(reader.result);
                                    reader.readAsDataURL(blob);
                                });
                                cloneImg.setAttribute('xlink:href', base64);
                                cloneImg.setAttribute('href', base64);
                                log(`Inlined image`);
                            }
                        } catch (e) { }
                    }
                }

                // Resolve <use> elements
                const defs = svg.querySelector('defs');
                if (defs) {
                    const cloneDefs = clone.querySelector('defs');
                    if (cloneDefs) {
                        const cloneUses = clone.querySelectorAll('use');
                        log(`Found ${cloneUses.length} <use> elements`);
                        for (const cloneUse of cloneUses) {
                            const href = cloneUse.getAttribute('xlink:href') || cloneUse.getAttribute('href');
                            if (href && href.startsWith('#')) {
                                const id = href.substring(1);
                                const defEl = defs.querySelector('#' + id);
                                if (defEl) {
                                    const clonedDef = defEl.cloneNode(true);
                                    const useAttrs = cloneUse.attributes;
                                    for (let a = 0; a < useAttrs.length; a++) {
                                        if (useAttrs[a].name !== 'href' && useAttrs[a].name !== 'xlink:href') {
                                            clonedDef.setAttribute(useAttrs[a].name, useAttrs[a].value);
                                        }
                                    }
                                    cloneUse.parentNode.replaceChild(clonedDef, cloneUse);
                                    log(`Resolved <use> ${href}`);
                                }
                            }
                        }
                    }
                }

                const svgString = new XMLSerializer().serializeToString(clone);
                log(`SVG string length: ${svgString.length}`);

                const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
                const url = URL.createObjectURL(svgBlob);
                const img = new Image();

                return new Promise((resolve) => {
                    img.onload = function () {
                        log(`Image loaded: ${img.naturalWidth}x${img.naturalHeight}`);
                        const canvas = document.createElement('canvas');
                        canvas.width = w * 2;
                        canvas.height = h * 2;
                        const ctx = canvas.getContext('2d');
                        ctx.scale(2, 2);
                        ctx.drawImage(img, 0, 0);
                        URL.revokeObjectURL(url);
                        log('Drawn on canvas');

                        canvas.toBlob(function (blob) {
                            if (blob) {
                                log(`toBlob OK, size: ${blob.size}`);
                                const reader = new FileReader();
                                reader.onloadend = function () {
                                    resolve({ success: true, dataUrl: reader.result, logs: debugLogs });
                                };
                                reader.readAsDataURL(blob);
                            } else {
                                log('toBlob returned null, trying toDataURL...');
                                try {
                                    const dataUrl = canvas.toDataURL('image/png');
                                    log(`toDataURL OK, length: ${dataUrl.length}`);
                                    resolve({ success: true, dataUrl, logs: debugLogs });
                                } catch (e) {
                                    log(`toDataURL FAILED: ${e.message}`);
                                    resolve({ success: false, error: `Tainted: ${e.message}`, logs: debugLogs });
                                }
                            }
                        }, 'image/png');
                    };

                    img.onerror = function () {
                        log('Image load FAILED');
                        URL.revokeObjectURL(url);
                        resolve({ success: false, error: 'Image load failed', logs: debugLogs });
                    };

                    img.src = url;
                });

            } catch (err) {
                return { success: false, error: err.message, logs: debugLogs };
            }
        });

        console.log('\n========== RESULT ==========');
        console.log('Success:', pngResult.success);
        if (pngResult.error) console.log('Error:', pngResult.error);
        console.log('\nDebug logs:');
        pngResult.logs.forEach(l => console.log('  ' + l));

        if (pngResult.success && pngResult.dataUrl) {
            const base64Data = pngResult.dataUrl.replace(/^data:image\/png;base64,/, '');
            const pngPath = path.join(__dirname, 'scg-test-export.png');
            fs.writeFileSync(pngPath, base64Data, 'base64');
            console.log('\n[PNG SAVED]', pngPath);
            console.log('[Size]', base64Data.length, 'bytes (base64)');
        }

    } catch (err) {
        console.error('[FATAL]', err.message);
    }

    console.log('\nKeeping browser open for 30s...');
    await new Promise(r => setTimeout(r, 30000));
    await browser.close();
    process.exit(0);
}

run();
