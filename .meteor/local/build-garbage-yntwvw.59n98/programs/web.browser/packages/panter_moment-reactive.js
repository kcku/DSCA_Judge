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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var moment = Package['momentjs:moment'].moment;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var momentReactive;

var require = meteorInstall({"node_modules":{"meteor":{"panter:moment-reactive":{"moment-reactive.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
// packages/panter_moment-reactive/moment-reactive.js                                   //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////
                                                                                        //
var dep = null; // make it usable on the server, if server-side tracker is used         // 2
                                                                                        //
if (typeof Tracker !== 'undefined' && Tracker !== null) {                               // 4
	dep = new Tracker.Dependency();                                                        // 5
}                                                                                       // 6
                                                                                        //
momentReactive = function () {                                                          // 8
	if (dep) {                                                                             // 9
		dep.depend();                                                                         // 10
	}                                                                                      // 11
                                                                                        //
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];                                                         // 8
	}                                                                                      // 8
                                                                                        //
	return moment.apply(moment, args);                                                     // 12
};                                                                                      // 13
                                                                                        //
if (dep) {                                                                              // 14
	Meteor.startup(function () {                                                           // 15
		Meteor.setInterval(function () {                                                      // 16
			dep.changed();                                                                       // 17
		}, momentReactive.interval);                                                          // 18
	});                                                                                    // 19
}                                                                                       // 20
                                                                                        //
momentReactive.interval = 1000;                                                         // 22
//////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/panter:moment-reactive/moment-reactive.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['panter:moment-reactive'] = {}, {
  momentReactive: momentReactive
});

})();
