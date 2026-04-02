(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"), require("react-dom"), require("ts-sc-client"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "styled-components", "react-dom", "ts-sc-client"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("styled-components"), require("react-dom"), require("ts-sc-client")) : factory(root["react"], root["styled-components"], root["react-dom"], root["ts-sc-client"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE__156__, __WEBPACK_EXTERNAL_MODULE__608__, __WEBPACK_EXTERNAL_MODULE__111__, __WEBPACK_EXTERNAL_MODULE__401__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 418:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(418);var f=__webpack_require__(156),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(251);
} else {}


/***/ }),

/***/ 156:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ }),

/***/ 111:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__111__;

/***/ }),

/***/ 608:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__608__;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__401__;

/***/ }),

/***/ 61:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(698)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 698:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(61)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Button: () => (/* reexport */ Button),
  ButtonWithIcon: () => (/* reexport */ ButtonWithIcon),
  Checkbox: () => (/* reexport */ Checkbox),
  Chip: () => (/* reexport */ Chip),
  ClientProvider: () => (/* reexport */ ClientProvider),
  CommandProvider: () => (/* reexport */ CommandProvider),
  ContextMenu: () => (/* reexport */ ContextMenu),
  ContextMenuProvider: () => (/* reexport */ ContextMenuProvider),
  DecompositionPanel: () => (/* reexport */ DecompositionPanel),
  DecompositionProvider: () => (/* reexport */ DecompositionProvider),
  Dropdown: () => (/* reexport */ Dropdown),
  DropdownOption: () => (/* reexport */ DropdownOption),
  Expandable: () => (/* reexport */ Expandable),
  Highlight: () => (/* reexport */ Highlight),
  InfiniteScroll: () => (/* reexport */ InfiniteScroll),
  Input: () => (/* reexport */ Input_Input),
  LanguageProvider: () => (/* reexport */ LanguageProvider),
  Option: () => (/* reexport */ Option_Option),
  OptionGroup: () => (/* reexport */ OptionGroup),
  Popup: () => (/* reexport */ Popup),
  PositionInPortal: () => (/* reexport */ PositionInPortal),
  PseudoText: () => (/* reexport */ PseudoText),
  ScLangText: () => (/* reexport */ ScLangText),
  ScTag: () => (/* reexport */ ScTag),
  ScTagLink: () => (/* reexport */ ScTagLink),
  ScUtilsProvider: () => (/* reexport */ ScUtilsProvider),
  Scg: () => (/* reexport */ Scg),
  Scn: () => (/* reexport */ Scn),
  Select: () => (/* reexport */ Select),
  Skeleton: () => (/* reexport */ Skeleton),
  Spinner: () => (/* reexport */ Spinner_Spinner),
  SwitchScgScn: () => (/* reexport */ SwitchScgScn),
  Textarea: () => (/* reexport */ Textarea),
  Toast: () => (/* reexport */ Toast),
  ToastProvider: () => (/* reexport */ ToastProvider),
  Toasts: () => (/* reexport */ Toasts),
  Tooltip: () => (/* reexport */ Tooltip),
  Translate: () => (/* reexport */ Translate),
  arcMap: () => (/* reexport */ arcMap),
  defaultLightTheme: () => (/* reexport */ defaultLightTheme),
  getRandomInt: () => (/* reexport */ getRandomInt),
  langToKeynode: () => (/* reexport */ langToKeynode),
  observeRect: () => (/* reexport */ observeRect),
  refSetter: () => (/* reexport */ refSetter),
  scUtilsBuilder: () => (/* reexport */ scUtilsBuilder),
  searchKeynodesBuilder: () => (/* reexport */ searchKeynodesBuilder),
  snakeToCamelCase: () => (/* reexport */ snakeToCamelCase),
  useBooleanState: () => (/* reexport */ useBooleanState),
  useClickOutside: () => (/* reexport */ useClickOutside),
  useClient: () => (/* reexport */ useClient),
  useCommandContext: () => (/* reexport */ useCommandContext),
  useContextMenu: () => (/* reexport */ useContextMenu),
  useDecompositionContext: () => (/* reexport */ useDecompositionContext),
  useInView: () => (/* reexport */ useInView),
  useInfiniteScroll: () => (/* reexport */ useInfiniteScroll),
  useInterval: () => (/* reexport */ useInterval),
  useLanguage: () => (/* reexport */ useLanguage),
  useLanguageContext: () => (/* reexport */ useLanguageContext),
  useScUtils: () => (/* reexport */ useScUtils),
  useToast: () => (/* reexport */ useToast),
  useTranslate: () => (/* reexport */ useTranslate)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(156);
;// CONCATENATED MODULE: ./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t){return t.split("-")[1]}function e(t){return"y"===t?"height":"width"}function n(t){return t.split("-")[0]}function o(t){return["top","bottom"].includes(n(t))?"x":"y"}function i(i,r,a){let{reference:l,floating:s}=i;const c=l.x+l.width/2-s.width/2,f=l.y+l.height/2-s.height/2,m=o(r),u=e(m),g=l[u]/2-s[u]/2,d="x"===m;let p;switch(n(r)){case"top":p={x:c,y:l.y-s.height};break;case"bottom":p={x:c,y:l.y+l.height};break;case"right":p={x:l.x+l.width,y:f};break;case"left":p={x:l.x-s.width,y:f};break;default:p={x:l.x,y:l.y}}switch(t(r)){case"start":p[m]-=g*(a&&d?-1:1);break;case"end":p[m]+=g*(a&&d?-1:1)}return p}const floating_ui_core_browser_min_r=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:l}=n,s=a.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let f=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:m,y:u}=i(f,o,c),g=o,d={},p=0;for(let n=0;n<s.length;n++){const{name:a,fn:h}=s[n],{x:y,y:x,data:w,reset:v}=await h({x:m,y:u,initialPlacement:o,placement:g,strategy:r,middlewareData:d,rects:f,platform:l,elements:{reference:t,floating:e}});m=null!=y?y:m,u=null!=x?x:u,d={...d,[a]:{...d[a],...w}},v&&p<=50&&(p++,"object"==typeof v&&(v.placement&&(g=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:r}):v.rects),({x:m,y:u}=i(f,g,c))),n=-1)}return{x:m,y:u,placement:g,strategy:r,middlewareData:d}};function a(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function floating_ui_core_browser_min_l(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function s(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:f}=t,{boundary:m="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:d=!1,padding:p=0}=e,h=a(p),y=c[d?"floating"===g?"reference":"floating":g],x=floating_ui_core_browser_min_l(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:m,rootBoundary:u,strategy:f})),w="floating"===g?{...s.floating,x:o,y:i}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating)),b=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},A=floating_ui_core_browser_min_l(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:v,strategy:f}):w);return{top:(x.top-A.top+h.top)/b.y,bottom:(A.bottom-x.bottom+h.bottom)/b.y,left:(x.left-A.left+h.left)/b.x,right:(A.right-x.right+h.right)/b.x}}const c=Math.min,f=Math.max;function m(t,e,n){return f(t,c(e,n))}const u=n=>({name:"arrow",options:n,async fn(i){const{element:r,padding:l=0}=n||{},{x:s,y:c,placement:f,rects:u,platform:g,elements:d}=i;if(null==r)return{};const p=a(l),h={x:s,y:c},y=o(f),x=e(y),w=await g.getDimensions(r),v="y"===y,b=v?"top":"left",A=v?"bottom":"right",R=v?"clientHeight":"clientWidth",P=u.reference[x]+u.reference[y]-h[y]-u.floating[x],E=h[y]-u.reference[y],T=await(null==g.getOffsetParent?void 0:g.getOffsetParent(r));let D=T?T[R]:0;D&&await(null==g.isElement?void 0:g.isElement(T))||(D=d.floating[R]||u.floating[x]);const L=P/2-E/2,k=p[b],O=D-w[x]-p[A],B=D/2-w[x]/2+L,C=m(k,B,O),H=null!=t(f)&&B!=C&&u.reference[x]/2-(B<k?p[b]:p[A])-w[x]/2<0;return{[y]:h[y]-(H?B<k?k-B:O-B:0),data:{[y]:C,centerOffset:B-C}}}}),g=["top","right","bottom","left"],d=g.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),p={left:"right",right:"left",bottom:"top",top:"bottom"};function h(t){return t.replace(/left|right|bottom|top/g,(t=>p[t]))}function y(n,i,r){void 0===r&&(r=!1);const a=t(n),l=o(n),s=e(l);let c="x"===l?a===(r?"end":"start")?"right":"left":"start"===a?"bottom":"top";return i.reference[s]>i.floating[s]&&(c=h(c)),{main:c,cross:h(c)}}const x={start:"end",end:"start"};function w(t){return t.replace(/start|end/g,(t=>x[t]))}const v=function(e){return void 0===e&&(e={}),{name:"autoPlacement",options:e,async fn(o){var i,r,a;const{rects:l,middlewareData:c,placement:f,platform:m,elements:u}=o,{crossAxis:g=!1,alignment:p,allowedPlacements:h=d,autoAlignment:x=!0,...v}=e,b=void 0!==p||h===d?function(e,o,i){return(e?[...i.filter((n=>t(n)===e)),...i.filter((n=>t(n)!==e))]:i.filter((t=>n(t)===t))).filter((n=>!e||t(n)===e||!!o&&w(n)!==n))}(p||null,x,h):h,A=await s(o,v),R=(null==(i=c.autoPlacement)?void 0:i.index)||0,P=b[R];if(null==P)return{};const{main:E,cross:T}=y(P,l,await(null==m.isRTL?void 0:m.isRTL(u.floating)));if(f!==P)return{reset:{placement:b[0]}};const D=[A[n(P)],A[E],A[T]],L=[...(null==(r=c.autoPlacement)?void 0:r.overflows)||[],{placement:P,overflows:D}],k=b[R+1];if(k)return{data:{index:R+1,overflows:L},reset:{placement:k}};const O=L.map((e=>{const n=t(e.placement);return[e.placement,n&&g?e.overflows.slice(0,2).reduce(((t,e)=>t+e),0):e.overflows[0],e.overflows]})).sort(((t,e)=>t[1]-e[1])),B=(null==(a=O.filter((e=>e[2].slice(0,t(e[0])?2:3).every((t=>t<=0))))[0])?void 0:a[0])||O[0][0];return B!==f?{data:{index:R+1,overflows:L},reset:{placement:B}}:{}}}};const b=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(o){var i;const{placement:r,middlewareData:a,rects:l,initialPlacement:c,platform:f,elements:m}=o,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:v=!0,...b}=e,A=n(r),R=n(c)===c,P=await(null==f.isRTL?void 0:f.isRTL(m.floating)),E=d||(R||!v?[h(c)]:function(t){const e=h(t);return[w(t),e,w(e)]}(c));d||"none"===x||E.push(...function(e,o,i,r){const a=t(e);let l=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:a;default:return[]}}(n(e),"start"===i,r);return a&&(l=l.map((t=>t+"-"+a)),o&&(l=l.concat(l.map(w)))),l}(c,v,x,P));const T=[c,...E],D=await s(o,b),L=[];let k=(null==(i=a.flip)?void 0:i.overflows)||[];if(u&&L.push(D[A]),g){const{main:t,cross:e}=y(r,l,P);L.push(D[t],D[e])}if(k=[...k,{placement:r,overflows:L}],!L.every((t=>t<=0))){var O,B;const t=((null==(O=a.flip)?void 0:O.index)||0)+1,e=T[t];if(e)return{data:{index:t,overflows:k},reset:{placement:e}};let n=null==(B=k.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:B.placement;if(!n)switch(p){case"bestFit":{var C;const t=null==(C=k.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:C[0];t&&(n=t);break}case"initialPlacement":n=c}if(r!==n)return{reset:{placement:n}}}return{}}}};function A(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function R(t){return g.some((e=>t[e]>=0))}const P=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{strategy:n="referenceHidden",...o}=t,{rects:i}=e;switch(n){case"referenceHidden":{const t=A(await s(e,{...o,elementContext:"reference"}),i.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:R(t)}}}case"escaped":{const t=A(await s(e,{...o,altBoundary:!0}),i.floating);return{data:{escapedOffsets:t,escaped:R(t)}}}default:return{}}}}};function E(t){const e=c(...t.map((t=>t.left))),n=c(...t.map((t=>t.top)));return{x:e,y:n,width:f(...t.map((t=>t.right)))-e,height:f(...t.map((t=>t.bottom)))-n}}const T=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:i,elements:r,rects:s,platform:m,strategy:u}=e,{padding:g=2,x:d,y:p}=t,h=Array.from(await(null==m.getClientRects?void 0:m.getClientRects(r.reference))||[]),y=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let o=null;for(let t=0;t<e.length;t++){const i=e[t];!o||i.y-o.y>o.height/2?n.push([i]):n[n.length-1].push(i),o=i}return n.map((t=>floating_ui_core_browser_min_l(E(t))))}(h),x=floating_ui_core_browser_min_l(E(h)),w=a(g);const v=await m.getElementRects({reference:{getBoundingClientRect:function(){if(2===y.length&&y[0].left>y[1].right&&null!=d&&null!=p)return y.find((t=>d>t.left-w.left&&d<t.right+w.right&&p>t.top-w.top&&p<t.bottom+w.bottom))||x;if(y.length>=2){if("x"===o(i)){const t=y[0],e=y[y.length-1],o="top"===n(i),r=t.top,a=e.bottom,l=o?t.left:e.left,s=o?t.right:e.right;return{top:r,bottom:a,left:l,right:s,width:s-l,height:a-r,x:l,y:r}}const t="left"===n(i),e=f(...y.map((t=>t.right))),r=c(...y.map((t=>t.left))),a=y.filter((n=>t?n.left===r:n.right===e)),l=a[0].top,s=a[a.length-1].bottom;return{top:l,bottom:s,left:r,right:e,width:e-r,height:s-l,x:r,y:l}}return x}},floating:r.floating,strategy:u});return s.reference.x!==v.reference.x||s.reference.y!==v.reference.y||s.reference.width!==v.reference.width||s.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};const D=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(i){const{x:r,y:a}=i,l=await async function(e,i){const{placement:r,platform:a,elements:l}=e,s=await(null==a.isRTL?void 0:a.isRTL(l.floating)),c=n(r),f=t(r),m="x"===o(r),u=["left","top"].includes(c)?-1:1,g=s&&m?-1:1,d="function"==typeof i?i(e):i;let{mainAxis:p,crossAxis:h,alignmentAxis:y}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return f&&"number"==typeof y&&(h="end"===f?-1*y:y),m?{x:h*g,y:p*u}:{x:p*u,y:h*g}}(i,e);return{x:r+l.x,y:a+l.y,data:l}}}};function L(t){return"x"===t?"y":"x"}const k=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:r,placement:a}=e,{mainAxis:l=!0,crossAxis:c=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...u}=t,g={x:i,y:r},d=await s(e,u),p=o(n(a)),h=L(p);let y=g[p],x=g[h];if(l){const t="y"===p?"bottom":"right";y=m(y+d["y"===p?"top":"left"],y,y-d[t])}if(c){const t="y"===h?"bottom":"right";x=m(x+d["y"===h?"top":"left"],x,x-d[t])}const w=f.fn({...e,[p]:y,[h]:x});return{...w,data:{x:w.x-i,y:w.y-r}}}}},O=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:i,y:r,placement:a,rects:l,middlewareData:s}=e,{offset:c=0,mainAxis:f=!0,crossAxis:m=!0}=t,u={x:i,y:r},g=o(a),d=L(g);let p=u[g],h=u[d];const y="function"==typeof c?c(e):c,x="number"==typeof y?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(f){const t="y"===g?"height":"width",e=l.reference[g]-l.floating[t]+x.mainAxis,n=l.reference[g]+l.reference[t]-x.mainAxis;p<e?p=e:p>n&&(p=n)}if(m){var w,v;const t="y"===g?"width":"height",e=["top","left"].includes(n(a)),o=l.reference[d]-l.floating[t]+(e&&(null==(w=s.offset)?void 0:w[d])||0)+(e?0:x.crossAxis),i=l.reference[d]+l.reference[t]+(e?0:(null==(v=s.offset)?void 0:v[d])||0)-(e?x.crossAxis:0);h<o?h=o:h>i&&(h=i)}return{[g]:p,[d]:h}}}},B=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(i){const{placement:r,rects:a,platform:l,elements:m}=i,{apply:u=(()=>{}),...g}=e,d=await s(i,g),p=n(r),h=t(r),y="x"===o(r),{width:x,height:w}=a.floating;let v,b;"top"===p||"bottom"===p?(v=p,b=h===(await(null==l.isRTL?void 0:l.isRTL(m.floating))?"start":"end")?"left":"right"):(b=p,v="end"===h?"top":"bottom");const A=w-d[v],R=x-d[b],P=!i.middlewareData.shift;let E=A,T=R;if(y){const t=x-d.left-d.right;T=h||P?c(R,t):t}else{const t=w-d.top-d.bottom;E=h||P?c(A,t):t}if(P&&!h){const t=f(d.left,0),e=f(d.right,0),n=f(d.top,0),o=f(d.bottom,0);y?T=x-2*(0!==t||0!==e?t+e:f(d.left,d.right)):E=w-2*(0!==n||0!==o?n+o:f(d.top,d.bottom))}await u({...i,availableWidth:T,availableHeight:E});const D=await l.getDimensions(m.floating);return x!==D.width||w!==D.height?{reset:{rects:!0}}:{}}}};

;// CONCATENATED MODULE: ./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function floating_ui_dom_browser_min_n(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function floating_ui_dom_browser_min_o(t){return floating_ui_dom_browser_min_n(t).getComputedStyle(t)}function floating_ui_dom_browser_min_i(t){return t instanceof floating_ui_dom_browser_min_n(t).Node}function r(t){return floating_ui_dom_browser_min_i(t)?(t.nodeName||"").toLowerCase():""}let l;function floating_ui_dom_browser_min_c(){if(l)return l;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(l=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),l):navigator.userAgent}function floating_ui_dom_browser_min_s(t){return t instanceof floating_ui_dom_browser_min_n(t).HTMLElement}function floating_ui_dom_browser_min_f(t){return t instanceof floating_ui_dom_browser_min_n(t).Element}function floating_ui_dom_browser_min_u(t){if("undefined"==typeof ShadowRoot)return!1;return t instanceof floating_ui_dom_browser_min_n(t).ShadowRoot||t instanceof ShadowRoot}function floating_ui_dom_browser_min_a(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=floating_ui_dom_browser_min_o(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function floating_ui_dom_browser_min_d(t){return["table","td","th"].includes(r(t))}function floating_ui_dom_browser_min_h(t){const e=/firefox/i.test(floating_ui_dom_browser_min_c()),n=floating_ui_dom_browser_min_o(t),i=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!i&&"none"!==i||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function floating_ui_dom_browser_min_p(){return/^((?!chrome|android).)*safari/i.test(floating_ui_dom_browser_min_c())}function floating_ui_dom_browser_min_g(t){return["html","body","#document"].includes(r(t))}const floating_ui_dom_browser_min_m=Math.min,floating_ui_dom_browser_min_y=Math.max,floating_ui_dom_browser_min_x=Math.round;function floating_ui_dom_browser_min_w(t){const e=floating_ui_dom_browser_min_o(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=floating_ui_dom_browser_min_s(t),l=r?t.offsetWidth:n,c=r?t.offsetHeight:i,f=floating_ui_dom_browser_min_x(n)!==l||floating_ui_dom_browser_min_x(i)!==c;return f&&(n=l,i=c),{width:n,height:i,fallback:f}}function floating_ui_dom_browser_min_v(t){return floating_ui_dom_browser_min_f(t)?t:t.contextElement}const floating_ui_dom_browser_min_b={x:1,y:1};function floating_ui_dom_browser_min_L(t){const e=floating_ui_dom_browser_min_v(t);if(!floating_ui_dom_browser_min_s(e))return floating_ui_dom_browser_min_b;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:r}=floating_ui_dom_browser_min_w(e);let l=(r?floating_ui_dom_browser_min_x(n.width):n.width)/o,c=(r?floating_ui_dom_browser_min_x(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),c&&Number.isFinite(c)||(c=1),{x:l,y:c}}function floating_ui_dom_browser_min_E(e,o,i,r){var l,c;void 0===o&&(o=!1),void 0===i&&(i=!1);const s=e.getBoundingClientRect(),u=floating_ui_dom_browser_min_v(e);let a=floating_ui_dom_browser_min_b;o&&(r?floating_ui_dom_browser_min_f(r)&&(a=floating_ui_dom_browser_min_L(r)):a=floating_ui_dom_browser_min_L(e));const d=u?floating_ui_dom_browser_min_n(u):window,h=floating_ui_dom_browser_min_p()&&i;let g=(s.left+(h&&(null==(l=d.visualViewport)?void 0:l.offsetLeft)||0))/a.x,m=(s.top+(h&&(null==(c=d.visualViewport)?void 0:c.offsetTop)||0))/a.y,y=s.width/a.x,x=s.height/a.y;if(u){const t=floating_ui_dom_browser_min_n(u),e=r&&floating_ui_dom_browser_min_f(r)?floating_ui_dom_browser_min_n(r):r;let o=t.frameElement;for(;o&&r&&e!==t;){const t=floating_ui_dom_browser_min_L(o),e=o.getBoundingClientRect(),i=getComputedStyle(o);e.x+=(o.clientLeft+parseFloat(i.paddingLeft))*t.x,e.y+=(o.clientTop+parseFloat(i.paddingTop))*t.y,g*=t.x,m*=t.y,y*=t.x,x*=t.y,g+=e.x,m+=e.y,o=floating_ui_dom_browser_min_n(o).frameElement}}return floating_ui_core_browser_min_l({width:y,height:x,x:g,y:m})}function floating_ui_dom_browser_min_T(t){return((floating_ui_dom_browser_min_i(t)?t.ownerDocument:t.document)||window.document).documentElement}function floating_ui_dom_browser_min_R(t){return floating_ui_dom_browser_min_f(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function C(t){return floating_ui_dom_browser_min_E(floating_ui_dom_browser_min_T(t)).left+floating_ui_dom_browser_min_R(t).scrollLeft}function F(t){if("html"===r(t))return t;const e=t.assignedSlot||t.parentNode||floating_ui_dom_browser_min_u(t)&&t.host||floating_ui_dom_browser_min_T(t);return floating_ui_dom_browser_min_u(e)?e.host:e}function S(t){const e=F(t);return floating_ui_dom_browser_min_g(e)?e.ownerDocument.body:floating_ui_dom_browser_min_s(e)&&floating_ui_dom_browser_min_a(e)?e:S(e)}function W(t,e){var o;void 0===e&&(e=[]);const i=S(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=floating_ui_dom_browser_min_n(i);return r?e.concat(l,l.visualViewport||[],floating_ui_dom_browser_min_a(i)?i:[]):e.concat(i,W(i))}function floating_ui_dom_browser_min_D(e,i,r){let l;if("viewport"===i)l=function(t,e){const o=floating_ui_dom_browser_min_n(t),i=floating_ui_dom_browser_min_T(t),r=o.visualViewport;let l=i.clientWidth,c=i.clientHeight,s=0,f=0;if(r){l=r.width,c=r.height;const t=floating_ui_dom_browser_min_p();(!t||t&&"fixed"===e)&&(s=r.offsetLeft,f=r.offsetTop)}return{width:l,height:c,x:s,y:f}}(e,r);else if("document"===i)l=function(t){const e=floating_ui_dom_browser_min_T(t),n=floating_ui_dom_browser_min_R(t),i=t.ownerDocument.body,r=floating_ui_dom_browser_min_y(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),l=floating_ui_dom_browser_min_y(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let c=-n.scrollLeft+C(t);const s=-n.scrollTop;return"rtl"===floating_ui_dom_browser_min_o(i).direction&&(c+=floating_ui_dom_browser_min_y(e.clientWidth,i.clientWidth)-r),{width:r,height:l,x:c,y:s}}(floating_ui_dom_browser_min_T(e));else if(floating_ui_dom_browser_min_f(i))l=function(t,e){const n=floating_ui_dom_browser_min_E(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=floating_ui_dom_browser_min_s(t)?floating_ui_dom_browser_min_L(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(i,r);else{const t={...i};if(floating_ui_dom_browser_min_p()){var c,u;const o=floating_ui_dom_browser_min_n(e);t.x-=(null==(c=o.visualViewport)?void 0:c.offsetLeft)||0,t.y-=(null==(u=o.visualViewport)?void 0:u.offsetTop)||0}l=t}return floating_ui_core_browser_min_l(l)}function V(t,e){const n=F(t);return!(n===e||!floating_ui_dom_browser_min_f(n)||floating_ui_dom_browser_min_g(n))&&("fixed"===floating_ui_dom_browser_min_o(n).position||V(n,e))}function floating_ui_dom_browser_min_A(t,e){return floating_ui_dom_browser_min_s(t)&&"fixed"!==floating_ui_dom_browser_min_o(t).position?e?e(t):t.offsetParent:null}function H(t,e){const i=floating_ui_dom_browser_min_n(t);if(!floating_ui_dom_browser_min_s(t))return i;let l=floating_ui_dom_browser_min_A(t,e);for(;l&&floating_ui_dom_browser_min_d(l)&&"static"===floating_ui_dom_browser_min_o(l).position;)l=floating_ui_dom_browser_min_A(l,e);return l&&("html"===r(l)||"body"===r(l)&&"static"===floating_ui_dom_browser_min_o(l).position&&!floating_ui_dom_browser_min_h(l))?i:l||function(t){let e=F(t);for(;floating_ui_dom_browser_min_s(e)&&!floating_ui_dom_browser_min_g(e);){if(floating_ui_dom_browser_min_h(e))return e;e=F(e)}return null}(t)||i}function floating_ui_dom_browser_min_O(t,e,n){const o=floating_ui_dom_browser_min_s(e),i=floating_ui_dom_browser_min_T(e),l=floating_ui_dom_browser_min_E(t,!0,"fixed"===n,e);let c={scrollLeft:0,scrollTop:0};const f={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==r(e)||floating_ui_dom_browser_min_a(i))&&(c=floating_ui_dom_browser_min_R(e)),floating_ui_dom_browser_min_s(e)){const t=floating_ui_dom_browser_min_E(e,!0);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else i&&(f.x=C(i));return{x:l.left+c.scrollLeft-f.x,y:l.top+c.scrollTop-f.y,width:l.width,height:l.height}}const floating_ui_dom_browser_min_P={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:l}=t;const c="clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let i=W(t).filter((t=>floating_ui_dom_browser_min_f(t)&&"body"!==r(t))),l=null;const c="fixed"===floating_ui_dom_browser_min_o(t).position;let s=c?F(t):t;for(;floating_ui_dom_browser_min_f(s)&&!floating_ui_dom_browser_min_g(s);){const e=floating_ui_dom_browser_min_o(s),n=floating_ui_dom_browser_min_h(s);n||"fixed"!==e.position||(l=null),(c?!n&&!l:!n&&"static"===e.position&&l&&["absolute","fixed"].includes(l.position)||floating_ui_dom_browser_min_a(s)&&!n&&V(t,s))?i=i.filter((t=>t!==s)):l=e,s=F(s)}return e.set(t,i),i}(e,this._c):[].concat(n),s=[...c,i],u=s[0],d=s.reduce(((t,n)=>{const o=floating_ui_dom_browser_min_D(e,n,l);return t.top=floating_ui_dom_browser_min_y(o.top,t.top),t.right=floating_ui_dom_browser_min_m(o.right,t.right),t.bottom=floating_ui_dom_browser_min_m(o.bottom,t.bottom),t.left=floating_ui_dom_browser_min_y(o.left,t.left),t}),floating_ui_dom_browser_min_D(e,u,l));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=floating_ui_dom_browser_min_s(n),l=floating_ui_dom_browser_min_T(n);if(n===l)return e;let c={scrollLeft:0,scrollTop:0},f={x:1,y:1};const u={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==r(n)||floating_ui_dom_browser_min_a(l))&&(c=floating_ui_dom_browser_min_R(n)),floating_ui_dom_browser_min_s(n))){const t=floating_ui_dom_browser_min_E(n);f=floating_ui_dom_browser_min_L(n),u.x=t.x+n.clientLeft,u.y=t.y+n.clientTop}return{width:e.width*f.x,height:e.height*f.y,x:e.x*f.x-c.scrollLeft*f.x+u.x,y:e.y*f.y-c.scrollTop*f.y+u.y}},isElement:floating_ui_dom_browser_min_f,getDimensions:function(t){return floating_ui_dom_browser_min_w(t)},getOffsetParent:H,getDocumentElement:floating_ui_dom_browser_min_T,getScale:floating_ui_dom_browser_min_L,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||H,r=this.getDimensions;return{reference:floating_ui_dom_browser_min_O(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===floating_ui_dom_browser_min_o(t).direction};function z(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:c=!1}=o,s=i||r?[...floating_ui_dom_browser_min_f(t)?W(t):t.contextElement?W(t.contextElement):[],...W(e)]:[];s.forEach((t=>{const e=!floating_ui_dom_browser_min_f(t)&&t.toString().includes("V");!i||c&&!e||t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));let u,a=null;l&&(a=new ResizeObserver((()=>{n()})),floating_ui_dom_browser_min_f(t)&&!c&&a.observe(t),floating_ui_dom_browser_min_f(t)||!t.contextElement||c||a.observe(t.contextElement),a.observe(e));let d=c?floating_ui_dom_browser_min_E(t):null;return c&&function e(){const o=floating_ui_dom_browser_min_E(t);!d||o.x===d.x&&o.y===d.y&&o.width===d.width&&o.height===d.height||n();d=o,u=requestAnimationFrame(e)}(),n(),()=>{var t;s.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==(t=a)||t.disconnect(),a=null,c&&cancelAnimationFrame(u)}}const floating_ui_dom_browser_min_k=(t,n,o)=>{const i=new Map,r={platform:floating_ui_dom_browser_min_P,...o},l={...r.platform,_c:i};return floating_ui_core_browser_min_r(t,n,{...r,platform:l})};

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(111);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
;// CONCATENATED MODULE: ./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js






/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(args) {
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow$1({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return arrow$1({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
};

var index = typeof document !== 'undefined' ? external_react_.useLayoutEffect : external_react_.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length, i, keys;
  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = external_react_.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/react
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = external_react_.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = external_react_.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = external_react_.useState(null);
  const [_floating, _setFloating] = external_react_.useState(null);
  const setReference = external_react_.useCallback(node => {
    if (node != referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, [_setReference]);
  const setFloating = external_react_.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, [_setFloating]);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = external_react_.useRef(null);
  const floatingRef = external_react_.useRef(null);
  const dataRef = external_react_.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const update = external_react_.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    floating_ui_dom_browser_min_k(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        external_react_dom_.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = external_react_.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      } else {
        update();
      }
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef]);
  const refs = external_react_.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = external_react_.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = external_react_.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return external_react_.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}



;// CONCATENATED MODULE: ./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var floating_ui_react_esm_index = typeof document !== 'undefined' ? external_react_.useLayoutEffect : external_react_.useEffect;

let serverHandoffComplete = false;
let count = 0;
const genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = external_react_.useState(() => serverHandoffComplete ? genId() : undefined);
  floating_ui_react_esm_index(() => {
    if (id == null) {
      setId(genId());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  external_react_.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}

// `toString()` prevents bundlers from trying to `import { useId } from 'react'`
const useReactId = external_react_[/*#__PURE__*/'useId'.toString()];

/**
 * Uses React 18's built-in `useId()` when available, or falls back to a
 * slightly less performant (requiring a double render) implementation for
 * earlier React versions.
 * @see https://floating-ui.com/docs/useId
 */
const useId = useReactId || useFloatingId;

/**
 * Renders a pointing arrow triangle.
 * @see https://floating-ui.com/docs/FloatingArrow
 */
const FloatingArrow = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function FloatingArrow(_ref, ref) {
  let {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = _ref;
  if (false) {}
  const clipPathId = useId();
  if (!floating) {
    return null;
  }

  // Strokes must be double the border width, this ensures the stroke's width
  // works as you'd expect.
  strokeWidth *= 2;
  const halfStrokeWidth = strokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const [side, alignment] = placement.split('-');
  const isRTL = floating ? platform.isRTL(floating) : false;
  const isCustomShape = !!d;
  const isVerticalSide = side === 'top' || side === 'bottom';
  const yOffsetProp = staticOffset && alignment === 'end' ? 'bottom' : 'top';
  let xOffsetProp = staticOffset && alignment === 'end' ? 'right' : 'left';
  if (staticOffset && isRTL) {
    xOffsetProp = alignment === 'end' ? 'left' : 'right';
  }
  const arrowOffsetY = isCustomShape ? 0 : halfStrokeWidth;
  const arrowX = (arrow == null ? void 0 : arrow.x) != null ? staticOffset || arrow.x : '';
  const arrowY = (arrow == null ? void 0 : arrow.y) != null ? staticOffset || arrow.y + arrowOffsetY : '';
  const dValue = d || 'M0,0' + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + ' Z';
  const rotation = {
    top: isCustomShape ? 'rotate(180deg)' : '',
    left: isCustomShape ? 'rotate(90deg)' : 'rotate(-90deg)',
    bottom: isCustomShape ? '' : 'rotate(180deg)',
    right: isCustomShape ? 'rotate(-90deg)' : 'rotate(90deg)'
  }[side];
  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref: ref,
    width: isCustomShape ? width : width + strokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? '100%' : "calc(100% - " + strokeWidth / 2 + "px)",
      transform: "" + rotation + (transform != null ? transform : ''),
      ...restStyle
    }
  }), strokeWidth > 0 && /*#__PURE__*/React.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke: stroke
    // Account for the stroke on the fill path rendered below.
    ,
    strokeWidth: strokeWidth + (d ? 0 : 1),
    d: dValue
  }), /*#__PURE__*/React.createElement("path", {
    stroke: strokeWidth && !d ? rest.fill : 'none',
    d: dValue
  }), /*#__PURE__*/React.createElement("clipPath", {
    id: clipPathId
  }, /*#__PURE__*/React.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + strokeWidth,
    height: width
  })));
})));

function createPubSub() {
  const map = new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach(handler => handler(data));
    },
    on(event, listener) {
      map.set(event, [...(map.get(event) || []), listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter(l => l !== listener)) || []);
    }
  };
}

const FloatingNodeContext = /*#__PURE__*/external_react_.createContext(null);
const FloatingTreeContext = /*#__PURE__*/external_react_.createContext(null);
const useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = external_react_.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
const useFloatingTree = () => external_react_.useContext(FloatingTreeContext);

/**
 * Registers a node into the floating tree, returning its id.
 */
function useFloatingNodeId(customParentId) {
  const id = useId();
  const tree = useFloatingTree();
  const reactParentId = useFloatingParentNodeId();
  const parentId = customParentId || reactParentId;
  floating_ui_react_esm_index(() => {
    const node = {
      id,
      parentId
    };
    tree == null ? void 0 : tree.addNode(node);
    return () => {
      tree == null ? void 0 : tree.removeNode(node);
    };
  }, [tree, id, parentId]);
  return id;
}

/**
 * Provides parent node context for nested floating elements.
 * @see https://floating-ui.com/docs/FloatingTree
 */
function FloatingNode(_ref) {
  let {
    children,
    id
  } = _ref;
  const parentId = useFloatingParentNodeId();
  return /*#__PURE__*/React.createElement(FloatingNodeContext.Provider, {
    value: React.useMemo(() => ({
      id,
      parentId
    }), [id, parentId])
  }, children);
}

/**
 * Provides context for nested floating elements when they are not children of
 * each other on the DOM (i.e. portalled to a common node, rather than their
 * respective parent).
 * @see https://floating-ui.com/docs/FloatingTree
 */
function FloatingTree(_ref2) {
  let {
    children
  } = _ref2;
  const nodesRef = React.useRef([]);
  const addNode = React.useCallback(node => {
    nodesRef.current = [...nodesRef.current, node];
  }, []);
  const removeNode = React.useCallback(node => {
    nodesRef.current = nodesRef.current.filter(n => n !== node);
  }, []);
  const events = React.useState(() => createPubSub())[0];
  return /*#__PURE__*/React.createElement(FloatingTreeContext.Provider, {
    value: React.useMemo(() => ({
      nodesRef,
      addNode,
      removeNode,
      events
    }), [nodesRef, addNode, removeNode, events])
  }, children);
}

function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}

// Avoid Chrome DevTools blue warning.
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map(_ref => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(' ');
  }
  return navigator.userAgent;
}

function getWindow(value) {
  return getDocument(value).defaultView || window;
}
function isElement(value) {
  return value ? value instanceof getWindow(value).Element : false;
}
function isHTMLElement(value) {
  return value ? value instanceof getWindow(value).HTMLElement : false;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// License: https://github.com/adobe/react-spectrum/blob/b35d5c02fe900badccd0cf1a8f23bb593419f238/packages/@react-aria/utils/src/isVirtualEvent.ts
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  const androidRe = /Android/i;
  if ((androidRe.test(getPlatform()) || androidRe.test(getUserAgent())) && event.pointerType) {
    return event.type === 'click' && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType !== 'mouse' ||
  // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0;
}
function isSafari() {
  // Chrome DevTools does not complain about navigator.vendor
  return /apple/i.test(navigator.vendor);
}
function isMac() {
  return getPlatform().toLowerCase().startsWith('mac') && !navigator.maxTouchPoints;
}
function isMouseLikePointerType(pointerType, strict) {
  // On some Linux machines with Chromium, mouse inputs return a `pointerType`
  // of "pen": https://github.com/floating-ui/floating-ui/issues/2015
  const values = ['mouse', 'pen'];
  if (!strict) {
    values.push('', undefined);
  }
  return values.includes(pointerType);
}

function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode && child.getRootNode();

  // First, attempt with faster native method
  if (parent.contains(child)) {
    return true;
  }

  // then fallback to custom implementation with Shadow DOM support
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      // @ts-ignore
      next = next.parentNode || next.host;
    }
  }

  // Give up, the result is false
  return false;
}

function floating_ui_react_esm_useLatestRef(value) {
  const ref = (0,external_react_.useRef)(value);
  floating_ui_react_esm_index(() => {
    ref.current = value;
  });
  return ref;
}

const safePolygonIdentifier = 'data-floating-ui-safe-polygon';
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === 'number') {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
/**
 * Opens the floating element while hovering over the reference element, like
 * CSS `:hover`.
 * @see https://floating-ui.com/docs/useHover
 */
function useHover(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements: {
      domReference,
      floating
    },
    refs
  } = context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = floating_ui_react_esm_useLatestRef(handleClose);
  const delayRef = floating_ui_react_esm_useLatestRef(delay);
  const pointerTypeRef = external_react_.useRef();
  const timeoutRef = external_react_.useRef();
  const handlerRef = external_react_.useRef();
  const restTimeoutRef = external_react_.useRef();
  const blockMouseMoveRef = external_react_.useRef(true);
  const performedPointerEventsMutationRef = external_react_.useRef(false);
  const unbindMouseMoveRef = external_react_.useRef(() => {});
  const isHoverOpen = external_react_.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes('mouse')) && type !== 'mousedown';
  }, [dataRef]);

  // When dismissing before opening, clear the delay timeouts to cancel it
  // from showing.
  external_react_.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss() {
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      blockMouseMoveRef.current = true;
    }
    events.on('dismiss', onDismiss);
    return () => {
      events.off('dismiss', onDismiss);
    };
  }, [enabled, events]);
  external_react_.useEffect(() => {
    if (!enabled || !handleCloseRef.current || !open) {
      return;
    }
    function onLeave() {
      if (isHoverOpen()) {
        onOpenChange(false);
      }
    }
    const html = getDocument(floating).documentElement;
    html.addEventListener('mouseleave', onLeave);
    return () => {
      html.removeEventListener('mouseleave', onLeave);
    };
  }, [floating, open, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
  const closeWithDelay = external_react_.useCallback(function (runElseBranch) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    const closeDelay = getDelay(delayRef.current, 'close', pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChange(false), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = external_react_.useCallback(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = undefined;
  }, []);
  const clearPointerEvents = external_react_.useCallback(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(refs.floating.current).body;
      body.style.pointerEvents = '';
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  }, [refs]);

  // Registering the mouse events on the reference directly to bypass React's
  // delegation system. If the cursor was on a disabled element and then entered
  // the reference (no gap), `mouseenter` doesn't fire in the delegation system.
  external_react_.useEffect(() => {
    if (!enabled) {
      return;
    }
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ['click', 'mousedown'].includes(dataRef.current.openEvent.type) : false;
    }
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, 'open') === 0) {
        return;
      }
      dataRef.current.openEvent = event;
      const openDelay = getDelay(delayRef.current, 'open', pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(true);
        }, openDelay);
      } else {
        onOpenChange(true);
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      unbindMouseMoveRef.current();
      const doc = getDocument(floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current) {
        // Prevent clearing `onScrollMouseLeave` timeout.
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current({
          ...context,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay();
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener('mousemove', handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener('mousemove', handler);
        };
        return;
      }

      // Allow interactivity without `safePolygon` on touch devices. With a
      // pointer, a short close delay is an alternative, so it should work
      // consistently.
      const shouldClose = pointerTypeRef.current === 'touch' ? !contains(floating, event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay();
      }
    }

    // Ensure the floating element closes after scrolling even if the pointer
    // did not move.
    // https://github.com/floating-ui/floating-ui/discussions/1692
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      handleCloseRef.current == null ? void 0 : handleCloseRef.current({
        ...context,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          closeWithDelay();
        }
      })(event);
    }
    if (isElement(domReference)) {
      const ref = domReference;
      open && ref.addEventListener('mouseleave', onScrollMouseLeave);
      floating == null ? void 0 : floating.addEventListener('mouseleave', onScrollMouseLeave);
      move && ref.addEventListener('mousemove', onMouseEnter, {
        once: true
      });
      ref.addEventListener('mouseenter', onMouseEnter);
      ref.addEventListener('mouseleave', onMouseLeave);
      return () => {
        open && ref.removeEventListener('mouseleave', onScrollMouseLeave);
        floating == null ? void 0 : floating.removeEventListener('mouseleave', onScrollMouseLeave);
        move && ref.removeEventListener('mousemove', onMouseEnter);
        ref.removeEventListener('mouseenter', onMouseEnter);
        ref.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [domReference, floating, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, tree, delayRef, handleCloseRef, dataRef]);

  // Block pointer-events of every element other than the reference and floating
  // while the floating element is open and has a `handleClose` handler. Also
  // handles nested floating elements.
  // https://github.com/floating-ui/floating-ui/issues/1722
  floating_ui_react_esm_index(() => {
    var _handleCloseRef$curre;
    if (!enabled) {
      return;
    }
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = getDocument(floating).body;
      body.setAttribute(safePolygonIdentifier, '');
      body.style.pointerEvents = 'none';
      performedPointerEventsMutationRef.current = true;
      if (isElement(domReference) && floating) {
        var _tree$nodesRef$curren, _tree$nodesRef$curren2;
        const ref = domReference;
        const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find(node => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = '';
        }
        ref.style.pointerEvents = 'auto';
        floating.style.pointerEvents = 'auto';
        return () => {
          ref.style.pointerEvents = '';
          floating.style.pointerEvents = '';
        };
      }
    }
  }, [enabled, open, parentId, floating, domReference, tree, handleCloseRef, dataRef, isHoverOpen]);
  floating_ui_react_esm_index(() => {
    if (!open) {
      pointerTypeRef.current = undefined;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  external_react_.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, cleanupMouseMoveHandler, clearPointerEvents]);
  return external_react_.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      reference: {
        onPointerDown: setPointerRef,
        onPointerEnter: setPointerRef,
        onMouseMove() {
          if (open || restMs === 0) {
            return;
          }
          clearTimeout(restTimeoutRef.current);
          restTimeoutRef.current = setTimeout(() => {
            if (!blockMouseMoveRef.current) {
              onOpenChange(true);
            }
          }, restMs);
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(timeoutRef.current);
        },
        onMouseLeave() {
          events.emit('dismiss', {
            type: 'mouseLeave',
            data: {
              returnFocus: false
            }
          });
          closeWithDelay(false);
        }
      }
    };
  }, [events, enabled, restMs, open, onOpenChange, closeWithDelay]);
}

const FloatingDelayGroupContext = /*#__PURE__*/external_react_.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {},
  setState: () => {},
  isInstantPhase: false
});
const useDelayGroupContext = () => React.useContext(FloatingDelayGroupContext);
/**
 * Provides context for a group of floating elements that should share a
 * `delay`.
 * @see https://floating-ui.com/docs/FloatingDelayGroup
 */
const FloatingDelayGroup = _ref => {
  let {
    children,
    delay,
    timeoutMs = 0
  } = _ref;
  const [state, setState] = React.useReducer((prev, next) => ({
    ...prev,
    ...next
  }), {
    delay,
    timeoutMs,
    initialDelay: delay,
    currentId: null,
    isInstantPhase: false
  });
  const initialCurrentIdRef = React.useRef(null);
  const setCurrentId = React.useCallback(currentId => {
    setState({
      currentId
    });
  }, []);
  floating_ui_react_esm_index(() => {
    if (state.currentId) {
      if (initialCurrentIdRef.current === null) {
        initialCurrentIdRef.current = state.currentId;
      } else {
        setState({
          isInstantPhase: true
        });
      }
    } else {
      setState({
        isInstantPhase: false
      });
      initialCurrentIdRef.current = null;
    }
  }, [state.currentId]);
  return /*#__PURE__*/React.createElement(FloatingDelayGroupContext.Provider, {
    value: React.useMemo(() => ({
      ...state,
      setState,
      setCurrentId
    }), [state, setState, setCurrentId])
  }, children);
};
const useDelayGroup = (_ref2, _ref3) => {
  let {
    open,
    onOpenChange
  } = _ref2;
  let {
    id
  } = _ref3;
  const {
    currentId,
    setCurrentId,
    initialDelay,
    setState,
    timeoutMs
  } = useDelayGroupContext();
  floating_ui_react_esm_index(() => {
    if (currentId) {
      setState({
        delay: {
          open: 1,
          close: getDelay(initialDelay, 'close')
        }
      });
      if (currentId !== id) {
        onOpenChange(false);
      }
    }
  }, [id, onOpenChange, setState, currentId, initialDelay]);
  floating_ui_react_esm_index(() => {
    function unset() {
      onOpenChange(false);
      setState({
        delay: initialDelay,
        currentId: null
      });
    }
    if (!open && currentId === id) {
      if (timeoutMs) {
        const timeout = window.setTimeout(unset, timeoutMs);
        return () => {
          clearTimeout(timeout);
        };
      } else {
        unset();
      }
    }
  }, [open, setState, currentId, id, onOpenChange, initialDelay, timeoutMs]);
  floating_ui_react_esm_index(() => {
    if (open) {
      setCurrentId(id);
    }
  }, [open, setCurrentId, id]);
};

/**
 * Find the real active element. Traverses into shadowRoots.
 */
function activeElement(doc) {
  let activeElement = doc.activeElement;
  while (((_activeElement = activeElement) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
    var _activeElement, _activeElement$shadow;
    activeElement = activeElement.shadowRoot.activeElement;
  }
  return activeElement;
}

let rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}

function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find(node => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find(node => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}

function getChildren(nodes, id) {
  let allChildren = nodes.filter(node => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  });
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter(node => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some(n => {
        var _node$context2;
        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    });
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}

function getTarget(event) {
  if ('composedPath' in event) {
    return event.composedPath()[0];
  }

  // TS thinks `event` is of type never as it assumes all browsers support
  // `composedPath()`, but browsers without shadow DOM don't.
  return event.target;
}

const TYPEABLE_SELECTOR = (/* unused pure expression or super */ null && ("input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])"));
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}

function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

const getTabbableOptions = () => ({
  getShadowRoot: true,
  displayCheck:
  // JSDOM does not support the `tabbable` library. To solve this we can
  // check if `ResizeObserver` is a real function (not polyfilled), which
  // determines if the current environment is JSDOM-like.
  typeof ResizeObserver === 'function' && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none'
});
function getTabbableIn(container, direction) {
  const allTabbable = tabbable(container, getTabbableOptions());
  if (direction === 'prev') {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf(activeElement(getDocument(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getNextTabbable() {
  return getTabbableIn(document.body, 'next');
}
function getPreviousTabbable() {
  return getTabbableIn(document.body, 'prev');
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container, getTabbableOptions());
  tabbableElements.forEach(element => {
    element.dataset.tabindex = element.getAttribute('tabindex') || '';
    element.setAttribute('tabindex', '-1');
  });
}
function enableFocusInside(container) {
  const elements = container.querySelectorAll('[data-tabindex]');
  elements.forEach(element => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute('tabindex', tabindex);
    } else {
      element.removeAttribute('tabindex');
    }
  });
}

// See Diego Haz's Sandbox for making this logic work well on Safari/iOS:
// https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/FocusTrap.tsx

const HIDDEN_STYLES = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'fixed',
  whiteSpace: 'nowrap',
  width: '1px',
  top: 0,
  left: 0
};
let timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === 'Tab') {
    event.target;
    clearTimeout(timeoutId);
  }
}
const FocusGuard = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function FocusGuard(props, ref) {
  const [role, setRole] = React.useState();
  floating_ui_react_esm_index(() => {
    if (isSafari()) {
      // Unlike other screen readers such as NVDA and JAWS, the virtual cursor
      // on VoiceOver does trigger the onFocus event, so we can use the focus
      // trap element. On Safari, only buttons trigger the onFocus event.
      // NB: "group" role in the Sandbox no longer appears to work, must be a
      // button role.
      setRole('button');
    }
    document.addEventListener('keydown', setActiveElementOnTab);
    return () => {
      document.removeEventListener('keydown', setActiveElementOnTab);
    };
  }, []);
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    ref: ref,
    tabIndex: 0
    // Role is only for VoiceOver
    ,
    role: role,
    "aria-hidden": role ? undefined : true,
    "data-floating-ui-focus-guard": "",
    style: HIDDEN_STYLES
  }));
})));

const PortalContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext(null)));
function useFloatingPortalNode(_temp) {
  let {
    id,
    root
  } = _temp === void 0 ? {} : _temp;
  const [portalNode, setPortalNode] = React.useState(null);
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const data = React.useMemo(() => ({
    id,
    root,
    portalContext,
    uniqueId
  }), [id, root, portalContext, uniqueId]);
  const dataRef = React.useRef();
  floating_ui_react_esm_index(() => {
    return () => {
      portalNode == null ? void 0 : portalNode.remove();
    };
  }, [portalNode, data]);
  floating_ui_react_esm_index(() => {
    if (dataRef.current === data) return;
    dataRef.current = data;
    const {
      id,
      root,
      portalContext,
      uniqueId
    } = data;
    const existingIdRoot = id ? document.getElementById(id) : null;
    const attr = 'data-floating-ui-portal';
    if (existingIdRoot) {
      const subRoot = document.createElement('div');
      subRoot.id = uniqueId;
      subRoot.setAttribute(attr, '');
      existingIdRoot.appendChild(subRoot);
      setPortalNode(subRoot);
    } else {
      let container = (portalContext == null ? void 0 : portalContext.portalNode) || root || document.body;
      let idWrapper = null;
      if (id) {
        idWrapper = document.createElement('div');
        idWrapper.id = id;
        container.appendChild(idWrapper);
      }
      const subRoot = document.createElement('div');
      subRoot.id = uniqueId;
      subRoot.setAttribute(attr, '');
      container = idWrapper || container;
      container.appendChild(subRoot);
      setPortalNode(subRoot);
    }
  }, [data]);
  return portalNode;
}
/**
 * Portals the floating element into a given container element — by default,
 * outside of the app root and into the body.
 * @see https://floating-ui.com/docs/FloatingPortal
 */
function FloatingPortal(_ref) {
  let {
    children,
    id,
    root = null,
    preserveTabOrder = true
  } = _ref;
  const portalNode = useFloatingPortalNode({
    id,
    root
  });
  const [focusManagerState, setFocusManagerState] = React.useState(null);
  const beforeOutsideRef = React.useRef(null);
  const afterOutsideRef = React.useRef(null);
  const beforeInsideRef = React.useRef(null);
  const afterInsideRef = React.useRef(null);
  const shouldRenderGuards =
  // The FocusManager and therefore floating element are currently open/
  // rendered.
  !!focusManagerState &&
  // Guards are only for non-modal focus management.
  !focusManagerState.modal &&
  // Don't render if unmount is transitioning.
  focusManagerState.open && preserveTabOrder && !!(root || portalNode);

  // https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/TabbablePortal.tsx
  React.useEffect(() => {
    if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
      return;
    }

    // Make sure elements inside the portal element are tabbable only when the
    // portal has already been focused, either by tabbing into a focus trap
    // element outside or using the mouse.
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === 'focusin';
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    // Listen to the event on the capture phase so they run before the focus
    // trap elements onFocus prop is called.
    portalNode.addEventListener('focusin', onFocus, true);
    portalNode.addEventListener('focusout', onFocus, true);
    return () => {
      portalNode.removeEventListener('focusin', onFocus, true);
      portalNode.removeEventListener('focusout', onFocus, true);
    };
  }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
  return /*#__PURE__*/React.createElement(PortalContext.Provider, {
    value: React.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode])
  }, shouldRenderGuards && portalNode && /*#__PURE__*/React.createElement(FocusGuard, {
    "data-type": "outside",
    ref: beforeOutsideRef,
    onFocus: event => {
      if (isOutsideEvent(event, portalNode)) {
        var _beforeInsideRef$curr;
        (_beforeInsideRef$curr = beforeInsideRef.current) == null ? void 0 : _beforeInsideRef$curr.focus();
      } else {
        const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        prevTabbable == null ? void 0 : prevTabbable.focus();
      }
    }
  }), shouldRenderGuards && portalNode && /*#__PURE__*/React.createElement("span", {
    "aria-owns": portalNode.id,
    style: HIDDEN_STYLES
  }), portalNode && /*#__PURE__*/createPortal(children, portalNode), shouldRenderGuards && portalNode && /*#__PURE__*/React.createElement(FocusGuard, {
    "data-type": "outside",
    ref: afterOutsideRef,
    onFocus: event => {
      if (isOutsideEvent(event, portalNode)) {
        var _afterInsideRef$curre;
        (_afterInsideRef$curre = afterInsideRef.current) == null ? void 0 : _afterInsideRef$curre.focus();
      } else {
        const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        nextTabbable == null ? void 0 : nextTabbable.focus();
        (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false));
      }
    }
  }));
}
const usePortalContext = () => React.useContext(PortalContext);

const VisuallyHiddenDismiss = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function VisuallyHiddenDismiss(props, ref) {
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    type: "button",
    ref: ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
})));
/**
 * Provides focus management for the floating element.
 * @see https://floating-ui.com/docs/FloatingFocusManager
 */
function FloatingFocusManager(props) {
  const {
    context,
    children,
    order = ['content'],
    guards = true,
    initialFocus = 0,
    returnFocus = true,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = props;
  const {
    open,
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    elements: {
      domReference,
      floating
    }
  } = context;
  const orderRef = floating_ui_react_esm_useLatestRef(order);
  const initialFocusRef = floating_ui_react_esm_useLatestRef(initialFocus);
  const returnFocusRef = floating_ui_react_esm_useLatestRef(returnFocus);
  const tree = useFloatingTree();
  const portalContext = usePortalContext();

  // Controlled by `useListNavigation`.
  const ignoreInitialFocus = typeof initialFocus === 'number' && initialFocus < 0;
  const startDismissButtonRef = React.useRef(null);
  const endDismissButtonRef = React.useRef(null);
  const preventReturnFocusRef = React.useRef(false);
  const previouslyFocusedElementRef = React.useRef(null);
  const isPointerDownRef = React.useRef(false);
  const isInsidePortal = portalContext != null;

  // If the reference is a combobox and is typeable (e.g. input/textarea),
  // there are different focus semantics. The guards should not be rendered, but
  // aria-hidden should be applied to all nodes still. Further, the visually
  // hidden dismiss button should only appear at the end of the list, not the
  // start.
  const isTypeableCombobox = domReference && domReference.getAttribute('role') === 'combobox' && isTypeableElement(domReference);
  const getTabbableContent = React.useCallback(function (container) {
    if (container === void 0) {
      container = floating;
    }
    return container ? tabbable(container, getTabbableOptions()) : [];
  }, [floating]);
  const getTabbableElements = React.useCallback(container => {
    const content = getTabbableContent(container);
    return orderRef.current.map(type => {
      if (domReference && type === 'reference') {
        return domReference;
      }
      if (floating && type === 'floating') {
        return floating;
      }
      return content;
    }).filter(Boolean).flat();
  }, [domReference, floating, orderRef, getTabbableContent]);
  React.useEffect(() => {
    if (!modal) {
      return;
    }
    function onKeyDown(event) {
      if (event.key === 'Tab') {
        // The focus guards have nothing to focus, so we need to stop the event.
        if (contains(floating, activeElement(getDocument(floating))) && getTabbableContent().length === 0 && !isTypeableCombobox) {
          stopEvent(event);
        }
        const els = getTabbableElements();
        const target = getTarget(event);
        if (orderRef.current[0] === 'reference' && target === domReference) {
          stopEvent(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === 'floating' && target === floating && event.shiftKey) {
          stopEvent(event);
          enqueueFocus(els[0]);
        }
      }
    }
    const doc = getDocument(floating);
    doc.addEventListener('keydown', onKeyDown);
    return () => {
      doc.removeEventListener('keydown', onKeyDown);
    };
  }, [domReference, floating, modal, orderRef, refs, isTypeableCombobox, getTabbableContent, getTabbableElements]);
  React.useEffect(() => {
    if (!closeOnFocusOut) {
      return;
    }

    // In Safari, buttons lose focus when pressing them.
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      queueMicrotask(() => {
        const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute('data-floating-ui-focus-guard') || tree && (getChildren(tree.nodesRef.current, nodeId).find(node => {
          var _node$context, _node$context2;
          return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
        }) || getAncestors(tree.nodesRef.current, nodeId).find(node => {
          var _node$context3, _node$context4;
          return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
        })));

        // Focus did not move inside the floating tree, and there are no tabbable
        // portal guards to handle closing.
        if (relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current &&
        // Fix React 18 Strict Mode returnFocus due to double rendering.
        relatedTarget !== previouslyFocusedElementRef.current) {
          preventReturnFocusRef.current = true;
          onOpenChange(false);
        }
      });
    }
    if (floating && isHTMLElement(domReference)) {
      domReference.addEventListener('focusout', handleFocusOutside);
      domReference.addEventListener('pointerdown', handlePointerDown);
      !modal && floating.addEventListener('focusout', handleFocusOutside);
      return () => {
        domReference.removeEventListener('focusout', handleFocusOutside);
        domReference.removeEventListener('pointerdown', handlePointerDown);
        !modal && floating.removeEventListener('focusout', handleFocusOutside);
      };
    }
  }, [domReference, floating, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut]);
  React.useEffect(() => {
    var _portalContext$portal;
    // Don't hide portals nested within the parent portal.
    const portalNodes = Array.from((portalContext == null ? void 0 : (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll('[data-floating-ui-portal]')) || []);
    function getDismissButtons() {
      return [startDismissButtonRef.current, endDismissButtonRef.current].filter(Boolean);
    }
    if (floating && modal) {
      const insideNodes = [floating, ...portalNodes, ...getDismissButtons()];
      const cleanup = hideOthers(orderRef.current.includes('reference') || isTypeableCombobox ? insideNodes.concat(domReference || []) : insideNodes);
      return () => {
        cleanup();
      };
    }
  }, [domReference, floating, modal, orderRef, portalContext, isTypeableCombobox]);
  React.useEffect(() => {
    if (modal && !guards && floating) {
      const tabIndexValues = [];
      const options = getTabbableOptions();
      const allTabbable = tabbable(getDocument(floating).body, options);
      const floatingTabbable = getTabbableElements();

      // Exclude all tabbable elements that are part of the order
      const elements = allTabbable.filter(el => !floatingTabbable.includes(el));
      elements.forEach((el, i) => {
        tabIndexValues[i] = el.getAttribute('tabindex');
        el.setAttribute('tabindex', '-1');
      });
      return () => {
        elements.forEach((el, i) => {
          const value = tabIndexValues[i];
          if (value == null) {
            el.removeAttribute('tabindex');
          } else {
            el.setAttribute('tabindex', value);
          }
        });
      };
    }
  }, [floating, modal, guards, getTabbableElements]);
  floating_ui_react_esm_index(() => {
    if (!floating) return;
    const doc = getDocument(floating);
    const previouslyFocusedElement = activeElement(doc);

    // Wait for any layout effect state setters to execute to set `tabIndex`.
    queueMicrotask(() => {
      const focusableElements = getTabbableElements(floating);
      const initialFocusValue = initialFocusRef.current;
      const elToFocus = (typeof initialFocusValue === 'number' ? focusableElements[initialFocusValue] : initialFocusValue.current) || floating;
      const focusAlreadyInsideFloatingEl = contains(floating, previouslyFocusedElement);
      if (!ignoreInitialFocus && !focusAlreadyInsideFloatingEl && open) {
        enqueueFocus(elToFocus, {
          preventScroll: elToFocus === floating
        });
      }
    });
  }, [open, floating, ignoreInitialFocus, getTabbableElements, initialFocusRef]);
  floating_ui_react_esm_index(() => {
    if (!floating) return;
    let preventReturnFocusScroll = false;
    const doc = getDocument(floating);
    const previouslyFocusedElement = activeElement(doc);
    const contextData = dataRef.current;
    previouslyFocusedElementRef.current = previouslyFocusedElement;

    // Dismissing via outside press should always ignore `returnFocus` to
    // prevent unwanted scrolling.
    function onDismiss(payload) {
      if (payload.type === 'escapeKey' && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (['referencePress', 'escapeKey'].includes(payload.type)) {
        return;
      }
      const returnFocus = payload.data.returnFocus;
      if (typeof returnFocus === 'object') {
        preventReturnFocusRef.current = false;
        preventReturnFocusScroll = returnFocus.preventScroll;
      } else {
        preventReturnFocusRef.current = !returnFocus;
      }
    }
    events.on('dismiss', onDismiss);
    return () => {
      events.off('dismiss', onDismiss);
      const activeEl = activeElement(doc);
      const shouldFocusReference = contains(floating, activeEl) || tree && getChildren(tree.nodesRef.current, nodeId).some(node => {
        var _node$context5;
        return contains((_node$context5 = node.context) == null ? void 0 : _node$context5.elements.floating, activeEl);
      }) || contextData.openEvent && ['click', 'mousedown'].includes(contextData.openEvent.type);
      if (shouldFocusReference && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (
      // eslint-disable-next-line react-hooks/exhaustive-deps
      returnFocusRef.current && isHTMLElement(previouslyFocusedElementRef.current) && !preventReturnFocusRef.current) {
        enqueueFocus(previouslyFocusedElementRef.current, {
          // When dismissing nested floating elements, by the time the rAF has
          // executed, the menus will all have been unmounted. When they try
          // to get focused, the calls get ignored — leaving the root
          // reference focused as desired.
          cancelPrevious: false,
          preventScroll: preventReturnFocusScroll
        });
      }
    };
  }, [floating, returnFocusRef, dataRef, refs, events, tree, nodeId]);

  // Synchronize the `context` & `modal` value to the FloatingPortal context.
  // It will decide whether or not it needs to render its own guards.
  floating_ui_react_esm_index(() => {
    if (!portalContext) return;
    portalContext.setFocusManagerState({
      ...context,
      modal,
      closeOnFocusOut,
      open
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [portalContext, modal, open, closeOnFocusOut, context]);
  floating_ui_react_esm_index(() => {
    if (floating && typeof MutationObserver === 'function') {
      const handleMutation = () => {
        const tabIndex = floating.getAttribute('tabindex');
        if (orderRef.current.includes('floating') || activeElement(getDocument(floating)) !== refs.domReference.current && getTabbableContent().length === 0) {
          if (tabIndex !== '0') {
            floating.setAttribute('tabindex', '0');
          }
        } else if (tabIndex !== '-1') {
          floating.setAttribute('tabindex', '-1');
        }
      };
      handleMutation();
      const observer = new MutationObserver(handleMutation);
      observer.observe(floating, {
        childList: true,
        subtree: true,
        attributes: true
      });
      return () => {
        observer.disconnect();
      };
    }
  }, [floating, refs, orderRef, getTabbableContent]);
  function renderDismissButton(location) {
    return visuallyHiddenDismiss && modal ? /*#__PURE__*/React.createElement(VisuallyHiddenDismiss, {
      ref: location === 'start' ? startDismissButtonRef : endDismissButtonRef,
      onClick: () => onOpenChange(false)
    }, typeof visuallyHiddenDismiss === 'string' ? visuallyHiddenDismiss : 'Dismiss') : null;
  }
  const shouldRenderGuards = guards && !isTypeableCombobox && (isInsidePortal || modal);
  return /*#__PURE__*/React.createElement(React.Fragment, null, shouldRenderGuards && /*#__PURE__*/React.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: event => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === 'reference' ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null ? void 0 : nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null ? void 0 : _portalContext$before.focus();
        }
      }
    }
  }), !isTypeableCombobox && renderDismissButton('start'), children, renderDismissButton('end'), shouldRenderGuards && /*#__PURE__*/React.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: event => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        if (closeOnFocusOut) {
          preventReturnFocusRef.current = true;
        }
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null ? void 0 : prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null ? void 0 : _portalContext$afterO.focus();
        }
      }
    }
  }));
}

function sortByDocumentPosition(a, b) {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
const FloatingListContext = /*#__PURE__*/external_react_.createContext({
  register: () => {},
  unregister: () => {},
  map: /*#__PURE__*/new Map(),
  elementsRef: {
    current: []
  }
});
/**
 * Provides context for a list of items within the floating element.
 * @see https://floating-ui.com/docs/FloatingList
 */
function FloatingList(_ref) {
  let {
    children,
    elementsRef,
    labelsRef
  } = _ref;
  const [map, setMap] = React.useState(() => new Map());
  const register = React.useCallback(node => {
    setMap(prevMap => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React.useCallback(node => {
    setMap(prevMap => {
      const map = new Map(prevMap);
      map.delete(node);
      return map;
    });
  }, []);
  floating_ui_react_esm_index(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index) => {
      newMap.set(node, index);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return /*#__PURE__*/React.createElement(FloatingListContext.Provider, {
    value: {
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }
  }, children);
}
function useListItem(_temp) {
  let {
    label
  } = _temp === void 0 ? {} : _temp;
  const [index$1, setIndex] = React.useState(null);
  const componentRef = React.useRef(null);
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React.useContext(FloatingListContext);
  const ref = React.useCallback(node => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== undefined;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  floating_ui_react_esm_index(() => {
    const node = componentRef.current;
    if (!node) return;
    register(node);
    return () => {
      unregister(node);
    };
  }, [register, unregister]);
  floating_ui_react_esm_index(() => {
    const index = componentRef.current ? map.get(componentRef.current) : null;
    if (index != null) {
      setIndex(index);
    }
  }, [map]);
  return React.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}

const identifier = 'data-floating-ui-scroll-lock';

/**
 * Provides base styling for a fixed overlay element to dim content or block
 * pointer events behind a floating element.
 * It's a regular `<div>`, so it can be styled via any CSS solution you prefer.
 * @see https://floating-ui.com/docs/FloatingOverlay
 */
const FloatingOverlay = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function FloatingOverlay(_ref, ref) {
  let {
    lockScroll = false,
    ...rest
  } = _ref;
  floating_ui_react_esm_index(() => {
    var _window$visualViewpor, _window$visualViewpor2;
    if (!lockScroll) {
      return;
    }
    const alreadyLocked = document.body.hasAttribute(identifier);
    if (alreadyLocked) {
      return;
    }
    document.body.setAttribute(identifier, '');

    // RTL <body> scrollbar
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? 'paddingLeft' : 'paddingRight';
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Only iOS doesn't respect `overflow: hidden` on document.body, and this
    // technique has fewer side effects.
    if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
      Object.assign(document.body.style, {
        overflow: 'hidden',
        [paddingProp]: scrollbarWidth + "px"
      });
      return () => {
        document.body.removeAttribute(identifier);
        Object.assign(document.body.style, {
          overflow: '',
          [paddingProp]: ''
        });
      };
    }

    // iOS 12 does not support `visualViewport`.
    const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
    const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    Object.assign(document.body.style, {
      position: 'fixed',
      overflow: 'hidden',
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: '0',
      [paddingProp]: scrollbarWidth + "px"
    });
    return () => {
      Object.assign(document.body.style, {
        position: '',
        overflow: '',
        top: '',
        left: '',
        right: '',
        [paddingProp]: ''
      });
      document.body.removeAttribute(identifier);
      window.scrollTo(scrollX, scrollY);
    };
  }, [lockScroll]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref
  }, rest, {
    style: {
      position: 'fixed',
      overflow: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
})));

function isButtonTarget(event) {
  return isHTMLElement(event.target) && event.target.tagName === 'BUTTON';
}
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
/**
 * Opens or closes the floating element when clicking the reference element.
 * @see https://floating-ui.com/docs/useClick
 */
function useClick(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = context;
  const {
    enabled = true,
    event: eventOption = 'click',
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = props;
  const pointerTypeRef = React.useRef();
  const didKeyDownRef = React.useRef(false);
  return React.useMemo(() => {
    if (!enabled) return {};
    return {
      reference: {
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onMouseDown(event) {
          // Ignore all buttons except for the "main" button.
          // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
          if (event.button !== 0) {
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (eventOption === 'click') {
            return;
          }
          if (open) {
            if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === 'mousedown' : true)) {
              onOpenChange(false);
            }
          } else {
            // Prevent stealing focus from the floating element
            event.preventDefault();
            onOpenChange(true);
          }
          dataRef.current.openEvent = event.nativeEvent;
        },
        onClick(event) {
          if (eventOption === 'mousedown' && pointerTypeRef.current) {
            pointerTypeRef.current = undefined;
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (open) {
            if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === 'click' : true)) {
              onOpenChange(false);
            }
          } else {
            onOpenChange(true);
          }
          dataRef.current.openEvent = event.nativeEvent;
        },
        onKeyDown(event) {
          pointerTypeRef.current = undefined;
          if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) {
            return;
          }
          if (event.key === ' ' && !isSpaceIgnored(domReference)) {
            // Prevent scrolling
            event.preventDefault();
            didKeyDownRef.current = true;
          }
          if (event.key === 'Enter') {
            if (open) {
              if (toggle) {
                onOpenChange(false);
              }
            } else {
              onOpenChange(true);
            }
          }
        },
        onKeyUp(event) {
          if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference)) {
            return;
          }
          if (event.key === ' ' && didKeyDownRef.current) {
            didKeyDownRef.current = false;
            if (open) {
              if (toggle) {
                onOpenChange(false);
              }
            } else {
              onOpenChange(true);
            }
          }
        }
      }
    };
  }, [enabled, dataRef, eventOption, ignoreMouse, keyboardHandlers, domReference, toggle, open, onOpenChange]);
}

// `toString()` prevents bundlers from trying to `import { useInsertionEffect } from 'react'`
const useInsertionEffect = external_react_[/*#__PURE__*/'useInsertionEffect'.toString()];
const useSafeInsertionEffect = useInsertionEffect || (fn => fn());
function useEvent(callback) {
  const ref = external_react_.useRef(() => {
    if (false) {}
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return external_react_.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}

function createVirtualElement(domRef, data) {
  let offsetX = null;
  let offsetY = null;
  let isAutoUpdateEvent = false;
  return {
    contextElement: domRef.current || undefined,
    getBoundingClientRect() {
      var _domRef$current, _data$dataRef$current;
      const domRect = ((_domRef$current = domRef.current) == null ? void 0 : _domRef$current.getBoundingClientRect()) || {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      };
      const isXAxis = data.axis === 'x' || data.axis === 'both';
      const isYAxis = data.axis === 'y' || data.axis === 'both';
      const canTrackCursorOnAutoUpdate = ['mouseenter', 'mousemove'].includes(((_data$dataRef$current = data.dataRef.current.openEvent) == null ? void 0 : _data$dataRef$current.type) || '') && data.pointerType !== 'touch';
      let width = domRect.width;
      let height = domRect.height;
      let x = domRect.x;
      let y = domRect.y;
      if (offsetX == null && data.x && isXAxis) {
        offsetX = domRect.x - data.x;
      }
      if (offsetY == null && data.y && isYAxis) {
        offsetY = domRect.y - data.y;
      }
      x -= offsetX || 0;
      y -= offsetY || 0;
      width = 0;
      height = 0;
      if (!isAutoUpdateEvent || canTrackCursorOnAutoUpdate) {
        width = data.axis === 'y' ? domRect.width : 0;
        height = data.axis === 'x' ? domRect.height : 0;
        x = isXAxis && data.x != null ? data.x : x;
        y = isYAxis && data.y != null ? data.y : y;
      } else if (isAutoUpdateEvent && !canTrackCursorOnAutoUpdate) {
        height = data.axis === 'x' ? domRect.height : height;
        width = data.axis === 'y' ? domRect.width : width;
      }
      isAutoUpdateEvent = true;
      return {
        width,
        height,
        x,
        y,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x
      };
    }
  };
}
function isMouseBasedEvent(event) {
  return event != null && event.clientX != null;
}
/**
 * Positions the floating element relative to a client point (in the viewport),
 * such as the mouse position. By default, it follows the mouse cursor.
 * @see https://floating-ui.com/docs/useClientPoint
 */
function useClientPoint(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    refs,
    dataRef,
    elements: {
      floating
    }
  } = context;
  const {
    enabled = true,
    axis = 'both',
    x = null,
    y = null
  } = props;
  const initialRef = React.useRef(false);
  const cleanupListenerRef = React.useRef(null);
  const [pointerType, setPointerType] = React.useState();
  const [reactive, setReactive] = React.useState([]);
  const setReference = useEvent((x, y) => {
    if (initialRef.current) return;

    // Prevent setting if the open event was not a mouse-like one
    // (e.g. focus to open, then hover over the reference element).
    // Only apply if the event exists.
    if (dataRef.current.openEvent && !isMouseBasedEvent(dataRef.current.openEvent)) {
      return;
    }
    refs.setPositionReference(createVirtualElement(refs.domReference, {
      x,
      y,
      axis,
      dataRef,
      pointerType
    }));
  });
  const handleReferenceEnterOrMove = useEvent(event => {
    if (x != null || y != null) return;
    if (!open) {
      setReference(event.clientX, event.clientY);
    } else if (!cleanupListenerRef.current) {
      // If there's no cleanup, there's no listener, but we want to ensure
      // we add the listener if the cursor landed on the floating element and
      // then back on the reference (i.e. it's interactive).
      setReactive([]);
    }
  });

  // If the pointer is a mouse-like pointer, we want to continue following the
  // mouse even if the floating element is transitioning out. On touch
  // devices, this is undesirable because the floating element will move to
  // the dismissal touch point.
  const openCheck = isMouseLikePointerType(pointerType) ? floating : open;
  const addListener = React.useCallback(() => {
    // Explicitly specified `x`/`y` coordinates shouldn't add a listener.
    if (!openCheck || !enabled || x != null || y != null) return;
    const win = getWindow(refs.floating.current);
    function handleMouseMove(event) {
      const target = getTarget(event);
      if (!contains(refs.floating.current, target)) {
        setReference(event.clientX, event.clientY);
      } else {
        win.removeEventListener('mousemove', handleMouseMove);
        cleanupListenerRef.current = null;
      }
    }
    if (!dataRef.current.openEvent || isMouseBasedEvent(dataRef.current.openEvent)) {
      win.addEventListener('mousemove', handleMouseMove);
      const cleanup = () => {
        win.removeEventListener('mousemove', handleMouseMove);
        cleanupListenerRef.current = null;
      };
      cleanupListenerRef.current = cleanup;
      return cleanup;
    }
    refs.setPositionReference(refs.domReference.current);
  }, [dataRef, enabled, openCheck, refs, setReference, x, y]);
  React.useEffect(() => {
    return addListener();
  }, [addListener, reactive]);
  React.useEffect(() => {
    if (enabled && !floating) {
      initialRef.current = false;
    }
  }, [enabled, floating]);
  React.useEffect(() => {
    if (!enabled && open) {
      initialRef.current = true;
    }
  }, [enabled, open]);
  floating_ui_react_esm_index(() => {
    if (enabled && (x != null || y != null)) {
      initialRef.current = false;
      setReference(x, y);
    }
  }, [enabled, x, y, setReference]);
  return React.useMemo(() => {
    if (!enabled) return {};
    function setPointerTypeRef(_ref) {
      let {
        pointerType
      } = _ref;
      setPointerType(pointerType);
    }
    return {
      reference: {
        onPointerDown: setPointerTypeRef,
        onPointerEnter: setPointerTypeRef,
        onMouseMove: handleReferenceEnterOrMove,
        onMouseEnter: handleReferenceEnterOrMove
      }
    };
  }, [enabled, handleReferenceEnterOrMove]);
}

/**
 * Check whether the event.target is within the provided node. Uses event.composedPath if available for custom element support.
 *
 * @param event The event whose target/composedPath to check
 * @param node The node to check against
 * @returns Whether the event.target/composedPath is within the node.
 */
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ('composedPath' in event) {
    return event.composedPath().includes(node);
  }

  // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't
  const e = event;
  return e.target != null && node.contains(e.target);
}

const bubbleHandlerKeys = {
  pointerdown: 'onPointerDown',
  mousedown: 'onMouseDown',
  click: 'onClick'
};
const captureHandlerKeys = {
  pointerdown: 'onPointerDownCapture',
  mousedown: 'onMouseDownCapture',
  click: 'onClickCapture'
};
const normalizeBubblesProp = bubbles => {
  var _bubbles$escapeKey, _bubbles$outsidePress;
  return {
    escapeKeyBubbles: typeof bubbles === 'boolean' ? bubbles : (_bubbles$escapeKey = bubbles == null ? void 0 : bubbles.escapeKey) != null ? _bubbles$escapeKey : false,
    outsidePressBubbles: typeof bubbles === 'boolean' ? bubbles : (_bubbles$outsidePress = bubbles == null ? void 0 : bubbles.outsidePress) != null ? _bubbles$outsidePress : true
  };
};
/**
 * Closes the floating element when a dismissal is requested — by default, when
 * the user presses the `escape` key or outside of the floating element.
 * @see https://floating-ui.com/docs/useDismiss
 */
function useDismiss(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    events,
    nodeId,
    elements: {
      reference,
      domReference,
      floating
    },
    dataRef
  } = context;
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = 'pointerdown',
    referencePress = false,
    referencePressEvent = 'pointerdown',
    ancestorScroll = false,
    bubbles
  } = props;
  const tree = useFloatingTree();
  const nested = useFloatingParentNodeId() != null;
  const outsidePressFn = useEvent(typeof unstable_outsidePress === 'function' ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === 'function' ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = external_react_.useRef(false);
  const {
    escapeKeyBubbles,
    outsidePressBubbles
  } = normalizeBubblesProp(bubbles);
  const closeOnEscapeKeyDown = useEvent(event => {
    if (!open || !enabled || !escapeKey || event.key !== 'Escape') {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      event.stopPropagation();
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach(child => {
          var _child$context;
          if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    events.emit('dismiss', {
      type: 'escapeKey',
      data: {
        returnFocus: {
          preventScroll: false
        }
      }
    });
    onOpenChange(false);
  });
  const closeOnPressOutside = useEvent(event => {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = insideReactTreeRef.current;
    insideReactTreeRef.current = false;
    if (insideReactTree) {
      return;
    }
    if (typeof outsidePress === 'function' && !outsidePress(event)) {
      return;
    }
    const target = getTarget(event);

    // Check if the click occurred on the scrollbar
    if (isHTMLElement(target) && floating) {
      // In Firefox, `target.scrollWidth > target.clientWidth` for inline
      // elements.
      const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
      const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
      let xCond = canScrollY && event.offsetX > target.clientWidth;

      // In some browsers it is possible to change the <body> (or window)
      // scrollbar to the left side, but is very rare and is difficult to
      // check for. Plus, for modal dialogs with backdrops, it is more
      // important that the backdrop is checked but not so much the window.
      if (canScrollY) {
        const isRTL = getWindow(floating).getComputedStyle(target).direction === 'rtl';
        if (isRTL) {
          xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
        }
      }
      if (xCond || canScrollX && event.offsetY > target.clientHeight) {
        return;
      }
    }
    const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some(node => {
      var _node$context;
      return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
    });
    if (isEventTargetWithin(event, floating) || isEventTargetWithin(event, domReference) || targetIsInsideChildren) {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (children.length > 0) {
      let shouldDismiss = true;
      children.forEach(child => {
        var _child$context2;
        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
          shouldDismiss = false;
          return;
        }
      });
      if (!shouldDismiss) {
        return;
      }
    }
    events.emit('dismiss', {
      type: 'outsidePress',
      data: {
        returnFocus: nested ? {
          preventScroll: true
        } : isVirtualClick(event) || isVirtualPointerEvent(event)
      }
    });
    onOpenChange(false);
  });
  external_react_.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onScroll() {
      onOpenChange(false);
    }
    const doc = getDocument(floating);
    escapeKey && doc.addEventListener('keydown', closeOnEscapeKeyDown);
    outsidePress && doc.addEventListener(outsidePressEvent, closeOnPressOutside);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement(domReference)) {
        ancestors = W(domReference);
      }
      if (isElement(floating)) {
        ancestors = ancestors.concat(W(floating));
      }
      if (!isElement(reference) && reference && reference.contextElement) {
        ancestors = ancestors.concat(W(reference.contextElement));
      }
    }

    // Ignore the visual viewport for scrolling dismissal (allow pinch-zoom)
    ancestors = ancestors.filter(ancestor => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach(ancestor => {
      ancestor.addEventListener('scroll', onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener('keydown', closeOnEscapeKeyDown);
      outsidePress && doc.removeEventListener(outsidePressEvent, closeOnPressOutside);
      ancestors.forEach(ancestor => {
        ancestor.removeEventListener('scroll', onScroll);
      });
    };
  }, [dataRef, floating, domReference, reference, escapeKey, outsidePress, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, closeOnPressOutside]);
  external_react_.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  return external_react_.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onKeyDown: closeOnEscapeKeyDown,
        [bubbleHandlerKeys[referencePressEvent]]: () => {
          if (referencePress) {
            events.emit('dismiss', {
              type: 'referencePress',
              data: {
                returnFocus: false
              }
            });
            onOpenChange(false);
          }
        }
      },
      floating: {
        onKeyDown: closeOnEscapeKeyDown,
        [captureHandlerKeys[outsidePressEvent]]: () => {
          insideReactTreeRef.current = true;
        }
      }
    };
  }, [enabled, events, referencePress, outsidePressEvent, referencePressEvent, onOpenChange, closeOnEscapeKeyDown]);
}

/**
 * Opens the floating element while the reference element has focus, like CSS
 * `:focus`.
 * @see https://floating-ui.com/docs/useFocus
 */
function useFocus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    refs,
    elements: {
      floating,
      domReference
    }
  } = context;
  const {
    enabled = true,
    keyboardOnly = true
  } = props;
  const pointerTypeRef = external_react_.useRef('');
  const blockFocusRef = external_react_.useRef(false);
  const timeoutRef = external_react_.useRef();
  external_react_.useEffect(() => {
    if (!enabled) {
      return;
    }
    const doc = getDocument(floating);
    const win = doc.defaultView || window;

    // If the reference was focused and the user left the tab/window, and the
    // floating element was not open, the focus should be blocked when they
    // return to the tab/window.
    function onBlur() {
      if (!open && isHTMLElement(domReference) && domReference === activeElement(getDocument(domReference))) {
        blockFocusRef.current = true;
      }
    }
    win.addEventListener('blur', onBlur);
    return () => {
      win.removeEventListener('blur', onBlur);
    };
  }, [floating, domReference, open, enabled]);
  external_react_.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss(payload) {
      if (payload.type === 'referencePress' || payload.type === 'escapeKey') {
        blockFocusRef.current = true;
      }
    }
    events.on('dismiss', onDismiss);
    return () => {
      events.off('dismiss', onDismiss);
    };
  }, [events, enabled]);
  external_react_.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return external_react_.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(_ref) {
          let {
            pointerType
          } = _ref;
          pointerTypeRef.current = pointerType;
          blockFocusRef.current = !!(pointerType && keyboardOnly);
        },
        onMouseLeave() {
          blockFocusRef.current = false;
        },
        onFocus(event) {
          var _dataRef$current$open;
          if (blockFocusRef.current) {
            return;
          }

          // Dismiss with click should ignore the subsequent `focus` trigger,
          // but only if the click originated inside the reference element.
          if (event.type === 'focus' && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === 'mousedown' && dataRef.current.openEvent && isEventTargetWithin(dataRef.current.openEvent, domReference)) {
            return;
          }
          dataRef.current.openEvent = event.nativeEvent;
          onOpenChange(true);
        },
        onBlur(event) {
          blockFocusRef.current = false;
          const relatedTarget = event.relatedTarget;

          // Hit the non-modal focus management portal guard. Focus will be
          // moved into the floating element immediately after.
          const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute('data-floating-ui-focus-guard') && relatedTarget.getAttribute('data-type') === 'outside';

          // Wait for the window blur listener to fire.
          timeoutRef.current = setTimeout(() => {
            // When focusing the reference element (e.g. regular click), then
            // clicking into the floating element, prevent it from hiding.
            // Note: it must be focusable, e.g. `tabindex="-1"`.
            if (contains(refs.floating.current, relatedTarget) || contains(domReference, relatedTarget) || movedToFocusGuard) {
              return;
            }
            onOpenChange(false);
          });
        }
      }
    };
  }, [enabled, keyboardOnly, domReference, refs, dataRef, onOpenChange]);
}

let isPreventScrollSupported = false;
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
function isDifferentRow(index, cols, prevRow) {
  return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index) {
  return index < 0 || index >= listRef.current.length;
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index = startingIndex;
  do {
    var _list$index, _list$index2;
    index = index + (decrement ? -amount : amount);
  } while (index >= 0 && index <= list.length - 1 && (disabledIndices ? disabledIndices.includes(index) : list[index] == null || ((_list$index = list[index]) == null ? void 0 : _list$index.hasAttribute('disabled')) || ((_list$index2 = list[index]) == null ? void 0 : _list$index2.getAttribute('aria-disabled')) === 'true'));
  return index;
}
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case 'vertical':
      return vertical;
    case 'horizontal':
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === 'Enter' || key == ' ' || key === '';
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
/**
 * Adds arrow key-based navigation of a list of items, either using real DOM
 * focus or virtual focus.
 * @see https://floating-ui.com/docs/useListNavigation
 */
function useListNavigation(context, props) {
  const {
    open,
    onOpenChange,
    refs,
    elements: {
      domReference,
      floating
    }
  } = context;
  const {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = () => {},
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = 'auto',
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = undefined,
    orientation = 'vertical',
    cols = 1,
    scrollItemIntoView = true
  } = props;
  if (false) {}
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const onNavigate = useEvent(unstable_onNavigate);
  const focusItemOnOpenRef = React.useRef(focusItemOnOpen);
  const indexRef = React.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = React.useRef(null);
  const isPointerModalityRef = React.useRef(true);
  const previousOnNavigateRef = React.useRef(onNavigate);
  const previousMountedRef = React.useRef(!!floating);
  const forceSyncFocus = React.useRef(false);
  const forceScrollIntoViewRef = React.useRef(false);
  const disabledIndicesRef = floating_ui_react_esm_useLatestRef(disabledIndices);
  const latestOpenRef = floating_ui_react_esm_useLatestRef(open);
  const scrollItemIntoViewRef = floating_ui_react_esm_useLatestRef(scrollItemIntoView);
  const [activeId, setActiveId] = React.useState();
  const focusItem = useEvent(function (listRef, indexRef, forceScrollIntoView) {
    if (forceScrollIntoView === void 0) {
      forceScrollIntoView = false;
    }
    const item = listRef.current[indexRef.current];
    if (!item) return;
    if (virtual) {
      setActiveId(item.id);
    } else {
      enqueueFocus(item, {
        preventScroll: true,
        // Mac Safari does not move the virtual cursor unless the focus call
        // is sync. However, for the very first focus call, we need to wait
        // for the position to be ready in order to prevent unwanted
        // scrolling. This means the virtual cursor will not move to the first
        // item when first opening the floating element, but will on
        // subsequent calls. `preventScroll` is supported in modern Safari,
        // so we can use that instead.
        // iOS Safari must be async or the first item will not be focused.
        sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
      });
    }
    requestAnimationFrame(() => {
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      const shouldScrollIntoView = scrollIntoViewOptions && item && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        // JSDOM doesn't support `.scrollIntoView()` but it's widely supported
        // by all browsers.
        item.scrollIntoView == null ? void 0 : item.scrollIntoView(typeof scrollIntoViewOptions === 'boolean' ? {
          block: 'nearest',
          inline: 'nearest'
        } : scrollIntoViewOptions);
      }
    });
  });
  floating_ui_react_esm_index(() => {
    document.createElement('div').focus({
      get preventScroll() {
        isPreventScrollSupported = true;
        return false;
      }
    });
  }, []);

  // Sync `selectedIndex` to be the `activeIndex` upon opening the floating
  // element. Also, reset `activeIndex` upon closing the floating element.
  floating_ui_react_esm_index(() => {
    if (!enabled) {
      return;
    }
    if (open && floating) {
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        // Regardless of the pointer modality, we want to ensure the selected
        // item comes into view when the floating element is opened.
        forceScrollIntoViewRef.current = true;
        onNavigate(selectedIndex);
      }
    } else if (previousMountedRef.current) {
      // Since the user can specify `onNavigate` conditionally
      // (onNavigate: open ? setActiveIndex : setSelectedIndex),
      // we store and call the previous function.
      indexRef.current = -1;
      previousOnNavigateRef.current(null);
    }
  }, [enabled, open, floating, selectedIndex, onNavigate]);

  // Sync `activeIndex` to be the focused item while the floating element is
  // open.
  floating_ui_react_esm_index(() => {
    if (!enabled) {
      return;
    }
    if (open && floating) {
      if (activeIndex == null) {
        forceSyncFocus.current = false;
        if (selectedIndex != null) {
          return;
        }

        // Reset while the floating element was open (e.g. the list changed).
        if (previousMountedRef.current) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        }

        // Initial sync.
        if (!previousMountedRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          let runs = 0;
          const waitForListPopulated = () => {
            if (listRef.current[0] == null) {
              // Avoid letting the browser paint if possible on the first try,
              // otherwise use rAF. Don't try more than twice, since something
              // is wrong otherwise.
              if (runs < 2) {
                const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                scheduler(waitForListPopulated);
              }
              runs++;
            } else {
              indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
              keyRef.current = null;
              onNavigate(indexRef.current);
            }
          };
          waitForListPopulated();
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
        forceScrollIntoViewRef.current = false;
      }
    }
  }, [enabled, open, floating, activeIndex, selectedIndex, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);

  // Ensure the parent floating element has focus when a nested child closes
  // to allow arrow key navigation to work after the pointer leaves the child.
  floating_ui_react_esm_index(() => {
    if (!enabled) {
      return;
    }
    if (previousMountedRef.current && !floating && tree) {
      var _nodes$find, _nodes$find$context;
      const nodes = tree.nodesRef.current;
      const parent = (_nodes$find = nodes.find(node => node.id === parentId)) == null ? void 0 : (_nodes$find$context = _nodes$find.context) == null ? void 0 : _nodes$find$context.elements.floating;
      const activeEl = activeElement(getDocument(floating));
      const treeContainsActiveEl = nodes.some(node => node.context && contains(node.context.elements.floating, activeEl));
      if (parent && !treeContainsActiveEl) {
        parent.focus({
          preventScroll: true
        });
      }
    }
  }, [enabled, floating, tree, parentId]);
  floating_ui_react_esm_index(() => {
    previousOnNavigateRef.current = onNavigate;
    previousMountedRef.current = !!floating;
  });
  floating_ui_react_esm_index(() => {
    if (!open) {
      keyRef.current = null;
    }
  }, [open]);
  const hasActiveIndex = activeIndex != null;
  const item = React.useMemo(() => {
    function syncCurrentTarget(currentTarget) {
      if (!open) return;
      const index = listRef.current.indexOf(currentTarget);
      if (index !== -1) {
        onNavigate(index);
      }
    }
    const props = {
      onFocus(_ref) {
        let {
          currentTarget
        } = _ref;
        syncCurrentTarget(currentTarget);
      },
      onClick: _ref2 => {
        let {
          currentTarget
        } = _ref2;
        return currentTarget.focus({
          preventScroll: true
        });
      },
      // Safari
      ...(focusItemOnHover && {
        onMouseMove(_ref3) {
          let {
            currentTarget
          } = _ref3;
          syncCurrentTarget(currentTarget);
        },
        onPointerLeave(_ref4) {
          let {
            pointerType
          } = _ref4;
          if (!isPointerModalityRef.current || pointerType === 'touch') {
            return;
          }
          indexRef.current = -1;
          focusItem(listRef, indexRef);
          onNavigate(null);
          if (!virtual) {
            enqueueFocus(refs.floating.current, {
              preventScroll: true
            });
          }
        }
      })
    };
    return props;
  }, [open, refs, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
  return React.useMemo(() => {
    if (!enabled) {
      return {};
    }
    const disabledIndices = disabledIndicesRef.current;
    function onKeyDown(event) {
      isPointerModalityRef.current = false;
      forceSyncFocus.current = true;

      // If the floating element is animating out, ignore navigation. Otherwise,
      // the `activeIndex` gets set to 0 despite not being open so the next time
      // the user ArrowDowns, the first item won't be focused.
      if (!latestOpenRef.current && event.currentTarget === refs.floating.current) {
        return;
      }
      if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
        stopEvent(event);
        onOpenChange(false);
        if (isHTMLElement(domReference)) {
          domReference.focus();
        }
        return;
      }
      const currentIndex = indexRef.current;
      const minIndex = getMinIndex(listRef, disabledIndices);
      const maxIndex = getMaxIndex(listRef, disabledIndices);
      if (event.key === 'Home') {
        stopEvent(event);
        indexRef.current = minIndex;
        onNavigate(indexRef.current);
      }
      if (event.key === 'End') {
        stopEvent(event);
        indexRef.current = maxIndex;
        onNavigate(indexRef.current);
      }

      // Grid navigation.
      if (cols > 1) {
        const prevIndex = indexRef.current;
        if (event.key === ARROW_UP) {
          stopEvent(event);
          if (prevIndex === -1) {
            indexRef.current = maxIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              decrement: true,
              disabledIndices
            });
            if (loop && (prevIndex - cols < minIndex || indexRef.current < 0)) {
              const col = prevIndex % cols;
              const maxCol = maxIndex % cols;
              const offset = maxIndex - (maxCol - col);
              if (maxCol === col) {
                indexRef.current = maxIndex;
              } else {
                indexRef.current = maxCol > col ? offset : offset - cols;
              }
            }
          }
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }
          onNavigate(indexRef.current);
        }
        if (event.key === ARROW_DOWN) {
          stopEvent(event);
          if (prevIndex === -1) {
            indexRef.current = minIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              disabledIndices
            });
            if (loop && prevIndex + cols > maxIndex) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex % cols - cols,
                amount: cols,
                disabledIndices
              });
            }
          }
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }
          onNavigate(indexRef.current);
        }

        // Remains on the same row/column.
        if (orientation === 'both') {
          const prevRow = Math.floor(prevIndex / cols);
          if (event.key === ARROW_RIGHT) {
            stopEvent(event);
            if (prevIndex % cols !== cols - 1) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices
              });
              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex - prevIndex % cols - 1,
                  disabledIndices
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices
              });
            }
            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }
          if (event.key === ARROW_LEFT) {
            stopEvent(event);
            if (prevIndex % cols !== 0) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices,
                decrement: true
              });
              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex + (cols - prevIndex % cols),
                  decrement: true,
                  disabledIndices
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex + (cols - prevIndex % cols),
                decrement: true,
                disabledIndices
              });
            }
            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }
          const lastRow = Math.floor(maxIndex / cols) === prevRow;
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            if (loop && lastRow) {
              indexRef.current = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices
              });
            } else {
              indexRef.current = prevIndex;
            }
          }
          onNavigate(indexRef.current);
          return;
        }
      }
      if (isMainOrientationKey(event.key, orientation)) {
        stopEvent(event);

        // Reset the index if no item is focused.
        if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
          indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
          onNavigate(indexRef.current);
          return;
        }
        if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
          if (loop) {
            indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices
            });
          } else {
            indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices
            }));
          }
        } else {
          if (loop) {
            indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices
            });
          } else {
            indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices
            }));
          }
        }
        if (isIndexOutOfBounds(listRef, indexRef.current)) {
          onNavigate(null);
        } else {
          onNavigate(indexRef.current);
        }
      }
    }
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === 'auto' && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    function checkVirtualPointer(event) {
      // `pointerdown` fires first, reset the state then perform the checks.
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === 'auto' && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    const ariaActiveDescendantProp = virtual && open && hasActiveIndex && {
      'aria-activedescendant': activeId
    };
    return {
      reference: {
        ...ariaActiveDescendantProp,
        onKeyDown(event) {
          isPointerModalityRef.current = false;
          const isArrowKey = event.key.indexOf('Arrow') === 0;
          if (virtual && open) {
            return onKeyDown(event);
          }

          // If a floating element should not open on arrow key down, avoid
          // setting `activeIndex` while it's closed.
          if (!open && !openOnArrowKeyDown && isArrowKey) {
            return;
          }
          const isNavigationKey = isArrowKey || event.key === 'Enter' || event.key.trim() === '';
          const isMainKey = isMainOrientationKey(event.key, orientation);
          const isCrossKey = isCrossOrientationOpenKey(event.key, orientation, rtl);
          if (isNavigationKey) {
            keyRef.current = nested && isMainKey ? null : event.key;
          }
          if (nested) {
            if (isCrossKey) {
              stopEvent(event);
              if (open) {
                indexRef.current = getMinIndex(listRef, disabledIndices);
                onNavigate(indexRef.current);
              } else {
                onOpenChange(true);
              }
            }
            return;
          }
          if (isMainKey) {
            if (selectedIndex != null) {
              indexRef.current = selectedIndex;
            }
            stopEvent(event);
            if (!open && openOnArrowKeyDown) {
              onOpenChange(true);
            } else {
              onKeyDown(event);
            }
            if (open) {
              onNavigate(indexRef.current);
            }
          }
        },
        onFocus() {
          if (open) {
            onNavigate(null);
          }
        },
        onPointerDown: checkVirtualPointer,
        onMouseDown: checkVirtualMouse,
        onClick: checkVirtualMouse
      },
      floating: {
        'aria-orientation': orientation === 'both' ? undefined : orientation,
        ...ariaActiveDescendantProp,
        onKeyDown,
        onPointerMove() {
          isPointerModalityRef.current = true;
        }
      },
      item
    };
  }, [domReference, refs, activeId, disabledIndicesRef, latestOpenRef, listRef, enabled, orientation, rtl, virtual, open, hasActiveIndex, nested, selectedIndex, openOnArrowKeyDown, allowEscape, cols, loop, focusItemOnOpen, onNavigate, onOpenChange, item]);
}

/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 * @see https://floating-ui.com/docs/useMergeRefs
 */
function useMergeRefs(refs) {
  return React.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return value => {
      refs.forEach(ref => {
        if (typeof ref === 'function') {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

/**
 * Adds base screen reader props to the reference and floating elements for a
 * given floating element `role`.
 * @see https://floating-ui.com/docs/useRole
 */
function useRole(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    floatingId
  } = context;
  const {
    enabled = true,
    role = 'dialog'
  } = props;
  const referenceId = useId();
  return external_react_.useMemo(() => {
    const floatingProps = {
      id: floatingId,
      role
    };
    if (!enabled) {
      return {};
    }
    if (role === 'tooltip') {
      return {
        reference: {
          'aria-describedby': open ? floatingId : undefined
        },
        floating: floatingProps
      };
    }
    return {
      reference: {
        'aria-expanded': open ? 'true' : 'false',
        'aria-haspopup': role === 'alertdialog' ? 'dialog' : role,
        'aria-controls': open ? floatingId : undefined,
        ...(role === 'listbox' && {
          role: 'combobox'
        }),
        ...(role === 'menu' && {
          id: referenceId
        })
      },
      floating: {
        ...floatingProps,
        ...(role === 'menu' && {
          'aria-labelledby': referenceId
        })
      }
    };
  }, [enabled, role, open, floatingId, referenceId]);
}

// Converts a JS style key like `backgroundColor` to a CSS transition-property
// like `background-color`.
const camelCaseToKebabCase = str => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());
function execWithArgsOrReturn(valueOrFn, args) {
  return typeof valueOrFn === 'function' ? valueOrFn(args) : valueOrFn;
}
function useDelayUnmount(open, durationMs) {
  const [isMounted, setIsMounted] = React.useState(open);
  if (open && !isMounted) {
    setIsMounted(true);
  }
  React.useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => setIsMounted(false), durationMs);
      return () => clearTimeout(timeout);
    }
  }, [open, durationMs]);
  return isMounted;
}
/**
 * Provides a status string to apply CSS transitions to a floating element,
 * correctly handling placement-aware transitions.
 * @see https://floating-ui.com/docs/useTransition#usetransitionstatus
 */
function useTransitionStatus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    elements: {
      floating
    }
  } = context;
  const {
    duration = 250
  } = props;
  const isNumberDuration = typeof duration === 'number';
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  const [initiated, setInitiated] = React.useState(false);
  const [status, setStatus] = React.useState('unmounted');
  const isMounted = useDelayUnmount(open, closeDuration);

  // `initiated` check prevents this `setState` call from breaking
  // <FloatingPortal />. This call is necessary to ensure subsequent opens
  // after the initial one allows the correct side animation to play when the
  // placement has changed.
  floating_ui_react_esm_index(() => {
    if (initiated && !isMounted) {
      setStatus('unmounted');
    }
  }, [initiated, isMounted]);
  floating_ui_react_esm_index(() => {
    if (!floating) return;
    if (open) {
      setStatus('initial');
      const frame = requestAnimationFrame(() => {
        setStatus('open');
      });
      return () => {
        cancelAnimationFrame(frame);
      };
    } else {
      setInitiated(true);
      setStatus('close');
    }
  }, [open, floating]);
  return {
    isMounted,
    status
  };
}
/**
 * Provides styles to apply CSS transitions to a floating element, correctly
 * handling placement-aware transitions. Wrapper around `useTransitionStatus`.
 * @see https://floating-ui.com/docs/useTransition#usetransitionstyles
 */
function useTransitionStyles(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    initial: unstable_initial = {
      opacity: 0
    },
    open: unstable_open,
    close: unstable_close,
    common: unstable_common,
    duration = 250
  } = props;
  const placement = context.placement;
  const side = placement.split('-')[0];
  const fnArgs = React.useMemo(() => ({
    side,
    placement
  }), [side, placement]);
  const isNumberDuration = typeof duration === 'number';
  const openDuration = (isNumberDuration ? duration : duration.open) || 0;
  const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
  const [styles, setStyles] = React.useState(() => ({
    ...execWithArgsOrReturn(unstable_common, fnArgs),
    ...execWithArgsOrReturn(unstable_initial, fnArgs)
  }));
  const {
    isMounted,
    status
  } = useTransitionStatus(context, {
    duration
  });
  const initialRef = floating_ui_react_esm_useLatestRef(unstable_initial);
  const openRef = floating_ui_react_esm_useLatestRef(unstable_open);
  const closeRef = floating_ui_react_esm_useLatestRef(unstable_close);
  const commonRef = floating_ui_react_esm_useLatestRef(unstable_common);
  floating_ui_react_esm_index(() => {
    const initialStyles = execWithArgsOrReturn(initialRef.current, fnArgs);
    const closeStyles = execWithArgsOrReturn(closeRef.current, fnArgs);
    const commonStyles = execWithArgsOrReturn(commonRef.current, fnArgs);
    const openStyles = execWithArgsOrReturn(openRef.current, fnArgs) || Object.keys(initialStyles).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    if (status === 'initial') {
      setStyles(styles => ({
        transitionProperty: styles.transitionProperty,
        ...commonStyles,
        ...initialStyles
      }));
    }
    if (status === 'open') {
      setStyles({
        transitionProperty: Object.keys(openStyles).map(camelCaseToKebabCase).join(','),
        transitionDuration: openDuration + "ms",
        ...commonStyles,
        ...openStyles
      });
    }
    if (status === 'close') {
      const styles = closeStyles || initialStyles;
      setStyles({
        transitionProperty: Object.keys(styles).map(camelCaseToKebabCase).join(','),
        transitionDuration: closeDuration + "ms",
        ...commonStyles,
        ...styles
      });
    }
  }, [closeDuration, closeRef, initialRef, openRef, commonRef, openDuration, status, fnArgs]);
  return {
    isMounted,
    styles
  };
}

/**
 * Provides a matching callback that can be used to focus an item as the user
 * types, often used in tandem with `useListNavigation()`.
 * @see https://floating-ui.com/docs/useTypeahead
 */
function useTypeahead(context, props) {
  var _ref;
  const {
    open,
    dataRef
  } = context;
  const {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch,
    onTypingChange: unstable_onTypingChange,
    enabled = true,
    findMatch = null,
    resetMs = 750,
    ignoreKeys = [],
    selectedIndex = null
  } = props;
  const timeoutIdRef = React.useRef();
  const stringRef = React.useRef('');
  const prevIndexRef = React.useRef((_ref = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref : -1);
  const matchIndexRef = React.useRef(null);
  const onMatch = useEvent(unstable_onMatch);
  const onTypingChange = useEvent(unstable_onTypingChange);
  const findMatchRef = floating_ui_react_esm_useLatestRef(findMatch);
  const ignoreKeysRef = floating_ui_react_esm_useLatestRef(ignoreKeys);
  floating_ui_react_esm_index(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = '';
    }
  }, [open]);
  floating_ui_react_esm_index(() => {
    // Sync arrow key navigation but not typeahead navigation.
    if (open && stringRef.current === '') {
      var _ref2;
      prevIndexRef.current = (_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  return React.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setTypingChange(value) {
      if (value) {
        if (!dataRef.current.typing) {
          dataRef.current.typing = value;
          onTypingChange(value);
        }
      } else {
        if (dataRef.current.typing) {
          dataRef.current.typing = value;
          onTypingChange(value);
        }
      }
    }
    function getMatchingIndex(list, orderedList, string) {
      const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find(text => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(string.toLocaleLowerCase())) === 0);
      return str ? list.indexOf(str) : -1;
    }
    function onKeyDown(event) {
      const listContent = listRef.current;
      if (stringRef.current.length > 0 && stringRef.current[0] !== ' ') {
        if (getMatchingIndex(listContent, listContent, stringRef.current) === -1) {
          setTypingChange(false);
        } else if (event.key === ' ') {
          stopEvent(event);
        }
      }
      if (listContent == null || ignoreKeysRef.current.includes(event.key) ||
      // Character key.
      event.key.length !== 1 ||
      // Modifier key.
      event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      if (open && event.key !== ' ') {
        stopEvent(event);
        setTypingChange(true);
      }

      // Bail out if the list contains a word like "llama" or "aaron". TODO:
      // allow it in this case, too.
      const allowRapidSuccessionOfFirstLetter = listContent.every(text => {
        var _text$, _text$2;
        return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
      });

      // Allows the user to cycle through items that start with the same letter
      // in rapid succession.
      if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
        stringRef.current = '';
        prevIndexRef.current = matchIndexRef.current;
      }
      stringRef.current += event.key;
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        stringRef.current = '';
        prevIndexRef.current = matchIndexRef.current;
        setTypingChange(false);
      }, resetMs);
      const prevIndex = prevIndexRef.current;
      const index = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
      if (index !== -1) {
        onMatch(index);
        matchIndexRef.current = index;
      } else if (event.key !== ' ') {
        stringRef.current = '';
        setTypingChange(false);
      }
    }
    return {
      reference: {
        onKeyDown
      },
      floating: {
        onKeyDown,
        onKeyUp(event) {
          if (event.key === ' ') {
            setTypingChange(false);
          }
        }
      }
    };
  }, [enabled, open, dataRef, listRef, resetMs, ignoreKeysRef, findMatchRef, onMatch, onTypingChange]);
}

function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
/**
 * Positions the floating element such that an inner element inside
 * of it is anchored to the reference element.
 * @see https://floating-ui.com/docs/inner
 */
const inner = props => ({
  name: 'inner',
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = props;
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index];
    if (false) {}
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...(await offset(-item.offsetTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state))
    };
    const el = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
    const refOverflow = await detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: 'reference'
    });
    const diffY = Math.max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
    el.style.maxHeight = maxHeight + "px";
    el.scrollTop = diffY;

    // There is not enough space, fallback to standard anchored positioning
    if (onFallbackChange) {
      if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
        flushSync(() => onFallbackChange(true));
      } else {
        flushSync(() => onFallbackChange(false));
      }
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, el.offsetHeight), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
/**
 * Changes the `inner` middleware's `offset` upon a `wheel` event to
 * expand the floating element's height, revealing more list items.
 * @see https://floating-ui.com/docs/inner
 */
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEvent(unstable_onChange);
  const controlledScrollingRef = React.useRef(false);
  const prevScrollTopRef = React.useRef(null);
  const initialOverflowRef = React.useRef(null);
  React.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onWheel(e) {
      if (e.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? 'max' : 'min';
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e.preventDefault();
        flushSync(() => {
          onChange(d => d + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        // Needed to propagate scrolling during momentum scrolling phase once
        // it gets limited by the boundary. UX improvement, not critical.
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener('wheel', onWheel);

      // Wait for the position to be ready.
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener('wheel', onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  return React.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      floating: {
        onKeyDown() {
          controlledScrollingRef.current = true;
        },
        onWheel() {
          controlledScrollingRef.current = false;
        },
        onPointerMove() {
          controlledScrollingRef.current = false;
        },
        onScroll() {
          const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
          if (!overflowRef.current || !el || !controlledScrollingRef.current) {
            return;
          }
          if (prevScrollTopRef.current !== null) {
            const scrollDiff = el.scrollTop - prevScrollTopRef.current;
            if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
              flushSync(() => onChange(d => d + scrollDiff));
            }
          }

          // [Firefox] Wait for the height change to have been applied.
          requestAnimationFrame(() => {
            prevScrollTopRef.current = el.scrollTop;
          });
        }
      }
    };
  }, [enabled, overflowRef, elements.floating, scrollRef, onChange]);
}

function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside = false;
  const length = polygon.length;
  for (let i = 0, j = length - 1; i < length; j = i++) {
    const [xi, yi] = polygon[i] || [0, 0];
    const [xj, yj] = polygon[j] || [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside = !isInside;
    }
  }
  return isInside;
}
function isInside(point, rect) {
  return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
/**
 * Generates a safe polygon area that the user can traverse without closing the
 * floating element once leaving the reference element.
 * @see https://floating-ui.com/docs/useHover#safePolygon
 */
function safePolygon(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    buffer = 0.5,
    blockPointerEvents = false,
    requireIntent = true
  } = options;
  let timeoutId;
  let hasLanded = false;
  let lastX = null;
  let lastY = null;
  let lastCursorTime = performance.now();
  function getCursorSpeed(x, y) {
    const currentTime = performance.now();
    const elapsedTime = currentTime - lastCursorTime;
    if (lastX === null || lastY === null || elapsedTime === 0) {
      lastX = x;
      lastY = y;
      lastCursorTime = currentTime;
      return null;
    }
    const deltaX = x - lastX;
    const deltaY = y - lastY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const speed = distance / elapsedTime; // px / ms

    lastX = x;
    lastY = y;
    lastCursorTime = currentTime;
    return speed;
  }
  const fn = _ref => {
    let {
      x,
      y,
      placement,
      elements,
      onClose,
      nodeId,
      tree
    } = _ref;
    return function onMouseMove(event) {
      function close() {
        clearTimeout(timeoutId);
        onClose();
      }
      clearTimeout(timeoutId);
      if (!elements.domReference || !elements.floating || placement == null || x == null || y == null) {
        return;
      }
      const {
        clientX,
        clientY
      } = event;
      const clientPoint = [clientX, clientY];
      const target = getTarget(event);
      const isLeave = event.type === 'mouseleave';
      const isOverFloatingEl = contains(elements.floating, target);
      const isOverReferenceEl = contains(elements.domReference, target);
      const refRect = elements.domReference.getBoundingClientRect();
      const rect = elements.floating.getBoundingClientRect();
      const side = placement.split('-')[0];
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      const isOverReferenceRect = isInside(clientPoint, refRect);
      const isFloatingWider = rect.width > refRect.width;
      const isFloatingTaller = rect.height > refRect.height;
      const left = (isFloatingWider ? refRect : rect).left;
      const right = (isFloatingWider ? refRect : rect).right;
      const top = (isFloatingTaller ? refRect : rect).top;
      const bottom = (isFloatingTaller ? refRect : rect).bottom;
      if (isOverFloatingEl) {
        hasLanded = true;
        if (!isLeave) {
          return;
        }
      }
      if (isOverReferenceEl) {
        hasLanded = false;
      }
      if (isOverReferenceEl && !isLeave) {
        hasLanded = true;
        return;
      }

      // Prevent overlapping floating element from being stuck in an open-close
      // loop: https://github.com/floating-ui/floating-ui/issues/1910
      if (isLeave && isElement(event.relatedTarget) && contains(elements.floating, event.relatedTarget)) {
        return;
      }

      // If any nested child is open, abort.
      if (tree && getChildren(tree.nodesRef.current, nodeId).some(_ref2 => {
        let {
          context
        } = _ref2;
        return context == null ? void 0 : context.open;
      })) {
        return;
      }

      // If the pointer is leaving from the opposite side, the "buffer" logic
      // creates a point where the floating element remains open, but should be
      // ignored.
      // A constant of 1 handles floating point rounding errors.
      if (side === 'top' && y >= refRect.bottom - 1 || side === 'bottom' && y <= refRect.top + 1 || side === 'left' && x >= refRect.right - 1 || side === 'right' && x <= refRect.left + 1) {
        return close();
      }

      // Ignore when the cursor is within the rectangular trough between the
      // two elements. Since the triangle is created from the cursor point,
      // which can start beyond the ref element's edge, traversing back and
      // forth from the ref to the floating element can cause it to close. This
      // ensures it always remains open in that case.
      let rectPoly = [];
      switch (side) {
        case 'top':
          rectPoly = [[left, refRect.top + 1], [left, rect.bottom - 1], [right, rect.bottom - 1], [right, refRect.top + 1]];
          break;
        case 'bottom':
          rectPoly = [[left, rect.top + 1], [left, refRect.bottom - 1], [right, refRect.bottom - 1], [right, rect.top + 1]];
          break;
        case 'left':
          rectPoly = [[rect.right - 1, bottom], [rect.right - 1, top], [refRect.left + 1, top], [refRect.left + 1, bottom]];
          break;
        case 'right':
          rectPoly = [[refRect.right - 1, bottom], [refRect.right - 1, top], [rect.left + 1, top], [rect.left + 1, bottom]];
          break;
      }
      function getPolygon(_ref3) {
        let [x, y] = _ref3;
        switch (side) {
          case 'top':
            {
              const cursorPointOne = [isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1];
              const cursorPointTwo = [isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y + buffer + 1];
              const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
          case 'bottom':
            {
              const cursorPointOne = [isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer];
              const cursorPointTwo = [isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4, y - buffer];
              const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
          case 'left':
            {
              const cursorPointOne = [x + buffer + 1, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const cursorPointTwo = [x + buffer + 1, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
              return [...commonPoints, cursorPointOne, cursorPointTwo];
            }
          case 'right':
            {
              const cursorPointOne = [x - buffer, isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const cursorPointTwo = [x - buffer, isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4];
              const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
              return [cursorPointOne, cursorPointTwo, ...commonPoints];
            }
        }
      }
      if (isPointInPolygon([clientX, clientY], rectPoly)) {
        return;
      } else if (hasLanded && !isOverReferenceRect) {
        return close();
      }
      if (!isLeave && requireIntent) {
        const cursorSpeed = getCursorSpeed(event.clientX, event.clientY);
        const cursorSpeedThreshold = 0.1;
        if (cursorSpeed !== null && cursorSpeed < cursorSpeedThreshold) {
          return close();
        }
      }
      if (!isPointInPolygon([clientX, clientY], getPolygon([x, y]))) {
        close();
      } else if (!hasLanded && requireIntent) {
        timeoutId = window.setTimeout(close, 40);
      }
    };
  };
  fn.__options = {
    blockPointerEvents
  };
  return fn;
}

/**
 * Provides data to position a floating element and context to add interactions.
 * @see https://floating-ui.com/docs/react
 */
function floating_ui_react_esm_useFloating(options) {
  var _options$elements;
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  const [_domReference, setDomReference] = external_react_.useState(null);
  const domReference = ((_options$elements = options.elements) == null ? void 0 : _options$elements.reference) || _domReference;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const onOpenChange = useEvent(unstable_onOpenChange);
  const domReferenceRef = external_react_.useRef(null);
  const dataRef = external_react_.useRef({});
  const events = external_react_.useState(() => createPubSub())[0];
  const floatingId = useId();
  const setPositionReference = external_react_.useCallback(node => {
    const positionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = external_react_.useCallback(node => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }

    // Backwards-compatibility for passing a virtual element to `reference`
    // after it has set the DOM reference.
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null ||
    // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = external_react_.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = external_react_.useMemo(() => ({
    ...position.elements,
    domReference: domReference
  }), [position.elements, domReference]);
  const context = external_react_.useMemo(() => ({
    ...position,
    refs,
    elements,
    dataRef,
    nodeId,
    floatingId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, floatingId, events, open, onOpenChange, refs, elements]);
  floating_ui_react_esm_index(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find(node => node.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return external_react_.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}

function mergeProps(userProps, propsList, elementKey) {
  const map = new Map();
  return {
    ...(elementKey === 'floating' && {
      tabIndex: -1
    }),
    ...userProps,
    ...propsList.map(value => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach(_ref => {
        let [key, value] = _ref;
        if (key.indexOf('on') === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === 'function') {
            var _map$get;
            (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
            acc[key] = function () {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map(fn => fn(...args)).find(val => val !== undefined);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}

/**
 * Merges an array of interaction hooks' props into prop getters, allowing
 * event handler functions to be composed together without overwriting one
 * another.
 * @see https://floating-ui.com/docs/react#interaction-hooks
 */
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  // The dependencies are a dynamic array, so we can't use the linter's
  // suggestion to add it to the deps array.
  const deps = propsList;
  const getReferenceProps = external_react_.useCallback(userProps => mergeProps(userProps, propsList, 'reference'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  deps);
  const getFloatingProps = external_react_.useCallback(userProps => mergeProps(userProps, propsList, 'floating'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  deps);
  const getItemProps = external_react_.useCallback(userProps => mergeProps(userProps, propsList, 'item'),
  // Granularly check for `item` changes, because the `getItemProps` getter
  // should be as referentially stable as possible since it may be passed as
  // a prop to many components. All `item` key values must therefore be
  // memoized.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  propsList.map(key => key == null ? void 0 : key.item));
  return external_react_.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}



;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(608);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Tooltip/styled.ts

var _templateObject;

var Content = external_styled_components_default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n\n  color: #7e7e7e;\n\n  padding: 8px;\n\n  width: max-content;\n  min-width: 69px;\n  height: 32px;\n\n  background: var(--color-white)fff;\n\n  border: 1px solid #f4f4f4;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n"])));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: ./src/components/Tooltip/Tooltip.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var Tooltip = function Tooltip(_ref) {
  var title = _ref.title,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
    children = _ref.children,
    className = _ref.className;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useFloating = floating_ui_react_esm_useFloating({
      placement: placement,
      open: isOpen,
      onOpenChange: setIsOpen,
      middleware: [D(5), b({
        fallbackAxisSideDirection: 'start',
        padding: 5
      }), k({
        padding: 5
      })],
      whileElementsMounted: z
    }),
    refs = _useFloating.refs,
    floatingStyles = _useFloating.floatingStyles,
    context = _useFloating.context;
  var hover = useHover(context, {
    move: false
  });
  var focus = useFocus(context);
  var dismiss = useDismiss(context);
  var role = useRole(context, {
    role: 'tooltip'
  });
  var _useInteractions = useInteractions([hover, focus, dismiss, role]),
    getReferenceProps = _useInteractions.getReferenceProps,
    getFloatingProps = _useInteractions.getFloatingProps;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", _objectSpread(_objectSpread({
      ref: refs.setReference
    }, getReferenceProps()), {}, {
      children: children
    })), isOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(Content, _objectSpread(_objectSpread({
      className: className,
      ref: refs.setFloating,
      style: floatingStyles
    }, getFloatingProps()), {}, {
      children: title
    }))]
  });
};
;// CONCATENATED MODULE: ./src/components/Tooltip/index.tsx

;// CONCATENATED MODULE: ./src/components/SwitchScgScn/icons/scg.svg
var _path, _path2;
function scg_extends() { scg_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return scg_extends.apply(this, arguments); }

var SvgScg = function SvgScg(props) {
  return /*#__PURE__*/external_react_.createElement("svg", scg_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M20.28 15.667c-.832 0-1.63.32-2.231.893l-3.255-2.52a3.074 3.074 0 0 0 .368-2.155l2.242-.733a3.231 3.231 0 0 0 3.98 1.568 3.217 3.217 0 0 0 1.732-1.494 3.198 3.198 0 0 0-.991-4.148 3.23 3.23 0 0 0-4.252.498 3.201 3.201 0 0 0-.814 2.132c.002.193.021.384.058.573l-2.243.734c-.269-.53-.68-.975-1.188-1.287A3.241 3.241 0 0 0 12 9.25c-.296 0-.59.043-.874.126l-1.092-2.452a3.198 3.198 0 0 0 1.224-4.028 3.214 3.214 0 0 0-1.584-1.598 3.231 3.231 0 0 0-4.058 1.167 3.199 3.199 0 0 0 .592 4.166 3.227 3.227 0 0 0 2.112.786c.296-.001.59-.044.874-.126l1.093 2.452a3.215 3.215 0 0 0-1.435 2.035 3.197 3.197 0 0 0 .457 2.445l-3.52 3.117a3.181 3.181 0 0 0-2.07-.757c-.716 0-1.413.24-1.978.679a3.197 3.197 0 0 0-.966 3.824c.289.653.788 1.192 1.42 1.53a3.23 3.23 0 0 0 3.902-.658 3.202 3.202 0 0 0 .314-3.93l3.519-3.118c.577.49 1.312.76 2.07.757.832-.001 1.63-.321 2.231-.894l3.255 2.52a3.074 3.074 0 0 0-.425 1.582 3.2 3.2 0 0 0 1.987 2.964 3.232 3.232 0 0 0 3.51-.695 3.204 3.204 0 0 0 .698-3.497 3.228 3.228 0 0 0-2.975-1.98Zm0-8.25a2.306 2.306 0 0 1 2.125 1.414 2.283 2.283 0 0 1-.499 2.498 2.303 2.303 0 0 1-3.926-1.62 2.299 2.299 0 0 1 .677-1.618 2.316 2.316 0 0 1 1.623-.674ZM6.019 4.208a2.286 2.286 0 0 1 1.42-2.117 2.308 2.308 0 0 1 2.506.497A2.289 2.289 0 0 1 8.32 6.5a2.316 2.316 0 0 1-1.623-.675 2.299 2.299 0 0 1-.677-1.617Zm-2.3 17.875a2.306 2.306 0 0 1-2.126-1.414 2.284 2.284 0 0 1 .499-2.498 2.303 2.303 0 0 1 3.927 1.62 2.299 2.299 0 0 1-.677 1.618c-.431.429-1.014.671-1.624.674Zm8.28-7.333a2.306 2.306 0 0 1-2.125-1.415 2.284 2.284 0 0 1 .499-2.497 2.303 2.303 0 0 1 3.926 1.62 2.299 2.299 0 0 1-.677 1.617c-.43.43-1.014.672-1.623.675Zm8.28 6.417a2.306 2.306 0 0 1-2.124-1.415 2.283 2.283 0 0 1 .498-2.497 2.302 2.302 0 0 1 2.507-.497 2.299 2.299 0 0 1 1.42 2.117 2.299 2.299 0 0 1-.677 1.617c-.43.43-1.014.672-1.623.675Z",
    fill: "silver"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M20.28 7.417a2.306 2.306 0 0 1 2.125 1.414 2.283 2.283 0 0 1-.499 2.498 2.303 2.303 0 0 1-3.926-1.62 2.299 2.299 0 0 1 .677-1.618 2.316 2.316 0 0 1 1.623-.674ZM3.718 22.083a2.306 2.306 0 0 1-2.125-1.414 2.284 2.284 0 0 1 .499-2.498 2.303 2.303 0 0 1 3.927 1.62 2.299 2.299 0 0 1-.677 1.618c-.431.429-1.014.671-1.624.674Z",
    fill: "silver"
  })));
};
/* harmony default export */ const scg = (SvgScg);
;// CONCATENATED MODULE: ./src/components/SwitchScgScn/icons/scn.svg
var scn_path;
function scn_extends() { scn_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return scn_extends.apply(this, arguments); }

var SvgScn = function SvgScn(props) {
  return /*#__PURE__*/external_react_.createElement("svg", scn_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), scn_path || (scn_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M4 3h14c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1Zm0 4h8c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1ZM4.125 11h15.75c.619 0 1.125.45 1.125 1s-.506 1-1.125 1H4.125C3.506 13 3 12.55 3 12s.506-1 1.125-1Zm0 4h9c.619 0 1.125.45 1.125 1s-.506 1-1.125 1h-9C3.506 17 3 16.55 3 16s.506-1 1.125-1ZM19.875 19H4.125C3.506 19 3 19.45 3 20s.506 1 1.125 1h15.75c.619 0 1.125-.45 1.125-1s-.506-1-1.125-1Z",
    fill: "var(--color-navy-blue)"
  })));
};
/* harmony default export */ const scn = (SvgScn);
;// CONCATENATED MODULE: ./src/components/SwitchScgScn/styled.ts

var styled_templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var SwitchWrap = external_styled_components_default().div(styled_templateObject || (styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var Tabs = external_styled_components_default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: end;\n\n  width: 100%;\n"])));
var Tab = external_styled_components_default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 26px;\n  font-weight: 400;\n  color: var(--color-silver);\n\n  cursor: pointer;\n\n  &:hover {\n    background: var(--color-decomposition-hover);\n    path {\n      fill: var(--color-navy-blue);\n    }\n  }\n\n  padding: 4px 8px;\n\n  border-radius: 4px;\n\n  path {\n    fill: var(--color-silver);\n  }\n\n  ", "\n"])), function (props) {
  return props.$isActive && (0,external_styled_components_.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      background: var(--color-smoky-white);\n\n      path {\n        fill: var(--color-navy-blue);\n      }\n    "])));
});
var Divider = external_styled_components_default().span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0 4px;\n\n  border-left: 1px solid #c0c0c0;\n"])));
;// CONCATENATED MODULE: ./src/components/SwitchScgScn/SwitchScgScn.tsx






var SwitchScgScn = function SwitchScgScn(_ref) {
  var tab = _ref.tab,
    className = _ref.className,
    onTabClick = _ref.onTabClick;
  var onClick = function onClick(newTab) {
    return function () {
      onTabClick(newTab);
    };
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SwitchWrap, {
    className: className,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Tabs, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip, {
        title: 'SCn-код',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Tab, {
          $isActive: tab === 'scn',
          onClick: onClick('scn'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(scn, {})
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Divider, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip, {
        title: 'SCg-код',
        placement: "bottom-end",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Tab, {
          $isActive: tab === 'scg',
          onClick: onClick('scg'),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(scg, {})
        })
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/SwitchScgScn/index.tsx

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
;// CONCATENATED MODULE: ./src/utils/createSmartContext.tsx

var _excluded = ["children"];


var createSmartContext = function createSmartContext(props) {
  var Context = /*#__PURE__*/(0,external_react_.createContext)(props);
  var Provider = function Provider(_ref) {
    var children = _ref.children,
      restContext = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider, {
      value: restContext,
      children: children
    });
  };
  var useContext = function useContext() {
    return (0,external_react_.useContext)(Context);
  };
  return [Provider, useContext];
};
;// CONCATENATED MODULE: ./src/components/Toast/useToast.ts


var _createSmartContext = createSmartContext({
    toasts: [],
    addToast: function addToast() {
      return void 0;
    },
    removeToast: function removeToast() {
      return void 0;
    }
  }),
  _createSmartContext2 = _slicedToArray(_createSmartContext, 2),
  BasicToastProvider = _createSmartContext2[0],
  useToast = _createSmartContext2[1];

var _createSmartContext3 = createSmartContext({
    deletingToasts: [],
    removeToast: function removeToast() {
      return void 0;
    }
  }),
  _createSmartContext4 = _slicedToArray(_createSmartContext3, 2),
  InnerToastProvider = _createSmartContext4[0],
  useInnerToast = _createSmartContext4[1];

;// CONCATENATED MODULE: ./src/components/Toast/Toast.tsx

var Toast_templateObject, Toast_templateObject2, Toast_templateObject3;




var fadeIn = (0,external_styled_components_.keyframes)(Toast_templateObject || (Toast_templateObject = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n    transform: translateX(40px);\n  }\n"])));
var fadeOut = (0,external_styled_components_.keyframes)(Toast_templateObject2 || (Toast_templateObject2 = _taggedTemplateLiteral(["\n  to {\n    opacity: 0;\n    transform: translateX(40px);\n  }\n"])));
var ToastWrapper = external_styled_components_default().div(Toast_templateObject3 || (Toast_templateObject3 = _taggedTemplateLiteral(["\n  animation: ", " 0.3s ease both;\n"])), function (_ref) {
  var $isDisappearing = _ref.$isDisappearing;
  return $isDisappearing ? fadeOut : fadeIn;
});
var Toast = function Toast(_ref2) {
  var id = _ref2.id;
  var _useToast = useToast(),
    markToastToDelete = _useToast.removeToast,
    toasts = _useToast.toasts;
  var _useInnerToast = useInnerToast(),
    removeToast = _useInnerToast.removeToast,
    deletingToasts = _useInnerToast.deletingToasts;
  var toast = toasts.find(function (toast) {
    return toast.params.id === id;
  });
  var onClose = (0,external_react_.useCallback)(function () {
    var _toast$component$prop, _toast$component$prop2;
    markToastToDelete(id);
    toast === null || toast === void 0 ? void 0 : (_toast$component$prop = (_toast$component$prop2 = toast.component.props).onClose) === null || _toast$component$prop === void 0 ? void 0 : _toast$component$prop.call(_toast$component$prop2);
  }, [id, markToastToDelete, toast === null || toast === void 0 ? void 0 : toast.component.props]);
  (0,external_react_.useEffect)(function () {
    if ((toast === null || toast === void 0 ? void 0 : toast.params.duration) === 'infinity') return;
    setTimeout(onClose, toast === null || toast === void 0 ? void 0 : toast.params.duration);
  }, [toast === null || toast === void 0 ? void 0 : toast.params.duration, onClose]);
  var newComponent = toast ? /*#__PURE__*/(0,external_react_.cloneElement)(toast.component, {
    onClose: toast.params.closeable ? onClose : undefined
  }) : null;
  var isDisappearing = deletingToasts.includes(id);
  var onAnimationEnd = function onAnimationEnd() {
    if (isDisappearing) removeToast(id);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ToastWrapper, {
    $isDisappearing: isDisappearing,
    onAnimationEnd: onAnimationEnd,
    children: newComponent
  });
};
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./node_modules/nanoid/index.browser.js

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


;// CONCATENATED MODULE: ./src/components/Toast/Toasts/styled.ts

var Toasts_styled_templateObject, styled_templateObject2, styled_templateObject3, styled_templateObject4, styled_templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

var Wrapper = external_styled_components_default().div(Toasts_styled_templateObject || (Toasts_styled_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 136px;\n  bottom: 136px;\n  left: 24px;\n  right: 24px;\n\n  z-index: 100;\n\n  pointer-events: none;\n"])));
var StyledToasts = external_styled_components_default().div(styled_templateObject2 || (styled_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  pointer-events: all;\n\n  ", "\n"])), function (_ref) {
  var position = _ref.position;
  switch (position) {
    case 'topLeft':
      return (0,external_styled_components_.css)(styled_templateObject3 || (styled_templateObject3 = _taggedTemplateLiteral(["\n          left: 0;\n          top: 0;\n        "])));
    case 'topCenter':
      return (0,external_styled_components_.css)(styled_templateObject4 || (styled_templateObject4 = _taggedTemplateLiteral(["\n          left: 50%;\n          top: 0;\n\n          transform: translate3d(-50%, 0, 0);\n\n          align-items: center;\n        "])));
    case 'topRight':
      return (0,external_styled_components_.css)(styled_templateObject5 || (styled_templateObject5 = _taggedTemplateLiteral(["\n          top: 0;\n          right: 0;\n\n          align-items: flex-end;\n        "])));
    case 'centerLeft':
      return (0,external_styled_components_.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          left: 0;\n          top: 50%;\n\n          transform: translate3d(0, -50%, 0);\n        "])));
    case 'center':
      return (0,external_styled_components_.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          left: 50%;\n          top: 50%;\n\n          transform: translate3d(-50%, -50%, 0);\n\n          align-items: center;\n        "])));
    case 'centerRight':
      return (0,external_styled_components_.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          right: 0;\n          top: 50%;\n\n          transform: translate3d(0, -50%, 0);\n\n          align-items: flex-end;\n        "])));
    case 'bottomLeft':
      return (0,external_styled_components_.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          left: 0;\n          bottom: 0;\n        "])));
    case 'bottomCenter':
      return (0,external_styled_components_.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n          left: 50%;\n          bottom: 0;\n\n          transform: translate3d(-50%, 0, 0);\n\n          align-items: center;\n        "])));
    case 'bottomRight':
      return (0,external_styled_components_.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n          bottom: 0;\n          right: 0;\n\n          align-items: flex-end;\n        "])));
    default:
      return '';
  }
});
;// CONCATENATED MODULE: ./src/components/Toast/Toasts/Toasts.tsx



function Toasts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Toasts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Toasts_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Toasts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var Toasts = function Toasts(_ref) {
  var className = _ref.className;
  var _useToast = useToast(),
    toasts = _useToast.toasts;
  var toastsByPosition = (0,external_react_.useMemo)(function () {
    return toasts.reduce(function (acc, toast) {
      return Toasts_objectSpread(Toasts_objectSpread({}, acc), {}, _defineProperty({}, toast.params.position, [].concat(_toConsumableArray(acc[toast.params.position] || []), [toast])));
    }, {});
  }, [toasts]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Wrapper, {
    className: className,
    children: Object.entries(toastsByPosition).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        toasts = _ref3[1];
      var position = key;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledToasts, {
        position: position,
        children: toasts.map(function (_ref4) {
          var params = _ref4.params;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Toast, {
            id: params.id
          }, params.id);
        })
      }, key);
    })
  });
};
;// CONCATENATED MODULE: ./src/components/Toast/Toasts/index.tsx

;// CONCATENATED MODULE: ./src/components/Toast/ToastProvider.tsx








var defaultRenderToasts = function defaultRenderToasts() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Toasts, {});
};
var ToastProvider = function ToastProvider(_ref) {
  var children = _ref.children,
    _ref$renderToasts = _ref.renderToasts,
    renderToasts = _ref$renderToasts === void 0 ? defaultRenderToasts : _ref$renderToasts;
  var _useState = (0,external_react_.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    toasts = _useState2[0],
    setToasts = _useState2[1];
  var _useState3 = (0,external_react_.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    deletingToasts = _useState4[0],
    setDeletingToasts = _useState4[1];
  var addToast = (0,external_react_.useCallback)(function (component, baseParams) {
    var _baseParams$closeable;
    var params = {
      id: (baseParams === null || baseParams === void 0 ? void 0 : baseParams.id) || nanoid(5),
      duration: (baseParams === null || baseParams === void 0 ? void 0 : baseParams.duration) || 'infinity',
      position: (baseParams === null || baseParams === void 0 ? void 0 : baseParams.position) || 'topCenter',
      closeable: (_baseParams$closeable = baseParams === null || baseParams === void 0 ? void 0 : baseParams.closeable) !== null && _baseParams$closeable !== void 0 ? _baseParams$closeable : true
    };
    setToasts(function (prev) {
      return [{
        params: params,
        component: component
      }].concat(_toConsumableArray(prev.filter(function (el) {
        return el.params.id !== (baseParams === null || baseParams === void 0 ? void 0 : baseParams.id);
      })));
    });
  }, []);
  var markToastToDelete = (0,external_react_.useCallback)(function (id) {
    setDeletingToasts(function (prev) {
      return [].concat(_toConsumableArray(prev), [id]);
    });
  }, []);
  var removeToast = (0,external_react_.useCallback)(function (id) {
    setDeletingToasts(function (prev) {
      return prev.filter(function (prevToastId) {
        return prevToastId !== id;
      });
    });
    setToasts(function (prev) {
      return prev.filter(function (prevToast) {
        return prevToast.params.id !== id;
      });
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(BasicToastProvider, {
    toasts: toasts,
    addToast: addToast,
    removeToast: markToastToDelete,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(InnerToastProvider, {
      deletingToasts: deletingToasts,
      removeToast: removeToast,
      children: [children, renderToasts({
        toasts: toasts
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/Toast/index.tsx




;// CONCATENATED MODULE: ./src/components/Button/styled.ts

var Button_styled_templateObject, Button_styled_templateObject2, Button_styled_templateObject3, Button_styled_templateObject4, Button_styled_templateObject5, styled_templateObject6, styled_templateObject7;

var styled_Button = external_styled_components_default().button(Button_styled_templateObject || (Button_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: ", ";\n  box-sizing: border-box;\n  outline: none;\n  border-radius: ", ";\n  cursor: pointer;\n  font-family: ", ";\n  font-weight: 500;\n  letter-spacing: 0;\n  user-select: none;\n\n  fill: currentColor;\n\n  &:disabled {\n    pointer-events: none;\n  }\n\n  /* Variants */\n  ", "\n\n  /* Sizes */\n  ", "\n\n  ", "\n\n  ", "\n\n  /* Colors */\n  ", "\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.button.gap;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.button.borderRadius;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.button.font.fontFamily;
}, function (props) {
  return props.$variant === 'contained' && (0,external_styled_components_.css)(Button_styled_templateObject2 || (Button_styled_templateObject2 = _taggedTemplateLiteral(["\n      border: none;\n    "])));
}, function (props) {
  return props.$size === 'lg' && (0,external_styled_components_.css)(Button_styled_templateObject3 || (Button_styled_templateObject3 = _taggedTemplateLiteral(["\n      padding: ", ";\n      font-size: ", ";\n      line-height: ", ";\n    "])), function (_ref4) {
    var theme = _ref4.theme;
    return theme.button.size.large.padding;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.button.font.large.fontSize;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.button.font.large.lineHeight;
  });
}, function (props) {
  return props.$size === 'md' && (0,external_styled_components_.css)(Button_styled_templateObject4 || (Button_styled_templateObject4 = _taggedTemplateLiteral(["\n      padding: ", ";\n      font-size: ", ";\n      line-height: ", ";\n    "])), function (_ref7) {
    var theme = _ref7.theme;
    return theme.button.size.medium.padding;
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.button.font.medium.fontSize;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.button.font.medium.lineHeight;
  });
}, function (props) {
  return props.$size === 'sm' && (0,external_styled_components_.css)(Button_styled_templateObject5 || (Button_styled_templateObject5 = _taggedTemplateLiteral(["\n      padding: ", ";\n      font-size: ", ";\n      line-height: ", ";\n    "])), function (_ref10) {
    var theme = _ref10.theme;
    return theme.button.size.small.padding;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.button.font.small.fontSize;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.button.font.small.lineHeight;
  });
}, function (props) {
  return props.$color === 'primary' && (0,external_styled_components_.css)(styled_templateObject6 || (styled_templateObject6 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n\n      &:hover {\n        background: ", ";\n      }\n      &:active {\n        background: ", ";\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n      &:disabled {\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (_ref13) {
    var theme = _ref13.theme;
    return theme.button.colors.primary.backgroundInitial;
  }, function (_ref14) {
    var theme = _ref14.theme;
    return theme.button.colors.primary.text;
  }, function (_ref15) {
    var theme = _ref15.theme;
    return theme.button.colors.primary.backgroundHover;
  }, function (_ref16) {
    var theme = _ref16.theme;
    return theme.button.colors.primary.backgroundActive;
  }, function (_ref17) {
    var theme = _ref17.theme;
    return theme.button.colors.primary.backgroundDisabled;
  }, function (_ref18) {
    var theme = _ref18.theme;
    return theme.button.colors.primary.textDisabled;
  });
}, function (props) {
  return props.$color === 'secondary' && (0,external_styled_components_.css)(styled_templateObject7 || (styled_templateObject7 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n\n      &:hover {\n        background: ", ";\n      }\n      &:active {\n        background: ", ";\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      }\n      &:disabled {\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (_ref19) {
    var theme = _ref19.theme;
    return theme.button.colors.secondary.backgroundInitial;
  }, function (_ref20) {
    var theme = _ref20.theme;
    return theme.button.colors.secondary.text;
  }, function (_ref21) {
    var theme = _ref21.theme;
    return theme.button.colors.secondary.backgroundHover;
  }, function (_ref22) {
    var theme = _ref22.theme;
    return theme.button.colors.secondary.backgroundActive;
  }, function (_ref23) {
    var theme = _ref23.theme;
    return theme.button.colors.secondary.backgroundDisabled;
  }, function (_ref24) {
    var theme = _ref24.theme;
    return theme.button.colors.primary.textDisabled;
  });
});
;// CONCATENATED MODULE: ./src/components/Button/Button.tsx


var Button_excluded = ["variant", "color", "size", "children"];
function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Button_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var Button = function Button(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'contained' : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'lg' : _ref$size,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, Button_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(styled_Button, Button_objectSpread(Button_objectSpread({
    $variant: variant,
    $color: color,
    $size: size
  }, props), {}, {
    children: children
  }));
};
;// CONCATENATED MODULE: ./src/components/Button/index.ts

;// CONCATENATED MODULE: ./src/utils/refSetter.ts
/**
 * Useful when passing refs from outside, but want to handle internal ref.
 * Keeps passed refs in sync, by creating ref callback
 * @param refs
 */
var refSetter = function refSetter() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return function (elem) {
    refs.forEach(function (someRef) {
      if (!someRef) return;
      if (typeof someRef === 'function') {
        someRef(elem);
      } else {
        someRef.current = elem;
      }
    });
  };
};
;// CONCATENATED MODULE: ./src/utils/setCursorPosition.ts
var setCursorPosition = function setCursorPosition(input, position) {
  if (!input.setSelectionRange) return;
  setTimeout(function () {
    input.setSelectionRange(position, position);
  }, 0);
};
;// CONCATENATED MODULE: ./src/components/Input/assets/authorization-password.svg
var authorization_password_path;
function authorization_password_extends() { authorization_password_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return authorization_password_extends.apply(this, arguments); }

var SvgAuthorizationPassword = function SvgAuthorizationPassword(props) {
  return /*#__PURE__*/external_react_.createElement("svg", authorization_password_extends({
    width: 21,
    height: 14,
    viewBox: "0 0 19 14",
    fill: "var(--color-dull-grey)",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), authorization_password_path || (authorization_password_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M6.972 7c0 .638.257 1.25.715 1.7a2.459 2.459 0 0 0 1.726.705c.647 0 1.268-.253 1.726-.704A2.387 2.387 0 0 0 11.853 7c0-.638-.257-1.25-.714-1.7a2.459 2.459 0 0 0-1.726-.705c-.647 0-1.268.253-1.726.704A2.387 2.387 0 0 0 6.972 7Zm11.902-.554C16.808 2.158 13.686 0 9.5 0 5.312 0 2.192 2.158.126 6.448a1.279 1.279 0 0 0 0 1.106C2.192 11.842 5.314 14 9.5 14c4.188 0 7.308-2.158 9.374-6.448a1.278 1.278 0 0 0 0-1.106Zm-9.461 4.333C7.295 10.78 5.578 9.087 5.578 7c0-2.087 1.717-3.78 3.835-3.78S13.248 4.914 13.248 7c0 2.087-1.717 3.78-3.835 3.78Z"
  })));
};
/* harmony default export */ const authorization_password = (SvgAuthorizationPassword);
;// CONCATENATED MODULE: ./src/components/Input/assets/eyeCrossed.svg
var eyeCrossed_path, eyeCrossed_path2;
function eyeCrossed_extends() { eyeCrossed_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return eyeCrossed_extends.apply(this, arguments); }

var SvgEyeCrossed = function SvgEyeCrossed(props) {
  return /*#__PURE__*/external_react_.createElement("svg", eyeCrossed_extends({
    width: 22,
    height: 22,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), eyeCrossed_path || (eyeCrossed_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M10.914 13.406a2.407 2.407 0 0 0 2.397-2.615l-2.606 2.606c.069.006.138.01.209.01Zm7.965-9.85-.918-.916a.172.172 0 0 0-.243 0l-2.349 2.35c-1.295-.663-2.752-.994-4.37-.994-4.128 0-7.21 2.15-9.242 6.452a1.296 1.296 0 0 0 0 1.106c.812 1.71 1.79 3.082 2.934 4.114l-2.273 2.271a.172.172 0 0 0 0 .243l.917.918a.172.172 0 0 0 .243 0l15.3-15.3a.172.172 0 0 0 0-.243ZM7.133 11a3.781 3.781 0 0 1 5.562-3.336L11.65 8.708a2.408 2.408 0 0 0-3.028 3.028l-1.044 1.045A3.762 3.762 0 0 1 7.133 11Z",
    fill: "var(--color-dull-grey)"
  })), eyeCrossed_path2 || (eyeCrossed_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M20.242 10.446c-.756-1.593-1.656-2.892-2.7-3.896l-3.097 3.096a3.783 3.783 0 0 1-4.884 4.885l-2.627 2.627c1.218.564 2.574.846 4.066.846 4.13 0 7.21-2.15 9.242-6.452a1.294 1.294 0 0 0 0-1.106Z",
    fill: "var(--color-dull-grey)"
  })));
};
/* harmony default export */ const eyeCrossed = (SvgEyeCrossed);
;// CONCATENATED MODULE: ./src/components/Input/styled.ts

var Input_styled_templateObject, Input_styled_templateObject2, Input_styled_templateObject3, Input_styled_templateObject4, Input_styled_templateObject5, Input_styled_templateObject6, Input_styled_templateObject7, styled_templateObject8, styled_templateObject9, styled_templateObject10;



var styled_Wrapper = external_styled_components_default().div(Input_styled_templateObject || (Input_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: ", ";\n  gap: ", ";\n\n  box-sizing: border-box;\n\n  width: 100%;\n  height: 40px;\n\n  padding: ", ";\n\n  border: ", " solid ", ";\n  border-radius: ", ";\n\n  outline: none;\n  cursor: text;\n\n  background-color: ", ";\n\n  @media (hover: hover) {\n    &:hover {\n      border-color: ", ";\n    }\n  }\n\n  ", "\n\n  ", "\n\n\t", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.input.font.fontFamily;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.input.iconGap;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.input.size.padding;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.input.size.borderWidth;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.input.colors.initial.border;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.input.borderRadius;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.input.colors.initial.background;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.input.colors.borderHover;
}, function (props) {
  return props.$isFocused && (0,external_styled_components_.css)(Input_styled_templateObject2 || (Input_styled_templateObject2 = _taggedTemplateLiteral(["\n      border-color: ", ";\n\n      @media (hover: hover) {\n        &:hover {\n          border-color: ", ";\n        }\n      }\n    "])), function (_ref9) {
    var theme = _ref9.theme;
    return theme.input.colors.borderFocused;
  }, function (_ref10) {
    var theme = _ref10.theme;
    return theme.input.colors.borderFocusedHover;
  });
}, function (props) {
  return props.$isError && (0,external_styled_components_.css)(Input_styled_templateObject3 || (Input_styled_templateObject3 = _taggedTemplateLiteral(["\n      border-color: ", ";\n      @media (hover: hover) {\n        &:hover {\n          border-color: ", ";\n        }\n      }\n    "])), function (_ref11) {
    var theme = _ref11.theme;
    return theme.input.colors.borderError;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.input.colors.borderErrorHover;
  });
}, function (props) {
  return props.$isDisabled && (0,external_styled_components_.css)(Input_styled_templateObject4 || (Input_styled_templateObject4 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border-color: ", ";\n\n      cursor: default;\n      pointer-events: none;\n    "])), function (_ref13) {
    var theme = _ref13.theme;
    return theme.input.colors.disabled.background;
  }, function (_ref14) {
    var theme = _ref14.theme;
    return theme.input.colors.disabled.border;
  });
});
var LeftIcon = external_styled_components_default().div(Input_styled_templateObject5 || (Input_styled_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n"])));
var Input = external_styled_components_default().input(Input_styled_templateObject6 || (Input_styled_templateObject6 = _taggedTemplateLiteral(["\n  flex-grow: 1;\n\n  padding: 0;\n  min-width: 0;\n\n  font-family: inherit;\n  font-style: normal;\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  border: none;\n  outline: none;\n\n  color: ", ";\n\n  &::placeholder {\n    color: ", ";\n    font-weight: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n\n    cursor: default;\n  }\n"])), function (_ref15) {
  var theme = _ref15.theme;
  return theme.input.font.inputWeight;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.input.font.fontSize;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.input.font.lineHeight;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.input.colors.initial.text;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.input.colors.placeholder;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.input.font.placeholderWeight;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.input.colors.disabled.background;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.input.colors.disabled.text;
});
var RightIcon = external_styled_components_default().div(Input_styled_templateObject7 || (Input_styled_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n"])));
var PasswordIconWrapper = external_styled_components_default().div(styled_templateObject8 || (styled_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-shrink: 0;\n"])));
var HidePassword = external_styled_components_default()(authorization_password)(styled_templateObject9 || (styled_templateObject9 = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  padding: 0px 1px;\n  cursor: pointer;\n  &:active {\n    transform: scale(0.9);\n  }\n"])));
var ShowPassword = external_styled_components_default()(eyeCrossed)(styled_templateObject10 || (styled_templateObject10 = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  cursor: pointer;\n  &:active {\n    transform: scale(0.9);\n  }\n"])));
;// CONCATENATED MODULE: ./src/components/Input/Input.tsx



var Input_excluded = ["iconLeft", "iconRight", "type", "status", "className", "inputClassName", "disabled", "style", "showPasswordIcon", "hidePasswordIcon"];
function Input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Input_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var Input_Input = /*#__PURE__*/(0,external_react_.forwardRef)(function (_ref, ref) {
  var iconLeft = _ref.iconLeft,
    iconRight = _ref.iconRight,
    type = _ref.type,
    status = _ref.status,
    className = _ref.className,
    inputClassName = _ref.inputClassName,
    disabled = _ref.disabled,
    style = _ref.style,
    _ref$showPasswordIcon = _ref.showPasswordIcon,
    showPasswordIcon = _ref$showPasswordIcon === void 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(ShowPassword, {}) : _ref$showPasswordIcon,
    _ref$hidePasswordIcon = _ref.hidePasswordIcon,
    hidePasswordIcon = _ref$hidePasswordIcon === void 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(HidePassword, {}) : _ref$hidePasswordIcon,
    restProps = _objectWithoutProperties(_ref, Input_excluded);
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFocused = _useState2[0],
    setIsFocused = _useState2[1];
  var _useState3 = (0,external_react_.useState)(type),
    _useState4 = _slicedToArray(_useState3, 2),
    inputType = _useState4[0],
    setInputType = _useState4[1];
  var _useState5 = (0,external_react_.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isShowPassword = _useState6[0],
    setIsShowPassword = _useState6[1];
  var innerRef = (0,external_react_.useRef)(null);
  var onMakePasswordVisible = function onMakePasswordVisible() {
    inputType === 'password' ? setInputType('text') : setInputType('password');
    setIsShowPassword(function (prev) {
      return !prev;
    });
    if (innerRef.current) {
      setCursorPosition(innerRef.current, innerRef.current.value.length);
    }
  };
  var onWrapperClick = function onWrapperClick() {
    var _innerRef$current;
    innerRef === null || innerRef === void 0 ? void 0 : (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.focus();
  };
  var onFocus = function onFocus(e) {
    var _restProps$onFocus;
    setIsFocused(true);
    (_restProps$onFocus = restProps.onFocus) === null || _restProps$onFocus === void 0 ? void 0 : _restProps$onFocus.call(restProps, e);
  };
  var onBlur = function onBlur(e) {
    var _restProps$onBlur;
    setIsFocused(false);
    (_restProps$onBlur = restProps.onBlur) === null || _restProps$onBlur === void 0 ? void 0 : _restProps$onBlur.call(restProps, e);
  };
  var onInputMouseDown = function onInputMouseDown(e) {
    var _restProps$onMouseDow;
    e.stopPropagation();
    (_restProps$onMouseDow = restProps.onMouseDown) === null || _restProps$onMouseDow === void 0 ? void 0 : _restProps$onMouseDow.call(restProps, e);
  };
  var isPassword = type === 'password';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_Wrapper, {
    $isFocused: isFocused,
    $isError: status === 'error',
    $isDisabled: disabled,
    className: className,
    style: style,
    onClick: onWrapperClick,
    onMouseDown: function onMouseDown(e) {
      return e.preventDefault();
    },
    children: [iconLeft && /*#__PURE__*/(0,jsx_runtime.jsx)(LeftIcon, {
      children: iconLeft
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Input, Input_objectSpread(Input_objectSpread({
      ref: refSetter(ref, innerRef),
      autoComplete: "off",
      spellCheck: "false",
      type: inputType,
      disabled: disabled
    }, restProps), {}, {
      className: inputClassName,
      onFocus: onFocus,
      onBlur: onBlur,
      onMouseDown: onInputMouseDown
    })), (iconRight || isPassword) && /*#__PURE__*/(0,jsx_runtime.jsxs)(RightIcon, {
      children: [isPassword && isShowPassword && /*#__PURE__*/(0,jsx_runtime.jsx)(PasswordIconWrapper, {
        onClick: onMakePasswordVisible,
        children: showPasswordIcon
      }), isPassword && !isShowPassword && /*#__PURE__*/(0,jsx_runtime.jsx)(PasswordIconWrapper, {
        onClick: onMakePasswordVisible,
        children: hidePasswordIcon
      }), iconRight]
    })]
  });
});
Input_Input.displayName = 'Input';
;// CONCATENATED MODULE: ./src/components/Input/index.ts

;// CONCATENATED MODULE: ./src/components/Chip/close.svg
var close_path;
function close_extends() { close_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return close_extends.apply(this, arguments); }

var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/external_react_.createElement("svg", close_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), close_path || (close_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m12.94 12 5.527-5.527a.667.667 0 0 0-.94-.94L12 11.06 6.473 5.527a.67.67 0 1 0-.947.946L11.06 12l-5.534 5.527a.667.667 0 1 0 .94.94L12 12.94l5.526 5.527a.667.667 0 0 0 .94-.94L12.94 12Z",
    fill: "var(--color-silver)"
  })));
};
/* harmony default export */ const Chip_close = (SvgClose);
;// CONCATENATED MODULE: ./src/components/Chip/styled.ts

var Chip_styled_templateObject, Chip_styled_templateObject2, Chip_styled_templateObject3, Chip_styled_templateObject4, Chip_styled_templateObject5;

var Chip_styled_Wrapper = external_styled_components_default().div(Chip_styled_templateObject || (Chip_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  gap: ", ";\n  padding: ", ";\n  width: ", ";\n  max-width: ", ";\n  border-radius: ", ";\n  border: ", " solid ", ";\n  background-color: ", ";\n\n  color: ", ";\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.chip.size.gap;
}, function (_ref2) {
  var $hasCloseIcon = _ref2.$hasCloseIcon;
  return $hasCloseIcon ? function (_ref3) {
    var theme = _ref3.theme;
    return theme.chip.size.paddingWithIcon;
  } : function (_ref4) {
    var theme = _ref4.theme;
    return theme.chip.size.padding;
  };
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.chip.size.width;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.chip.size.maxWidth;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.chip.size.borderRadius;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.chip.size.border;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.chip.colors.border;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.chip.colors.backgroundColor;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.chip.colors.color;
}, function (_ref12) {
  var $disabled = _ref12.$disabled;
  return $disabled && (0,external_styled_components_.css)(Chip_styled_templateObject2 || (Chip_styled_templateObject2 = _taggedTemplateLiteral(["\n      color: ", ";\n      border: ", " solid\n        ", ";\n      pointer-events: none;\n    "])), function (_ref13) {
    var theme = _ref13.theme;
    return theme.chip.colors.disabled.color;
  }, function (_ref14) {
    var theme = _ref14.theme;
    return theme.chip.size.disabled.border;
  }, function (_ref15) {
    var theme = _ref15.theme;
    return theme.chip.colors.disabled.border;
  });
});
var styled_Text = external_styled_components_default().div(Chip_styled_templateObject3 || (Chip_styled_templateObject3 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  max-width: ", ";\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"])), function (_ref16) {
  var theme = _ref16.theme;
  return theme.chip.font.fontFamily;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.chip.font.fontWeight;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.chip.font.fontSize;
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.chip.font.lineHeight;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.chip.size.maxWidthText;
});
var Icon = external_styled_components_default().div(Chip_styled_templateObject4 || (Chip_styled_templateObject4 = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  border-radius: ", ";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n    path: {\n      fill: ", ";\n    }\n  }\n\n  ", "\n"])), function (_ref21) {
  var theme = _ref21.theme;
  return theme.chip.size.borderRadiusIcon;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.chip.colors.hover.backgroundColorIcon;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.chip.colors.hover.fillIcon;
}, function (_ref24) {
  var $disabled = _ref24.$disabled;
  return $disabled && (0,external_styled_components_.css)(Chip_styled_templateObject5 || (Chip_styled_templateObject5 = _taggedTemplateLiteral(["\n      pointer-events: none;\n      background-color: ", ";\n      path: {\n        fill: ", ";\n      }\n    "])), function (_ref25) {
    var theme = _ref25.theme;
    return theme.chip.colors.disabled.backgroundColorIcon;
  }, function (_ref26) {
    var theme = _ref26.theme;
    return theme.chip.colors.disabled.fillIcon;
  });
});
;// CONCATENATED MODULE: ./src/components/Chip/Chip.tsx





var Chip = /*#__PURE__*/(0,external_react_.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    disabled = _ref.disabled,
    onClose = _ref.onClose,
    onClick = _ref.onClick,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'm' : _ref$size;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Chip_styled_Wrapper, {
    ref: ref,
    onClick: onClick,
    className: className,
    $disabled: disabled,
    $size: size,
    $hasCloseIcon: !!onClose,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(styled_Text, {
      size: size,
      children: children
    }), !!onClose && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
      onClick: onClose,
      $disabled: disabled,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Chip_close, {})
    })]
  });
});
Chip.displayName = 'Chip';
;// CONCATENATED MODULE: ./src/components/Chip/index.tsx


;// CONCATENATED MODULE: ./src/components/Spinner/icons/Spinner.svg
var Spinner_path;
function Spinner_extends() { Spinner_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Spinner_extends.apply(this, arguments); }

var SvgSpinner = function SvgSpinner(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Spinner_extends({
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Spinner_path || (Spinner_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M42 21A21 21 0 1 1 21 0v3.732A17.268 17.268 0 1 0 38.268 21H42Z",
    fill: "var(--color-navy-blue)"
  })));
};
/* harmony default export */ const Spinner = (SvgSpinner);
;// CONCATENATED MODULE: ./src/components/Spinner/styled.ts

var Spinner_styled_templateObject, Spinner_styled_templateObject2, Spinner_styled_templateObject3;


var Spinner_styled_Wrapper = external_styled_components_default().span(Spinner_styled_templateObject || (Spinner_styled_templateObject = _taggedTemplateLiteral(["\n  display: block;\n\n  width: ", ";\n  height: ", ";\n"])), function (_ref) {
  var width = _ref.width;
  return "".concat(width, "px");
}, function (_ref2) {
  var height = _ref2.height;
  return "".concat(height, "px");
});
var Spin = (0,external_styled_components_.keyframes)(Spinner_styled_templateObject2 || (Spinner_styled_templateObject2 = _taggedTemplateLiteral(["\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var Svg = external_styled_components_default()(Spinner)(Spinner_styled_templateObject3 || (Spinner_styled_templateObject3 = _taggedTemplateLiteral(["\n  animation: ", " 1s linear infinite;\n\n  path {\n    fill: ", ";\n  }\n"])), Spin, function (_ref3) {
  var appearance = _ref3.appearance;
  return appearance;
});
;// CONCATENATED MODULE: ./src/components/Spinner/Spinner.tsx


var Spinner_Spinner = function Spinner(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 42 : _ref$size,
    className = _ref.className,
    _ref$appearance = _ref.appearance,
    appearance = _ref$appearance === void 0 ? '#5896C0' : _ref$appearance;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Spinner_styled_Wrapper, {
    className: className,
    width: size,
    height: size,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Svg, {
      appearance: appearance
    })
  });
};
;// CONCATENATED MODULE: ./src/components/Spinner/index.tsx

;// CONCATENATED MODULE: ./src/utils/observeRect.ts
// https://github.com/reach/observe-rect

var props = ['bottom', 'height', 'left', 'right', 'top', 'width'];
var rectChanged = function rectChanged() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return props.some(function (prop) {
    return a[prop] !== b[prop];
  });
};
var observedNodes = new Map();
var observeRect_rafId;
var run = function run() {
  var changedStates = [];
  observedNodes.forEach(function (state, node) {
    var _node$getBoundingClie = node.getBoundingClientRect(),
      bottom = _node$getBoundingClie.bottom,
      height = _node$getBoundingClie.height,
      left = _node$getBoundingClie.left,
      right = _node$getBoundingClie.right,
      top = _node$getBoundingClie.top,
      width = _node$getBoundingClie.width,
      x = _node$getBoundingClie.x,
      y = _node$getBoundingClie.y;
    var newRect = {
      bottom: bottom,
      height: height,
      left: left,
      right: right,
      top: top,
      width: width,
      x: x || left,
      y: y || top
    };
    if (rectChanged(newRect, state.rect)) {
      state.rect = newRect;
      changedStates.push(state);
    }
  });
  changedStates.forEach(function (state) {
    state.callbacks.forEach(function (cb) {
      return cb(state.rect);
    });
  });
  observeRect_rafId = window.requestAnimationFrame(run);
};
var observeRect = function observeRect(node, cb) {
  return {
    observe: function observe() {
      var wasEmpty = observedNodes.size === 0;
      if (observedNodes.has(node)) {
        var _observedNodes$get;
        (_observedNodes$get = observedNodes.get(node)) === null || _observedNodes$get === void 0 ? void 0 : _observedNodes$get.callbacks.push(cb);
      } else {
        observedNodes.set(node, {
          rect: undefined,
          hasRectChanged: false,
          callbacks: [cb]
        });
      }
      if (wasEmpty) run();
    },
    unobserve: function unobserve() {
      var state = observedNodes.get(node);
      if (state) {
        var index = state.callbacks.indexOf(cb);
        if (index >= 0) state.callbacks.splice(index, 1);
        if (!state.callbacks.length) observedNodes["delete"](node);
        if (!observedNodes.size) cancelAnimationFrame(observeRect_rafId);
      }
    }
  };
};
;// CONCATENATED MODULE: ./src/components/PositionInPortal/styled.ts

var PositionInPortal_styled_templateObject;

var Portal = external_styled_components_default().div(PositionInPortal_styled_templateObject || (PositionInPortal_styled_templateObject = _taggedTemplateLiteral(["\n  pointer-events: none;\n\n  position: fixed;\n\n  overflow: visible;\n\n  z-index: 3;\n"])));
;// CONCATENATED MODULE: ./src/components/PositionInPortal/PositionInPortal.tsx


var PositionInPortal_excluded = ["targetRef", "relativeRef", "container", "fullContainerWidth", "className"];
function PositionInPortal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function PositionInPortal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PositionInPortal_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PositionInPortal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var PositionInPortal = function PositionInPortal(_ref) {
  var targetRef = _ref.targetRef,
    relativeRef = _ref.relativeRef,
    container = _ref.container,
    fullContainerWidth = _ref.fullContainerWidth,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, PositionInPortal_excluded);
  var positionedPortalContainerRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(function () {
    var node = positionedPortalContainerRef.current;
    var relativeElement = relativeRef === null || relativeRef === void 0 ? void 0 : relativeRef.current;
    var relativeRect = relativeElement ? relativeElement.getBoundingClientRect() : {
      x: 0,
      y: 0
    };
    if (node && targetRef.current) {
      var observer = observeRect(targetRef.current, function (rect) {
        if (rect) {
          var x = rect.x,
            y = rect.y,
            height = rect.height,
            width = rect.width;
          var style = node.style;
          style.top = "".concat(relativeRect.y + y, "px");
          style.left = fullContainerWidth ? '0px' : "".concat(relativeRect.x + x, "px");
          style.height = "".concat(height, "px");
          style.width = fullContainerWidth ? '100%' : "".concat(width, "px");
        }
      });
      observer.observe();
      return function () {
        observer.unobserve();
      };
    }
  }, [fullContainerWidth]);
  return /*#__PURE__*/(0,external_react_dom_.createPortal)( /*#__PURE__*/(0,jsx_runtime.jsx)(Portal, PositionInPortal_objectSpread({
    className: className,
    ref: positionedPortalContainerRef
  }, props)), (container === null || container === void 0 ? void 0 : container.current) || document.body);
};
;// CONCATENATED MODULE: ./src/components/PositionInPortal/index.tsx

;// CONCATENATED MODULE: ./src/components/Textarea/styled.ts

var Textarea_styled_templateObject, Textarea_styled_templateObject2, Textarea_styled_templateObject3, Textarea_styled_templateObject4;

var StyledTextarea = external_styled_components_default().textarea(Textarea_styled_templateObject || (Textarea_styled_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  max-height: 80px;\n  min-height: 40px;\n\n  padding: ", ";\n\n  background-color: ", ";\n\n  border: ", " solid ", ";\n  border-radius: ", ";\n\n  font-size: ", ";\n  line-height: ", ";\n\n  resize: none;\n\n  overflow: hidden;\n  outline: none;\n\n  color: ", ";\n\n  &::placeholder {\n    color: ", ";\n    font-weight: ", ";\n  }\n\n  &:hover,\n  &:focus {\n    border-color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n    ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.textarea.size.padding;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.textarea.colors.initial.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.textarea.size.borderWidth;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.textarea.colors.initial.border;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.textarea.borderRadius;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.textarea.font.fontSize;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.textarea.font.lineHeight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.textarea.colors.initial.text;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.textarea.colors.placeholder;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.textarea.font.placeholderWeight;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.textarea.colors.borderHover;
}, function (_ref12) {
  var disabled = _ref12.disabled;
  return disabled && (0,external_styled_components_.css)(Textarea_styled_templateObject2 || (Textarea_styled_templateObject2 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border-color: ", ";\n\n      &:hover {\n        border-color: ", ";\n      }\n    "])), function (_ref13) {
    var theme = _ref13.theme;
    return theme.textarea.colors.disabled.background;
  }, function (_ref14) {
    var theme = _ref14.theme;
    return theme.textarea.colors.disabled.border;
  }, function (_ref15) {
    var theme = _ref15.theme;
    return theme.textarea.colors.disabled.border;
  });
}, function (_ref16) {
  var status = _ref16.status;
  return status === 'error' && (0,external_styled_components_.css)(Textarea_styled_templateObject3 || (Textarea_styled_templateObject3 = _taggedTemplateLiteral(["\n      border-color: ", ";\n\n      &:hover {\n        border-color: ", ";\n      }\n    "])), function (_ref17) {
    var theme = _ref17.theme;
    return theme.textarea.colors.borderError;
  }, function (_ref18) {
    var theme = _ref18.theme;
    return theme.textarea.colors.borderErrorHover;
  });
}, function (_ref19) {
  var $isScrollable = _ref19.$isScrollable;
  return $isScrollable && (0,external_styled_components_.css)(Textarea_styled_templateObject4 || (Textarea_styled_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 6px;\n\n      cursor: auto;\n\n      overflow: auto;\n\n      &::-webkit-scrollbar {\n        width: 4px;\n        height: 4px;\n\n        margin: 8px;\n      }\n      &::-webkit-scrollbar-thumb {\n        border-radius: 10px;\n\n        background-color: var(--color-silver);\n\n        margin: 8px;\n      }\n\n      &::-webkit-scrollbar-track {\n        border-radius: 10px;\n\n        background-color: transparent;\n      }\n    "])));
});
;// CONCATENATED MODULE: ./src/components/Textarea/Textarea.tsx



var Textarea_excluded = ["className", "status", "onChange", "onKeyDown", "minHeight", "maxHeight"];
function Textarea_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Textarea_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Textarea_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Textarea_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var Textarea = /*#__PURE__*/(0,external_react_.forwardRef)(function (_ref, refFromProps) {
  var className = _ref.className,
    status = _ref.status,
    onChange = _ref.onChange,
    onKeyDown = _ref.onKeyDown,
    _ref$minHeight = _ref.minHeight,
    minHeight = _ref$minHeight === void 0 ? 39 : _ref$minHeight,
    _ref$maxHeight = _ref.maxHeight,
    maxHeight = _ref$maxHeight === void 0 ? 84 : _ref$maxHeight,
    restProps = _objectWithoutProperties(_ref, Textarea_excluded);
  var ref = (0,external_react_.useRef)(null);
  var _useState = (0,external_react_.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  var _useState3 = (0,external_react_.useState)("".concat(minHeight, "px")),
    _useState4 = _slicedToArray(_useState3, 2),
    textAreaHeight = _useState4[0],
    setTextAreaHeight = _useState4[1];
  var _useState5 = (0,external_react_.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isScrollable = _useState6[0],
    setIsScrollable = _useState6[1];
  (0,external_react_.useEffect)(function () {
    var onResize = function onResize() {
      setTextAreaHeight("".concat(minHeight, "px"));
      if (!ref.current) return;
      setTextAreaHeight("".concat(ref.current.scrollHeight, "px"));
    };
    if (!ref.current) return;
    setTextAreaHeight("".concat(ref.current.scrollHeight, "px"));
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, [minHeight, text]);
  (0,external_react_.useEffect)(function () {
    setText(restProps.value || '');
  }, [restProps.value]);
  var onChangeHandler = function onChangeHandler(event) {
    setTextAreaHeight("".concat(minHeight, "px"));
    if (!ref.current) return;
    setText(event.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  };
  (0,external_react_.useEffect)(function () {
    setIsScrollable(Number(textAreaHeight.replace(/[^0-9, ]/g, '')) > maxHeight);
  }, [maxHeight, textAreaHeight]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledTextarea, Textarea_objectSpread(Textarea_objectSpread({}, restProps), {}, {
    className: className,
    disabled: restProps.disabled,
    status: status,
    $isScrollable: isScrollable,
    style: {
      height: textAreaHeight
    },
    onChange: onChangeHandler,
    onKeyDown: onKeyDown,
    ref: refSetter(ref, refFromProps)
  }));
});
Textarea.displayName = 'Textarea';
;// CONCATENATED MODULE: ./src/components/Textarea/index.tsx

;// CONCATENATED MODULE: ./src/utils/getRandomInt.ts
var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
;// CONCATENATED MODULE: ./src/components/Skeleton/utils.ts
var normalizeSize = function normalizeSize(value) {
  return typeof value === 'number' ? "".concat(value, "px") : value;
};
;// CONCATENATED MODULE: ./src/components/Skeleton/styled.ts

var Skeleton_styled_templateObject, Skeleton_styled_templateObject2, Skeleton_styled_templateObject3;


var Pulse = (0,external_styled_components_.keyframes)(Skeleton_styled_templateObject || (Skeleton_styled_templateObject = _taggedTemplateLiteral(["\n  to {\n    opacity: 0.4;\n  }\n"])));
var StyledSkeleton = external_styled_components_default().span.attrs(function (props) {
  return {
    width: normalizeSize(props.width),
    height: normalizeSize(props.height)
  };
})(Skeleton_styled_templateObject2 || (Skeleton_styled_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n\n  width: ", ";\n  height: ", ";\n\n  background-color: var(--color-soft-grey);\n\n  border-radius: 8px;\n\n  animation: ", " 0.8s ease-in-out infinite alternate-reverse both;\n"])), function (_ref) {
  var width = _ref.width;
  return width;
}, function (_ref2) {
  var height = _ref2.height;
  return height;
}, Pulse);
var Skeleton_styled_Wrapper = external_styled_components_default().span(Skeleton_styled_templateObject3 || (Skeleton_styled_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n  height: ", ";\n"])), function (_ref3) {
  var height = _ref3.height;
  return height;
});
;// CONCATENATED MODULE: ./src/components/Skeleton/PseudoText.tsx








var PseudoText = /*#__PURE__*/(0,external_react_.forwardRef)(
// ({ width: propsWidth = `${getRandomInt(250, 350)}px`, height: propsHeight, className }, ref) => {
function (_ref, ref) {
  var _ref$width = _ref.width,
    propsWidth = _ref$width === void 0 ? "".concat(getRandomInt(20, 60), "%") : _ref$width,
    propsHeight = _ref.height,
    className = _ref.className;
  var _useState = (0,external_react_.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    loaderInfo = _useState2[0],
    setLoaderInfo = _useState2[1];
  var loaderRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(function () {
    if (!loaderRef.current) return;
    var parent = loaderRef.current.parentElement;
    if (!parent) return;
    var _getComputedStyle = getComputedStyle(parent),
      fontSize = _getComputedStyle.fontSize,
      lineHeight = _getComputedStyle.lineHeight;
    setLoaderInfo({
      fontSize: fontSize,
      lineHeight: lineHeight
    });
  }, []);
  var height = normalizeSize(propsHeight);
  var targetHeight = height || (loaderInfo === null || loaderInfo === void 0 ? void 0 : loaderInfo.fontSize);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Skeleton_styled_Wrapper, {
    ref: refSetter(ref, loaderRef),
    height: loaderInfo === null || loaderInfo === void 0 ? void 0 : loaderInfo.lineHeight,
    children: ["\u200B", /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSkeleton, {
      className: className,
      width: propsWidth,
      height: targetHeight
    })]
  });
});
PseudoText.displayName = 'PseudoText';
;// CONCATENATED MODULE: ./src/components/Skeleton/Skeleton.tsx


var Skeleton = function Skeleton(_ref) {
  var propsWidth = _ref.width,
    propsHeight = _ref.height,
    className = _ref.className;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSkeleton, {
    className: className,
    width: propsWidth,
    height: propsHeight
  });
};
;// CONCATENATED MODULE: ./src/components/Skeleton/index.tsx


;// CONCATENATED MODULE: ./src/hooks/useInView.ts


var useInView = function useInView() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    threshold = _ref.threshold,
    rootMargin = _ref.rootMargin,
    root = _ref.root;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isInView = _useState2[0],
    setIsInView = _useState2[1];
  var targetRef = (0,external_react_.useRef)(null);
  var rootRef = (0,external_react_.useRef)(null);
  var onInView = (0,external_react_.useCallback)(function (entries) {
    setIsInView(entries.some(function (_ref2) {
      var isIntersecting = _ref2.isIntersecting;
      return isIntersecting;
    }));
  }, []);
  (0,external_react_.useEffect)(function () {
    var targetElement = targetRef.current;
    if (!targetElement) return;
    var observer = new IntersectionObserver(onInView, {
      threshold: threshold,
      rootMargin: rootMargin,
      root: rootRef.current || root
    });
    observer.observe(targetElement);
    return function () {
      observer.unobserve(targetElement);
    };
  }, [onInView, root, rootMargin, threshold]);
  return [targetRef, isInView, rootRef];
};
;// CONCATENATED MODULE: ./src/components/InfiniteScroll/styled.ts

var InfiniteScroll_styled_templateObject, InfiniteScroll_styled_templateObject2, InfiniteScroll_styled_templateObject3;

var Wrap = external_styled_components_default().div(InfiniteScroll_styled_templateObject || (InfiniteScroll_styled_templateObject = _taggedTemplateLiteral(["\n  overflow: auto;\n"])));
var Inner = external_styled_components_default().div(InfiniteScroll_styled_templateObject2 || (InfiniteScroll_styled_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  position: relative;\n"])));
var Target = external_styled_components_default().div(InfiniteScroll_styled_templateObject3 || (InfiniteScroll_styled_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  height: 1px;\n  width: 100%;\n  background-color: gold;\n\n  bottom: ", ";\n"])), function (props) {
  return props.bottom;
});
;// CONCATENATED MODULE: ./src/components/InfiniteScroll/InfiniteScroll.tsx








var InfiniteScroll = function InfiniteScroll(_ref) {
  var className = _ref.className,
    total = _ref.total,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 5 : _ref$pageSize,
    _ref$triggerOffset = _ref.triggerOffset,
    triggerOffset = _ref$triggerOffset === void 0 ? '20px' : _ref$triggerOffset,
    _ref$initialPage = _ref.initialPage,
    initialPage = _ref$initialPage === void 0 ? 1 : _ref$initialPage,
    renderElement = _ref.renderElement;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isInited = _useState2[0],
    setIsInited = _useState2[1];
  var _useState3 = (0,external_react_.useState)(initialPage),
    _useState4 = _slicedToArray(_useState3, 2),
    page = _useState4[0],
    setPage = _useState4[1];
  var _useInView = useInView(),
    _useInView2 = _slicedToArray(_useInView, 3),
    targetRef = _useInView2[0],
    isInView = _useInView2[1],
    rootRef = _useInView2[2];
  var scrollRef = (0,external_react_.useRef)(null);
  var length = Math.min(pageSize * page, total);
  var isOver = length === total;
  (0,external_react_.useEffect)(function () {
    if (!scrollRef.current) return;

    // Firefox scroll reset on page reload
    scrollRef.current.scrollTop = 0;
  }, []);
  (0,external_react_.useEffect)(function () {
    // continue loading firstMessages until target elem is visible
    if (isInited || isOver) return;
    var scrollElem = scrollRef.current;
    var targetElem = targetRef.current;
    if (!targetElem || !scrollElem) return;
    var isVisible = targetElem.offsetTop < scrollElem.offsetHeight;
    if (!isVisible) return setIsInited(true);
    setPage(function (prev) {
      return prev + 1;
    });
  }, [isOver, page, isInited]);
  (0,external_react_.useEffect)(function () {
    if (!isInited || !isInView || isOver) return;
    setPage(function (prev) {
      return prev + 1;
    });
  }, [isInView, isOver, isInited]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Wrap, {
      className: className,
      ref: refSetter(scrollRef, rootRef),
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Inner, {
        children: [Array.from({
          length: length
        }).map(function (_, ind) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(external_react_.Fragment, {
            children: renderElement(ind)
          }, ind);
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Target, {
          ref: targetRef,
          bottom: triggerOffset
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/InfiniteScroll/useInfiniteScroll.ts



var useInfiniteScroll = function useInfiniteScroll(_ref) {
  var total = _ref.total,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 5 : _ref$pageSize,
    _ref$initialPage = _ref.initialPage,
    initialPage = _ref$initialPage === void 0 ? 1 : _ref$initialPage;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isInited = _useState2[0],
    setIsInited = _useState2[1];
  var _useState3 = (0,external_react_.useState)(initialPage),
    _useState4 = _slicedToArray(_useState3, 2),
    page = _useState4[0],
    setPage = _useState4[1];
  var _useInView = useInView(),
    _useInView2 = _slicedToArray(_useInView, 3),
    targetRef = _useInView2[0],
    isInView = _useInView2[1],
    scrollRef = _useInView2[2];
  var visibleElems = Math.min(pageSize * page, total);
  var isOver = visibleElems === total;
  (0,external_react_.useEffect)(function () {
    if (!scrollRef.current) return;

    // Firefox scroll reset on page reload
    scrollRef.current.scrollTop = 0;
  }, []);
  (0,external_react_.useEffect)(function () {
    // continue loading firstMessages until target elem is visible
    if (isInited || isOver) return;
    var scrollElem = scrollRef.current;
    var targetElem = targetRef.current;
    if (!targetElem || !scrollElem) return;
    var isVisible = targetElem.offsetTop < scrollElem.offsetHeight;
    if (!isVisible) return setIsInited(true);
    setPage(function (prev) {
      return prev + 1;
    });
  }, [isOver, page, isInited]);
  (0,external_react_.useEffect)(function () {
    if (!isInited || !isInView || isOver) return;
    setPage(function (prev) {
      return prev + 1;
    });
  }, [isInView, isOver, isInited]);
  return {
    page: page,
    scrollRef: scrollRef,
    targetRef: targetRef
  };
};
;// CONCATENATED MODULE: ./src/components/InfiniteScroll/index.tsx


;// CONCATENATED MODULE: ./src/components/ClientProvider/ClientProvider.tsx

var ClientProvider_excluded = ["children"];


var ScClientContext = /*#__PURE__*/(0,external_react_.createContext)({});
var useClient = function useClient() {
  return (0,external_react_.useContext)(ScClientContext).client;
};
var ClientProvider = function ClientProvider(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ClientProvider_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ScClientContext.Provider, {
    value: rest,
    children: children
  });
};
;// CONCATENATED MODULE: ./src/components/ClientProvider/index.tsx

;// CONCATENATED MODULE: ./src/components/CommandProvider/CommandProvider.tsx

var CommandProvider_excluded = ["children"];


var CommandContext = /*#__PURE__*/(0,external_react_.createContext)({});
var useCommandContext = function useCommandContext() {
  return (0,external_react_.useContext)(CommandContext);
};
var CommandProvider = function CommandProvider(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, CommandProvider_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CommandContext.Provider, {
    value: rest,
    children: children
  });
};
;// CONCATENATED MODULE: ./src/components/CommandProvider/index.tsx

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: external "ts-sc-client"
var external_ts_sc_client_ = __webpack_require__(401);
;// CONCATENATED MODULE: ./src/utils/snakeToCamelCase.ts
var snakeToCamelCase = function snakeToCamelCase(str) {
  return str.replace(/_(\w)/g, function (_, p1) {
    return p1.toUpperCase();
  });
};
;// CONCATENATED MODULE: ./src/utils/searchKeynodes.ts






var DEFAULT_CACHE_SIZE = 5000;
var shiftMap = function shiftMap(map) {
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (to < 1) return;
  var isDone = false;
  var ind = 0;
  var mapIterator = map.keys();
  while (ind < to && !isDone) {
    var elem = mapIterator.next();
    isDone = !!elem.done;
    map["delete"](elem.value);
    ind++;
  }
};
var searchKeynodesBuilder = function searchKeynodesBuilder(client) {
  var cacheSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CACHE_SIZE;
  var cache = new Map();
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var _len,
      keynodes,
      _key,
      newKeynodes,
      cacheKeynodes,
      overflow,
      foundKeynodes,
      foundKeynodesEntries,
      cacheKeynodesEntries,
      keynodesEntries,
      transformedEntries,
      _args = arguments;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          for (_len = _args.length, keynodes = new Array(_len), _key = 0; _key < _len; _key++) {
            keynodes[_key] = _args[_key];
          }
          newKeynodes = keynodes.filter(function (keynode) {
            return !cache.get(keynode);
          }).map(function (keynode) {
            return {
              id: keynode,
              type: external_ts_sc_client_.ScType.ConstNode
            };
          });
          cacheKeynodes = keynodes.filter(function (keynode) {
            return cache.get(keynode);
          });
          overflow = cache.size + newKeynodes.length - cacheSize;
          if (overflow > 0) shiftMap(cache, overflow);
          if (!newKeynodes.length) {
            _context.next = 11;
            break;
          }
          _context.next = 8;
          return client.resolveKeynodes(newKeynodes);
        case 8:
          _context.t0 = _context.sent;
          _context.next = 12;
          break;
        case 11:
          _context.t0 = [];
        case 12:
          foundKeynodes = _context.t0;
          foundKeynodesEntries = Object.entries(foundKeynodes);
          cacheKeynodesEntries = cacheKeynodes.map(function (keynode) {
            return [keynode, cache.get(keynode)];
          });
          foundKeynodesEntries.forEach(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];
            return cache.set(key, value);
          });
          keynodesEntries = [].concat(foundKeynodesEntries, _toConsumableArray(cacheKeynodesEntries));
          transformedEntries = keynodesEntries.map(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
              key = _ref5[0],
              value = _ref5[1];
            return [snakeToCamelCase(key), value];
          });
          return _context.abrupt("return", Object.fromEntries(transformedEntries));
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
};
;// CONCATENATED MODULE: ./src/utils/langToKeynode.ts
var langToKeynode = {
  ru: 'lang_ru',
  en: 'lang_en'
};
;// CONCATENATED MODULE: ./src/components/ScUtils/scUtilsBuilder.ts



var scUtilsBuilder_excluded = ["nrelMainIdtf"];





var scUtilsBuilder = function scUtilsBuilder(_ref) {
  var client = _ref.client;
  var searchKeynodes = searchKeynodesBuilder(client);
  var getMainIdLinkAddr = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(addr, lang) {
      var _yield$searchKeynodes, nrelMainIdtf, rest, foundLang, template, linkAlias, result;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return searchKeynodes('nrel_main_idtf', langToKeynode[lang]);
          case 2:
            _yield$searchKeynodes = _context.sent;
            nrelMainIdtf = _yield$searchKeynodes.nrelMainIdtf;
            rest = _objectWithoutProperties(_yield$searchKeynodes, scUtilsBuilder_excluded);
            foundLang = rest[snakeToCamelCase(langToKeynode[lang])];
            template = new external_ts_sc_client_.ScTemplate();
            linkAlias = '_link';
            template.quintuple(addr, external_ts_sc_client_.ScType.VarCommonArc, [external_ts_sc_client_.ScType.VarNodeLink, linkAlias], external_ts_sc_client_.ScType.VarPermPosArc, nrelMainIdtf);
            template.triple(foundLang, external_ts_sc_client_.ScType.VarPermPosArc, linkAlias);
            _context.next = 12;
            return client.searchByTemplate(template);
          case 12:
            result = _context.sent;
            if (!result.length) {
              _context.next = 15;
              break;
            }
            return _context.abrupt("return", result[0].get(linkAlias));
          case 15:
            return _context.abrupt("return", null);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getMainIdLinkAddr(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getMainId = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(addr, lang) {
      var linkAddr, contents;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getMainIdLinkAddr(addr, lang);
          case 2:
            linkAddr = _context2.sent;
            if (!linkAddr) {
              _context2.next = 8;
              break;
            }
            _context2.next = 6;
            return client.getLinkContents([linkAddr]);
          case 6:
            contents = _context2.sent;
            return _context2.abrupt("return", contents[0].data);
          case 8:
            return _context2.abrupt("return", null);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getMainId(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  var getSystemId = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3(addr) {
      var _yield$searchKeynodes2, nrelSystemIdentifier, template, linkAlias, result, contents;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return searchKeynodes('nrel_system_identifier');
          case 2:
            _yield$searchKeynodes2 = _context3.sent;
            nrelSystemIdentifier = _yield$searchKeynodes2.nrelSystemIdentifier;
            template = new external_ts_sc_client_.ScTemplate();
            linkAlias = '_link';
            template.quintuple(addr, external_ts_sc_client_.ScType.VarCommonArc, [external_ts_sc_client_.ScType.VarNodeLink, linkAlias], external_ts_sc_client_.ScType.VarPermPosArc, nrelSystemIdentifier);
            _context3.next = 9;
            return client.searchByTemplate(template);
          case 9:
            result = _context3.sent;
            if (!result.length) {
              _context3.next = 15;
              break;
            }
            _context3.next = 13;
            return client.getLinkContents([result[0].get(linkAlias)]);
          case 13:
            contents = _context3.sent;
            return _context3.abrupt("return", String(contents[0].data));
          case 15:
            return _context3.abrupt("return", null);
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getSystemId(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var getId = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4(addr, lang) {
      var mainId, systemId;
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getMainId(addr, lang);
          case 2:
            mainId = _context4.sent;
            if (!mainId) {
              _context4.next = 5;
              break;
            }
            return _context4.abrupt("return", String(mainId));
          case 5:
            _context4.next = 7;
            return getSystemId(addr);
          case 7:
            systemId = _context4.sent;
            if (!systemId) {
              _context4.next = 10;
              break;
            }
            return _context4.abrupt("return", String(systemId));
          case 10:
            return _context4.abrupt("return", String(addr.value));
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function getId(_x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }();
  var addrOrSystemIdAddr = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee5(addrOrSystemId) {
      var numericAddr, keynodes;
      return regenerator_default().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            numericAddr = Number(addrOrSystemId);
            if (!numericAddr) {
              _context5.next = 3;
              break;
            }
            return _context5.abrupt("return", numericAddr);
          case 3:
            _context5.next = 5;
            return searchKeynodes(String(addrOrSystemId));
          case 5:
            keynodes = _context5.sent;
            return _context5.abrupt("return", keynodes[snakeToCamelCase(String(addrOrSystemId))].value);
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function addrOrSystemIdAddr(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();
  var getResult = function getResult(actionNode) {
    return new Promise(function (resolve) {
      searchKeynodes('nrel_result').then( /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee7(_ref7) {
          var _searchRes$;
          var nrelResult, onActionFinished, eventParams, _yield$client$createE, _yield$client$createE2, eventId, resultAlias, template, searchRes, result;
          return regenerator_default().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                nrelResult = _ref7.nrelResult;
                onActionFinished = /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee6(_subscribedAddr, arc, anotherAddr, eventId) {
                    var template, isnrelResult;
                    return regenerator_default().wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                        case 0:
                          template = new external_ts_sc_client_.ScTemplate();
                          template.triple(nrelResult, external_ts_sc_client_.ScType.VarPermPosArc, arc);
                          _context6.next = 4;
                          return client.searchByTemplate(template);
                        case 4:
                          isnrelResult = _context6.sent.length;
                          if (isnrelResult) {
                            _context6.next = 7;
                            break;
                          }
                          return _context6.abrupt("return");
                        case 7:
                          client.destroyElementaryEventSubscriptions(eventId);
                          resolve(anotherAddr);
                        case 9:
                        case "end":
                          return _context6.stop();
                      }
                    }, _callee6);
                  }));
                  return function onActionFinished(_x10, _x11, _x12, _x13) {
                    return _ref9.apply(this, arguments);
                  };
                }();
                eventParams = new external_ts_sc_client_.ScEventSubscriptionParams(actionNode, external_ts_sc_client_.ScEventType.AfterGenerateOutgoingArc, onActionFinished);
                _context7.next = 5;
                return client.createElementaryEventSubscriptions(eventParams);
              case 5:
                _yield$client$createE = _context7.sent;
                _yield$client$createE2 = _slicedToArray(_yield$client$createE, 1);
                eventId = _yield$client$createE2[0];
                resultAlias = '_result';
                template = new external_ts_sc_client_.ScTemplate();
                template.quintuple(actionNode, external_ts_sc_client_.ScType.VarCommonArc, [external_ts_sc_client_.ScType.VarNode, resultAlias], external_ts_sc_client_.ScType.VarPermPosArc, nrelResult);
                _context7.next = 13;
                return client.searchByTemplate(template);
              case 13:
                searchRes = _context7.sent;
                result = (_searchRes$ = searchRes[0]) === null || _searchRes$ === void 0 ? void 0 : _searchRes$.get(resultAlias);
                if (result) {
                  _context7.next = 17;
                  break;
                }
                return _context7.abrupt("return");
              case 17:
                client.destroyElementaryEventSubscriptions(eventId.id);
                resolve(result);
              case 19:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        return function (_x9) {
          return _ref8.apply(this, arguments);
        };
      }());
    });
  };
  var generateLink = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee8(item) {
      var constructionLink, resultLinkNode;
      return regenerator_default().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            constructionLink = new external_ts_sc_client_.ScConstruction();
            constructionLink.generateLink(external_ts_sc_client_.ScType.ConstNodeLink, new external_ts_sc_client_.ScLinkContent(item, external_ts_sc_client_.ScLinkContentType.String));
            _context8.next = 4;
            return client.generateElements(constructionLink);
          case 4:
            resultLinkNode = _context8.sent;
            if (!resultLinkNode.length) {
              _context8.next = 7;
              break;
            }
            return _context8.abrupt("return", resultLinkNode[0]);
          case 7:
            return _context8.abrupt("return", null);
          case 8:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function generateLink(_x14) {
      return _ref10.apply(this, arguments);
    };
  }();
  return {
    searchKeynodes: searchKeynodes,
    getId: getId,
    getMainIdLinkAddr: getMainIdLinkAddr,
    getMainId: getMainId,
    getSystemId: getSystemId,
    addrOrSystemIdAddr: addrOrSystemIdAddr,
    getResult: getResult,
    generateLink: generateLink
  };
};
;// CONCATENATED MODULE: ./src/components/ScUtils/ScUtils.tsx




var ScUtilsContext = /*#__PURE__*/(0,external_react_.createContext)({});
var useScUtils = function useScUtils() {
  return (0,external_react_.useContext)(ScUtilsContext);
};
var ScUtilsProvider = function ScUtilsProvider(_ref) {
  var children = _ref.children;
  var client = useClient();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ScUtilsContext.Provider, {
    value: scUtilsBuilder({
      client: client
    }),
    children: children
  });
};
;// CONCATENATED MODULE: ./src/components/ScUtils/index.tsx


;// CONCATENATED MODULE: ./src/components/Language/useLanguage.tsx



var LanguageContext = /*#__PURE__*/(0,external_react_.createContext)({});
var useLanguage = function useLanguage() {
  var _useContext = (0,external_react_.useContext)(LanguageContext),
    lang = _useContext.lang;
  return lang;
};
var useLanguageContext = function useLanguageContext() {
  return (0,external_react_.useContext)(LanguageContext);
};
var LanguageProvider = function LanguageProvider(_ref) {
  var children = _ref.children,
    defaultLanguage = _ref.defaultLanguage;
  var _useState = (0,external_react_.useState)(defaultLanguage),
    _useState2 = _slicedToArray(_useState, 2),
    lang = _useState2[0],
    setLang = _useState2[1];
  var value = (0,external_react_.useMemo)(function () {
    return {
      lang: lang,
      setLang: setLang
    };
  }, [lang]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(LanguageContext.Provider, {
    value: value,
    children: children
  });
};
;// CONCATENATED MODULE: ./src/components/Language/useTranslate.tsx


var useTranslate = function useTranslate() {
  var lang = useLanguage();
  return (0,external_react_.useCallback)(function (texts) {
    return texts[lang];
  }, [lang]);
};
;// CONCATENATED MODULE: ./src/components/Language/Translate.tsx



var Translate = function Translate(_ref) {
  var children = _ref.children;
  var translate = useTranslate();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: translate(children)
  });
};
;// CONCATENATED MODULE: ./src/components/Language/ScLangText.tsx












var defaultRenderText = function defaultRenderText(value) {
  return value;
};
var ScLangText = function ScLangText(_ref) {
  var addrOrSystemId = _ref.addrOrSystemId,
    loaderHeight = _ref.loaderHeight,
    loaderWidth = _ref.loaderWidth,
    _ref$defaultText = _ref.defaultText,
    defaultText = _ref$defaultText === void 0 ? '...' : _ref$defaultText,
    _ref$renderText = _ref.renderText,
    renderText = _ref$renderText === void 0 ? defaultRenderText : _ref$renderText,
    setIsLoad = _ref.setIsLoad;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = (0,external_react_.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    text = _useState4[0],
    setText = _useState4[1];
  var _useState5 = (0,external_react_.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    changeContentEventId = _useState6[0],
    setChangeContentEventId = _useState6[1];
  var lang = useLanguage();
  var client = useClient();
  var _useScUtils = useScUtils(),
    getMainId = _useScUtils.getMainId,
    getSystemId = _useScUtils.getSystemId,
    getMainIdLinkAddr = _useScUtils.getMainIdLinkAddr,
    addrOrSystemIdAddr = _useScUtils.addrOrSystemIdAddr;
  (0,external_react_.useEffect)(function () {
    setIsLoading(true);
    _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var elementAddr, text;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = external_ts_sc_client_.ScAddr;
            _context.next = 3;
            return addrOrSystemIdAddr(addrOrSystemId);
          case 3:
            _context.t1 = _context.sent;
            elementAddr = new _context.t0(_context.t1);
            _context.next = 7;
            return getMainId(elementAddr, lang);
          case 7:
            text = _context.sent;
            if (text) {
              _context.next = 13;
              break;
            }
            _context.next = 11;
            return getSystemId(elementAddr);
          case 11:
            text = _context.sent;
            if (!text) text = defaultText;
          case 13:
            setText(String(text));
            setIsLoading(false);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }, [addrOrSystemId, addrOrSystemIdAddr, getMainId, lang, defaultText]);
  (0,external_react_.useEffect)(function () {
    _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      var nodeAddr, linkAddr, onActionFinished, eventParams, _yield$client$createE, _yield$client$createE2, id;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return addrOrSystemIdAddr(addrOrSystemId);
          case 2:
            nodeAddr = _context3.sent;
            _context3.next = 5;
            return getMainIdLinkAddr(new external_ts_sc_client_.ScAddr(nodeAddr), lang);
          case 5:
            linkAddr = _context3.sent;
            if (linkAddr) {
              _context3.next = 8;
              break;
            }
            return _context3.abrupt("return");
          case 8:
            onActionFinished = /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(subscribedAddr) {
                var _yield$client$getLink, _yield$client$getLink2, newContent;
                return regenerator_default().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return client.getLinkContents([subscribedAddr]);
                    case 2:
                      _yield$client$getLink = _context2.sent;
                      _yield$client$getLink2 = _slicedToArray(_yield$client$getLink, 1);
                      newContent = _yield$client$getLink2[0];
                      setText(String(newContent.data));
                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function onActionFinished(_x) {
                return _ref4.apply(this, arguments);
              };
            }();
            eventParams = new external_ts_sc_client_.ScEventSubscriptionParams(linkAddr, external_ts_sc_client_.ScEventType.BeforeChangeLinkContent, onActionFinished);
            _context3.next = 12;
            return client.createElementaryEventSubscriptions(eventParams);
          case 12:
            _yield$client$createE = _context3.sent;
            _yield$client$createE2 = _slicedToArray(_yield$client$createE, 1);
            id = _yield$client$createE2[0].id;
            setChangeContentEventId(id);
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  }, [addrOrSystemId, addrOrSystemIdAddr, client, getMainIdLinkAddr, lang]);

  // TODO: Подумать, как сделать красивее. Можно создавать сразу несколько языков? Кажется, что слишком малекий кейс для такого решения
  // Проблем в том, что, если создать раздел под одник языком, потом переключиться на другой, то будет пустое имя
  // Тогда я отредактирую его, создав новую линку с новым языком. Но текущий наблюдатель за событием (выше) ничего о новом языке не знает
  // Так как ссылки еще не было на момент инициализации
  // Либо повторно делать инициализацию при появлении ссылки (кажется, неплохо)
  // Либо как то еще
  // useEffect(() => {
  //   (async () => {
  //     const nodeAddr = await addrOrSystemIdAddr(addrOrSystemId);

  //     const onActionFinished = async (subscibedAddr: ScAddr, arc: ScAddr, anotherAddr: ScAddr) => {
  //       const { nrelMainIdtf, ...rest } = await searchKeynodes('nrel_main_idtf', langToKeynode[lang]);
  //       const foundLang = rest[snakeToCamelCase(langToKeynode[lang])];

  //       const langAlias = '_lang';

  //       const template = new ScTemplate();

  //       template.quintuple(
  //         subscibedAddr,
  //         ScType.VarCommonArc,
  //         anotherAddr,
  //         ScType.VarPermPosArc,
  //         nrelMainIdtf,
  //       );
  //       template.triple([ScType.VarNodeClass, langAlias], ScType.VarPermPosArc, anotherAddr);

  //       const res = await client.searchByTemplate(template);
  //       if (!res.length) return;

  //       const langAddr = res[0].get(langAlias);

  //       if (langAddr.value !== foundLang.value) return;

  //       const [newContent] = await client.getLinkContents([anotherAddr]);
  //       setText(String(newContent.data));
  //     };

  //     const eventParams = new ScEventParams(new ScAddr(nodeAddr), ScEventType.AddOutgoingEdge, onActionFinished);

  //     const [{ id }] = await client.createElementaryEventSubscriptions(eventParams);
  //     setAddNewLangEventId(id);
  //   })();
  // }, [addrOrSystemId, addrOrSystemIdAddr, client, searchKeynodes, getMainIdLinkAddr, lang]);

  (0,external_react_.useEffect)(function () {
    if (!changeContentEventId) return;
    return function () {
      client.destroyElementaryEventSubscriptions(changeContentEventId);
    };
  }, [client, changeContentEventId]);
  (0,external_react_.useEffect)(function () {
    if (text) {
      setIsLoad && setIsLoad(false);
    }
  }, [text]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [!setIsLoad && isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(PseudoText, {
      height: loaderHeight,
      width: loaderWidth
    }), !isLoading && renderText(text)]
  });
};
;// CONCATENATED MODULE: ./src/components/Language/index.tsx




;// CONCATENATED MODULE: ./src/hooks/useClickOutside.ts

var useClickOutside = function useClickOutside(elementOrElements, handler) {
  var listener = (0,external_react_.useCallback)(function (e) {
    var elements = Array.isArray(elementOrElements) ? elementOrElements : [elementOrElements];
    var isOutside = elements.every(function (element) {
      var _element$current;
      return element.current && !((_element$current = element.current) !== null && _element$current !== void 0 && _element$current.contains(e.target));
    });
    if (isOutside) {
      handler(e);
    }
  }, [handler, elementOrElements]);
  (0,external_react_.useEffect)(function () {
    document.addEventListener('mousedown', listener, true);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener, true);
      document.removeEventListener('touchstart', listener);
    };
  }, [listener]);
};
;// CONCATENATED MODULE: ./src/hooks/useInterval.ts

var useInterval = function useInterval(callback, delay) {
  var intervalRef = (0,external_react_.useRef)(null);
  var callbackRef = (0,external_react_.useRef)(callback);
  (0,external_react_.useEffect)(function () {
    callbackRef.current = callback;
  }, [callback]);
  (0,external_react_.useEffect)(function () {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(function () {
        return callbackRef.current();
      }, delay);

      // Clear interval if the components is unmounted or the delay changes:
      return function () {
        return window.clearInterval(intervalRef.current || 0);
      };
    }
  }, [delay]);
  return intervalRef;
};
;// CONCATENATED MODULE: ./src/components/Dropdown/styled.ts

var Dropdown_styled_templateObject, Dropdown_styled_templateObject2, Dropdown_styled_templateObject3, Dropdown_styled_templateObject4;


var StyledPositionInPortal = external_styled_components_default()(PositionInPortal)(Dropdown_styled_templateObject || (Dropdown_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: nowrap;\n\n  z-index: 3;\n\n  flex-direction: ", ";\n"])), function (_ref) {
  var display = _ref.display;
  return function () {
    switch (display) {
      case 'bottom':
        return 'column';
      case 'top':
        return 'column-reverse';
      default:
        return 'column';
    }
  };
});
var FakeTarget = external_styled_components_default().div(Dropdown_styled_templateObject2 || (Dropdown_styled_templateObject2 = _taggedTemplateLiteral(["\n  pointer-events: none;\n\n  height: 100%;\n\n  flex: 0 0 auto;\n"])));
var Container = external_styled_components_default().div(Dropdown_styled_templateObject3 || (Dropdown_styled_templateObject3 = _taggedTemplateLiteral(["\n  pointer-events: initial;\n  margin: 2px 0;\n\n  background-color: var(--color-white);\n\n  border-radius: 10px;\n\n  flex: 0 0 auto;\n\n  max-width: calc(100vw - 32px);\n\n  opacity: 0;\n\n  transition-delay: 200ms;\n  transition-property: opacity;\n\n  ", "\n\n  margin-right: 6px;\n  cursor: auto;\n\n  overflow: auto;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n    height: 4px;\n    margin: 8px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n\n    background-color: var(--color-silver);\n\n    margin: 8px;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-radius: 10px;\n\n    background-color: transparent;\n  }\n"])), function (props) {
  return props.display === 'center' && (0,external_styled_components_.css)(Dropdown_styled_templateObject4 || (Dropdown_styled_templateObject4 = _taggedTemplateLiteral(["\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate3d(-50%, -50%, 0);\n    "])));
});
;// CONCATENATED MODULE: ./src/components/Dropdown/Dropdown.tsx



var Dropdown_excluded = ["targetRef", "relativeRef", "onClickOutside", "className"];
function Dropdown_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Dropdown_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Dropdown_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Dropdown_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var BOTTOM_HEIGHT = 68;
var HEADER_HEIGHT = 80;
var DROPDOWN_OFFSET = 2;
var defaultRect = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var Dropdown = /*#__PURE__*/(0,external_react_.forwardRef)(function (_ref, ref) {
  var targetRef = _ref.targetRef,
    relativeRef = _ref.relativeRef,
    _ref$onClickOutside = _ref.onClickOutside,
    onClickOutside = _ref$onClickOutside === void 0 ? function () {
      return null;
    } : _ref$onClickOutside,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    props = _objectWithoutProperties(_ref, Dropdown_excluded);
  var _useState = (0,external_react_.useState)('bottom'),
    _useState2 = _slicedToArray(_useState, 2),
    display = _useState2[0],
    setDisplay = _useState2[1];
  var checkDropdownPosition = function checkDropdownPosition() {
    var _relativeRef$current;
    var containerNode = containerRef.current;
    var targetNode = targetRef.current;
    if (!containerNode || !targetNode) return;
    var containerRect = containerNode.getBoundingClientRect();
    var targetRect = targetNode.getBoundingClientRect();
    var reltiveRect = (relativeRef === null || relativeRef === void 0 ? void 0 : (_relativeRef$current = relativeRef.current) === null || _relativeRef$current === void 0 ? void 0 : _relativeRef$current.getBoundingClientRect()) || defaultRect;
    var viewportHeight = window.innerHeight;
    var viewportWidth = window.innerWidth;
    var mayPlaceBottom = targetRect.bottom + reltiveRect.top + DROPDOWN_OFFSET + containerRect.height + BOTTOM_HEIGHT < viewportHeight;
    var mayPlaceTop = DROPDOWN_OFFSET + containerRect.height + HEADER_HEIGHT < targetRect.top + reltiveRect.top;
    if (mayPlaceBottom) setDisplay('bottom');else if (mayPlaceTop) setDisplay('top');else setDisplay('center');
    // TODO: Add a check if the element is too big and doesn't fit on top or bottom

    var conteinerWidth = containerRect.right - containerRect.left;
    if (targetRect.right < conteinerWidth && viewportWidth - targetRect.left < conteinerWidth) {
      containerNode.style.alignSelf = 'center';
    } else if (targetRect.right - 16 >= conteinerWidth && viewportWidth - targetRect.left >= conteinerWidth) {
      containerNode.style.alignSelf = '';
    } else if (targetRect.right - 16 < conteinerWidth) {
      containerNode.style.alignSelf = 'flex-start';
    } else if (viewportWidth - targetRect.left < conteinerWidth) {
      containerNode.style.alignSelf = 'flex-end';
    }
  };
  useInterval(checkDropdownPosition, 100);

  // First container render always happens downward and transparent,
  // after size and position settled transparency returns to normal
  (0,external_react_.useEffect)(function () {
    if (containerRef.current) {
      containerRef.current.style.opacity = '1';
    }
  }, []);
  var containerRef = (0,external_react_.useRef)(null);
  useClickOutside([containerRef], onClickOutside);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledPositionInPortal, {
    display: display,
    targetRef: targetRef,
    relativeRef: relativeRef,
    container: props.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FakeTarget, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Container, Dropdown_objectSpread({
      className: className,
      display: display || 'center',
      ref: refSetter(ref, containerRef)
    }, props))]
  });
});
Dropdown.displayName = 'Dropdown';
;// CONCATENATED MODULE: ./src/components/Dropdown/index.tsx

;// CONCATENATED MODULE: ./src/components/DropdownOption/styled.ts

var DropdownOption_styled_templateObject;

var Option = external_styled_components_default().div(DropdownOption_styled_templateObject || (DropdownOption_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  color: ", ";\n\n  word-break: break-word;\n\n  padding: ", ";\n\n  background-color: transparent;\n\n  cursor: pointer;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.dropdownOption.font.fontFamily;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dropdownOption.font.fontSize;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dropdownOption.font.lineHeight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.dropdownOption.colors.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.dropdownOption.size.padding;
});
;// CONCATENATED MODULE: ./src/components/DropdownOption/DropdownOption.tsx


var DropdownOption_excluded = ["children", "className"];
function DropdownOption_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function DropdownOption_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? DropdownOption_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : DropdownOption_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var DropdownOption = /*#__PURE__*/(0,external_react_.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, DropdownOption_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Option, DropdownOption_objectSpread(DropdownOption_objectSpread({
    ref: ref,
    className: className
  }, restProps), {}, {
    children: children
  }));
});
DropdownOption.displayName = 'DropdownOption';
;// CONCATENATED MODULE: ./src/components/DropdownOption/index.tsx

;// CONCATENATED MODULE: ./src/components/Popup/styled.ts

var Popup_styled_templateObject, Popup_styled_templateObject2;

var Overlay = external_styled_components_default().div(Popup_styled_templateObject || (Popup_styled_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  background-color: ", ";\n\n  z-index: 3;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.popup.colors.overlayBackground;
});
var ModalWrap = external_styled_components_default().div(Popup_styled_templateObject2 || (Popup_styled_templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n\n  z-index: 3;\n"])));
;// CONCATENATED MODULE: ./src/components/Popup/Popup.tsx






var Popup = function Popup(_ref) {
  var children = _ref.children,
    className = _ref.className,
    onClose = _ref.onClose;
  var closeByEscape = (0,external_react_.useCallback)(function (e) {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);
  (0,external_react_.useEffect)(function () {
    window.addEventListener('keydown', closeByEscape);
    return function () {
      window.removeEventListener('keydown', closeByEscape);
    };
  }, [onClose, closeByEscape]);
  return /*#__PURE__*/external_react_dom_default().createPortal( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Overlay, {
      onClick: onClose
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ModalWrap, {
      className: className,
      children: children
    })]
  }), document.body);
};
;// CONCATENATED MODULE: ./src/components/Popup/index.tsx

;// CONCATENATED MODULE: ./src/components/ButtonWithIcon/styled.ts

var ButtonWithIcon_styled_templateObject;

var ButtonWithIcon_styled_Button = external_styled_components_default().button(ButtonWithIcon_styled_templateObject || (ButtonWithIcon_styled_templateObject = _taggedTemplateLiteral(["\n  padding: 0;\n\n  border: none;\n\n  background: none;\n\n  outline: none;\n\n  cursor: pointer;\n"])));
;// CONCATENATED MODULE: ./src/components/ButtonWithIcon/ButtonWithIcon.tsx
// Deprecated: will be done with the Button component




var ButtonWithIcon = /*#__PURE__*/(0,external_react_.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    onClick = _ref.onClick;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonWithIcon_styled_Button, {
    type: type,
    className: className,
    ref: ref,
    onClick: onClick,
    disabled: disabled,
    children: children
  });
});
ButtonWithIcon.displayName = 'ButtonWithIcon';
;// CONCATENATED MODULE: ./src/components/ButtonWithIcon/index.tsx

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return extends_extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/hooks/useBooleanState.ts


var defaultParams = {
  updateable: false
};
var useBooleanState = function useBooleanState(defaultState) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultParams;
  var _useState = (0,external_react_.useState)(defaultState),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var setFalse = (0,external_react_.useCallback)(function () {
    return setValue(false);
  }, []);
  var setTrue = (0,external_react_.useCallback)(function () {
    return setValue(true);
  }, []);
  var toggle = (0,external_react_.useCallback)(function () {
    return setValue(function (prev) {
      return !prev;
    });
  }, []);
  (0,external_react_.useEffect)(function () {
    if (params.updateable) setValue(defaultState);
  }, [defaultState]);
  return [value, setTrue, setFalse, toggle];
};
;// CONCATENATED MODULE: ./src/components/ScTag/constants.ts
var SPINNER_COLOR = '#5896C0';
;// CONCATENATED MODULE: ./src/components/ScTag/FixIcon.svg
var FixIcon_path;
function FixIcon_extends() { FixIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FixIcon_extends.apply(this, arguments); }

var SvgFixIcon = function SvgFixIcon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", FixIcon_extends({
    width: 18,
    height: 19,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), FixIcon_path || (FixIcon_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M16.84 8.988a.728.728 0 0 1 0 1.024L9.464 17.37a5.032 5.032 0 0 1-7.116-7.115l8.922-9.039a3.594 3.594 0 1 1 5.085 5.077L7.434 15.33a2.138 2.138 0 0 1-1.528.638 2.157 2.157 0 0 1-1.527-3.684l7.484-7.6a.72.72 0 1 1 1.024 1.006L5.403 13.3a.72.72 0 0 0-.215.511.728.728 0 0 0 .206.513.746.746 0 0 0 .512.206.728.728 0 0 0 .512-.206l8.913-9.048a2.138 2.138 0 0 0 .638-1.527 2.157 2.157 0 0 0-3.684-1.527L3.373 11.27a3.593 3.593 0 1 0 5.076 5.085l7.367-7.367a.728.728 0 0 1 1.024 0Z",
    fill: "var(--color-dirty-grey)"
  })));
};
/* harmony default export */ const FixIcon = (SvgFixIcon);
;// CONCATENATED MODULE: ./src/components/ScTag/styled.ts

var ScTag_styled_templateObject, ScTag_styled_templateObject2, ScTag_styled_templateObject3, ScTag_styled_templateObject4;




var StyledDropdown = external_styled_components_default()(Dropdown)(ScTag_styled_templateObject || (ScTag_styled_templateObject = _taggedTemplateLiteral(["\n  width: 600px;\n  max-height: 380px;\n\n  box-shadow: 0px 2px 4px var(--color-card-shadow);\n\n  padding: 8px 0;\n\n  overflow: auto;\n"])));
var StyledDropdownOption = external_styled_components_default()(DropdownOption)(ScTag_styled_templateObject2 || (ScTag_styled_templateObject2 = _taggedTemplateLiteral(["\n  &:hover {\n    background-color: var(--color-decomposition-hover);\n  }\n\n  ", "\n"])), function (props) {
  return props.$isLoad && (0,external_styled_components_.css)(ScTag_styled_templateObject3 || (ScTag_styled_templateObject3 = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      \n      gap: 8px;\n    "])));
});
var StyledIcon = external_styled_components_default()(FixIcon)(ScTag_styled_templateObject4 || (ScTag_styled_templateObject4 = _taggedTemplateLiteral(["\n  margin-right: 5px;\n"])));
;// CONCATENATED MODULE: ./src/components/ScTag/useContextMenu.tsx

var useContextMenu_excluded = ["children"];


var ContextMenuContext = /*#__PURE__*/(0,external_react_.createContext)({});
var useContextMenu = function useContextMenu() {
  return (0,external_react_.useContext)(ContextMenuContext);
};
var ContextMenuProvider = function ContextMenuProvider(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, useContextMenu_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ContextMenuContext.Provider, {
    value: rest,
    children: children
  });
};
;// CONCATENATED MODULE: ./src/components/ScTag/ScTag.tsx





var ScTag_templateObject, ScTag_templateObject2, ScTag_templateObject3;
var ScTag_excluded = ["addr", "systemId", "as", "children", "showMenu"];
function ScTag_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ScTag_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ScTag_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ScTag_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }














var ScTag = function ScTag(_ref) {
  var addr = _ref.addr,
    systemId = _ref.systemId,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'div' : _ref$as,
    children = _ref.children,
    _ref$showMenu = _ref.showMenu,
    showMenu = _ref$showMenu === void 0 ? true : _ref$showMenu,
    restProps = _objectWithoutProperties(_ref, ScTag_excluded);
  var _useBooleanState = useBooleanState(false),
    _useBooleanState2 = _slicedToArray(_useBooleanState, 3),
    isOpened = _useBooleanState2[0],
    openDropdown = _useBooleanState2[1],
    closeDropdown = _useBooleanState2[2];
  var ref = (0,external_react_.useRef)(null);
  var Tag = as;
  var onContextMenu = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(e) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            e.stopPropagation();
            openDropdown();
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onContextMenu(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var dataProps = addr ? {
    'data-addr': addr
  } : {
    'data-system-id': systemId || ''
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Tag, ScTag_objectSpread(ScTag_objectSpread(ScTag_objectSpread({}, restProps), dataProps), {}, {
      ref: ref,
      onContextMenu: onContextMenu,
      children: children
    })), isOpened && showMenu && /*#__PURE__*/(0,jsx_runtime.jsx)(ContextMenu, {
      addr: addr,
      systemId: systemId,
      onClose: closeDropdown,
      targetRef: ref
    })]
  });
};
var ContextMenu = function ContextMenu(_ref3) {
  var addr = _ref3.addr,
    systemId = _ref3.systemId,
    targetRef = _ref3.targetRef,
    relativeRef = _ref3.relativeRef,
    onClose = _ref3.onClose;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = (0,external_react_.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    contextItems = _useState4[0],
    setContextItems = _useState4[1];
  var _useContextMenu = useContextMenu(),
    getContextItems = _useContextMenu.getContextItems,
    onOuterFixArgument = _useContextMenu.onFixArgument;
  var translate = useTranslate();
  var dropdownRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(function () {
    setIsLoading(true);
    _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var contextItems, arrItemsMenu;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getContextItems(addr || systemId);
          case 2:
            contextItems = _context2.sent;
            if (contextItems) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", onClose());
          case 5:
            arrItemsMenu = contextItems.map(function (addr) {
              return {
                addr: addr
              };
            });
            setContextItems(arrItemsMenu);
            setIsLoading(false);
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }, [addr, getContextItems, onClose, systemId]);
  var onFixArgument = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3(e) {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            e.stopPropagation();
            onOuterFixArgument === null || onOuterFixArgument === void 0 ? void 0 : onOuterFixArgument(addr || systemId);
            onClose();
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onFixArgument(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  (0,external_react_.useEffect)(function () {
    var onKeydown = function onKeydown(e) {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeydown);
    return function () {
      document.removeEventListener('keydown', onKeydown);
    };
  }, [onClose]);
  useClickOutside(dropdownRef, onClose);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledDropdown, {
    ref: dropdownRef,
    targetRef: targetRef,
    relativeRef: relativeRef,
    children: [isLoading && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledDropdownOption, {
      $isLoad: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Spinner_Spinner, {
        size: 24,
        appearance: SPINNER_COLOR
      }), translate({
        ru: 'Идет загрузка',
        en: 'Loading'
      })]
    }), !isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: contextItems.map(function (_ref6, ind) {
        var command = _ref6.addr;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(ScTagLink, {
          command: command,
          addr: addr,
          showMenu: false,
          onClick: onClose,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledDropdownOption, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ScLangText, {
              addrOrSystemId: command
            })
          })
        }, ind);
      })
    })]
  });
};
var StyledScTag = external_styled_components_default()(ScTag)(ScTag_templateObject || (ScTag_templateObject = _taggedTemplateLiteral(["\n  font-size: 18px;\n  line-height: 22px;\n\n  cursor: pointer;\n\n  ", "\n"])), function (_ref7) {
  var appearance = _ref7.appearance;
  switch (appearance) {
    case 'blue':
      return (0,external_styled_components_.css)(ScTag_templateObject2 || (ScTag_templateObject2 = _taggedTemplateLiteral(["\n          color: var(--color-navy-blue);\n\n          &:hover {\n            background-color: var(--color-grey-blue);\n\n            color: var(--color-dark-blue);\n          }\n        "])));
    case 'transparent':
      return (0,external_styled_components_.css)(ScTag_templateObject3 || (ScTag_templateObject3 = _taggedTemplateLiteral(["\n          &:hover {\n            color: var(--color-dark-grey);\n          }\n        "])));
    default:
      return '';
  }
});
var ScTagLink = function ScTagLink(_ref8) {
  var addr = _ref8.addr,
    children = _ref8.children,
    systemId = _ref8.systemId,
    command = _ref8.command,
    className = _ref8.className,
    as = _ref8.as,
    _ref8$appearance = _ref8.appearance,
    appearance = _ref8$appearance === void 0 ? 'blue' : _ref8$appearance,
    showMenu = _ref8.showMenu,
    onClickFromProps = _ref8.onClick;
  var _useCommandContext = useCommandContext(),
    onExecuteCommand = _useCommandContext.onExecuteCommand;
  var onClick = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4(e) {
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            e.stopPropagation();
            onClickFromProps === null || onClickFromProps === void 0 ? void 0 : onClickFromProps();
            onExecuteCommand(addr || systemId, command);
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function onClick(_x3) {
      return _ref9.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledScTag, {
    className: className,
    forwardedAs: as,
    addr: addr,
    systemId: systemId,
    showMenu: showMenu,
    onClick: onClick,
    appearance: appearance,
    children: children
  });
};
;// CONCATENATED MODULE: ./src/components/ScTag/index.tsx


;// CONCATENATED MODULE: ./src/components/Scg/styled.ts

var Scg_styled_templateObject, Scg_styled_templateObject2, Scg_styled_templateObject3, Scg_styled_templateObject4;


var styled_Wrap = external_styled_components_default().div(Scg_styled_templateObject || (Scg_styled_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  height: calc(100vh - 80px - 36px);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  display: ", ";\n"])), function (props) {
  return props.show ? 'block' : 'none';
});
var StyledSpinner = external_styled_components_default()(Spinner_Spinner)(Scg_styled_templateObject2 || (Scg_styled_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n\n  transform: translate3d(-50%, -50%, 0);\n"])));
var Frame = external_styled_components_default().iframe(Scg_styled_templateObject3 || (Scg_styled_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n\n  margin: -7px;\n\n  border: 0;\n"])));
var styled_Popup = external_styled_components_default().div(Scg_styled_templateObject4 || (Scg_styled_templateObject4 = _taggedTemplateLiteral(["\n  width: ", ";\n\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 21px;\n\n  color: var(--color-dark-grey);\n\n  b {\n    font-weight: 500;\n  }\n"])), function (props) {
  return props.$isClear ? '383px' : '344px';
});
;// CONCATENATED MODULE: ./src/components/Scg/types.ts
var EWindowEvents = /*#__PURE__*/function (EWindowEvents) {
  EWindowEvents["deleteScgElement"] = "deleteScgElement";
  EWindowEvents["deleteScgElements"] = "deleteScgElements";
  EWindowEvents["clearScene"] = "clearScene";
  EWindowEvents["updateScg"] = "updateScg";
  EWindowEvents["openFragment"] = "openFragment";
  EWindowEvents["emptyFragment"] = "emptyFragment";
  EWindowEvents["fullfilledFragment"] = "fullfilledFragment";
  return EWindowEvents;
}({});
;// CONCATENATED MODULE: ./src/components/Scg/Scg.tsx
















var Scg_SPINNER_COLOR = '#5896C0';
var readonlyStyle = "\n  <style>\n    .demo-scg-tools-panel {\n      display: none !important;\n    }\n  </style>\n";
var Scg = function Scg(_ref) {
  var action = _ref.action,
    readonly = _ref.readonly,
    className = _ref.className,
    url = _ref.url,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    onOpenFragment = _ref.onOpenFragment,
    onUpdateScg = _ref.onUpdateScg,
    onEmptyFragment = _ref.onEmptyFragment,
    onFullfilledFragment = _ref.onFullfilledFragment;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isReady = _useState2[0],
    setIsReady = _useState2[1];
  var _useState3 = (0,external_react_.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = (0,external_react_.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    targetNode = _useState6[0],
    setTargetNode = _useState6[1];
  var _useBooleanState = useBooleanState(false),
    _useBooleanState2 = _slicedToArray(_useBooleanState, 3),
    isConfirmDeletePopupShown = _useBooleanState2[0],
    showConfirmDeletePopup = _useBooleanState2[1],
    hideConfirmDeletePopup = _useBooleanState2[2];
  var _useBooleanState3 = useBooleanState(false),
    _useBooleanState4 = _slicedToArray(_useBooleanState3, 3),
    isConfirmClearScenePopupShown = _useBooleanState4[0],
    showConfirmClearScenePopup = _useBooleanState4[1],
    hideConfirmClearScenePopup = _useBooleanState4[2];
  var _useState7 = (0,external_react_.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    confirmDeleteElementsFunc = _useState8[0],
    setConfirmDeleteElementsFunc = _useState8[1];
  var _useState9 = (0,external_react_.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    confirmClearSceneFunc = _useState10[0],
    setConfirmClearSceneFunc = _useState10[1];
  var ref = (0,external_react_.useRef)(null);
  var targetRef = (0,external_react_.useRef)(null);
  var _useScUtils = useScUtils(),
    searchKeynodes = _useScUtils.searchKeynodes;
  var lang = useLanguage();
  var onClose = function onClose() {
    return setTargetNode(null);
  };
  var onContextMenu = function onContextMenu(e) {
    var _target$attributes$ge;
    e.preventDefault();
    var target = e.target.closest('[sc_addr]');
    if (!target) return;
    var addr = Number((_target$attributes$ge = target.attributes.getNamedItem('sc_addr')) === null || _target$attributes$ge === void 0 ? void 0 : _target$attributes$ge.nodeValue) || undefined;
    setTargetNode(null);
    setTimeout(function () {
      setTargetNode({
        element: target,
        addr: addr
      });
    }, 10);
  };
  (0,external_react_.useEffect)(function () {
    var _iframe$contentWindow;
    setIsLoading(true);
    var iframe = ref.current;
    if (!iframe) return setIsLoading(false);
    iframe.contentWindow.onInitializationFinished = function () {
      setIsReady(true);
    };
    iframe.contentWindow.demoImplementation = true;
    (_iframe$contentWindow = iframe.contentWindow) === null || _iframe$contentWindow === void 0 ? void 0 : _iframe$contentWindow.addEventListener('DOMContentLoaded', function () {
      var _iframe$contentDocume, _iframe$contentDocume2, _iframe$contentDocume3;
      (_iframe$contentDocume = iframe.contentDocument) === null || _iframe$contentDocume === void 0 ? void 0 : _iframe$contentDocume.addEventListener('click', onClose);
      (_iframe$contentDocume2 = iframe.contentDocument) === null || _iframe$contentDocume2 === void 0 ? void 0 : _iframe$contentDocume2.addEventListener('contextmenu', onContextMenu);
      if (readonly) (_iframe$contentDocume3 = iframe.contentDocument) === null || _iframe$contentDocume3 === void 0 ? void 0 : _iframe$contentDocume3.head.insertAdjacentHTML('beforeend', readonlyStyle);
      setTimeout(function () {
        return setIsLoading(false);
      }, 800);
    });
  }, [readonly]);
  (0,external_react_.useEffect)(function () {
    var iframe = ref.current;
    if (!iframe) return;
    window.onmessage = function (event) {
      var _event$data, _event$data$payload;
      switch (event.data.type) {
        case EWindowEvents.deleteScgElement:
          showConfirmDeletePopup();
          setConfirmDeleteElementsFunc(function () {
            var _iframe$contentWindow2;
            return (_iframe$contentWindow2 = iframe.contentWindow) === null || _iframe$contentWindow2 === void 0 ? void 0 : _iframe$contentWindow2.deleteScgElement;
          });
          break;
        case EWindowEvents.deleteScgElements:
          showConfirmDeletePopup();
          setConfirmDeleteElementsFunc(function () {
            var _iframe$contentWindow3;
            return (_iframe$contentWindow3 = iframe.contentWindow) === null || _iframe$contentWindow3 === void 0 ? void 0 : _iframe$contentWindow3.deleteScgElements;
          });
          break;
        case EWindowEvents.clearScene:
          showConfirmClearScenePopup();
          setConfirmClearSceneFunc(function () {
            var _iframe$contentWindow4;
            return (_iframe$contentWindow4 = iframe.contentWindow) === null || _iframe$contentWindow4 === void 0 ? void 0 : _iframe$contentWindow4.clearScene;
          });
          break;
        case EWindowEvents.updateScg:
          if (!action) break;
          onUpdateScg === null || onUpdateScg === void 0 ? void 0 : onUpdateScg(action);
          break;
        case EWindowEvents.openFragment:
          if (!((_event$data = event.data) !== null && _event$data !== void 0 && (_event$data$payload = _event$data.payload) !== null && _event$data$payload !== void 0 && _event$data$payload.fragmentAddr)) break;
          onOpenFragment === null || onOpenFragment === void 0 ? void 0 : onOpenFragment(event.data.payload.fragmentAddr);
          break;
        case EWindowEvents.emptyFragment:
          onEmptyFragment === null || onEmptyFragment === void 0 ? void 0 : onEmptyFragment();
          break;
        case EWindowEvents.fullfilledFragment:
          onFullfilledFragment === null || onFullfilledFragment === void 0 ? void 0 : onFullfilledFragment();
          break;
      }
    };
  }, [onUpdateScg, onOpenFragment, onEmptyFragment, onFullfilledFragment, action]);
  (0,external_react_.useEffect)(function () {
    _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var _renderScg, _ref3;
      var iframe, _yield$searchKeynodes, rest, activeLangKeynode;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!isReady || !show || !action)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            iframe = ref.current;
            if (iframe) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return");
          case 5:
            _context.next = 7;
            return searchKeynodes(langToKeynode[lang]);
          case 7:
            _yield$searchKeynodes = _context.sent;
            rest = extends_extends({}, (_objectDestructuringEmpty(_yield$searchKeynodes), _yield$searchKeynodes));
            activeLangKeynode = rest[snakeToCamelCase(langToKeynode[lang])];
            (_renderScg = (_ref3 = iframe.contentWindow).renderScg) === null || _renderScg === void 0 ? void 0 : _renderScg.call(_ref3, action, activeLangKeynode.value);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }, [isReady, action, show, lang, searchKeynodes]);
  targetRef.current = (targetNode === null || targetNode === void 0 ? void 0 : targetNode.element) || null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_Wrap, {
    show: show,
    className: className,
    children: [isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSpinner, {
      appearance: Scg_SPINNER_COLOR
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Frame, {
      src: url,
      ref: ref,
      title: "SCg codes"
    }), targetNode && /*#__PURE__*/(0,jsx_runtime.jsx)(ContextMenu, {
      onClose: onClose,
      addr: targetNode.addr,
      relativeRef: ref,
      targetRef: targetRef
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/Scg/index.tsx

;// CONCATENATED MODULE: ./src/components/Scn/ScnContext.tsx

var ScnContext_excluded = ["children"];


var SCnContext = /*#__PURE__*/(0,external_react_.createContext)({});
var useScnContext = function useScnContext() {
  return (0,external_react_.useContext)(SCnContext);
};
var ScnProvider = function ScnProvider(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, ScnContext_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SCnContext.Provider, {
    value: rest,
    children: children
  });
};
;// CONCATENATED MODULE: ./src/model/constants.ts
var constants_SPINNER_COLOR = '#5896C0';
;// CONCATENATED MODULE: ./src/components/Scn/constants.ts

var _arcMap;

var arcMap = (_arcMap = {}, _defineProperty(_arcMap, external_ts_sc_client_.ScType.CommonEdge.value, {
  right: '↔',
  left: '↔'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.CommonArc.value, {
  right: '→',
  left: '←'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.MembershipArc.value, {
  right: '..∍',
  left: '∊..'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.ConstCommonEdge.value, {
  right: '⇔',
  left: '⇔'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.VarCommonEdge.value, {
  right: '⇐⇒',
  left: '⇐⇒'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.ConstCommonArc.value, {
  right: '⇒',
  left: '⇐'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.VarCommonArc.value, {
  right: '_⇒',
  left: '_⇐'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.ConstPermPosArc.value, {
  right: '∍',
  left: '∊'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.ConstPermNegArc.value, {
  right: '∌',
  left: '∉'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.ConstFuzArc.value, {
  right: '/∍',
  left: '∊/'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.ConstTempPosArc.value, {
  right: '~∍',
  left: '∊~'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.ConstTempNegArc.value, {
  right: '~∌',
  left: '∉~'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.VarPermPosArc.value, {
  right: '_∍',
  left: '_∊'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.VarPermNegArc.value, {
  right: '_∌',
  left: '_∉'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.VarFuzArc.value, {
  right: '_/∍',
  left: '_∊/'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.VarTempPosArc.value, {
  right: '_~∍',
  left: '_∊~'
}), _defineProperty(_arcMap, external_ts_sc_client_.ScType.VarTempNegArc.value, {
  right: '_~∌',
  left: '_∉~'
}), _arcMap);
;// CONCATENATED MODULE: ./src/components/Scn/components/ScLink/constants.ts
var voidElements = ['area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed', 'frame', 'hr', 'image', 'img', 'input', 'isindex', 'keygen', 'link', 'menuitem', 'meta', 'nextid', 'param', 'source', 'track', 'wbr'];
;// CONCATENATED MODULE: ./src/components/Scn/components/ScnLink/ScnLink.tsx








var ScnLink = function ScnLink(_ref) {
  var addr = _ref.addr,
    systemId = _ref.systemId,
    loaderHeight = _ref.loaderHeight,
    loaderWidth = _ref.loaderWidth,
    className = _ref.className;
  var _useState = (0,external_react_.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLoad = _useState2[0],
    setIsLoad = _useState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [isLoad && /*#__PURE__*/(0,jsx_runtime.jsx)(PseudoText, {
      height: loaderHeight,
      width: loaderWidth
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScTagLink, {
      className: className,
      addr: addr,
      systemId: systemId,
      as: "span",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ScLangText, {
        addrOrSystemId: addr || systemId,
        loaderHeight: loaderHeight,
        loaderWidth: loaderWidth,
        setIsLoad: setIsLoad
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/Scn/components/ScnLink/index.tsx

;// CONCATENATED MODULE: ./src/components/Scn/components/ScLink/styled.ts

var ScLink_styled_templateObject, ScLink_styled_templateObject2, ScLink_styled_templateObject3, ScLink_styled_templateObject4;



var styled_StyledScTag = external_styled_components_default()(ScTag)(ScLink_styled_templateObject || (ScLink_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 2px;\n\n  padding: 8px;\n\n  font-size: 18px;\n  line-height: 21px;\n  color: var(--color-dark-grey);\n\n  ", "\n"])), function (props) {
  return props.isHTML && (0,external_styled_components_.css)(ScLink_styled_templateObject2 || (ScLink_styled_templateObject2 = _taggedTemplateLiteral(["\n      display: block;\n\n      p:first-of-type {\n        margin-top: 0;\n      }\n    "])));
});
var StyledScTagLink = external_styled_components_default()(ScTagLink)(ScLink_styled_templateObject3 || (ScLink_styled_templateObject3 = _taggedTemplateLiteral(["\n  display: block;\n\n  text-decoration: none;\n\n  box-shadow: inset 0 0 0 1px var(--color-border-grey);\n\n  background: linear-gradient(135deg, #d9d9d9 12px, transparent 12px);\n\n  transition: all ease 0.15s;\n\n  width: fit-content;\n\n  word-break: break-word;\n\n  &:hover {\n    background-color: var(--color-decomposition-hover);\n\n    opacity: 1;\n  }\n\n  &:active {\n    box-shadow: inset 0 0 0 3px var(--color-border-grey);\n  }\n"])));
var StyledScnLink = external_styled_components_default()(ScnLink)(ScLink_styled_templateObject4 || (ScLink_styled_templateObject4 = _taggedTemplateLiteral(["\n  display: inline;\n"])));
;// CONCATENATED MODULE: ./src/components/Scn/components/ScLink/useDifferedLinkContent.ts







var useDifferedLinkContent = function useDifferedLinkContent(addr) {
  var _useState = (0,external_react_.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    content = _useState2[0],
    setContent = _useState2[1];
  var _useInView = useInView(),
    _useInView2 = _slicedToArray(_useInView, 2),
    targetRef = _useInView2[0],
    isInView = _useInView2[1];
  var client = useClient();
  var getBase64 = (0,external_react_.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var _yield$client$getLink, _yield$client$getLink2, data;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return client.getLinkContents([new external_ts_sc_client_.ScAddr(addr)]);
        case 2:
          _yield$client$getLink = _context.sent;
          _yield$client$getLink2 = _slicedToArray(_yield$client$getLink, 1);
          data = _yield$client$getLink2[0].data;
          if (data) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return");
        case 7:
          setContent(String(data).trim());
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), [addr, client]);
  (0,external_react_.useEffect)(function () {
    if (isInView) {
      getBase64();
    }
  }, [getBase64, isInView]);
  return {
    content: content,
    targetRef: targetRef
  };
};
;// CONCATENATED MODULE: ./src/components/Scn/components/ScLink/ScLink.tsx













// const nodeAttributesToObject = (node: HTMLElement) => {
//   if (!node.hasAttributes()) return {};
//   return Array.from(node.attributes).reduce((acc, curr) => {
//     if(curr.name === "style") {
//       console.log(node)
//       return acc;
//     }
//     return {
//       ...acc,
//       [curr.name]: curr.value,
//     };
//   }, {});
// };
var HtmlNodeToReact = function HtmlNodeToReact(_ref) {
  var node = _ref.node;
  if (node instanceof Text) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: node.textContent
  });
  if (node.nodeName === 'SC_ELEMENT') {
    var _attributes$getNamedI;
    var systemId = ((_attributes$getNamedI = node.attributes.getNamedItem('sys_idtf')) === null || _attributes$getNamedI === void 0 ? void 0 : _attributes$getNamedI.nodeValue) || undefined;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledScnLink, {
      systemId: systemId
    });
  }
  if (!(node instanceof HTMLElement)) return null;
  var isVoidElem = voidElements.includes(node.nodeName.toLowerCase());
  var Tag = node.nodeName.toLowerCase();
  if (isVoidElem) return /*#__PURE__*/(0,jsx_runtime.jsx)(Tag, {});
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tag, {
    children: Array.from(node.childNodes).map(function (childNode, ind) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(HtmlNodeToReact, {
        node: childNode
      }, ind);
    })
  });
};
var ScLinkHtml = function ScLinkHtml(_ref2) {
  var addr = _ref2.addr;
  var _useState = (0,external_react_.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    contentHtml = _useState2[0],
    setContentHtml = _useState2[1];
  var _useInView = useInView(),
    _useInView2 = _slicedToArray(_useInView, 2),
    targetRef = _useInView2[0],
    isInView = _useInView2[1];
  var client = useClient();
  var parseHtml = (0,external_react_.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var _yield$client$getLink, _yield$client$getLink2, data, parser, dom, contentHtmlObject;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return client.getLinkContents([new external_ts_sc_client_.ScAddr(addr)]);
        case 2:
          _yield$client$getLink = _context.sent;
          _yield$client$getLink2 = _slicedToArray(_yield$client$getLink, 1);
          data = _yield$client$getLink2[0].data;
          if (data) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return");
        case 7:
          parser = new DOMParser();
          dom = parser.parseFromString(String(data).trim(), 'text/html');
          contentHtmlObject = dom.querySelector('body');
          setContentHtml(contentHtmlObject || null);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), [addr, client]);
  (0,external_react_.useEffect)(function () {
    if (isInView) {
      parseHtml();
    }
  }, [parseHtml, isInView]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_StyledScTag, {
    isHTML: true,
    addr: addr,
    children: [contentHtml && Array.from(contentHtml.childNodes).map(function (childNode, ind) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(HtmlNodeToReact, {
        node: childNode
      }, ind);
    }), !contentHtml && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      ref: targetRef
    })]
  });
};
var ScLinkContent = function ScLinkContent(_ref4) {
  var addr = _ref4.addr,
    contentType = _ref4.contentType;
  var _useDifferedLinkConte = useDifferedLinkContent(addr),
    content = _useDifferedLinkConte.content,
    targetRef = _useDifferedLinkConte.targetRef;
  if (contentType === 'format_html') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(ScLinkHtml, {
      addr: addr
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_StyledScTag, {
    forwardedAs: "span",
    addr: addr,
    children: [content && contentType === 'format_png' && /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: "data:image/png;base64,".concat(content)
    }), contentType !== 'format_png' && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: content
    }), !content && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      ref: targetRef
    })]
  });
};
var ScLink = function ScLink(_ref5) {
  var addr = _ref5.addr,
    contentType = _ref5.contentType;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledScTagLink, {
    appearance: "transparent",
    addr: addr,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ScLinkContent, {
      addr: addr,
      contentType: contentType
    })
  });
};
;// CONCATENATED MODULE: ./src/components/Scn/components/ScLink/index.tsx

;// CONCATENATED MODULE: ./src/components/Scn/components/ScnConnector/styled.ts

var ScnConnector_styled_templateObject, ScnConnector_styled_templateObject2, ScnConnector_styled_templateObject3;


var EdgeWrapper = external_styled_components_default().div(ScnConnector_styled_templateObject || (ScnConnector_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var EdgeInner = external_styled_components_default().div(ScnConnector_styled_templateObject2 || (ScnConnector_styled_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var styled_StyledScTagLink = external_styled_components_default()(ScTagLink)(ScnConnector_styled_templateObject3 || (ScnConnector_styled_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0 4px;\n"])));
;// CONCATENATED MODULE: ./src/components/Scn/components/ScnConnector/ScnConnector.tsx






var ScnConnector = function ScnConnector(_ref) {
  var _ref$node = _ref.node,
    addr = _ref$node.addr,
    type = _ref$node.type,
    sourceNode = _ref$node.sourceNode,
    targetNode = _ref$node.targetNode;
  if (!sourceNode || !targetNode) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(EdgeWrapper, {
    children: ["(", /*#__PURE__*/(0,jsx_runtime.jsxs)(EdgeInner, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ScnLink, {
        addr: sourceNode.addr,
        loaderWidth: getRandomInt(40, 80)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledScTagLink, {
        addr: addr,
        forwardedAs: "span",
        children: arcMap[type].right
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScnLink, {
        addr: targetNode.addr,
        loaderWidth: getRandomInt(40, 80)
      })]
    }), ")"]
  });
};
;// CONCATENATED MODULE: ./src/components/Scn/components/ScnConnector/index.tsx

;// CONCATENATED MODULE: ./src/components/Scn/components/Nodes/styled.ts

var Nodes_styled_templateObject, Nodes_styled_templateObject2, Nodes_styled_templateObject3;


var styled_StyledScnLink = external_styled_components_default()(ScnLink)(Nodes_styled_templateObject || (Nodes_styled_templateObject = _taggedTemplateLiteral(["\n  font-weight: 500;\n  line-height: 26px;\n  font-size: 22px;\n"])));
var KeywordLinkWrapper = external_styled_components_default().div(Nodes_styled_templateObject2 || (Nodes_styled_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var LeftSide = external_styled_components_default().span(Nodes_styled_templateObject3 || (Nodes_styled_templateObject3 = _taggedTemplateLiteral(["\n  width: 20px;\n\n  color: var(--color-navy-blue);\n  \n  flex-shrink: 0;\n"])));
;// CONCATENATED MODULE: ./src/components/Scn/components/Nodes/Nodes.tsx








var KeywordLinkNode = function KeywordLinkNode(_ref) {
  var tree = _ref.tree;
  var addr = tree.addr;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledScnLink, {
      addr: addr
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(KeywordLinkWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(LeftSide, {
        children: "="
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(LinkNode, {
        tree: tree
      })]
    })]
  });
};

// export const KeywordNode: FC<INodeProps> = ({ children, tree }) => {
var KeywordNode = function KeywordNode(_ref2) {
  var children = _ref2.children,
    tree = _ref2.tree;
  var addr = tree.addr,
    type = tree.type;
  var scType = new external_ts_sc_client_.ScType(type);
  var getComp = function getComp() {
    if (scType.isConnector()) return /*#__PURE__*/(0,jsx_runtime.jsx)(ScnConnector, {
      node: tree
    });
    if (scType.isLink()) return /*#__PURE__*/(0,jsx_runtime.jsx)(KeywordLinkNode, {
      tree: tree
    });
    return /*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledScnLink, {
      addr: addr
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [getComp(), children]
  });
};
var LinkNode = function LinkNode(_ref3) {
  var children = _ref3.children,
    _ref3$tree = _ref3.tree,
    addr = _ref3$tree.addr,
    content = _ref3$tree.content,
    contentType = _ref3$tree.contentType;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ScLink, {
      addr: addr,
      content: content,
      contentType: contentType
    }), children]
  });
};
var ConnectorNode = function ConnectorNode(_ref4) {
  var children = _ref4.children,
    tree = _ref4.tree;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ScnConnector, {
      node: tree
    }), children]
  });
};
var TupleNode = function TupleNode(_ref5) {
  var children = _ref5.children,
    tree = _ref5.tree;
  if (!tree.children) return /*#__PURE__*/(0,jsx_runtime.jsx)(ScnLink, {
    addr: tree.addr
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["{", children, "}"]
  });
};
var SimpleNode = function SimpleNode(_ref6) {
  var addr = _ref6.tree.addr,
    children = _ref6.children;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ScnLink, {
      addr: addr
    }), children]
  });
};
;// CONCATENATED MODULE: ./src/components/Scn/components/Nodes/index.tsx

;// CONCATENATED MODULE: ./src/components/Scn/components/ScStructure/styled.ts

var ScStructure_styled_templateObject, ScStructure_styled_templateObject2, ScStructure_styled_templateObject3, ScStructure_styled_templateObject4, ScStructure_styled_templateObject5;




var Structure = external_styled_components_default().div(ScStructure_styled_templateObject || (ScStructure_styled_templateObject = _taggedTemplateLiteral(["\n  border: solid 1px #96a399;\n\n  background-color: var(--color-beige);\n\n  padding: 8px;\n\n  border-radius: 8px;\n\n  width: 100%;\n\n  position: relative;\n\n  overflow: hidden;\n\n  ", "\n"])), function (_ref) {
  var isScg = _ref.isScg;
  return isScg && (0,external_styled_components_.css)(ScStructure_styled_templateObject2 || (ScStructure_styled_templateObject2 = _taggedTemplateLiteral(["\n      padding: 0;\n    "])));
});
var StyledSwitchScgScn = external_styled_components_default()(SwitchScgScn)(ScStructure_styled_templateObject3 || (ScStructure_styled_templateObject3 = _taggedTemplateLiteral(["\n  top: 8px !important;\n"])));
var StyledScg = external_styled_components_default()(Scg)(ScStructure_styled_templateObject4 || (ScStructure_styled_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n\n  min-height: 1024px;\n\n  iframe {\n    margin: 0 !important;\n  }\n"])));
var styled_StyledSpinner = external_styled_components_default()(Spinner_Spinner)(ScStructure_styled_templateObject5 || (ScStructure_styled_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 50%;\n  top: 20px;\n  transform: translateX(-50%);\n"])));
;// CONCATENATED MODULE: ./src/components/Scn/components/ScnElement/styled.ts

var ScnElement_styled_templateObject, ScnElement_styled_templateObject2, ScnElement_styled_templateObject3, ScnElement_styled_templateObject4, ScnElement_styled_templateObject5, ScnElement_styled_templateObject6, ScnElement_styled_templateObject7, ScnElement_styled_templateObject8;

var StyledLinkedNode = external_styled_components_default().div(ScnElement_styled_templateObject || (ScnElement_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var Marker = external_styled_components_default().div(ScnElement_styled_templateObject2 || (ScnElement_styled_templateObject2 = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n\n  width: 8px;\n  height: 8px;\n\n  border-radius: 50%;\n\n  background-color: var(--color-navy-blue);\n\n  margin-right: 15px;\n  margin-top: 6px;\n"])));
var ScnElement_styled_Wrapper = external_styled_components_default().div(ScnElement_styled_templateObject3 || (ScnElement_styled_templateObject3 = _taggedTemplateLiteral(["\n  font-family: 'Roboto';\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  flex-grow: 1;\n"])));
var Child = external_styled_components_default().div(ScnElement_styled_templateObject4 || (ScnElement_styled_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n\n  width: 100%;\n"])));
var Arc = external_styled_components_default().div(ScnElement_styled_templateObject5 || (ScnElement_styled_templateObject5 = _taggedTemplateLiteral(["\n  width: 20px;\n\n  color: var(--color-navy-blue);\n\n  flex-shrink: 0;\n  align-self: flex-start;\n\n  font-family: 'Unicode Symbols', 'Times New Roman', 'Apple Symbols', 'Arial Unicode MS';\n"])));
var RightSide = external_styled_components_default().div(ScnElement_styled_templateObject6 || (ScnElement_styled_templateObject6 = _taggedTemplateLiteral(["\n  flex-grow: 1;\n"])));
var Modifier = external_styled_components_default().div(ScnElement_styled_templateObject7 || (ScnElement_styled_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  \n  margin-bottom: 6px;\n"])));
var LinkedNodes = external_styled_components_default().div(ScnElement_styled_templateObject8 || (ScnElement_styled_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"])));
;// CONCATENATED MODULE: ./src/components/Scn/components/ScnElement/ScnElement.tsx



var ScnElement_excluded = ["languages"];



















var ModifierArc = function ModifierArc(_ref) {
  var type = _ref.type;
  var scType = new external_ts_sc_client_.ScType(type);
  if (scType.isConst()) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: ":"
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: "::"
  });
};
var ScStructure = function ScStructure(_ref2) {
  var tree = _ref2.tree;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = (0,external_react_.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    action = _useState4[0],
    setAction = _useState4[1];
  var _useState5 = (0,external_react_.useState)('scn'),
    _useState6 = _slicedToArray(_useState5, 2),
    tab = _useState6[0],
    setTab = _useState6[1];
  var _useScnContext = useScnContext(),
    onInitiateAction = _useScnContext.onInitiateAction,
    scgUrl = _useScnContext.scgUrl;
  var getAction = (0,external_react_.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var action;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          setIsLoading(true);
          _context.next = 3;
          return onInitiateAction(tree.addr);
        case 3:
          action = _context.sent;
          setIsLoading(false);
          setAction(action);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), [onInitiateAction, tree.addr]);
  (0,external_react_.useEffect)(function () {
    getAction();
  }, [getAction]);
  var showScg = tab === 'scg';
  var renderScg = showScg && !!action && !isLoading;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Structure, {
    isScg: showScg,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledSwitchScgScn, {
      tab: tab,
      onTabClick: setTab
    }), !showScg && /*#__PURE__*/(0,jsx_runtime.jsx)(ScnElement, {
      tree: tree,
      isRoot: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledScg, {
      url: scgUrl,
      action: action || undefined,
      show: renderScg,
      readonly: true
    }), showScg && isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledSpinner, {
      appearance: constants_SPINNER_COLOR
    })]
  });
};
var LinkedNode = function LinkedNode(_ref4) {
  var node = _ref4.node,
    showMarker = _ref4.showMarker;
  var _useState7 = (0,external_react_.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    show = _useState8[0],
    setShow = _useState8[1];
  var lang = useLanguage();
  var client = useClient();
  var _useScUtils = useScUtils(),
    searchKeynodes = _useScUtils.searchKeynodes;
  var scType = new external_ts_sc_client_.ScType(node.type);
  var isLink = scType.isLink();
  (0,external_react_.useEffect)(function () {
    if (!isLink) return setShow(true);
    _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var _yield$searchKeynodes, languages, rest, activeLangKeynode, template, langAlias, result, foundLang;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return searchKeynodes('languages', langToKeynode[lang]);
          case 2:
            _yield$searchKeynodes = _context2.sent;
            languages = _yield$searchKeynodes.languages;
            rest = _objectWithoutProperties(_yield$searchKeynodes, ScnElement_excluded);
            activeLangKeynode = rest[snakeToCamelCase(langToKeynode[lang])];
            template = new external_ts_sc_client_.ScTemplate();
            langAlias = '_lang';
            template.triple(languages, external_ts_sc_client_.ScType.VarPermPosArc, [external_ts_sc_client_.ScType.VarNodeClass, langAlias]);
            template.triple(langAlias, external_ts_sc_client_.ScType.VarPermPosArc, new external_ts_sc_client_.ScAddr(node.addr));
            _context2.next = 12;
            return client.searchByTemplate(template);
          case 12:
            result = _context2.sent;
            if (result.length) {
              _context2.next = 15;
              break;
            }
            return _context2.abrupt("return", setShow(true));
          case 15:
            foundLang = result[0].get(langAlias);
            setShow(foundLang.value === activeLangKeynode.value);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }, [client, searchKeynodes, isLink, lang, node.addr]);
  if (!show) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledLinkedNode, {
    children: [showMarker && /*#__PURE__*/(0,jsx_runtime.jsx)(Marker, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(ScnElement, {
      tree: node
    })]
  });
};
var ScnElementWrapper = function ScnElementWrapper(_ref6) {
  var tree = _ref6.tree,
    _ref6$isRoot = _ref6.isRoot,
    isRoot = _ref6$isRoot === void 0 ? false : _ref6$isRoot;
  var children = tree.children,
    type = tree.type,
    struct = tree.struct;
  var scType = new external_ts_sc_client_.ScType(type);
  var getNode = function getNode() {
    if (isRoot) return KeywordNode;
    if (scType.isLink()) return LinkNode;
    if (scType.isConnector()) return ConnectorNode;
    if (scType.isTuple()) return TupleNode;
    return SimpleNode;
  };
  var Node = getNode();
  var isTuple = scType.isTuple();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ScnElement_styled_Wrapper, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Node, {
      tree: tree,
      children: [struct && /*#__PURE__*/(0,jsx_runtime.jsxs)(Child, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Arc, {
          children: "="
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RightSide, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ScStructure, {
            tree: struct
          })
        })]
      }), children === null || children === void 0 ? void 0 : children.map(function (_ref7) {
        var _arcMap$arc$type;
        var _ref7$arcs = _slicedToArray(_ref7.arcs, 1),
          arc = _ref7$arcs[0],
          modifiers = _ref7.modifiers,
          linkedNodes = _ref7.linkedNodes;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(Child, {
          children: [!isTuple && /*#__PURE__*/(0,jsx_runtime.jsx)(Arc, {
            children: (_arcMap$arc$type = arcMap[arc.type]) === null || _arcMap$arc$type === void 0 ? void 0 : _arcMap$arc$type[arc.direction]
          }), isTuple && /*#__PURE__*/(0,jsx_runtime.jsx)(Marker, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)(RightSide, {
            children: [modifiers && /*#__PURE__*/(0,jsx_runtime.jsx)(Modifier, {
              children: modifiers.map(function (modifier) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)(external_react_.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ScnLink, {
                    addr: modifier.addr,
                    loaderHeight: 18,
                    loaderWidth: "".concat(getRandomInt(20, 60), "%")
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(ModifierArc, {
                    type: modifier.modifierArcs[0].type
                  })]
                }, "".concat(arc.addr).concat(modifier.addr));
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(LinkedNodes, {
              children: linkedNodes.map(function (linkedNode, linkedNodeInd) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(LinkedNode, {
                  showMarker: linkedNodes.length > 1,
                  node: linkedNode
                }, "".concat(linkedNode.addr, ".").concat(linkedNodeInd));
              })
            })]
          })]
        }, arc.addr);
      })]
    })
  });
};
var ScnElement = /*#__PURE__*/(0,external_react_.memo)(ScnElementWrapper);
;// CONCATENATED MODULE: ./src/components/Scn/components/ScnElement/index.tsx

;// CONCATENATED MODULE: ./src/components/Scn/components/ScnSkeleton/styled.ts

var ScnSkeleton_styled_templateObject, ScnSkeleton_styled_templateObject2, ScnSkeleton_styled_templateObject3, ScnSkeleton_styled_templateObject4, ScnSkeleton_styled_templateObject5, ScnSkeleton_styled_templateObject6, ScnSkeleton_styled_templateObject7;


var Item = external_styled_components_default().div(ScnSkeleton_styled_templateObject || (ScnSkeleton_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 4px;\n"])));
var styled_RightSide = external_styled_components_default().div(ScnSkeleton_styled_templateObject2 || (ScnSkeleton_styled_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var styled_StyledSkeleton = external_styled_components_default()(Skeleton)(ScnSkeleton_styled_templateObject3 || (ScnSkeleton_styled_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n"])), function (_ref) {
  var isArc = _ref.isArc;
  return isArc && (0,external_styled_components_.css)(ScnSkeleton_styled_templateObject4 || (ScnSkeleton_styled_templateObject4 = _taggedTemplateLiteral(["\n      flex-shrink: 0;\n\n      margin-top: 4px;\n    "])));
}, function (_ref2) {
  var isMdifier = _ref2.isMdifier;
  return isMdifier && (0,external_styled_components_.css)(ScnSkeleton_styled_templateObject5 || (ScnSkeleton_styled_templateObject5 = _taggedTemplateLiteral(["\n      margin-bottom: 6px;\n    "])));
});
var ScnSkeleton_styled_Wrapper = external_styled_components_default().div(ScnSkeleton_styled_templateObject6 || (ScnSkeleton_styled_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"])));
var styled_Child = external_styled_components_default().div(ScnSkeleton_styled_templateObject7 || (ScnSkeleton_styled_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 4px;\n"])));
;// CONCATENATED MODULE: ./src/components/Scn/components/ScnSkeleton/ScnSkeleton.tsx






var initialTree = {
  id: nanoid(5),
  children: [{
    id: nanoid(5),
    modifier: nanoid(5),
    children: [{
      id: nanoid(5)
    }]
  }, {
    id: nanoid(5),
    modifier: nanoid(5),
    children: [{
      id: nanoid(5)
    }, {
      id: nanoid(5),
      isLink: true
    }]
  }, {
    id: nanoid(5),
    children: [{
      id: nanoid(5)
    }]
  }, {
    id: nanoid(5),
    children: [{
      id: nanoid(5)
    }]
  }, {
    id: nanoid(5),
    modifier: nanoid(5),
    children: [{
      id: nanoid(5),
      isLink: true
    }, {
      id: nanoid(5)
    }, {
      id: nanoid(5)
    }]
  }]
};
var SkeletonItem = function SkeletonItem(_ref) {
  var _tree$children;
  var tree = _ref.tree;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Item, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledSkeleton, {
      isArc: true,
      width: 16,
      height: 16
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_RightSide, {
      children: [tree.modifier && /*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledSkeleton, {
        isMdifier: true,
        width: getRandomInt(200, 400),
        height: 22
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScnSkeleton_styled_Wrapper, {
        children: (_tree$children = tree.children) === null || _tree$children === void 0 ? void 0 : _tree$children.map(function (child) {
          var _tree$children2;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_Child, {
            children: [(((_tree$children2 = tree.children) === null || _tree$children2 === void 0 ? void 0 : _tree$children2.length) || 0) > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledSkeleton, {
              isArc: true,
              width: 16,
              height: 16
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledSkeleton, {
              width: "".concat(getRandomInt(30, 80), "%"),
              height: child.isLink ? 70 : 22
            })]
          }, child.id);
        })
      })]
    })]
  });
};
var ScnSkeletonWrapper = function ScnSkeletonWrapper() {
  var _initialTree$children;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ScnSkeleton_styled_Wrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledSkeleton, {
      height: 26,
      width: getRandomInt(250, 350)
    }), (_initialTree$children = initialTree.children) === null || _initialTree$children === void 0 ? void 0 : _initialTree$children.map(function (child) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(SkeletonItem, {
        tree: child
      }, child.id);
    })]
  });
};
var ScnSkeleton = /*#__PURE__*/(0,external_react_.memo)(ScnSkeletonWrapper);
;// CONCATENATED MODULE: ./src/components/Scn/components/ScnSkeleton/index.tsx

;// CONCATENATED MODULE: ./src/components/Scn/styled.ts

var Scn_styled_templateObject, Scn_styled_templateObject2, Scn_styled_templateObject3;


var Scn_styled_StyledScTag = external_styled_components_default()(ScTag)(Scn_styled_templateObject || (Scn_styled_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 16px;\n\n  flex-grow: 1;\n\n  padding-right: 6px;\n\n  margin-right: 6px;\n\n  cursor: auto;\n\n  overflow: auto;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n    height: 4px;\n\n    margin: 8px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n\n    background-color: var(--color-silver);\n\n    margin: 8px;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-radius: 10px;\n\n    background-color: transparent;\n  }\n"])));
var styled_Inner = external_styled_components_default().div(Scn_styled_templateObject2 || (Scn_styled_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var styled_Target = external_styled_components_default().div(Scn_styled_templateObject3 || (Scn_styled_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n\n  left: 0;\n  bottom: 200px;\n  height: 1px;\n  width: 100%;\n"])));
;// CONCATENATED MODULE: ./src/components/Scn/Scn.tsx

function Scn_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Scn_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Scn_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Scn_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var PAGE_SIZE = 25;
var Scn = function Scn(_ref) {
  var _tree$children;
  var isLoading = _ref.isLoading,
    tree = _ref.tree,
    scgUrl = _ref.scgUrl,
    renderRequestPanel = _ref.renderRequestPanel,
    onInitiateAction = _ref.onInitiateAction,
    action = _ref.action,
    className = _ref.className;
  var _useInfiniteScroll = useInfiniteScroll({
      total: (tree === null || tree === void 0 ? void 0 : (_tree$children = tree.children) === null || _tree$children === void 0 ? void 0 : _tree$children.length) || 1,
      pageSize: PAGE_SIZE
    }),
    page = _useInfiniteScroll.page,
    scrollRef = _useInfiniteScroll.scrollRef,
    targetRef = _useInfiniteScroll.targetRef;
  (0,external_react_.useEffect)(function () {
    var _scrollRef$current;
    (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.scroll(0, 0);
  }, []);
  var partialTree = (0,external_react_.useMemo)(function () {
    var _tree$children2;
    if (!tree) return null;
    return Scn_objectSpread(Scn_objectSpread({}, tree), {}, {
      children: (_tree$children2 = tree.children) === null || _tree$children2 === void 0 ? void 0 : _tree$children2.slice(0, page * PAGE_SIZE)
    });
  }, [tree, page]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ScnProvider, {
    onInitiateAction: onInitiateAction,
    scgUrl: scgUrl,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Scn_styled_StyledScTag, {
      ref: scrollRef,
      addr: action,
      className: className,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_Inner, {
        children: [isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(ScnSkeleton, {}), partialTree && !isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(ScnElement, {
          tree: partialTree,
          isRoot: true
        }), partialTree && renderRequestPanel && renderRequestPanel(partialTree.addr), /*#__PURE__*/(0,jsx_runtime.jsx)(styled_Target, {
          ref: targetRef
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/components/Scn/index.tsx


;// CONCATENATED MODULE: ./src/components/DecompositionPanel/consts.ts

var defaultContext = {};
var DecompositionContext = /*#__PURE__*/(0,external_react_.createContext)(defaultContext);
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/useDecompositionContext.ts


var useDecompositionContext = function useDecompositionContext() {
  return (0,external_react_.useContext)(DecompositionContext);
};
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/EditTextarea/styled.ts

var EditTextarea_styled_templateObject;


var styled_StyledTextarea = external_styled_components_default()(Textarea)(EditTextarea_styled_templateObject || (EditTextarea_styled_templateObject = _taggedTemplateLiteral(["\n  height: 28px;\n\n  overflow: hidden;\n"])));
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/EditTextarea/EditTextarea.tsx





var EditTextarea = function EditTextarea(_ref) {
  var defaultValue = _ref.defaultValue,
    onClose = _ref.onClose,
    onSave = _ref.onSave;
  var _useState = (0,external_react_.useState)(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    editInputValue = _useState2[0],
    setEditInputValue = _useState2[1];
  var wrapperEditInputRef = (0,external_react_.useRef)(null);
  var saveEditItemValue = function saveEditItemValue() {
    if (editInputValue.trim()) onSave(editInputValue);
    onClose();
  };
  var onTextAreaEditKeyDown = function onTextAreaEditKeyDown(e) {
    if (e.key === 'Enter') {
      saveEditItemValue();
    }
    if (e.key === 'Escape') onClose();
  };
  var onChangeEditInput = function onChangeEditInput(e) {
    setEditInputValue(e.target.value);
  };
  (0,external_react_.useEffect)(function () {
    if (wrapperEditInputRef.current) {
      wrapperEditInputRef.current.selectionStart = wrapperEditInputRef.current.value.length;
    }
  }, []);
  useClickOutside(wrapperEditInputRef, saveEditItemValue);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledTextarea, {
    value: editInputValue,
    onChange: onChangeEditInput,
    onKeyDown: onTextAreaEditKeyDown,
    ref: wrapperEditInputRef,
    autoFocus: true
  });
};
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/EditTextarea/index.tsx

;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/Options/styled.ts

var Options_styled_templateObject, Options_styled_templateObject2;


var Options_styled_Wrap = external_styled_components_default().div(Options_styled_templateObject || (Options_styled_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 100%;\n  right: 0;\n\n  min-width: 185px;\n\n  background: var(--color-white)fff;\n\n  border: 1px solid var(--color-border-grey);\n  box-shadow: 0px 4px 4px var(--color-card-shadow);\n  border-radius: 10px;\n\n  z-index: 2;\n"])));
var StyledButtonWithIcon = external_styled_components_default()(ButtonWithIcon)(Options_styled_templateObject2 || (Options_styled_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  padding: 8px 16px;\n\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n\n  font-size: 18px;\n  line-height: 20px;\n\n  text-align: left;\n  white-space: nowrap;\n\n  &:hover {\n    background: #ececec;\n  }\n\n  &:last-child {\n    border-bottom: none;\n  }\n"])));
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/Options/Options.tsx




var Options = function Options(_ref) {
  var onAddClick = _ref.onAddClick,
    onEditClick = _ref.onEditClick,
    onDeleteClick = _ref.onDeleteClick,
    deletable = _ref.deletable;
  var translate = useTranslate();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Options_styled_Wrap, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledButtonWithIcon, {
      onClick: onEditClick,
      children: translate({
        ru: 'Переименовать',
        en: 'Rename'
      })
    }), deletable && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButtonWithIcon, {
      onClick: onDeleteClick,
      children: translate({
        ru: 'Удалить',
        en: 'Delete'
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledButtonWithIcon, {
      onClick: onAddClick,
      children: translate({
        ru: 'Новый подраздел',
        en: 'New subsection'
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/Options/index.tsx

;// CONCATENATED MODULE: ./src/components/DecompositionPanel/icons/point.svg
var _circle;
function point_extends() { point_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return point_extends.apply(this, arguments); }

var SvgPoint = function SvgPoint(props) {
  return /*#__PURE__*/external_react_.createElement("svg", point_extends({
    width: 14,
    height: 14,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 7,
    cy: 7,
    r: 4,
    fill: "var(--color-dark-grey)"
  })));
};
/* harmony default export */ const point = (SvgPoint);
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/TextAreaItem/styled.ts

var TextAreaItem_styled_templateObject, TextAreaItem_styled_templateObject2;


var TextAreaItem_styled_Wrap = external_styled_components_default().div(TextAreaItem_styled_templateObject || (TextAreaItem_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  column-gap: 8px;\n\n  width: 100%;\n  min-height: 40px;\n\n  padding: 8px 0 8px 6px;\n"])));
var TextAreaItem_styled_StyledTextarea = external_styled_components_default()(Textarea)(TextAreaItem_styled_templateObject2 || (TextAreaItem_styled_templateObject2 = _taggedTemplateLiteral(["\n  height: 28px;\n\n  overflow: hidden;\n"])));
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/TextAreaItem/TextAreaItem.tsx




var TextAreaItem = function TextAreaItem(_ref) {
  var value = _ref.value,
    wrapperTextareaRef = _ref.wrapperTextareaRef,
    onChange = _ref.onChange,
    onKeyDown = _ref.onKeyDown;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TextAreaItem_styled_Wrap, {
    ref: wrapperTextareaRef,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(point, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(TextAreaItem_styled_StyledTextarea, {
      value: value,
      onChange: onChange,
      onKeyDown: onKeyDown,
      autoFocus: true
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/TextAreaItem/index.tsx

;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/NavigationList/options.svg
var options_circle, _circle2, _circle3;
function options_extends() { options_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return options_extends.apply(this, arguments); }

var SvgOptions = function SvgOptions(props) {
  return /*#__PURE__*/external_react_.createElement("svg", options_extends({
    width: 4,
    height: 18,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), options_circle || (options_circle = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 2,
    cy: 2.29,
    r: 1.677,
    fill: "var(--color-silver)"
  })), _circle2 || (_circle2 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 2,
    cy: 9,
    r: 1.677,
    fill: "var(--color-silver)"
  })), _circle3 || (_circle3 = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 2,
    cy: 15.709,
    r: 1.677,
    fill: "var(--color-silver)"
  })));
};
/* harmony default export */ const options = (SvgOptions);
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/icons/arrow.svg
var arrow_path;
function arrow_extends() { arrow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_extends.apply(this, arguments); }

var SvgArrow = function SvgArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", arrow_extends({
    width: 13,
    height: 13,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_path || (arrow_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m11.917 6.5-8.938 4.69V1.81l8.938 4.69Z",
    fill: "var(--color-dark-grey)"
  })));
};
/* harmony default export */ const icons_arrow = (SvgArrow);
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/NavigationList/styled.ts

var NavigationList_styled_templateObject, NavigationList_styled_templateObject2, NavigationList_styled_templateObject3, NavigationList_styled_templateObject4, NavigationList_styled_templateObject5, NavigationList_styled_templateObject6, NavigationList_styled_templateObject7, NavigationList_styled_templateObject8, NavigationList_styled_templateObject9, NavigationList_styled_templateObject10, styled_templateObject11;




var rotate = (0,external_styled_components_.keyframes)(NavigationList_styled_templateObject || (NavigationList_styled_templateObject = _taggedTemplateLiteral(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.6;\n  }\n"])));
var ItemContentWrapper = external_styled_components_default().div(NavigationList_styled_templateObject2 || (NavigationList_styled_templateObject2 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 26px 1fr 26px;\n  align-items: center;\n  grid-column-gap: 10px;\n\n  padding: 8px 3px 8px 0;\n\n  font-size: 20px;\n  line-height: 24px;\n  color: var(--color-dark-grey);\n\n  word-break: break-word;\n\n  border-radius: 4px;\n\n  &:hover {\n    background: var(--color-decomposition-hover);\n\n    .optionsBtn {\n      opacity: 1;\n    }\n  }\n\n  ", "\n\n  &isLoading {\n    animation-name: ", ";\n  }\n"])), function (props) {
  return props.isOptionsOpen && (0,external_styled_components_.css)(NavigationList_styled_templateObject3 || (NavigationList_styled_templateObject3 = _taggedTemplateLiteral(["\n      background: var(--color-decomposition-hover);\n      opacity: 1;\n    "])));
}, rotate);
var styled_StyledButtonWithIcon = external_styled_components_default()(ButtonWithIcon)(NavigationList_styled_templateObject4 || (NavigationList_styled_templateObject4 = _taggedTemplateLiteral(["\n  width: 24px;\n  height: 24px;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.marker && (0,external_styled_components_.css)(NavigationList_styled_templateObject5 || (NavigationList_styled_templateObject5 = _taggedTemplateLiteral(["\n      &:disabled {\n        cursor: unset;\n      }\n    "])));
}, function (props) {
  return props.options && (0,external_styled_components_.css)(NavigationList_styled_templateObject6 || (NavigationList_styled_templateObject6 = _taggedTemplateLiteral(["\n      border-radius: 41px;\n\n      opacity: 0;\n\n      &:hover {\n        background: var(--color-soft-grey);\n      }\n    "])));
});
var StyledArrowIcon = external_styled_components_default()(icons_arrow)(NavigationList_styled_templateObject7 || (NavigationList_styled_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), function (props) {
  return props.expanded && (0,external_styled_components_.css)(NavigationList_styled_templateObject8 || (NavigationList_styled_templateObject8 = _taggedTemplateLiteral(["\n      transform: rotate(90deg);\n    "])));
});
var OptionsBtnWrapper = external_styled_components_default().div(NavigationList_styled_templateObject9 || (NavigationList_styled_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var ChildrenWrapper = external_styled_components_default().div(NavigationList_styled_templateObject10 || (NavigationList_styled_templateObject10 = _taggedTemplateLiteral(["\n  grid-column: 1/4;\n\n  padding: 12px 0 0 16px;\n  margin-bottom: 12px;\n"])));
var NavigationList_styled_StyledScTagLink = external_styled_components_default()(ScTagLink)(styled_templateObject11 || (styled_templateObject11 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  line-height: 24px;\n\n  &::first-letter {\n    text-transform: uppercase;\n  }\n"])));
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/NavigationList/NavigationList.tsx














var NavigationListInner = function NavigationListInner(_ref) {
  var data = _ref.data,
    children = _ref.children,
    deletable = _ref.deletable,
    editable = _ref.editable;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
    children: [data.map(function (item) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(NavigationItem, {
        menuItem: item,
        deletable: deletable,
        editable: editable
      }, item.id);
    }), children]
  });
};
var NavigationItem = function NavigationItem(_ref2) {
  var menuItem = _ref2.menuItem,
    editable = _ref2.editable,
    deletable = _ref2.deletable;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOptionsOpen = _useState2[0],
    setIsOptionsOpen = _useState2[1];
  var _useState3 = (0,external_react_.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isAddInputShow = _useState4[0],
    setIsAddInputShow = _useState4[1];
  var _useState5 = (0,external_react_.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isEditInputShow = _useState6[0],
    setIsEditInputShow = _useState6[1];
  var _useState7 = (0,external_react_.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    addInputValue = _useState8[0],
    setAddInputValue = _useState8[1];
  var optionsWrapperRef = (0,external_react_.useRef)(null);
  var wrapperAddInputRef = (0,external_react_.useRef)(null);
  var _useDecompositionCont = useDecompositionContext(),
    onToggle = _useDecompositionCont.onToggle,
    onAdd = _useDecompositionCont.onAdd,
    onEdit = _useDecompositionCont.onEdit,
    onDelete = _useDecompositionCont.onDelete;
  (0,external_react_.useEffect)(function () {
    if (isAddInputShow) {
      closeOptions();
    }
  }, [isAddInputShow]);
  var onOptionsOpen = function onOptionsOpen() {
    setIsOptionsOpen(!isOptionsOpen);
  };
  var onAddClick = function onAddClick() {
    onAdd(menuItem.id, '', 1);
    setIsAddInputShow(true);
  };
  var onEditClick = function onEditClick() {
    setIsEditInputShow(true);
  };
  var closeOptions = function closeOptions() {
    setIsOptionsOpen(false);
  };
  var saveAddItemValue = function saveAddItemValue() {
    if (addInputValue.trim()) onAdd(menuItem.id, addInputValue, Math.random());
    setIsAddInputShow(false);
    closeOptions();
    setAddInputValue('');
    onDelete(1);
  };
  var onChangeAddInput = function onChangeAddInput(e) {
    setAddInputValue(e.target.value);
  };
  var onTextAreaAddKeyDown = function onTextAreaAddKeyDown(e) {
    if (e.key === 'Enter') {
      saveAddItemValue();
    }
    if (e.key === 'Escape') {
      setIsAddInputShow(false);
      closeOptions();
      setAddInputValue('');
    }
  };
  var onCloseEditTextarea = function onCloseEditTextarea() {
    setIsEditInputShow(false);
    closeOptions();
  };
  var onUpdateItemValue = function onUpdateItemValue(value) {
    onEdit(menuItem.id, value);
  };
  useClickOutside(optionsWrapperRef, closeOptions);
  useClickOutside(wrapperAddInputRef, saveAddItemValue);
  var renderItemText = function renderItemText(text) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [!isEditInputShow && /*#__PURE__*/(0,jsx_runtime.jsx)(NavigationList_styled_StyledScTagLink, {
        addr: menuItem.id,
        appearance: "transparent",
        children: text
      }), isEditInputShow && /*#__PURE__*/(0,jsx_runtime.jsx)(EditTextarea, {
        defaultValue: text,
        onClose: onCloseEditTextarea,
        onSave: onUpdateItemValue
      })]
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: menuItem.title && /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ItemContentWrapper, {
        isOptionsOpen: isOptionsOpen,
        isLoading: menuItem.isLoading,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledButtonWithIcon, {
          marker: true,
          onClick: function onClick() {
            return onToggle(menuItem.id);
          },
          disabled: !menuItem.children.length,
          children: menuItem.children.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(StyledArrowIcon, {
            expanded: menuItem.expanded
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(point, {})
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ScLangText, {
          addrOrSystemId: menuItem.id,
          renderText: renderItemText
        }), editable && !isEditInputShow && /*#__PURE__*/(0,jsx_runtime.jsxs)(OptionsBtnWrapper, {
          ref: optionsWrapperRef,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledButtonWithIcon, {
            options: true,
            className: "optionsBtn",
            onClick: onOptionsOpen,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(options, {})
          }), isOptionsOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(Options, {
            onAddClick: onAddClick,
            onEditClick: onEditClick,
            onDeleteClick: function onDeleteClick() {
              onDelete(menuItem.id);
              closeOptions();
            },
            deletable: deletable
          })]
        })]
      }), menuItem.expanded && !!menuItem.children.length && /*#__PURE__*/(0,jsx_runtime.jsx)(ChildrenWrapper, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(NavigationList, {
          data: menuItem.children,
          deletable: deletable,
          editable: editable,
          children: isAddInputShow && /*#__PURE__*/(0,jsx_runtime.jsx)(TextAreaItem, {
            value: addInputValue,
            onChange: onChangeAddInput,
            onKeyDown: onTextAreaAddKeyDown,
            wrapperTextareaRef: wrapperAddInputRef
          })
        })
      })]
    })
  });
};
var NavigationList = /*#__PURE__*/(0,external_react_.memo)(NavigationListInner);
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/NavigationList/index.tsx

;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/Skeleton/styled.ts

var components_Skeleton_styled_templateObject, components_Skeleton_styled_templateObject2, components_Skeleton_styled_templateObject3;

var Root = external_styled_components_default().div(components_Skeleton_styled_templateObject || (components_Skeleton_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 16px;\n\n  padding-top: 8px;\n"])));
var Skeleton_styled_Wrap = external_styled_components_default().div(components_Skeleton_styled_templateObject2 || (components_Skeleton_styled_templateObject2 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  align-items: center;\n  grid-column-gap: 10px;\n"])));
var BallWrapper = external_styled_components_default().div(components_Skeleton_styled_templateObject3 || (components_Skeleton_styled_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"])));
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/Skeleton/Skeleton.tsx




var Skeleton_Skeleton = function Skeleton() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Root, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Skeleton_styled_Wrap, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BallWrapper, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PseudoText, {
          width: 24,
          height: 24
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PseudoText, {
        width: "100%",
        height: 24
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Skeleton_styled_Wrap, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BallWrapper, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PseudoText, {
          width: 24,
          height: 24
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PseudoText, {
        width: "60%",
        height: 24
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Skeleton_styled_Wrap, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BallWrapper, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PseudoText, {
          width: 24,
          height: 24
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PseudoText, {
        width: "80%",
        height: 24
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/components/Skeleton/index.tsx

;// CONCATENATED MODULE: ./src/components/DecompositionPanel/styled.ts

var DecompositionPanel_styled_templateObject;

var Nav = external_styled_components_default().nav(DecompositionPanel_styled_templateObject || (DecompositionPanel_styled_templateObject = _taggedTemplateLiteral(["\n  margin-right: 0;\n"])));
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/DecompositionPanel.tsx










var emptyArray = [];
var DecompositionPanel = function DecompositionPanel(_ref) {
  var className = _ref.className,
    _ref$editable = _ref.editable,
    editable = _ref$editable === void 0 ? false : _ref$editable,
    _ref$deletable = _ref.deletable,
    deletable = _ref$deletable === void 0 ? false : _ref$deletable;
  var _useDecompositionCont = useDecompositionContext(),
    isMenuListLoading = _useDecompositionCont.isMenuListLoading,
    menuList = _useDecompositionCont.menuList,
    isAddInputShow = _useDecompositionCont.isAddInputShow,
    setIsAddInputShow = _useDecompositionCont.setIsAddInputShow,
    addInputValue = _useDecompositionCont.addInputValue,
    setAddInputValue = _useDecompositionCont.setAddInputValue,
    onAdd = _useDecompositionCont.onAdd,
    onDelete = _useDecompositionCont.onDelete;
  var wrapperAddInputRef = (0,external_react_.useRef)(null);
  var onChangeAddInput = function onChangeAddInput(e) {
    setAddInputValue(e.target.value);
  };
  var onTextAreaAddKeyDown = function onTextAreaAddKeyDown(e) {
    if (e.key === 'Enter') {
      saveAddItemValue();
    }
    if (e.key === 'Escape') {
      setIsAddInputShow(false);
      setAddInputValue('');
    }
  };
  var saveAddItemValue = function saveAddItemValue() {
    if (!menuList) return;
    if (addInputValue.trim()) onAdd(menuList.id, addInputValue, Math.random());
    setIsAddInputShow(false);
    setAddInputValue('');
    onDelete(1);
  };
  useClickOutside(wrapperAddInputRef, saveAddItemValue);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Nav, {
      children: [!isMenuListLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(NavigationList, {
        data: (menuList === null || menuList === void 0 ? void 0 : menuList.children) || emptyArray,
        editable: editable,
        deletable: deletable,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: isAddInputShow && /*#__PURE__*/(0,jsx_runtime.jsx)(TextAreaItem, {
            value: addInputValue,
            onChange: onChangeAddInput,
            onKeyDown: onTextAreaAddKeyDown,
            wrapperTextareaRef: wrapperAddInputRef
          })
        })
      }), isMenuListLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(Skeleton_Skeleton, {})]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/utils/dataTransform.ts

var dataTransform = function dataTransform(data) {
  return Object.entries(data).sort(function (left, right) {
    return left[1].position - right[1].position;
  }).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return {
      id: Number(key),
      title: value.idtf,
      children: value.decomposition ? dataTransform(value.decomposition) : [],
      expanded: false,
      isLoading: false
    };
  });
};
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/utils/getElemPath.ts


function getElemPath_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function getElemPath_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getElemPath_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getElemPath_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = getElemPath_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function getElemPath_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return getElemPath_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return getElemPath_arrayLikeToArray(o, minLen); }
function getElemPath_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var getElemPath = function getElemPath(tree, id) {
  if (tree.id === id) return [tree.id];
  var _iterator = _createForOfIteratorHelper(tree.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _elem = _step.value;
      var path = getElemPath(_elem, id);
      if (path.length) return [tree.id].concat(_toConsumableArray(path));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return [];
};
var updateByPath = function updateByPath(tree, paths, id, cb) {
  if (!paths.includes(tree.id)) return tree;
  if (tree.id === id) return cb(tree);
  var innerUpdated = tree.children.some(function (child) {
    return paths.includes(child.id);
  });
  return getElemPath_objectSpread(getElemPath_objectSpread({}, tree), {}, {
    children: innerUpdated ? tree.children.map(function (child) {
      return updateByPath(child, paths, id, cb);
    }) : tree.children
  });
};
var findParent = function findParent(tree, id) {
  if (tree.children.find(function (elem) {
    return elem.id === id;
  })) return tree;
  var _iterator2 = _createForOfIteratorHelper(tree.children),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var child = _step2.value;
      var _elem2 = findParent(child, id);
      if (_elem2) return _elem2;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return null;
};
var updateElem = function updateElem(tree, id, cb) {
  var paths = getElemPath(tree, id);
  return updateByPath(tree, paths, id, cb);
};
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/DecompositionProvider.tsx




function DecompositionProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function DecompositionProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? DecompositionProvider_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : DecompositionProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var DecompositionProvider = function DecompositionProvider(_ref) {
  var getDecompositionCallback = _ref.getDecompositionCallback,
    addDecompositionItemCallBack = _ref.addDecompositionItemCallBack,
    editDecompositionItemCallback = _ref.editDecompositionItemCallback,
    deleteDecompositionItemCallback = _ref.deleteDecompositionItemCallback,
    children = _ref.children;
  var _useState = (0,external_react_.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuListLoading = _useState2[0],
    setIsMenuListLoading = _useState2[1];
  var _useState3 = (0,external_react_.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    menuList = _useState4[0],
    setMenuList = _useState4[1];
  var _useState5 = (0,external_react_.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAddInputShow = _useState6[0],
    setIsAddInputShow = _useState6[1];
  var _useState7 = (0,external_react_.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    addInputValue = _useState8[0],
    setAddInputValue = _useState8[1];
  (0,external_react_.useEffect)(function () {
    _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var menu;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getDecompositionCallback();
          case 2:
            menu = _context.sent;
            if (menu) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return");
          case 5:
            setMenuList(dataTransform(menu)[0]);
            setIsMenuListLoading(false);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }, [getDecompositionCallback]);
  var onToggle = (0,external_react_.useCallback)(function (id) {
    setMenuList(function (prevState) {
      if (!prevState) return null;
      return updateElem(prevState, id, function (elem) {
        return DecompositionProvider_objectSpread(DecompositionProvider_objectSpread({}, elem), {}, {
          expanded: !elem.expanded
        });
      });
    });
  }, []);
  var onToggleShowItem = (0,external_react_.useCallback)(function (id) {
    setMenuList(function (prevState) {
      if (!prevState) return null;
      return updateElem(prevState, id, function (elem) {
        return DecompositionProvider_objectSpread(DecompositionProvider_objectSpread({}, elem), {}, {
          expanded: true
        });
      });
    });
  }, []);
  var onAdd = (0,external_react_.useCallback)( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(id, value, elemID) {
      var scAddr;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(elemID !== 1)) {
              _context2.next = 8;
              break;
            }
            setMenuList(function (prevState) {
              if (!prevState) return null;
              return updateElem(prevState, id, function (elem) {
                return DecompositionProvider_objectSpread(DecompositionProvider_objectSpread({}, elem), {}, {
                  expanded: true,
                  children: [].concat(_toConsumableArray(elem.children), [{
                    id: elemID,
                    title: value,
                    expanded: false,
                    children: [],
                    isLoading: true
                  }])
                });
              });
            });
            _context2.next = 4;
            return addDecompositionItemCallBack(String(id), {
              sectionName: value
            });
          case 4:
            scAddr = _context2.sent;
            if (scAddr) {
              _context2.next = 7;
              break;
            }
            return _context2.abrupt("return");
          case 7:
            return _context2.abrupt("return", setMenuList(function (prevState) {
              if (!prevState || !scAddr) return null;
              return updateElem(prevState, elemID, function (elem) {
                return DecompositionProvider_objectSpread(DecompositionProvider_objectSpread({}, elem), {}, {
                  id: scAddr,
                  expanded: false,
                  isLoading: false
                });
              });
            }));
          case 8:
            setMenuList(function (prevState) {
              if (!prevState) return null;
              return updateElem(prevState, id, function (elem) {
                return DecompositionProvider_objectSpread(DecompositionProvider_objectSpread({}, elem), {}, {
                  expanded: true,
                  children: [].concat(_toConsumableArray(elem.children), [{
                    id: elemID,
                    title: value,
                    expanded: false,
                    children: [],
                    isLoading: false
                  }])
                });
              });
            });
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x, _x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }(), [addDecompositionItemCallBack]);
  var onEdit = (0,external_react_.useCallback)( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3(id, value) {
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return editDecompositionItemCallback(id, value);
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }(), [editDecompositionItemCallback]);
  var onDelete = (0,external_react_.useCallback)( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4(id) {
      var parent, scAddr, newMenuList;
      return regenerator_default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(id === 1)) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return", setMenuList(function (prevState) {
              if (!prevState) return null;
              var parent = findParent(prevState, id);
              if (!parent) return prevState;
              return updateElem(prevState, parent.id, function (elem) {
                return DecompositionProvider_objectSpread(DecompositionProvider_objectSpread({}, elem), {}, {
                  children: elem.children.filter(function (item) {
                    return item.id !== Number(id);
                  })
                });
              });
            }));
          case 2:
            if (menuList) {
              _context4.next = 4;
              break;
            }
            return _context4.abrupt("return");
          case 4:
            parent = findParent(menuList, id);
            if (parent) {
              _context4.next = 7;
              break;
            }
            return _context4.abrupt("return");
          case 7:
            _context4.next = 9;
            return deleteDecompositionItemCallback(String(parent.id), String(id));
          case 9:
            scAddr = _context4.sent;
            if (scAddr) {
              _context4.next = 12;
              break;
            }
            return _context4.abrupt("return");
          case 12:
            newMenuList = updateElem(menuList, parent.id, function (elem) {
              return DecompositionProvider_objectSpread(DecompositionProvider_objectSpread({}, elem), {}, {
                children: elem.children.filter(function (item) {
                  return item.id !== scAddr;
                })
              });
            });
            setMenuList(newMenuList);
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x6) {
      return _ref5.apply(this, arguments);
    };
  }(), [deleteDecompositionItemCallback, menuList]);
  var onAddClick = (0,external_react_.useCallback)(function () {
    if (!menuList) return;
    onAdd(menuList.id, '', 1);
    setIsAddInputShow(true);
  }, [menuList, onAdd]);
  var contextValue = (0,external_react_.useMemo)(function () {
    return {
      isMenuListLoading: isMenuListLoading,
      setIsMenuListLoading: setIsMenuListLoading,
      menuList: menuList,
      setMenuList: setMenuList,
      isAddInputShow: isAddInputShow,
      setIsAddInputShow: setIsAddInputShow,
      addInputValue: addInputValue,
      setAddInputValue: setAddInputValue,
      onToggle: onToggle,
      onToggleShowItem: onToggleShowItem,
      onAdd: onAdd,
      onEdit: onEdit,
      onDelete: onDelete,
      onAddClick: onAddClick
    };
  }, [isMenuListLoading, setIsMenuListLoading, menuList, setMenuList, isAddInputShow, setIsAddInputShow, addInputValue, setAddInputValue, onToggle, onToggleShowItem, onAdd, onEdit, onDelete, onAddClick]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DecompositionContext.Provider, {
    value: contextValue,
    children: children
  });
};
;// CONCATENATED MODULE: ./src/components/DecompositionPanel/index.tsx



;// CONCATENATED MODULE: ./src/components/Expandable/Expandable.tsx




var propertyAccordance = {
  width: "scrollWidth",
  height: "scrollHeight"
};
var Expandable = function Expandable(_ref) {
  var _ref2;
  var expanded = _ref.expanded,
    children = _ref.children,
    className = _ref.className,
    _ref$initialSize = _ref.initialSize,
    initialSize = _ref$initialSize === void 0 ? 0 : _ref$initialSize,
    _ref$unmountOnEnd = _ref.unmountOnEnd,
    unmountOnEnd = _ref$unmountOnEnd === void 0 ? initialSize === 0 : _ref$unmountOnEnd,
    _ref$growProperty = _ref.growProperty,
    growProperty = _ref$growProperty === void 0 ? "height" : _ref$growProperty,
    _ref$transitionDurati = _ref.transitionDuration,
    transitionDuration = _ref$transitionDurati === void 0 ? "0.3s" : _ref$transitionDurati,
    _ref$transitionTiming = _ref.transitionTimingFunction,
    transitionTimingFunction = _ref$transitionTiming === void 0 ? "ease" : _ref$transitionTiming;
  var _useState = (0,external_react_.useState)(!unmountOnEnd),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = (0,external_react_.useState)("hidden"),
    _useState4 = _slicedToArray(_useState3, 2),
    overflow = _useState4[0],
    setOverflow = _useState4[1];
  var _useState5 = (0,external_react_.useState)(initialSize),
    _useState6 = _slicedToArray(_useState5, 2),
    targetSize = _useState6[0],
    setTargetSize = _useState6[1];
  var ref = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(function () {
    var node = ref.current;
    if (expanded) {
      setVisible(true);
    } else if (node) {
      var currentSize = node[propertyAccordance[growProperty]];
      setTargetSize(currentSize);
      setOverflow("hidden");
      window.requestAnimationFrame(function () {
        return setTargetSize(initialSize);
      });
    }
  }, [expanded, growProperty, initialSize]);
  (0,external_react_.useEffect)(function () {
    var node = ref.current;
    if (expanded && visible && node) {
      var hiddenSize = node[propertyAccordance[growProperty]];
      setTargetSize(hiddenSize);
    }
  }, [expanded, visible, growProperty]);
  var onTransitionEnd = function onTransitionEnd() {
    if (expanded) {
      setTargetSize("auto");
      setOverflow("visible");
    } else if (unmountOnEnd) {
      setVisible(false);
    }
  };
  return visible ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: (_ref2 = {
      overflow: overflow,
      transitionProperty: growProperty
    }, _defineProperty(_ref2, growProperty, targetSize), _defineProperty(_ref2, "transitionTimingFunction", transitionTimingFunction), _defineProperty(_ref2, "transitionDuration", transitionDuration), _ref2),
    className: className,
    onTransitionEnd: onTransitionEnd,
    ref: ref,
    children: children
  }) : null;
};
;// CONCATENATED MODULE: ./src/components/Expandable/index.tsx

;// CONCATENATED MODULE: ./src/assets/close.svg
var assets_close_path;
function assets_close_extends() { assets_close_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return assets_close_extends.apply(this, arguments); }

var close_SvgClose = function SvgClose(props) {
  return /*#__PURE__*/external_react_.createElement("svg", assets_close_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), assets_close_path || (assets_close_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m13.53 11.982 6.454-6.437.007-.007.006-.008a1.047 1.047 0 0 0-.756-1.728c-.265-.01-.523.079-.724.25l-.007.007-.007.007-6.455 6.438-6.456-6.446a1.054 1.054 0 0 0-1.798.743c0 .28.111.547.31.744l6.461 6.437-6.455 6.43a1.05 1.05 0 0 0-.052 1.531 1.05 1.05 0 0 0 1.532-.051l6.457-6.432 6.456 6.438.007.007.007.006a1.051 1.051 0 0 0 1.732-.755c.01-.264-.08-.522-.252-.723l-.006-.007-.007-.007-6.454-6.437Z",
    fill: "var(--color-dull-grey)",
    stroke: "#ADADAD",
    strokeWidth: 0.5
  })));
};
/* harmony default export */ const assets_close = (close_SvgClose);
;// CONCATENATED MODULE: ./src/components/IconButton/styled.ts

var IconButton_styled_templateObject, IconButton_styled_templateObject2, IconButton_styled_templateObject3, IconButton_styled_templateObject4, IconButton_styled_templateObject5;

var IconButton_styled_Wrapper = external_styled_components_default().button(IconButton_styled_templateObject || (IconButton_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  outline: none;\n  border: none;\n  cursor: pointer;\n  border-radius: ", ";\n\n  background-color: ", ";\n\n  flex-shrink: 0;\n  box-sizing: border-box;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:active {\n    box-shadow: inset 0 0 0 2px ", ";\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    background-color: ", ";\n\n    pointer-events: none;\n  }\n\n  /* Sizes */\n  ", "\n\n  ", "\n  \n\t", "\n  \n\t", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.iconButton.borderRadius;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.iconButton.colors.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.iconButton.colors.backgroundHover;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.iconButton.colors.borderActive;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.iconButton.colors.backgroundDisabled;
}, function (props) {
  return props.$size === 's' && (0,external_styled_components_.css)(IconButton_styled_templateObject2 || (IconButton_styled_templateObject2 = _taggedTemplateLiteral(["\n      width: ", ";\n      height: ", ";\n\n      border-radius: ", ";\n\n      &:active {\n        box-shadow: inset 0 0 0 1px ", ";\n      }\n    "])), function (_ref6) {
    var theme = _ref6.theme;
    return theme.iconButton.size.small.width;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.iconButton.size.small.height;
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.iconButton.size.small.borderRadius;
  }, function (_ref9) {
    var theme = _ref9.theme;
    return theme.iconButton.colors.borderActive;
  });
}, function (props) {
  return props.$size === 'm' && (0,external_styled_components_.css)(IconButton_styled_templateObject3 || (IconButton_styled_templateObject3 = _taggedTemplateLiteral(["\n      width: ", ";\n      height: ", ";\n      padding: ", ";\n      border-radius: ", ";\n    "])), function (_ref10) {
    var theme = _ref10.theme;
    return theme.iconButton.size.medium.width;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.iconButton.size.medium.height;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.iconButton.size.medium.padding;
  }, function (_ref13) {
    var theme = _ref13.theme;
    return theme.iconButton.size.medium.borderRadius;
  });
}, function (props) {
  return props.$size === 'l' && (0,external_styled_components_.css)(IconButton_styled_templateObject4 || (IconButton_styled_templateObject4 = _taggedTemplateLiteral(["\n      width: ", ";\n      height: ", ";\n      padding: ", ";\n      border-radius: ", ";\n    "])), function (_ref14) {
    var theme = _ref14.theme;
    return theme.iconButton.size.large.width;
  }, function (_ref15) {
    var theme = _ref15.theme;
    return theme.iconButton.size.large.height;
  }, function (_ref16) {
    var theme = _ref16.theme;
    return theme.iconButton.size.large.padding;
  }, function (_ref17) {
    var theme = _ref17.theme;
    return theme.iconButton.size.large.borderRadius;
  });
}, function (props) {
  return props.$size === 'xl' && (0,external_styled_components_.css)(IconButton_styled_templateObject5 || (IconButton_styled_templateObject5 = _taggedTemplateLiteral(["\n      width: ", ";\n      height: ", ";\n      padding: ", ";\n      border-radius: ", ";\n    "])), function (_ref18) {
    var theme = _ref18.theme;
    return theme.iconButton.size.xlarge.width;
  }, function (_ref19) {
    var theme = _ref19.theme;
    return theme.iconButton.size.xlarge.height;
  }, function (_ref20) {
    var theme = _ref20.theme;
    return theme.iconButton.size.xlarge.padding;
  }, function (_ref21) {
    var theme = _ref21.theme;
    return theme.iconButton.size.xlarge.borderRadius;
  });
});
;// CONCATENATED MODULE: ./src/components/IconButton/IconButton.tsx


var IconButton_excluded = ["children", "className", "disabled", "size", "type", "onClick"];
function IconButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function IconButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? IconButton_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : IconButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var IconButton = function IconButton(_ref) {
  var children = _ref.children,
    className = _ref.className,
    disabled = _ref.disabled,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'l' : _ref$size,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    onClick = _ref.onClick,
    restButtonProps = _objectWithoutProperties(_ref, IconButton_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton_styled_Wrapper, IconButton_objectSpread(IconButton_objectSpread({
    className: className,
    $size: size,
    disabled: disabled,
    onClick: onClick,
    type: type
  }, restButtonProps), {}, {
    children: children
  }));
};
;// CONCATENATED MODULE: ./src/components/IconButton/index.ts

;// CONCATENATED MODULE: ./node_modules/react-intersection-observer/index.mjs
"use client";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/InView.tsx


// src/observe.ts
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function defaultFallbackInView(inView) {
  unsupportedValue = inView;
}
function getRootId(root) {
  if (!root)
    return "0";
  if (RootIds.has(root))
    return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter(
    (key) => options[key] !== void 0
  ).map((key) => {
    return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
  }).toString();
}
function createObserver(options) {
  let id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _a;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const { id, observer, elements } = createObserver(options);
  let callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}

// src/InView.tsx
function isPlainChildren(props) {
  return typeof props.children !== "function";
}
var InView = class extends external_react_.Component {
  constructor(props) {
    super(props);
    __publicField(this, "node", null);
    __publicField(this, "_unobserveCb", null);
    __publicField(this, "handleNode", (node) => {
      if (this.node) {
        this.unobserve();
        if (!node && !this.props.triggerOnce && !this.props.skip) {
          this.setState({ inView: !!this.props.initialInView, entry: void 0 });
        }
      }
      this.node = node ? node : null;
      this.observeNode();
    });
    __publicField(this, "handleChange", (inView, entry) => {
      if (inView && this.props.triggerOnce) {
        this.unobserve();
      }
      if (!isPlainChildren(this.props)) {
        this.setState({ inView, entry });
      }
      if (this.props.onChange) {
        this.props.onChange(inView, entry);
      }
    });
    this.state = {
      inView: !!props.initialInView,
      entry: void 0
    };
  }
  componentDidMount() {
    this.unobserve();
    this.observeNode();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {
      this.unobserve();
      this.observeNode();
    }
  }
  componentWillUnmount() {
    this.unobserve();
  }
  observeNode() {
    if (!this.node || this.props.skip)
      return;
    const {
      threshold,
      root,
      rootMargin,
      trackVisibility,
      delay,
      fallbackInView
    } = this.props;
    this._unobserveCb = observe(
      this.node,
      this.handleChange,
      {
        threshold,
        root,
        rootMargin,
        // @ts-ignore
        trackVisibility,
        // @ts-ignore
        delay
      },
      fallbackInView
    );
  }
  unobserve() {
    if (this._unobserveCb) {
      this._unobserveCb();
      this._unobserveCb = null;
    }
  }
  render() {
    const { children } = this.props;
    if (typeof children === "function") {
      const { inView, entry } = this.state;
      return children({ inView, entry, ref: this.handleNode });
    }
    const {
      as,
      triggerOnce,
      threshold,
      root,
      rootMargin,
      onChange,
      skip,
      trackVisibility,
      delay,
      initialInView,
      fallbackInView,
      ...props
    } = this.props;
    return external_react_.createElement(
      as || "div",
      { ref: this.handleNode, ...props },
      children
    );
  }
};

// src/useInView.tsx

function react_intersection_observer_useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _a;
  const [ref, setRef] = external_react_.useState(null);
  const callback = external_react_.useRef();
  const [state, setState] = external_react_.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange;
  external_react_.useEffect(
    () => {
      if (skip || !ref)
        return;
      let unobserve;
      unobserve = observe(
        ref,
        (inView, entry) => {
          setState({
            inView,
            entry
          });
          if (callback.current)
            callback.current(inView, entry);
          if (entry.isIntersecting && triggerOnce && unobserve) {
            unobserve();
            unobserve = void 0;
          }
        },
        {
          root,
          rootMargin,
          threshold,
          // @ts-ignore
          trackVisibility,
          // @ts-ignore
          delay
        },
        fallbackInView
      );
      return () => {
        if (unobserve) {
          unobserve();
        }
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;
  const previousEntryTarget = external_react_.useRef();
  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
    previousEntryTarget.current = entryTarget;
    setState({
      inView: !!initialInView,
      entry: void 0
    });
  }
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

//# sourceMappingURL=index.mjs.map
;// CONCATENATED MODULE: ./src/components/Select/utils.ts
var scrollToNotVisibleELem = function scrollToNotVisibleELem(elem, scrollElem) {
  var offsetFromScrollWrap = elem.offsetTop - scrollElem.offsetTop;
  var overTop = offsetFromScrollWrap < scrollElem.scrollTop;
  var overBottom = offsetFromScrollWrap + elem.clientHeight > scrollElem.scrollTop + scrollElem.clientHeight;
  if (overTop) {
    scrollElem.scrollTop = offsetFromScrollWrap;
  }
  if (overBottom) {
    scrollElem.scrollTop = offsetFromScrollWrap + elem.clientHeight - scrollElem.clientHeight;
  }
};
var getTextHighlightMeta = function getTextHighlightMeta() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var highlight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var highlightFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'word';
  var splitedHighlight = highlightFormat === 'word' ? highlight.split(' ') : [highlight];
  var chunks = splitedHighlight.filter(Boolean).map(function (chunk) {
    return chunk.toLowerCase();
  });
  var specialCaracters = ['[', ']', '\\', '^', '$', '.', '|', '?', '*', '+', '(', ')'];
  var pattern = chunks.map(function (chunk) {
    var chunkForRegExp = chunk.split('').map(function (letter) {
      return specialCaracters.includes(letter) ? "\\".concat(letter) : letter;
    }).join('');
    return "(".concat(chunkForRegExp, ")?");
  }).join('');
  var parts = text.split(new RegExp(pattern, 'gi')).filter(Boolean);
  var shouldHiglight = !highlight ? true : parts.some(function (part) {
    return chunks.includes(part.toLowerCase());
  });
  return {
    shouldHiglight: shouldHiglight,
    parts: parts,
    chunks: chunks
  };
};
var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};
function isInputDataDifferent(data1, data2) {
  return data1.value !== data2.value || data1.selectionStart !== data2.selectionStart || data1.selectionEnd !== data2.selectionEnd;
}
function changeInputData(input, toChangeData) {
  var _toChangeData$value = toChangeData.value,
    value = _toChangeData$value === void 0 ? input.value : _toChangeData$value,
    selectionStart = toChangeData.selectionStart,
    selectionEnd = toChangeData.selectionEnd;
  if (isInputDataDifferent(input, {
    value: value,
    selectionStart: selectionStart,
    selectionEnd: selectionEnd
  })) {
    var _Object$getOwnPropert;
    var nativeInputValueSetter = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set;
    nativeInputValueSetter === null || nativeInputValueSetter === void 0 ? void 0 : nativeInputValueSetter.call(input, value);
    input.setSelectionRange(selectionStart || 0, selectionEnd || 0);

    // IE fix: event dispatch
    var event;
    if (typeof Event === 'function') {
      event = new Event('input', {
        bubbles: true
      });
    } else {
      event = document.createEvent('Event');
      event.initEvent('input', true, true);
    }
    input.dispatchEvent(event);
  }
}
;// CONCATENATED MODULE: ./src/components/Select/Chips/styled.ts

var Chips_styled_templateObject, Chips_styled_templateObject2, Chips_styled_templateObject3, Chips_styled_templateObject4, Chips_styled_templateObject5, Chips_styled_templateObject6;


var ChipBox = external_styled_components_default().div(Chips_styled_templateObject || (Chips_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  max-width: 100%;\n"])));
var OptionChipWrapper = external_styled_components_default().div(Chips_styled_templateObject2 || (Chips_styled_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 8px;\n  max-width: 100%;\n\n  ", "\n"])), function (_ref) {
  var $vissible = _ref.$vissible;
  return !$vissible && (0,external_styled_components_.css)(Chips_styled_templateObject3 || (Chips_styled_templateObject3 = _taggedTemplateLiteral(["\n      transition: all ease 0.15s;\n      opacity: 0;\n      pointer-events: none;\n    "])));
});
var StyledChip = external_styled_components_default()(Chip)(Chips_styled_templateObject4 || (Chips_styled_templateObject4 = _taggedTemplateLiteral(["\n  max-width: fit-content;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"])));
var CounterChip = external_styled_components_default()(Chip)(Chips_styled_templateObject5 || (Chips_styled_templateObject5 = _taggedTemplateLiteral(["\n  /* opacity: ", "; */\n  /* transform: scale(", "); */\n  display: ", ";\n  /* transition: all ease 0.15s; */\n"])), function (_ref2) {
  var $vissible = _ref2.$vissible;
  return $vissible ? 1 : 0;
}, function (_ref3) {
  var $vissible = _ref3.$vissible;
  return $vissible ? 1 : 0;
}, function (_ref4) {
  var $vissible = _ref4.$vissible;
  return $vissible ? 'unset' : 'none';
});
var ContentTooltip = external_styled_components_default().div(Chips_styled_templateObject6 || (Chips_styled_templateObject6 = _taggedTemplateLiteral(["\n  max-width: 488px;\n"])));
;// CONCATENATED MODULE: ./src/components/Select/Chips/Chips.tsx









var OptionChip = function OptionChip(_ref) {
  var className = _ref.className,
    option = _ref.option,
    restChips = _ref.restChips,
    _ref$chipVissible = _ref.chipVissible,
    chipVissible = _ref$chipVissible === void 0 ? false : _ref$chipVissible,
    _ref$counterVissible = _ref.counterVissible,
    counterVissible = _ref$counterVissible === void 0 ? false : _ref$counterVissible,
    disabled = _ref.disabled,
    onVisibiltyChange = _ref.onVisibiltyChange,
    onChipRemove = _ref.onChipRemove;
  var _useInView = react_intersection_observer_useInView({
      threshold: 1,
      onChange: onVisibiltyChange
    }),
    _useInView2 = _slicedToArray(_useInView, 1),
    ref = _useInView2[0];
  var onClose = (0,external_react_.useCallback)(function (e) {
    e.stopPropagation();
    onChipRemove === null || onChipRemove === void 0 ? void 0 : onChipRemove(option.value);
  }, [onChipRemove, option.value]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(OptionChipWrapper, {
    className: className,
    ref: ref,
    $vissible: chipVissible,
    children: [option.renderValue({
      onClose: onChipRemove ? onClose : undefined
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(CounterChip, {
      disabled: disabled,
      size: "l",
      $vissible: counterVissible,
      children: ["+", restChips]
    })]
  });
};
var Chips = function Chips(_ref2) {
  var options = _ref2.options,
    disabled = _ref2.disabled,
    idleHeight = _ref2.idleHeight,
    onChipRemove = _ref2.onChipRemove;
  /**
   * Firstly chips are rendered with zero opacity. Then every chip return if it is shown
   * We start showing them when there is no invisible chips or first inisible is found
   */
  var _useState = (0,external_react_.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isInnitialized = _useState2[0],
    setIsInnitialized = _useState2[1];
  var _useState3 = (0,external_react_.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    invisibleELems = _useState4[0],
    setInvisibleELems = _useState4[1];
  var onVisibiltyChange = function onVisibiltyChange(value) {
    return function (inView) {
      if (value === options[options.length - 1].value) setIsInnitialized(true);
      if (inView) {
        return setInvisibleELems(function (prev) {
          return prev.filter(function (prevValue) {
            return prevValue !== value;
          });
        });
      }
      setInvisibleELems(function (prev) {
        if (prev.includes(value)) return prev;
        return [].concat(_toConsumableArray(prev), [value]);
      });
    };
  };
  var firstInvisibleOptionIndex = options.findIndex(function (_ref3) {
    var value = _ref3.value;
    return invisibleELems.includes(value);
  });
  var isFirstInvisbleOptionFound = firstInvisibleOptionIndex !== -1;

  // We should show 2 more values with opacity 0 for intersectionObserver to know if they are visible before showing them
  var numberExtraOptionsToRender = 2;
  var optionsToRender = isFirstInvisbleOptionFound ? options.slice(0, firstInvisibleOptionIndex + numberExtraOptionsToRender) : options;
  var isAllChipsInitiallyVisible = isInnitialized && !invisibleELems.length;
  var getIsChipVisible = function getIsChipVisible(value) {
    if (idleHeight === 'full') return true;
    return isAllChipsInitiallyVisible || isFirstInvisbleOptionFound && !invisibleELems.includes(value);
  };
  var getIsCounterVissible = function getIsCounterVissible(nextValue) {
    if (idleHeight === 'full') return false;

    // If there is no nextValue, current chip is last and there'i no need in counter
    if (!nextValue) return false;
    return !getIsChipVisible(nextValue);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: optionsToRender.map(function (option, ind) {
      var _optionsToRender;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(ChipBox, {
        onMouseDown: preventDefault,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(OptionChip, {
          className: "chip",
          option: option,
          onChipRemove: onChipRemove,
          onVisibiltyChange: onVisibiltyChange(option.value),
          disabled: disabled,
          restChips: options.length - ind - 1,
          chipVissible: getIsChipVisible(option.value),
          counterVissible: getIsCounterVissible((_optionsToRender = optionsToRender[ind + 1]) === null || _optionsToRender === void 0 ? void 0 : _optionsToRender.value)
        })
      }, option.value);
    })
  });
};
;// CONCATENATED MODULE: ./src/components/Select/Chips/index.tsx

;// CONCATENATED MODULE: ./src/components/Select/constants.ts
var defaultLoadingText = 'Searching for match';
var defaultEmptyMessage = 'No results';
;// CONCATENATED MODULE: ./src/components/Select/chevronDown.svg
var chevronDown_path;
function chevronDown_extends() { chevronDown_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chevronDown_extends.apply(this, arguments); }

var SvgChevronDown = function SvgChevronDown(props) {
  return /*#__PURE__*/external_react_.createElement("svg", chevronDown_extends({
    width: 15,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), chevronDown_path || (chevronDown_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m4 4.5 3.5 3 3.5-3",
    stroke: "#B9B9B9",
    strokeWidth: 1.3,
    strokeLinecap: "round"
  })));
};
/* harmony default export */ const chevronDown = (SvgChevronDown);
;// CONCATENATED MODULE: ./src/components/Select/styled.ts

var Select_styled_templateObject, Select_styled_templateObject2, Select_styled_templateObject3, Select_styled_templateObject4, Select_styled_templateObject5, Select_styled_templateObject6, Select_styled_templateObject7, Select_styled_templateObject8, Select_styled_templateObject9, Select_styled_templateObject10, Select_styled_templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;




var getSelectValueHeight = function getSelectValueHeight(multiple) {
  return multiple ? '32px' : '26px';
};
var getBorderColor = function getBorderColor(_ref) {
  var status = _ref.status,
    hovered = _ref.hovered,
    disabled = _ref.disabled,
    theme = _ref.theme;
  if (status === 'error' && hovered) return theme.select.colors.borderError;
  if (status === 'error' && !hovered) return theme.select.colors.borderErrorHover;
  if (disabled) return theme.select.colors.borderDisabled;
  if (hovered) return theme.select.colors.borderHover;
  return theme.select.colors.borderInitial;
};
var SelectWrapper = external_styled_components_default().div(Select_styled_templateObject || (Select_styled_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n\n  display: flex;\n  align-items: center;\n\n  cursor: pointer;\n\n  position: relative;\n  padding: ", ";\n\n  min-height: ", ";\n\n  background: ", ";\n  border: ", " solid\n    ", ";\n  border-radius: ", ";\n\n  font-family: ", ";\n  font-style: normal;\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  color: ", ";\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  ", "\n"])), function (_ref2) {
  var $multiple = _ref2.$multiple;
  return $multiple ? '0 15px 0 7px' : '4px 15px';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.select.size.initialHeight;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.select.colors.initialBackgroundColor;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.select.size.borderWidth;
}, function (_ref6) {
  var $disabled = _ref6.$disabled,
    $status = _ref6.$status,
    $focused = _ref6.$focused,
    theme = _ref6.theme;
  return getBorderColor({
    theme: theme,
    status: $status,
    disabled: $disabled,
    hovered: $focused
  });
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.select.borderRadius;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.select.font.fontFamily;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.select.font.fontWeight;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.select.font.fontSize;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.select.font.lineHeight;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.select.colors.text;
}, function (_ref13) {
  var $disabled = _ref13.$disabled,
    $status = _ref13.$status,
    theme = _ref13.theme;
  return getBorderColor({
    theme: theme,
    status: $status,
    disabled: $disabled,
    hovered: true
  });
}, function (_ref14) {
  var $disabled = _ref14.$disabled;
  return $disabled && (0,external_styled_components_.css)(Select_styled_templateObject2 || (Select_styled_templateObject2 = _taggedTemplateLiteral(["\n      background-color: var(--color-beige);\n      color: var(--color-dull-grey);\n\n      pointer-events: none;\n      cursor: text;\n    "])));
});
var Hidden = external_styled_components_default().div(Select_styled_templateObject3 || (Select_styled_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n\n  width: 0;\n  height: 0;\n\n  opacity: 0;\n\n  overflow: hidden;\n  pointer-events: none;\n"])));
var NativeSelect = external_styled_components_default().select(Select_styled_templateObject4 || (Select_styled_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n\n  left: 0;\n  top: 0;\n\n  width: 100%;\n  height: 100%;\n\n  opacity: 0;\n  border: none;\n  pointer-events: none;\n"])));
var IconsLeft = external_styled_components_default().div(Select_styled_templateObject5 || (Select_styled_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  margin-right: 8px;\n"])));
var ValueWrapper = external_styled_components_default().div(Select_styled_templateObject6 || (Select_styled_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: ", ";\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 auto;\n\n  overflow: hidden;\n  align-items: center;\n\n  /* In multiple select state padding is spicified in ValueWrapper because browser zooming cause Intersection observer wrong work */\n  padding: ", ";\n\n  ", "\n"])), function (_ref15) {
  var $fixHeight = _ref15.$fixHeight;
  return $fixHeight ? 'unset' : 'wrap';
}, function (_ref16) {
  var $multiple = _ref16.$multiple;
  return $multiple ? '4px 0' : 'unset';
}, function (_ref17) {
  var $fixHeight = _ref17.$fixHeight,
    $multiple = _ref17.$multiple;
  return $fixHeight && (0,external_styled_components_.css)(Select_styled_templateObject7 || (Select_styled_templateObject7 = _taggedTemplateLiteral(["\n      height: ", ";\n    "])), getSelectValueHeight($multiple));
});
var SelectInput = external_styled_components_default().input(Select_styled_templateObject8 || (Select_styled_templateObject8 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n\n  flex: 1 1 auto;\n\n  width: 100px;\n  padding: 0;\n  background: transparent;\n\n  font-family: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  text-overflow: ellipsis;\n\n  color: inherit;\n\n  border: none;\n  outline: none;\n  appearance: none;\n  height: ", ";\n\n  &::placeholder {\n    font-weight: ", ";\n    color: ", ";\n  }\n"])), function (_ref18) {
  var $multiple = _ref18.$multiple;
  return getSelectValueHeight($multiple);
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.select.font.placeholderWeight;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.select.colors.placeholder;
});
var StyledOpenStatusButton = external_styled_components_default()(chevronDown)(Select_styled_templateObject9 || (Select_styled_templateObject9 = _taggedTemplateLiteral(["\n  transition: transform 0.3s ease-in-out;\n  transform: rotate(0);\n\n  cursor: pointer;\n\n  ", "\n"])), function (_ref21) {
  var $opened = _ref21.$opened;
  return $opened && (0,external_styled_components_.css)(Select_styled_templateObject10 || (Select_styled_templateObject10 = _taggedTemplateLiteral(["\n      transform: rotate(180deg);\n    "])));
});
var IconClose = external_styled_components_default().div(Select_styled_templateObject11 || (Select_styled_templateObject11 = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n\n  border-radius: 50%;\n  padding: 5px;\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_ref22) {
  var theme = _ref22.theme;
  return theme.select.colors.closeButtonBackgroundHover;
});
var IconPanel = external_styled_components_default().div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 0 0 auto;\n  gap: 8px;\n  align-items: center;\n\n  margin-left: 8px;\n"])));
var styled_StyledDropdown = external_styled_components_default()(Dropdown)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding: ", ";\n\n  max-height: ", ";\n  overflow: auto;\n\n  box-shadow: ", ";\n\n  option {\n    display: none;\n  }\n"])), function (_ref23) {
  var theme = _ref23.theme;
  return theme.select.size.dropdownPadding;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.select.size.dropdownMaxHeight;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.select.dropdownBoxShadow;
});

// This one is needed to show ... when value is too big
var StringValueWrapper = external_styled_components_default().div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
var PopupInputWrapper = external_styled_components_default().div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  padding: 0 8px;\n  margin-bottom: 16px;\n"])));
var PopupValuesWrapper = external_styled_components_default().div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  overflow: auto;\n"])));
var PopupChipsWrapper = external_styled_components_default().div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  padding: 2px 8px;\n  margin-bottom: 16px;\n  max-height: 155px;\n  overflow: auto;\n  flex-shrink: 0;\n"])));
var StyledPopup = external_styled_components_default()(Popup)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  background-color: var(--color-white);\n  width: calc(100% - 32px);\n  height: calc(100% - 110px);\n  border-radius: 15px;\n\n  padding-bottom: 8px;\n  box-sizing: border-box;\n"])));
var PopupHeader = external_styled_components_default().div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  padding: 16px 16px;\n  display: flex;\n  justify-content: flex-end;\n"])));
;// CONCATENATED MODULE: ./src/components/Select/useSearchSelectContext.tsx

var useSearchSelectContext_excluded = ["children"],
  _excluded2 = ["children"],
  _excluded3 = ["children"],
  _excluded4 = ["children"];


var noop = function noop() {
  return void 0;
};
var ConstantSearchSelectContext = /*#__PURE__*/(0,external_react_.createContext)({
  onConstantOptionMount: noop,
  onConstantOptionUnMount: noop,
  searchValue: '',
  multiple: false
});
var useConstantSearchSelectContext = function useConstantSearchSelectContext() {
  return (0,external_react_.useContext)(ConstantSearchSelectContext);
};
var ConstantSearchSelectProvider = function ConstantSearchSelectProvider(_ref) {
  var children = _ref.children,
    restProps = _objectWithoutProperties(_ref, useSearchSelectContext_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ConstantSearchSelectContext.Provider, {
    value: restProps,
    children: children
  });
};
var DropDownSearchSelectContext = /*#__PURE__*/(0,external_react_.createContext)({
  onDropDownOptionMount: noop,
  onDropDownOptionUnMount: noop,
  onOptionClick: noop,
  setHoverValue: noop,
  hoverValue: '',
  searchValue: '',
  highlightFormat: 'word',
  multiple: false,
  defaultHighlighted: true,
  showCheckbox: true,
  mobile: false
});
var useDropDownSearchSelectContext = function useDropDownSearchSelectContext() {
  return (0,external_react_.useContext)(DropDownSearchSelectContext);
};
var DropDownSearchSelectProvider = function DropDownSearchSelectProvider(_ref2) {
  var children = _ref2.children,
    restProps = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DropDownSearchSelectContext.Provider, {
    value: restProps,
    children: children
  });
};
var OptionContext = /*#__PURE__*/(0,external_react_.createContext)({
  onAddTextToHighlight: noop
});
var useOptionContext = function useOptionContext() {
  return (0,external_react_.useContext)(OptionContext);
};
var OptionProvider = function OptionProvider(_ref3) {
  var children = _ref3.children,
    restProps = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(OptionContext.Provider, {
    value: restProps,
    children: children
  });
};
var OptionGroupContext = /*#__PURE__*/(0,external_react_.createContext)({
  label: ''
});
var useOptionGroupContext = function useOptionGroupContext() {
  return (0,external_react_.useContext)(OptionGroupContext);
};
var OptionGroupProvider = function OptionGroupProvider(_ref4) {
  var children = _ref4.children,
    restProps = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(OptionGroupContext.Provider, {
    value: restProps,
    children: children
  });
};
;// CONCATENATED MODULE: ./src/components/Select/Select.tsx




var Select_excluded = ["value", "mobile", "isLoading", "className", "style", "iconsRight", "iconsLeft", "portalTargetRef", "disabled", "placeholder", "defaultValue", "children", "status", "renderedEmptyValue", "loadingAppearance", "idleHeight", "mode", "highlightFormat", "multiple", "defaultHighlighted", "showCheckbox", "loadingMessage", "emptyMessage", "containerRef", "onInputChange", "renderSelectValue", "hideSelectedValues", "onFocus", "onBlur"];
function Select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Select_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Select_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















/**
 * TODO:
 * refactor to display value in input if value is string
 * IntersectionObserver -> manual DOM calcs?
 * What to do if there are to many chips
 * theme
 *
 * Limit chips width
 * Playground for Story
 */



var findAbledOptionValue = function findAbledOptionValue(options) {
  var _options$find;
  return (_options$find = options.find(function (_ref) {
    var disabled = _ref.disabled;
    return !disabled;
  })) === null || _options$find === void 0 ? void 0 : _options$find.value;
};
var stopPropagation = function stopPropagation(evt) {
  return evt.stopPropagation();
};
var Select = /*#__PURE__*/(0,external_react_.forwardRef)(function (_ref2, ref) {
  var value = _ref2.value,
    _ref2$mobile = _ref2.mobile,
    mobile = _ref2$mobile === void 0 ? false : _ref2$mobile,
    isLoading = _ref2.isLoading,
    className = _ref2.className,
    style = _ref2.style,
    iconsRight = _ref2.iconsRight,
    iconsLeft = _ref2.iconsLeft,
    portalTargetRef = _ref2.portalTargetRef,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    placeholder = _ref2.placeholder,
    defaultValue = _ref2.defaultValue,
    children = _ref2.children,
    status = _ref2.status,
    renderedEmptyValue = _ref2.renderedEmptyValue,
    _ref2$loadingAppearan = _ref2.loadingAppearance,
    loadingAppearance = _ref2$loadingAppearan === void 0 ? 'input' : _ref2$loadingAppearan,
    _ref2$idleHeight = _ref2.idleHeight,
    idleHeight = _ref2$idleHeight === void 0 ? 'fixed' : _ref2$idleHeight,
    _ref2$mode = _ref2.mode,
    mode = _ref2$mode === void 0 ? 'select' : _ref2$mode,
    _ref2$highlightFormat = _ref2.highlightFormat,
    highlightFormat = _ref2$highlightFormat === void 0 ? 'word' : _ref2$highlightFormat,
    _ref2$multiple = _ref2.multiple,
    multiple = _ref2$multiple === void 0 ? false : _ref2$multiple,
    _ref2$defaultHighligh = _ref2.defaultHighlighted,
    defaultHighlighted = _ref2$defaultHighligh === void 0 ? true : _ref2$defaultHighligh,
    _ref2$showCheckbox = _ref2.showCheckbox,
    showCheckbox = _ref2$showCheckbox === void 0 ? true : _ref2$showCheckbox,
    loadingMessageFromProps = _ref2.loadingMessage,
    emptyMessageFromProps = _ref2.emptyMessage,
    containerRefFromProps = _ref2.containerRef,
    onInputChange = _ref2.onInputChange,
    renderSelectValue = _ref2.renderSelectValue,
    hideSelectedValues = _ref2.hideSelectedValues,
    onFocusFromProps = _ref2.onFocus,
    onBlurFromProps = _ref2.onBlur,
    props = _objectWithoutProperties(_ref2, Select_excluded);
  var _useState = (0,external_react_.useState)(value !== null && value !== void 0 ? value : defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    localValue = _useState2[0],
    setLocalValue = _useState2[1];
  var _useState3 = (0,external_react_.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var _useState5 = (0,external_react_.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    hoverValue = _useState6[0],
    setHoverValue = _useState6[1];
  var _useState7 = (0,external_react_.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    shouldRenderSelectValue = _useState8[0],
    setShouldRenderSelectValue = _useState8[1];
  var _useState9 = (0,external_react_.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    constantOptions = _useState10[0],
    setConstantOptions = _useState10[1];
  var _useState11 = (0,external_react_.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    dropDownOptions = _useState12[0],
    setDropDownOptions = _useState12[1];
  var _useBooleanState = useBooleanState(false),
    _useBooleanState2 = _slicedToArray(_useBooleanState, 4),
    isSearchPanelOpen = _useBooleanState2[0],
    openSearchPanel = _useBooleanState2[1],
    closeSearchPanel = _useBooleanState2[2],
    toggleSearchPanel = _useBooleanState2[3];
  var _useState13 = (0,external_react_.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isFocused = _useState14[0],
    setIsFocused = _useState14[1];
  var _useState15 = (0,external_react_.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isDeleteButton = _useState16[0],
    setIsDeleteButton = _useState16[1];
  var loadingMessage = loadingMessageFromProps || defaultLoadingText;
  var emptyMessage = emptyMessageFromProps || defaultEmptyMessage;
  var selectIsUncontrolled = value === undefined;
  var modeIsSelect = mode === 'select';
  var selectedOption = (0,external_react_.useMemo)(function () {
    if (hideSelectedValues) {
      return null;
    }
    return multiple ? null : constantOptions.find(function (option) {
      return option.value === localValue;
    });
  }, [hideSelectedValues, multiple, constantOptions, localValue]);
  var selectedOptions = (0,external_react_.useMemo)(function () {
    if (hideSelectedValues) {
      return [];
    }
    return multiple ? constantOptions.filter(function (option) {
      return localValue === null || localValue === void 0 ? void 0 : localValue.includes(option.value);
    }) : [];
  }, [constantOptions, localValue, multiple, hideSelectedValues]);
  var hoverOptionIndex = (0,external_react_.useMemo)(function () {
    return dropDownOptions.findIndex(function (option) {
      return option.value === hoverValue;
    });
  }, [dropDownOptions, hoverValue]);
  var dropDownChildren = (0,external_react_.useMemo)(function () {
    if (isLoading && loadingAppearance === 'options') return /*#__PURE__*/(0,jsx_runtime.jsx)(DropdownOption, {
      children: loadingMessage
    });
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [!dropDownOptions.length && /*#__PURE__*/(0,jsx_runtime.jsx)(DropdownOption, {
        children: emptyMessage
      }), children]
    });
  }, [isLoading, loadingMessage, children, dropDownOptions, emptyMessage, loadingAppearance]);
  var popupInputRef = (0,external_react_.useRef)(null);
  var inputRef = (0,external_react_.useRef)(null);
  var selectRef = (0,external_react_.useRef)(null);
  var containerRef = (0,external_react_.useRef)(null);
  var dropDownRef = (0,external_react_.useRef)(null);
  var mutableState = (0,external_react_.useRef)({
    shouldExtendInputValue: false
  });
  var onConstantOptionMount = (0,external_react_.useCallback)(function (option) {
    return setConstantOptions(function (prev) {
      if (prev.some(function (_ref3) {
        var value = _ref3.value;
        return value === option.value;
      })) return prev;
      return [].concat(_toConsumableArray(prev), [option]);
    });
  }, []);
  var onConstantOptionUnMount = (0,external_react_.useCallback)(function (option) {
    return setConstantOptions(function (prev) {
      return prev.filter(function (prevOption) {
        return prevOption.value !== option.value || (localValue === null || localValue === void 0 ? void 0 : localValue.includes(option.value));
      });
    });
  }, [localValue]);
  var onDropDownOptionMount = (0,external_react_.useCallback)(function (option) {
    return setDropDownOptions(function (prev) {
      return [].concat(_toConsumableArray(prev), [option]);
    });
  }, []);
  var onDropDownOptionUnMount = (0,external_react_.useCallback)(function (option) {
    return setDropDownOptions(function (prev) {
      return prev.filter(function (prevOption) {
        return prevOption.value !== option.value;
      });
    });
  }, []);
  var onCloseSelect = (0,external_react_.useCallback)(function () {
    closeSearchPanel();
    setHoverValue(Array.isArray(localValue) ? localValue[0] : localValue || '');
    if (inputRef.current) changeInputData(inputRef.current, {
      value: ''
    });
    setShouldRenderSelectValue(true);
  }, [closeSearchPanel, localValue]);
  var handleOptionSelect = (0,external_react_.useCallback)(function (optionValue) {
    var selectElem = selectRef.current;
    if (!selectElem) return;
    var optionElems = Array.from(selectElem.options);
    var targetOptionElem = optionElems.find(function (option) {
      return option.value === optionValue;
    });
    if (!targetOptionElem) return;
    if (!multiple) optionElems.forEach(function (option) {
      return option.selected = false;
    });
    targetOptionElem.selected = multiple ? !targetOptionElem.selected : true;
    selectElem.dispatchEvent(new Event('change', {
      bubbles: true
    }));
    if (!multiple) onCloseSelect();
  }, [onCloseSelect, multiple]);
  var shouldFixMultiSelectHeight = idleHeight === 'fixed' && !isSearchPanelOpen && !mobile;
  var renderMultipleSelectValue = (0,external_react_.useCallback)(function () {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Chips, {
      options: selectedOptions,
      idleHeight: idleHeight,
      disabled: disabled,
      onChipRemove: mobile ? undefined : handleOptionSelect
    });
  }, [selectedOptions, idleHeight, disabled, mobile, handleOptionSelect]);
  var isEmptyValue = multiple ? !(localValue !== null && localValue !== void 0 && localValue.length) : !localValue;
  var isEmpty = isEmptyValue && !searchValue;
  var renderedSelectValue = renderSelectValue === null || renderSelectValue === void 0 ? void 0 : renderSelectValue(localValue, searchValue);
  var renderedSelectedOption = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.children;
  var renderedDefaultSelectValue = multiple ? renderMultipleSelectValue() : renderedSelectedOption;
  var visibleValue = renderedSelectValue || renderedDefaultSelectValue || ((renderedEmptyValue !== null && renderedEmptyValue !== void 0 ? renderedEmptyValue : hideSelectedValues) ? null : localValue) || null;
  var visibleValueIsString = typeof visibleValue === 'string';
  var shouldFixSingleSelectHeight = idleHeight === 'fixed' && (visibleValueIsString || isEmpty);
  var shouldFixHeight = multiple ? shouldFixMultiSelectHeight : shouldFixSingleSelectHeight;
  var wrappedVisibleValue = function wrappedVisibleValue() {
    if (hideSelectedValues) return;
    return visibleValueIsString ? /*#__PURE__*/(0,jsx_runtime.jsx)(StringValueWrapper, {
      children: visibleValue
    }) : visibleValue;
  };
  var mutateAndExtendTargetInputValue = function mutateAndExtendTargetInputValue(evt) {
    if (!mutableState.current.shouldExtendInputValue || !visibleValueIsString) return;
    evt.target.value = "".concat(visibleValue).concat(evt.target.value);
    mutableState.current.shouldExtendInputValue = false;
  };
  var onSingleLocalInputChange = function onSingleLocalInputChange() {
    return setShouldRenderSelectValue(false);
  };
  var onLocalInputChange = function onLocalInputChange(evt) {
    if (!multiple) onSingleLocalInputChange();
    mutateAndExtendTargetInputValue(evt);
    setSearchValue(evt.target.value);
    onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(evt);
  };
  var onMultipleSelectBackSpace = function onMultipleSelectBackSpace() {
    var lastAbledSelectedOptionValue = findAbledOptionValue(selectedOptions.reverse());
    if (!lastAbledSelectedOptionValue) return;
    handleOptionSelect(lastAbledSelectedOptionValue);
  };
  var deleteOrHideSelectValueOnBackspace = function deleteOrHideSelectValueOnBackspace() {
    if (searchValue || !localValue || hideSelectedValues) return;
    if (!multiple) return setShouldRenderSelectValue(false);
    onMultipleSelectBackSpace();
  };
  var chooseOptionOnEnter = function chooseOptionOnEnter() {
    var targetOption = dropDownOptions[hoverOptionIndex];
    if (!targetOption) return;
    handleOptionSelect(targetOption.value);
    if (multiple) return;
    onCloseSelect();
  };
  var onOpenedSelectEnter = function onOpenedSelectEnter() {
    return chooseOptionOnEnter();
  };
  var onEnter = function onEnter() {
    if (isSearchPanelOpen) return onOpenedSelectEnter();
    openSearchPanel();
  };
  var scrollToOption = function scrollToOption(optionValue) {
    var _dropDownOptions$find, _dropDownOptions$find2;
    var scrollElem = dropDownRef.current;
    var optionElem = (_dropDownOptions$find = dropDownOptions.find(function (option) {
      return option.value === optionValue;
    })) === null || _dropDownOptions$find === void 0 ? void 0 : (_dropDownOptions$find2 = _dropDownOptions$find.ref) === null || _dropDownOptions$find2 === void 0 ? void 0 : _dropDownOptions$find2.current;
    if (!scrollElem || !optionElem) return;
    scrollToNotVisibleELem(optionElem, scrollElem);
  };
  var findNextHoverOptionValue = (0,external_react_.useCallback)(function () {
    var nextAbledOptionValue = findAbledOptionValue(dropDownOptions.slice(hoverOptionIndex + 1));
    if (nextAbledOptionValue) return nextAbledOptionValue;
    return findAbledOptionValue(dropDownOptions);
  }, [hoverOptionIndex, dropDownOptions]);
  var findPrevHoverOptionValue = (0,external_react_.useCallback)(function () {
    var sliceInd = hoverOptionIndex === -1 ? undefined : hoverOptionIndex;
    var prevAbledOptionValue = findAbledOptionValue(dropDownOptions.slice(0, sliceInd).reverse());
    if (prevAbledOptionValue) return prevAbledOptionValue;
    return findAbledOptionValue(dropDownOptions.slice().reverse());
  }, [hoverOptionIndex, dropDownOptions]);
  var handleKeyUp = function handleKeyUp(e) {
    var code = e.code;
    switch (code) {
      case 'Enter':
        {
          onEnter();
          break;
        }
      case 'Escape':
        {
          onCloseSelect();
          break;
        }
      case 'ArrowUp':
        {
          var prevValue = findPrevHoverOptionValue();
          if (!prevValue) break;
          scrollToOption(prevValue);
          setHoverValue(prevValue);
          break;
        }
      case 'ArrowDown':
        {
          var nextValue = findNextHoverOptionValue();
          if (!nextValue) break;
          scrollToOption(nextValue);
          setHoverValue(nextValue);
          break;
        }
    }
  };
  var onSelectKeyDown = function onSelectKeyDown(e) {
    var code = e.code;
    var preventKeys = ['Enter', 'Space', 'ArrowDown', 'ArrowUp'];
    if (preventKeys.includes(code)) {
      // Prevent native select events
      e.preventDefault();
    }
  };
  var onWrapperClick = function onWrapperClick() {
    openSearchPanel();
  };
  var extendSelectValueToInputValue = function extendSelectValueToInputValue() {
    if (!visibleValueIsString || searchValue || !shouldRenderSelectValue) return;
    mutableState.current.shouldExtendInputValue = true;
  };
  var narrowSelectValueToInputValue = function narrowSelectValueToInputValue(evt) {
    if (!visibleValueIsString || !inputRef.current || searchValue || !shouldRenderSelectValue || !localValue) return;

    // Предотвратить удаление выделенного с помощью selection символа
    evt.preventDefault();
    var newInputValue = visibleValue.slice(0, -1);
    changeInputData(inputRef.current, {
      value: newInputValue,
      selectionEnd: newInputValue.length,
      selectionStart: newInputValue.length
    });
  };
  var onWrapperKeyDown = function onWrapperKeyDown(evt) {
    var code = evt.code;
    if (code === 'ArrowUp' || code === 'ArrowDown') evt.preventDefault();
    if (evt.key.length === 1) extendSelectValueToInputValue();
    if (code === 'Backspace' && !evt.repeat) deleteOrHideSelectValueOnBackspace();
    if (code === 'Backspace') narrowSelectValueToInputValue(evt);
    if (code === 'Enter' && isSearchPanelOpen) evt.preventDefault();
  };
  var onFocus = function onFocus(evt) {
    setIsFocused(true);
    onFocusFromProps === null || onFocusFromProps === void 0 ? void 0 : onFocusFromProps(evt);
  };
  var onBlur = function onBlur(evt) {
    setIsFocused(false);
    if (!evt.currentTarget.contains(evt.relatedTarget)) {
      onBlurFromProps === null || onBlurFromProps === void 0 ? void 0 : onBlurFromProps(evt);
    }
  };
  var onChange = function onChange(evt) {
    var _props$onChange;
    if (selectIsUncontrolled) {
      setLocalValue(multiple ? Array.from(evt.target.selectedOptions).map(function (option) {
        return option.value;
      }) : evt.target.value);
    }
    (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, evt);
  };
  var handleClickCloseIcon = function handleClickCloseIcon() {
    onCloseSelect();
  };
  (0,external_react_.useEffect)(function () {
    if (!Array.isArray(localValue)) setHoverValue(localValue || '');
  }, [localValue]);
  (0,external_react_.useEffect)(function () {
    if (!isFocused && !multiple || multiple) setShouldRenderSelectValue(true);
  }, [multiple, isFocused]);
  (0,external_react_.useEffect)(function () {
    if (isSearchPanelOpen) {
      var _popupInputRef$curren, _selectRef$current, _inputRef$current;
      if (mobile) return (_popupInputRef$curren = popupInputRef.current) === null || _popupInputRef$curren === void 0 ? void 0 : _popupInputRef$curren.focus();
      modeIsSelect ? (_selectRef$current = selectRef.current) === null || _selectRef$current === void 0 ? void 0 : _selectRef$current.focus() : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    } else {
      var _selectRef$current2, _inputRef$current2;
      modeIsSelect ? (_selectRef$current2 = selectRef.current) === null || _selectRef$current2 === void 0 ? void 0 : _selectRef$current2.blur() : (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
    }
  }, [isSearchPanelOpen, mobile, modeIsSelect]);
  (0,external_react_.useEffect)(function () {
    if (!selectIsUncontrolled) setLocalValue(value);
  }, [value, selectIsUncontrolled]);
  (0,external_react_.useEffect)(function () {
    var _dropDownRef$current;
    (_dropDownRef$current = dropDownRef.current) === null || _dropDownRef$current === void 0 ? void 0 : _dropDownRef$current.scroll(0, 0);
  }, [dropDownOptions]);
  (0,external_react_.useEffect)(function () {
    searchValue ? setIsDeleteButton(true) : setIsDeleteButton(false);
  }, [searchValue]);
  useClickOutside([containerRef, dropDownRef], onCloseSelect);
  var dropdownProviderProps = {
    onOptionClick: handleOptionSelect,
    setHoverValue: setHoverValue,
    onDropDownOptionMount: onDropDownOptionMount,
    onDropDownOptionUnMount: onDropDownOptionUnMount,
    highlightFormat: highlightFormat,
    selectValue: localValue,
    searchValue: searchValue,
    hoverValue: hoverValue,
    multiple: multiple,
    defaultHighlighted: defaultHighlighted,
    showCheckbox: showCheckbox,
    mobile: mobile
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(SelectWrapper, {
      className: className,
      $disabled: disabled,
      $focused: isFocused,
      $multiple: multiple,
      $status: status,
      style: style,
      ref: containerRef,
      onKeyUp: handleKeyUp,
      onKeyDown: onWrapperKeyDown,
      onClick: onWrapperClick,
      onBlur: onBlur,
      onFocus: onFocus,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Hidden, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ConstantSearchSelectProvider, {
          onConstantOptionMount: onConstantOptionMount,
          onConstantOptionUnMount: onConstantOptionUnMount,
          searchValue: searchValue,
          multiple: multiple,
          children: children
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(NativeSelect, Select_objectSpread(Select_objectSpread({
        ref: refSetter(ref, selectRef),
        value: localValue,
        multiple: multiple,
        disabled: disabled,
        onKeyDown: onSelectKeyDown
      }, props), {}, {
        onChange: onChange,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
          value: ""
        }), constantOptions.map(function (option) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: option.value,
            children: option.value
          }, option.value);
        })]
      })), iconsLeft && /*#__PURE__*/(0,jsx_runtime.jsx)(IconsLeft, {
        children: iconsLeft
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ValueWrapper, {
        $multiple: multiple,
        $fixHeight: shouldFixHeight,
        id: "selectValueWrapper",
        children: [shouldRenderSelectValue && wrappedVisibleValue(), (placeholder && isEmpty || !modeIsSelect) && /*#__PURE__*/(0,jsx_runtime.jsx)(SelectInput, {
          tabIndex: -1,
          $multiple: multiple,
          ref: inputRef,
          placeholder: isEmpty || hideSelectedValues ? placeholder : undefined,
          disabled: disabled,
          readOnly: modeIsSelect,
          value: searchValue,
          onChange: onLocalInputChange
        })]
      }), isSearchPanelOpen && !mobile && /*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledDropdown, {
        id: "selectDropdownContainer",
        targetRef: portalTargetRef || containerRef,
        onMouseDown: preventDefault,
        ref: dropDownRef,
        container: containerRefFromProps,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(DropDownSearchSelectProvider, Select_objectSpread(Select_objectSpread({}, dropdownProviderProps), {}, {
          children: dropDownChildren
        }))
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(IconPanel, {
        onClick: stopPropagation,
        onMouseDown: preventDefault,
        children: [iconsRight && isDeleteButton && /*#__PURE__*/(0,jsx_runtime.jsx)(IconClose, {
          onClick: handleClickCloseIcon,
          children: iconsRight
        }), isLoading && loadingAppearance === 'input' && /*#__PURE__*/(0,jsx_runtime.jsx)(Spinner_Spinner, {
          size: 22,
          appearance: "#5896C0"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledOpenStatusButton, {
          $opened: isSearchPanelOpen,
          onClick: toggleSearchPanel,
          "aria-hidden": true
        })]
      })]
    }), isSearchPanelOpen && mobile && /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledPopup, {
      onClose: onCloseSelect,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PopupHeader, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton, {
          onClick: onCloseSelect,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(assets_close, {})
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DropDownSearchSelectProvider, Select_objectSpread(Select_objectSpread({}, dropdownProviderProps), {}, {
        children: [!!selectedOptions.length && /*#__PURE__*/(0,jsx_runtime.jsx)(PopupChipsWrapper, {
          children: selectedOptions.map(function (option) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledChip, {
              onClose: function onClose() {
                return handleOptionSelect(option.value);
              },
              children: option.children
            }, option.value);
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(PopupInputWrapper, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input_Input, {
            placeholder: placeholder,
            value: searchValue,
            onChange: onLocalInputChange,
            ref: popupInputRef
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(PopupValuesWrapper, {
          children: dropDownChildren
        })]
      }))]
    })]
  });
});
Select.displayName = 'Select';
;// CONCATENATED MODULE: ./src/components/Select/Highlight/Highlight.tsx



var Highlight_excluded = ["children"];
var Highlight_templateObject, Highlight_templateObject2;
function Highlight_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Highlight_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Highlight_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Highlight_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var Panel = external_styled_components_default().div(Highlight_templateObject || (Highlight_templateObject = _taggedTemplateLiteral(["\n  color: inherit;\n"])));
var HiglightedText = external_styled_components_default().span(Highlight_templateObject2 || (Highlight_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: 500;\n"])));
var Highlight = function Highlight(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? '' : _ref$children,
    props = _objectWithoutProperties(_ref, Highlight_excluded);
  var selectContext = useDropDownSearchSelectContext();
  var _useOptionContext = useOptionContext(),
    onAddTextToHighlight = _useOptionContext.onAddTextToHighlight;
  var searchValue = (selectContext === null || selectContext === void 0 ? void 0 : selectContext.searchValue) || '';
  var _useMemo = (0,external_react_.useMemo)(function () {
      return getTextHighlightMeta(children, searchValue, selectContext === null || selectContext === void 0 ? void 0 : selectContext.highlightFormat);
    }, [children, searchValue, selectContext === null || selectContext === void 0 ? void 0 : selectContext.highlightFormat]),
    chunks = _useMemo.chunks,
    parts = _useMemo.parts;
  (0,external_react_.useEffect)(function () {
    onAddTextToHighlight(children);
  }, [onAddTextToHighlight, children]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Panel, Highlight_objectSpread(Highlight_objectSpread({}, props), {}, {
    className: props.className,
    title: children,
    children: parts.map(function (part, i) {
      return chunks.includes(part.toLowerCase()) ? /*#__PURE__*/(0,jsx_runtime.jsx)(HiglightedText, {
        children: part
      }, i) : part;
    })
  }));
};
;// CONCATENATED MODULE: ./src/components/Select/Highlight/index.tsx

;// CONCATENATED MODULE: ./src/components/Checkbox/checkMark.svg
var checkMark_path;
function checkMark_extends() { checkMark_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return checkMark_extends.apply(this, arguments); }

var SvgCheckMark = function SvgCheckMark(props) {
  return /*#__PURE__*/external_react_.createElement("svg", checkMark_extends({
    width: 10,
    height: 8,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), checkMark_path || (checkMark_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M9.702.465a.875.875 0 0 0-1.26.026L4.39 5.653 1.948 3.21A.875.875 0 0 0 .711 4.447l3.087 3.088a.875.875 0 0 0 1.26-.023L9.714 1.69A.875.875 0 0 0 9.702.465Z",
    fill: "var(--color-white)"
  })));
};
/* harmony default export */ const checkMark = (SvgCheckMark);
;// CONCATENATED MODULE: ./src/components/Checkbox/styled.ts

var Checkbox_styled_templateObject, Checkbox_styled_templateObject2, Checkbox_styled_templateObject3, Checkbox_styled_templateObject4, Checkbox_styled_templateObject5, Checkbox_styled_templateObject6, Checkbox_styled_templateObject7, Checkbox_styled_templateObject8, Checkbox_styled_templateObject9;


var Label = external_styled_components_default().label(Checkbox_styled_templateObject || (Checkbox_styled_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: ", ";\n\n  width: fit-content;\n  color: ", ";\n\n  cursor: pointer;\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.checkbox.labelGap;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.checkbox.colors.label;
}, function (_ref3) {
  var $disabled = _ref3.$disabled;
  return $disabled && (0,external_styled_components_.css)(Checkbox_styled_templateObject2 || (Checkbox_styled_templateObject2 = _taggedTemplateLiteral(["\n      cursor: auto;\n    "])));
});
var CustomCheckbox = external_styled_components_default().div(Checkbox_styled_templateObject3 || (Checkbox_styled_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n\n  width: ", ";\n  height: ", ";\n\n  border-radius: ", ";\n\n  flex-shrink: 0;\n\n  border: ", " solid ", ";\n\n  &::before {\n    background-color: ", ";\n  }\n\n  ", "\n\n  &::before {\n    content: '';\n\n    position: absolute;\n\n    border-radius: ", ";\n\n    width: ", ";\n    height: ", ";\n    left: 50%;\n    top: 50%;\n\n    transform: translate(-50%, -50%) scale(0);\n    transition: all ease 0.2s;\n\n    opacity: 0;\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.checkbox.size.outer;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.checkbox.size.outer;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.checkbox.size.outerRadius;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.size.inputBorderWidth;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.checkbox.colors.borderInitial;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.checkbox.colors.borderInitial;
}, function (_ref10) {
  var $disabled = _ref10.$disabled;
  return $disabled && (0,external_styled_components_.css)(Checkbox_styled_templateObject4 || (Checkbox_styled_templateObject4 = _taggedTemplateLiteral(["\n      border-color: ", ";\n      color: ", ";\n\n      cursor: auto;\n\n      &::before {\n        background-color: ", ";\n        cursor: auto;\n      }\n    "])), function (_ref11) {
    var theme = _ref11.theme;
    return theme.checkbox.colors.disabled;
  }, function (_ref12) {
    var theme = _ref12.theme;
    return theme.checkbox.colors.disabled;
  }, function (_ref13) {
    var theme = _ref13.theme;
    return theme.checkbox.colors.disabled;
  });
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.checkbox.size.innerRadius;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.checkbox.size.inner;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.checkbox.size.inner;
});
var StyledCheckMark = external_styled_components_default()(checkMark)(Checkbox_styled_templateObject5 || (Checkbox_styled_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n\n  left: 50%;\n  top: 50%;\n\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n\n  ", "\n"])), function (_ref17) {
  var $disabled = _ref17.$disabled;
  return $disabled && (0,external_styled_components_.css)(Checkbox_styled_templateObject6 || (Checkbox_styled_templateObject6 = _taggedTemplateLiteral(["\n      cursor: auto;\n    "])));
});
var CheckboxInput = external_styled_components_default().input(Checkbox_styled_templateObject7 || (Checkbox_styled_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n\n  width: 0;\n  height: 0;\n\n  overflow: hidden;\n\n  clip: rect(0 0 0 0);\n\n  &:checked ~ ", " {\n    border-color: ", ";\n  }\n\n  &:checked:disabled ~ ", " {\n    border-color: ", ";\n  }\n\n  &:checked ~ ", "::before {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 1;\n  }\n\n  &:checked ~ ", " ", " {\n    opacity: 1;\n  }\n"])), CustomCheckbox, function (_ref18) {
  var theme = _ref18.theme;
  return theme.checkbox.colors.borderInitial;
}, CustomCheckbox, function (_ref19) {
  var theme = _ref19.theme;
  return theme.checkbox.colors.disabled;
}, CustomCheckbox, CustomCheckbox, StyledCheckMark);
var LabelText = external_styled_components_default().div(Checkbox_styled_templateObject8 || (Checkbox_styled_templateObject8 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  ", "\n"])), function (_ref20) {
  var theme = _ref20.theme;
  return theme.checkbox.font.fontFamily;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.checkbox.font.fontSize;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.checkbox.font.lineHeight;
}, function (_ref23) {
  var $disabled = _ref23.$disabled;
  return $disabled && (0,external_styled_components_.css)(Checkbox_styled_templateObject9 || (Checkbox_styled_templateObject9 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (_ref24) {
    var theme = _ref24.theme;
    return theme.checkbox.colors.disabledLabel;
  });
});
;// CONCATENATED MODULE: ./src/components/Checkbox/Checkbox.tsx


var Checkbox_excluded = ["className", "label", "disabled"];
function Checkbox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Checkbox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Checkbox_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Checkbox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var Checkbox = /*#__PURE__*/(0,external_react_.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    label = _ref.label,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    restProps = _objectWithoutProperties(_ref, Checkbox_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Label, {
    className: className,
    $disabled: disabled,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxInput, Checkbox_objectSpread(Checkbox_objectSpread({
      disabled: disabled,
      type: "checkbox"
    }, restProps), {}, {
      ref: ref
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(CustomCheckbox, {
      $disabled: disabled,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckMark, {
        $disabled: disabled
      })
    }), label && /*#__PURE__*/(0,jsx_runtime.jsx)(LabelText, {
      $disabled: disabled,
      children: label
    })]
  });
});
Checkbox.displayName = 'Checkbox';
;// CONCATENATED MODULE: ./src/components/Checkbox/index.tsx

;// CONCATENATED MODULE: ./src/components/Select/Option/styled.ts

var Option_styled_templateObject, Option_styled_templateObject2, Option_styled_templateObject3, Option_styled_templateObject4, Option_styled_templateObject5, Option_styled_templateObject6;



var StyledCheckbox = external_styled_components_default()(Checkbox)(Option_styled_templateObject || (Option_styled_templateObject = _taggedTemplateLiteral(["\n  margin-right: 8px;\n  pointer-events: none;\n  flex-shrink: 0;\n"])));
var styled_StyledDropdownOption = external_styled_components_default()(DropdownOption)(Option_styled_templateObject2 || (Option_styled_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var $mobile = _ref.$mobile;
  return $mobile && (0,external_styled_components_.css)(Option_styled_templateObject3 || (Option_styled_templateObject3 = _taggedTemplateLiteral(["\n      box-shadow: inset 0 -1px 0 0 #f6f6f6;\n    "])));
}, function (_ref2) {
  var $disabled = _ref2.$disabled;
  return $disabled && (0,external_styled_components_.css)(Option_styled_templateObject4 || (Option_styled_templateObject4 = _taggedTemplateLiteral(["\n      pointer-events: none;\n      cursor: text;\n    "])));
}, function (_ref3) {
  var $selected = _ref3.$selected;
  return $selected && (0,external_styled_components_.css)(Option_styled_templateObject5 || (Option_styled_templateObject5 = _taggedTemplateLiteral(["\n      background-color: var(--color-grey-blue);\n      &:hover {\n        background-color: var(--color-grey-blue);\n      }\n    "])));
}, function (_ref4) {
  var $active = _ref4.$active;
  return $active && (0,external_styled_components_.css)(Option_styled_templateObject6 || (Option_styled_templateObject6 = _taggedTemplateLiteral(["\n      background-color: var(--color-smoky-white);\n    "])));
});
;// CONCATENATED MODULE: ./src/components/Select/Option/Option.tsx




var Option_excluded = ["disabled", "value", "children", "renderOption", "renderValue"];
function Option_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Option_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Option_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Option_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var DropDownOption = function DropDownOption(_ref) {
  var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    value = _ref.value,
    children = _ref.children,
    renderOption = _ref.renderOption,
    _renderValue = _ref.renderValue,
    htmlProps = _objectWithoutProperties(_ref, Option_excluded);
  var _useDropDownSearchSel = useDropDownSearchSelectContext(),
    defaultHighlighted = _useDropDownSearchSel.defaultHighlighted,
    showCheckbox = _useDropDownSearchSel.showCheckbox,
    selectValue = _useDropDownSearchSel.selectValue,
    mobile = _useDropDownSearchSel.mobile,
    multiple = _useDropDownSearchSel.multiple,
    searchValue = _useDropDownSearchSel.searchValue,
    hoverValue = _useDropDownSearchSel.hoverValue,
    onOptionClick = _useDropDownSearchSel.onOptionClick,
    setHoverValue = _useDropDownSearchSel.setHoverValue,
    onDropDownOptionMount = _useDropDownSearchSel.onDropDownOptionMount,
    onDropDownOptionUnMount = _useDropDownSearchSel.onDropDownOptionUnMount;
  var optionGroupContext = useOptionGroupContext();
  var defaultOnMouseDown = htmlProps.onMouseDown;
  var optionIsDiabled = (optionGroupContext === null || optionGroupContext === void 0 ? void 0 : optionGroupContext.disabled) || disabled;
  var childrenOrHiglightedChildren = (0,external_react_.useMemo)(function () {
    return typeof children === 'string' && defaultHighlighted ? /*#__PURE__*/(0,jsx_runtime.jsx)(Highlight, {
      children: children
    }) : children;
  }, [defaultHighlighted, children]);
  var defaultMultipleOption = (0,external_react_.useMemo)(function () {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [showCheckbox && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledCheckbox, {
        checked: selectValue === null || selectValue === void 0 ? void 0 : selectValue.includes(value),
        disabled: disabled,
        readOnly: true
      }), childrenOrHiglightedChildren]
    });
  }, [showCheckbox, selectValue, value, disabled, childrenOrHiglightedChildren]);
  var ref = (0,external_react_.useRef)(null);
  var renderDefaultOption = (0,external_react_.useCallback)(function () {
    return multiple ? defaultMultipleOption : childrenOrHiglightedChildren;
  }, [multiple, defaultMultipleOption, childrenOrHiglightedChildren]);
  var onClick = (0,external_react_.useCallback)(function () {
    return onOptionClick === null || onOptionClick === void 0 ? void 0 : onOptionClick(value);
  }, [onOptionClick, value]);
  var onMouseOnOption = (0,external_react_.useCallback)(function () {
    return setHoverValue === null || setHoverValue === void 0 ? void 0 : setHoverValue(value);
  }, [setHoverValue, value]);
  var onMouseLeave = (0,external_react_.useCallback)(function () {
    return setHoverValue === null || setHoverValue === void 0 ? void 0 : setHoverValue('');
  }, [setHoverValue]);
  var onMouseDown = (0,external_react_.useCallback)(function (evt) {
    onClick();
    defaultOnMouseDown === null || defaultOnMouseDown === void 0 ? void 0 : defaultOnMouseDown(evt);
  }, [onClick, defaultOnMouseDown]);
  var option = (0,external_react_.useMemo)(function () {
    return {
      value: value,
      disabled: optionIsDiabled,
      ref: ref
    };
  }, [value, optionIsDiabled]);
  var resultChildren = (0,external_react_.useMemo)(function () {
    return renderOption ? renderOption({
      disabled: disabled,
      searchValue: searchValue,
      isHovered: hoverValue === value
    }) : renderDefaultOption();
  }, [renderOption, renderDefaultOption, disabled, value, searchValue, hoverValue]);
  (0,external_react_.useEffect)(function () {
    onDropDownOptionMount === null || onDropDownOptionMount === void 0 ? void 0 : onDropDownOptionMount(option);
    return function () {
      return onDropDownOptionUnMount === null || onDropDownOptionUnMount === void 0 ? void 0 : onDropDownOptionUnMount(option);
    };
  }, [onDropDownOptionMount, onDropDownOptionUnMount, option]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(styled_StyledDropdownOption, Option_objectSpread(Option_objectSpread({}, htmlProps), {}, {
    className: htmlProps.className,
    $disabled: optionIsDiabled,
    $selected: selectValue === value,
    $active: hoverValue === value,
    $mobile: mobile,
    ref: ref,
    onMouseDown: onMouseDown,
    onMouseEnter: onMouseOnOption,
    onMouseMove: onMouseOnOption,
    onMouseLeave: onMouseLeave,
    children: resultChildren
  }));
};
var ConstantOption = function ConstantOption(_ref2) {
  var _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    value = _ref2.value,
    children = _ref2.children,
    renderOption = _ref2.renderOption,
    renderValue = _ref2.renderValue;
  var _useConstantSearchSel = useConstantSearchSelectContext(),
    searchValue = _useConstantSearchSel.searchValue,
    multiple = _useConstantSearchSel.multiple,
    onConstantOptionMount = _useConstantSearchSel.onConstantOptionMount,
    onConstantOptionUnMount = _useConstantSearchSel.onConstantOptionUnMount;
  var optionGroupContext = useOptionGroupContext();
  var optionIsDiabled = (optionGroupContext === null || optionGroupContext === void 0 ? void 0 : optionGroupContext.disabled) || disabled;
  var defaultRenderOptionValue = (0,external_react_.useCallback)(function (_ref3) {
    var onClose = _ref3.onClose;
    if (!multiple) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: children
    });
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledChip, {
      onClose: onClose,
      disabled: optionIsDiabled,
      size: "l",
      children: children
    });
  }, [children, multiple, optionIsDiabled]);
  var resultRenderValue = renderValue || defaultRenderOptionValue;
  var resultChildren = (0,external_react_.useMemo)(function () {
    return renderOption ? renderOption({
      disabled: disabled,
      searchValue: searchValue
    }) : children;
  }, [renderOption, disabled, children, searchValue]);
  var option = (0,external_react_.useMemo)(function () {
    return {
      value: value,
      disabled: optionIsDiabled,
      children: resultChildren,
      renderValue: resultRenderValue
    };
  }, [value, optionIsDiabled, resultChildren, resultRenderValue]);
  (0,external_react_.useEffect)(function () {
    onConstantOptionMount === null || onConstantOptionMount === void 0 ? void 0 : onConstantOptionMount(option);
    return function () {
      return onConstantOptionUnMount === null || onConstantOptionUnMount === void 0 ? void 0 : onConstantOptionUnMount(option);
    };
  }, [onConstantOptionMount, onConstantOptionUnMount, option]);
  return null;
};
var ConstantOptionWrapper = function ConstantOptionWrapper(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ConstantOption, Option_objectSpread({}, props));
};
var DropDownOptionWrapper = function DropDownOptionWrapper(props) {
  var _useState = (0,external_react_.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    textsToHighlight = _useState2[0],
    setTextsToHighlight = _useState2[1];
  var dropDownSelectContext = useDropDownSearchSelectContext();
  var highlighted = textsToHighlight === null || textsToHighlight === void 0 ? void 0 : textsToHighlight.some(function (text) {
    return getTextHighlightMeta(text, dropDownSelectContext === null || dropDownSelectContext === void 0 ? void 0 : dropDownSelectContext.searchValue, dropDownSelectContext === null || dropDownSelectContext === void 0 ? void 0 : dropDownSelectContext.highlightFormat).shouldHiglight;
  });
  var onAddTextToHighlight = (0,external_react_.useCallback)(function (text) {
    return setTextsToHighlight(function (prev) {
      return Array.from(new Set([].concat(_toConsumableArray(prev || []), [text])));
    });
  }, []);
  var shouldRender = textsToHighlight === null || highlighted;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(OptionProvider, {
    onAddTextToHighlight: onAddTextToHighlight,
    children: dropDownSelectContext && shouldRender && /*#__PURE__*/(0,jsx_runtime.jsx)(DropDownOption, Option_objectSpread({}, props))
  });
};
var Option_Option = function Option(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ConstantOptionWrapper, Option_objectSpread({}, props)), /*#__PURE__*/(0,jsx_runtime.jsx)(DropDownOptionWrapper, Option_objectSpread({}, props))]
  });
};
;// CONCATENATED MODULE: ./src/components/Select/Option/index.tsx

;// CONCATENATED MODULE: ./src/components/Select/OptionGroup.tsx



var OptionGroup = function OptionGroup(_ref) {
  var label = _ref.label,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    children = _ref.children;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(OptionGroupProvider, {
    label: label,
    disabled: disabled,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: label
    }), children]
  });
};
;// CONCATENATED MODULE: ./src/components/Select/index.tsx




;// CONCATENATED MODULE: ./src/constants/theme.ts
var defaultLightTheme = {
  size: {
    inputBorderWidth: '1px'
  },
  colors: {
    primary: '#5D8FEF'
  },
  checkbox: {
    labelGap: '8px',
    colors: {
      label: '#454545',
      borderInitial: '#5D8FEF',
      borderHover: '#5D8FEF',
      disabled: '#C1C1C1',
      disabledLabel: '#454545'
    },
    size: {
      outerRadius: '6px',
      innerRadius: '4px',
      outer: '24px',
      inner: '18px'
    },
    font: {
      fontFamily: 'Roboto',
      fontSize: '22px',
      lineHeight: '26px'
    }
  },
  select: {
    borderRadius: '10px',
    dropdownBoxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    colors: {
      placeholder: '#737373',
      text: '#414141',
      initialBackgroundColor: '#ffffff',
      borderInitial: '#EBEBEB',
      borderHover: '#5D8FEF',
      borderDisabled: '#eeeeee',
      borderError: '#EC7575',
      borderErrorHover: '#EC7575',
      closeButtonBackgroundHover: '#ececec'
    },
    size: {
      borderWidth: '1px',
      initialHeight: '42px',
      dropdownMaxHeight: '256px',
      dropdownPadding: '8px 0'
    },
    font: {
      fontFamily: 'Roboto',
      fontSize: '20px',
      lineHeight: '23px',
      fontWeight: '400',
      placeholderWeight: '300'
    }
  },
  input: {
    iconGap: '9px',
    borderRadius: '10px',
    colors: {
      disabled: {
        background: '#fbfbfb',
        border: '#eeeeee',
        text: '#737373'
      },
      initial: {
        background: '#ffffff',
        border: '#ebebeb',
        text: '#323232'
      },
      borderHover: '#7ec0ee',
      borderFocused: '#7ec0ee',
      borderFocusedHover: '#7ec0ee',
      borderError: '#f14747',
      borderErrorHover: '#f14747',
      placeholder: '#737373'
    },
    size: {
      padding: '8px 16px',
      borderWidth: '2px'
    },
    font: {
      fontSize: '20px',
      lineHeight: '24px',
      inputWeight: '400',
      placeholderWeight: '300',
      fontFamily: 'Roboto'
    }
  },
  textarea: {
    borderRadius: '10px',
    colors: {
      disabled: {
        background: '#fafafa',
        border: '#eeeeee',
        text: '#737373'
      },
      initial: {
        background: '#ffffff',
        border: '#ebebeb',
        text: '#323232'
      },
      borderHover: '#7ec0ee',
      borderFocused: '#7ec0ee',
      borderFocusedHover: '#7ec0ee',
      borderError: '#f14747',
      borderErrorHover: '#f14747',
      placeholder: '#737373'
    },
    size: {
      padding: '6px 14px',
      borderWidth: '2px'
    },
    font: {
      fontSize: '20px',
      lineHeight: '24px',
      inputWeight: '400',
      placeholderWeight: '300',
      fontFamily: 'Roboto'
    }
  },
  button: {
    gap: '8px',
    borderRadius: '10px',
    colors: {
      primary: {
        text: '#ffffff',
        textDisabled: '#ffffff',
        backgroundDisabled: '#c0c0c0',
        backgroundInitial: '#5896c0',
        backgroundHover: '#4980a5',
        backgroundActive: '#4980a5'
      },
      secondary: {
        text: '#5896c0',
        textDisabled: '#a6a6a6',
        backgroundDisabled: '#ffffff',
        backgroundInitial: '#ffffff',
        backgroundHover: '#f5f5f5',
        backgroundActive: '#f5f5f5'
      }
    },
    size: {
      large: {
        padding: '8px 48px'
      },
      medium: {
        padding: '8px 16px'
      },
      small: {
        padding: '8px 16px'
      }
    },
    font: {
      fontFamily: 'Roboto',
      large: {
        fontSize: '26px',
        lineHeight: '30px'
      },
      medium: {
        fontSize: '22px',
        lineHeight: '26px'
      },
      small: {
        fontSize: '18px',
        lineHeight: '20px'
      }
    }
  },
  popup: {
    colors: {
      overlayBackground: 'rgba(250, 250, 250, 0.65)'
    }
  },
  dropdownOption: {
    colors: {
      text: '#454545'
    },
    size: {
      padding: '8px 16px'
    },
    font: {
      fontFamily: 'Roboto',
      fontSize: '20px',
      lineHeight: '24px'
    }
  },
  chip: {
    font: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '24px'
    },
    size: {
      maxWidth: '190px',
      width: 'fit-content',
      gap: '4px',
      maxWidthText: 'fit-content',
      padding: '3px 7px',
      paddingWithIcon: '3px 3px 3px 7px',
      border: '1px',
      borderRadius: '8px',
      borderRadiusIcon: '4px',
      disabled: {
        border: '1px'
      }
    },
    colors: {
      backgroundColor: '#ffffff',
      color: '#454545',
      border: '#5d8fef',
      disabled: {
        color: '#a6a6a6',
        border: '#ffffff',
        backgroundColorIcon: '#ececec',
        fillIcon: '#ececec'
      },
      hover: {
        backgroundColorIcon: '#ececec',
        fillIcon: '#959595'
      }
    }
  },
  iconButton: {
    borderRadius: '10px',
    colors: {
      background: '#ffffff',
      backgroundHover: '#ebebeb',
      borderActive: '#dadada',
      backgroundDisabled: '#ebebeb'
    },
    size: {
      xlarge: {
        width: '48px',
        height: '48px',
        borderRadius: '10px',
        padding: '12px'
      },
      large: {
        width: '42px',
        height: '42px',
        borderRadius: '10px',
        padding: '9px'
      },
      medium: {
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        padding: '6px'
      },
      small: {
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        padding: 'unset'
      }
    }
  }
};
;// CONCATENATED MODULE: ./src/index.tsx










































})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});