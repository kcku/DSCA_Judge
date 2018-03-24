(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var moment = Package['momentjs:moment'].moment;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var momentReactive;

var require = meteorInstall({"node_modules":{"meteor":{"panter:moment-reactive":{"moment-reactive.js":function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/panter_moment-reactive/moment-reactive.js                           //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
let dep = null; // make it usable on the server, if server-side tracker is used

if (typeof Tracker !== 'undefined' && Tracker !== null) {
	dep = new Tracker.Dependency();
}

momentReactive = function (...args) {
	if (dep) {
		dep.depend();
	}

	return moment.apply(moment, args);
};

if (dep) {
	Meteor.startup(function () {
		Meteor.setInterval(function () {
			dep.changed();
		}, momentReactive.interval);
	});
}

momentReactive.interval = 1000;
//////////////////////////////////////////////////////////////////////////////////

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

//# sourceURL=meteor://💻app/packages/panter_moment-reactive.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcGFudGVyOm1vbWVudC1yZWFjdGl2ZS9tb21lbnQtcmVhY3RpdmUuanMiXSwibmFtZXMiOlsiZGVwIiwiVHJhY2tlciIsIkRlcGVuZGVuY3kiLCJtb21lbnRSZWFjdGl2ZSIsImFyZ3MiLCJkZXBlbmQiLCJtb21lbnQiLCJhcHBseSIsIk1ldGVvciIsInN0YXJ0dXAiLCJzZXRJbnRlcnZhbCIsImNoYW5nZWQiLCJpbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxNQUFNLElBQVYsQyxDQUNBOztBQUNBLElBQUcsT0FBT0MsT0FBUCxLQUFtQixXQUFuQixJQUFrQ0EsWUFBWSxJQUFqRCxFQUF1RDtBQUN0REQsT0FBTSxJQUFJQyxRQUFRQyxVQUFaLEVBQU47QUFDQTs7QUFFREMsaUJBQWlCLFVBQVMsR0FBR0MsSUFBWixFQUFrQjtBQUNsQyxLQUFHSixHQUFILEVBQVE7QUFDUEEsTUFBSUssTUFBSjtBQUNBOztBQUNELFFBQU9DLE9BQU9DLEtBQVAsQ0FBYUQsTUFBYixFQUFxQkYsSUFBckIsQ0FBUDtBQUNBLENBTEQ7O0FBTUEsSUFBR0osR0FBSCxFQUFRO0FBQ1BRLFFBQU9DLE9BQVAsQ0FBZSxZQUFVO0FBQ3hCRCxTQUFPRSxXQUFQLENBQW1CLFlBQVc7QUFDN0JWLE9BQUlXLE9BQUo7QUFDQSxHQUZELEVBRUdSLGVBQWVTLFFBRmxCO0FBR0EsRUFKRDtBQUtBOztBQUVEVCxlQUFlUyxRQUFmLEdBQTBCLElBQTFCLEMiLCJmaWxlIjoiL3BhY2thZ2VzL3BhbnRlcl9tb21lbnQtcmVhY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBkZXAgPSBudWxsO1xuLy8gbWFrZSBpdCB1c2FibGUgb24gdGhlIHNlcnZlciwgaWYgc2VydmVyLXNpZGUgdHJhY2tlciBpcyB1c2VkXG5pZih0eXBlb2YgVHJhY2tlciAhPT0gJ3VuZGVmaW5lZCcgJiYgVHJhY2tlciAhPT0gbnVsbCkge1xuXHRkZXAgPSBuZXcgVHJhY2tlci5EZXBlbmRlbmN5O1xufVxuXG5tb21lbnRSZWFjdGl2ZSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0aWYoZGVwKSB7XG5cdFx0ZGVwLmRlcGVuZCgpO1xuXHR9XG5cdHJldHVybiBtb21lbnQuYXBwbHkobW9tZW50LCBhcmdzKTtcbn1cbmlmKGRlcCkge1xuXHRNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpe1xuXHRcdE1ldGVvci5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdGRlcC5jaGFuZ2VkKCk7XG5cdFx0fSwgbW9tZW50UmVhY3RpdmUuaW50ZXJ2YWwpO1xuXHR9KTtcbn1cblxubW9tZW50UmVhY3RpdmUuaW50ZXJ2YWwgPSAxMDAwO1xuIl19
