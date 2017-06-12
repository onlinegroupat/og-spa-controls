(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("uuid"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "uuid"], factory);
	else if(typeof exports === 'object')
		exports["og-spa-controls"] = factory(require("react"), require("uuid"));
	else
		root["og-spa-controls"] = factory(root["react"], root["uuid"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
exports.Icon = (props) => React.createElement("i", null, props.children);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(4);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

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
const React = __webpack_require__(0);
const ClassList_1 = __webpack_require__(1);
const Icon_1 = __webpack_require__(7);
class Button extends React.Component {
    render() {
        const _a = this.props, { className, primary, icon, children } = _a, buttonProps = __rest(_a, ["className", "primary", "icon", "children"]);
        return (React.createElement("button", Object.assign({ className: ClassList_1.ClassList.compute(className, primary ? 'primary' : undefined) }, buttonProps),
            icon && React.createElement(Icon_1.Icon, null, icon),
            ' ',
            children));
    }
}
exports.Button = Button;


/***/ }),
/* 10 */
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
const React = __webpack_require__(0);
const uuid = __webpack_require__(3);
const PropTypes = __webpack_require__(20);
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
class Checkbox extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleRef = (ref) => {
            this.ref = ref;
            this.props.inputRef && this.props.inputRef(ref);
        };
        this.handleChange = (e) => {
            console.log('Checkbox: handleChange', this.context);
            // call change handler of parent CheckboxGroup
            this.context.checkboxGroup.onChange(e);
            // call handler that was set via props
            this.props.onChange && this.props.onChange(e);
        };
        this.state = {};
    }
    componentWillMount() {
        this.id = this.props.id || uuid();
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // poor man's fix to the problem, that context change is not considered in PureComponent's shouldComponentUpdate
        // see https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076
        // in our case it is probably very much okay, to handle it like this:
        if (nextContext.checkboxGroup && nextContext.checkboxGroup.checked) {
            return true;
        }
        else if (super.shouldComponentUpdate) {
            return super.shouldComponentUpdate && super.shouldComponentUpdate(nextProps, nextState, nextContext);
        }
        else {
            throw new TypeError('considered unreachable');
        }
    }
    render() {
        let _a = this.props, { className, children, value, checked, onChange } = _a, inputProps = __rest(_a, ["className", "children", "value", "checked", "onChange"]);
        // handle a CheckboxGroup parent
        let checkboxGroup = this.context.checkboxGroup;
        if (checkboxGroup) {
            console.log('Checkbox: checkboxGroup', checkboxGroup);
            // we only override the check property, if specified by the parent CheckboxGroup
            if (checkboxGroup.checked && value) {
                console.log('Checkbox.render: checkboxGroup.checked', checkboxGroup.checked, 'value', value);
                checked = checkboxGroup.checked.indexOf(value) >= 0;
                console.log('Checkbox.render: checked', checked);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const og_ts_enum_1 = __webpack_require__(16);
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
const React = __webpack_require__(0);
const uuid = __webpack_require__(3);
const ClassList_1 = __webpack_require__(1);
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
/* 13 */
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
const React = __webpack_require__(0);
const uuid = __webpack_require__(3);
const ClassList_1 = __webpack_require__(1);
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
        this.ref.style.height = "";
        this.ref.style.height = this.ref.scrollHeight + 1 + "px";
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
/* 14 */
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
const React = __webpack_require__(0);
const uuid = __webpack_require__(3);
const ClassList_1 = __webpack_require__(1);
class TextInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = (e) => {
            this.updateState();
            this.props.onChange && this.props.onChange(e);
        };
        this.handleRef = (ref) => {
            this.ref = ref;
            this.props.inputRef && this.props.inputRef(ref);
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
        const _a = this.props, { className } = _a, inputProps = __rest(_a, ["className"]);
        return (React.createElement("div", { className: ClassList_1.ClassList.compute(className, this.state.empty ? 'empty' : 'not-empty') },
            React.createElement("input", Object.assign({ id: this.id, onChange: this.handleChange, ref: this.handleRef }, inputProps)),
            React.createElement("label", { htmlFor: this.id }, this.props.label),
            React.createElement("div", { className: "bar" }),
            React.createElement("div", { className: "validation-message" }, this.state.validationMessage)));
    }
}
exports.TextInput = TextInput;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TextInput_1 = __webpack_require__(14);
exports.TextInput = TextInput_1.TextInput;
var SelectField_1 = __webpack_require__(12);
exports.SelectField = SelectField_1.SelectField;
var TextAreaInput_1 = __webpack_require__(13);
exports.TextAreaInput = TextAreaInput_1.TextAreaInput;
var Checkbox_1 = __webpack_require__(10);
exports.Checkbox = Checkbox_1.Checkbox;
exports.CheckboxGroup = Checkbox_1.CheckboxGroup;
var Button_1 = __webpack_require__(9);
exports.Button = Button_1.Button;
var Icon_1 = __webpack_require__(7);
exports.Icon = Icon_1.Icon;
var MaterialIcon_1 = __webpack_require__(11);
exports.MaterialIcon = MaterialIcon_1.MaterialIcon;
var ClassList_1 = __webpack_require__(1);
exports.ClassList = ClassList_1.ClassList;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Enum = (function () {
    function Enum() {
    }
    Enum.fromArray = function (o) {
        return o.reduce(function (res, key) {
            res[key] = key;
            return res;
        }, Object.create(null));
    };
    Enum.fromObject = function (definition) {
        return definition;
    };
    return Enum;
}());
exports.Enum = Enum;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(5);
  var warning = __webpack_require__(8);
  var ReactPropTypesSecret = __webpack_require__(6);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var ReactPropTypesSecret = __webpack_require__(6);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(4);
var invariant = __webpack_require__(5);
var warning = __webpack_require__(8);

var ReactPropTypesSecret = __webpack_require__(6);
var checkPropTypes = __webpack_require__(17);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(19)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(18)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })
/******/ ]);
});