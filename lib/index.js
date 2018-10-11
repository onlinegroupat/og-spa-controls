(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("uuid"), require("moment"), require("prop-types"), require("og-ts-enum"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "uuid", "moment", "prop-types", "og-ts-enum"], factory);
	else if(typeof exports === 'object')
		exports["og-spa-controls"] = factory(require("react"), require("uuid"), require("moment"), require("prop-types"), require("og-ts-enum"));
	else
		root["og-spa-controls"] = factory(root["react"], root["uuid"], root["moment"], root["prop-types"], root["og-ts-enum"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__15__) {
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
/******/ 	__webpack_require__.p = "/lib";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var TextInput_1 = __webpack_require__(1);
exports.TextInput = TextInput_1.TextInput;
var DateInput_1 = __webpack_require__(5);
exports.DateInput = DateInput_1.DateInput;
var SelectField_1 = __webpack_require__(7);
exports.SelectField = SelectField_1.SelectField;
var TextAreaInput_1 = __webpack_require__(8);
exports.TextAreaInput = TextAreaInput_1.TextAreaInput;
var Checkbox_1 = __webpack_require__(9);
exports.Checkbox = Checkbox_1.Checkbox;
exports.CheckboxGroup = Checkbox_1.CheckboxGroup;
var RadioButton_1 = __webpack_require__(11);
exports.RadioButton = RadioButton_1.RadioButton;
exports.RadioGroup = RadioButton_1.RadioGroup;
var Button_1 = __webpack_require__(12);
exports.Button = Button_1.Button;
exports.ButtonGroup = Button_1.ButtonGroup;
var Icon_1 = __webpack_require__(13);
exports.Icon = Icon_1.Icon;
var MaterialIcon_1 = __webpack_require__(14);
exports.MaterialIcon = MaterialIcon_1.MaterialIcon;
var ClassList_1 = __webpack_require__(4);
exports.ClassList = ClassList_1.ClassList;
var Dropdown_1 = __webpack_require__(16);
exports.Dropdown = Dropdown_1.Dropdown;
exports.DropdownToggle = Dropdown_1.DropdownToggle;
exports.DropdownPopup = Dropdown_1.DropdownPopup;
var types_1 = __webpack_require__(17);
exports.__ForceTypeDeclarationGeneration = types_1.__ForceTypeDeclarationGeneration;
__export(__webpack_require__(18));
__export(__webpack_require__(19));
__export(__webpack_require__(20));
__export(__webpack_require__(21));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const uuid = __webpack_require__(3);
const ClassList_1 = __webpack_require__(4);
class TextInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = (e) => {
            this.props.onChange && this.props.onChange(e);
            this.updateState();
        };
        this.handleRef = (ref) => {
            this.ref = ref;
            this.props.inputRef && this.props.inputRef(ref);
            this.updateState();
        };
        this.state = {
            empty: true,
            validationMessage: '',
        };
    }
    updateState() {
        if (this.ref) {
            let newEmpty = !this.ref.value;
            let newValidationMessage = this.ref.validationMessage || '';
            if (this.state.empty != newEmpty || this.state.validationMessage != newValidationMessage) {
                this.setState({
                    empty: newEmpty,
                    validationMessage: newValidationMessage
                });
            }
        }
    }
    componentWillMount() {
        this.id = this.props.id || uuid();
    }
    componentDidUpdate() {
        this.updateState();
    }
    render() {
        const _a = this.props, { className, inputRef } = _a, inputProps = __rest(_a, ["className", "inputRef"]);
        return (React.createElement("div", { className: ClassList_1.ClassList.compute(className, this.state.empty ? 'empty' : 'not-empty') },
            React.createElement("input", Object.assign({ id: this.id, onChange: this.handleChange, ref: this.handleRef }, inputProps)),
            React.createElement("label", { htmlFor: this.id }, this.props.label),
            React.createElement("div", { className: "bar" }),
            React.createElement("div", { className: ClassList_1.ClassList.compute('message', this.state.validationMessage && 'validation-message') }, this.state.validationMessage || this.props.message)));
    }
}
exports.TextInput = TextInput;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.ClassList = ClassList;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const TextInput_1 = __webpack_require__(1);
const moment = __webpack_require__(6);
const IsoDateFormat = 'YYYY-MM-DD';
class DateInput extends React.Component {
    constructor() {
        super(...arguments);
        this.hasFocus = false;
        this.handleChange = (e) => {
            this.props.onChange && this.props.onChange(e);
            let newValue = this.updateState(true);
            this.notifyDateChange(newValue);
        };
        this.handleFocus = (e) => {
            this.props.onFocus && this.props.onFocus(e);
            this.hasFocus = true;
        };
        this.handleBlur = (e) => {
            if (this.inputRef) {
                this.props.onBlur && this.props.onBlur(e);
                this.hasFocus = false;
                let newValue = this.updateState(false);
                if (newValue && newValue.isValid()) {
                    this.inputRef.value = newValue.format(this.format);
                    this.notifyDateChange(newValue);
                }
            }
        };
        this.handleInputRef = (input) => {
            this.inputRef = input;
            this.props.inputRef && this.props.inputRef(input);
        };
    }
    get format() {
        return this.props.format || IsoDateFormat;
    }
    get acceptFormat() {
        return this.props.acceptFormat || this.format;
    }
    get invalidMessage() {
        return this.props.invalidMessage || 'Invalid date.';
    }
    notifyDateChange(newValue) {
        if (this.inputRef) {
            try {
                this.props.onDateChange && this.props.onDateChange(newValue);
                this.inputRef.setCustomValidity((!newValue || newValue.isValid()) ? '' : this.invalidMessage);
            }
            catch (error) {
                this.inputRef.setCustomValidity(error.toString());
            }
        }
    }
    updateState(strict) {
        if (this.inputRef) {
            const value = this.inputRef.value;
            return value ? moment(value, this.acceptFormat, strict) : undefined;
        }
    }
    render() {
        let value = this.props.value;
        const isControlled = this.props.hasOwnProperty('dateValue');
        if (isControlled && !this.hasFocus) {
            const dateValue = this.props.dateValue;
            if (dateValue && dateValue.isValid()) {
                value = dateValue.format(this.format);
            }
            else {
                value = '';
            }
        }
        const _a = this.props, { format, acceptFormat, invalidMessage, dateValue, onDateChange, inputRef } = _a, inputProps = __rest(_a, ["format", "acceptFormat", "invalidMessage", "dateValue", "onDateChange", "inputRef"]);
        return React.createElement(TextInput_1.TextInput, Object.assign({}, inputProps, { value: value, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, inputRef: this.handleInputRef }));
    }
}
exports.DateInput = DateInput;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const uuid = __webpack_require__(3);
const ClassList_1 = __webpack_require__(4);
// TODO: extract common functionality shared with TextInput and TextAreaInput
class SelectField extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = (e) => {
            this.updateState();
            this.props.onChange && this.props.onChange(e);
        };
        this.handleRef = (ref) => {
            this.ref = ref;
            this.props.selectRef && this.props.selectRef(ref);
            this.updateState();
        };
        this.state = {
            empty: true,
            validationMessage: ''
        };
    }
    updateState() {
        if (this.ref) {
            let newEmpty = !this.ref.value;
            let newValidationMessage = this.ref.validationMessage || '';
            if (this.state.empty != newEmpty || this.state.validationMessage != newValidationMessage) {
                this.setState({
                    empty: newEmpty,
                    validationMessage: newValidationMessage
                });
            }
        }
    }
    componentWillMount() {
        this.id = this.props.id || uuid();
    }
    componentDidUpdate() {
        this.updateState();
    }
    render() {
        const _a = this.props, { className } = _a, selectProps = __rest(_a, ["className"]);
        return (React.createElement("div", { className: ClassList_1.ClassList.compute(className, this.state.empty ? 'empty' : 'not-empty') },
            React.createElement("select", Object.assign({ id: this.id, onChange: this.handleChange, ref: this.handleRef }, selectProps), this.props.children),
            React.createElement("label", { htmlFor: this.id }, this.props.label),
            React.createElement("div", { className: "bar" }),
            React.createElement("div", { className: "validation-message" }, this.state.validationMessage)));
    }
}
exports.SelectField = SelectField;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const uuid = __webpack_require__(3);
const ClassList_1 = __webpack_require__(4);
// TODO: extract common base from TextInput and TextAreaInput
class TextAreaInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = (e) => {
            this.updateState();
            this.props.onChange && this.props.onChange(e);
        };
        this.handleRef = (ref) => {
            this.ref = ref;
            this.props.textAreaRef && this.props.textAreaRef(ref);
            this.updateState();
        };
        this.state = {
            empty: true,
            validationMessage: ''
        };
    }
    updateHeight() {
        if (this.ref) {
            this.ref.style.height = "";
            this.ref.style.height = this.ref.scrollHeight + 1 + "px";
        }
    }
    updateState() {
        if (this.ref) {
            let newEmpty = !this.ref.value;
            let newValidationMessage = this.ref.validationMessage || '';
            if (this.state.empty != newEmpty || this.state.validationMessage != newValidationMessage) {
                this.setState({
                    empty: newEmpty,
                    validationMessage: newValidationMessage
                });
            }
            this.updateHeight();
        }
    }
    componentWillMount() {
        this.id = this.props.id || uuid();
    }
    componentDidUpdate() {
        this.updateState();
    }
    render() {
        const _a = this.props, { className } = _a, textareaProps = __rest(_a, ["className"]);
        return (React.createElement("div", { className: ClassList_1.ClassList.compute(className, this.state.empty ? 'empty' : 'not-empty') },
            React.createElement("textarea", Object.assign({ id: this.id, onChange: this.handleChange, ref: this.handleRef }, textareaProps)),
            React.createElement("label", { htmlFor: this.id }, this.props.label),
            React.createElement("div", { className: "bar" }),
            React.createElement("div", { className: "validation-message" }, this.state.validationMessage)));
    }
}
exports.TextAreaInput = TextAreaInput;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const uuid = __webpack_require__(3);
const PropTypes = __webpack_require__(10);
const CheckboxGroupContextTypes = {
    checkboxGroup: PropTypes.object
};
class CheckboxGroup extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getChildContext() {
        return {
            checkboxGroup: {
                checked: this.props.checked,
                onChange: this.props.onChange
            }
        };
    }
    render() {
        return (React.createElement("div", { className: this.props.className },
            React.createElement("label", null, this.props.label),
            React.createElement("div", { className: "checkboxes" }, this.props.children)));
    }
}
CheckboxGroup.childContextTypes = CheckboxGroupContextTypes;
exports.CheckboxGroup = CheckboxGroup;
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleRef = (ref) => {
            this.ref = ref;
            this.props.inputRef && this.props.inputRef(ref);
        };
        this.handleChange = (e) => {
            // call change handler of parent CheckboxGroup
            if (this.context.checkboxGroup) {
                if (this.context.checkboxGroup.onChange) {
                    this.context.checkboxGroup.onChange(e);
                }
            }
            // call handler that was set via props
            this.props.onChange && this.props.onChange(e);
        };
        this.state = {};
    }
    componentWillMount() {
        this.id = this.props.id || uuid();
    }
    render() {
        let _a = this.props, { className, children, value, checked, onChange } = _a, inputProps = __rest(_a, ["className", "children", "value", "checked", "onChange"]);
        // handle a CheckboxGroup parent
        let checkboxGroup = this.context.checkboxGroup;
        if (checkboxGroup) {
            // we only override the check property, if specified by the parent CheckboxGroup
            if (checkboxGroup.checked && value) {
                checked = checkboxGroup.checked.indexOf(value) >= 0;
            }
            // we only override the onChange handler if we are nested in a CheckboxGroup
            if (checkboxGroup.onChange) {
                onChange = this.handleChange;
            }
        }
        return (React.createElement("div", { className: className },
            React.createElement("input", Object.assign({ type: "checkbox", id: this.id, ref: this.handleRef, value: value, checked: checked, onChange: onChange }, inputProps)),
            React.createElement("label", { htmlFor: this.id }, children)));
    }
}
Checkbox.contextTypes = CheckboxGroupContextTypes;
exports.Checkbox = Checkbox;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const uuid = __webpack_require__(3);
const PropTypes = __webpack_require__(10);
const RadioGroupContextTypes = {
    radioGroup: PropTypes.object
};
class RadioGroup extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.name = this.props.name || uuid();
    }
    getChildContext() {
        return {
            radioGroup: {
                checked: this.props.checked,
                name: this.name,
                onChange: this.props.onChange
            }
        };
    }
    render() {
        return (React.createElement("div", { className: this.props.className },
            React.createElement("label", null, this.props.label),
            React.createElement("div", { className: "radio-buttons" }, this.props.children)));
    }
}
RadioGroup.childContextTypes = RadioGroupContextTypes;
exports.RadioGroup = RadioGroup;
class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleRef = (ref) => {
            this.ref = ref;
            this.props.inputRef && this.props.inputRef(ref);
        };
        this.handleChange = (e) => {
            // call change handler of parent CheckboxGroup
            this.context.radioGroup.onChange(e);
            // call handler that was set via props
            this.props.onChange && this.props.onChange(e);
        };
        this.state = {};
    }
    componentWillMount() {
        this.id = this.props.id || uuid();
    }
    render() {
        let _a = this.props, { className, children, value, checked, onChange, name, title } = _a, inputProps = __rest(_a, ["className", "children", "value", "checked", "onChange", "name", "title"]);
        // handle a RadioGroup parent
        let radioGroup = this.context.radioGroup;
        if (radioGroup) {
            // we only override the check property, if specified by the parent RadioGroup
            if (radioGroup.checked && value) {
                checked = radioGroup.checked == value;
            }
            // we only override the onChange handler if we are nested in a RadioGroup
            if (radioGroup.onChange) {
                onChange = this.handleChange;
            }
            name = radioGroup.name;
        }
        return (React.createElement("div", { className: className, title: title },
            React.createElement("input", Object.assign({ type: "radio", id: this.id, ref: this.handleRef, name: name, value: value, checked: checked, onChange: onChange }, inputProps)),
            React.createElement("label", { htmlFor: this.id }, children)));
    }
}
RadioButton.contextTypes = RadioGroupContextTypes;
exports.RadioButton = RadioButton;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const ClassList_1 = __webpack_require__(4);
const Icon_1 = __webpack_require__(13);
class Button extends React.Component {
    render() {
        const _a = this.props, { className, primary, secondary, danger, icon, children } = _a, buttonProps = __rest(_a, ["className", "primary", "secondary", "danger", "icon", "children"]);
        const classList = ClassList_1.ClassList.compute(className, primary ? 'primary' : undefined, secondary ? 'secondary' : undefined, danger ? 'danger' : undefined);
        return (React.createElement("button", Object.assign({ className: classList }, buttonProps),
            icon && React.createElement(Icon_1.Icon, null, icon),
            ' ',
            children));
    }
}
exports.Button = Button;
// only a div for now...
class ButtonGroup extends React.Component {
    render() {
        return React.createElement("div", Object.assign({}, this.props));
    }
}
exports.ButtonGroup = ButtonGroup;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
exports.Icon = (props) => React.createElement("i", null, props.children);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const og_ts_enum_1 = __webpack_require__(15);
exports.MaterialIcon = og_ts_enum_1.Enum.fromObject({
    '3d_rotation': '3d_rotation',
    'ac_unit': 'ac_unit',
    'access_alarm': 'access_alarm',
    'access_alarms': 'access_alarms',
    'access_time': 'access_time',
    'accessibility': 'accessibility',
    'accessible': 'accessible',
    'account_balance': 'account_balance',
    'account_balance_wallet': 'account_balance_wallet',
    'account_box': 'account_box',
    'account_circle': 'account_circle',
    'adb': 'adb',
    'add': 'add',
    'add_a_photo': 'add_a_photo',
    'add_alarm': 'add_alarm',
    'add_alert': 'add_alert',
    'add_box': 'add_box',
    'add_circle': 'add_circle',
    'add_circle_outline': 'add_circle_outline',
    'add_location': 'add_location',
    'add_shopping_cart': 'add_shopping_cart',
    'add_to_photos': 'add_to_photos',
    'add_to_queue': 'add_to_queue',
    'adjust': 'adjust',
    'airline_seat_flat': 'airline_seat_flat',
    'airline_seat_flat_angled': 'airline_seat_flat_angled',
    'airline_seat_individual_suite': 'airline_seat_individual_suite',
    'airline_seat_legroom_extra': 'airline_seat_legroom_extra',
    'airline_seat_legroom_normal': 'airline_seat_legroom_normal',
    'airline_seat_legroom_reduced': 'airline_seat_legroom_reduced',
    'airline_seat_recline_extra': 'airline_seat_recline_extra',
    'airline_seat_recline_normal': 'airline_seat_recline_normal',
    'airplanemode_active': 'airplanemode_active',
    'airplanemode_inactive': 'airplanemode_inactive',
    'airplay': 'airplay',
    'airport_shuttle': 'airport_shuttle',
    'alarm': 'alarm',
    'alarm_add': 'alarm_add',
    'alarm_off': 'alarm_off',
    'alarm_on': 'alarm_on',
    'album': 'album',
    'all_inclusive': 'all_inclusive',
    'all_out': 'all_out',
    'android': 'android',
    'announcement': 'announcement',
    'apps': 'apps',
    'archive': 'archive',
    'arrow_back': 'arrow_back',
    'arrow_downward': 'arrow_downward',
    'arrow_drop_down': 'arrow_drop_down',
    'arrow_drop_down_circle': 'arrow_drop_down_circle',
    'arrow_drop_up': 'arrow_drop_up',
    'arrow_forward': 'arrow_forward',
    'arrow_upward': 'arrow_upward',
    'art_track': 'art_track',
    'aspect_ratio': 'aspect_ratio',
    'assessment': 'assessment',
    'assignment': 'assignment',
    'assignment_ind': 'assignment_ind',
    'assignment_late': 'assignment_late',
    'assignment_return': 'assignment_return',
    'assignment_returned': 'assignment_returned',
    'assignment_turned_in': 'assignment_turned_in',
    'assistant': 'assistant',
    'assistant_photo': 'assistant_photo',
    'attach_file': 'attach_file',
    'attach_money': 'attach_money',
    'attachment': 'attachment',
    'audiotrack': 'audiotrack',
    'autorenew': 'autorenew',
    'av_timer': 'av_timer',
    'backspace': 'backspace',
    'backup': 'backup',
    'battery_alert': 'battery_alert',
    'battery_charging_full': 'battery_charging_full',
    'battery_full': 'battery_full',
    'battery_std': 'battery_std',
    'battery_unknown': 'battery_unknown',
    'beach_access': 'beach_access',
    'beenhere': 'beenhere',
    'block': 'block',
    'bluetooth': 'bluetooth',
    'bluetooth_audio': 'bluetooth_audio',
    'bluetooth_connected': 'bluetooth_connected',
    'bluetooth_disabled': 'bluetooth_disabled',
    'bluetooth_searching': 'bluetooth_searching',
    'blur_circular': 'blur_circular',
    'blur_linear': 'blur_linear',
    'blur_off': 'blur_off',
    'blur_on': 'blur_on',
    'book': 'book',
    'bookmark': 'bookmark',
    'bookmark_border': 'bookmark_border',
    'border_all': 'border_all',
    'border_bottom': 'border_bottom',
    'border_clear': 'border_clear',
    'border_color': 'border_color',
    'border_horizontal': 'border_horizontal',
    'border_inner': 'border_inner',
    'border_left': 'border_left',
    'border_outer': 'border_outer',
    'border_right': 'border_right',
    'border_style': 'border_style',
    'border_top': 'border_top',
    'border_vertical': 'border_vertical',
    'branding_watermark': 'branding_watermark',
    'brightness_1': 'brightness_1',
    'brightness_2': 'brightness_2',
    'brightness_3': 'brightness_3',
    'brightness_4': 'brightness_4',
    'brightness_5': 'brightness_5',
    'brightness_6': 'brightness_6',
    'brightness_7': 'brightness_7',
    'brightness_auto': 'brightness_auto',
    'brightness_high': 'brightness_high',
    'brightness_low': 'brightness_low',
    'brightness_medium': 'brightness_medium',
    'broken_image': 'broken_image',
    'brush': 'brush',
    'bubble_chart': 'bubble_chart',
    'bug_report': 'bug_report',
    'build': 'build',
    'burst_mode': 'burst_mode',
    'business': 'business',
    'business_center': 'business_center',
    'cached': 'cached',
    'cake': 'cake',
    'call': 'call',
    'call_end': 'call_end',
    'call_made': 'call_made',
    'call_merge': 'call_merge',
    'call_missed': 'call_missed',
    'call_missed_outgoing': 'call_missed_outgoing',
    'call_received': 'call_received',
    'call_split': 'call_split',
    'call_to_action': 'call_to_action',
    'camera': 'camera',
    'camera_alt': 'camera_alt',
    'camera_enhance': 'camera_enhance',
    'camera_front': 'camera_front',
    'camera_rear': 'camera_rear',
    'camera_roll': 'camera_roll',
    'cancel': 'cancel',
    'card_giftcard': 'card_giftcard',
    'card_membership': 'card_membership',
    'card_travel': 'card_travel',
    'casino': 'casino',
    'cast': 'cast',
    'cast_connected': 'cast_connected',
    'center_focus_strong': 'center_focus_strong',
    'center_focus_weak': 'center_focus_weak',
    'change_history': 'change_history',
    'chat': 'chat',
    'chat_bubble': 'chat_bubble',
    'chat_bubble_outline': 'chat_bubble_outline',
    'check': 'check',
    'check_box': 'check_box',
    'check_box_outline_blank': 'check_box_outline_blank',
    'check_circle': 'check_circle',
    'chevron_left': 'chevron_left',
    'chevron_right': 'chevron_right',
    'child_care': 'child_care',
    'child_friendly': 'child_friendly',
    'chrome_reader_mode': 'chrome_reader_mode',
    'class': 'class',
    'clear': 'clear',
    'clear_all': 'clear_all',
    'close': 'close',
    'closed_caption': 'closed_caption',
    'cloud': 'cloud',
    'cloud_circle': 'cloud_circle',
    'cloud_done': 'cloud_done',
    'cloud_download': 'cloud_download',
    'cloud_off': 'cloud_off',
    'cloud_queue': 'cloud_queue',
    'cloud_upload': 'cloud_upload',
    'code': 'code',
    'collections': 'collections',
    'collections_bookmark': 'collections_bookmark',
    'color_lens': 'color_lens',
    'colorize': 'colorize',
    'comment': 'comment',
    'compare': 'compare',
    'compare_arrows': 'compare_arrows',
    'computer': 'computer',
    'confirmation_number': 'confirmation_number',
    'contact_mail': 'contact_mail',
    'contact_phone': 'contact_phone',
    'contacts': 'contacts',
    'content_copy': 'content_copy',
    'content_cut': 'content_cut',
    'content_paste': 'content_paste',
    'control_point': 'control_point',
    'control_point_duplicate': 'control_point_duplicate',
    'copyright': 'copyright',
    'create': 'create',
    'create_new_folder': 'create_new_folder',
    'credit_card': 'credit_card',
    'crop': 'crop',
    'crop_16_9': 'crop_16_9',
    'crop_3_2': 'crop_3_2',
    'crop_5_4': 'crop_5_4',
    'crop_7_5': 'crop_7_5',
    'crop_din': 'crop_din',
    'crop_free': 'crop_free',
    'crop_landscape': 'crop_landscape',
    'crop_original': 'crop_original',
    'crop_portrait': 'crop_portrait',
    'crop_rotate': 'crop_rotate',
    'crop_square': 'crop_square',
    'dashboard': 'dashboard',
    'data_usage': 'data_usage',
    'date_range': 'date_range',
    'dehaze': 'dehaze',
    'delete': 'delete',
    'delete_forever': 'delete_forever',
    'delete_sweep': 'delete_sweep',
    'description': 'description',
    'desktop_mac': 'desktop_mac',
    'desktop_windows': 'desktop_windows',
    'details': 'details',
    'developer_board': 'developer_board',
    'developer_mode': 'developer_mode',
    'device_hub': 'device_hub',
    'devices': 'devices',
    'devices_other': 'devices_other',
    'dialer_sip': 'dialer_sip',
    'dialpad': 'dialpad',
    'directions': 'directions',
    'directions_bike': 'directions_bike',
    'directions_boat': 'directions_boat',
    'directions_bus': 'directions_bus',
    'directions_car': 'directions_car',
    'directions_railway': 'directions_railway',
    'directions_run': 'directions_run',
    'directions_subway': 'directions_subway',
    'directions_transit': 'directions_transit',
    'directions_walk': 'directions_walk',
    'disc_full': 'disc_full',
    'dns': 'dns',
    'do_not_disturb': 'do_not_disturb',
    'do_not_disturb_alt': 'do_not_disturb_alt',
    'do_not_disturb_off': 'do_not_disturb_off',
    'do_not_disturb_on': 'do_not_disturb_on',
    'dock': 'dock',
    'domain': 'domain',
    'done': 'done',
    'done_all': 'done_all',
    'donut_large': 'donut_large',
    'donut_small': 'donut_small',
    'drafts': 'drafts',
    'drag_handle': 'drag_handle',
    'drive_eta': 'drive_eta',
    'dvr': 'dvr',
    'edit': 'edit',
    'edit_location': 'edit_location',
    'eject': 'eject',
    'email': 'email',
    'enhanced_encryption': 'enhanced_encryption',
    'equalizer': 'equalizer',
    'error': 'error',
    'error_outline': 'error_outline',
    'euro_symbol': 'euro_symbol',
    'ev_station': 'ev_station',
    'event': 'event',
    'event_available': 'event_available',
    'event_busy': 'event_busy',
    'event_note': 'event_note',
    'event_seat': 'event_seat',
    'exit_to_app': 'exit_to_app',
    'expand_less': 'expand_less',
    'expand_more': 'expand_more',
    'explicit': 'explicit',
    'explore': 'explore',
    'exposure': 'exposure',
    'exposure_neg_1': 'exposure_neg_1',
    'exposure_neg_2': 'exposure_neg_2',
    'exposure_plus_1': 'exposure_plus_1',
    'exposure_plus_2': 'exposure_plus_2',
    'exposure_zero': 'exposure_zero',
    'extension': 'extension',
    'face': 'face',
    'fast_forward': 'fast_forward',
    'fast_rewind': 'fast_rewind',
    'favorite': 'favorite',
    'favorite_border': 'favorite_border',
    'featured_play_list': 'featured_play_list',
    'featured_video': 'featured_video',
    'feedback': 'feedback',
    'fiber_dvr': 'fiber_dvr',
    'fiber_manual_record': 'fiber_manual_record',
    'fiber_new': 'fiber_new',
    'fiber_pin': 'fiber_pin',
    'fiber_smart_record': 'fiber_smart_record',
    'file_download': 'file_download',
    'file_upload': 'file_upload',
    'filter': 'filter',
    'filter_1': 'filter_1',
    'filter_2': 'filter_2',
    'filter_3': 'filter_3',
    'filter_4': 'filter_4',
    'filter_5': 'filter_5',
    'filter_6': 'filter_6',
    'filter_7': 'filter_7',
    'filter_8': 'filter_8',
    'filter_9': 'filter_9',
    'filter_9_plus': 'filter_9_plus',
    'filter_b_and_w': 'filter_b_and_w',
    'filter_center_focus': 'filter_center_focus',
    'filter_drama': 'filter_drama',
    'filter_frames': 'filter_frames',
    'filter_hdr': 'filter_hdr',
    'filter_list': 'filter_list',
    'filter_none': 'filter_none',
    'filter_tilt_shift': 'filter_tilt_shift',
    'filter_vintage': 'filter_vintage',
    'find_in_page': 'find_in_page',
    'find_replace': 'find_replace',
    'fingerprint': 'fingerprint',
    'first_page': 'first_page',
    'fitness_center': 'fitness_center',
    'flag': 'flag',
    'flare': 'flare',
    'flash_auto': 'flash_auto',
    'flash_off': 'flash_off',
    'flash_on': 'flash_on',
    'flight': 'flight',
    'flight_land': 'flight_land',
    'flight_takeoff': 'flight_takeoff',
    'flip': 'flip',
    'flip_to_back': 'flip_to_back',
    'flip_to_front': 'flip_to_front',
    'folder': 'folder',
    'folder_open': 'folder_open',
    'folder_shared': 'folder_shared',
    'folder_special': 'folder_special',
    'font_download': 'font_download',
    'format_align_center': 'format_align_center',
    'format_align_justify': 'format_align_justify',
    'format_align_left': 'format_align_left',
    'format_align_right': 'format_align_right',
    'format_bold': 'format_bold',
    'format_clear': 'format_clear',
    'format_color_fill': 'format_color_fill',
    'format_color_reset': 'format_color_reset',
    'format_color_text': 'format_color_text',
    'format_indent_decrease': 'format_indent_decrease',
    'format_indent_increase': 'format_indent_increase',
    'format_italic': 'format_italic',
    'format_line_spacing': 'format_line_spacing',
    'format_list_bulleted': 'format_list_bulleted',
    'format_list_numbered': 'format_list_numbered',
    'format_paint': 'format_paint',
    'format_quote': 'format_quote',
    'format_shapes': 'format_shapes',
    'format_size': 'format_size',
    'format_strikethrough': 'format_strikethrough',
    'format_textdirection_l_to_r': 'format_textdirection_l_to_r',
    'format_textdirection_r_to_l': 'format_textdirection_r_to_l',
    'format_underlined': 'format_underlined',
    'forum': 'forum',
    'forward': 'forward',
    'forward_10': 'forward_10',
    'forward_30': 'forward_30',
    'forward_5': 'forward_5',
    'free_breakfast': 'free_breakfast',
    'fullscreen': 'fullscreen',
    'fullscreen_exit': 'fullscreen_exit',
    'functions': 'functions',
    'g_translate': 'g_translate',
    'gamepad': 'gamepad',
    'games': 'games',
    'gavel': 'gavel',
    'gesture': 'gesture',
    'get_app': 'get_app',
    'gif': 'gif',
    'golf_course': 'golf_course',
    'gps_fixed': 'gps_fixed',
    'gps_not_fixed': 'gps_not_fixed',
    'gps_off': 'gps_off',
    'grade': 'grade',
    'gradient': 'gradient',
    'grain': 'grain',
    'graphic_eq': 'graphic_eq',
    'grid_off': 'grid_off',
    'grid_on': 'grid_on',
    'group': 'group',
    'group_add': 'group_add',
    'group_work': 'group_work',
    'hd': 'hd',
    'hdr_off': 'hdr_off',
    'hdr_on': 'hdr_on',
    'hdr_strong': 'hdr_strong',
    'hdr_weak': 'hdr_weak',
    'headset': 'headset',
    'headset_mic': 'headset_mic',
    'healing': 'healing',
    'hearing': 'hearing',
    'help': 'help',
    'help_outline': 'help_outline',
    'high_quality': 'high_quality',
    'highlight': 'highlight',
    'highlight_off': 'highlight_off',
    'history': 'history',
    'home': 'home',
    'hot_tub': 'hot_tub',
    'hotel': 'hotel',
    'hourglass_empty': 'hourglass_empty',
    'hourglass_full': 'hourglass_full',
    'http': 'http',
    'https': 'https',
    'image': 'image',
    'image_aspect_ratio': 'image_aspect_ratio',
    'import_contacts': 'import_contacts',
    'import_export': 'import_export',
    'important_devices': 'important_devices',
    'inbox': 'inbox',
    'indeterminate_check_box': 'indeterminate_check_box',
    'info': 'info',
    'info_outline': 'info_outline',
    'input': 'input',
    'insert_chart': 'insert_chart',
    'insert_comment': 'insert_comment',
    'insert_drive_file': 'insert_drive_file',
    'insert_emoticon': 'insert_emoticon',
    'insert_invitation': 'insert_invitation',
    'insert_link': 'insert_link',
    'insert_photo': 'insert_photo',
    'invert_colors': 'invert_colors',
    'invert_colors_off': 'invert_colors_off',
    'iso': 'iso',
    'keyboard': 'keyboard',
    'keyboard_arrow_down': 'keyboard_arrow_down',
    'keyboard_arrow_left': 'keyboard_arrow_left',
    'keyboard_arrow_right': 'keyboard_arrow_right',
    'keyboard_arrow_up': 'keyboard_arrow_up',
    'keyboard_backspace': 'keyboard_backspace',
    'keyboard_capslock': 'keyboard_capslock',
    'keyboard_hide': 'keyboard_hide',
    'keyboard_return': 'keyboard_return',
    'keyboard_tab': 'keyboard_tab',
    'keyboard_voice': 'keyboard_voice',
    'kitchen': 'kitchen',
    'label': 'label',
    'label_outline': 'label_outline',
    'landscape': 'landscape',
    'language': 'language',
    'laptop': 'laptop',
    'laptop_chromebook': 'laptop_chromebook',
    'laptop_mac': 'laptop_mac',
    'laptop_windows': 'laptop_windows',
    'last_page': 'last_page',
    'launch': 'launch',
    'layers': 'layers',
    'layers_clear': 'layers_clear',
    'leak_add': 'leak_add',
    'leak_remove': 'leak_remove',
    'lens': 'lens',
    'library_add': 'library_add',
    'library_books': 'library_books',
    'library_music': 'library_music',
    'lightbulb_outline': 'lightbulb_outline',
    'line_style': 'line_style',
    'line_weight': 'line_weight',
    'linear_scale': 'linear_scale',
    'link': 'link',
    'linked_camera': 'linked_camera',
    'list': 'list',
    'live_help': 'live_help',
    'live_tv': 'live_tv',
    'local_activity': 'local_activity',
    'local_airport': 'local_airport',
    'local_atm': 'local_atm',
    'local_bar': 'local_bar',
    'local_cafe': 'local_cafe',
    'local_car_wash': 'local_car_wash',
    'local_convenience_store': 'local_convenience_store',
    'local_dining': 'local_dining',
    'local_drink': 'local_drink',
    'local_florist': 'local_florist',
    'local_gas_station': 'local_gas_station',
    'local_grocery_store': 'local_grocery_store',
    'local_hospital': 'local_hospital',
    'local_hotel': 'local_hotel',
    'local_laundry_service': 'local_laundry_service',
    'local_library': 'local_library',
    'local_mall': 'local_mall',
    'local_movies': 'local_movies',
    'local_offer': 'local_offer',
    'local_parking': 'local_parking',
    'local_pharmacy': 'local_pharmacy',
    'local_phone': 'local_phone',
    'local_pizza': 'local_pizza',
    'local_play': 'local_play',
    'local_post_office': 'local_post_office',
    'local_printshop': 'local_printshop',
    'local_see': 'local_see',
    'local_shipping': 'local_shipping',
    'local_taxi': 'local_taxi',
    'location_city': 'location_city',
    'location_disabled': 'location_disabled',
    'location_off': 'location_off',
    'location_on': 'location_on',
    'location_searching': 'location_searching',
    'lock': 'lock',
    'lock_open': 'lock_open',
    'lock_outline': 'lock_outline',
    'looks': 'looks',
    'looks_3': 'looks_3',
    'looks_4': 'looks_4',
    'looks_5': 'looks_5',
    'looks_6': 'looks_6',
    'looks_one': 'looks_one',
    'looks_two': 'looks_two',
    'loop': 'loop',
    'loupe': 'loupe',
    'low_priority': 'low_priority',
    'loyalty': 'loyalty',
    'mail': 'mail',
    'mail_outline': 'mail_outline',
    'map': 'map',
    'markunread': 'markunread',
    'markunread_mailbox': 'markunread_mailbox',
    'memory': 'memory',
    'menu': 'menu',
    'merge_type': 'merge_type',
    'message': 'message',
    'mic': 'mic',
    'mic_none': 'mic_none',
    'mic_off': 'mic_off',
    'mms': 'mms',
    'mode_comment': 'mode_comment',
    'mode_edit': 'mode_edit',
    'monetization_on': 'monetization_on',
    'money_off': 'money_off',
    'monochrome_photos': 'monochrome_photos',
    'mood': 'mood',
    'mood_bad': 'mood_bad',
    'more': 'more',
    'more_horiz': 'more_horiz',
    'more_vert': 'more_vert',
    'motorcycle': 'motorcycle',
    'mouse': 'mouse',
    'move_to_inbox': 'move_to_inbox',
    'movie': 'movie',
    'movie_creation': 'movie_creation',
    'movie_filter': 'movie_filter',
    'multiline_chart': 'multiline_chart',
    'music_note': 'music_note',
    'music_video': 'music_video',
    'my_location': 'my_location',
    'nature': 'nature',
    'nature_people': 'nature_people',
    'navigate_before': 'navigate_before',
    'navigate_next': 'navigate_next',
    'navigation': 'navigation',
    'near_me': 'near_me',
    'network_cell': 'network_cell',
    'network_check': 'network_check',
    'network_locked': 'network_locked',
    'network_wifi': 'network_wifi',
    'new_releases': 'new_releases',
    'next_week': 'next_week',
    'nfc': 'nfc',
    'no_encryption': 'no_encryption',
    'no_sim': 'no_sim',
    'not_interested': 'not_interested',
    'note': 'note',
    'note_add': 'note_add',
    'notifications': 'notifications',
    'notifications_active': 'notifications_active',
    'notifications_none': 'notifications_none',
    'notifications_off': 'notifications_off',
    'notifications_paused': 'notifications_paused',
    'offline_pin': 'offline_pin',
    'ondemand_video': 'ondemand_video',
    'opacity': 'opacity',
    'open_in_browser': 'open_in_browser',
    'open_in_new': 'open_in_new',
    'open_with': 'open_with',
    'pages': 'pages',
    'pageview': 'pageview',
    'palette': 'palette',
    'pan_tool': 'pan_tool',
    'panorama': 'panorama',
    'panorama_fish_eye': 'panorama_fish_eye',
    'panorama_horizontal': 'panorama_horizontal',
    'panorama_vertical': 'panorama_vertical',
    'panorama_wide_angle': 'panorama_wide_angle',
    'party_mode': 'party_mode',
    'pause': 'pause',
    'pause_circle_filled': 'pause_circle_filled',
    'pause_circle_outline': 'pause_circle_outline',
    'payment': 'payment',
    'people': 'people',
    'people_outline': 'people_outline',
    'perm_camera_mic': 'perm_camera_mic',
    'perm_contact_calendar': 'perm_contact_calendar',
    'perm_data_setting': 'perm_data_setting',
    'perm_device_information': 'perm_device_information',
    'perm_identity': 'perm_identity',
    'perm_media': 'perm_media',
    'perm_phone_msg': 'perm_phone_msg',
    'perm_scan_wifi': 'perm_scan_wifi',
    'person': 'person',
    'person_add': 'person_add',
    'person_outline': 'person_outline',
    'person_pin': 'person_pin',
    'person_pin_circle': 'person_pin_circle',
    'personal_video': 'personal_video',
    'pets': 'pets',
    'phone': 'phone',
    'phone_android': 'phone_android',
    'phone_bluetooth_speaker': 'phone_bluetooth_speaker',
    'phone_forwarded': 'phone_forwarded',
    'phone_in_talk': 'phone_in_talk',
    'phone_iphone': 'phone_iphone',
    'phone_locked': 'phone_locked',
    'phone_missed': 'phone_missed',
    'phone_paused': 'phone_paused',
    'phonelink': 'phonelink',
    'phonelink_erase': 'phonelink_erase',
    'phonelink_lock': 'phonelink_lock',
    'phonelink_off': 'phonelink_off',
    'phonelink_ring': 'phonelink_ring',
    'phonelink_setup': 'phonelink_setup',
    'photo': 'photo',
    'photo_album': 'photo_album',
    'photo_camera': 'photo_camera',
    'photo_filter': 'photo_filter',
    'photo_library': 'photo_library',
    'photo_size_select_actual': 'photo_size_select_actual',
    'photo_size_select_large': 'photo_size_select_large',
    'photo_size_select_small': 'photo_size_select_small',
    'picture_as_pdf': 'picture_as_pdf',
    'picture_in_picture': 'picture_in_picture',
    'picture_in_picture_alt': 'picture_in_picture_alt',
    'pie_chart': 'pie_chart',
    'pie_chart_outlined': 'pie_chart_outlined',
    'pin_drop': 'pin_drop',
    'place': 'place',
    'play_arrow': 'play_arrow',
    'play_circle_filled': 'play_circle_filled',
    'play_circle_outline': 'play_circle_outline',
    'play_for_work': 'play_for_work',
    'playlist_add': 'playlist_add',
    'playlist_add_check': 'playlist_add_check',
    'playlist_play': 'playlist_play',
    'plus_one': 'plus_one',
    'poll': 'poll',
    'polymer': 'polymer',
    'pool': 'pool',
    'portable_wifi_off': 'portable_wifi_off',
    'portrait': 'portrait',
    'power': 'power',
    'power_input': 'power_input',
    'power_settings_new': 'power_settings_new',
    'pregnant_woman': 'pregnant_woman',
    'present_to_all': 'present_to_all',
    'print': 'print',
    'priority_high': 'priority_high',
    'public': 'public',
    'publish': 'publish',
    'query_builder': 'query_builder',
    'question_answer': 'question_answer',
    'queue': 'queue',
    'queue_music': 'queue_music',
    'queue_play_next': 'queue_play_next',
    'radio': 'radio',
    'radio_button_checked': 'radio_button_checked',
    'radio_button_unchecked': 'radio_button_unchecked',
    'rate_review': 'rate_review',
    'receipt': 'receipt',
    'recent_actors': 'recent_actors',
    'record_voice_over': 'record_voice_over',
    'redeem': 'redeem',
    'redo': 'redo',
    'refresh': 'refresh',
    'remove': 'remove',
    'remove_circle': 'remove_circle',
    'remove_circle_outline': 'remove_circle_outline',
    'remove_from_queue': 'remove_from_queue',
    'remove_red_eye': 'remove_red_eye',
    'remove_shopping_cart': 'remove_shopping_cart',
    'reorder': 'reorder',
    'repeat': 'repeat',
    'repeat_one': 'repeat_one',
    'replay': 'replay',
    'replay_10': 'replay_10',
    'replay_30': 'replay_30',
    'replay_5': 'replay_5',
    'reply': 'reply',
    'reply_all': 'reply_all',
    'report': 'report',
    'report_problem': 'report_problem',
    'restaurant': 'restaurant',
    'restaurant_menu': 'restaurant_menu',
    'restore': 'restore',
    'restore_page': 'restore_page',
    'ring_volume': 'ring_volume',
    'room': 'room',
    'room_service': 'room_service',
    'rotate_90_degrees_ccw': 'rotate_90_degrees_ccw',
    'rotate_left': 'rotate_left',
    'rotate_right': 'rotate_right',
    'rounded_corner': 'rounded_corner',
    'router': 'router',
    'rowing': 'rowing',
    'rss_feed': 'rss_feed',
    'rv_hookup': 'rv_hookup',
    'satellite': 'satellite',
    'save': 'save',
    'scanner': 'scanner',
    'schedule': 'schedule',
    'school': 'school',
    'screen_lock_landscape': 'screen_lock_landscape',
    'screen_lock_portrait': 'screen_lock_portrait',
    'screen_lock_rotation': 'screen_lock_rotation',
    'screen_rotation': 'screen_rotation',
    'screen_share': 'screen_share',
    'sd_card': 'sd_card',
    'sd_storage': 'sd_storage',
    'search': 'search',
    'security': 'security',
    'select_all': 'select_all',
    'send': 'send',
    'sentiment_dissatisfied': 'sentiment_dissatisfied',
    'sentiment_neutral': 'sentiment_neutral',
    'sentiment_satisfied': 'sentiment_satisfied',
    'sentiment_very_dissatisfied': 'sentiment_very_dissatisfied',
    'sentiment_very_satisfied': 'sentiment_very_satisfied',
    'settings': 'settings',
    'settings_applications': 'settings_applications',
    'settings_backup_restore': 'settings_backup_restore',
    'settings_bluetooth': 'settings_bluetooth',
    'settings_brightness': 'settings_brightness',
    'settings_cell': 'settings_cell',
    'settings_ethernet': 'settings_ethernet',
    'settings_input_antenna': 'settings_input_antenna',
    'settings_input_component': 'settings_input_component',
    'settings_input_composite': 'settings_input_composite',
    'settings_input_hdmi': 'settings_input_hdmi',
    'settings_input_svideo': 'settings_input_svideo',
    'settings_overscan': 'settings_overscan',
    'settings_phone': 'settings_phone',
    'settings_power': 'settings_power',
    'settings_remote': 'settings_remote',
    'settings_system_daydream': 'settings_system_daydream',
    'settings_voice': 'settings_voice',
    'share': 'share',
    'shop': 'shop',
    'shop_two': 'shop_two',
    'shopping_basket': 'shopping_basket',
    'shopping_cart': 'shopping_cart',
    'short_text': 'short_text',
    'show_chart': 'show_chart',
    'shuffle': 'shuffle',
    'signal_cellular_4_bar': 'signal_cellular_4_bar',
    'signal_cellular_connected_no_internet_4_bar': 'signal_cellular_connected_no_internet_4_bar',
    'signal_cellular_no_sim': 'signal_cellular_no_sim',
    'signal_cellular_null': 'signal_cellular_null',
    'signal_cellular_off': 'signal_cellular_off',
    'signal_wifi_4_bar': 'signal_wifi_4_bar',
    'signal_wifi_4_bar_lock': 'signal_wifi_4_bar_lock',
    'signal_wifi_off': 'signal_wifi_off',
    'sim_card': 'sim_card',
    'sim_card_alert': 'sim_card_alert',
    'skip_next': 'skip_next',
    'skip_previous': 'skip_previous',
    'slideshow': 'slideshow',
    'slow_motion_video': 'slow_motion_video',
    'smartphone': 'smartphone',
    'smoke_free': 'smoke_free',
    'smoking_rooms': 'smoking_rooms',
    'sms': 'sms',
    'sms_failed': 'sms_failed',
    'snooze': 'snooze',
    'sort': 'sort',
    'sort_by_alpha': 'sort_by_alpha',
    'spa': 'spa',
    'space_bar': 'space_bar',
    'speaker': 'speaker',
    'speaker_group': 'speaker_group',
    'speaker_notes': 'speaker_notes',
    'speaker_notes_off': 'speaker_notes_off',
    'speaker_phone': 'speaker_phone',
    'spellcheck': 'spellcheck',
    'star': 'star',
    'star_border': 'star_border',
    'star_half': 'star_half',
    'stars': 'stars',
    'stay_current_landscape': 'stay_current_landscape',
    'stay_current_portrait': 'stay_current_portrait',
    'stay_primary_landscape': 'stay_primary_landscape',
    'stay_primary_portrait': 'stay_primary_portrait',
    'stop': 'stop',
    'stop_screen_share': 'stop_screen_share',
    'storage': 'storage',
    'store': 'store',
    'store_mall_directory': 'store_mall_directory',
    'straighten': 'straighten',
    'streetview': 'streetview',
    'strikethrough_s': 'strikethrough_s',
    'style': 'style',
    'subdirectory_arrow_left': 'subdirectory_arrow_left',
    'subdirectory_arrow_right': 'subdirectory_arrow_right',
    'subject': 'subject',
    'subscriptions': 'subscriptions',
    'subtitles': 'subtitles',
    'subway': 'subway',
    'supervisor_account': 'supervisor_account',
    'surround_sound': 'surround_sound',
    'swap_calls': 'swap_calls',
    'swap_horiz': 'swap_horiz',
    'swap_vert': 'swap_vert',
    'swap_vertical_circle': 'swap_vertical_circle',
    'switch_camera': 'switch_camera',
    'switch_video': 'switch_video',
    'sync': 'sync',
    'sync_disabled': 'sync_disabled',
    'sync_problem': 'sync_problem',
    'system_update': 'system_update',
    'system_update_alt': 'system_update_alt',
    'tab': 'tab',
    'tab_unselected': 'tab_unselected',
    'tablet': 'tablet',
    'tablet_android': 'tablet_android',
    'tablet_mac': 'tablet_mac',
    'tag_faces': 'tag_faces',
    'tap_and_play': 'tap_and_play',
    'terrain': 'terrain',
    'text_fields': 'text_fields',
    'text_format': 'text_format',
    'textsms': 'textsms',
    'texture': 'texture',
    'theaters': 'theaters',
    'thumb_down': 'thumb_down',
    'thumb_up': 'thumb_up',
    'thumbs_up_down': 'thumbs_up_down',
    'time_to_leave': 'time_to_leave',
    'timelapse': 'timelapse',
    'timeline': 'timeline',
    'timer': 'timer',
    'timer_10': 'timer_10',
    'timer_3': 'timer_3',
    'timer_off': 'timer_off',
    'title': 'title',
    'toc': 'toc',
    'today': 'today',
    'toll': 'toll',
    'tonality': 'tonality',
    'touch_app': 'touch_app',
    'toys': 'toys',
    'track_changes': 'track_changes',
    'traffic': 'traffic',
    'train': 'train',
    'tram': 'tram',
    'transfer_within_a_station': 'transfer_within_a_station',
    'transform': 'transform',
    'translate': 'translate',
    'trending_down': 'trending_down',
    'trending_flat': 'trending_flat',
    'trending_up': 'trending_up',
    'tune': 'tune',
    'turned_in': 'turned_in',
    'turned_in_not': 'turned_in_not',
    'tv': 'tv',
    'unarchive': 'unarchive',
    'undo': 'undo',
    'unfold_less': 'unfold_less',
    'unfold_more': 'unfold_more',
    'update': 'update',
    'usb': 'usb',
    'verified_user': 'verified_user',
    'vertical_align_bottom': 'vertical_align_bottom',
    'vertical_align_center': 'vertical_align_center',
    'vertical_align_top': 'vertical_align_top',
    'vibration': 'vibration',
    'video_call': 'video_call',
    'video_label': 'video_label',
    'video_library': 'video_library',
    'videocam': 'videocam',
    'videocam_off': 'videocam_off',
    'videogame_asset': 'videogame_asset',
    'view_agenda': 'view_agenda',
    'view_array': 'view_array',
    'view_carousel': 'view_carousel',
    'view_column': 'view_column',
    'view_comfy': 'view_comfy',
    'view_compact': 'view_compact',
    'view_day': 'view_day',
    'view_headline': 'view_headline',
    'view_list': 'view_list',
    'view_module': 'view_module',
    'view_quilt': 'view_quilt',
    'view_stream': 'view_stream',
    'view_week': 'view_week',
    'vignette': 'vignette',
    'visibility': 'visibility',
    'visibility_off': 'visibility_off',
    'voice_chat': 'voice_chat',
    'voicemail': 'voicemail',
    'volume_down': 'volume_down',
    'volume_mute': 'volume_mute',
    'volume_off': 'volume_off',
    'volume_up': 'volume_up',
    'vpn_key': 'vpn_key',
    'vpn_lock': 'vpn_lock',
    'wallpaper': 'wallpaper',
    'warning': 'warning',
    'watch': 'watch',
    'watch_later': 'watch_later',
    'wb_auto': 'wb_auto',
    'wb_cloudy': 'wb_cloudy',
    'wb_incandescent': 'wb_incandescent',
    'wb_iridescent': 'wb_iridescent',
    'wb_sunny': 'wb_sunny',
    'wc': 'wc',
    'web': 'web',
    'web_asset': 'web_asset',
    'weekend': 'weekend',
    'whatshot': 'whatshot',
    'widgets': 'widgets',
    'wifi': 'wifi',
    'wifi_lock': 'wifi_lock',
    'wifi_tethering': 'wifi_tethering',
    'work': 'work',
    'wrap_text': 'wrap_text',
    'youtube_searched_for': 'youtube_searched_for',
    'zoom_in': 'zoom_in',
    'zoom_out': 'zoom_out',
    'zoom_out_map': 'zoom_out_map',
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__15__;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const ClassList_1 = __webpack_require__(4);
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOutside = () => {
            this.setState({ open: false });
        };
        this.handleClick = (e) => {
            e.stopPropagation();
            this.setState({ open: !this.state.open });
            this.props.onClick && this.props.onClick(e);
        };
        this.state = {
            open: false
        };
    }
    componentDidMount() {
        window.addEventListener("click", this.handleClickOutside);
    }
    componentWillUnmount() {
        window.removeEventListener("click", this.handleClickOutside);
    }
    render() {
        const _a = Object.assign({}, this.props), { className = undefined, onClick = undefined } = _a, divProps = __rest(_a, ["className", "onClick"]);
        return (React.createElement("div", Object.assign({ className: ClassList_1.ClassList.compute(className, this.state.open ? 'open' : ''), onClick: this.handleClick }, divProps), this.props.children));
    }
}
exports.Dropdown = Dropdown;
exports.DropdownToggle = (props) => React.createElement("div", { className: ClassList_1.ClassList.compute(props.className, 'toggle') }, props.children);
exports.DropdownPopup = (props) => React.createElement("div", { className: ClassList_1.ClassList.compute(props.className, 'popup') }, props.children);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.__ForceTypeDeclarationGeneration = '__this_forces_generation_of_type_definition';


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
exports.Bouncer = (props) => (React.createElement("div", { className: props.className },
    React.createElement("div", { className: "container" },
        React.createElement("div", { className: "bounce1" }),
        React.createElement("div", { className: "bounce2" }),
        React.createElement("div", { className: "bounce3" }))));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
exports.Spinner = (props) => (React.createElement("div", Object.assign({}, props),
    React.createElement("svg", { viewBox: "0 0 100 100" },
        React.createElement("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", strokeWidth: "5", strokeMiterlimit: "10" }))));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const PropTypes = __webpack_require__(10);
const Icon_1 = __webpack_require__(13);
const MaterialIcon_1 = __webpack_require__(14);
const ClassList_1 = __webpack_require__(4);
exports.SortIndicator = (props) => {
    switch (props.direction) {
        case 'asc': return React.createElement(Icon_1.Icon, { children: MaterialIcon_1.MaterialIcon.arrow_upward });
        case 'desc': return React.createElement(Icon_1.Icon, { children: MaterialIcon_1.MaterialIcon.arrow_downward });
        case undefined: return null;
    }
};
const DataTableContextTypes = {
    dataTable: PropTypes.object
};
class DataTable extends React.Component {
    constructor() {
        super(...arguments);
        this.handleSelectedChange = (rowIndex, selected) => {
            // TODO
        };
    }
    getChildContext() {
        return {
            dataTable: {
                selectable: this.props.selectable,
                onSelectedChange: this.handleSelectedChange
            }
        };
    }
    render() {
        return (React.createElement("div", { className: this.props.className },
            React.createElement("table", null, this.props.children)));
    }
}
DataTable.childContextTypes = DataTableContextTypes;
exports.DataTable = DataTable;
;
exports.DataTableHead = (props) => React.createElement("thead", Object.assign({}, props));
exports.DataTableFoot = (props) => React.createElement("tfoot", Object.assign({}, props));
//
// Row group (tbody.row-group)
//
exports.DataTableRowGroup = (props) => (React.createElement("tbody", Object.assign({}, props, { className: ClassList_1.ClassList.compute('row-group', props.className) })));
//
// Table body
//
exports.DataTableBody = (props) => (React.createElement("tbody", Object.assign({}, props), props.children || (props.emptyMessage && React.createElement("caption", { className: "empty-message" }, props.emptyMessage))));
//
// Table row
//
exports.DataTableRow = (props) => (React.createElement("tr", Object.assign({}, props)));
function computeTableCellClassName(props) {
    return ClassList_1.ClassList.compute(`align-${props.align || 'center'}`, (props.onClick || props.clickable) ? 'clickable' : undefined, props.className);
}
exports.DataTableDataCell = (props) => (React.createElement("td", Object.assign({}, props, { className: computeTableCellClassName(props) })));
exports.DataTableHeaderCell = (props) => {
    const _a = Object.assign({}, props), { sortDirection = undefined, children = undefined, width = undefined } = _a, otherProps = __rest(_a, ["sortDirection", "children", "width"]);
    if (width) {
        if (!otherProps.style) {
            otherProps.style = {};
        }
        otherProps.style.width = width;
    }
    return (React.createElement("th", Object.assign({}, otherProps, { className: computeTableCellClassName(props) }),
        children,
        sortDirection && React.createElement(exports.SortIndicator, { direction: sortDirection })));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const TextInput_1 = __webpack_require__(1);
class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.thousandSeparator = '';
        this.decimalSeparator = '.';
        this.hasFocus = false;
        this.handleChange = (e) => {
            this.props.onChange && this.props.onChange(e);
            let newValue = this.updateState();
            this.props.onNumberChange && this.props.onNumberChange(newValue);
        };
        this.handleFocus = (e) => {
            this.hasFocus = true;
        };
        this.handleBlur = (e) => {
            this.props.onBlur && this.props.onBlur(e);
            this.hasFocus = false;
            let newValue = this.updateState();
            if (this.isValid(newValue) && newValue) {
                if (this.inputRef) {
                    this.inputRef.value = this.numberFormat.format(newValue);
                }
                this.props.onNumberChange && this.props.onNumberChange(newValue);
            }
        };
        this.handleInputRef = (input) => {
            this.inputRef = input;
            this.props.inputRef && this.props.inputRef(input);
        };
        this.handleKeyPress = (event) => {
            let keyValue = String.fromCharCode(event.charCode);
            if (!keyValue.match(/[\-0-9]/g) && keyValue !== this.thousandSeparator && keyValue !== this.decimalSeparator) {
                event.preventDefault();
            }
        };
        this.initFormat(props);
    }
    get numberFormat() {
        return this.props.numberFormat || NumberInput.DefaultNumberFormat;
    }
    get invalidMessage() {
        return this.props.invalidMessage || 'Invalid number.';
    }
    componentWillReceiveProps(nextProps) {
        this.initFormat(nextProps);
    }
    initFormat(props) {
        let numberFormat = props.numberFormat || NumberInput.DefaultNumberFormat;
        this.decimalSeparator = numberFormat.format(1.1).replace(/[01]/g, '');
        this.thousandSeparator = numberFormat.format(1111).replace(/[01]/g, '').replace(this.decimalSeparator, '');
    }
    static replaceAll(str, search, replacement) {
        return str.split(search).join(replacement);
    }
    updateState() {
        if (this.inputRef) {
            let numberValue = undefined;
            const value = this.inputRef.value;
            let validity = '';
            if (value) {
                numberValue = this.parseNumber(value);
                if (!this.isValid(numberValue)) {
                    validity = this.invalidMessage;
                }
            }
            this.inputRef.setCustomValidity(validity);
            return numberValue;
        }
    }
    parseNumber(value) {
        if (this.thousandSeparator) {
            value = NumberInput.replaceAll(value, this.thousandSeparator, "");
        }
        if (this.decimalSeparator) {
            value = NumberInput.replaceAll(value, this.decimalSeparator, ".");
        }
        return Number.parseFloat(value);
    }
    isValid(numberValue) {
        return typeof numberValue === 'number' && !Number.isNaN(numberValue);
    }
    render() {
        let _a = this.props, { value, invalidMessage, numberValue, numberFormat, onNumberChange, inputRef } = _a, inputProps = __rest(_a, ["value", "invalidMessage", "numberValue", "numberFormat", "onNumberChange", "inputRef"]);
        const isControlled = this.props.hasOwnProperty('numberValue');
        if (isControlled && !this.hasFocus) {
            const numberValue = this.props.numberValue;
            if (this.isValid(numberValue)) {
                value = this.numberFormat.format(numberValue);
            }
            else {
                value = '';
            }
        }
        return React.createElement(TextInput_1.TextInput, Object.assign({}, inputProps, { value: value, onKeyPress: this.handleKeyPress, onChange: this.handleChange, onBlur: this.handleBlur, onFocus: this.handleFocus, inputRef: this.handleInputRef }));
    }
}
NumberInput.DefaultNumberFormat = new Intl.NumberFormat();
exports.NumberInput = NumberInput;


/***/ })
/******/ ]);
});