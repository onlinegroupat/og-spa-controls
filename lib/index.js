(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("uuid"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "uuid"], factory);
	else if(typeof exports === 'object')
		exports["og-spa-controls"] = factory(require("react"), require("uuid"));
	else
		root["og-spa-controls"] = factory(root["react"], root["uuid"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/lib";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ClassList__ = __webpack_require__(1);



class TextInput extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.handleChange = (e) => {
            this.updateHasValue();
            this.props.onChange && this.props.onChange(e);
        };
        this.handleRef = (ref) => {
            this.ref = ref;
            this.props.inputRef && this.props.inputRef(ref);
        };
        this.state = {
            empty: true
        };
    }
    updateHasValue() {
        let newEmpty = !this.ref.value;
        if (this.state.empty != newEmpty) {
            this.setState({ empty: newEmpty });
        }
    }
    componentWillMount() {
        this.id = this.props.id || __WEBPACK_IMPORTED_MODULE_1_uuid__();
    }
    componentDidUpdate() {
        this.updateHasValue();
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2__ClassList__["a" /* ClassList */].compute(this.props.className, this.state.empty ? 'empty' : 'not-empty') },
            this.props.label && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: this.id }, this.props.label),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", Object.assign({ id: this.id, onChange: this.handleChange, ref: this.handleRef }, this.props)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "bar" })));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextInput;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ClassList {
    constructor(...classNames) {
        this.classList = [];
        if (classNames) {
            for (let className of classNames) {
                if (className) {
                    this.classList.push(...className.split(' '));
                }
            }
        }
    }
    add(className) {
        this.classList.push(className);
    }
    toString() {
        return this.classList.join(' ');
    }
    static compute(...classNames) {
        return new ClassList(...classNames).toString();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClassList;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TextInput__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return __WEBPACK_IMPORTED_MODULE_0__TextInput__["a"]; });



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});