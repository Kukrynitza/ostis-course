const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const REACT_URL = 'http://localhost:3000';

async function run() {
    console.log('[Test] PNG Export Test via React App\n');

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1920, height: 1080 },
        args: ['--disable-web-security', '--allow-running-insecure-content']
    });

    const page = await browser.newPage();
    const allLogs = [];

    page.on('console', msg => {
        const text = `[${msg.type()}] ${msg.text()}`;
        allLogs.push(text);
        console.log(text);
    });

    page.on('pageerror', err => {
        const text = `PAGE ERROR: ${err.message}`;
        allLogs.push(text);
        console.error(text);
    });

    try {
        console.log('[Test] Opening React app...');
        await page.goto(REACT_URL, { waitUntil: 'networkidle0', timeout: 60000 });
        console.log('[Test] React app loaded\n');

        // Wait for page to fully initialize (SCg iframe + decomposition)
        console.log('[Test] Waiting for page initialization (30s)...');
        await new Promise(r => setTimeout(r, 30000));

        // Navigate to SCg format
        console.log('\n[Test] Switching to SCg format...');
        
        // Click the SCg mode button
        const scgButton = await page.$('button');
        // Find the SCg button by looking for one that navigates to scg
        const scgFound = await page.evaluate(() => {
            const buttons = Array.from(document.querySelectorAll('button'));
            const scgBtn = buttons.find(b => b.textContent.includes('SCg') || b.textContent.includes('scg'));
            if (scgBtn) {
                scgBtn.click();
                return true;
            }
            return false;
        });

        if (!scgFound) {
            console.log('[Test] No SCg button found, trying direct navigation');
            // Navigate directly to SCg page
            await page.goto(`${REACT_URL}/c/ui_menu_view_full_semantic_neighborhood/a/myself/scg`, { 
                waitUntil: 'networkidle0',
                timeout: 30000 
            });
        }

        await new Promise(r => setTimeout(r, 10000));

        // Find the iframe
        const frames = page.frames();
        const scgFrame = frames.find(f => f.url().includes('/scg'));
        
        if (!scgFrame) {
            console.log('[Test] SCg iframe not found!');
            console.log('[Test] Available frames:');
            frames.forEach(f => console.log('  -', f.url()));
        } else {
            console.log('[Test] SCg iframe found:', scgFrame.url());

            // Check if SVG exists in the iframe
            const svgExists = await scgFrame.evaluate(() => {
                const svg = document.querySelector('svg.SCgSvg');
                if (!svg) return { exists: false };
                const images = svg.querySelectorAll('image');
                const imageHrefs = [];
                images.forEach(img => {
                    imageHrefs.push(img.getAttribute('xlink:href') || img.getAttribute('href'));
                });
                return {
                    exists: true,
                    bbox: svg.getBBox(),
                    imageCount: images.length,
                    imageHrefs: imageHrefs.slice(0, 5)
                };
            });

            console.log('[Test] SVG Analysis:', JSON.stringify(svgExists, null, 2));

            if (svgExists.exists) {
                console.log('\n[Test] Attempting PNG export via button click...\n');

                // Find and click the PNG export button
                const pngClicked = await page.evaluate(() => {
                    const buttons = Array.from(document.querySelectorAll('button'));
                    const pngBtn = buttons.find(b => b.textContent.trim() === 'PNG');
                    if (pngBtn) {
                        pngBtn.click();
                        return true;
                    }
                    return false;
                });

                if (pngClicked) {
                    console.log('[Test] PNG button clicked, waiting for result...');
                    await new Promise(r => setTimeout(r, 15000));
                }

                // Check for download
                console.log('[Test] Checking for downloads...');
            }
        }

    } catch (err) {
        console.error('[Test] Error:', err.message);
    }

    // Save logs
    fs.writeFileSync(path.join(__dirname, 'react-png-test-log.txt'), allLogs.join('\n'));
    console.log('\n[Test] Logs saved to react-png-test-log.txt');
    console.log('[Test] Browser will stay open for 30s...');
    await new Promise(r => setTimeout(r, 30000));

    await browser.close();
    process.exit(0);
}

run();
