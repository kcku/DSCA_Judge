//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
var check = Package.check.check;
var Match = Package.check.Match;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var mo;

var require = meteorInstall({"node_modules":{"meteor":{"lbee:moment-helpers":{"common.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/lbee_moment-helpers/common.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var moment = require('moment');                                                                                        // 1
                                                                                                                       //
var MomentHelperInit = function () {                                                                                   //
  // let self = this;                                                                                                  // 4
  //                                                                                                                   // 6
  function MomentHelperInit(isClient) {                                                                                // 7
    (0, _classCallCheck3.default)(this, MomentHelperInit);                                                             // 7
                                                                                                                       //
    if (isClient) {                                                                                                    // 9
      // create a new reactiveVar that holds the moment helper context of locale                                       // 10
      this.currentLocale = new ReactiveVar(); // when creating the moment helper context, set the locale same as moment
                                                                                                                       //
      this.currentLocale.set(moment.locale()); // reactive now                                                         // 14
                                                                                                                       //
      this.now = new ReactiveVar(moment());                                                                            // 17
      var now = this.now;                                                                                              // 18
      Meteor.setInterval(function () {                                                                                 // 20
        now.set(moment());                                                                                             // 21
      }, 1000); // every second                                                                                        // 22
    } // logging messages                                                                                              // 23
                                                                                                                       //
                                                                                                                       //
    this._msg = {                                                                                                      // 26
      dateNotValidReturnNow: 'valid date not provided, sending new moment instead',                                    // 27
      dateNotValidReturnNull: 'valid date not provided, sending null'                                                  // 29
    }; // initate the default options                                                                                  // 26
                                                                                                                       //
    this.options = {                                                                                                   // 34
      // if a helper is called and no date given, create one as now                                                    // 35
      returnNowIfDateNotGiven: false,                                                                                  // 36
      // extra console logging                                                                                         // 37
      debug: false,                                                                                                    // 38
      // initial library of format tokens                                                                              // 39
      formatTokens: {                                                                                                  // 40
        'default': 'LLL' // defaults to locale date format: Month name, day of month, year, time                       // 41
                                                                                                                       //
      }                                                                                                                // 40
    };                                                                                                                 // 34
  } // configuration function, merges the defaults with the options provided                                           // 46
                                                                                                                       //
                                                                                                                       //
  MomentHelperInit.prototype.configure = function () {                                                                 //
    function configure(options) {                                                                                      //
      _.extend(this.options, options);                                                                                 // 51
    }                                                                                                                  // 52
                                                                                                                       //
    return configure;                                                                                                  //
  }(); // expose a utility to set the locale, updating moment & reactive locale                                        //
                                                                                                                       //
                                                                                                                       //
  MomentHelperInit.prototype.setLocale = function () {                                                                 //
    function setLocale(locale) {                                                                                       //
      moment.locale(locale);                                                                                           // 56
      this.currentLocale.set(moment.locale()); // how does 'this' work?                                                // 57
    }                                                                                                                  // 58
                                                                                                                       //
    return setLocale;                                                                                                  //
  }(); // logging function                                                                                             //
                                                                                                                       //
                                                                                                                       //
  MomentHelperInit.prototype.log = function () {                                                                       //
    function log(_log) {                                                                                               //
      // delete the currently stored log                                                                               // 63
      // this was enabled to assit with logging                                                                        // 64
      delete this.logged; // if debugging is enabled, log it!                                                          // 65
                                                                                                                       //
      if (this.options.debug) {                                                                                        // 68
        this.logged = _log;                                                                                            // 69
        console.log(_log);                                                                                             // 70
      }                                                                                                                // 71
    }                                                                                                                  // 72
                                                                                                                       //
    return log;                                                                                                        //
  }(); // used for moFormat, helps to get a format token eg. 'YYYY-MM-DD'                                              //
                                                                                                                       //
                                                                                                                       //
  MomentHelperInit.prototype._getToken = function () {                                                                 //
    function _getToken(token, aMoment) {                                                                               //
      check(token, Match.Optional(String, null));                                                                      // 76
                                                                                                                       //
      var tokenLibrary = _.defaults(this.options.formatTokens, {                                                       // 77
        // these tokens will always be available (unless overridden)                                                   // 78
        'dayOfWeek': 'dddd',                                                                                           // 79
        'dayOfMonth': 'D',                                                                                             // 80
        'month': 'M',                                                                                                  // 81
        'year': 'YYYY',                                                                                                // 82
        'time': 'h:mm a'                                                                                               // 83
      }); // if no token provided, use the default from the token library                                              // 77
                                                                                                                       //
                                                                                                                       //
      if (!token) {                                                                                                    // 87
        token = 'default';                                                                                             // 88
      } // see if the token is a reference to the token library, otherwise keep                                        // 89
                                                                                                                       //
                                                                                                                       //
      token = tokenLibrary[token] || token; // check if token is a function & process                                  // 92
                                                                                                                       //
      if (_.isFunction(token)) {                                                                                       // 95
        token = token.call(aMoment);                                                                                   // 96
      } // return the token                                                                                            // 97
                                                                                                                       //
                                                                                                                       //
      return token;                                                                                                    // 100
    }                                                                                                                  // 101
                                                                                                                       //
    return _getToken;                                                                                                  //
  }();                                                                                                                 //
                                                                                                                       //
  MomentHelperInit.prototype._getMoment = function () {                                                                //
    function _getMoment(obj) {                                                                                         //
      var result;                                                                                                      // 105
      var date; // goal is to get a moment object from what is provided                                                // 106
                                                                                                                       //
      if (moment.isMoment(obj)) {                                                                                      // 109
        // if a moment is provided, return that moment, no questions asked                                             // 110
        result = obj;                                                                                                  // 111
      } else if (_.isDate(obj)) {                                                                                      // 112
        // if a date is provided, convert to moment and return                                                         // 113
        result = moment(obj);                                                                                          // 114
      } else if (_.isString(obj) && obj.length > 1) {                                                                  // 115
        // attempt to get a date from the string                                                                       // 116
        // if '|' is found, separate and use the RHS as the input format token                                         // 118
        if (obj.indexOf('|') !== -1) {                                                                                 // 119
          date = moment(obj.substring(0, obj.indexOf('|')), // input string LHS of '|'                                 // 120
          obj.substring(obj.indexOf('|') + 1) // input format, RHS after '|'                                           // 122
          );                                                                                                           // 120
        } else {                                                                                                       // 124
          date = moment(new Date(obj));                                                                                // 125
        }                                                                                                              // 126
                                                                                                                       //
        if (date.isValid()) {                                                                                          // 127
          result = date;                                                                                               // 128
        }                                                                                                              // 129
      } // could not get a moment object, work out what to return if anything                                          // 130
                                                                                                                       //
                                                                                                                       //
      if (!result) {                                                                                                   // 133
        // lets support epoch as inbound date type                                                                     // 134
        if (typeof obj === 'number') {                                                                                 // 135
          return moment.unix(obj);                                                                                     // 136
        }                                                                                                              // 137
                                                                                                                       //
        if (this.options.returnNowIfDateNotGiven) {                                                                    // 139
          this.log(this._msg.dateNotValidReturnNow);                                                                   // 140
          return moment();                                                                                             // 141
        } else {                                                                                                       // 142
          this.log(this._msg.dateNotValidReturnNull);                                                                  // 143
        }                                                                                                              // 144
      }                                                                                                                // 145
                                                                                                                       //
      return result;                                                                                                   // 147
    }                                                                                                                  // 148
                                                                                                                       //
    return _getMoment;                                                                                                 //
  }();                                                                                                                 //
                                                                                                                       //
  return MomentHelperInit;                                                                                             //
}();                                                                                                                   //
                                                                                                                       //
mo = new MomentHelperInit(Meteor.isClient);                                                                            // 152
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/lbee_moment-helpers/client.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var MomentHelper = function () {                                                                                       //
  function MomentHelper() {                                                                                            // 3
    (0, _classCallCheck3.default)(this, MomentHelper);                                                                 // 3
                                                                                                                       //
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {                             // 3
      args[_key] = arguments[_key];                                                                                    // 3
    }                                                                                                                  // 3
                                                                                                                       //
    this.args = args; // Calling this reactive property ensure the helper is updated                                   // 4
                                                                                                                       //
    this.locale = mo.currentLocale.get(); // eg. {{moFormat date=myDate}} / {{moFormat myDate}} will do the same thing
                                                                                                                       //
    this.keywords = args.pop();                                                                                        // 10
    this.dateA = args[0] || this.keywords.hash.d || this.keywords.hash.a; // processes what was given to ensure we end up with a moment object
                                                                                                                       //
    this.moDate = mo._getMoment(this.dateA);                                                                           // 14
  }                                                                                                                    // 15
                                                                                                                       //
  MomentHelper.prototype.moFormat = function () {                                                                      //
    function moFormat() {                                                                                              //
      if (this.moDate) {                                                                                               // 18
        this.formatToken = this.args[1] || this.keywords.hash.f;                                                       // 19
        return this.moDate.format(mo._getToken(this.formatToken, this.moDate));                                        // 21
      } // fail silently if the date is not worked out to be a moment                                                  // 24
                                                                                                                       //
                                                                                                                       //
      return null;                                                                                                     // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return moFormat;                                                                                                   //
  }();                                                                                                                 //
                                                                                                                       //
  return MomentHelper;                                                                                                 //
}();                                                                                                                   //
                                                                                                                       //
Template.registerHelper('moFormat', function () {                                                                      // 31
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {                         // 31
    args[_key2] = arguments[_key2];                                                                                    // 31
  }                                                                                                                    // 31
                                                                                                                       //
  return new (Function.prototype.bind.apply(MomentHelper, [null].concat(args)))().moFormat();                          // 31
});                                                                                                                    // 31
Template.registerHelper('moDiff', function () {                                                                        // 35
  function moDiff() {                                                                                                  // 35
    // Calling this reactive property ensure the helper is updated                                                     // 36
    var locale = mo.currentLocale.get(); // eslint-disable-line                                                        // 37
                                                                                                                       //
    var result = void 0; // enables the arguments to be provided as args or vars                                       // 38
                                                                                                                       //
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {                       // 35
      args[_key3] = arguments[_key3];                                                                                  // 35
    }                                                                                                                  // 35
                                                                                                                       //
    var kw = args.pop();                                                                                               // 41
                                                                                                                       //
    var dateA = mo._getMoment(args[0] || kw.hash.a);                                                                   // 42
                                                                                                                       //
    var dateB = mo._getMoment(args[1] || kw.hash.b);                                                                   // 43
                                                                                                                       //
    var units = args[2] || kw.hash.units || 'seconds';                                                                 // 44
    var returnFloat = args[3] || kw.hash.returnFloat; // if the returnFloat is truthy convert it to true, or falsy = false
                                                                                                                       //
    if (returnFloat) {                                                                                                 // 48
      returnFloat = true;                                                                                              // 49
    } else {                                                                                                           // 50
      returnFloat = false;                                                                                             // 51
    } // if the two dates are valid moment objects, send the result                                                    // 52
                                                                                                                       //
                                                                                                                       //
    if (dateA && dateB) {                                                                                              // 55
      result = dateA.diff(dateB, units, returnFloat);                                                                  // 56
    } // fail silently if the dates were not processed to a moment                                                     // 57
                                                                                                                       //
                                                                                                                       //
    return result;                                                                                                     // 60
  }                                                                                                                    // 61
                                                                                                                       //
  return moDiff;                                                                                                       // 35
}());                                                                                                                  // 35
Template.registerHelper('moFrom', function () {                                                                        // 63
  function moFrom() {                                                                                                  // 63
    // Calling this reactive property ensure the helper is updated                                                     // 64
    var locale = mo.currentLocale.get(); // eslint-disable-line                                                        // 65
                                                                                                                       //
    var result = void 0;                                                                                               // 66
                                                                                                                       //
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {                       // 63
      args[_key4] = arguments[_key4];                                                                                  // 63
    }                                                                                                                  // 63
                                                                                                                       //
    var kw = args.pop();                                                                                               // 68
                                                                                                                       //
    var dateA = mo._getMoment(args[0] || kw.hash.a);                                                                   // 69
                                                                                                                       //
    var dateB = mo._getMoment(args[1] || kw.hash.b);                                                                   // 70
                                                                                                                       //
    var withoutSuffix = args[2] || kw.hash.withoutSuffix; // if the withoutSuffix is truthy convert it to true, or falsy = false
                                                                                                                       //
    if (withoutSuffix) {                                                                                               // 74
      withoutSuffix = true;                                                                                            // 75
    } else {                                                                                                           // 76
      withoutSuffix = false;                                                                                           // 77
    } // if the two dates are valid moment objects, send the result                                                    // 78
                                                                                                                       //
                                                                                                                       //
    if (dateA && dateB) {                                                                                              // 81
      result = dateA.from(dateB, withoutSuffix);                                                                       // 82
    } // fail silently if the dates were not processed to a moment                                                     // 83
                                                                                                                       //
                                                                                                                       //
    return result;                                                                                                     // 86
  }                                                                                                                    // 87
                                                                                                                       //
  return moFrom;                                                                                                       // 63
}());                                                                                                                  // 63
Template.registerHelper('moFromNow', function () {                                                                     // 89
  function moFromNow() {                                                                                               // 89
    // Calling this reactive property ensure the helper is updated                                                     // 90
    var locale = mo.currentLocale.get(); // eslint-disable-line                                                        // 91
    // enables the arguments to be provided as args or vars                                                            // 93
                                                                                                                       //
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {                       // 89
      args[_key5] = arguments[_key5];                                                                                  // 89
    }                                                                                                                  // 89
                                                                                                                       //
    var kw = args.pop();                                                                                               // 94
    var date = args[0] || kw.hash.d;                                                                                   // 95
    var withoutSuffix = args[1] || kw.hash.withoutSuffix; // if the withoutSuffix is truthy convert it to true, or falsy = false
                                                                                                                       //
    if (withoutSuffix) {                                                                                               // 99
      withoutSuffix = true;                                                                                            // 100
    } else {                                                                                                           // 101
      withoutSuffix = false;                                                                                           // 102
    } // work with what is given to get a moment object                                                                // 103
                                                                                                                       //
                                                                                                                       //
    var moDate = mo._getMoment(date); // if we did end up with a valid object above, send the result                   // 106
                                                                                                                       //
                                                                                                                       //
    if (moDate) {                                                                                                      // 109
      return moDate.fromNow(withoutSuffix);                                                                            // 110
    } // fail silently if the dates were not processed to a moment                                                     // 111
                                                                                                                       //
                                                                                                                       //
    return null;                                                                                                       // 114
  }                                                                                                                    // 115
                                                                                                                       //
  return moFromNow;                                                                                                    // 89
}());                                                                                                                  // 89
Template.registerHelper('moCalendar', function () {                                                                    // 117
  function moCalendar() {                                                                                              // 117
    // Calling this reactive property ensure the helper is updated                                                     // 118
    var locale = mo.currentLocale.get(); // eslint-disable-line                                                        // 119
    // enables the arguments to be provided as args or vars                                                            // 121
    // eg. {{moFormat date=myDate}} or {{moFormat myDate}} will do the same thing                                      // 122
                                                                                                                       //
    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {                       // 117
      args[_key6] = arguments[_key6];                                                                                  // 117
    }                                                                                                                  // 117
                                                                                                                       //
    var kw = args.pop();                                                                                               // 123
    var date = args[0] || kw.hash.d;                                                                                   // 124
    var referenceDate = args[1] || kw.hash.r;                                                                          // 125
    var moReferenceDate = void 0; // processes what was given to ensure we end up with a moment object                 // 126
                                                                                                                       //
    var moDate = mo._getMoment(date); // never let reference date default to now if not provided                       // 129
                                                                                                                       //
                                                                                                                       //
    if (referenceDate) {                                                                                               // 132
      moReferenceDate = mo._getMoment(referenceDate);                                                                  // 133
    } // fail silently if the date is not worked out to be a moment                                                    // 134
                                                                                                                       //
                                                                                                                       //
    if (moDate) {                                                                                                      // 137
      if (moReferenceDate) {                                                                                           // 138
        return moDate.calendar(moReferenceDate);                                                                       // 139
      }                                                                                                                // 140
                                                                                                                       //
      return moDate.calendar();                                                                                        // 141
    }                                                                                                                  // 142
                                                                                                                       //
    return null;                                                                                                       // 144
  }                                                                                                                    // 145
                                                                                                                       //
  return moCalendar;                                                                                                   // 117
}());                                                                                                                  // 117
Template.registerHelper('moNow', function () {                                                                         // 147
  return mo.now.get();                                                                                                 // 147
});                                                                                                                    // 147
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"moment":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ../../.1.3.10.5tq5cl.ppztk++os+web.browser+web.cordova/npm/node_modules/moment/package.json                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "moment";                                                                                               // 1
exports.version = "2.18.1";                                                                                            // 2
exports.main = "./moment.js";                                                                                          // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"moment.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/lbee_moment-helpers/node_modules/moment/moment.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//! moment.js                                                                                                          // 1
//! version : 2.18.1                                                                                                   // 2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors                                                         // 3
//! license : MIT                                                                                                      // 4
//! momentjs.com                                                                                                       // 5
                                                                                                                       // 6
;(function (global, factory) {                                                                                         // 7
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :                        // 8
    typeof define === 'function' && define.amd ? define(factory) :                                                     // 9
    global.moment = factory()                                                                                          // 10
}(this, (function () { 'use strict';                                                                                   // 11
                                                                                                                       // 12
var hookCallback;                                                                                                      // 13
                                                                                                                       // 14
function hooks () {                                                                                                    // 15
    return hookCallback.apply(null, arguments);                                                                        // 16
}                                                                                                                      // 17
                                                                                                                       // 18
// This is done to register the method called with moment()                                                            // 19
// without creating circular dependencies.                                                                             // 20
function setHookCallback (callback) {                                                                                  // 21
    hookCallback = callback;                                                                                           // 22
}                                                                                                                      // 23
                                                                                                                       // 24
function isArray(input) {                                                                                              // 25
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';                       // 26
}                                                                                                                      // 27
                                                                                                                       // 28
function isObject(input) {                                                                                             // 29
    // IE8 will treat undefined and null as object if it wasn't for                                                    // 30
    // input != null                                                                                                   // 31
    return input != null && Object.prototype.toString.call(input) === '[object Object]';                               // 32
}                                                                                                                      // 33
                                                                                                                       // 34
function isObjectEmpty(obj) {                                                                                          // 35
    var k;                                                                                                             // 36
    for (k in obj) {                                                                                                   // 37
        // even if its not own property I'd still call it non-empty                                                    // 38
        return false;                                                                                                  // 39
    }                                                                                                                  // 40
    return true;                                                                                                       // 41
}                                                                                                                      // 42
                                                                                                                       // 43
function isUndefined(input) {                                                                                          // 44
    return input === void 0;                                                                                           // 45
}                                                                                                                      // 46
                                                                                                                       // 47
function isNumber(input) {                                                                                             // 48
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';                   // 49
}                                                                                                                      // 50
                                                                                                                       // 51
function isDate(input) {                                                                                               // 52
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';                         // 53
}                                                                                                                      // 54
                                                                                                                       // 55
function map(arr, fn) {                                                                                                // 56
    var res = [], i;                                                                                                   // 57
    for (i = 0; i < arr.length; ++i) {                                                                                 // 58
        res.push(fn(arr[i], i));                                                                                       // 59
    }                                                                                                                  // 60
    return res;                                                                                                        // 61
}                                                                                                                      // 62
                                                                                                                       // 63
function hasOwnProp(a, b) {                                                                                            // 64
    return Object.prototype.hasOwnProperty.call(a, b);                                                                 // 65
}                                                                                                                      // 66
                                                                                                                       // 67
function extend(a, b) {                                                                                                // 68
    for (var i in b) {                                                                                                 // 69
        if (hasOwnProp(b, i)) {                                                                                        // 70
            a[i] = b[i];                                                                                               // 71
        }                                                                                                              // 72
    }                                                                                                                  // 73
                                                                                                                       // 74
    if (hasOwnProp(b, 'toString')) {                                                                                   // 75
        a.toString = b.toString;                                                                                       // 76
    }                                                                                                                  // 77
                                                                                                                       // 78
    if (hasOwnProp(b, 'valueOf')) {                                                                                    // 79
        a.valueOf = b.valueOf;                                                                                         // 80
    }                                                                                                                  // 81
                                                                                                                       // 82
    return a;                                                                                                          // 83
}                                                                                                                      // 84
                                                                                                                       // 85
function createUTC (input, format, locale, strict) {                                                                   // 86
    return createLocalOrUTC(input, format, locale, strict, true).utc();                                                // 87
}                                                                                                                      // 88
                                                                                                                       // 89
function defaultParsingFlags() {                                                                                       // 90
    // We need to deep clone this object.                                                                              // 91
    return {                                                                                                           // 92
        empty           : false,                                                                                       // 93
        unusedTokens    : [],                                                                                          // 94
        unusedInput     : [],                                                                                          // 95
        overflow        : -2,                                                                                          // 96
        charsLeftOver   : 0,                                                                                           // 97
        nullInput       : false,                                                                                       // 98
        invalidMonth    : null,                                                                                        // 99
        invalidFormat   : false,                                                                                       // 100
        userInvalidated : false,                                                                                       // 101
        iso             : false,                                                                                       // 102
        parsedDateParts : [],                                                                                          // 103
        meridiem        : null,                                                                                        // 104
        rfc2822         : false,                                                                                       // 105
        weekdayMismatch : false                                                                                        // 106
    };                                                                                                                 // 107
}                                                                                                                      // 108
                                                                                                                       // 109
function getParsingFlags(m) {                                                                                          // 110
    if (m._pf == null) {                                                                                               // 111
        m._pf = defaultParsingFlags();                                                                                 // 112
    }                                                                                                                  // 113
    return m._pf;                                                                                                      // 114
}                                                                                                                      // 115
                                                                                                                       // 116
var some;                                                                                                              // 117
if (Array.prototype.some) {                                                                                            // 118
    some = Array.prototype.some;                                                                                       // 119
} else {                                                                                                               // 120
    some = function (fun) {                                                                                            // 121
        var t = Object(this);                                                                                          // 122
        var len = t.length >>> 0;                                                                                      // 123
                                                                                                                       // 124
        for (var i = 0; i < len; i++) {                                                                                // 125
            if (i in t && fun.call(this, t[i], i, t)) {                                                                // 126
                return true;                                                                                           // 127
            }                                                                                                          // 128
        }                                                                                                              // 129
                                                                                                                       // 130
        return false;                                                                                                  // 131
    };                                                                                                                 // 132
}                                                                                                                      // 133
                                                                                                                       // 134
var some$1 = some;                                                                                                     // 135
                                                                                                                       // 136
function isValid(m) {                                                                                                  // 137
    if (m._isValid == null) {                                                                                          // 138
        var flags = getParsingFlags(m);                                                                                // 139
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {                                            // 140
            return i != null;                                                                                          // 141
        });                                                                                                            // 142
        var isNowValid = !isNaN(m._d.getTime()) &&                                                                     // 143
            flags.overflow < 0 &&                                                                                      // 144
            !flags.empty &&                                                                                            // 145
            !flags.invalidMonth &&                                                                                     // 146
            !flags.invalidWeekday &&                                                                                   // 147
            !flags.nullInput &&                                                                                        // 148
            !flags.invalidFormat &&                                                                                    // 149
            !flags.userInvalidated &&                                                                                  // 150
            (!flags.meridiem || (flags.meridiem && parsedParts));                                                      // 151
                                                                                                                       // 152
        if (m._strict) {                                                                                               // 153
            isNowValid = isNowValid &&                                                                                 // 154
                flags.charsLeftOver === 0 &&                                                                           // 155
                flags.unusedTokens.length === 0 &&                                                                     // 156
                flags.bigHour === undefined;                                                                           // 157
        }                                                                                                              // 158
                                                                                                                       // 159
        if (Object.isFrozen == null || !Object.isFrozen(m)) {                                                          // 160
            m._isValid = isNowValid;                                                                                   // 161
        }                                                                                                              // 162
        else {                                                                                                         // 163
            return isNowValid;                                                                                         // 164
        }                                                                                                              // 165
    }                                                                                                                  // 166
    return m._isValid;                                                                                                 // 167
}                                                                                                                      // 168
                                                                                                                       // 169
function createInvalid (flags) {                                                                                       // 170
    var m = createUTC(NaN);                                                                                            // 171
    if (flags != null) {                                                                                               // 172
        extend(getParsingFlags(m), flags);                                                                             // 173
    }                                                                                                                  // 174
    else {                                                                                                             // 175
        getParsingFlags(m).userInvalidated = true;                                                                     // 176
    }                                                                                                                  // 177
                                                                                                                       // 178
    return m;                                                                                                          // 179
}                                                                                                                      // 180
                                                                                                                       // 181
// Plugins that add properties should also add the key here (null value),                                              // 182
// so we can properly clone ourselves.                                                                                 // 183
var momentProperties = hooks.momentProperties = [];                                                                    // 184
                                                                                                                       // 185
function copyConfig(to, from) {                                                                                        // 186
    var i, prop, val;                                                                                                  // 187
                                                                                                                       // 188
    if (!isUndefined(from._isAMomentObject)) {                                                                         // 189
        to._isAMomentObject = from._isAMomentObject;                                                                   // 190
    }                                                                                                                  // 191
    if (!isUndefined(from._i)) {                                                                                       // 192
        to._i = from._i;                                                                                               // 193
    }                                                                                                                  // 194
    if (!isUndefined(from._f)) {                                                                                       // 195
        to._f = from._f;                                                                                               // 196
    }                                                                                                                  // 197
    if (!isUndefined(from._l)) {                                                                                       // 198
        to._l = from._l;                                                                                               // 199
    }                                                                                                                  // 200
    if (!isUndefined(from._strict)) {                                                                                  // 201
        to._strict = from._strict;                                                                                     // 202
    }                                                                                                                  // 203
    if (!isUndefined(from._tzm)) {                                                                                     // 204
        to._tzm = from._tzm;                                                                                           // 205
    }                                                                                                                  // 206
    if (!isUndefined(from._isUTC)) {                                                                                   // 207
        to._isUTC = from._isUTC;                                                                                       // 208
    }                                                                                                                  // 209
    if (!isUndefined(from._offset)) {                                                                                  // 210
        to._offset = from._offset;                                                                                     // 211
    }                                                                                                                  // 212
    if (!isUndefined(from._pf)) {                                                                                      // 213
        to._pf = getParsingFlags(from);                                                                                // 214
    }                                                                                                                  // 215
    if (!isUndefined(from._locale)) {                                                                                  // 216
        to._locale = from._locale;                                                                                     // 217
    }                                                                                                                  // 218
                                                                                                                       // 219
    if (momentProperties.length > 0) {                                                                                 // 220
        for (i = 0; i < momentProperties.length; i++) {                                                                // 221
            prop = momentProperties[i];                                                                                // 222
            val = from[prop];                                                                                          // 223
            if (!isUndefined(val)) {                                                                                   // 224
                to[prop] = val;                                                                                        // 225
            }                                                                                                          // 226
        }                                                                                                              // 227
    }                                                                                                                  // 228
                                                                                                                       // 229
    return to;                                                                                                         // 230
}                                                                                                                      // 231
                                                                                                                       // 232
var updateInProgress = false;                                                                                          // 233
                                                                                                                       // 234
// Moment prototype object                                                                                             // 235
function Moment(config) {                                                                                              // 236
    copyConfig(this, config);                                                                                          // 237
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);                                                 // 238
    if (!this.isValid()) {                                                                                             // 239
        this._d = new Date(NaN);                                                                                       // 240
    }                                                                                                                  // 241
    // Prevent infinite loop in case updateOffset creates new moment                                                   // 242
    // objects.                                                                                                        // 243
    if (updateInProgress === false) {                                                                                  // 244
        updateInProgress = true;                                                                                       // 245
        hooks.updateOffset(this);                                                                                      // 246
        updateInProgress = false;                                                                                      // 247
    }                                                                                                                  // 248
}                                                                                                                      // 249
                                                                                                                       // 250
function isMoment (obj) {                                                                                              // 251
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);                                     // 252
}                                                                                                                      // 253
                                                                                                                       // 254
function absFloor (number) {                                                                                           // 255
    if (number < 0) {                                                                                                  // 256
        // -0 -> 0                                                                                                     // 257
        return Math.ceil(number) || 0;                                                                                 // 258
    } else {                                                                                                           // 259
        return Math.floor(number);                                                                                     // 260
    }                                                                                                                  // 261
}                                                                                                                      // 262
                                                                                                                       // 263
function toInt(argumentForCoercion) {                                                                                  // 264
    var coercedNumber = +argumentForCoercion,                                                                          // 265
        value = 0;                                                                                                     // 266
                                                                                                                       // 267
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {                                                              // 268
        value = absFloor(coercedNumber);                                                                               // 269
    }                                                                                                                  // 270
                                                                                                                       // 271
    return value;                                                                                                      // 272
}                                                                                                                      // 273
                                                                                                                       // 274
// compare two arrays, return the number of differences                                                                // 275
function compareArrays(array1, array2, dontConvert) {                                                                  // 276
    var len = Math.min(array1.length, array2.length),                                                                  // 277
        lengthDiff = Math.abs(array1.length - array2.length),                                                          // 278
        diffs = 0,                                                                                                     // 279
        i;                                                                                                             // 280
    for (i = 0; i < len; i++) {                                                                                        // 281
        if ((dontConvert && array1[i] !== array2[i]) ||                                                                // 282
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {                                                 // 283
            diffs++;                                                                                                   // 284
        }                                                                                                              // 285
    }                                                                                                                  // 286
    return diffs + lengthDiff;                                                                                         // 287
}                                                                                                                      // 288
                                                                                                                       // 289
function warn(msg) {                                                                                                   // 290
    if (hooks.suppressDeprecationWarnings === false &&                                                                 // 291
            (typeof console !==  'undefined') && console.warn) {                                                       // 292
        console.warn('Deprecation warning: ' + msg);                                                                   // 293
    }                                                                                                                  // 294
}                                                                                                                      // 295
                                                                                                                       // 296
function deprecate(msg, fn) {                                                                                          // 297
    var firstTime = true;                                                                                              // 298
                                                                                                                       // 299
    return extend(function () {                                                                                        // 300
        if (hooks.deprecationHandler != null) {                                                                        // 301
            hooks.deprecationHandler(null, msg);                                                                       // 302
        }                                                                                                              // 303
        if (firstTime) {                                                                                               // 304
            var args = [];                                                                                             // 305
            var arg;                                                                                                   // 306
            for (var i = 0; i < arguments.length; i++) {                                                               // 307
                arg = '';                                                                                              // 308
                if (typeof arguments[i] === 'object') {                                                                // 309
                    arg += '\n[' + i + '] ';                                                                           // 310
                    for (var key in arguments[0]) {                                                                    // 311
                        arg += key + ': ' + arguments[0][key] + ', ';                                                  // 312
                    }                                                                                                  // 313
                    arg = arg.slice(0, -2); // Remove trailing comma and space                                         // 314
                } else {                                                                                               // 315
                    arg = arguments[i];                                                                                // 316
                }                                                                                                      // 317
                args.push(arg);                                                                                        // 318
            }                                                                                                          // 319
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);      // 320
            firstTime = false;                                                                                         // 321
        }                                                                                                              // 322
        return fn.apply(this, arguments);                                                                              // 323
    }, fn);                                                                                                            // 324
}                                                                                                                      // 325
                                                                                                                       // 326
var deprecations = {};                                                                                                 // 327
                                                                                                                       // 328
function deprecateSimple(name, msg) {                                                                                  // 329
    if (hooks.deprecationHandler != null) {                                                                            // 330
        hooks.deprecationHandler(name, msg);                                                                           // 331
    }                                                                                                                  // 332
    if (!deprecations[name]) {                                                                                         // 333
        warn(msg);                                                                                                     // 334
        deprecations[name] = true;                                                                                     // 335
    }                                                                                                                  // 336
}                                                                                                                      // 337
                                                                                                                       // 338
hooks.suppressDeprecationWarnings = false;                                                                             // 339
hooks.deprecationHandler = null;                                                                                       // 340
                                                                                                                       // 341
function isFunction(input) {                                                                                           // 342
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';                 // 343
}                                                                                                                      // 344
                                                                                                                       // 345
function set (config) {                                                                                                // 346
    var prop, i;                                                                                                       // 347
    for (i in config) {                                                                                                // 348
        prop = config[i];                                                                                              // 349
        if (isFunction(prop)) {                                                                                        // 350
            this[i] = prop;                                                                                            // 351
        } else {                                                                                                       // 352
            this['_' + i] = prop;                                                                                      // 353
        }                                                                                                              // 354
    }                                                                                                                  // 355
    this._config = config;                                                                                             // 356
    // Lenient ordinal parsing accepts just a number in addition to                                                    // 357
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.                                                  // 358
    // TODO: Remove "ordinalParse" fallback in next major release.                                                     // 359
    this._dayOfMonthOrdinalParseLenient = new RegExp(                                                                  // 360
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +                                           // 361
            '|' + (/\d{1,2}/).source);                                                                                 // 362
}                                                                                                                      // 363
                                                                                                                       // 364
function mergeConfigs(parentConfig, childConfig) {                                                                     // 365
    var res = extend({}, parentConfig), prop;                                                                          // 366
    for (prop in childConfig) {                                                                                        // 367
        if (hasOwnProp(childConfig, prop)) {                                                                           // 368
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {                                         // 369
                res[prop] = {};                                                                                        // 370
                extend(res[prop], parentConfig[prop]);                                                                 // 371
                extend(res[prop], childConfig[prop]);                                                                  // 372
            } else if (childConfig[prop] != null) {                                                                    // 373
                res[prop] = childConfig[prop];                                                                         // 374
            } else {                                                                                                   // 375
                delete res[prop];                                                                                      // 376
            }                                                                                                          // 377
        }                                                                                                              // 378
    }                                                                                                                  // 379
    for (prop in parentConfig) {                                                                                       // 380
        if (hasOwnProp(parentConfig, prop) &&                                                                          // 381
                !hasOwnProp(childConfig, prop) &&                                                                      // 382
                isObject(parentConfig[prop])) {                                                                        // 383
            // make sure changes to properties don't modify parent config                                              // 384
            res[prop] = extend({}, res[prop]);                                                                         // 385
        }                                                                                                              // 386
    }                                                                                                                  // 387
    return res;                                                                                                        // 388
}                                                                                                                      // 389
                                                                                                                       // 390
function Locale(config) {                                                                                              // 391
    if (config != null) {                                                                                              // 392
        this.set(config);                                                                                              // 393
    }                                                                                                                  // 394
}                                                                                                                      // 395
                                                                                                                       // 396
var keys;                                                                                                              // 397
                                                                                                                       // 398
if (Object.keys) {                                                                                                     // 399
    keys = Object.keys;                                                                                                // 400
} else {                                                                                                               // 401
    keys = function (obj) {                                                                                            // 402
        var i, res = [];                                                                                               // 403
        for (i in obj) {                                                                                               // 404
            if (hasOwnProp(obj, i)) {                                                                                  // 405
                res.push(i);                                                                                           // 406
            }                                                                                                          // 407
        }                                                                                                              // 408
        return res;                                                                                                    // 409
    };                                                                                                                 // 410
}                                                                                                                      // 411
                                                                                                                       // 412
var keys$1 = keys;                                                                                                     // 413
                                                                                                                       // 414
var defaultCalendar = {                                                                                                // 415
    sameDay : '[Today at] LT',                                                                                         // 416
    nextDay : '[Tomorrow at] LT',                                                                                      // 417
    nextWeek : 'dddd [at] LT',                                                                                         // 418
    lastDay : '[Yesterday at] LT',                                                                                     // 419
    lastWeek : '[Last] dddd [at] LT',                                                                                  // 420
    sameElse : 'L'                                                                                                     // 421
};                                                                                                                     // 422
                                                                                                                       // 423
function calendar (key, mom, now) {                                                                                    // 424
    var output = this._calendar[key] || this._calendar['sameElse'];                                                    // 425
    return isFunction(output) ? output.call(mom, now) : output;                                                        // 426
}                                                                                                                      // 427
                                                                                                                       // 428
var defaultLongDateFormat = {                                                                                          // 429
    LTS  : 'h:mm:ss A',                                                                                                // 430
    LT   : 'h:mm A',                                                                                                   // 431
    L    : 'MM/DD/YYYY',                                                                                               // 432
    LL   : 'MMMM D, YYYY',                                                                                             // 433
    LLL  : 'MMMM D, YYYY h:mm A',                                                                                      // 434
    LLLL : 'dddd, MMMM D, YYYY h:mm A'                                                                                 // 435
};                                                                                                                     // 436
                                                                                                                       // 437
function longDateFormat (key) {                                                                                        // 438
    var format = this._longDateFormat[key],                                                                            // 439
        formatUpper = this._longDateFormat[key.toUpperCase()];                                                         // 440
                                                                                                                       // 441
    if (format || !formatUpper) {                                                                                      // 442
        return format;                                                                                                 // 443
    }                                                                                                                  // 444
                                                                                                                       // 445
    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {                               // 446
        return val.slice(1);                                                                                           // 447
    });                                                                                                                // 448
                                                                                                                       // 449
    return this._longDateFormat[key];                                                                                  // 450
}                                                                                                                      // 451
                                                                                                                       // 452
var defaultInvalidDate = 'Invalid date';                                                                               // 453
                                                                                                                       // 454
function invalidDate () {                                                                                              // 455
    return this._invalidDate;                                                                                          // 456
}                                                                                                                      // 457
                                                                                                                       // 458
var defaultOrdinal = '%d';                                                                                             // 459
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;                                                                         // 460
                                                                                                                       // 461
function ordinal (number) {                                                                                            // 462
    return this._ordinal.replace('%d', number);                                                                        // 463
}                                                                                                                      // 464
                                                                                                                       // 465
var defaultRelativeTime = {                                                                                            // 466
    future : 'in %s',                                                                                                  // 467
    past   : '%s ago',                                                                                                 // 468
    s  : 'a few seconds',                                                                                              // 469
    ss : '%d seconds',                                                                                                 // 470
    m  : 'a minute',                                                                                                   // 471
    mm : '%d minutes',                                                                                                 // 472
    h  : 'an hour',                                                                                                    // 473
    hh : '%d hours',                                                                                                   // 474
    d  : 'a day',                                                                                                      // 475
    dd : '%d days',                                                                                                    // 476
    M  : 'a month',                                                                                                    // 477
    MM : '%d months',                                                                                                  // 478
    y  : 'a year',                                                                                                     // 479
    yy : '%d years'                                                                                                    // 480
};                                                                                                                     // 481
                                                                                                                       // 482
function relativeTime (number, withoutSuffix, string, isFuture) {                                                      // 483
    var output = this._relativeTime[string];                                                                           // 484
    return (isFunction(output)) ?                                                                                      // 485
        output(number, withoutSuffix, string, isFuture) :                                                              // 486
        output.replace(/%d/i, number);                                                                                 // 487
}                                                                                                                      // 488
                                                                                                                       // 489
function pastFuture (diff, output) {                                                                                   // 490
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];                                                     // 491
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);                                        // 492
}                                                                                                                      // 493
                                                                                                                       // 494
var aliases = {};                                                                                                      // 495
                                                                                                                       // 496
function addUnitAlias (unit, shorthand) {                                                                              // 497
    var lowerCase = unit.toLowerCase();                                                                                // 498
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;                                         // 499
}                                                                                                                      // 500
                                                                                                                       // 501
function normalizeUnits(units) {                                                                                       // 502
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;                     // 503
}                                                                                                                      // 504
                                                                                                                       // 505
function normalizeObjectUnits(inputObject) {                                                                           // 506
    var normalizedInput = {},                                                                                          // 507
        normalizedProp,                                                                                                // 508
        prop;                                                                                                          // 509
                                                                                                                       // 510
    for (prop in inputObject) {                                                                                        // 511
        if (hasOwnProp(inputObject, prop)) {                                                                           // 512
            normalizedProp = normalizeUnits(prop);                                                                     // 513
            if (normalizedProp) {                                                                                      // 514
                normalizedInput[normalizedProp] = inputObject[prop];                                                   // 515
            }                                                                                                          // 516
        }                                                                                                              // 517
    }                                                                                                                  // 518
                                                                                                                       // 519
    return normalizedInput;                                                                                            // 520
}                                                                                                                      // 521
                                                                                                                       // 522
var priorities = {};                                                                                                   // 523
                                                                                                                       // 524
function addUnitPriority(unit, priority) {                                                                             // 525
    priorities[unit] = priority;                                                                                       // 526
}                                                                                                                      // 527
                                                                                                                       // 528
function getPrioritizedUnits(unitsObj) {                                                                               // 529
    var units = [];                                                                                                    // 530
    for (var u in unitsObj) {                                                                                          // 531
        units.push({unit: u, priority: priorities[u]});                                                                // 532
    }                                                                                                                  // 533
    units.sort(function (a, b) {                                                                                       // 534
        return a.priority - b.priority;                                                                                // 535
    });                                                                                                                // 536
    return units;                                                                                                      // 537
}                                                                                                                      // 538
                                                                                                                       // 539
function makeGetSet (unit, keepTime) {                                                                                 // 540
    return function (value) {                                                                                          // 541
        if (value != null) {                                                                                           // 542
            set$1(this, unit, value);                                                                                  // 543
            hooks.updateOffset(this, keepTime);                                                                        // 544
            return this;                                                                                               // 545
        } else {                                                                                                       // 546
            return get(this, unit);                                                                                    // 547
        }                                                                                                              // 548
    };                                                                                                                 // 549
}                                                                                                                      // 550
                                                                                                                       // 551
function get (mom, unit) {                                                                                             // 552
    return mom.isValid() ?                                                                                             // 553
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;                                                      // 554
}                                                                                                                      // 555
                                                                                                                       // 556
function set$1 (mom, unit, value) {                                                                                    // 557
    if (mom.isValid()) {                                                                                               // 558
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);                                                       // 559
    }                                                                                                                  // 560
}                                                                                                                      // 561
                                                                                                                       // 562
// MOMENTS                                                                                                             // 563
                                                                                                                       // 564
function stringGet (units) {                                                                                           // 565
    units = normalizeUnits(units);                                                                                     // 566
    if (isFunction(this[units])) {                                                                                     // 567
        return this[units]();                                                                                          // 568
    }                                                                                                                  // 569
    return this;                                                                                                       // 570
}                                                                                                                      // 571
                                                                                                                       // 572
                                                                                                                       // 573
function stringSet (units, value) {                                                                                    // 574
    if (typeof units === 'object') {                                                                                   // 575
        units = normalizeObjectUnits(units);                                                                           // 576
        var prioritized = getPrioritizedUnits(units);                                                                  // 577
        for (var i = 0; i < prioritized.length; i++) {                                                                 // 578
            this[prioritized[i].unit](units[prioritized[i].unit]);                                                     // 579
        }                                                                                                              // 580
    } else {                                                                                                           // 581
        units = normalizeUnits(units);                                                                                 // 582
        if (isFunction(this[units])) {                                                                                 // 583
            return this[units](value);                                                                                 // 584
        }                                                                                                              // 585
    }                                                                                                                  // 586
    return this;                                                                                                       // 587
}                                                                                                                      // 588
                                                                                                                       // 589
function zeroFill(number, targetLength, forceSign) {                                                                   // 590
    var absNumber = '' + Math.abs(number),                                                                             // 591
        zerosToFill = targetLength - absNumber.length,                                                                 // 592
        sign = number >= 0;                                                                                            // 593
    return (sign ? (forceSign ? '+' : '') : '-') +                                                                     // 594
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;                                       // 595
}                                                                                                                      // 596
                                                                                                                       // 597
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
                                                                                                                       // 599
var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;                                              // 600
                                                                                                                       // 601
var formatFunctions = {};                                                                                              // 602
                                                                                                                       // 603
var formatTokenFunctions = {};                                                                                         // 604
                                                                                                                       // 605
// token:    'M'                                                                                                       // 606
// padded:   ['MM', 2]                                                                                                 // 607
// ordinal:  'Mo'                                                                                                      // 608
// callback: function () { this.month() + 1 }                                                                          // 609
function addFormatToken (token, padded, ordinal, callback) {                                                           // 610
    var func = callback;                                                                                               // 611
    if (typeof callback === 'string') {                                                                                // 612
        func = function () {                                                                                           // 613
            return this[callback]();                                                                                   // 614
        };                                                                                                             // 615
    }                                                                                                                  // 616
    if (token) {                                                                                                       // 617
        formatTokenFunctions[token] = func;                                                                            // 618
    }                                                                                                                  // 619
    if (padded) {                                                                                                      // 620
        formatTokenFunctions[padded[0]] = function () {                                                                // 621
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);                                        // 622
        };                                                                                                             // 623
    }                                                                                                                  // 624
    if (ordinal) {                                                                                                     // 625
        formatTokenFunctions[ordinal] = function () {                                                                  // 626
            return this.localeData().ordinal(func.apply(this, arguments), token);                                      // 627
        };                                                                                                             // 628
    }                                                                                                                  // 629
}                                                                                                                      // 630
                                                                                                                       // 631
function removeFormattingTokens(input) {                                                                               // 632
    if (input.match(/\[[\s\S]/)) {                                                                                     // 633
        return input.replace(/^\[|\]$/g, '');                                                                          // 634
    }                                                                                                                  // 635
    return input.replace(/\\/g, '');                                                                                   // 636
}                                                                                                                      // 637
                                                                                                                       // 638
function makeFormatFunction(format) {                                                                                  // 639
    var array = format.match(formattingTokens), i, length;                                                             // 640
                                                                                                                       // 641
    for (i = 0, length = array.length; i < length; i++) {                                                              // 642
        if (formatTokenFunctions[array[i]]) {                                                                          // 643
            array[i] = formatTokenFunctions[array[i]];                                                                 // 644
        } else {                                                                                                       // 645
            array[i] = removeFormattingTokens(array[i]);                                                               // 646
        }                                                                                                              // 647
    }                                                                                                                  // 648
                                                                                                                       // 649
    return function (mom) {                                                                                            // 650
        var output = '', i;                                                                                            // 651
        for (i = 0; i < length; i++) {                                                                                 // 652
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];                                    // 653
        }                                                                                                              // 654
        return output;                                                                                                 // 655
    };                                                                                                                 // 656
}                                                                                                                      // 657
                                                                                                                       // 658
// format date using native date object                                                                                // 659
function formatMoment(m, format) {                                                                                     // 660
    if (!m.isValid()) {                                                                                                // 661
        return m.localeData().invalidDate();                                                                           // 662
    }                                                                                                                  // 663
                                                                                                                       // 664
    format = expandFormat(format, m.localeData());                                                                     // 665
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);                                   // 666
                                                                                                                       // 667
    return formatFunctions[format](m);                                                                                 // 668
}                                                                                                                      // 669
                                                                                                                       // 670
function expandFormat(format, locale) {                                                                                // 671
    var i = 5;                                                                                                         // 672
                                                                                                                       // 673
    function replaceLongDateFormatTokens(input) {                                                                      // 674
        return locale.longDateFormat(input) || input;                                                                  // 675
    }                                                                                                                  // 676
                                                                                                                       // 677
    localFormattingTokens.lastIndex = 0;                                                                               // 678
    while (i >= 0 && localFormattingTokens.test(format)) {                                                             // 679
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);                                   // 680
        localFormattingTokens.lastIndex = 0;                                                                           // 681
        i -= 1;                                                                                                        // 682
    }                                                                                                                  // 683
                                                                                                                       // 684
    return format;                                                                                                     // 685
}                                                                                                                      // 686
                                                                                                                       // 687
var match1         = /\d/;            //       0 - 9                                                                   // 688
var match2         = /\d\d/;          //      00 - 99                                                                  // 689
var match3         = /\d{3}/;         //     000 - 999                                                                 // 690
var match4         = /\d{4}/;         //    0000 - 9999                                                                // 691
var match6         = /[+-]?\d{6}/;    // -999999 - 999999                                                              // 692
var match1to2      = /\d\d?/;         //       0 - 99                                                                  // 693
var match3to4      = /\d\d\d\d?/;     //     999 - 9999                                                                // 694
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999                                                              // 695
var match1to3      = /\d{1,3}/;       //       0 - 999                                                                 // 696
var match1to4      = /\d{1,4}/;       //       0 - 9999                                                                // 697
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999                                                              // 698
                                                                                                                       // 699
var matchUnsigned  = /\d+/;           //       0 - inf                                                                 // 700
var matchSigned    = /[+-]?\d+/;      //    -inf - inf                                                                 // 701
                                                                                                                       // 702
var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z                                           // 703
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z                            // 704
                                                                                                                       // 705
var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123                                                // 706
                                                                                                                       // 707
// any word (or two) characters or numbers including two/three word month in arabic.                                   // 708
// includes scottish gaelic two word and hyphenated months                                                             // 709
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
                                                                                                                       // 711
                                                                                                                       // 712
var regexes = {};                                                                                                      // 713
                                                                                                                       // 714
function addRegexToken (token, regex, strictRegex) {                                                                   // 715
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {                                     // 716
        return (isStrict && strictRegex) ? strictRegex : regex;                                                        // 717
    };                                                                                                                 // 718
}                                                                                                                      // 719
                                                                                                                       // 720
function getParseRegexForToken (token, config) {                                                                       // 721
    if (!hasOwnProp(regexes, token)) {                                                                                 // 722
        return new RegExp(unescapeFormat(token));                                                                      // 723
    }                                                                                                                  // 724
                                                                                                                       // 725
    return regexes[token](config._strict, config._locale);                                                             // 726
}                                                                                                                      // 727
                                                                                                                       // 728
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript                // 729
function unescapeFormat(s) {                                                                                           // 730
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;                                                                                   // 732
    }));                                                                                                               // 733
}                                                                                                                      // 734
                                                                                                                       // 735
function regexEscape(s) {                                                                                              // 736
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');                                                                // 737
}                                                                                                                      // 738
                                                                                                                       // 739
var tokens = {};                                                                                                       // 740
                                                                                                                       // 741
function addParseToken (token, callback) {                                                                             // 742
    var i, func = callback;                                                                                            // 743
    if (typeof token === 'string') {                                                                                   // 744
        token = [token];                                                                                               // 745
    }                                                                                                                  // 746
    if (isNumber(callback)) {                                                                                          // 747
        func = function (input, array) {                                                                               // 748
            array[callback] = toInt(input);                                                                            // 749
        };                                                                                                             // 750
    }                                                                                                                  // 751
    for (i = 0; i < token.length; i++) {                                                                               // 752
        tokens[token[i]] = func;                                                                                       // 753
    }                                                                                                                  // 754
}                                                                                                                      // 755
                                                                                                                       // 756
function addWeekParseToken (token, callback) {                                                                         // 757
    addParseToken(token, function (input, array, config, token) {                                                      // 758
        config._w = config._w || {};                                                                                   // 759
        callback(input, config._w, config, token);                                                                     // 760
    });                                                                                                                // 761
}                                                                                                                      // 762
                                                                                                                       // 763
function addTimeToArrayFromToken(token, input, config) {                                                               // 764
    if (input != null && hasOwnProp(tokens, token)) {                                                                  // 765
        tokens[token](input, config._a, config, token);                                                                // 766
    }                                                                                                                  // 767
}                                                                                                                      // 768
                                                                                                                       // 769
var YEAR = 0;                                                                                                          // 770
var MONTH = 1;                                                                                                         // 771
var DATE = 2;                                                                                                          // 772
var HOUR = 3;                                                                                                          // 773
var MINUTE = 4;                                                                                                        // 774
var SECOND = 5;                                                                                                        // 775
var MILLISECOND = 6;                                                                                                   // 776
var WEEK = 7;                                                                                                          // 777
var WEEKDAY = 8;                                                                                                       // 778
                                                                                                                       // 779
var indexOf;                                                                                                           // 780
                                                                                                                       // 781
if (Array.prototype.indexOf) {                                                                                         // 782
    indexOf = Array.prototype.indexOf;                                                                                 // 783
} else {                                                                                                               // 784
    indexOf = function (o) {                                                                                           // 785
        // I know                                                                                                      // 786
        var i;                                                                                                         // 787
        for (i = 0; i < this.length; ++i) {                                                                            // 788
            if (this[i] === o) {                                                                                       // 789
                return i;                                                                                              // 790
            }                                                                                                          // 791
        }                                                                                                              // 792
        return -1;                                                                                                     // 793
    };                                                                                                                 // 794
}                                                                                                                      // 795
                                                                                                                       // 796
var indexOf$1 = indexOf;                                                                                               // 797
                                                                                                                       // 798
function daysInMonth(year, month) {                                                                                    // 799
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();                                                        // 800
}                                                                                                                      // 801
                                                                                                                       // 802
// FORMATTING                                                                                                          // 803
                                                                                                                       // 804
addFormatToken('M', ['MM', 2], 'Mo', function () {                                                                     // 805
    return this.month() + 1;                                                                                           // 806
});                                                                                                                    // 807
                                                                                                                       // 808
addFormatToken('MMM', 0, 0, function (format) {                                                                        // 809
    return this.localeData().monthsShort(this, format);                                                                // 810
});                                                                                                                    // 811
                                                                                                                       // 812
addFormatToken('MMMM', 0, 0, function (format) {                                                                       // 813
    return this.localeData().months(this, format);                                                                     // 814
});                                                                                                                    // 815
                                                                                                                       // 816
// ALIASES                                                                                                             // 817
                                                                                                                       // 818
addUnitAlias('month', 'M');                                                                                            // 819
                                                                                                                       // 820
// PRIORITY                                                                                                            // 821
                                                                                                                       // 822
addUnitPriority('month', 8);                                                                                           // 823
                                                                                                                       // 824
// PARSING                                                                                                             // 825
                                                                                                                       // 826
addRegexToken('M',    match1to2);                                                                                      // 827
addRegexToken('MM',   match1to2, match2);                                                                              // 828
addRegexToken('MMM',  function (isStrict, locale) {                                                                    // 829
    return locale.monthsShortRegex(isStrict);                                                                          // 830
});                                                                                                                    // 831
addRegexToken('MMMM', function (isStrict, locale) {                                                                    // 832
    return locale.monthsRegex(isStrict);                                                                               // 833
});                                                                                                                    // 834
                                                                                                                       // 835
addParseToken(['M', 'MM'], function (input, array) {                                                                   // 836
    array[MONTH] = toInt(input) - 1;                                                                                   // 837
});                                                                                                                    // 838
                                                                                                                       // 839
addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {                                                // 840
    var month = config._locale.monthsParse(input, token, config._strict);                                              // 841
    // if we didn't find a month name, mark the date as invalid.                                                       // 842
    if (month != null) {                                                                                               // 843
        array[MONTH] = month;                                                                                          // 844
    } else {                                                                                                           // 845
        getParsingFlags(config).invalidMonth = input;                                                                  // 846
    }                                                                                                                  // 847
});                                                                                                                    // 848
                                                                                                                       // 849
// LOCALES                                                                                                             // 850
                                                                                                                       // 851
var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;                                                                // 852
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {                                                                                    // 854
    if (!m) {                                                                                                          // 855
        return isArray(this._months) ? this._months :                                                                  // 856
            this._months['standalone'];                                                                                // 857
    }                                                                                                                  // 858
    return isArray(this._months) ? this._months[m.month()] :                                                           // 859
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];   // 860
}                                                                                                                      // 861
                                                                                                                       // 862
var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');                           // 863
function localeMonthsShort (m, format) {                                                                               // 864
    if (!m) {                                                                                                          // 865
        return isArray(this._monthsShort) ? this._monthsShort :                                                        // 866
            this._monthsShort['standalone'];                                                                           // 867
    }                                                                                                                  // 868
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :                                                 // 869
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];                         // 870
}                                                                                                                      // 871
                                                                                                                       // 872
function handleStrictParse(monthName, format, strict) {                                                                // 873
    var i, ii, mom, llc = monthName.toLocaleLowerCase();                                                               // 874
    if (!this._monthsParse) {                                                                                          // 875
        // this is not used                                                                                            // 876
        this._monthsParse = [];                                                                                        // 877
        this._longMonthsParse = [];                                                                                    // 878
        this._shortMonthsParse = [];                                                                                   // 879
        for (i = 0; i < 12; ++i) {                                                                                     // 880
            mom = createUTC([2000, i]);                                                                                // 881
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();                                 // 882
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();                                       // 883
        }                                                                                                              // 884
    }                                                                                                                  // 885
                                                                                                                       // 886
    if (strict) {                                                                                                      // 887
        if (format === 'MMM') {                                                                                        // 888
            ii = indexOf$1.call(this._shortMonthsParse, llc);                                                          // 889
            return ii !== -1 ? ii : null;                                                                              // 890
        } else {                                                                                                       // 891
            ii = indexOf$1.call(this._longMonthsParse, llc);                                                           // 892
            return ii !== -1 ? ii : null;                                                                              // 893
        }                                                                                                              // 894
    } else {                                                                                                           // 895
        if (format === 'MMM') {                                                                                        // 896
            ii = indexOf$1.call(this._shortMonthsParse, llc);                                                          // 897
            if (ii !== -1) {                                                                                           // 898
                return ii;                                                                                             // 899
            }                                                                                                          // 900
            ii = indexOf$1.call(this._longMonthsParse, llc);                                                           // 901
            return ii !== -1 ? ii : null;                                                                              // 902
        } else {                                                                                                       // 903
            ii = indexOf$1.call(this._longMonthsParse, llc);                                                           // 904
            if (ii !== -1) {                                                                                           // 905
                return ii;                                                                                             // 906
            }                                                                                                          // 907
            ii = indexOf$1.call(this._shortMonthsParse, llc);                                                          // 908
            return ii !== -1 ? ii : null;                                                                              // 909
        }                                                                                                              // 910
    }                                                                                                                  // 911
}                                                                                                                      // 912
                                                                                                                       // 913
function localeMonthsParse (monthName, format, strict) {                                                               // 914
    var i, mom, regex;                                                                                                 // 915
                                                                                                                       // 916
    if (this._monthsParseExact) {                                                                                      // 917
        return handleStrictParse.call(this, monthName, format, strict);                                                // 918
    }                                                                                                                  // 919
                                                                                                                       // 920
    if (!this._monthsParse) {                                                                                          // 921
        this._monthsParse = [];                                                                                        // 922
        this._longMonthsParse = [];                                                                                    // 923
        this._shortMonthsParse = [];                                                                                   // 924
    }                                                                                                                  // 925
                                                                                                                       // 926
    // TODO: add sorting                                                                                               // 927
    // Sorting makes sure if one month (or abbr) is a prefix of another                                                // 928
    // see sorting in computeMonthsParse                                                                               // 929
    for (i = 0; i < 12; i++) {                                                                                         // 930
        // make the regex if we don't have it already                                                                  // 931
        mom = createUTC([2000, i]);                                                                                    // 932
        if (strict && !this._longMonthsParse[i]) {                                                                     // 933
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');             // 934
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');       // 935
        }                                                                                                              // 936
        if (!strict && !this._monthsParse[i]) {                                                                        // 937
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');                                     // 938
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');                                            // 939
        }                                                                                                              // 940
        // test the regex                                                                                              // 941
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {                                 // 942
            return i;                                                                                                  // 943
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {                          // 944
            return i;                                                                                                  // 945
        } else if (!strict && this._monthsParse[i].test(monthName)) {                                                  // 946
            return i;                                                                                                  // 947
        }                                                                                                              // 948
    }                                                                                                                  // 949
}                                                                                                                      // 950
                                                                                                                       // 951
// MOMENTS                                                                                                             // 952
                                                                                                                       // 953
function setMonth (mom, value) {                                                                                       // 954
    var dayOfMonth;                                                                                                    // 955
                                                                                                                       // 956
    if (!mom.isValid()) {                                                                                              // 957
        // No op                                                                                                       // 958
        return mom;                                                                                                    // 959
    }                                                                                                                  // 960
                                                                                                                       // 961
    if (typeof value === 'string') {                                                                                   // 962
        if (/^\d+$/.test(value)) {                                                                                     // 963
            value = toInt(value);                                                                                      // 964
        } else {                                                                                                       // 965
            value = mom.localeData().monthsParse(value);                                                               // 966
            // TODO: Another silent failure?                                                                           // 967
            if (!isNumber(value)) {                                                                                    // 968
                return mom;                                                                                            // 969
            }                                                                                                          // 970
        }                                                                                                              // 971
    }                                                                                                                  // 972
                                                                                                                       // 973
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));                                                 // 974
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);                                            // 975
    return mom;                                                                                                        // 976
}                                                                                                                      // 977
                                                                                                                       // 978
function getSetMonth (value) {                                                                                         // 979
    if (value != null) {                                                                                               // 980
        setMonth(this, value);                                                                                         // 981
        hooks.updateOffset(this, true);                                                                                // 982
        return this;                                                                                                   // 983
    } else {                                                                                                           // 984
        return get(this, 'Month');                                                                                     // 985
    }                                                                                                                  // 986
}                                                                                                                      // 987
                                                                                                                       // 988
function getDaysInMonth () {                                                                                           // 989
    return daysInMonth(this.year(), this.month());                                                                     // 990
}                                                                                                                      // 991
                                                                                                                       // 992
var defaultMonthsShortRegex = matchWord;                                                                               // 993
function monthsShortRegex (isStrict) {                                                                                 // 994
    if (this._monthsParseExact) {                                                                                      // 995
        if (!hasOwnProp(this, '_monthsRegex')) {                                                                       // 996
            computeMonthsParse.call(this);                                                                             // 997
        }                                                                                                              // 998
        if (isStrict) {                                                                                                // 999
            return this._monthsShortStrictRegex;                                                                       // 1000
        } else {                                                                                                       // 1001
            return this._monthsShortRegex;                                                                             // 1002
        }                                                                                                              // 1003
    } else {                                                                                                           // 1004
        if (!hasOwnProp(this, '_monthsShortRegex')) {                                                                  // 1005
            this._monthsShortRegex = defaultMonthsShortRegex;                                                          // 1006
        }                                                                                                              // 1007
        return this._monthsShortStrictRegex && isStrict ?                                                              // 1008
            this._monthsShortStrictRegex : this._monthsShortRegex;                                                     // 1009
    }                                                                                                                  // 1010
}                                                                                                                      // 1011
                                                                                                                       // 1012
var defaultMonthsRegex = matchWord;                                                                                    // 1013
function monthsRegex (isStrict) {                                                                                      // 1014
    if (this._monthsParseExact) {                                                                                      // 1015
        if (!hasOwnProp(this, '_monthsRegex')) {                                                                       // 1016
            computeMonthsParse.call(this);                                                                             // 1017
        }                                                                                                              // 1018
        if (isStrict) {                                                                                                // 1019
            return this._monthsStrictRegex;                                                                            // 1020
        } else {                                                                                                       // 1021
            return this._monthsRegex;                                                                                  // 1022
        }                                                                                                              // 1023
    } else {                                                                                                           // 1024
        if (!hasOwnProp(this, '_monthsRegex')) {                                                                       // 1025
            this._monthsRegex = defaultMonthsRegex;                                                                    // 1026
        }                                                                                                              // 1027
        return this._monthsStrictRegex && isStrict ?                                                                   // 1028
            this._monthsStrictRegex : this._monthsRegex;                                                               // 1029
    }                                                                                                                  // 1030
}                                                                                                                      // 1031
                                                                                                                       // 1032
function computeMonthsParse () {                                                                                       // 1033
    function cmpLenRev(a, b) {                                                                                         // 1034
        return b.length - a.length;                                                                                    // 1035
    }                                                                                                                  // 1036
                                                                                                                       // 1037
    var shortPieces = [], longPieces = [], mixedPieces = [],                                                           // 1038
        i, mom;                                                                                                        // 1039
    for (i = 0; i < 12; i++) {                                                                                         // 1040
        // make the regex if we don't have it already                                                                  // 1041
        mom = createUTC([2000, i]);                                                                                    // 1042
        shortPieces.push(this.monthsShort(mom, ''));                                                                   // 1043
        longPieces.push(this.months(mom, ''));                                                                         // 1044
        mixedPieces.push(this.months(mom, ''));                                                                        // 1045
        mixedPieces.push(this.monthsShort(mom, ''));                                                                   // 1046
    }                                                                                                                  // 1047
    // Sorting makes sure if one month (or abbr) is a prefix of another it                                             // 1048
    // will match the longer piece.                                                                                    // 1049
    shortPieces.sort(cmpLenRev);                                                                                       // 1050
    longPieces.sort(cmpLenRev);                                                                                        // 1051
    mixedPieces.sort(cmpLenRev);                                                                                       // 1052
    for (i = 0; i < 12; i++) {                                                                                         // 1053
        shortPieces[i] = regexEscape(shortPieces[i]);                                                                  // 1054
        longPieces[i] = regexEscape(longPieces[i]);                                                                    // 1055
    }                                                                                                                  // 1056
    for (i = 0; i < 24; i++) {                                                                                         // 1057
        mixedPieces[i] = regexEscape(mixedPieces[i]);                                                                  // 1058
    }                                                                                                                  // 1059
                                                                                                                       // 1060
    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');                                           // 1061
    this._monthsShortRegex = this._monthsRegex;                                                                        // 1062
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');                                      // 1063
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');                                // 1064
}                                                                                                                      // 1065
                                                                                                                       // 1066
// FORMATTING                                                                                                          // 1067
                                                                                                                       // 1068
addFormatToken('Y', 0, 0, function () {                                                                                // 1069
    var y = this.year();                                                                                               // 1070
    return y <= 9999 ? '' + y : '+' + y;                                                                               // 1071
});                                                                                                                    // 1072
                                                                                                                       // 1073
addFormatToken(0, ['YY', 2], 0, function () {                                                                          // 1074
    return this.year() % 100;                                                                                          // 1075
});                                                                                                                    // 1076
                                                                                                                       // 1077
addFormatToken(0, ['YYYY',   4],       0, 'year');                                                                     // 1078
addFormatToken(0, ['YYYYY',  5],       0, 'year');                                                                     // 1079
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');                                                                     // 1080
                                                                                                                       // 1081
// ALIASES                                                                                                             // 1082
                                                                                                                       // 1083
addUnitAlias('year', 'y');                                                                                             // 1084
                                                                                                                       // 1085
// PRIORITIES                                                                                                          // 1086
                                                                                                                       // 1087
addUnitPriority('year', 1);                                                                                            // 1088
                                                                                                                       // 1089
// PARSING                                                                                                             // 1090
                                                                                                                       // 1091
addRegexToken('Y',      matchSigned);                                                                                  // 1092
addRegexToken('YY',     match1to2, match2);                                                                            // 1093
addRegexToken('YYYY',   match1to4, match4);                                                                            // 1094
addRegexToken('YYYYY',  match1to6, match6);                                                                            // 1095
addRegexToken('YYYYYY', match1to6, match6);                                                                            // 1096
                                                                                                                       // 1097
addParseToken(['YYYYY', 'YYYYYY'], YEAR);                                                                              // 1098
addParseToken('YYYY', function (input, array) {                                                                        // 1099
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);                                  // 1100
});                                                                                                                    // 1101
addParseToken('YY', function (input, array) {                                                                          // 1102
    array[YEAR] = hooks.parseTwoDigitYear(input);                                                                      // 1103
});                                                                                                                    // 1104
addParseToken('Y', function (input, array) {                                                                           // 1105
    array[YEAR] = parseInt(input, 10);                                                                                 // 1106
});                                                                                                                    // 1107
                                                                                                                       // 1108
// HELPERS                                                                                                             // 1109
                                                                                                                       // 1110
function daysInYear(year) {                                                                                            // 1111
    return isLeapYear(year) ? 366 : 365;                                                                               // 1112
}                                                                                                                      // 1113
                                                                                                                       // 1114
function isLeapYear(year) {                                                                                            // 1115
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;                                                   // 1116
}                                                                                                                      // 1117
                                                                                                                       // 1118
// HOOKS                                                                                                               // 1119
                                                                                                                       // 1120
hooks.parseTwoDigitYear = function (input) {                                                                           // 1121
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);                                                           // 1122
};                                                                                                                     // 1123
                                                                                                                       // 1124
// MOMENTS                                                                                                             // 1125
                                                                                                                       // 1126
var getSetYear = makeGetSet('FullYear', true);                                                                         // 1127
                                                                                                                       // 1128
function getIsLeapYear () {                                                                                            // 1129
    return isLeapYear(this.year());                                                                                    // 1130
}                                                                                                                      // 1131
                                                                                                                       // 1132
function createDate (y, m, d, h, M, s, ms) {                                                                           // 1133
    // can't just apply() to create a date:                                                                            // 1134
    // https://stackoverflow.com/q/181348                                                                              // 1135
    var date = new Date(y, m, d, h, M, s, ms);                                                                         // 1136
                                                                                                                       // 1137
    // the date constructor remaps years 0-99 to 1900-1999                                                             // 1138
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {                                                           // 1139
        date.setFullYear(y);                                                                                           // 1140
    }                                                                                                                  // 1141
    return date;                                                                                                       // 1142
}                                                                                                                      // 1143
                                                                                                                       // 1144
function createUTCDate (y) {                                                                                           // 1145
    var date = new Date(Date.UTC.apply(null, arguments));                                                              // 1146
                                                                                                                       // 1147
    // the Date.UTC function remaps years 0-99 to 1900-1999                                                            // 1148
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {                                                        // 1149
        date.setUTCFullYear(y);                                                                                        // 1150
    }                                                                                                                  // 1151
    return date;                                                                                                       // 1152
}                                                                                                                      // 1153
                                                                                                                       // 1154
// start-of-first-week - start-of-year                                                                                 // 1155
function firstWeekOffset(year, dow, doy) {                                                                             // 1156
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)                        // 1157
        fwd = 7 + dow - doy,                                                                                           // 1158
        // first-week day local weekday -- which local weekday is fwd                                                  // 1159
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;                                               // 1160
                                                                                                                       // 1161
    return -fwdlw + fwd - 1;                                                                                           // 1162
}                                                                                                                      // 1163
                                                                                                                       // 1164
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday            // 1165
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {                                                           // 1166
    var localWeekday = (7 + weekday - dow) % 7,                                                                        // 1167
        weekOffset = firstWeekOffset(year, dow, doy),                                                                  // 1168
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,                                                    // 1169
        resYear, resDayOfYear;                                                                                         // 1170
                                                                                                                       // 1171
    if (dayOfYear <= 0) {                                                                                              // 1172
        resYear = year - 1;                                                                                            // 1173
        resDayOfYear = daysInYear(resYear) + dayOfYear;                                                                // 1174
    } else if (dayOfYear > daysInYear(year)) {                                                                         // 1175
        resYear = year + 1;                                                                                            // 1176
        resDayOfYear = dayOfYear - daysInYear(year);                                                                   // 1177
    } else {                                                                                                           // 1178
        resYear = year;                                                                                                // 1179
        resDayOfYear = dayOfYear;                                                                                      // 1180
    }                                                                                                                  // 1181
                                                                                                                       // 1182
    return {                                                                                                           // 1183
        year: resYear,                                                                                                 // 1184
        dayOfYear: resDayOfYear                                                                                        // 1185
    };                                                                                                                 // 1186
}                                                                                                                      // 1187
                                                                                                                       // 1188
function weekOfYear(mom, dow, doy) {                                                                                   // 1189
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),                                                            // 1190
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,                                                 // 1191
        resWeek, resYear;                                                                                              // 1192
                                                                                                                       // 1193
    if (week < 1) {                                                                                                    // 1194
        resYear = mom.year() - 1;                                                                                      // 1195
        resWeek = week + weeksInYear(resYear, dow, doy);                                                               // 1196
    } else if (week > weeksInYear(mom.year(), dow, doy)) {                                                             // 1197
        resWeek = week - weeksInYear(mom.year(), dow, doy);                                                            // 1198
        resYear = mom.year() + 1;                                                                                      // 1199
    } else {                                                                                                           // 1200
        resYear = mom.year();                                                                                          // 1201
        resWeek = week;                                                                                                // 1202
    }                                                                                                                  // 1203
                                                                                                                       // 1204
    return {                                                                                                           // 1205
        week: resWeek,                                                                                                 // 1206
        year: resYear                                                                                                  // 1207
    };                                                                                                                 // 1208
}                                                                                                                      // 1209
                                                                                                                       // 1210
function weeksInYear(year, dow, doy) {                                                                                 // 1211
    var weekOffset = firstWeekOffset(year, dow, doy),                                                                  // 1212
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);                                                          // 1213
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;                                                       // 1214
}                                                                                                                      // 1215
                                                                                                                       // 1216
// FORMATTING                                                                                                          // 1217
                                                                                                                       // 1218
addFormatToken('w', ['ww', 2], 'wo', 'week');                                                                          // 1219
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');                                                                       // 1220
                                                                                                                       // 1221
// ALIASES                                                                                                             // 1222
                                                                                                                       // 1223
addUnitAlias('week', 'w');                                                                                             // 1224
addUnitAlias('isoWeek', 'W');                                                                                          // 1225
                                                                                                                       // 1226
// PRIORITIES                                                                                                          // 1227
                                                                                                                       // 1228
addUnitPriority('week', 5);                                                                                            // 1229
addUnitPriority('isoWeek', 5);                                                                                         // 1230
                                                                                                                       // 1231
// PARSING                                                                                                             // 1232
                                                                                                                       // 1233
addRegexToken('w',  match1to2);                                                                                        // 1234
addRegexToken('ww', match1to2, match2);                                                                                // 1235
addRegexToken('W',  match1to2);                                                                                        // 1236
addRegexToken('WW', match1to2, match2);                                                                                // 1237
                                                                                                                       // 1238
addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {                                      // 1239
    week[token.substr(0, 1)] = toInt(input);                                                                           // 1240
});                                                                                                                    // 1241
                                                                                                                       // 1242
// HELPERS                                                                                                             // 1243
                                                                                                                       // 1244
// LOCALES                                                                                                             // 1245
                                                                                                                       // 1246
function localeWeek (mom) {                                                                                            // 1247
    return weekOfYear(mom, this._week.dow, this._week.doy).week;                                                       // 1248
}                                                                                                                      // 1249
                                                                                                                       // 1250
var defaultLocaleWeek = {                                                                                              // 1251
    dow : 0, // Sunday is the first day of the week.                                                                   // 1252
    doy : 6  // The week that contains Jan 1st is the first week of the year.                                          // 1253
};                                                                                                                     // 1254
                                                                                                                       // 1255
function localeFirstDayOfWeek () {                                                                                     // 1256
    return this._week.dow;                                                                                             // 1257
}                                                                                                                      // 1258
                                                                                                                       // 1259
function localeFirstDayOfYear () {                                                                                     // 1260
    return this._week.doy;                                                                                             // 1261
}                                                                                                                      // 1262
                                                                                                                       // 1263
// MOMENTS                                                                                                             // 1264
                                                                                                                       // 1265
function getSetWeek (input) {                                                                                          // 1266
    var week = this.localeData().week(this);                                                                           // 1267
    return input == null ? week : this.add((input - week) * 7, 'd');                                                   // 1268
}                                                                                                                      // 1269
                                                                                                                       // 1270
function getSetISOWeek (input) {                                                                                       // 1271
    var week = weekOfYear(this, 1, 4).week;                                                                            // 1272
    return input == null ? week : this.add((input - week) * 7, 'd');                                                   // 1273
}                                                                                                                      // 1274
                                                                                                                       // 1275
// FORMATTING                                                                                                          // 1276
                                                                                                                       // 1277
addFormatToken('d', 0, 'do', 'day');                                                                                   // 1278
                                                                                                                       // 1279
addFormatToken('dd', 0, 0, function (format) {                                                                         // 1280
    return this.localeData().weekdaysMin(this, format);                                                                // 1281
});                                                                                                                    // 1282
                                                                                                                       // 1283
addFormatToken('ddd', 0, 0, function (format) {                                                                        // 1284
    return this.localeData().weekdaysShort(this, format);                                                              // 1285
});                                                                                                                    // 1286
                                                                                                                       // 1287
addFormatToken('dddd', 0, 0, function (format) {                                                                       // 1288
    return this.localeData().weekdays(this, format);                                                                   // 1289
});                                                                                                                    // 1290
                                                                                                                       // 1291
addFormatToken('e', 0, 0, 'weekday');                                                                                  // 1292
addFormatToken('E', 0, 0, 'isoWeekday');                                                                               // 1293
                                                                                                                       // 1294
// ALIASES                                                                                                             // 1295
                                                                                                                       // 1296
addUnitAlias('day', 'd');                                                                                              // 1297
addUnitAlias('weekday', 'e');                                                                                          // 1298
addUnitAlias('isoWeekday', 'E');                                                                                       // 1299
                                                                                                                       // 1300
// PRIORITY                                                                                                            // 1301
addUnitPriority('day', 11);                                                                                            // 1302
addUnitPriority('weekday', 11);                                                                                        // 1303
addUnitPriority('isoWeekday', 11);                                                                                     // 1304
                                                                                                                       // 1305
// PARSING                                                                                                             // 1306
                                                                                                                       // 1307
addRegexToken('d',    match1to2);                                                                                      // 1308
addRegexToken('e',    match1to2);                                                                                      // 1309
addRegexToken('E',    match1to2);                                                                                      // 1310
addRegexToken('dd',   function (isStrict, locale) {                                                                    // 1311
    return locale.weekdaysMinRegex(isStrict);                                                                          // 1312
});                                                                                                                    // 1313
addRegexToken('ddd',   function (isStrict, locale) {                                                                   // 1314
    return locale.weekdaysShortRegex(isStrict);                                                                        // 1315
});                                                                                                                    // 1316
addRegexToken('dddd',   function (isStrict, locale) {                                                                  // 1317
    return locale.weekdaysRegex(isStrict);                                                                             // 1318
});                                                                                                                    // 1319
                                                                                                                       // 1320
addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {                                       // 1321
    var weekday = config._locale.weekdaysParse(input, token, config._strict);                                          // 1322
    // if we didn't get a weekday name, mark the date as invalid                                                       // 1323
    if (weekday != null) {                                                                                             // 1324
        week.d = weekday;                                                                                              // 1325
    } else {                                                                                                           // 1326
        getParsingFlags(config).invalidWeekday = input;                                                                // 1327
    }                                                                                                                  // 1328
});                                                                                                                    // 1329
                                                                                                                       // 1330
addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {                                             // 1331
    week[token] = toInt(input);                                                                                        // 1332
});                                                                                                                    // 1333
                                                                                                                       // 1334
// HELPERS                                                                                                             // 1335
                                                                                                                       // 1336
function parseWeekday(input, locale) {                                                                                 // 1337
    if (typeof input !== 'string') {                                                                                   // 1338
        return input;                                                                                                  // 1339
    }                                                                                                                  // 1340
                                                                                                                       // 1341
    if (!isNaN(input)) {                                                                                               // 1342
        return parseInt(input, 10);                                                                                    // 1343
    }                                                                                                                  // 1344
                                                                                                                       // 1345
    input = locale.weekdaysParse(input);                                                                               // 1346
    if (typeof input === 'number') {                                                                                   // 1347
        return input;                                                                                                  // 1348
    }                                                                                                                  // 1349
                                                                                                                       // 1350
    return null;                                                                                                       // 1351
}                                                                                                                      // 1352
                                                                                                                       // 1353
function parseIsoWeekday(input, locale) {                                                                              // 1354
    if (typeof input === 'string') {                                                                                   // 1355
        return locale.weekdaysParse(input) % 7 || 7;                                                                   // 1356
    }                                                                                                                  // 1357
    return isNaN(input) ? null : input;                                                                                // 1358
}                                                                                                                      // 1359
                                                                                                                       // 1360
// LOCALES                                                                                                             // 1361
                                                                                                                       // 1362
var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');                     // 1363
function localeWeekdays (m, format) {                                                                                  // 1364
    if (!m) {                                                                                                          // 1365
        return isArray(this._weekdays) ? this._weekdays :                                                              // 1366
            this._weekdays['standalone'];                                                                              // 1367
    }                                                                                                                  // 1368
    return isArray(this._weekdays) ? this._weekdays[m.day()] :                                                         // 1369
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];                       // 1370
}                                                                                                                      // 1371
                                                                                                                       // 1372
var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');                                             // 1373
function localeWeekdaysShort (m) {                                                                                     // 1374
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;                                                   // 1375
}                                                                                                                      // 1376
                                                                                                                       // 1377
var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');                                                      // 1378
function localeWeekdaysMin (m) {                                                                                       // 1379
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;                                                       // 1380
}                                                                                                                      // 1381
                                                                                                                       // 1382
function handleStrictParse$1(weekdayName, format, strict) {                                                            // 1383
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();                                                             // 1384
    if (!this._weekdaysParse) {                                                                                        // 1385
        this._weekdaysParse = [];                                                                                      // 1386
        this._shortWeekdaysParse = [];                                                                                 // 1387
        this._minWeekdaysParse = [];                                                                                   // 1388
                                                                                                                       // 1389
        for (i = 0; i < 7; ++i) {                                                                                      // 1390
            mom = createUTC([2000, 1]).day(i);                                                                         // 1391
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();                                 // 1392
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();                             // 1393
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();                                       // 1394
        }                                                                                                              // 1395
    }                                                                                                                  // 1396
                                                                                                                       // 1397
    if (strict) {                                                                                                      // 1398
        if (format === 'dddd') {                                                                                       // 1399
            ii = indexOf$1.call(this._weekdaysParse, llc);                                                             // 1400
            return ii !== -1 ? ii : null;                                                                              // 1401
        } else if (format === 'ddd') {                                                                                 // 1402
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);                                                        // 1403
            return ii !== -1 ? ii : null;                                                                              // 1404
        } else {                                                                                                       // 1405
            ii = indexOf$1.call(this._minWeekdaysParse, llc);                                                          // 1406
            return ii !== -1 ? ii : null;                                                                              // 1407
        }                                                                                                              // 1408
    } else {                                                                                                           // 1409
        if (format === 'dddd') {                                                                                       // 1410
            ii = indexOf$1.call(this._weekdaysParse, llc);                                                             // 1411
            if (ii !== -1) {                                                                                           // 1412
                return ii;                                                                                             // 1413
            }                                                                                                          // 1414
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);                                                        // 1415
            if (ii !== -1) {                                                                                           // 1416
                return ii;                                                                                             // 1417
            }                                                                                                          // 1418
            ii = indexOf$1.call(this._minWeekdaysParse, llc);                                                          // 1419
            return ii !== -1 ? ii : null;                                                                              // 1420
        } else if (format === 'ddd') {                                                                                 // 1421
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);                                                        // 1422
            if (ii !== -1) {                                                                                           // 1423
                return ii;                                                                                             // 1424
            }                                                                                                          // 1425
            ii = indexOf$1.call(this._weekdaysParse, llc);                                                             // 1426
            if (ii !== -1) {                                                                                           // 1427
                return ii;                                                                                             // 1428
            }                                                                                                          // 1429
            ii = indexOf$1.call(this._minWeekdaysParse, llc);                                                          // 1430
            return ii !== -1 ? ii : null;                                                                              // 1431
        } else {                                                                                                       // 1432
            ii = indexOf$1.call(this._minWeekdaysParse, llc);                                                          // 1433
            if (ii !== -1) {                                                                                           // 1434
                return ii;                                                                                             // 1435
            }                                                                                                          // 1436
            ii = indexOf$1.call(this._weekdaysParse, llc);                                                             // 1437
            if (ii !== -1) {                                                                                           // 1438
                return ii;                                                                                             // 1439
            }                                                                                                          // 1440
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);                                                        // 1441
            return ii !== -1 ? ii : null;                                                                              // 1442
        }                                                                                                              // 1443
    }                                                                                                                  // 1444
}                                                                                                                      // 1445
                                                                                                                       // 1446
function localeWeekdaysParse (weekdayName, format, strict) {                                                           // 1447
    var i, mom, regex;                                                                                                 // 1448
                                                                                                                       // 1449
    if (this._weekdaysParseExact) {                                                                                    // 1450
        return handleStrictParse$1.call(this, weekdayName, format, strict);                                            // 1451
    }                                                                                                                  // 1452
                                                                                                                       // 1453
    if (!this._weekdaysParse) {                                                                                        // 1454
        this._weekdaysParse = [];                                                                                      // 1455
        this._minWeekdaysParse = [];                                                                                   // 1456
        this._shortWeekdaysParse = [];                                                                                 // 1457
        this._fullWeekdaysParse = [];                                                                                  // 1458
    }                                                                                                                  // 1459
                                                                                                                       // 1460
    for (i = 0; i < 7; i++) {                                                                                          // 1461
        // make the regex if we don't have it already                                                                  // 1462
                                                                                                                       // 1463
        mom = createUTC([2000, 1]).day(i);                                                                             // 1464
        if (strict && !this._fullWeekdaysParse[i]) {                                                                   // 1465
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');      // 1466
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');    // 1468
        }                                                                                                              // 1469
        if (!this._weekdaysParse[i]) {                                                                                 // 1470
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');                                          // 1472
        }                                                                                                              // 1473
        // test the regex                                                                                              // 1474
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {                             // 1475
            return i;                                                                                                  // 1476
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {                      // 1477
            return i;                                                                                                  // 1478
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {                         // 1479
            return i;                                                                                                  // 1480
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {                                              // 1481
            return i;                                                                                                  // 1482
        }                                                                                                              // 1483
    }                                                                                                                  // 1484
}                                                                                                                      // 1485
                                                                                                                       // 1486
// MOMENTS                                                                                                             // 1487
                                                                                                                       // 1488
function getSetDayOfWeek (input) {                                                                                     // 1489
    if (!this.isValid()) {                                                                                             // 1490
        return input != null ? this : NaN;                                                                             // 1491
    }                                                                                                                  // 1492
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();                                                    // 1493
    if (input != null) {                                                                                               // 1494
        input = parseWeekday(input, this.localeData());                                                                // 1495
        return this.add(input - day, 'd');                                                                             // 1496
    } else {                                                                                                           // 1497
        return day;                                                                                                    // 1498
    }                                                                                                                  // 1499
}                                                                                                                      // 1500
                                                                                                                       // 1501
function getSetLocaleDayOfWeek (input) {                                                                               // 1502
    if (!this.isValid()) {                                                                                             // 1503
        return input != null ? this : NaN;                                                                             // 1504
    }                                                                                                                  // 1505
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;                                                  // 1506
    return input == null ? weekday : this.add(input - weekday, 'd');                                                   // 1507
}                                                                                                                      // 1508
                                                                                                                       // 1509
function getSetISODayOfWeek (input) {                                                                                  // 1510
    if (!this.isValid()) {                                                                                             // 1511
        return input != null ? this : NaN;                                                                             // 1512
    }                                                                                                                  // 1513
                                                                                                                       // 1514
    // behaves the same as moment#day except                                                                           // 1515
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)                                                  // 1516
    // as a setter, sunday should belong to the previous week.                                                         // 1517
                                                                                                                       // 1518
    if (input != null) {                                                                                               // 1519
        var weekday = parseIsoWeekday(input, this.localeData());                                                       // 1520
        return this.day(this.day() % 7 ? weekday : weekday - 7);                                                       // 1521
    } else {                                                                                                           // 1522
        return this.day() || 7;                                                                                        // 1523
    }                                                                                                                  // 1524
}                                                                                                                      // 1525
                                                                                                                       // 1526
var defaultWeekdaysRegex = matchWord;                                                                                  // 1527
function weekdaysRegex (isStrict) {                                                                                    // 1528
    if (this._weekdaysParseExact) {                                                                                    // 1529
        if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                     // 1530
            computeWeekdaysParse.call(this);                                                                           // 1531
        }                                                                                                              // 1532
        if (isStrict) {                                                                                                // 1533
            return this._weekdaysStrictRegex;                                                                          // 1534
        } else {                                                                                                       // 1535
            return this._weekdaysRegex;                                                                                // 1536
        }                                                                                                              // 1537
    } else {                                                                                                           // 1538
        if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                     // 1539
            this._weekdaysRegex = defaultWeekdaysRegex;                                                                // 1540
        }                                                                                                              // 1541
        return this._weekdaysStrictRegex && isStrict ?                                                                 // 1542
            this._weekdaysStrictRegex : this._weekdaysRegex;                                                           // 1543
    }                                                                                                                  // 1544
}                                                                                                                      // 1545
                                                                                                                       // 1546
var defaultWeekdaysShortRegex = matchWord;                                                                             // 1547
function weekdaysShortRegex (isStrict) {                                                                               // 1548
    if (this._weekdaysParseExact) {                                                                                    // 1549
        if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                     // 1550
            computeWeekdaysParse.call(this);                                                                           // 1551
        }                                                                                                              // 1552
        if (isStrict) {                                                                                                // 1553
            return this._weekdaysShortStrictRegex;                                                                     // 1554
        } else {                                                                                                       // 1555
            return this._weekdaysShortRegex;                                                                           // 1556
        }                                                                                                              // 1557
    } else {                                                                                                           // 1558
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {                                                                // 1559
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;                                                      // 1560
        }                                                                                                              // 1561
        return this._weekdaysShortStrictRegex && isStrict ?                                                            // 1562
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;                                                 // 1563
    }                                                                                                                  // 1564
}                                                                                                                      // 1565
                                                                                                                       // 1566
var defaultWeekdaysMinRegex = matchWord;                                                                               // 1567
function weekdaysMinRegex (isStrict) {                                                                                 // 1568
    if (this._weekdaysParseExact) {                                                                                    // 1569
        if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                     // 1570
            computeWeekdaysParse.call(this);                                                                           // 1571
        }                                                                                                              // 1572
        if (isStrict) {                                                                                                // 1573
            return this._weekdaysMinStrictRegex;                                                                       // 1574
        } else {                                                                                                       // 1575
            return this._weekdaysMinRegex;                                                                             // 1576
        }                                                                                                              // 1577
    } else {                                                                                                           // 1578
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {                                                                  // 1579
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;                                                          // 1580
        }                                                                                                              // 1581
        return this._weekdaysMinStrictRegex && isStrict ?                                                              // 1582
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;                                                     // 1583
    }                                                                                                                  // 1584
}                                                                                                                      // 1585
                                                                                                                       // 1586
                                                                                                                       // 1587
function computeWeekdaysParse () {                                                                                     // 1588
    function cmpLenRev(a, b) {                                                                                         // 1589
        return b.length - a.length;                                                                                    // 1590
    }                                                                                                                  // 1591
                                                                                                                       // 1592
    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],                                           // 1593
        i, mom, minp, shortp, longp;                                                                                   // 1594
    for (i = 0; i < 7; i++) {                                                                                          // 1595
        // make the regex if we don't have it already                                                                  // 1596
        mom = createUTC([2000, 1]).day(i);                                                                             // 1597
        minp = this.weekdaysMin(mom, '');                                                                              // 1598
        shortp = this.weekdaysShort(mom, '');                                                                          // 1599
        longp = this.weekdays(mom, '');                                                                                // 1600
        minPieces.push(minp);                                                                                          // 1601
        shortPieces.push(shortp);                                                                                      // 1602
        longPieces.push(longp);                                                                                        // 1603
        mixedPieces.push(minp);                                                                                        // 1604
        mixedPieces.push(shortp);                                                                                      // 1605
        mixedPieces.push(longp);                                                                                       // 1606
    }                                                                                                                  // 1607
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it                                           // 1608
    // will match the longer piece.                                                                                    // 1609
    minPieces.sort(cmpLenRev);                                                                                         // 1610
    shortPieces.sort(cmpLenRev);                                                                                       // 1611
    longPieces.sort(cmpLenRev);                                                                                        // 1612
    mixedPieces.sort(cmpLenRev);                                                                                       // 1613
    for (i = 0; i < 7; i++) {                                                                                          // 1614
        shortPieces[i] = regexEscape(shortPieces[i]);                                                                  // 1615
        longPieces[i] = regexEscape(longPieces[i]);                                                                    // 1616
        mixedPieces[i] = regexEscape(mixedPieces[i]);                                                                  // 1617
    }                                                                                                                  // 1618
                                                                                                                       // 1619
    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');                                         // 1620
    this._weekdaysShortRegex = this._weekdaysRegex;                                                                    // 1621
    this._weekdaysMinRegex = this._weekdaysRegex;                                                                      // 1622
                                                                                                                       // 1623
    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');                                    // 1624
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');                              // 1625
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');                                  // 1626
}                                                                                                                      // 1627
                                                                                                                       // 1628
// FORMATTING                                                                                                          // 1629
                                                                                                                       // 1630
function hFormat() {                                                                                                   // 1631
    return this.hours() % 12 || 12;                                                                                    // 1632
}                                                                                                                      // 1633
                                                                                                                       // 1634
function kFormat() {                                                                                                   // 1635
    return this.hours() || 24;                                                                                         // 1636
}                                                                                                                      // 1637
                                                                                                                       // 1638
addFormatToken('H', ['HH', 2], 0, 'hour');                                                                             // 1639
addFormatToken('h', ['hh', 2], 0, hFormat);                                                                            // 1640
addFormatToken('k', ['kk', 2], 0, kFormat);                                                                            // 1641
                                                                                                                       // 1642
addFormatToken('hmm', 0, 0, function () {                                                                              // 1643
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);                                                     // 1644
});                                                                                                                    // 1645
                                                                                                                       // 1646
addFormatToken('hmmss', 0, 0, function () {                                                                            // 1647
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +                                                    // 1648
        zeroFill(this.seconds(), 2);                                                                                   // 1649
});                                                                                                                    // 1650
                                                                                                                       // 1651
addFormatToken('Hmm', 0, 0, function () {                                                                              // 1652
    return '' + this.hours() + zeroFill(this.minutes(), 2);                                                            // 1653
});                                                                                                                    // 1654
                                                                                                                       // 1655
addFormatToken('Hmmss', 0, 0, function () {                                                                            // 1656
    return '' + this.hours() + zeroFill(this.minutes(), 2) +                                                           // 1657
        zeroFill(this.seconds(), 2);                                                                                   // 1658
});                                                                                                                    // 1659
                                                                                                                       // 1660
function meridiem (token, lowercase) {                                                                                 // 1661
    addFormatToken(token, 0, 0, function () {                                                                          // 1662
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);                                    // 1663
    });                                                                                                                // 1664
}                                                                                                                      // 1665
                                                                                                                       // 1666
meridiem('a', true);                                                                                                   // 1667
meridiem('A', false);                                                                                                  // 1668
                                                                                                                       // 1669
// ALIASES                                                                                                             // 1670
                                                                                                                       // 1671
addUnitAlias('hour', 'h');                                                                                             // 1672
                                                                                                                       // 1673
// PRIORITY                                                                                                            // 1674
addUnitPriority('hour', 13);                                                                                           // 1675
                                                                                                                       // 1676
// PARSING                                                                                                             // 1677
                                                                                                                       // 1678
function matchMeridiem (isStrict, locale) {                                                                            // 1679
    return locale._meridiemParse;                                                                                      // 1680
}                                                                                                                      // 1681
                                                                                                                       // 1682
addRegexToken('a',  matchMeridiem);                                                                                    // 1683
addRegexToken('A',  matchMeridiem);                                                                                    // 1684
addRegexToken('H',  match1to2);                                                                                        // 1685
addRegexToken('h',  match1to2);                                                                                        // 1686
addRegexToken('k',  match1to2);                                                                                        // 1687
addRegexToken('HH', match1to2, match2);                                                                                // 1688
addRegexToken('hh', match1to2, match2);                                                                                // 1689
addRegexToken('kk', match1to2, match2);                                                                                // 1690
                                                                                                                       // 1691
addRegexToken('hmm', match3to4);                                                                                       // 1692
addRegexToken('hmmss', match5to6);                                                                                     // 1693
addRegexToken('Hmm', match3to4);                                                                                       // 1694
addRegexToken('Hmmss', match5to6);                                                                                     // 1695
                                                                                                                       // 1696
addParseToken(['H', 'HH'], HOUR);                                                                                      // 1697
addParseToken(['k', 'kk'], function (input, array, config) {                                                           // 1698
    var kInput = toInt(input);                                                                                         // 1699
    array[HOUR] = kInput === 24 ? 0 : kInput;                                                                          // 1700
});                                                                                                                    // 1701
addParseToken(['a', 'A'], function (input, array, config) {                                                            // 1702
    config._isPm = config._locale.isPM(input);                                                                         // 1703
    config._meridiem = input;                                                                                          // 1704
});                                                                                                                    // 1705
addParseToken(['h', 'hh'], function (input, array, config) {                                                           // 1706
    array[HOUR] = toInt(input);                                                                                        // 1707
    getParsingFlags(config).bigHour = true;                                                                            // 1708
});                                                                                                                    // 1709
addParseToken('hmm', function (input, array, config) {                                                                 // 1710
    var pos = input.length - 2;                                                                                        // 1711
    array[HOUR] = toInt(input.substr(0, pos));                                                                         // 1712
    array[MINUTE] = toInt(input.substr(pos));                                                                          // 1713
    getParsingFlags(config).bigHour = true;                                                                            // 1714
});                                                                                                                    // 1715
addParseToken('hmmss', function (input, array, config) {                                                               // 1716
    var pos1 = input.length - 4;                                                                                       // 1717
    var pos2 = input.length - 2;                                                                                       // 1718
    array[HOUR] = toInt(input.substr(0, pos1));                                                                        // 1719
    array[MINUTE] = toInt(input.substr(pos1, 2));                                                                      // 1720
    array[SECOND] = toInt(input.substr(pos2));                                                                         // 1721
    getParsingFlags(config).bigHour = true;                                                                            // 1722
});                                                                                                                    // 1723
addParseToken('Hmm', function (input, array, config) {                                                                 // 1724
    var pos = input.length - 2;                                                                                        // 1725
    array[HOUR] = toInt(input.substr(0, pos));                                                                         // 1726
    array[MINUTE] = toInt(input.substr(pos));                                                                          // 1727
});                                                                                                                    // 1728
addParseToken('Hmmss', function (input, array, config) {                                                               // 1729
    var pos1 = input.length - 4;                                                                                       // 1730
    var pos2 = input.length - 2;                                                                                       // 1731
    array[HOUR] = toInt(input.substr(0, pos1));                                                                        // 1732
    array[MINUTE] = toInt(input.substr(pos1, 2));                                                                      // 1733
    array[SECOND] = toInt(input.substr(pos2));                                                                         // 1734
});                                                                                                                    // 1735
                                                                                                                       // 1736
// LOCALES                                                                                                             // 1737
                                                                                                                       // 1738
function localeIsPM (input) {                                                                                          // 1739
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays                                 // 1740
    // Using charAt should be more compatible.                                                                         // 1741
    return ((input + '').toLowerCase().charAt(0) === 'p');                                                             // 1742
}                                                                                                                      // 1743
                                                                                                                       // 1744
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;                                                                      // 1745
function localeMeridiem (hours, minutes, isLower) {                                                                    // 1746
    if (hours > 11) {                                                                                                  // 1747
        return isLower ? 'pm' : 'PM';                                                                                  // 1748
    } else {                                                                                                           // 1749
        return isLower ? 'am' : 'AM';                                                                                  // 1750
    }                                                                                                                  // 1751
}                                                                                                                      // 1752
                                                                                                                       // 1753
                                                                                                                       // 1754
// MOMENTS                                                                                                             // 1755
                                                                                                                       // 1756
// Setting the hour should keep the time, because the user explicitly                                                  // 1757
// specified which hour he wants. So trying to maintain the same hour (in                                              // 1758
// a new timezone) makes sense. Adding/subtracting hours does not follow                                               // 1759
// this rule.                                                                                                          // 1760
var getSetHour = makeGetSet('Hours', true);                                                                            // 1761
                                                                                                                       // 1762
// months                                                                                                              // 1763
// week                                                                                                                // 1764
// weekdays                                                                                                            // 1765
// meridiem                                                                                                            // 1766
var baseConfig = {                                                                                                     // 1767
    calendar: defaultCalendar,                                                                                         // 1768
    longDateFormat: defaultLongDateFormat,                                                                             // 1769
    invalidDate: defaultInvalidDate,                                                                                   // 1770
    ordinal: defaultOrdinal,                                                                                           // 1771
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,                                                             // 1772
    relativeTime: defaultRelativeTime,                                                                                 // 1773
                                                                                                                       // 1774
    months: defaultLocaleMonths,                                                                                       // 1775
    monthsShort: defaultLocaleMonthsShort,                                                                             // 1776
                                                                                                                       // 1777
    week: defaultLocaleWeek,                                                                                           // 1778
                                                                                                                       // 1779
    weekdays: defaultLocaleWeekdays,                                                                                   // 1780
    weekdaysMin: defaultLocaleWeekdaysMin,                                                                             // 1781
    weekdaysShort: defaultLocaleWeekdaysShort,                                                                         // 1782
                                                                                                                       // 1783
    meridiemParse: defaultLocaleMeridiemParse                                                                          // 1784
};                                                                                                                     // 1785
                                                                                                                       // 1786
// internal storage for locale config files                                                                            // 1787
var locales = {};                                                                                                      // 1788
var localeFamilies = {};                                                                                               // 1789
var globalLocale;                                                                                                      // 1790
                                                                                                                       // 1791
function normalizeLocale(key) {                                                                                        // 1792
    return key ? key.toLowerCase().replace('_', '-') : key;                                                            // 1793
}                                                                                                                      // 1794
                                                                                                                       // 1795
// pick the locale from the array                                                                                      // 1796
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each                           // 1797
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {                                                                                         // 1799
    var i = 0, j, next, locale, split;                                                                                 // 1800
                                                                                                                       // 1801
    while (i < names.length) {                                                                                         // 1802
        split = normalizeLocale(names[i]).split('-');                                                                  // 1803
        j = split.length;                                                                                              // 1804
        next = normalizeLocale(names[i + 1]);                                                                          // 1805
        next = next ? next.split('-') : null;                                                                          // 1806
        while (j > 0) {                                                                                                // 1807
            locale = loadLocale(split.slice(0, j).join('-'));                                                          // 1808
            if (locale) {                                                                                              // 1809
                return locale;                                                                                         // 1810
            }                                                                                                          // 1811
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {                               // 1812
                //the next array item is better than a shallower substring of this one                                 // 1813
                break;                                                                                                 // 1814
            }                                                                                                          // 1815
            j--;                                                                                                       // 1816
        }                                                                                                              // 1817
        i++;                                                                                                           // 1818
    }                                                                                                                  // 1819
    return null;                                                                                                       // 1820
}                                                                                                                      // 1821
                                                                                                                       // 1822
function loadLocale(name) {                                                                                            // 1823
    var oldLocale = null;                                                                                              // 1824
    // TODO: Find a better way to register and load all the locales in Node                                            // 1825
    if (!locales[name] && (typeof module !== 'undefined') &&                                                           // 1826
            module && module.exports) {                                                                                // 1827
        try {                                                                                                          // 1828
            oldLocale = globalLocale._abbr;                                                                            // 1829
            require('./locale/' + name);                                                                               // 1830
            // because defineLocale currently also sets the global locale, we                                          // 1831
            // want to undo that for lazy loaded locales                                                               // 1832
            getSetGlobalLocale(oldLocale);                                                                             // 1833
        } catch (e) { }                                                                                                // 1834
    }                                                                                                                  // 1835
    return locales[name];                                                                                              // 1836
}                                                                                                                      // 1837
                                                                                                                       // 1838
// This function will load locale and then set the global locale.  If                                                  // 1839
// no arguments are passed in, it will simply return the current global                                                // 1840
// locale key.                                                                                                         // 1841
function getSetGlobalLocale (key, values) {                                                                            // 1842
    var data;                                                                                                          // 1843
    if (key) {                                                                                                         // 1844
        if (isUndefined(values)) {                                                                                     // 1845
            data = getLocale(key);                                                                                     // 1846
        }                                                                                                              // 1847
        else {                                                                                                         // 1848
            data = defineLocale(key, values);                                                                          // 1849
        }                                                                                                              // 1850
                                                                                                                       // 1851
        if (data) {                                                                                                    // 1852
            // moment.duration._locale = moment._locale = data;                                                        // 1853
            globalLocale = data;                                                                                       // 1854
        }                                                                                                              // 1855
    }                                                                                                                  // 1856
                                                                                                                       // 1857
    return globalLocale._abbr;                                                                                         // 1858
}                                                                                                                      // 1859
                                                                                                                       // 1860
function defineLocale (name, config) {                                                                                 // 1861
    if (config !== null) {                                                                                             // 1862
        var parentConfig = baseConfig;                                                                                 // 1863
        config.abbr = name;                                                                                            // 1864
        if (locales[name] != null) {                                                                                   // 1865
            deprecateSimple('defineLocaleOverride',                                                                    // 1866
                    'use moment.updateLocale(localeName, config) to change ' +                                         // 1867
                    'an existing locale. moment.defineLocale(localeName, ' +                                           // 1868
                    'config) should only be used for creating a new locale ' +                                         // 1869
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');                        // 1870
            parentConfig = locales[name]._config;                                                                      // 1871
        } else if (config.parentLocale != null) {                                                                      // 1872
            if (locales[config.parentLocale] != null) {                                                                // 1873
                parentConfig = locales[config.parentLocale]._config;                                                   // 1874
            } else {                                                                                                   // 1875
                if (!localeFamilies[config.parentLocale]) {                                                            // 1876
                    localeFamilies[config.parentLocale] = [];                                                          // 1877
                }                                                                                                      // 1878
                localeFamilies[config.parentLocale].push({                                                             // 1879
                    name: name,                                                                                        // 1880
                    config: config                                                                                     // 1881
                });                                                                                                    // 1882
                return null;                                                                                           // 1883
            }                                                                                                          // 1884
        }                                                                                                              // 1885
        locales[name] = new Locale(mergeConfigs(parentConfig, config));                                                // 1886
                                                                                                                       // 1887
        if (localeFamilies[name]) {                                                                                    // 1888
            localeFamilies[name].forEach(function (x) {                                                                // 1889
                defineLocale(x.name, x.config);                                                                        // 1890
            });                                                                                                        // 1891
        }                                                                                                              // 1892
                                                                                                                       // 1893
        // backwards compat for now: also set the locale                                                               // 1894
        // make sure we set the locale AFTER all child locales have been                                               // 1895
        // created, so we won't end up with the child locale set.                                                      // 1896
        getSetGlobalLocale(name);                                                                                      // 1897
                                                                                                                       // 1898
                                                                                                                       // 1899
        return locales[name];                                                                                          // 1900
    } else {                                                                                                           // 1901
        // useful for testing                                                                                          // 1902
        delete locales[name];                                                                                          // 1903
        return null;                                                                                                   // 1904
    }                                                                                                                  // 1905
}                                                                                                                      // 1906
                                                                                                                       // 1907
function updateLocale(name, config) {                                                                                  // 1908
    if (config != null) {                                                                                              // 1909
        var locale, parentConfig = baseConfig;                                                                         // 1910
        // MERGE                                                                                                       // 1911
        if (locales[name] != null) {                                                                                   // 1912
            parentConfig = locales[name]._config;                                                                      // 1913
        }                                                                                                              // 1914
        config = mergeConfigs(parentConfig, config);                                                                   // 1915
        locale = new Locale(config);                                                                                   // 1916
        locale.parentLocale = locales[name];                                                                           // 1917
        locales[name] = locale;                                                                                        // 1918
                                                                                                                       // 1919
        // backwards compat for now: also set the locale                                                               // 1920
        getSetGlobalLocale(name);                                                                                      // 1921
    } else {                                                                                                           // 1922
        // pass null for config to unupdate, useful for tests                                                          // 1923
        if (locales[name] != null) {                                                                                   // 1924
            if (locales[name].parentLocale != null) {                                                                  // 1925
                locales[name] = locales[name].parentLocale;                                                            // 1926
            } else if (locales[name] != null) {                                                                        // 1927
                delete locales[name];                                                                                  // 1928
            }                                                                                                          // 1929
        }                                                                                                              // 1930
    }                                                                                                                  // 1931
    return locales[name];                                                                                              // 1932
}                                                                                                                      // 1933
                                                                                                                       // 1934
// returns locale data                                                                                                 // 1935
function getLocale (key) {                                                                                             // 1936
    var locale;                                                                                                        // 1937
                                                                                                                       // 1938
    if (key && key._locale && key._locale._abbr) {                                                                     // 1939
        key = key._locale._abbr;                                                                                       // 1940
    }                                                                                                                  // 1941
                                                                                                                       // 1942
    if (!key) {                                                                                                        // 1943
        return globalLocale;                                                                                           // 1944
    }                                                                                                                  // 1945
                                                                                                                       // 1946
    if (!isArray(key)) {                                                                                               // 1947
        //short-circuit everything else                                                                                // 1948
        locale = loadLocale(key);                                                                                      // 1949
        if (locale) {                                                                                                  // 1950
            return locale;                                                                                             // 1951
        }                                                                                                              // 1952
        key = [key];                                                                                                   // 1953
    }                                                                                                                  // 1954
                                                                                                                       // 1955
    return chooseLocale(key);                                                                                          // 1956
}                                                                                                                      // 1957
                                                                                                                       // 1958
function listLocales() {                                                                                               // 1959
    return keys$1(locales);                                                                                            // 1960
}                                                                                                                      // 1961
                                                                                                                       // 1962
function checkOverflow (m) {                                                                                           // 1963
    var overflow;                                                                                                      // 1964
    var a = m._a;                                                                                                      // 1965
                                                                                                                       // 1966
    if (a && getParsingFlags(m).overflow === -2) {                                                                     // 1967
        overflow =                                                                                                     // 1968
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :                                                       // 1969
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :                             // 1970
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :                                                      // 1972
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :                                                      // 1973
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :                                                 // 1974
            -1;                                                                                                        // 1975
                                                                                                                       // 1976
        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {                           // 1977
            overflow = DATE;                                                                                           // 1978
        }                                                                                                              // 1979
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {                                                    // 1980
            overflow = WEEK;                                                                                           // 1981
        }                                                                                                              // 1982
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {                                                  // 1983
            overflow = WEEKDAY;                                                                                        // 1984
        }                                                                                                              // 1985
                                                                                                                       // 1986
        getParsingFlags(m).overflow = overflow;                                                                        // 1987
    }                                                                                                                  // 1988
                                                                                                                       // 1989
    return m;                                                                                                          // 1990
}                                                                                                                      // 1991
                                                                                                                       // 1992
// iso 8601 regex                                                                                                      // 1993
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)           // 1994
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
                                                                                                                       // 1997
var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;                                                                                 // 1998
                                                                                                                       // 1999
var isoDates = [                                                                                                       // 2000
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],                                                                           // 2001
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],                                                                                 // 2002
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],                                                                                // 2003
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],                                                                              // 2004
    ['YYYY-DDD', /\d{4}-\d{3}/],                                                                                       // 2005
    ['YYYY-MM', /\d{4}-\d\d/, false],                                                                                  // 2006
    ['YYYYYYMMDD', /[+-]\d{10}/],                                                                                      // 2007
    ['YYYYMMDD', /\d{8}/],                                                                                             // 2008
    // YYYYMM is NOT allowed by the standard                                                                           // 2009
    ['GGGG[W]WWE', /\d{4}W\d{3}/],                                                                                     // 2010
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],                                                                               // 2011
    ['YYYYDDD', /\d{7}/]                                                                                               // 2012
];                                                                                                                     // 2013
                                                                                                                       // 2014
// iso time formats and regexes                                                                                        // 2015
var isoTimes = [                                                                                                       // 2016
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],                                                                          // 2017
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],                                                                           // 2018
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],                                                                                    // 2019
    ['HH:mm', /\d\d:\d\d/],                                                                                            // 2020
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],                                                                              // 2021
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],                                                                               // 2022
    ['HHmmss', /\d\d\d\d\d\d/],                                                                                        // 2023
    ['HHmm', /\d\d\d\d/],                                                                                              // 2024
    ['HH', /\d\d/]                                                                                                     // 2025
];                                                                                                                     // 2026
                                                                                                                       // 2027
var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;                                                                           // 2028
                                                                                                                       // 2029
// date from iso format                                                                                                // 2030
function configFromISO(config) {                                                                                       // 2031
    var i, l,                                                                                                          // 2032
        string = config._i,                                                                                            // 2033
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),                                           // 2034
        allowTime, dateFormat, timeFormat, tzFormat;                                                                   // 2035
                                                                                                                       // 2036
    if (match) {                                                                                                       // 2037
        getParsingFlags(config).iso = true;                                                                            // 2038
                                                                                                                       // 2039
        for (i = 0, l = isoDates.length; i < l; i++) {                                                                 // 2040
            if (isoDates[i][1].exec(match[1])) {                                                                       // 2041
                dateFormat = isoDates[i][0];                                                                           // 2042
                allowTime = isoDates[i][2] !== false;                                                                  // 2043
                break;                                                                                                 // 2044
            }                                                                                                          // 2045
        }                                                                                                              // 2046
        if (dateFormat == null) {                                                                                      // 2047
            config._isValid = false;                                                                                   // 2048
            return;                                                                                                    // 2049
        }                                                                                                              // 2050
        if (match[3]) {                                                                                                // 2051
            for (i = 0, l = isoTimes.length; i < l; i++) {                                                             // 2052
                if (isoTimes[i][1].exec(match[3])) {                                                                   // 2053
                    // match[2] should be 'T' or space                                                                 // 2054
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];                                                   // 2055
                    break;                                                                                             // 2056
                }                                                                                                      // 2057
            }                                                                                                          // 2058
            if (timeFormat == null) {                                                                                  // 2059
                config._isValid = false;                                                                               // 2060
                return;                                                                                                // 2061
            }                                                                                                          // 2062
        }                                                                                                              // 2063
        if (!allowTime && timeFormat != null) {                                                                        // 2064
            config._isValid = false;                                                                                   // 2065
            return;                                                                                                    // 2066
        }                                                                                                              // 2067
        if (match[4]) {                                                                                                // 2068
            if (tzRegex.exec(match[4])) {                                                                              // 2069
                tzFormat = 'Z';                                                                                        // 2070
            } else {                                                                                                   // 2071
                config._isValid = false;                                                                               // 2072
                return;                                                                                                // 2073
            }                                                                                                          // 2074
        }                                                                                                              // 2075
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');                                                // 2076
        configFromStringAndFormat(config);                                                                             // 2077
    } else {                                                                                                           // 2078
        config._isValid = false;                                                                                       // 2079
    }                                                                                                                  // 2080
}                                                                                                                      // 2081
                                                                                                                       // 2082
// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3                                     // 2083
var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
                                                                                                                       // 2085
// date and time from ref 2822 format                                                                                  // 2086
function configFromRFC2822(config) {                                                                                   // 2087
    var string, match, dayFormat,                                                                                      // 2088
        dateFormat, timeFormat, tzFormat;                                                                              // 2089
    var timezones = {                                                                                                  // 2090
        ' GMT': ' +0000',                                                                                              // 2091
        ' EDT': ' -0400',                                                                                              // 2092
        ' EST': ' -0500',                                                                                              // 2093
        ' CDT': ' -0500',                                                                                              // 2094
        ' CST': ' -0600',                                                                                              // 2095
        ' MDT': ' -0600',                                                                                              // 2096
        ' MST': ' -0700',                                                                                              // 2097
        ' PDT': ' -0700',                                                                                              // 2098
        ' PST': ' -0800'                                                                                               // 2099
    };                                                                                                                 // 2100
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';                                                                        // 2101
    var timezone, timezoneIndex;                                                                                       // 2102
                                                                                                                       // 2103
    string = config._i                                                                                                 // 2104
        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace                                  // 2105
        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space                                       // 2106
        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces                                                // 2107
    match = basicRfcRegex.exec(string);                                                                                // 2108
                                                                                                                       // 2109
    if (match) {                                                                                                       // 2110
        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';                                    // 2111
        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');                                            // 2112
        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');                                                                // 2113
                                                                                                                       // 2114
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.                             // 2115
        if (match[1]) { // day of week given                                                                           // 2116
            var momentDate = new Date(match[2]);                                                                       // 2117
            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];                          // 2118
                                                                                                                       // 2119
            if (match[1].substr(0,3) !== momentDay) {                                                                  // 2120
                getParsingFlags(config).weekdayMismatch = true;                                                        // 2121
                config._isValid = false;                                                                               // 2122
                return;                                                                                                // 2123
            }                                                                                                          // 2124
        }                                                                                                              // 2125
                                                                                                                       // 2126
        switch (match[5].length) {                                                                                     // 2127
            case 2: // military                                                                                        // 2128
                if (timezoneIndex === 0) {                                                                             // 2129
                    timezone = ' +0000';                                                                               // 2130
                } else {                                                                                               // 2131
                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;                                  // 2132
                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +                                                   // 2133
                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';                             // 2134
                }                                                                                                      // 2135
                break;                                                                                                 // 2136
            case 4: // Zone                                                                                            // 2137
                timezone = timezones[match[5]];                                                                        // 2138
                break;                                                                                                 // 2139
            default: // UT or +/-9999                                                                                  // 2140
                timezone = timezones[' GMT'];                                                                          // 2141
        }                                                                                                              // 2142
        match[5] = timezone;                                                                                           // 2143
        config._i = match.splice(1).join('');                                                                          // 2144
        tzFormat = ' ZZ';                                                                                              // 2145
        config._f = dayFormat + dateFormat + timeFormat + tzFormat;                                                    // 2146
        configFromStringAndFormat(config);                                                                             // 2147
        getParsingFlags(config).rfc2822 = true;                                                                        // 2148
    } else {                                                                                                           // 2149
        config._isValid = false;                                                                                       // 2150
    }                                                                                                                  // 2151
}                                                                                                                      // 2152
                                                                                                                       // 2153
// date from iso format or fallback                                                                                    // 2154
function configFromString(config) {                                                                                    // 2155
    var matched = aspNetJsonRegex.exec(config._i);                                                                     // 2156
                                                                                                                       // 2157
    if (matched !== null) {                                                                                            // 2158
        config._d = new Date(+matched[1]);                                                                             // 2159
        return;                                                                                                        // 2160
    }                                                                                                                  // 2161
                                                                                                                       // 2162
    configFromISO(config);                                                                                             // 2163
    if (config._isValid === false) {                                                                                   // 2164
        delete config._isValid;                                                                                        // 2165
    } else {                                                                                                           // 2166
        return;                                                                                                        // 2167
    }                                                                                                                  // 2168
                                                                                                                       // 2169
    configFromRFC2822(config);                                                                                         // 2170
    if (config._isValid === false) {                                                                                   // 2171
        delete config._isValid;                                                                                        // 2172
    } else {                                                                                                           // 2173
        return;                                                                                                        // 2174
    }                                                                                                                  // 2175
                                                                                                                       // 2176
    // Final attempt, use Input Fallback                                                                               // 2177
    hooks.createFromInputFallback(config);                                                                             // 2178
}                                                                                                                      // 2179
                                                                                                                       // 2180
hooks.createFromInputFallback = deprecate(                                                                             // 2181
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +     // 2182
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +                      // 2183
    'discouraged and will be removed in an upcoming major release. Please refer to ' +                                 // 2184
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',                                                   // 2185
    function (config) {                                                                                                // 2186
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));                                              // 2187
    }                                                                                                                  // 2188
);                                                                                                                     // 2189
                                                                                                                       // 2190
// Pick the first defined of two or three arguments.                                                                   // 2191
function defaults(a, b, c) {                                                                                           // 2192
    if (a != null) {                                                                                                   // 2193
        return a;                                                                                                      // 2194
    }                                                                                                                  // 2195
    if (b != null) {                                                                                                   // 2196
        return b;                                                                                                      // 2197
    }                                                                                                                  // 2198
    return c;                                                                                                          // 2199
}                                                                                                                      // 2200
                                                                                                                       // 2201
function currentDateArray(config) {                                                                                    // 2202
    // hooks is actually the exported moment object                                                                    // 2203
    var nowValue = new Date(hooks.now());                                                                              // 2204
    if (config._useUTC) {                                                                                              // 2205
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];                             // 2206
    }                                                                                                                  // 2207
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];                                          // 2208
}                                                                                                                      // 2209
                                                                                                                       // 2210
// convert an array to a date.                                                                                         // 2211
// the array should mirror the parameters below                                                                        // 2212
// note: all values past the year are optional and will default to the lowest possible value.                          // 2213
// [year, month, day , hour, minute, second, millisecond]                                                              // 2214
function configFromArray (config) {                                                                                    // 2215
    var i, date, input = [], currentDate, yearToUse;                                                                   // 2216
                                                                                                                       // 2217
    if (config._d) {                                                                                                   // 2218
        return;                                                                                                        // 2219
    }                                                                                                                  // 2220
                                                                                                                       // 2221
    currentDate = currentDateArray(config);                                                                            // 2222
                                                                                                                       // 2223
    //compute day of the year from weeks and weekdays                                                                  // 2224
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {                                            // 2225
        dayOfYearFromWeekInfo(config);                                                                                 // 2226
    }                                                                                                                  // 2227
                                                                                                                       // 2228
    //if the day of the year is set, figure out what it is                                                             // 2229
    if (config._dayOfYear != null) {                                                                                   // 2230
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);                                                      // 2231
                                                                                                                       // 2232
        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {                                    // 2233
            getParsingFlags(config)._overflowDayOfYear = true;                                                         // 2234
        }                                                                                                              // 2235
                                                                                                                       // 2236
        date = createUTCDate(yearToUse, 0, config._dayOfYear);                                                         // 2237
        config._a[MONTH] = date.getUTCMonth();                                                                         // 2238
        config._a[DATE] = date.getUTCDate();                                                                           // 2239
    }                                                                                                                  // 2240
                                                                                                                       // 2241
    // Default to current date.                                                                                        // 2242
    // * if no year, month, day of month are given, default to today                                                   // 2243
    // * if day of month is given, default month and year                                                              // 2244
    // * if month is given, default only year                                                                          // 2245
    // * if year is given, don't default anything                                                                      // 2246
    for (i = 0; i < 3 && config._a[i] == null; ++i) {                                                                  // 2247
        config._a[i] = input[i] = currentDate[i];                                                                      // 2248
    }                                                                                                                  // 2249
                                                                                                                       // 2250
    // Zero out whatever was not defaulted, including time                                                             // 2251
    for (; i < 7; i++) {                                                                                               // 2252
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];                           // 2253
    }                                                                                                                  // 2254
                                                                                                                       // 2255
    // Check for 24:00:00.000                                                                                          // 2256
    if (config._a[HOUR] === 24 &&                                                                                      // 2257
            config._a[MINUTE] === 0 &&                                                                                 // 2258
            config._a[SECOND] === 0 &&                                                                                 // 2259
            config._a[MILLISECOND] === 0) {                                                                            // 2260
        config._nextDay = true;                                                                                        // 2261
        config._a[HOUR] = 0;                                                                                           // 2262
    }                                                                                                                  // 2263
                                                                                                                       // 2264
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);                                      // 2265
    // Apply timezone offset from input. The actual utcOffset can be changed                                           // 2266
    // with parseZone.                                                                                                 // 2267
    if (config._tzm != null) {                                                                                         // 2268
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);                                              // 2269
    }                                                                                                                  // 2270
                                                                                                                       // 2271
    if (config._nextDay) {                                                                                             // 2272
        config._a[HOUR] = 24;                                                                                          // 2273
    }                                                                                                                  // 2274
}                                                                                                                      // 2275
                                                                                                                       // 2276
function dayOfYearFromWeekInfo(config) {                                                                               // 2277
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;                                                   // 2278
                                                                                                                       // 2279
    w = config._w;                                                                                                     // 2280
    if (w.GG != null || w.W != null || w.E != null) {                                                                  // 2281
        dow = 1;                                                                                                       // 2282
        doy = 4;                                                                                                       // 2283
                                                                                                                       // 2284
        // TODO: We need to take the current isoWeekYear, but that depends on                                          // 2285
        // how we interpret now (local, utc, fixed offset). So create                                                  // 2286
        // a now version of current config (take local/utc/offset flags, and                                           // 2287
        // create now).                                                                                                // 2288
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);                              // 2289
        week = defaults(w.W, 1);                                                                                       // 2290
        weekday = defaults(w.E, 1);                                                                                    // 2291
        if (weekday < 1 || weekday > 7) {                                                                              // 2292
            weekdayOverflow = true;                                                                                    // 2293
        }                                                                                                              // 2294
    } else {                                                                                                           // 2295
        dow = config._locale._week.dow;                                                                                // 2296
        doy = config._locale._week.doy;                                                                                // 2297
                                                                                                                       // 2298
        var curWeek = weekOfYear(createLocal(), dow, doy);                                                             // 2299
                                                                                                                       // 2300
        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);                                                      // 2301
                                                                                                                       // 2302
        // Default to current week.                                                                                    // 2303
        week = defaults(w.w, curWeek.week);                                                                            // 2304
                                                                                                                       // 2305
        if (w.d != null) {                                                                                             // 2306
            // weekday -- low day numbers are considered next week                                                     // 2307
            weekday = w.d;                                                                                             // 2308
            if (weekday < 0 || weekday > 6) {                                                                          // 2309
                weekdayOverflow = true;                                                                                // 2310
            }                                                                                                          // 2311
        } else if (w.e != null) {                                                                                      // 2312
            // local weekday -- counting starts from begining of week                                                  // 2313
            weekday = w.e + dow;                                                                                       // 2314
            if (w.e < 0 || w.e > 6) {                                                                                  // 2315
                weekdayOverflow = true;                                                                                // 2316
            }                                                                                                          // 2317
        } else {                                                                                                       // 2318
            // default to begining of week                                                                             // 2319
            weekday = dow;                                                                                             // 2320
        }                                                                                                              // 2321
    }                                                                                                                  // 2322
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {                                                          // 2323
        getParsingFlags(config)._overflowWeeks = true;                                                                 // 2324
    } else if (weekdayOverflow != null) {                                                                              // 2325
        getParsingFlags(config)._overflowWeekday = true;                                                               // 2326
    } else {                                                                                                           // 2327
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);                                                  // 2328
        config._a[YEAR] = temp.year;                                                                                   // 2329
        config._dayOfYear = temp.dayOfYear;                                                                            // 2330
    }                                                                                                                  // 2331
}                                                                                                                      // 2332
                                                                                                                       // 2333
// constant that refers to the ISO standard                                                                            // 2334
hooks.ISO_8601 = function () {};                                                                                       // 2335
                                                                                                                       // 2336
// constant that refers to the RFC 2822 form                                                                           // 2337
hooks.RFC_2822 = function () {};                                                                                       // 2338
                                                                                                                       // 2339
// date from string and format string                                                                                  // 2340
function configFromStringAndFormat(config) {                                                                           // 2341
    // TODO: Move this to another part of the creation flow to prevent circular deps                                   // 2342
    if (config._f === hooks.ISO_8601) {                                                                                // 2343
        configFromISO(config);                                                                                         // 2344
        return;                                                                                                        // 2345
    }                                                                                                                  // 2346
    if (config._f === hooks.RFC_2822) {                                                                                // 2347
        configFromRFC2822(config);                                                                                     // 2348
        return;                                                                                                        // 2349
    }                                                                                                                  // 2350
    config._a = [];                                                                                                    // 2351
    getParsingFlags(config).empty = true;                                                                              // 2352
                                                                                                                       // 2353
    // This array is used to make a Date, either with `new Date` or `Date.UTC`                                         // 2354
    var string = '' + config._i,                                                                                       // 2355
        i, parsedInput, tokens, token, skipped,                                                                        // 2356
        stringLength = string.length,                                                                                  // 2357
        totalParsedInputLength = 0;                                                                                    // 2358
                                                                                                                       // 2359
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];                                    // 2360
                                                                                                                       // 2361
    for (i = 0; i < tokens.length; i++) {                                                                              // 2362
        token = tokens[i];                                                                                             // 2363
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];                                   // 2364
        // console.log('token', token, 'parsedInput', parsedInput,                                                     // 2365
        //         'regex', getParseRegexForToken(token, config));                                                     // 2366
        if (parsedInput) {                                                                                             // 2367
            skipped = string.substr(0, string.indexOf(parsedInput));                                                   // 2368
            if (skipped.length > 0) {                                                                                  // 2369
                getParsingFlags(config).unusedInput.push(skipped);                                                     // 2370
            }                                                                                                          // 2371
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);                                   // 2372
            totalParsedInputLength += parsedInput.length;                                                              // 2373
        }                                                                                                              // 2374
        // don't parse if it's not a known token                                                                       // 2375
        if (formatTokenFunctions[token]) {                                                                             // 2376
            if (parsedInput) {                                                                                         // 2377
                getParsingFlags(config).empty = false;                                                                 // 2378
            }                                                                                                          // 2379
            else {                                                                                                     // 2380
                getParsingFlags(config).unusedTokens.push(token);                                                      // 2381
            }                                                                                                          // 2382
            addTimeToArrayFromToken(token, parsedInput, config);                                                       // 2383
        }                                                                                                              // 2384
        else if (config._strict && !parsedInput) {                                                                     // 2385
            getParsingFlags(config).unusedTokens.push(token);                                                          // 2386
        }                                                                                                              // 2387
    }                                                                                                                  // 2388
                                                                                                                       // 2389
    // add remaining unparsed input length to the string                                                               // 2390
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;                                     // 2391
    if (string.length > 0) {                                                                                           // 2392
        getParsingFlags(config).unusedInput.push(string);                                                              // 2393
    }                                                                                                                  // 2394
                                                                                                                       // 2395
    // clear _12h flag if hour is <= 12                                                                                // 2396
    if (config._a[HOUR] <= 12 &&                                                                                       // 2397
        getParsingFlags(config).bigHour === true &&                                                                    // 2398
        config._a[HOUR] > 0) {                                                                                         // 2399
        getParsingFlags(config).bigHour = undefined;                                                                   // 2400
    }                                                                                                                  // 2401
                                                                                                                       // 2402
    getParsingFlags(config).parsedDateParts = config._a.slice(0);                                                      // 2403
    getParsingFlags(config).meridiem = config._meridiem;                                                               // 2404
    // handle meridiem                                                                                                 // 2405
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);                              // 2406
                                                                                                                       // 2407
    configFromArray(config);                                                                                           // 2408
    checkOverflow(config);                                                                                             // 2409
}                                                                                                                      // 2410
                                                                                                                       // 2411
                                                                                                                       // 2412
function meridiemFixWrap (locale, hour, meridiem) {                                                                    // 2413
    var isPm;                                                                                                          // 2414
                                                                                                                       // 2415
    if (meridiem == null) {                                                                                            // 2416
        // nothing to do                                                                                               // 2417
        return hour;                                                                                                   // 2418
    }                                                                                                                  // 2419
    if (locale.meridiemHour != null) {                                                                                 // 2420
        return locale.meridiemHour(hour, meridiem);                                                                    // 2421
    } else if (locale.isPM != null) {                                                                                  // 2422
        // Fallback                                                                                                    // 2423
        isPm = locale.isPM(meridiem);                                                                                  // 2424
        if (isPm && hour < 12) {                                                                                       // 2425
            hour += 12;                                                                                                // 2426
        }                                                                                                              // 2427
        if (!isPm && hour === 12) {                                                                                    // 2428
            hour = 0;                                                                                                  // 2429
        }                                                                                                              // 2430
        return hour;                                                                                                   // 2431
    } else {                                                                                                           // 2432
        // this is not supposed to happen                                                                              // 2433
        return hour;                                                                                                   // 2434
    }                                                                                                                  // 2435
}                                                                                                                      // 2436
                                                                                                                       // 2437
// date from string and array of format strings                                                                        // 2438
function configFromStringAndArray(config) {                                                                            // 2439
    var tempConfig,                                                                                                    // 2440
        bestMoment,                                                                                                    // 2441
                                                                                                                       // 2442
        scoreToBeat,                                                                                                   // 2443
        i,                                                                                                             // 2444
        currentScore;                                                                                                  // 2445
                                                                                                                       // 2446
    if (config._f.length === 0) {                                                                                      // 2447
        getParsingFlags(config).invalidFormat = true;                                                                  // 2448
        config._d = new Date(NaN);                                                                                     // 2449
        return;                                                                                                        // 2450
    }                                                                                                                  // 2451
                                                                                                                       // 2452
    for (i = 0; i < config._f.length; i++) {                                                                           // 2453
        currentScore = 0;                                                                                              // 2454
        tempConfig = copyConfig({}, config);                                                                           // 2455
        if (config._useUTC != null) {                                                                                  // 2456
            tempConfig._useUTC = config._useUTC;                                                                       // 2457
        }                                                                                                              // 2458
        tempConfig._f = config._f[i];                                                                                  // 2459
        configFromStringAndFormat(tempConfig);                                                                         // 2460
                                                                                                                       // 2461
        if (!isValid(tempConfig)) {                                                                                    // 2462
            continue;                                                                                                  // 2463
        }                                                                                                              // 2464
                                                                                                                       // 2465
        // if there is any input that was not parsed add a penalty for that format                                     // 2466
        currentScore += getParsingFlags(tempConfig).charsLeftOver;                                                     // 2467
                                                                                                                       // 2468
        //or tokens                                                                                                    // 2469
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;                                          // 2470
                                                                                                                       // 2471
        getParsingFlags(tempConfig).score = currentScore;                                                              // 2472
                                                                                                                       // 2473
        if (scoreToBeat == null || currentScore < scoreToBeat) {                                                       // 2474
            scoreToBeat = currentScore;                                                                                // 2475
            bestMoment = tempConfig;                                                                                   // 2476
        }                                                                                                              // 2477
    }                                                                                                                  // 2478
                                                                                                                       // 2479
    extend(config, bestMoment || tempConfig);                                                                          // 2480
}                                                                                                                      // 2481
                                                                                                                       // 2482
function configFromObject(config) {                                                                                    // 2483
    if (config._d) {                                                                                                   // 2484
        return;                                                                                                        // 2485
    }                                                                                                                  // 2486
                                                                                                                       // 2487
    var i = normalizeObjectUnits(config._i);                                                                           // 2488
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {    // 2489
        return obj && parseInt(obj, 10);                                                                               // 2490
    });                                                                                                                // 2491
                                                                                                                       // 2492
    configFromArray(config);                                                                                           // 2493
}                                                                                                                      // 2494
                                                                                                                       // 2495
function createFromConfig (config) {                                                                                   // 2496
    var res = new Moment(checkOverflow(prepareConfig(config)));                                                        // 2497
    if (res._nextDay) {                                                                                                // 2498
        // Adding is smart enough around DST                                                                           // 2499
        res.add(1, 'd');                                                                                               // 2500
        res._nextDay = undefined;                                                                                      // 2501
    }                                                                                                                  // 2502
                                                                                                                       // 2503
    return res;                                                                                                        // 2504
}                                                                                                                      // 2505
                                                                                                                       // 2506
function prepareConfig (config) {                                                                                      // 2507
    var input = config._i,                                                                                             // 2508
        format = config._f;                                                                                            // 2509
                                                                                                                       // 2510
    config._locale = config._locale || getLocale(config._l);                                                           // 2511
                                                                                                                       // 2512
    if (input === null || (format === undefined && input === '')) {                                                    // 2513
        return createInvalid({nullInput: true});                                                                       // 2514
    }                                                                                                                  // 2515
                                                                                                                       // 2516
    if (typeof input === 'string') {                                                                                   // 2517
        config._i = input = config._locale.preparse(input);                                                            // 2518
    }                                                                                                                  // 2519
                                                                                                                       // 2520
    if (isMoment(input)) {                                                                                             // 2521
        return new Moment(checkOverflow(input));                                                                       // 2522
    } else if (isDate(input)) {                                                                                        // 2523
        config._d = input;                                                                                             // 2524
    } else if (isArray(format)) {                                                                                      // 2525
        configFromStringAndArray(config);                                                                              // 2526
    } else if (format) {                                                                                               // 2527
        configFromStringAndFormat(config);                                                                             // 2528
    }  else {                                                                                                          // 2529
        configFromInput(config);                                                                                       // 2530
    }                                                                                                                  // 2531
                                                                                                                       // 2532
    if (!isValid(config)) {                                                                                            // 2533
        config._d = null;                                                                                              // 2534
    }                                                                                                                  // 2535
                                                                                                                       // 2536
    return config;                                                                                                     // 2537
}                                                                                                                      // 2538
                                                                                                                       // 2539
function configFromInput(config) {                                                                                     // 2540
    var input = config._i;                                                                                             // 2541
    if (isUndefined(input)) {                                                                                          // 2542
        config._d = new Date(hooks.now());                                                                             // 2543
    } else if (isDate(input)) {                                                                                        // 2544
        config._d = new Date(input.valueOf());                                                                         // 2545
    } else if (typeof input === 'string') {                                                                            // 2546
        configFromString(config);                                                                                      // 2547
    } else if (isArray(input)) {                                                                                       // 2548
        config._a = map(input.slice(0), function (obj) {                                                               // 2549
            return parseInt(obj, 10);                                                                                  // 2550
        });                                                                                                            // 2551
        configFromArray(config);                                                                                       // 2552
    } else if (isObject(input)) {                                                                                      // 2553
        configFromObject(config);                                                                                      // 2554
    } else if (isNumber(input)) {                                                                                      // 2555
        // from milliseconds                                                                                           // 2556
        config._d = new Date(input);                                                                                   // 2557
    } else {                                                                                                           // 2558
        hooks.createFromInputFallback(config);                                                                         // 2559
    }                                                                                                                  // 2560
}                                                                                                                      // 2561
                                                                                                                       // 2562
function createLocalOrUTC (input, format, locale, strict, isUTC) {                                                     // 2563
    var c = {};                                                                                                        // 2564
                                                                                                                       // 2565
    if (locale === true || locale === false) {                                                                         // 2566
        strict = locale;                                                                                               // 2567
        locale = undefined;                                                                                            // 2568
    }                                                                                                                  // 2569
                                                                                                                       // 2570
    if ((isObject(input) && isObjectEmpty(input)) ||                                                                   // 2571
            (isArray(input) && input.length === 0)) {                                                                  // 2572
        input = undefined;                                                                                             // 2573
    }                                                                                                                  // 2574
    // object construction must be done this way.                                                                      // 2575
    // https://github.com/moment/moment/issues/1423                                                                    // 2576
    c._isAMomentObject = true;                                                                                         // 2577
    c._useUTC = c._isUTC = isUTC;                                                                                      // 2578
    c._l = locale;                                                                                                     // 2579
    c._i = input;                                                                                                      // 2580
    c._f = format;                                                                                                     // 2581
    c._strict = strict;                                                                                                // 2582
                                                                                                                       // 2583
    return createFromConfig(c);                                                                                        // 2584
}                                                                                                                      // 2585
                                                                                                                       // 2586
function createLocal (input, format, locale, strict) {                                                                 // 2587
    return createLocalOrUTC(input, format, locale, strict, false);                                                     // 2588
}                                                                                                                      // 2589
                                                                                                                       // 2590
var prototypeMin = deprecate(                                                                                          // 2591
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',              // 2592
    function () {                                                                                                      // 2593
        var other = createLocal.apply(null, arguments);                                                                // 2594
        if (this.isValid() && other.isValid()) {                                                                       // 2595
            return other < this ? this : other;                                                                        // 2596
        } else {                                                                                                       // 2597
            return createInvalid();                                                                                    // 2598
        }                                                                                                              // 2599
    }                                                                                                                  // 2600
);                                                                                                                     // 2601
                                                                                                                       // 2602
var prototypeMax = deprecate(                                                                                          // 2603
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',              // 2604
    function () {                                                                                                      // 2605
        var other = createLocal.apply(null, arguments);                                                                // 2606
        if (this.isValid() && other.isValid()) {                                                                       // 2607
            return other > this ? this : other;                                                                        // 2608
        } else {                                                                                                       // 2609
            return createInvalid();                                                                                    // 2610
        }                                                                                                              // 2611
    }                                                                                                                  // 2612
);                                                                                                                     // 2613
                                                                                                                       // 2614
// Pick a moment m from moments so that m[fn](other) is true for all                                                   // 2615
// other. This relies on the function fn to be transitive.                                                             // 2616
//                                                                                                                     // 2617
// moments should either be an array of moment objects or an array, whose                                              // 2618
// first element is an array of moment objects.                                                                        // 2619
function pickBy(fn, moments) {                                                                                         // 2620
    var res, i;                                                                                                        // 2621
    if (moments.length === 1 && isArray(moments[0])) {                                                                 // 2622
        moments = moments[0];                                                                                          // 2623
    }                                                                                                                  // 2624
    if (!moments.length) {                                                                                             // 2625
        return createLocal();                                                                                          // 2626
    }                                                                                                                  // 2627
    res = moments[0];                                                                                                  // 2628
    for (i = 1; i < moments.length; ++i) {                                                                             // 2629
        if (!moments[i].isValid() || moments[i][fn](res)) {                                                            // 2630
            res = moments[i];                                                                                          // 2631
        }                                                                                                              // 2632
    }                                                                                                                  // 2633
    return res;                                                                                                        // 2634
}                                                                                                                      // 2635
                                                                                                                       // 2636
// TODO: Use [].sort instead?                                                                                          // 2637
function min () {                                                                                                      // 2638
    var args = [].slice.call(arguments, 0);                                                                            // 2639
                                                                                                                       // 2640
    return pickBy('isBefore', args);                                                                                   // 2641
}                                                                                                                      // 2642
                                                                                                                       // 2643
function max () {                                                                                                      // 2644
    var args = [].slice.call(arguments, 0);                                                                            // 2645
                                                                                                                       // 2646
    return pickBy('isAfter', args);                                                                                    // 2647
}                                                                                                                      // 2648
                                                                                                                       // 2649
var now = function () {                                                                                                // 2650
    return Date.now ? Date.now() : +(new Date());                                                                      // 2651
};                                                                                                                     // 2652
                                                                                                                       // 2653
var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];                 // 2654
                                                                                                                       // 2655
function isDurationValid(m) {                                                                                          // 2656
    for (var key in m) {                                                                                               // 2657
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {                                   // 2658
            return false;                                                                                              // 2659
        }                                                                                                              // 2660
    }                                                                                                                  // 2661
                                                                                                                       // 2662
    var unitHasDecimal = false;                                                                                        // 2663
    for (var i = 0; i < ordering.length; ++i) {                                                                        // 2664
        if (m[ordering[i]]) {                                                                                          // 2665
            if (unitHasDecimal) {                                                                                      // 2666
                return false; // only allow non-integers for smallest unit                                             // 2667
            }                                                                                                          // 2668
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {                                                // 2669
                unitHasDecimal = true;                                                                                 // 2670
            }                                                                                                          // 2671
        }                                                                                                              // 2672
    }                                                                                                                  // 2673
                                                                                                                       // 2674
    return true;                                                                                                       // 2675
}                                                                                                                      // 2676
                                                                                                                       // 2677
function isValid$1() {                                                                                                 // 2678
    return this._isValid;                                                                                              // 2679
}                                                                                                                      // 2680
                                                                                                                       // 2681
function createInvalid$1() {                                                                                           // 2682
    return createDuration(NaN);                                                                                        // 2683
}                                                                                                                      // 2684
                                                                                                                       // 2685
function Duration (duration) {                                                                                         // 2686
    var normalizedInput = normalizeObjectUnits(duration),                                                              // 2687
        years = normalizedInput.year || 0,                                                                             // 2688
        quarters = normalizedInput.quarter || 0,                                                                       // 2689
        months = normalizedInput.month || 0,                                                                           // 2690
        weeks = normalizedInput.week || 0,                                                                             // 2691
        days = normalizedInput.day || 0,                                                                               // 2692
        hours = normalizedInput.hour || 0,                                                                             // 2693
        minutes = normalizedInput.minute || 0,                                                                         // 2694
        seconds = normalizedInput.second || 0,                                                                         // 2695
        milliseconds = normalizedInput.millisecond || 0;                                                               // 2696
                                                                                                                       // 2697
    this._isValid = isDurationValid(normalizedInput);                                                                  // 2698
                                                                                                                       // 2699
    // representation for dateAddRemove                                                                                // 2700
    this._milliseconds = +milliseconds +                                                                               // 2701
        seconds * 1e3 + // 1000                                                                                        // 2702
        minutes * 6e4 + // 1000 * 60                                                                                   // 2703
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a                                                    // 2705
    // day when working around DST, we need to store them separately                                                   // 2706
    this._days = +days +                                                                                               // 2707
        weeks * 7;                                                                                                     // 2708
    // It is impossible translate months into days without knowing                                                     // 2709
    // which months you are are talking about, so we have to store                                                     // 2710
    // it separately.                                                                                                  // 2711
    this._months = +months +                                                                                           // 2712
        quarters * 3 +                                                                                                 // 2713
        years * 12;                                                                                                    // 2714
                                                                                                                       // 2715
    this._data = {};                                                                                                   // 2716
                                                                                                                       // 2717
    this._locale = getLocale();                                                                                        // 2718
                                                                                                                       // 2719
    this._bubble();                                                                                                    // 2720
}                                                                                                                      // 2721
                                                                                                                       // 2722
function isDuration (obj) {                                                                                            // 2723
    return obj instanceof Duration;                                                                                    // 2724
}                                                                                                                      // 2725
                                                                                                                       // 2726
function absRound (number) {                                                                                           // 2727
    if (number < 0) {                                                                                                  // 2728
        return Math.round(-1 * number) * -1;                                                                           // 2729
    } else {                                                                                                           // 2730
        return Math.round(number);                                                                                     // 2731
    }                                                                                                                  // 2732
}                                                                                                                      // 2733
                                                                                                                       // 2734
// FORMATTING                                                                                                          // 2735
                                                                                                                       // 2736
function offset (token, separator) {                                                                                   // 2737
    addFormatToken(token, 0, 0, function () {                                                                          // 2738
        var offset = this.utcOffset();                                                                                 // 2739
        var sign = '+';                                                                                                // 2740
        if (offset < 0) {                                                                                              // 2741
            offset = -offset;                                                                                          // 2742
            sign = '-';                                                                                                // 2743
        }                                                                                                              // 2744
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);                         // 2745
    });                                                                                                                // 2746
}                                                                                                                      // 2747
                                                                                                                       // 2748
offset('Z', ':');                                                                                                      // 2749
offset('ZZ', '');                                                                                                      // 2750
                                                                                                                       // 2751
// PARSING                                                                                                             // 2752
                                                                                                                       // 2753
addRegexToken('Z',  matchShortOffset);                                                                                 // 2754
addRegexToken('ZZ', matchShortOffset);                                                                                 // 2755
addParseToken(['Z', 'ZZ'], function (input, array, config) {                                                           // 2756
    config._useUTC = true;                                                                                             // 2757
    config._tzm = offsetFromString(matchShortOffset, input);                                                           // 2758
});                                                                                                                    // 2759
                                                                                                                       // 2760
// HELPERS                                                                                                             // 2761
                                                                                                                       // 2762
// timezone chunker                                                                                                    // 2763
// '+10:00' > ['10',  '00']                                                                                            // 2764
// '-1530'  > ['-15', '30']                                                                                            // 2765
var chunkOffset = /([\+\-]|\d\d)/gi;                                                                                   // 2766
                                                                                                                       // 2767
function offsetFromString(matcher, string) {                                                                           // 2768
    var matches = (string || '').match(matcher);                                                                       // 2769
                                                                                                                       // 2770
    if (matches === null) {                                                                                            // 2771
        return null;                                                                                                   // 2772
    }                                                                                                                  // 2773
                                                                                                                       // 2774
    var chunk   = matches[matches.length - 1] || [];                                                                   // 2775
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];                                                      // 2776
    var minutes = +(parts[1] * 60) + toInt(parts[2]);                                                                  // 2777
                                                                                                                       // 2778
    return minutes === 0 ?                                                                                             // 2779
      0 :                                                                                                              // 2780
      parts[0] === '+' ? minutes : -minutes;                                                                           // 2781
}                                                                                                                      // 2782
                                                                                                                       // 2783
// Return a moment from input, that is local/utc/zone equivalent to model.                                             // 2784
function cloneWithOffset(input, model) {                                                                               // 2785
    var res, diff;                                                                                                     // 2786
    if (model._isUTC) {                                                                                                // 2787
        res = model.clone();                                                                                           // 2788
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();    // 2789
        // Use low-level api, because this fn is low-level api.                                                        // 2790
        res._d.setTime(res._d.valueOf() + diff);                                                                       // 2791
        hooks.updateOffset(res, false);                                                                                // 2792
        return res;                                                                                                    // 2793
    } else {                                                                                                           // 2794
        return createLocal(input).local();                                                                             // 2795
    }                                                                                                                  // 2796
}                                                                                                                      // 2797
                                                                                                                       // 2798
function getDateOffset (m) {                                                                                           // 2799
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.                                                  // 2800
    // https://github.com/moment/moment/pull/1871                                                                      // 2801
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;                                                            // 2802
}                                                                                                                      // 2803
                                                                                                                       // 2804
// HOOKS                                                                                                               // 2805
                                                                                                                       // 2806
// This function will be called whenever a moment is mutated.                                                          // 2807
// It is intended to keep the offset in sync with the timezone.                                                        // 2808
hooks.updateOffset = function () {};                                                                                   // 2809
                                                                                                                       // 2810
// MOMENTS                                                                                                             // 2811
                                                                                                                       // 2812
// keepLocalTime = true means only change the timezone, without                                                        // 2813
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->                                                // 2814
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset                                                 // 2815
// +0200, so we adjust the time as needed, to be valid.                                                                // 2816
//                                                                                                                     // 2817
// Keeping the time actually adds/subtracts (one hour)                                                                 // 2818
// from the actual represented time. That is why we call updateOffset                                                  // 2819
// a second time. In case it wants us to change the offset again                                                       // 2820
// _changeInProgress == true case, then we have to adjust, because                                                     // 2821
// there is no such time in the given timezone.                                                                        // 2822
function getSetOffset (input, keepLocalTime, keepMinutes) {                                                            // 2823
    var offset = this._offset || 0,                                                                                    // 2824
        localAdjust;                                                                                                   // 2825
    if (!this.isValid()) {                                                                                             // 2826
        return input != null ? this : NaN;                                                                             // 2827
    }                                                                                                                  // 2828
    if (input != null) {                                                                                               // 2829
        if (typeof input === 'string') {                                                                               // 2830
            input = offsetFromString(matchShortOffset, input);                                                         // 2831
            if (input === null) {                                                                                      // 2832
                return this;                                                                                           // 2833
            }                                                                                                          // 2834
        } else if (Math.abs(input) < 16 && !keepMinutes) {                                                             // 2835
            input = input * 60;                                                                                        // 2836
        }                                                                                                              // 2837
        if (!this._isUTC && keepLocalTime) {                                                                           // 2838
            localAdjust = getDateOffset(this);                                                                         // 2839
        }                                                                                                              // 2840
        this._offset = input;                                                                                          // 2841
        this._isUTC = true;                                                                                            // 2842
        if (localAdjust != null) {                                                                                     // 2843
            this.add(localAdjust, 'm');                                                                                // 2844
        }                                                                                                              // 2845
        if (offset !== input) {                                                                                        // 2846
            if (!keepLocalTime || this._changeInProgress) {                                                            // 2847
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);                                      // 2848
            } else if (!this._changeInProgress) {                                                                      // 2849
                this._changeInProgress = true;                                                                         // 2850
                hooks.updateOffset(this, true);                                                                        // 2851
                this._changeInProgress = null;                                                                         // 2852
            }                                                                                                          // 2853
        }                                                                                                              // 2854
        return this;                                                                                                   // 2855
    } else {                                                                                                           // 2856
        return this._isUTC ? offset : getDateOffset(this);                                                             // 2857
    }                                                                                                                  // 2858
}                                                                                                                      // 2859
                                                                                                                       // 2860
function getSetZone (input, keepLocalTime) {                                                                           // 2861
    if (input != null) {                                                                                               // 2862
        if (typeof input !== 'string') {                                                                               // 2863
            input = -input;                                                                                            // 2864
        }                                                                                                              // 2865
                                                                                                                       // 2866
        this.utcOffset(input, keepLocalTime);                                                                          // 2867
                                                                                                                       // 2868
        return this;                                                                                                   // 2869
    } else {                                                                                                           // 2870
        return -this.utcOffset();                                                                                      // 2871
    }                                                                                                                  // 2872
}                                                                                                                      // 2873
                                                                                                                       // 2874
function setOffsetToUTC (keepLocalTime) {                                                                              // 2875
    return this.utcOffset(0, keepLocalTime);                                                                           // 2876
}                                                                                                                      // 2877
                                                                                                                       // 2878
function setOffsetToLocal (keepLocalTime) {                                                                            // 2879
    if (this._isUTC) {                                                                                                 // 2880
        this.utcOffset(0, keepLocalTime);                                                                              // 2881
        this._isUTC = false;                                                                                           // 2882
                                                                                                                       // 2883
        if (keepLocalTime) {                                                                                           // 2884
            this.subtract(getDateOffset(this), 'm');                                                                   // 2885
        }                                                                                                              // 2886
    }                                                                                                                  // 2887
    return this;                                                                                                       // 2888
}                                                                                                                      // 2889
                                                                                                                       // 2890
function setOffsetToParsedOffset () {                                                                                  // 2891
    if (this._tzm != null) {                                                                                           // 2892
        this.utcOffset(this._tzm, false, true);                                                                        // 2893
    } else if (typeof this._i === 'string') {                                                                          // 2894
        var tZone = offsetFromString(matchOffset, this._i);                                                            // 2895
        if (tZone != null) {                                                                                           // 2896
            this.utcOffset(tZone);                                                                                     // 2897
        }                                                                                                              // 2898
        else {                                                                                                         // 2899
            this.utcOffset(0, true);                                                                                   // 2900
        }                                                                                                              // 2901
    }                                                                                                                  // 2902
    return this;                                                                                                       // 2903
}                                                                                                                      // 2904
                                                                                                                       // 2905
function hasAlignedHourOffset (input) {                                                                                // 2906
    if (!this.isValid()) {                                                                                             // 2907
        return false;                                                                                                  // 2908
    }                                                                                                                  // 2909
    input = input ? createLocal(input).utcOffset() : 0;                                                                // 2910
                                                                                                                       // 2911
    return (this.utcOffset() - input) % 60 === 0;                                                                      // 2912
}                                                                                                                      // 2913
                                                                                                                       // 2914
function isDaylightSavingTime () {                                                                                     // 2915
    return (                                                                                                           // 2916
        this.utcOffset() > this.clone().month(0).utcOffset() ||                                                        // 2917
        this.utcOffset() > this.clone().month(5).utcOffset()                                                           // 2918
    );                                                                                                                 // 2919
}                                                                                                                      // 2920
                                                                                                                       // 2921
function isDaylightSavingTimeShifted () {                                                                              // 2922
    if (!isUndefined(this._isDSTShifted)) {                                                                            // 2923
        return this._isDSTShifted;                                                                                     // 2924
    }                                                                                                                  // 2925
                                                                                                                       // 2926
    var c = {};                                                                                                        // 2927
                                                                                                                       // 2928
    copyConfig(c, this);                                                                                               // 2929
    c = prepareConfig(c);                                                                                              // 2930
                                                                                                                       // 2931
    if (c._a) {                                                                                                        // 2932
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);                                                    // 2933
        this._isDSTShifted = this.isValid() &&                                                                         // 2934
            compareArrays(c._a, other.toArray()) > 0;                                                                  // 2935
    } else {                                                                                                           // 2936
        this._isDSTShifted = false;                                                                                    // 2937
    }                                                                                                                  // 2938
                                                                                                                       // 2939
    return this._isDSTShifted;                                                                                         // 2940
}                                                                                                                      // 2941
                                                                                                                       // 2942
function isLocal () {                                                                                                  // 2943
    return this.isValid() ? !this._isUTC : false;                                                                      // 2944
}                                                                                                                      // 2945
                                                                                                                       // 2946
function isUtcOffset () {                                                                                              // 2947
    return this.isValid() ? this._isUTC : false;                                                                       // 2948
}                                                                                                                      // 2949
                                                                                                                       // 2950
function isUtc () {                                                                                                    // 2951
    return this.isValid() ? this._isUTC && this._offset === 0 : false;                                                 // 2952
}                                                                                                                      // 2953
                                                                                                                       // 2954
// ASP.NET json date format regex                                                                                      // 2955
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;                                             // 2956
                                                                                                                       // 2957
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html                           // 2958
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere                                           // 2959
// and further modified to allow for strings containing both week and day                                              // 2960
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                                                                                                                       // 2962
function createDuration (input, key) {                                                                                 // 2963
    var duration = input,                                                                                              // 2964
        // matching against regexp is expensive, do it on demand                                                       // 2965
        match = null,                                                                                                  // 2966
        sign,                                                                                                          // 2967
        ret,                                                                                                           // 2968
        diffRes;                                                                                                       // 2969
                                                                                                                       // 2970
    if (isDuration(input)) {                                                                                           // 2971
        duration = {                                                                                                   // 2972
            ms : input._milliseconds,                                                                                  // 2973
            d  : input._days,                                                                                          // 2974
            M  : input._months                                                                                         // 2975
        };                                                                                                             // 2976
    } else if (isNumber(input)) {                                                                                      // 2977
        duration = {};                                                                                                 // 2978
        if (key) {                                                                                                     // 2979
            duration[key] = input;                                                                                     // 2980
        } else {                                                                                                       // 2981
            duration.milliseconds = input;                                                                             // 2982
        }                                                                                                              // 2983
    } else if (!!(match = aspNetRegex.exec(input))) {                                                                  // 2984
        sign = (match[1] === '-') ? -1 : 1;                                                                            // 2985
        duration = {                                                                                                   // 2986
            y  : 0,                                                                                                    // 2987
            d  : toInt(match[DATE])                         * sign,                                                    // 2988
            h  : toInt(match[HOUR])                         * sign,                                                    // 2989
            m  : toInt(match[MINUTE])                       * sign,                                                    // 2990
            s  : toInt(match[SECOND])                       * sign,                                                    // 2991
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };                                                                                                             // 2993
    } else if (!!(match = isoRegex.exec(input))) {                                                                     // 2994
        sign = (match[1] === '-') ? -1 : 1;                                                                            // 2995
        duration = {                                                                                                   // 2996
            y : parseIso(match[2], sign),                                                                              // 2997
            M : parseIso(match[3], sign),                                                                              // 2998
            w : parseIso(match[4], sign),                                                                              // 2999
            d : parseIso(match[5], sign),                                                                              // 3000
            h : parseIso(match[6], sign),                                                                              // 3001
            m : parseIso(match[7], sign),                                                                              // 3002
            s : parseIso(match[8], sign)                                                                               // 3003
        };                                                                                                             // 3004
    } else if (duration == null) {// checks for null or undefined                                                      // 3005
        duration = {};                                                                                                 // 3006
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {                             // 3007
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));                             // 3008
                                                                                                                       // 3009
        duration = {};                                                                                                 // 3010
        duration.ms = diffRes.milliseconds;                                                                            // 3011
        duration.M = diffRes.months;                                                                                   // 3012
    }                                                                                                                  // 3013
                                                                                                                       // 3014
    ret = new Duration(duration);                                                                                      // 3015
                                                                                                                       // 3016
    if (isDuration(input) && hasOwnProp(input, '_locale')) {                                                           // 3017
        ret._locale = input._locale;                                                                                   // 3018
    }                                                                                                                  // 3019
                                                                                                                       // 3020
    return ret;                                                                                                        // 3021
}                                                                                                                      // 3022
                                                                                                                       // 3023
createDuration.fn = Duration.prototype;                                                                                // 3024
createDuration.invalid = createInvalid$1;                                                                              // 3025
                                                                                                                       // 3026
function parseIso (inp, sign) {                                                                                        // 3027
    // We'd normally use ~~inp for this, but unfortunately it also                                                     // 3028
    // converts floats to ints.                                                                                        // 3029
    // inp may be undefined, so careful calling replace on it.                                                         // 3030
    var res = inp && parseFloat(inp.replace(',', '.'));                                                                // 3031
    // apply sign while we're at it                                                                                    // 3032
    return (isNaN(res) ? 0 : res) * sign;                                                                              // 3033
}                                                                                                                      // 3034
                                                                                                                       // 3035
function positiveMomentsDifference(base, other) {                                                                      // 3036
    var res = {milliseconds: 0, months: 0};                                                                            // 3037
                                                                                                                       // 3038
    res.months = other.month() - base.month() +                                                                        // 3039
        (other.year() - base.year()) * 12;                                                                             // 3040
    if (base.clone().add(res.months, 'M').isAfter(other)) {                                                            // 3041
        --res.months;                                                                                                  // 3042
    }                                                                                                                  // 3043
                                                                                                                       // 3044
    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));                                                  // 3045
                                                                                                                       // 3046
    return res;                                                                                                        // 3047
}                                                                                                                      // 3048
                                                                                                                       // 3049
function momentsDifference(base, other) {                                                                              // 3050
    var res;                                                                                                           // 3051
    if (!(base.isValid() && other.isValid())) {                                                                        // 3052
        return {milliseconds: 0, months: 0};                                                                           // 3053
    }                                                                                                                  // 3054
                                                                                                                       // 3055
    other = cloneWithOffset(other, base);                                                                              // 3056
    if (base.isBefore(other)) {                                                                                        // 3057
        res = positiveMomentsDifference(base, other);                                                                  // 3058
    } else {                                                                                                           // 3059
        res = positiveMomentsDifference(other, base);                                                                  // 3060
        res.milliseconds = -res.milliseconds;                                                                          // 3061
        res.months = -res.months;                                                                                      // 3062
    }                                                                                                                  // 3063
                                                                                                                       // 3064
    return res;                                                                                                        // 3065
}                                                                                                                      // 3066
                                                                                                                       // 3067
// TODO: remove 'name' arg after deprecation is removed                                                                // 3068
function createAdder(direction, name) {                                                                                // 3069
    return function (val, period) {                                                                                    // 3070
        var dur, tmp;                                                                                                  // 3071
        //invert the arguments, but complain about it                                                                  // 3072
        if (period !== null && !isNaN(+period)) {                                                                      // 3073
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');                           // 3075
            tmp = val; val = period; period = tmp;                                                                     // 3076
        }                                                                                                              // 3077
                                                                                                                       // 3078
        val = typeof val === 'string' ? +val : val;                                                                    // 3079
        dur = createDuration(val, period);                                                                             // 3080
        addSubtract(this, dur, direction);                                                                             // 3081
        return this;                                                                                                   // 3082
    };                                                                                                                 // 3083
}                                                                                                                      // 3084
                                                                                                                       // 3085
function addSubtract (mom, duration, isAdding, updateOffset) {                                                         // 3086
    var milliseconds = duration._milliseconds,                                                                         // 3087
        days = absRound(duration._days),                                                                               // 3088
        months = absRound(duration._months);                                                                           // 3089
                                                                                                                       // 3090
    if (!mom.isValid()) {                                                                                              // 3091
        // No op                                                                                                       // 3092
        return;                                                                                                        // 3093
    }                                                                                                                  // 3094
                                                                                                                       // 3095
    updateOffset = updateOffset == null ? true : updateOffset;                                                         // 3096
                                                                                                                       // 3097
    if (milliseconds) {                                                                                                // 3098
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);                                                    // 3099
    }                                                                                                                  // 3100
    if (days) {                                                                                                        // 3101
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);                                                        // 3102
    }                                                                                                                  // 3103
    if (months) {                                                                                                      // 3104
        setMonth(mom, get(mom, 'Month') + months * isAdding);                                                          // 3105
    }                                                                                                                  // 3106
    if (updateOffset) {                                                                                                // 3107
        hooks.updateOffset(mom, days || months);                                                                       // 3108
    }                                                                                                                  // 3109
}                                                                                                                      // 3110
                                                                                                                       // 3111
var add      = createAdder(1, 'add');                                                                                  // 3112
var subtract = createAdder(-1, 'subtract');                                                                            // 3113
                                                                                                                       // 3114
function getCalendarFormat(myMoment, now) {                                                                            // 3115
    var diff = myMoment.diff(now, 'days', true);                                                                       // 3116
    return diff < -6 ? 'sameElse' :                                                                                    // 3117
            diff < -1 ? 'lastWeek' :                                                                                   // 3118
            diff < 0 ? 'lastDay' :                                                                                     // 3119
            diff < 1 ? 'sameDay' :                                                                                     // 3120
            diff < 2 ? 'nextDay' :                                                                                     // 3121
            diff < 7 ? 'nextWeek' : 'sameElse';                                                                        // 3122
}                                                                                                                      // 3123
                                                                                                                       // 3124
function calendar$1 (time, formats) {                                                                                  // 3125
    // We want to compare the start of today, vs this.                                                                 // 3126
    // Getting start-of-today depends on whether we're local/utc/offset or not.                                        // 3127
    var now = time || createLocal(),                                                                                   // 3128
        sod = cloneWithOffset(now, this).startOf('day'),                                                               // 3129
        format = hooks.calendarFormat(this, sod) || 'sameElse';                                                        // 3130
                                                                                                                       // 3131
    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);         // 3132
                                                                                                                       // 3133
    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));                          // 3134
}                                                                                                                      // 3135
                                                                                                                       // 3136
function clone () {                                                                                                    // 3137
    return new Moment(this);                                                                                           // 3138
}                                                                                                                      // 3139
                                                                                                                       // 3140
function isAfter (input, units) {                                                                                      // 3141
    var localInput = isMoment(input) ? input : createLocal(input);                                                     // 3142
    if (!(this.isValid() && localInput.isValid())) {                                                                   // 3143
        return false;                                                                                                  // 3144
    }                                                                                                                  // 3145
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                               // 3146
    if (units === 'millisecond') {                                                                                     // 3147
        return this.valueOf() > localInput.valueOf();                                                                  // 3148
    } else {                                                                                                           // 3149
        return localInput.valueOf() < this.clone().startOf(units).valueOf();                                           // 3150
    }                                                                                                                  // 3151
}                                                                                                                      // 3152
                                                                                                                       // 3153
function isBefore (input, units) {                                                                                     // 3154
    var localInput = isMoment(input) ? input : createLocal(input);                                                     // 3155
    if (!(this.isValid() && localInput.isValid())) {                                                                   // 3156
        return false;                                                                                                  // 3157
    }                                                                                                                  // 3158
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                               // 3159
    if (units === 'millisecond') {                                                                                     // 3160
        return this.valueOf() < localInput.valueOf();                                                                  // 3161
    } else {                                                                                                           // 3162
        return this.clone().endOf(units).valueOf() < localInput.valueOf();                                             // 3163
    }                                                                                                                  // 3164
}                                                                                                                      // 3165
                                                                                                                       // 3166
function isBetween (from, to, units, inclusivity) {                                                                    // 3167
    inclusivity = inclusivity || '()';                                                                                 // 3168
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&                       // 3169
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));                                // 3170
}                                                                                                                      // 3171
                                                                                                                       // 3172
function isSame (input, units) {                                                                                       // 3173
    var localInput = isMoment(input) ? input : createLocal(input),                                                     // 3174
        inputMs;                                                                                                       // 3175
    if (!(this.isValid() && localInput.isValid())) {                                                                   // 3176
        return false;                                                                                                  // 3177
    }                                                                                                                  // 3178
    units = normalizeUnits(units || 'millisecond');                                                                    // 3179
    if (units === 'millisecond') {                                                                                     // 3180
        return this.valueOf() === localInput.valueOf();                                                                // 3181
    } else {                                                                                                           // 3182
        inputMs = localInput.valueOf();                                                                                // 3183
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();     // 3184
    }                                                                                                                  // 3185
}                                                                                                                      // 3186
                                                                                                                       // 3187
function isSameOrAfter (input, units) {                                                                                // 3188
    return this.isSame(input, units) || this.isAfter(input,units);                                                     // 3189
}                                                                                                                      // 3190
                                                                                                                       // 3191
function isSameOrBefore (input, units) {                                                                               // 3192
    return this.isSame(input, units) || this.isBefore(input,units);                                                    // 3193
}                                                                                                                      // 3194
                                                                                                                       // 3195
function diff (input, units, asFloat) {                                                                                // 3196
    var that,                                                                                                          // 3197
        zoneDelta,                                                                                                     // 3198
        delta, output;                                                                                                 // 3199
                                                                                                                       // 3200
    if (!this.isValid()) {                                                                                             // 3201
        return NaN;                                                                                                    // 3202
    }                                                                                                                  // 3203
                                                                                                                       // 3204
    that = cloneWithOffset(input, this);                                                                               // 3205
                                                                                                                       // 3206
    if (!that.isValid()) {                                                                                             // 3207
        return NaN;                                                                                                    // 3208
    }                                                                                                                  // 3209
                                                                                                                       // 3210
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;                                                           // 3211
                                                                                                                       // 3212
    units = normalizeUnits(units);                                                                                     // 3213
                                                                                                                       // 3214
    if (units === 'year' || units === 'month' || units === 'quarter') {                                                // 3215
        output = monthDiff(this, that);                                                                                // 3216
        if (units === 'quarter') {                                                                                     // 3217
            output = output / 3;                                                                                       // 3218
        } else if (units === 'year') {                                                                                 // 3219
            output = output / 12;                                                                                      // 3220
        }                                                                                                              // 3221
    } else {                                                                                                           // 3222
        delta = this - that;                                                                                           // 3223
        output = units === 'second' ? delta / 1e3 : // 1000                                                            // 3224
            units === 'minute' ? delta / 6e4 : // 1000 * 60                                                            // 3225
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60                                                        // 3226
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst                         // 3227
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst                   // 3228
            delta;                                                                                                     // 3229
    }                                                                                                                  // 3230
    return asFloat ? output : absFloor(output);                                                                        // 3231
}                                                                                                                      // 3232
                                                                                                                       // 3233
function monthDiff (a, b) {                                                                                            // 3234
    // difference in months                                                                                            // 3235
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),                                       // 3236
        // b is in (anchor - 1 month, anchor + 1 month)                                                                // 3237
        anchor = a.clone().add(wholeMonthDiff, 'months'),                                                              // 3238
        anchor2, adjust;                                                                                               // 3239
                                                                                                                       // 3240
    if (b - anchor < 0) {                                                                                              // 3241
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');                                                         // 3242
        // linear across the month                                                                                     // 3243
        adjust = (b - anchor) / (anchor - anchor2);                                                                    // 3244
    } else {                                                                                                           // 3245
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');                                                         // 3246
        // linear across the month                                                                                     // 3247
        adjust = (b - anchor) / (anchor2 - anchor);                                                                    // 3248
    }                                                                                                                  // 3249
                                                                                                                       // 3250
    //check for negative zero, return zero if negative zero                                                            // 3251
    return -(wholeMonthDiff + adjust) || 0;                                                                            // 3252
}                                                                                                                      // 3253
                                                                                                                       // 3254
hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';                                                                          // 3255
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';                                                                     // 3256
                                                                                                                       // 3257
function toString () {                                                                                                 // 3258
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');                                       // 3259
}                                                                                                                      // 3260
                                                                                                                       // 3261
function toISOString() {                                                                                               // 3262
    if (!this.isValid()) {                                                                                             // 3263
        return null;                                                                                                   // 3264
    }                                                                                                                  // 3265
    var m = this.clone().utc();                                                                                        // 3266
    if (m.year() < 0 || m.year() > 9999) {                                                                             // 3267
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                      // 3268
    }                                                                                                                  // 3269
    if (isFunction(Date.prototype.toISOString)) {                                                                      // 3270
        // native implementation is ~50x faster, use it when we can                                                    // 3271
        return this.toDate().toISOString();                                                                            // 3272
    }                                                                                                                  // 3273
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                            // 3274
}                                                                                                                      // 3275
                                                                                                                       // 3276
/**                                                                                                                    // 3277
 * Return a human readable representation of a moment that can                                                         // 3278
 * also be evaluated to get a new moment which is the same                                                             // 3279
 *                                                                                                                     // 3280
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects                     // 3281
 */                                                                                                                    // 3282
function inspect () {                                                                                                  // 3283
    if (!this.isValid()) {                                                                                             // 3284
        return 'moment.invalid(/* ' + this._i + ' */)';                                                                // 3285
    }                                                                                                                  // 3286
    var func = 'moment';                                                                                               // 3287
    var zone = '';                                                                                                     // 3288
    if (!this.isLocal()) {                                                                                             // 3289
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';                                             // 3290
        zone = 'Z';                                                                                                    // 3291
    }                                                                                                                  // 3292
    var prefix = '[' + func + '("]';                                                                                   // 3293
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';                                          // 3294
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';                                                                            // 3295
    var suffix = zone + '[")]';                                                                                        // 3296
                                                                                                                       // 3297
    return this.format(prefix + year + datetime + suffix);                                                             // 3298
}                                                                                                                      // 3299
                                                                                                                       // 3300
function format (inputString) {                                                                                        // 3301
    if (!inputString) {                                                                                                // 3302
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;                                     // 3303
    }                                                                                                                  // 3304
    var output = formatMoment(this, inputString);                                                                      // 3305
    return this.localeData().postformat(output);                                                                       // 3306
}                                                                                                                      // 3307
                                                                                                                       // 3308
function from (time, withoutSuffix) {                                                                                  // 3309
    if (this.isValid() &&                                                                                              // 3310
            ((isMoment(time) && time.isValid()) ||                                                                     // 3311
             createLocal(time).isValid())) {                                                                           // 3312
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);                  // 3313
    } else {                                                                                                           // 3314
        return this.localeData().invalidDate();                                                                        // 3315
    }                                                                                                                  // 3316
}                                                                                                                      // 3317
                                                                                                                       // 3318
function fromNow (withoutSuffix) {                                                                                     // 3319
    return this.from(createLocal(), withoutSuffix);                                                                    // 3320
}                                                                                                                      // 3321
                                                                                                                       // 3322
function to (time, withoutSuffix) {                                                                                    // 3323
    if (this.isValid() &&                                                                                              // 3324
            ((isMoment(time) && time.isValid()) ||                                                                     // 3325
             createLocal(time).isValid())) {                                                                           // 3326
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);                  // 3327
    } else {                                                                                                           // 3328
        return this.localeData().invalidDate();                                                                        // 3329
    }                                                                                                                  // 3330
}                                                                                                                      // 3331
                                                                                                                       // 3332
function toNow (withoutSuffix) {                                                                                       // 3333
    return this.to(createLocal(), withoutSuffix);                                                                      // 3334
}                                                                                                                      // 3335
                                                                                                                       // 3336
// If passed a locale key, it will set the locale for this                                                             // 3337
// instance.  Otherwise, it will return the locale configuration                                                       // 3338
// variables for this instance.                                                                                        // 3339
function locale (key) {                                                                                                // 3340
    var newLocaleData;                                                                                                 // 3341
                                                                                                                       // 3342
    if (key === undefined) {                                                                                           // 3343
        return this._locale._abbr;                                                                                     // 3344
    } else {                                                                                                           // 3345
        newLocaleData = getLocale(key);                                                                                // 3346
        if (newLocaleData != null) {                                                                                   // 3347
            this._locale = newLocaleData;                                                                              // 3348
        }                                                                                                              // 3349
        return this;                                                                                                   // 3350
    }                                                                                                                  // 3351
}                                                                                                                      // 3352
                                                                                                                       // 3353
var lang = deprecate(                                                                                                  // 3354
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {                                                                                                   // 3356
        if (key === undefined) {                                                                                       // 3357
            return this.localeData();                                                                                  // 3358
        } else {                                                                                                       // 3359
            return this.locale(key);                                                                                   // 3360
        }                                                                                                              // 3361
    }                                                                                                                  // 3362
);                                                                                                                     // 3363
                                                                                                                       // 3364
function localeData () {                                                                                               // 3365
    return this._locale;                                                                                               // 3366
}                                                                                                                      // 3367
                                                                                                                       // 3368
function startOf (units) {                                                                                             // 3369
    units = normalizeUnits(units);                                                                                     // 3370
    // the following switch intentionally omits break keywords                                                         // 3371
    // to utilize falling through the cases.                                                                           // 3372
    switch (units) {                                                                                                   // 3373
        case 'year':                                                                                                   // 3374
            this.month(0);                                                                                             // 3375
            /* falls through */                                                                                        // 3376
        case 'quarter':                                                                                                // 3377
        case 'month':                                                                                                  // 3378
            this.date(1);                                                                                              // 3379
            /* falls through */                                                                                        // 3380
        case 'week':                                                                                                   // 3381
        case 'isoWeek':                                                                                                // 3382
        case 'day':                                                                                                    // 3383
        case 'date':                                                                                                   // 3384
            this.hours(0);                                                                                             // 3385
            /* falls through */                                                                                        // 3386
        case 'hour':                                                                                                   // 3387
            this.minutes(0);                                                                                           // 3388
            /* falls through */                                                                                        // 3389
        case 'minute':                                                                                                 // 3390
            this.seconds(0);                                                                                           // 3391
            /* falls through */                                                                                        // 3392
        case 'second':                                                                                                 // 3393
            this.milliseconds(0);                                                                                      // 3394
    }                                                                                                                  // 3395
                                                                                                                       // 3396
    // weeks are a special case                                                                                        // 3397
    if (units === 'week') {                                                                                            // 3398
        this.weekday(0);                                                                                               // 3399
    }                                                                                                                  // 3400
    if (units === 'isoWeek') {                                                                                         // 3401
        this.isoWeekday(1);                                                                                            // 3402
    }                                                                                                                  // 3403
                                                                                                                       // 3404
    // quarters are also special                                                                                       // 3405
    if (units === 'quarter') {                                                                                         // 3406
        this.month(Math.floor(this.month() / 3) * 3);                                                                  // 3407
    }                                                                                                                  // 3408
                                                                                                                       // 3409
    return this;                                                                                                       // 3410
}                                                                                                                      // 3411
                                                                                                                       // 3412
function endOf (units) {                                                                                               // 3413
    units = normalizeUnits(units);                                                                                     // 3414
    if (units === undefined || units === 'millisecond') {                                                              // 3415
        return this;                                                                                                   // 3416
    }                                                                                                                  // 3417
                                                                                                                       // 3418
    // 'date' is an alias for 'day', so it should be considered as such.                                               // 3419
    if (units === 'date') {                                                                                            // 3420
        units = 'day';                                                                                                 // 3421
    }                                                                                                                  // 3422
                                                                                                                       // 3423
    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');                       // 3424
}                                                                                                                      // 3425
                                                                                                                       // 3426
function valueOf () {                                                                                                  // 3427
    return this._d.valueOf() - ((this._offset || 0) * 60000);                                                          // 3428
}                                                                                                                      // 3429
                                                                                                                       // 3430
function unix () {                                                                                                     // 3431
    return Math.floor(this.valueOf() / 1000);                                                                          // 3432
}                                                                                                                      // 3433
                                                                                                                       // 3434
function toDate () {                                                                                                   // 3435
    return new Date(this.valueOf());                                                                                   // 3436
}                                                                                                                      // 3437
                                                                                                                       // 3438
function toArray () {                                                                                                  // 3439
    var m = this;                                                                                                      // 3440
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];                         // 3441
}                                                                                                                      // 3442
                                                                                                                       // 3443
function toObject () {                                                                                                 // 3444
    var m = this;                                                                                                      // 3445
    return {                                                                                                           // 3446
        years: m.year(),                                                                                               // 3447
        months: m.month(),                                                                                             // 3448
        date: m.date(),                                                                                                // 3449
        hours: m.hours(),                                                                                              // 3450
        minutes: m.minutes(),                                                                                          // 3451
        seconds: m.seconds(),                                                                                          // 3452
        milliseconds: m.milliseconds()                                                                                 // 3453
    };                                                                                                                 // 3454
}                                                                                                                      // 3455
                                                                                                                       // 3456
function toJSON () {                                                                                                   // 3457
    // new Date(NaN).toJSON() === null                                                                                 // 3458
    return this.isValid() ? this.toISOString() : null;                                                                 // 3459
}                                                                                                                      // 3460
                                                                                                                       // 3461
function isValid$2 () {                                                                                                // 3462
    return isValid(this);                                                                                              // 3463
}                                                                                                                      // 3464
                                                                                                                       // 3465
function parsingFlags () {                                                                                             // 3466
    return extend({}, getParsingFlags(this));                                                                          // 3467
}                                                                                                                      // 3468
                                                                                                                       // 3469
function invalidAt () {                                                                                                // 3470
    return getParsingFlags(this).overflow;                                                                             // 3471
}                                                                                                                      // 3472
                                                                                                                       // 3473
function creationData() {                                                                                              // 3474
    return {                                                                                                           // 3475
        input: this._i,                                                                                                // 3476
        format: this._f,                                                                                               // 3477
        locale: this._locale,                                                                                          // 3478
        isUTC: this._isUTC,                                                                                            // 3479
        strict: this._strict                                                                                           // 3480
    };                                                                                                                 // 3481
}                                                                                                                      // 3482
                                                                                                                       // 3483
// FORMATTING                                                                                                          // 3484
                                                                                                                       // 3485
addFormatToken(0, ['gg', 2], 0, function () {                                                                          // 3486
    return this.weekYear() % 100;                                                                                      // 3487
});                                                                                                                    // 3488
                                                                                                                       // 3489
addFormatToken(0, ['GG', 2], 0, function () {                                                                          // 3490
    return this.isoWeekYear() % 100;                                                                                   // 3491
});                                                                                                                    // 3492
                                                                                                                       // 3493
function addWeekYearFormatToken (token, getter) {                                                                      // 3494
    addFormatToken(0, [token, token.length], 0, getter);                                                               // 3495
}                                                                                                                      // 3496
                                                                                                                       // 3497
addWeekYearFormatToken('gggg',     'weekYear');                                                                        // 3498
addWeekYearFormatToken('ggggg',    'weekYear');                                                                        // 3499
addWeekYearFormatToken('GGGG',  'isoWeekYear');                                                                        // 3500
addWeekYearFormatToken('GGGGG', 'isoWeekYear');                                                                        // 3501
                                                                                                                       // 3502
// ALIASES                                                                                                             // 3503
                                                                                                                       // 3504
addUnitAlias('weekYear', 'gg');                                                                                        // 3505
addUnitAlias('isoWeekYear', 'GG');                                                                                     // 3506
                                                                                                                       // 3507
// PRIORITY                                                                                                            // 3508
                                                                                                                       // 3509
addUnitPriority('weekYear', 1);                                                                                        // 3510
addUnitPriority('isoWeekYear', 1);                                                                                     // 3511
                                                                                                                       // 3512
                                                                                                                       // 3513
// PARSING                                                                                                             // 3514
                                                                                                                       // 3515
addRegexToken('G',      matchSigned);                                                                                  // 3516
addRegexToken('g',      matchSigned);                                                                                  // 3517
addRegexToken('GG',     match1to2, match2);                                                                            // 3518
addRegexToken('gg',     match1to2, match2);                                                                            // 3519
addRegexToken('GGGG',   match1to4, match4);                                                                            // 3520
addRegexToken('gggg',   match1to4, match4);                                                                            // 3521
addRegexToken('GGGGG',  match1to6, match6);                                                                            // 3522
addRegexToken('ggggg',  match1to6, match6);                                                                            // 3523
                                                                                                                       // 3524
addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {                          // 3525
    week[token.substr(0, 2)] = toInt(input);                                                                           // 3526
});                                                                                                                    // 3527
                                                                                                                       // 3528
addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {                                                // 3529
    week[token] = hooks.parseTwoDigitYear(input);                                                                      // 3530
});                                                                                                                    // 3531
                                                                                                                       // 3532
// MOMENTS                                                                                                             // 3533
                                                                                                                       // 3534
function getSetWeekYear (input) {                                                                                      // 3535
    return getSetWeekYearHelper.call(this,                                                                             // 3536
            input,                                                                                                     // 3537
            this.week(),                                                                                               // 3538
            this.weekday(),                                                                                            // 3539
            this.localeData()._week.dow,                                                                               // 3540
            this.localeData()._week.doy);                                                                              // 3541
}                                                                                                                      // 3542
                                                                                                                       // 3543
function getSetISOWeekYear (input) {                                                                                   // 3544
    return getSetWeekYearHelper.call(this,                                                                             // 3545
            input, this.isoWeek(), this.isoWeekday(), 1, 4);                                                           // 3546
}                                                                                                                      // 3547
                                                                                                                       // 3548
function getISOWeeksInYear () {                                                                                        // 3549
    return weeksInYear(this.year(), 1, 4);                                                                             // 3550
}                                                                                                                      // 3551
                                                                                                                       // 3552
function getWeeksInYear () {                                                                                           // 3553
    var weekInfo = this.localeData()._week;                                                                            // 3554
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);                                                       // 3555
}                                                                                                                      // 3556
                                                                                                                       // 3557
function getSetWeekYearHelper(input, week, weekday, dow, doy) {                                                        // 3558
    var weeksTarget;                                                                                                   // 3559
    if (input == null) {                                                                                               // 3560
        return weekOfYear(this, dow, doy).year;                                                                        // 3561
    } else {                                                                                                           // 3562
        weeksTarget = weeksInYear(input, dow, doy);                                                                    // 3563
        if (week > weeksTarget) {                                                                                      // 3564
            week = weeksTarget;                                                                                        // 3565
        }                                                                                                              // 3566
        return setWeekAll.call(this, input, week, weekday, dow, doy);                                                  // 3567
    }                                                                                                                  // 3568
}                                                                                                                      // 3569
                                                                                                                       // 3570
function setWeekAll(weekYear, week, weekday, dow, doy) {                                                               // 3571
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),                                         // 3572
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);                                          // 3573
                                                                                                                       // 3574
    this.year(date.getUTCFullYear());                                                                                  // 3575
    this.month(date.getUTCMonth());                                                                                    // 3576
    this.date(date.getUTCDate());                                                                                      // 3577
    return this;                                                                                                       // 3578
}                                                                                                                      // 3579
                                                                                                                       // 3580
// FORMATTING                                                                                                          // 3581
                                                                                                                       // 3582
addFormatToken('Q', 0, 'Qo', 'quarter');                                                                               // 3583
                                                                                                                       // 3584
// ALIASES                                                                                                             // 3585
                                                                                                                       // 3586
addUnitAlias('quarter', 'Q');                                                                                          // 3587
                                                                                                                       // 3588
// PRIORITY                                                                                                            // 3589
                                                                                                                       // 3590
addUnitPriority('quarter', 7);                                                                                         // 3591
                                                                                                                       // 3592
// PARSING                                                                                                             // 3593
                                                                                                                       // 3594
addRegexToken('Q', match1);                                                                                            // 3595
addParseToken('Q', function (input, array) {                                                                           // 3596
    array[MONTH] = (toInt(input) - 1) * 3;                                                                             // 3597
});                                                                                                                    // 3598
                                                                                                                       // 3599
// MOMENTS                                                                                                             // 3600
                                                                                                                       // 3601
function getSetQuarter (input) {                                                                                       // 3602
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);         // 3603
}                                                                                                                      // 3604
                                                                                                                       // 3605
// FORMATTING                                                                                                          // 3606
                                                                                                                       // 3607
addFormatToken('D', ['DD', 2], 'Do', 'date');                                                                          // 3608
                                                                                                                       // 3609
// ALIASES                                                                                                             // 3610
                                                                                                                       // 3611
addUnitAlias('date', 'D');                                                                                             // 3612
                                                                                                                       // 3613
// PRIOROITY                                                                                                           // 3614
addUnitPriority('date', 9);                                                                                            // 3615
                                                                                                                       // 3616
// PARSING                                                                                                             // 3617
                                                                                                                       // 3618
addRegexToken('D',  match1to2);                                                                                        // 3619
addRegexToken('DD', match1to2, match2);                                                                                // 3620
addRegexToken('Do', function (isStrict, locale) {                                                                      // 3621
    // TODO: Remove "ordinalParse" fallback in next major release.                                                     // 3622
    return isStrict ?                                                                                                  // 3623
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :                                                       // 3624
      locale._dayOfMonthOrdinalParseLenient;                                                                           // 3625
});                                                                                                                    // 3626
                                                                                                                       // 3627
addParseToken(['D', 'DD'], DATE);                                                                                      // 3628
addParseToken('Do', function (input, array) {                                                                          // 3629
    array[DATE] = toInt(input.match(match1to2)[0], 10);                                                                // 3630
});                                                                                                                    // 3631
                                                                                                                       // 3632
// MOMENTS                                                                                                             // 3633
                                                                                                                       // 3634
var getSetDayOfMonth = makeGetSet('Date', true);                                                                       // 3635
                                                                                                                       // 3636
// FORMATTING                                                                                                          // 3637
                                                                                                                       // 3638
addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');                                                               // 3639
                                                                                                                       // 3640
// ALIASES                                                                                                             // 3641
                                                                                                                       // 3642
addUnitAlias('dayOfYear', 'DDD');                                                                                      // 3643
                                                                                                                       // 3644
// PRIORITY                                                                                                            // 3645
addUnitPriority('dayOfYear', 4);                                                                                       // 3646
                                                                                                                       // 3647
// PARSING                                                                                                             // 3648
                                                                                                                       // 3649
addRegexToken('DDD',  match1to3);                                                                                      // 3650
addRegexToken('DDDD', match3);                                                                                         // 3651
addParseToken(['DDD', 'DDDD'], function (input, array, config) {                                                       // 3652
    config._dayOfYear = toInt(input);                                                                                  // 3653
});                                                                                                                    // 3654
                                                                                                                       // 3655
// HELPERS                                                                                                             // 3656
                                                                                                                       // 3657
// MOMENTS                                                                                                             // 3658
                                                                                                                       // 3659
function getSetDayOfYear (input) {                                                                                     // 3660
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;              // 3661
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');                                             // 3662
}                                                                                                                      // 3663
                                                                                                                       // 3664
// FORMATTING                                                                                                          // 3665
                                                                                                                       // 3666
addFormatToken('m', ['mm', 2], 0, 'minute');                                                                           // 3667
                                                                                                                       // 3668
// ALIASES                                                                                                             // 3669
                                                                                                                       // 3670
addUnitAlias('minute', 'm');                                                                                           // 3671
                                                                                                                       // 3672
// PRIORITY                                                                                                            // 3673
                                                                                                                       // 3674
addUnitPriority('minute', 14);                                                                                         // 3675
                                                                                                                       // 3676
// PARSING                                                                                                             // 3677
                                                                                                                       // 3678
addRegexToken('m',  match1to2);                                                                                        // 3679
addRegexToken('mm', match1to2, match2);                                                                                // 3680
addParseToken(['m', 'mm'], MINUTE);                                                                                    // 3681
                                                                                                                       // 3682
// MOMENTS                                                                                                             // 3683
                                                                                                                       // 3684
var getSetMinute = makeGetSet('Minutes', false);                                                                       // 3685
                                                                                                                       // 3686
// FORMATTING                                                                                                          // 3687
                                                                                                                       // 3688
addFormatToken('s', ['ss', 2], 0, 'second');                                                                           // 3689
                                                                                                                       // 3690
// ALIASES                                                                                                             // 3691
                                                                                                                       // 3692
addUnitAlias('second', 's');                                                                                           // 3693
                                                                                                                       // 3694
// PRIORITY                                                                                                            // 3695
                                                                                                                       // 3696
addUnitPriority('second', 15);                                                                                         // 3697
                                                                                                                       // 3698
// PARSING                                                                                                             // 3699
                                                                                                                       // 3700
addRegexToken('s',  match1to2);                                                                                        // 3701
addRegexToken('ss', match1to2, match2);                                                                                // 3702
addParseToken(['s', 'ss'], SECOND);                                                                                    // 3703
                                                                                                                       // 3704
// MOMENTS                                                                                                             // 3705
                                                                                                                       // 3706
var getSetSecond = makeGetSet('Seconds', false);                                                                       // 3707
                                                                                                                       // 3708
// FORMATTING                                                                                                          // 3709
                                                                                                                       // 3710
addFormatToken('S', 0, 0, function () {                                                                                // 3711
    return ~~(this.millisecond() / 100);                                                                               // 3712
});                                                                                                                    // 3713
                                                                                                                       // 3714
addFormatToken(0, ['SS', 2], 0, function () {                                                                          // 3715
    return ~~(this.millisecond() / 10);                                                                                // 3716
});                                                                                                                    // 3717
                                                                                                                       // 3718
addFormatToken(0, ['SSS', 3], 0, 'millisecond');                                                                       // 3719
addFormatToken(0, ['SSSS', 4], 0, function () {                                                                        // 3720
    return this.millisecond() * 10;                                                                                    // 3721
});                                                                                                                    // 3722
addFormatToken(0, ['SSSSS', 5], 0, function () {                                                                       // 3723
    return this.millisecond() * 100;                                                                                   // 3724
});                                                                                                                    // 3725
addFormatToken(0, ['SSSSSS', 6], 0, function () {                                                                      // 3726
    return this.millisecond() * 1000;                                                                                  // 3727
});                                                                                                                    // 3728
addFormatToken(0, ['SSSSSSS', 7], 0, function () {                                                                     // 3729
    return this.millisecond() * 10000;                                                                                 // 3730
});                                                                                                                    // 3731
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {                                                                    // 3732
    return this.millisecond() * 100000;                                                                                // 3733
});                                                                                                                    // 3734
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {                                                                   // 3735
    return this.millisecond() * 1000000;                                                                               // 3736
});                                                                                                                    // 3737
                                                                                                                       // 3738
                                                                                                                       // 3739
// ALIASES                                                                                                             // 3740
                                                                                                                       // 3741
addUnitAlias('millisecond', 'ms');                                                                                     // 3742
                                                                                                                       // 3743
// PRIORITY                                                                                                            // 3744
                                                                                                                       // 3745
addUnitPriority('millisecond', 16);                                                                                    // 3746
                                                                                                                       // 3747
// PARSING                                                                                                             // 3748
                                                                                                                       // 3749
addRegexToken('S',    match1to3, match1);                                                                              // 3750
addRegexToken('SS',   match1to3, match2);                                                                              // 3751
addRegexToken('SSS',  match1to3, match3);                                                                              // 3752
                                                                                                                       // 3753
var token;                                                                                                             // 3754
for (token = 'SSSS'; token.length <= 9; token += 'S') {                                                                // 3755
    addRegexToken(token, matchUnsigned);                                                                               // 3756
}                                                                                                                      // 3757
                                                                                                                       // 3758
function parseMs(input, array) {                                                                                       // 3759
    array[MILLISECOND] = toInt(('0.' + input) * 1000);                                                                 // 3760
}                                                                                                                      // 3761
                                                                                                                       // 3762
for (token = 'S'; token.length <= 9; token += 'S') {                                                                   // 3763
    addParseToken(token, parseMs);                                                                                     // 3764
}                                                                                                                      // 3765
// MOMENTS                                                                                                             // 3766
                                                                                                                       // 3767
var getSetMillisecond = makeGetSet('Milliseconds', false);                                                             // 3768
                                                                                                                       // 3769
// FORMATTING                                                                                                          // 3770
                                                                                                                       // 3771
addFormatToken('z',  0, 0, 'zoneAbbr');                                                                                // 3772
addFormatToken('zz', 0, 0, 'zoneName');                                                                                // 3773
                                                                                                                       // 3774
// MOMENTS                                                                                                             // 3775
                                                                                                                       // 3776
function getZoneAbbr () {                                                                                              // 3777
    return this._isUTC ? 'UTC' : '';                                                                                   // 3778
}                                                                                                                      // 3779
                                                                                                                       // 3780
function getZoneName () {                                                                                              // 3781
    return this._isUTC ? 'Coordinated Universal Time' : '';                                                            // 3782
}                                                                                                                      // 3783
                                                                                                                       // 3784
var proto = Moment.prototype;                                                                                          // 3785
                                                                                                                       // 3786
proto.add               = add;                                                                                         // 3787
proto.calendar          = calendar$1;                                                                                  // 3788
proto.clone             = clone;                                                                                       // 3789
proto.diff              = diff;                                                                                        // 3790
proto.endOf             = endOf;                                                                                       // 3791
proto.format            = format;                                                                                      // 3792
proto.from              = from;                                                                                        // 3793
proto.fromNow           = fromNow;                                                                                     // 3794
proto.to                = to;                                                                                          // 3795
proto.toNow             = toNow;                                                                                       // 3796
proto.get               = stringGet;                                                                                   // 3797
proto.invalidAt         = invalidAt;                                                                                   // 3798
proto.isAfter           = isAfter;                                                                                     // 3799
proto.isBefore          = isBefore;                                                                                    // 3800
proto.isBetween         = isBetween;                                                                                   // 3801
proto.isSame            = isSame;                                                                                      // 3802
proto.isSameOrAfter     = isSameOrAfter;                                                                               // 3803
proto.isSameOrBefore    = isSameOrBefore;                                                                              // 3804
proto.isValid           = isValid$2;                                                                                   // 3805
proto.lang              = lang;                                                                                        // 3806
proto.locale            = locale;                                                                                      // 3807
proto.localeData        = localeData;                                                                                  // 3808
proto.max               = prototypeMax;                                                                                // 3809
proto.min               = prototypeMin;                                                                                // 3810
proto.parsingFlags      = parsingFlags;                                                                                // 3811
proto.set               = stringSet;                                                                                   // 3812
proto.startOf           = startOf;                                                                                     // 3813
proto.subtract          = subtract;                                                                                    // 3814
proto.toArray           = toArray;                                                                                     // 3815
proto.toObject          = toObject;                                                                                    // 3816
proto.toDate            = toDate;                                                                                      // 3817
proto.toISOString       = toISOString;                                                                                 // 3818
proto.inspect           = inspect;                                                                                     // 3819
proto.toJSON            = toJSON;                                                                                      // 3820
proto.toString          = toString;                                                                                    // 3821
proto.unix              = unix;                                                                                        // 3822
proto.valueOf           = valueOf;                                                                                     // 3823
proto.creationData      = creationData;                                                                                // 3824
                                                                                                                       // 3825
// Year                                                                                                                // 3826
proto.year       = getSetYear;                                                                                         // 3827
proto.isLeapYear = getIsLeapYear;                                                                                      // 3828
                                                                                                                       // 3829
// Week Year                                                                                                           // 3830
proto.weekYear    = getSetWeekYear;                                                                                    // 3831
proto.isoWeekYear = getSetISOWeekYear;                                                                                 // 3832
                                                                                                                       // 3833
// Quarter                                                                                                             // 3834
proto.quarter = proto.quarters = getSetQuarter;                                                                        // 3835
                                                                                                                       // 3836
// Month                                                                                                               // 3837
proto.month       = getSetMonth;                                                                                       // 3838
proto.daysInMonth = getDaysInMonth;                                                                                    // 3839
                                                                                                                       // 3840
// Week                                                                                                                // 3841
proto.week           = proto.weeks        = getSetWeek;                                                                // 3842
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;                                                             // 3843
proto.weeksInYear    = getWeeksInYear;                                                                                 // 3844
proto.isoWeeksInYear = getISOWeeksInYear;                                                                              // 3845
                                                                                                                       // 3846
// Day                                                                                                                 // 3847
proto.date       = getSetDayOfMonth;                                                                                   // 3848
proto.day        = proto.days             = getSetDayOfWeek;                                                           // 3849
proto.weekday    = getSetLocaleDayOfWeek;                                                                              // 3850
proto.isoWeekday = getSetISODayOfWeek;                                                                                 // 3851
proto.dayOfYear  = getSetDayOfYear;                                                                                    // 3852
                                                                                                                       // 3853
// Hour                                                                                                                // 3854
proto.hour = proto.hours = getSetHour;                                                                                 // 3855
                                                                                                                       // 3856
// Minute                                                                                                              // 3857
proto.minute = proto.minutes = getSetMinute;                                                                           // 3858
                                                                                                                       // 3859
// Second                                                                                                              // 3860
proto.second = proto.seconds = getSetSecond;                                                                           // 3861
                                                                                                                       // 3862
// Millisecond                                                                                                         // 3863
proto.millisecond = proto.milliseconds = getSetMillisecond;                                                            // 3864
                                                                                                                       // 3865
// Offset                                                                                                              // 3866
proto.utcOffset            = getSetOffset;                                                                             // 3867
proto.utc                  = setOffsetToUTC;                                                                           // 3868
proto.local                = setOffsetToLocal;                                                                         // 3869
proto.parseZone            = setOffsetToParsedOffset;                                                                  // 3870
proto.hasAlignedHourOffset = hasAlignedHourOffset;                                                                     // 3871
proto.isDST                = isDaylightSavingTime;                                                                     // 3872
proto.isLocal              = isLocal;                                                                                  // 3873
proto.isUtcOffset          = isUtcOffset;                                                                              // 3874
proto.isUtc                = isUtc;                                                                                    // 3875
proto.isUTC                = isUtc;                                                                                    // 3876
                                                                                                                       // 3877
// Timezone                                                                                                            // 3878
proto.zoneAbbr = getZoneAbbr;                                                                                          // 3879
proto.zoneName = getZoneName;                                                                                          // 3880
                                                                                                                       // 3881
// Deprecations                                                                                                        // 3882
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);                         // 3883
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);                             // 3884
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);                                // 3885
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
                                                                                                                       // 3888
function createUnix (input) {                                                                                          // 3889
    return createLocal(input * 1000);                                                                                  // 3890
}                                                                                                                      // 3891
                                                                                                                       // 3892
function createInZone () {                                                                                             // 3893
    return createLocal.apply(null, arguments).parseZone();                                                             // 3894
}                                                                                                                      // 3895
                                                                                                                       // 3896
function preParsePostFormat (string) {                                                                                 // 3897
    return string;                                                                                                     // 3898
}                                                                                                                      // 3899
                                                                                                                       // 3900
var proto$1 = Locale.prototype;                                                                                        // 3901
                                                                                                                       // 3902
proto$1.calendar        = calendar;                                                                                    // 3903
proto$1.longDateFormat  = longDateFormat;                                                                              // 3904
proto$1.invalidDate     = invalidDate;                                                                                 // 3905
proto$1.ordinal         = ordinal;                                                                                     // 3906
proto$1.preparse        = preParsePostFormat;                                                                          // 3907
proto$1.postformat      = preParsePostFormat;                                                                          // 3908
proto$1.relativeTime    = relativeTime;                                                                                // 3909
proto$1.pastFuture      = pastFuture;                                                                                  // 3910
proto$1.set             = set;                                                                                         // 3911
                                                                                                                       // 3912
// Month                                                                                                               // 3913
proto$1.months            =        localeMonths;                                                                       // 3914
proto$1.monthsShort       =        localeMonthsShort;                                                                  // 3915
proto$1.monthsParse       =        localeMonthsParse;                                                                  // 3916
proto$1.monthsRegex       = monthsRegex;                                                                               // 3917
proto$1.monthsShortRegex  = monthsShortRegex;                                                                          // 3918
                                                                                                                       // 3919
// Week                                                                                                                // 3920
proto$1.week = localeWeek;                                                                                             // 3921
proto$1.firstDayOfYear = localeFirstDayOfYear;                                                                         // 3922
proto$1.firstDayOfWeek = localeFirstDayOfWeek;                                                                         // 3923
                                                                                                                       // 3924
// Day of Week                                                                                                         // 3925
proto$1.weekdays       =        localeWeekdays;                                                                        // 3926
proto$1.weekdaysMin    =        localeWeekdaysMin;                                                                     // 3927
proto$1.weekdaysShort  =        localeWeekdaysShort;                                                                   // 3928
proto$1.weekdaysParse  =        localeWeekdaysParse;                                                                   // 3929
                                                                                                                       // 3930
proto$1.weekdaysRegex       =        weekdaysRegex;                                                                    // 3931
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;                                                               // 3932
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;                                                                 // 3933
                                                                                                                       // 3934
// Hours                                                                                                               // 3935
proto$1.isPM = localeIsPM;                                                                                             // 3936
proto$1.meridiem = localeMeridiem;                                                                                     // 3937
                                                                                                                       // 3938
function get$1 (format, index, field, setter) {                                                                        // 3939
    var locale = getLocale();                                                                                          // 3940
    var utc = createUTC().set(setter, index);                                                                          // 3941
    return locale[field](utc, format);                                                                                 // 3942
}                                                                                                                      // 3943
                                                                                                                       // 3944
function listMonthsImpl (format, index, field) {                                                                       // 3945
    if (isNumber(format)) {                                                                                            // 3946
        index = format;                                                                                                // 3947
        format = undefined;                                                                                            // 3948
    }                                                                                                                  // 3949
                                                                                                                       // 3950
    format = format || '';                                                                                             // 3951
                                                                                                                       // 3952
    if (index != null) {                                                                                               // 3953
        return get$1(format, index, field, 'month');                                                                   // 3954
    }                                                                                                                  // 3955
                                                                                                                       // 3956
    var i;                                                                                                             // 3957
    var out = [];                                                                                                      // 3958
    for (i = 0; i < 12; i++) {                                                                                         // 3959
        out[i] = get$1(format, i, field, 'month');                                                                     // 3960
    }                                                                                                                  // 3961
    return out;                                                                                                        // 3962
}                                                                                                                      // 3963
                                                                                                                       // 3964
// ()                                                                                                                  // 3965
// (5)                                                                                                                 // 3966
// (fmt, 5)                                                                                                            // 3967
// (fmt)                                                                                                               // 3968
// (true)                                                                                                              // 3969
// (true, 5)                                                                                                           // 3970
// (true, fmt, 5)                                                                                                      // 3971
// (true, fmt)                                                                                                         // 3972
function listWeekdaysImpl (localeSorted, format, index, field) {                                                       // 3973
    if (typeof localeSorted === 'boolean') {                                                                           // 3974
        if (isNumber(format)) {                                                                                        // 3975
            index = format;                                                                                            // 3976
            format = undefined;                                                                                        // 3977
        }                                                                                                              // 3978
                                                                                                                       // 3979
        format = format || '';                                                                                         // 3980
    } else {                                                                                                           // 3981
        format = localeSorted;                                                                                         // 3982
        index = format;                                                                                                // 3983
        localeSorted = false;                                                                                          // 3984
                                                                                                                       // 3985
        if (isNumber(format)) {                                                                                        // 3986
            index = format;                                                                                            // 3987
            format = undefined;                                                                                        // 3988
        }                                                                                                              // 3989
                                                                                                                       // 3990
        format = format || '';                                                                                         // 3991
    }                                                                                                                  // 3992
                                                                                                                       // 3993
    var locale = getLocale(),                                                                                          // 3994
        shift = localeSorted ? locale._week.dow : 0;                                                                   // 3995
                                                                                                                       // 3996
    if (index != null) {                                                                                               // 3997
        return get$1(format, (index + shift) % 7, field, 'day');                                                       // 3998
    }                                                                                                                  // 3999
                                                                                                                       // 4000
    var i;                                                                                                             // 4001
    var out = [];                                                                                                      // 4002
    for (i = 0; i < 7; i++) {                                                                                          // 4003
        out[i] = get$1(format, (i + shift) % 7, field, 'day');                                                         // 4004
    }                                                                                                                  // 4005
    return out;                                                                                                        // 4006
}                                                                                                                      // 4007
                                                                                                                       // 4008
function listMonths (format, index) {                                                                                  // 4009
    return listMonthsImpl(format, index, 'months');                                                                    // 4010
}                                                                                                                      // 4011
                                                                                                                       // 4012
function listMonthsShort (format, index) {                                                                             // 4013
    return listMonthsImpl(format, index, 'monthsShort');                                                               // 4014
}                                                                                                                      // 4015
                                                                                                                       // 4016
function listWeekdays (localeSorted, format, index) {                                                                  // 4017
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');                                                  // 4018
}                                                                                                                      // 4019
                                                                                                                       // 4020
function listWeekdaysShort (localeSorted, format, index) {                                                             // 4021
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');                                             // 4022
}                                                                                                                      // 4023
                                                                                                                       // 4024
function listWeekdaysMin (localeSorted, format, index) {                                                               // 4025
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');                                               // 4026
}                                                                                                                      // 4027
                                                                                                                       // 4028
getSetGlobalLocale('en', {                                                                                             // 4029
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,                                                                    // 4030
    ordinal : function (number) {                                                                                      // 4031
        var b = number % 10,                                                                                           // 4032
            output = (toInt(number % 100 / 10) === 1) ? 'th' :                                                         // 4033
            (b === 1) ? 'st' :                                                                                         // 4034
            (b === 2) ? 'nd' :                                                                                         // 4035
            (b === 3) ? 'rd' : 'th';                                                                                   // 4036
        return number + output;                                                                                        // 4037
    }                                                                                                                  // 4038
});                                                                                                                    // 4039
                                                                                                                       // 4040
// Side effect imports                                                                                                 // 4041
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);                   // 4042
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);                // 4043
                                                                                                                       // 4044
var mathAbs = Math.abs;                                                                                                // 4045
                                                                                                                       // 4046
function abs () {                                                                                                      // 4047
    var data           = this._data;                                                                                   // 4048
                                                                                                                       // 4049
    this._milliseconds = mathAbs(this._milliseconds);                                                                  // 4050
    this._days         = mathAbs(this._days);                                                                          // 4051
    this._months       = mathAbs(this._months);                                                                        // 4052
                                                                                                                       // 4053
    data.milliseconds  = mathAbs(data.milliseconds);                                                                   // 4054
    data.seconds       = mathAbs(data.seconds);                                                                        // 4055
    data.minutes       = mathAbs(data.minutes);                                                                        // 4056
    data.hours         = mathAbs(data.hours);                                                                          // 4057
    data.months        = mathAbs(data.months);                                                                         // 4058
    data.years         = mathAbs(data.years);                                                                          // 4059
                                                                                                                       // 4060
    return this;                                                                                                       // 4061
}                                                                                                                      // 4062
                                                                                                                       // 4063
function addSubtract$1 (duration, input, value, direction) {                                                           // 4064
    var other = createDuration(input, value);                                                                          // 4065
                                                                                                                       // 4066
    duration._milliseconds += direction * other._milliseconds;                                                         // 4067
    duration._days         += direction * other._days;                                                                 // 4068
    duration._months       += direction * other._months;                                                               // 4069
                                                                                                                       // 4070
    return duration._bubble();                                                                                         // 4071
}                                                                                                                      // 4072
                                                                                                                       // 4073
// supports only 2.0-style add(1, 's') or add(duration)                                                                // 4074
function add$1 (input, value) {                                                                                        // 4075
    return addSubtract$1(this, input, value, 1);                                                                       // 4076
}                                                                                                                      // 4077
                                                                                                                       // 4078
// supports only 2.0-style subtract(1, 's') or subtract(duration)                                                      // 4079
function subtract$1 (input, value) {                                                                                   // 4080
    return addSubtract$1(this, input, value, -1);                                                                      // 4081
}                                                                                                                      // 4082
                                                                                                                       // 4083
function absCeil (number) {                                                                                            // 4084
    if (number < 0) {                                                                                                  // 4085
        return Math.floor(number);                                                                                     // 4086
    } else {                                                                                                           // 4087
        return Math.ceil(number);                                                                                      // 4088
    }                                                                                                                  // 4089
}                                                                                                                      // 4090
                                                                                                                       // 4091
function bubble () {                                                                                                   // 4092
    var milliseconds = this._milliseconds;                                                                             // 4093
    var days         = this._days;                                                                                     // 4094
    var months       = this._months;                                                                                   // 4095
    var data         = this._data;                                                                                     // 4096
    var seconds, minutes, hours, years, monthsFromDays;                                                                // 4097
                                                                                                                       // 4098
    // if we have a mix of positive and negative values, bubble down first                                             // 4099
    // check: https://github.com/moment/moment/issues/2166                                                             // 4100
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||                                                           // 4101
            (milliseconds <= 0 && days <= 0 && months <= 0))) {                                                        // 4102
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;                                                  // 4103
        days = 0;                                                                                                      // 4104
        months = 0;                                                                                                    // 4105
    }                                                                                                                  // 4106
                                                                                                                       // 4107
    // The following code bubbles up values, see the tests for                                                         // 4108
    // examples of what that means.                                                                                    // 4109
    data.milliseconds = milliseconds % 1000;                                                                           // 4110
                                                                                                                       // 4111
    seconds           = absFloor(milliseconds / 1000);                                                                 // 4112
    data.seconds      = seconds % 60;                                                                                  // 4113
                                                                                                                       // 4114
    minutes           = absFloor(seconds / 60);                                                                        // 4115
    data.minutes      = minutes % 60;                                                                                  // 4116
                                                                                                                       // 4117
    hours             = absFloor(minutes / 60);                                                                        // 4118
    data.hours        = hours % 24;                                                                                    // 4119
                                                                                                                       // 4120
    days += absFloor(hours / 24);                                                                                      // 4121
                                                                                                                       // 4122
    // convert days to months                                                                                          // 4123
    monthsFromDays = absFloor(daysToMonths(days));                                                                     // 4124
    months += monthsFromDays;                                                                                          // 4125
    days -= absCeil(monthsToDays(monthsFromDays));                                                                     // 4126
                                                                                                                       // 4127
    // 12 months -> 1 year                                                                                             // 4128
    years = absFloor(months / 12);                                                                                     // 4129
    months %= 12;                                                                                                      // 4130
                                                                                                                       // 4131
    data.days   = days;                                                                                                // 4132
    data.months = months;                                                                                              // 4133
    data.years  = years;                                                                                               // 4134
                                                                                                                       // 4135
    return this;                                                                                                       // 4136
}                                                                                                                      // 4137
                                                                                                                       // 4138
function daysToMonths (days) {                                                                                         // 4139
    // 400 years have 146097 days (taking into account leap year rules)                                                // 4140
    // 400 years have 12 months === 4800                                                                               // 4141
    return days * 4800 / 146097;                                                                                       // 4142
}                                                                                                                      // 4143
                                                                                                                       // 4144
function monthsToDays (months) {                                                                                       // 4145
    // the reverse of daysToMonths                                                                                     // 4146
    return months * 146097 / 4800;                                                                                     // 4147
}                                                                                                                      // 4148
                                                                                                                       // 4149
function as (units) {                                                                                                  // 4150
    if (!this.isValid()) {                                                                                             // 4151
        return NaN;                                                                                                    // 4152
    }                                                                                                                  // 4153
    var days;                                                                                                          // 4154
    var months;                                                                                                        // 4155
    var milliseconds = this._milliseconds;                                                                             // 4156
                                                                                                                       // 4157
    units = normalizeUnits(units);                                                                                     // 4158
                                                                                                                       // 4159
    if (units === 'month' || units === 'year') {                                                                       // 4160
        days   = this._days   + milliseconds / 864e5;                                                                  // 4161
        months = this._months + daysToMonths(days);                                                                    // 4162
        return units === 'month' ? months : months / 12;                                                               // 4163
    } else {                                                                                                           // 4164
        // handle milliseconds separately because of floating point math errors (issue #1867)                          // 4165
        days = this._days + Math.round(monthsToDays(this._months));                                                    // 4166
        switch (units) {                                                                                               // 4167
            case 'week'   : return days / 7     + milliseconds / 6048e5;                                               // 4168
            case 'day'    : return days         + milliseconds / 864e5;                                                // 4169
            case 'hour'   : return days * 24    + milliseconds / 36e5;                                                 // 4170
            case 'minute' : return days * 1440  + milliseconds / 6e4;                                                  // 4171
            case 'second' : return days * 86400 + milliseconds / 1000;                                                 // 4172
            // Math.floor prevents floating point math errors here                                                     // 4173
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;                                        // 4174
            default: throw new Error('Unknown unit ' + units);                                                         // 4175
        }                                                                                                              // 4176
    }                                                                                                                  // 4177
}                                                                                                                      // 4178
                                                                                                                       // 4179
// TODO: Use this.as('ms')?                                                                                            // 4180
function valueOf$1 () {                                                                                                // 4181
    if (!this.isValid()) {                                                                                             // 4182
        return NaN;                                                                                                    // 4183
    }                                                                                                                  // 4184
    return (                                                                                                           // 4185
        this._milliseconds +                                                                                           // 4186
        this._days * 864e5 +                                                                                           // 4187
        (this._months % 12) * 2592e6 +                                                                                 // 4188
        toInt(this._months / 12) * 31536e6                                                                             // 4189
    );                                                                                                                 // 4190
}                                                                                                                      // 4191
                                                                                                                       // 4192
function makeAs (alias) {                                                                                              // 4193
    return function () {                                                                                               // 4194
        return this.as(alias);                                                                                         // 4195
    };                                                                                                                 // 4196
}                                                                                                                      // 4197
                                                                                                                       // 4198
var asMilliseconds = makeAs('ms');                                                                                     // 4199
var asSeconds      = makeAs('s');                                                                                      // 4200
var asMinutes      = makeAs('m');                                                                                      // 4201
var asHours        = makeAs('h');                                                                                      // 4202
var asDays         = makeAs('d');                                                                                      // 4203
var asWeeks        = makeAs('w');                                                                                      // 4204
var asMonths       = makeAs('M');                                                                                      // 4205
var asYears        = makeAs('y');                                                                                      // 4206
                                                                                                                       // 4207
function get$2 (units) {                                                                                               // 4208
    units = normalizeUnits(units);                                                                                     // 4209
    return this.isValid() ? this[units + 's']() : NaN;                                                                 // 4210
}                                                                                                                      // 4211
                                                                                                                       // 4212
function makeGetter(name) {                                                                                            // 4213
    return function () {                                                                                               // 4214
        return this.isValid() ? this._data[name] : NaN;                                                                // 4215
    };                                                                                                                 // 4216
}                                                                                                                      // 4217
                                                                                                                       // 4218
var milliseconds = makeGetter('milliseconds');                                                                         // 4219
var seconds      = makeGetter('seconds');                                                                              // 4220
var minutes      = makeGetter('minutes');                                                                              // 4221
var hours        = makeGetter('hours');                                                                                // 4222
var days         = makeGetter('days');                                                                                 // 4223
var months       = makeGetter('months');                                                                               // 4224
var years        = makeGetter('years');                                                                                // 4225
                                                                                                                       // 4226
function weeks () {                                                                                                    // 4227
    return absFloor(this.days() / 7);                                                                                  // 4228
}                                                                                                                      // 4229
                                                                                                                       // 4230
var round = Math.round;                                                                                                // 4231
var thresholds = {                                                                                                     // 4232
    ss: 44,         // a few seconds to seconds                                                                        // 4233
    s : 45,         // seconds to minute                                                                               // 4234
    m : 45,         // minutes to hour                                                                                 // 4235
    h : 22,         // hours to day                                                                                    // 4236
    d : 26,         // days to month                                                                                   // 4237
    M : 11          // months to year                                                                                  // 4238
};                                                                                                                     // 4239
                                                                                                                       // 4240
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize                              // 4241
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {                                          // 4242
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);                                        // 4243
}                                                                                                                      // 4244
                                                                                                                       // 4245
function relativeTime$1 (posNegDuration, withoutSuffix, locale) {                                                      // 4246
    var duration = createDuration(posNegDuration).abs();                                                               // 4247
    var seconds  = round(duration.as('s'));                                                                            // 4248
    var minutes  = round(duration.as('m'));                                                                            // 4249
    var hours    = round(duration.as('h'));                                                                            // 4250
    var days     = round(duration.as('d'));                                                                            // 4251
    var months   = round(duration.as('M'));                                                                            // 4252
    var years    = round(duration.as('y'));                                                                            // 4253
                                                                                                                       // 4254
    var a = seconds <= thresholds.ss && ['s', seconds]  ||                                                             // 4255
            seconds < thresholds.s   && ['ss', seconds] ||                                                             // 4256
            minutes <= 1             && ['m']           ||                                                             // 4257
            minutes < thresholds.m   && ['mm', minutes] ||                                                             // 4258
            hours   <= 1             && ['h']           ||                                                             // 4259
            hours   < thresholds.h   && ['hh', hours]   ||                                                             // 4260
            days    <= 1             && ['d']           ||                                                             // 4261
            days    < thresholds.d   && ['dd', days]    ||                                                             // 4262
            months  <= 1             && ['M']           ||                                                             // 4263
            months  < thresholds.M   && ['MM', months]  ||                                                             // 4264
            years   <= 1             && ['y']           || ['yy', years];                                              // 4265
                                                                                                                       // 4266
    a[2] = withoutSuffix;                                                                                              // 4267
    a[3] = +posNegDuration > 0;                                                                                        // 4268
    a[4] = locale;                                                                                                     // 4269
    return substituteTimeAgo.apply(null, a);                                                                           // 4270
}                                                                                                                      // 4271
                                                                                                                       // 4272
// This function allows you to set the rounding function for relative time strings                                     // 4273
function getSetRelativeTimeRounding (roundingFunction) {                                                               // 4274
    if (roundingFunction === undefined) {                                                                              // 4275
        return round;                                                                                                  // 4276
    }                                                                                                                  // 4277
    if (typeof(roundingFunction) === 'function') {                                                                     // 4278
        round = roundingFunction;                                                                                      // 4279
        return true;                                                                                                   // 4280
    }                                                                                                                  // 4281
    return false;                                                                                                      // 4282
}                                                                                                                      // 4283
                                                                                                                       // 4284
// This function allows you to set a threshold for relative time strings                                               // 4285
function getSetRelativeTimeThreshold (threshold, limit) {                                                              // 4286
    if (thresholds[threshold] === undefined) {                                                                         // 4287
        return false;                                                                                                  // 4288
    }                                                                                                                  // 4289
    if (limit === undefined) {                                                                                         // 4290
        return thresholds[threshold];                                                                                  // 4291
    }                                                                                                                  // 4292
    thresholds[threshold] = limit;                                                                                     // 4293
    if (threshold === 's') {                                                                                           // 4294
        thresholds.ss = limit - 1;                                                                                     // 4295
    }                                                                                                                  // 4296
    return true;                                                                                                       // 4297
}                                                                                                                      // 4298
                                                                                                                       // 4299
function humanize (withSuffix) {                                                                                       // 4300
    if (!this.isValid()) {                                                                                             // 4301
        return this.localeData().invalidDate();                                                                        // 4302
    }                                                                                                                  // 4303
                                                                                                                       // 4304
    var locale = this.localeData();                                                                                    // 4305
    var output = relativeTime$1(this, !withSuffix, locale);                                                            // 4306
                                                                                                                       // 4307
    if (withSuffix) {                                                                                                  // 4308
        output = locale.pastFuture(+this, output);                                                                     // 4309
    }                                                                                                                  // 4310
                                                                                                                       // 4311
    return locale.postformat(output);                                                                                  // 4312
}                                                                                                                      // 4313
                                                                                                                       // 4314
var abs$1 = Math.abs;                                                                                                  // 4315
                                                                                                                       // 4316
function toISOString$1() {                                                                                             // 4317
    // for ISO strings we do not use the normal bubbling rules:                                                        // 4318
    //  * milliseconds bubble up until they become hours                                                               // 4319
    //  * days do not bubble at all                                                                                    // 4320
    //  * months bubble up until they become years                                                                     // 4321
    // This is because there is no context-free conversion between hours and days                                      // 4322
    // (think of clock changes)                                                                                        // 4323
    // and also not between days and months (28-31 days per month)                                                     // 4324
    if (!this.isValid()) {                                                                                             // 4325
        return this.localeData().invalidDate();                                                                        // 4326
    }                                                                                                                  // 4327
                                                                                                                       // 4328
    var seconds = abs$1(this._milliseconds) / 1000;                                                                    // 4329
    var days         = abs$1(this._days);                                                                              // 4330
    var months       = abs$1(this._months);                                                                            // 4331
    var minutes, hours, years;                                                                                         // 4332
                                                                                                                       // 4333
    // 3600 seconds -> 60 minutes -> 1 hour                                                                            // 4334
    minutes           = absFloor(seconds / 60);                                                                        // 4335
    hours             = absFloor(minutes / 60);                                                                        // 4336
    seconds %= 60;                                                                                                     // 4337
    minutes %= 60;                                                                                                     // 4338
                                                                                                                       // 4339
    // 12 months -> 1 year                                                                                             // 4340
    years  = absFloor(months / 12);                                                                                    // 4341
    months %= 12;                                                                                                      // 4342
                                                                                                                       // 4343
                                                                                                                       // 4344
    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js                    // 4345
    var Y = years;                                                                                                     // 4346
    var M = months;                                                                                                    // 4347
    var D = days;                                                                                                      // 4348
    var h = hours;                                                                                                     // 4349
    var m = minutes;                                                                                                   // 4350
    var s = seconds;                                                                                                   // 4351
    var total = this.asSeconds();                                                                                      // 4352
                                                                                                                       // 4353
    if (!total) {                                                                                                      // 4354
        // this is the same as C#'s (Noda) and python (isodate)...                                                     // 4355
        // but not other JS (goog.date)                                                                                // 4356
        return 'P0D';                                                                                                  // 4357
    }                                                                                                                  // 4358
                                                                                                                       // 4359
    return (total < 0 ? '-' : '') +                                                                                    // 4360
        'P' +                                                                                                          // 4361
        (Y ? Y + 'Y' : '') +                                                                                           // 4362
        (M ? M + 'M' : '') +                                                                                           // 4363
        (D ? D + 'D' : '') +                                                                                           // 4364
        ((h || m || s) ? 'T' : '') +                                                                                   // 4365
        (h ? h + 'H' : '') +                                                                                           // 4366
        (m ? m + 'M' : '') +                                                                                           // 4367
        (s ? s + 'S' : '');                                                                                            // 4368
}                                                                                                                      // 4369
                                                                                                                       // 4370
var proto$2 = Duration.prototype;                                                                                      // 4371
                                                                                                                       // 4372
proto$2.isValid        = isValid$1;                                                                                    // 4373
proto$2.abs            = abs;                                                                                          // 4374
proto$2.add            = add$1;                                                                                        // 4375
proto$2.subtract       = subtract$1;                                                                                   // 4376
proto$2.as             = as;                                                                                           // 4377
proto$2.asMilliseconds = asMilliseconds;                                                                               // 4378
proto$2.asSeconds      = asSeconds;                                                                                    // 4379
proto$2.asMinutes      = asMinutes;                                                                                    // 4380
proto$2.asHours        = asHours;                                                                                      // 4381
proto$2.asDays         = asDays;                                                                                       // 4382
proto$2.asWeeks        = asWeeks;                                                                                      // 4383
proto$2.asMonths       = asMonths;                                                                                     // 4384
proto$2.asYears        = asYears;                                                                                      // 4385
proto$2.valueOf        = valueOf$1;                                                                                    // 4386
proto$2._bubble        = bubble;                                                                                       // 4387
proto$2.get            = get$2;                                                                                        // 4388
proto$2.milliseconds   = milliseconds;                                                                                 // 4389
proto$2.seconds        = seconds;                                                                                      // 4390
proto$2.minutes        = minutes;                                                                                      // 4391
proto$2.hours          = hours;                                                                                        // 4392
proto$2.days           = days;                                                                                         // 4393
proto$2.weeks          = weeks;                                                                                        // 4394
proto$2.months         = months;                                                                                       // 4395
proto$2.years          = years;                                                                                        // 4396
proto$2.humanize       = humanize;                                                                                     // 4397
proto$2.toISOString    = toISOString$1;                                                                                // 4398
proto$2.toString       = toISOString$1;                                                                                // 4399
proto$2.toJSON         = toISOString$1;                                                                                // 4400
proto$2.locale         = locale;                                                                                       // 4401
proto$2.localeData     = localeData;                                                                                   // 4402
                                                                                                                       // 4403
// Deprecations                                                                                                        // 4404
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;                                                                                                   // 4406
                                                                                                                       // 4407
// Side effect imports                                                                                                 // 4408
                                                                                                                       // 4409
// FORMATTING                                                                                                          // 4410
                                                                                                                       // 4411
addFormatToken('X', 0, 0, 'unix');                                                                                     // 4412
addFormatToken('x', 0, 0, 'valueOf');                                                                                  // 4413
                                                                                                                       // 4414
// PARSING                                                                                                             // 4415
                                                                                                                       // 4416
addRegexToken('x', matchSigned);                                                                                       // 4417
addRegexToken('X', matchTimestamp);                                                                                    // 4418
addParseToken('X', function (input, array, config) {                                                                   // 4419
    config._d = new Date(parseFloat(input, 10) * 1000);                                                                // 4420
});                                                                                                                    // 4421
addParseToken('x', function (input, array, config) {                                                                   // 4422
    config._d = new Date(toInt(input));                                                                                // 4423
});                                                                                                                    // 4424
                                                                                                                       // 4425
// Side effect imports                                                                                                 // 4426
                                                                                                                       // 4427
                                                                                                                       // 4428
hooks.version = '2.18.1';                                                                                              // 4429
                                                                                                                       // 4430
setHookCallback(createLocal);                                                                                          // 4431
                                                                                                                       // 4432
hooks.fn                    = proto;                                                                                   // 4433
hooks.min                   = min;                                                                                     // 4434
hooks.max                   = max;                                                                                     // 4435
hooks.now                   = now;                                                                                     // 4436
hooks.utc                   = createUTC;                                                                               // 4437
hooks.unix                  = createUnix;                                                                              // 4438
hooks.months                = listMonths;                                                                              // 4439
hooks.isDate                = isDate;                                                                                  // 4440
hooks.locale                = getSetGlobalLocale;                                                                      // 4441
hooks.invalid               = createInvalid;                                                                           // 4442
hooks.duration              = createDuration;                                                                          // 4443
hooks.isMoment              = isMoment;                                                                                // 4444
hooks.weekdays              = listWeekdays;                                                                            // 4445
hooks.parseZone             = createInZone;                                                                            // 4446
hooks.localeData            = getLocale;                                                                               // 4447
hooks.isDuration            = isDuration;                                                                              // 4448
hooks.monthsShort           = listMonthsShort;                                                                         // 4449
hooks.weekdaysMin           = listWeekdaysMin;                                                                         // 4450
hooks.defineLocale          = defineLocale;                                                                            // 4451
hooks.updateLocale          = updateLocale;                                                                            // 4452
hooks.locales               = listLocales;                                                                             // 4453
hooks.weekdaysShort         = listWeekdaysShort;                                                                       // 4454
hooks.normalizeUnits        = normalizeUnits;                                                                          // 4455
hooks.relativeTimeRounding = getSetRelativeTimeRounding;                                                               // 4456
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;                                                             // 4457
hooks.calendarFormat        = getCalendarFormat;                                                                       // 4458
hooks.prototype             = proto;                                                                                   // 4459
                                                                                                                       // 4460
return hooks;                                                                                                          // 4461
                                                                                                                       // 4462
})));                                                                                                                  // 4463
                                                                                                                       // 4464
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/lbee:moment-helpers/common.js");
require("./node_modules/meteor/lbee:moment-helpers/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['lbee:moment-helpers'] = {}, {
  mo: mo
});

})();
