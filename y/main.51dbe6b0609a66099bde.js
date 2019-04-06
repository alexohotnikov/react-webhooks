/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/uchi_ru_mac/react-quicly/src/index.js: Unexpected token (8:6)\\n\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m  render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m    \\u001b[36mreturn\\u001b[39m(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  8 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m        \\u001b[33mHello\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m    )\\u001b[0m\\n    at Parser.raise (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:3851:17)\\n    at Parser.unexpected (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5167:16)\\n    at Parser.parseExprAtom (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:6328:20)\\n    at Parser.parseExprSubscripts (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5914:23)\\n    at Parser.parseMaybeUnary (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5894:21)\\n    at Parser.parseExprOps (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5781:23)\\n    at Parser.parseMaybeConditional (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5754:23)\\n    at Parser.parseMaybeAssign (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5701:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:6466:28)\\n    at Parser.parseExprAtom (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:6260:21)\\n    at Parser.parseExprSubscripts (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5914:23)\\n    at Parser.parseMaybeUnary (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5894:21)\\n    at Parser.parseExprOps (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5781:23)\\n    at Parser.parseMaybeConditional (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5754:23)\\n    at Parser.parseMaybeAssign (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5701:21)\\n    at Parser.parseExpression (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:5649:23)\\n    at Parser.parseReturnStatement (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7660:28)\\n    at Parser.parseStatementContent (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7339:21)\\n    at Parser.parseStatement (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7291:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7868:25)\\n    at Parser.parseBlockBody (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7855:10)\\n    at Parser.parseBlock (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7839:10)\\n    at Parser.parseFunctionBody (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:6909:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:6879:10)\\n    at Parser.parseMethod (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:6835:10)\\n    at Parser.pushClassMethod (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:8264:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:8189:12)\\n    at Parser.parseClassMember (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:8128:10)\\n    at withTopicForbiddingContext (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:8083:14)\\n    at Parser.withTopicForbiddingContext (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7185:14)\\n    at Parser.parseClassBody (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:8060:10)\\n    at Parser.parseClass (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:8034:22)\\n    at Parser.parseStatementContent (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7333:21)\\n    at Parser.parseStatement (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7291:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7868:25)\\n    at Parser.parseBlockBody (/Users/uchi_ru_mac/react-quicly/node_modules/@babel/parser/lib/index.js:7855:10)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });