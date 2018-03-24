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
var Template = Package['templating-runtime'].Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Spacebars = Package.spacebars.Spacebars;

/* Package-scope variables */
var MeteorMathJax, Helper;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/mrt_mathjax/lib/_.js                                                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
MeteorMathJax = null;                                                                                            // 1
Helper = null;                                                                                                   // 2
                                                                                                                 // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/mrt_mathjax/lib/Helper.js                                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
'use strict';                                                                                                    // 1
                                                                                                                 // 2
/**                                                                                                              // 3
 * Creates an instance of Helper, which is essentially a template generator.                                     // 4
 * @param {Object} options                                                                                       // 5
 * @param {Boolean} options.useCache                                                                             // 6
 */                                                                                                              // 7
Helper = function (options) {                                                                                    // 8
  this.cache = {};                                                                                               // 9
  this.options = {                                                                                               // 10
    useCache  : options && options.useCache !== undefined ? options.useCache : false,                            // 11
    transform : options && options.transform,                                                                    // 12
  };                                                                                                             // 13
};                                                                                                               // 14
                                                                                                                 // 15
/**                                                                                                              // 16
 * Create a template that can be used as helper to Render                                                        // 17
 * MathJax content. A typical use would be:                                                                      // 18
 *                                                                                                               // 19
 * Template.registerHelper('mathjax', Helper.getTemplate());                                                     // 20
 */                                                                                                              // 21
Helper.prototype.getTemplate = function getTemplate () {                                                         // 22
                                                                                                                 // 23
  var context = this;                                                                                            // 24
  var update = function (MathJax, firstNode, lastNode) {                                                         // 25
    var firstNodeReached = false;                                                                                // 26
    $(firstNode).parent().contents().each(function (index, node) {                                               // 27
      // TODO add support for text nodes                                                                         // 28
      var cacheKey;                                                                                              // 29
      if (node === firstNode) {                                                                                  // 30
        firstNodeReached = true;                                                                                 // 31
      }                                                                                                          // 32
      if (firstNodeReached && this.nodeType === 1) {                                                             // 33
        cacheKey = context.options.useCache && node.innerHTML;                                                   // 34
        if (context.options.useCache && context.cache[cacheKey]) {                                               // 35
          node.innerHTML = context.cache[cacheKey];                                                              // 36
        } else {                                                                                                 // 37
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, this], function () {                                        // 38
            if (context.options.useCache)                                                                        // 39
              context.cache[cacheKey] = node.innerHTML;                                                          // 40
          });                                                                                                    // 41
        }                                                                                                        // 42
      }                                                                                                          // 43
      return this !== lastNode;                                                                                  // 44
    });                                                                                                          // 45
  };                                                                                                             // 46
                                                                                                                 // 47
  var template = new Template('mathjax', function () {                                                           // 48
    var view = this, content = '';                                                                               // 49
    if (view.templateContentBlock) {                                                                             // 50
      content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);                                  // 51
    }                                                                                                            // 52
    if (typeof context.options.transform === 'function') {                                                       // 53
      content = context.options.transform(content);                                                              // 54
    }                                                                                                            // 55
    return HTML.Raw(content);                                                                                    // 56
                                                                                                                 // 57
    // NOTE: This should work too, but I am afraid of some side effects                                          // 58
    //       related to the fact that Blaze would be managing these nodes                                        // 59
    //       in it's own manners.                                                                                // 60
    //                                                                                                           // 61
    // return view.templateContentBlock;                                                                         // 62
  });                                                                                                            // 63
                                                                                                                 // 64
  template.onRendered(function () {                                                                              // 65
    var self = this;                                                                                             // 66
    //----------------------------------------                                                                   // 67
    MeteorMathJax.require(function (MathJax) {                                                                   // 68
      update(MathJax, self.firstNode, self.lastNode);                                                            // 69
    });                                                                                                          // 70
  });                                                                                                            // 71
                                                                                                                 // 72
  return template;                                                                                               // 73
};                                                                                                               // 74
                                                                                                                 // 75
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/mrt_mathjax/lib/MeteorMathJax.js                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
'use strict';                                                                                                    // 1
                                                                                                                 // 2
var listeners = [];                                                                                              // 3
                                                                                                                 // 4
MeteorMathJax = {                                                                                                // 5
  Helper    : Helper,                                                                                            // 6
  sourceUrl : 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML',                  // 7
  /**                                                                                                            // 8
   * Notify all listeners that the MathJax script has been loaded.                                               // 9
   */                                                                                                            // 10
  ready : function () {                                                                                          // 11
    var MathJax = window.MathJax;                                                                                // 12
    function triggerListeners () {                                                                               // 13
      while (listeners.length > 0) {                                                                             // 14
        listeners.pop().call(null, MathJax);                                                                     // 15
      }                                                                                                          // 16
    }                                                                                                            // 17
    if (MathJax && MathJax.Hub && MathJax.Hub.queue) {                                                           // 18
      triggerListeners();                                                                                        // 19
    } else if (MathJax && MathJax.Hub && MathJax.Hub.Register && typeof MathJax.Hub.Register.StartupHook === 'function') {
      // NOTE: Make sure further tasks are scheduled after MathJax is fully configured and operational.          // 21
      MathJax.Hub.Register.StartupHook("Begin", function () {                                                    // 22
        triggerListeners();                                                                                      // 23
      });                                                                                                        // 24
    } else {                                                                                                     // 25
      throw new Error('Cannot call MeteorMathJax.ready() before MathJax is really loaded.');                     // 26
    }                                                                                                            // 27
  },                                                                                                             // 28
  /**                                                                                                            // 29
   * Call the given callback as soon as MathJax is loaded.                                                       // 30
   * @param {Function} callback                                                                                  // 31
   */                                                                                                            // 32
  require : function (callback) {                                                                                // 33
    var self = this;                                                                                             // 34
    if (!window.MathJax && this.sourceUrl) {                                                                     // 35
      listeners.push(callback);                                                                                  // 36
      window.MathJax = {                                                                                         // 37
        AuthorInit: function () {                                                                                // 38
          window.MathJax.Hub.Config(self.defaultConfig);                                                         // 39
          MeteorMathJax.ready();                                                                                 // 40
        }                                                                                                        // 41
      };                                                                                                         // 42
      // load the MathJax script                                                                                 // 43
      $.getScript(this.sourceUrl);                                                                               // 44
    } else if (window.MathJax && window.MathJax.Hub && typeof window.MathJax.Hub.queue) { // it's already loaded
      callback(window.MathJax);                                                                                  // 46
    } else {                                                                                                     // 47
      listeners.push(callback);                                                                                  // 48
    }                                                                                                            // 49
  },                                                                                                             // 50
  /**                                                                                                            // 51
   * Default configuration which will be used as soon as MathJax is loaded.                                      // 52
   * It can be overwritten by the user.                                                                          // 53
   */                                                                                                            // 54
  defaultConfig: {                                                                                               // 55
    skipStartupTypeset: true,                                                                                    // 56
    showProcessingMessages: false,                                                                               // 57
    tex2jax: {                                                                                                   // 58
      inlineMath: [['$','$'],['\\(','\\)']]                                                                      // 59
    }                                                                                                            // 60
  }                                                                                                              // 61
};                                                                                                               // 62
                                                                                                                 // 63
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/mrt_mathjax/lib/templateIntegration.js                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var Blaze;                                                                                                       // 1
                                                                                                                 // 2
if (Package.templating) {                                                                                        // 3
  Blaze = Package.blaze.Blaze; // implied by `templating`                                                        // 4
                                                                                                                 // 5
  /**                                                                                                            // 6
   * Register the mathjax helper in the default form.                                                            // 7
   */                                                                                                            // 8
  Blaze.Template.registerHelper('mathjax', new Helper().getTemplate());                                          // 9
}                                                                                                                // 10
                                                                                                                 // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mrt:mathjax'] = {}, {
  MeteorMathJax: MeteorMathJax
});

})();
