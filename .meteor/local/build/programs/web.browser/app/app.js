var require = meteorInstall({"imports":{"ui":{"problem":{"detail.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/detail.html                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.detail.js"), {                                                                        // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.detail.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/template.detail.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("problem_detail");                                                                                // 2
Template["problem_detail"] = new Template("Template.problem_detail", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "card",                                                                                                     // 6
    style: function() {                                                                                                // 7
      return [ "height:700px; ", Blaze.Unless(function() {                                                             // 8
        return Spacebars.call(Spacebars.dot(view.lookup("currentProblemId"), "get"));                                  // 9
      }, function() {                                                                                                  // 10
        return "display:none";                                                                                         // 11
      }) ];                                                                                                            // 12
    }                                                                                                                  // 13
  }, "\n\t\t", HTML.DIV({                                                                                              // 14
    class: "card-body"                                                                                                 // 15
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 16
    class: "form-group"                                                                                                // 17
  }, "\n\t\t\t\t", HTML.H4({                                                                                           // 18
    "data-toggle": ".title-edit",                                                                                      // 19
    class: "title-view card-title"                                                                                     // 20
  }, Blaze.View("lookup:currentProblem.title", function() {                                                            // 21
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "title"));                                  // 22
  })), "\n\t\t\t\t", HTML.INPUT({                                                                                      // 23
    "data-toggle": ".title-view",                                                                                      // 24
    class: "title-edit form-control",                                                                                  // 25
    type: "text",                                                                                                      // 26
    name: "title",                                                                                                     // 27
    value: function() {                                                                                                // 28
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "title"));                                // 29
    }                                                                                                                  // 30
  }), "\n\t\t\t"), "\n\t\t", Blaze.If(function() {                                                                     // 31
    return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                       // 32
  }, function() {                                                                                                      // 33
    return [ "\n\t\t\t", HTML.DIV({                                                                                    // 34
      class: "form-group row"                                                                                          // 35
    }, "\n\t\t\t\t", HTML.LABEL({                                                                                      // 36
      class: "col-2"                                                                                                   // 37
    }, "\n\t\t\t\t\t", HTML.INPUT({                                                                                    // 38
      type: "checkbox",                                                                                                // 39
      name: "isExam",                                                                                                  // 40
      checked: function() {                                                                                            // 41
        return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "isExam"));                             // 42
      }                                                                                                                // 43
    }), " Exam\n\t\t\t\t"), "\n\t\t\t\t", HTML.LABEL({                                                                 // 44
      class: "col-2"                                                                                                   // 45
    }, "\n\t\t\t\t\t", HTML.INPUT({                                                                                    // 46
      type: "checkbox",                                                                                                // 47
      name: "isPublic",                                                                                                // 48
      checked: function() {                                                                                            // 49
        return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "isPublic"));                           // 50
      }                                                                                                                // 51
    }), " Public\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                                 // 52
  }), "\n\t\t\t", HTML.DIV({                                                                                           // 53
    class: "form-group"                                                                                                // 54
  }, "\n\t\t\t\t", HTML.Raw('<h4 class="card-title">Description</h4>'), "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("mathjax"), function() {
    return HTML.P({                                                                                                    // 56
      "data-toggle": ".description-edit",                                                                              // 57
      class: "description-view card-text"                                                                              // 58
    }, Blaze.View("lookup:currentProblem.description", function() {                                                    // 59
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "description"));                          // 60
    }));                                                                                                               // 61
  }), "\n\t\t\t\t", HTML.TEXTAREA({                                                                                    // 62
    "data-toggle": ".description-view",                                                                                // 63
    class: "description-edit form-control",                                                                            // 64
    name: "description",                                                                                               // 65
    value: function() {                                                                                                // 66
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "description"));                          // 67
    }                                                                                                                  // 68
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                              // 69
    class: "form-group"                                                                                                // 70
  }, "\n\t\t\t\t", HTML.Raw('<h4 class="card-title">Input Format</h4>'), "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("mathjax"), function() {
    return HTML.P({                                                                                                    // 72
      "data-toggle": ".inputFormat-edit",                                                                              // 73
      class: "inputFormat-view card-text"                                                                              // 74
    }, Blaze.View("lookup:currentProblem.inputFormat", function() {                                                    // 75
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "inputFormat"));                          // 76
    }));                                                                                                               // 77
  }), "\n\t\t\t\t", HTML.TEXTAREA({                                                                                    // 78
    "data-toggle": ".inputFormat-view",                                                                                // 79
    class: "inputFormat-edit form-control",                                                                            // 80
    name: "inputFormat",                                                                                               // 81
    value: function() {                                                                                                // 82
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "inputFormat"));                          // 83
    }                                                                                                                  // 84
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                              // 85
    class: "form-group"                                                                                                // 86
  }, "\n\t\t\t\t", HTML.Raw('<h4 class="card-title">Output Format</h4>'), "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("mathjax"), function() {
    return HTML.P({                                                                                                    // 88
      "data-toggle": ".outputFormat-edit",                                                                             // 89
      class: "outputFormat-view card-text"                                                                             // 90
    }, Blaze.View("lookup:currentProblem.outputFormat", function() {                                                   // 91
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "outputFormat"));                         // 92
    }));                                                                                                               // 93
  }), "\n\t\t\t\t", HTML.TEXTAREA({                                                                                    // 94
    "data-toggle": ".outputFormat-view",                                                                               // 95
    class: "outputFormat-edit form-control",                                                                           // 96
    name: "outputFormat",                                                                                              // 97
    value: function() {                                                                                                // 98
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "outputFormat"));                         // 99
    }                                                                                                                  // 100
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                              // 101
    class: "form-group"                                                                                                // 102
  }, "\n\t\t\t\t", HTML.Raw('<h4 class="card-title">Hint</h4>'), "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("mathjax"), function() {
    return HTML.P({                                                                                                    // 104
      "data-toggle": ".hint-edit",                                                                                     // 105
      class: "hint-view card-text"                                                                                     // 106
    }, Blaze.View("lookup:currentProblem.hint", function() {                                                           // 107
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "hint"));                                 // 108
    }));                                                                                                               // 109
  }), "\n\t\t\t\t", HTML.TEXTAREA({                                                                                    // 110
    "data-toggle": ".hint-view",                                                                                       // 111
    class: "hint-edit form-control",                                                                                   // 112
    name: "hint",                                                                                                      // 113
    value: function() {                                                                                                // 114
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblem"), "hint"));                                 // 115
    }                                                                                                                  // 116
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 117
}));                                                                                                                   // 118
                                                                                                                       // 119
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/list.html                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.list.js"), {                                                                          // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.list.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/template.list.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("problem_list");                                                                                  // 2
Template["problem_list"] = new Template("Template.problem_list", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "card"                                                                                                      // 6
  }, "\n  \t\t", HTML.DIV({                                                                                            // 7
    class: "card-header"                                                                                               // 8
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 9
    return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                       // 10
  }, function() {                                                                                                      // 11
    return [ "\n\t\t\t", HTML.BUTTON({                                                                                 // 12
      class: "btn btn-sm btn-primary insert-btn fa fa-plus"                                                            // 13
    }), "\n\t\t" ];                                                                                                    // 14
  }), "\n\t\t\t", HTML.Raw('<strong class="ml-1">Problem List</strong>'), "\n  \t\t"), "\n\t  \t", HTML.UL({           // 15
    class: "list-group",                                                                                               // 16
    style: "height:700px"                                                                                              // 17
  }, "\n\t  \t", Blaze.Each(function() {                                                                               // 18
    return {                                                                                                           // 19
      _sequence: Spacebars.call(view.lookup("problemList")),                                                           // 20
      _variable: "problem"                                                                                             // 21
    };                                                                                                                 // 22
  }, function() {                                                                                                      // 23
    return [ "\n\t    \t", HTML.LI({                                                                                   // 24
      "data-id": function() {                                                                                          // 25
        return Spacebars.mustache(Spacebars.dot(view.lookup("problem"), "_id"));                                       // 26
      },                                                                                                               // 27
      class: function() {                                                                                              // 28
        return [ "list-group-item get-btn ", Blaze.If(function() {                                                     // 29
          return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("currentProblemId"), "get"), Spacebars.dot(view.lookup("problem"), "_id"));
        }, function() {                                                                                                // 31
          return "active";                                                                                             // 32
        }) ];                                                                                                          // 33
      }                                                                                                                // 34
    }, "\n\t    \t", Blaze.If(function() {                                                                             // 35
      return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                     // 36
    }, function() {                                                                                                    // 37
      return [ "\n\t    \t\t", HTML.BUTTON({                                                                           // 38
        "data-id": function() {                                                                                        // 39
          return Spacebars.mustache(Spacebars.dot(view.lookup("problem"), "_id"));                                     // 40
        },                                                                                                             // 41
        class: "btn btn-sm btn-danger remove-btn fa fa-remove"                                                         // 42
      }), "\n\t    \t" ];                                                                                              // 43
    }), "\n\t    \t\t", HTML.SPAN({                                                                                    // 44
      class: "ml-1"                                                                                                    // 45
    }, Blaze.View("lookup:problem.title", function() {                                                                 // 46
      return Spacebars.mustache(Spacebars.dot(view.lookup("problem"), "title"));                                       // 47
    })), "\n\t    \t", Blaze.If(function() {                                                                           // 48
      return Spacebars.call(Spacebars.dot(view.lookup("problem"), "isExam"));                                          // 49
    }, function() {                                                                                                    // 50
      return [ "\n\t    \t\t", HTML.SPAN({                                                                             // 51
        class: "ml-1 fa fa-book"                                                                                       // 52
      }), "\n\t    \t" ];                                                                                              // 53
    }), "\n\t    \t", Blaze.Unless(function() {                                                                        // 54
      return Spacebars.call(Spacebars.dot(view.lookup("problem"), "isPublic"));                                        // 55
    }, function() {                                                                                                    // 56
      return [ "\n\t    \t\t", HTML.SPAN({                                                                             // 57
        class: "ml-1 fa fa-ban"                                                                                        // 58
      }), "\n\t    \t" ];                                                                                              // 59
    }), "\n\t    \t"), "\n\t\t" ];                                                                                     // 60
  }), "\n  \t\t"), "\n  \t");                                                                                          // 61
}));                                                                                                                   // 62
                                                                                                                       // 63
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"test.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/test.html                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.test.js"), {                                                                          // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.test.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/template.test.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("problem_test");                                                                                  // 2
Template["problem_test"] = new Template("Template.problem_test", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "row",                                                                                                      // 6
    style: function() {                                                                                                // 7
      return Blaze.Unless(function() {                                                                                 // 8
        return Spacebars.call(Spacebars.dot(view.lookup("currentProblemId"), "get"));                                  // 9
      }, function() {                                                                                                  // 10
        return "display:none";                                                                                         // 11
      });                                                                                                              // 12
    }                                                                                                                  // 13
  }, "\n\t\t", HTML.DIV({                                                                                              // 14
    class: "col-9"                                                                                                     // 15
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 16
    class: "card",                                                                                                     // 17
    style: function() {                                                                                                // 18
      return Blaze.Unless(function() {                                                                                 // 19
        return Spacebars.call(view.lookup("currentProblemTest"));                                                      // 20
      }, function() {                                                                                                  // 21
        return "display:none";                                                                                         // 22
      });                                                                                                              // 23
    }                                                                                                                  // 24
  }, "\n  \t\t\t\t", HTML.DIV({                                                                                        // 25
    class: "card-body"                                                                                                 // 26
  }, "\n  \t\t\t\t\t", HTML.DIV({                                                                                      // 27
    class: "form-group row"                                                                                            // 28
  }, "\n  \t\t\t\t\t\t", HTML.DIV({                                                                                    // 29
    class: "col-6"                                                                                                     // 30
  }, "\n  \t\t\t\t\t\t\t", HTML.DIV({                                                                                  // 31
    "data-toggle": ".timeLimit-edit",                                                                                  // 32
    class: "timeLimit-view card-text"                                                                                  // 33
  }, "Time Limit: ", Blaze.View("lookup:currentProblemTest.timeLimit", function() {                                    // 34
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "timeLimit"));                          // 35
  }), " ms"), "\n  \t\t\t\t\t\t\t", HTML.INPUT({                                                                       // 36
    "data-toggle": ".timeLimit-view",                                                                                  // 37
    class: "timeLimit-edit form-control",                                                                              // 38
    type: "number",                                                                                                    // 39
    name: "timeLimit",                                                                                                 // 40
    value: function() {                                                                                                // 41
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "timeLimit"));                        // 42
    }                                                                                                                  // 43
  }), "\n  \t\t\t\t\t\t"), "\n  \t\t\t\t\t\t", HTML.DIV({                                                              // 44
    class: "col-6"                                                                                                     // 45
  }, "\n  \t\t\t\t\t\t\t", HTML.DIV({                                                                                  // 46
    "data-toggle": ".memoryLimit-edit",                                                                                // 47
    class: "memoryLimit-view card-text"                                                                                // 48
  }, "Memory Limit: ", Blaze.View("lookup:currentProblemTest.memoryLimit", function() {                                // 49
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "memoryLimit"));                        // 50
  }), " kb"), "\n  \t\t\t\t\t\t\t", HTML.INPUT({                                                                       // 51
    "data-toggle": ".memoryLimit-view",                                                                                // 52
    class: "memoryLimit-edit form-control",                                                                            // 53
    type: "number",                                                                                                    // 54
    name: "memoryLimit",                                                                                               // 55
    value: function() {                                                                                                // 56
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "memoryLimit"));                      // 57
    }                                                                                                                  // 58
  }), "\n  \t\t\t\t\t\t"), "\n  \t\t\t\t\t"), "\n  \t\t\t\t\t", HTML.DIV({                                             // 59
    class: "form-group row"                                                                                            // 60
  }, "\n  \t\t\t\t\t\t", HTML.DIV({                                                                                    // 61
    class: "col-6"                                                                                                     // 62
  }, "\n  \t\t\t\t\t\t\t", HTML.DIV({                                                                                  // 63
    "data-toggle": ".score-edit",                                                                                      // 64
    class: "score-view card-text"                                                                                      // 65
  }, "Score: ", Blaze.View("lookup:currentProblemTest.score", function() {                                             // 66
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "score"));                              // 67
  })), "\n  \t\t\t\t\t\t\t", HTML.INPUT({                                                                              // 68
    "data-toggle": ".score-view",                                                                                      // 69
    class: "score-edit form-control",                                                                                  // 70
    type: "number",                                                                                                    // 71
    name: "score",                                                                                                     // 72
    value: function() {                                                                                                // 73
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "score"));                            // 74
    }                                                                                                                  // 75
  }), "\n  \t\t\t\t\t\t"), "\n  \t\t\t\t\t", Blaze.If(function() {                                                     // 76
    return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                       // 77
  }, function() {                                                                                                      // 78
    return [ "\n\t\t\t\t\t\t", HTML.LABEL({                                                                            // 79
      class: "col-6"                                                                                                   // 80
    }, "\n          \t\t\t\t\t", HTML.INPUT({                                                                          // 81
      type: "checkbox",                                                                                                // 82
      name: "isPublic",                                                                                                // 83
      checked: function() {                                                                                            // 84
        return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "isPublic"));                       // 85
      }                                                                                                                // 86
    }), " Public\n        \t\t\t\t"), "\n        \t\t\t" ];                                                            // 87
  }), "\n  \t\t\t\t\t"), "\n  \t\t\t\t\t", HTML.DIV({                                                                  // 88
    class: "form-group row"                                                                                            // 89
  }, "\n  \t\t\t\t\t\t", HTML.DIV({                                                                                    // 90
    class: "col-6"                                                                                                     // 91
  }, "\n    \t\t\t\t\t\t", HTML.Raw('<h4>Input <button data-clipboard-target=".input-view" class="ml-3 btn btn-sm btn-info fa fa-copy"></button></h4>'), "\n    \t\t\t\t\t\t", HTML.P({
    style: "height:510px",                                                                                             // 93
    "data-toggle": ".input-edit",                                                                                      // 94
    class: "input-view card-text"                                                                                      // 95
  }, Blaze.View("lookup:currentProblemTest.input", function() {                                                        // 96
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "input"));                              // 97
  })), "\n\t\t\t\t\t\t\t", HTML.TEXTAREA({                                                                             // 98
    style: "height:510px",                                                                                             // 99
    "data-toggle": ".input-view",                                                                                      // 100
    class: "input-edit form-control",                                                                                  // 101
    name: "input",                                                                                                     // 102
    value: function() {                                                                                                // 103
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "input"));                            // 104
    }                                                                                                                  // 105
  }), "\n    \t\t\t\t\t"), "\n    \t\t\t\t\t", HTML.DIV({                                                              // 106
    class: "col-6"                                                                                                     // 107
  }, "\n\t\t\t\t\t\t\t", HTML.Raw('<h4>Output <button data-clipboard-target=".output-view" class="ml-3 btn btn-sm btn-info fa fa-copy"></button></h4>'), "\n\t\t\t\t\t\t\t", HTML.P({
    style: "height:510px",                                                                                             // 109
    "data-toggle": ".output-edit",                                                                                     // 110
    class: "output-view card-text"                                                                                     // 111
  }, Blaze.View("lookup:currentProblemTest.output", function() {                                                       // 112
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "output"));                             // 113
  })), "\n\t\t\t\t\t\t\t", HTML.TEXTAREA({                                                                             // 114
    style: "height:510px",                                                                                             // 115
    "data-toggle": ".output-view",                                                                                     // 116
    class: "output-edit form-control",                                                                                 // 117
    name: "output",                                                                                                    // 118
    value: function() {                                                                                                // 119
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentProblemTest"), "output"));                           // 120
    }                                                                                                                  // 121
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                  // 122
    class: "col-3"                                                                                                     // 123
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 124
    class: "card"                                                                                                      // 125
  }, "\n\t\t  \t\t", HTML.DIV({                                                                                        // 126
    class: "card-header"                                                                                               // 127
  }, "\n\t\t\t\t", Blaze.If(function() {                                                                               // 128
    return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                       // 129
  }, function() {                                                                                                      // 130
    return [ "\n\t\t\t\t\t", HTML.BUTTON({                                                                             // 131
      class: "btn btn-sm btn-primary insert-btn fa fa-plus"                                                            // 132
    }), "\n\t\t\t\t" ];                                                                                                // 133
  }), "\n\t\t\t\t\t", HTML.Raw('<strong class="ml-1">Test List</strong>'), "\n\t\t  \t\t"), "\n\t\t\t  \t", HTML.UL({  // 134
    class: "list-group",                                                                                               // 135
    style: "height:660px"                                                                                              // 136
  }, "\n\t\t\t\t", Blaze.Each(function() {                                                                             // 137
    return {                                                                                                           // 138
      _sequence: Spacebars.call(view.lookup("problemTestList")),                                                       // 139
      _variable: "problemTest"                                                                                         // 140
    };                                                                                                                 // 141
  }, function() {                                                                                                      // 142
    return [ "\n\t\t\t  \t\t", HTML.LI({                                                                               // 143
      "data-id": function() {                                                                                          // 144
        return Spacebars.mustache(Spacebars.dot(view.lookup("problemTest"), "_id"));                                   // 145
      },                                                                                                               // 146
      class: function() {                                                                                              // 147
        return [ "list-group-item get-btn ", Blaze.If(function() {                                                     // 148
          return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("currentProblemTest"), "_id"), Spacebars.dot(view.lookup("problemTest"), "_id"));
        }, function() {                                                                                                // 150
          return "active";                                                                                             // 151
        }) ];                                                                                                          // 152
      }                                                                                                                // 153
    }, "\n\t    \t\t\t", Blaze.If(function() {                                                                         // 154
      return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                     // 155
    }, function() {                                                                                                    // 156
      return [ "\n\t    \t\t\t\t", HTML.BUTTON({                                                                       // 157
        "data-id": function() {                                                                                        // 158
          return Spacebars.mustache(Spacebars.dot(view.lookup("problemTest"), "_id"));                                 // 159
        },                                                                                                             // 160
        class: "btn btn-sm btn-danger remove-btn fa fa-remove"                                                         // 161
      }), "\n\t    \t\t\t" ];                                                                                          // 162
    }), "\n\t\t    \t\t\t", HTML.SPAN({                                                                                // 163
      class: "ml-1"                                                                                                    // 164
    }, "Test #", Blaze.View("lookup:@index", function() {                                                              // 165
      return Spacebars.mustache(view.lookup("@index"));                                                                // 166
    })), "\n\t\t    \t\t", Blaze.Unless(function() {                                                                   // 167
      return Spacebars.call(Spacebars.dot(view.lookup("problemTest"), "isPublic"));                                    // 168
    }, function() {                                                                                                    // 169
      return [ "\n\t\t    \t\t\t", HTML.SPAN({                                                                         // 170
        class: "ml-1 fa fa-ban"                                                                                        // 171
      }), "\n\t\t    \t\t" ];                                                                                          // 172
    }), "\n\t\t    \t\t"), "\n\t\t  \t\t" ];                                                                           // 173
  }), "\n\t\t  \t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                // 174
}));                                                                                                                   // 175
                                                                                                                       // 176
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"upload.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/upload.html                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.upload.js"), {                                                                        // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.upload.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/template.upload.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("problem_upload");                                                                                // 2
Template["problem_upload"] = new Template("Template.problem_upload", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "card",                                                                                                     // 6
    style: function() {                                                                                                // 7
      return Blaze.Unless(function() {                                                                                 // 8
        return Spacebars.call(Spacebars.dot(view.lookup("currentProblemId"), "get"));                                  // 9
      }, function() {                                                                                                  // 10
        return "display:none";                                                                                         // 11
      });                                                                                                              // 12
    }                                                                                                                  // 13
  }, "\n\t\t", HTML.DIV({                                                                                              // 14
    class: "card-body"                                                                                                 // 15
  }, "\n\t\t\t", HTML.FORM({                                                                                           // 16
    class: "upload-form"                                                                                               // 17
  }, "\n\t\t\t\t", HTML.Raw('<div class="form-group row align-items-center justify-content-between">\n\t\t\t\t\t<label class="col-auto"><input type="radio" name="lang" value="c"> gcc -O2 -std=c99 -lm</label>\n\t\t\t\t\t<label class="col-auto"><input type="radio" name="lang" value="cpp"> g++ -O2 -std=c++11</label>\n\t\t\t\t\t<div class="col-auto"><button class="btn btn-primary">Upload</button></div>\n\t\t\t\t</div>'), "\n\t\t\t\t", HTML.TEXTAREA({
    class: "form-control",                                                                                             // 19
    name: "code",                                                                                                      // 20
    style: "height:610px"                                                                                              // 21
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 22
}));                                                                                                                   // 23
                                                                                                                       // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/main.html                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.main.js"), {                                                                          // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/template.main.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("problem_main");                                                                                  // 2
Template["problem_main"] = new Template("Template.problem_main", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "row"                                                                                                       // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "col-4"                                                                                                     // 8
  }, Blaze._TemplateWith(function() {                                                                                  // 9
    return Spacebars.call(view.lookup("shareArgs"));                                                                   // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(view.lookupTemplate("problem_list"));                                                     // 12
  })), "\n\t\t", HTML.DIV({                                                                                            // 13
    class: "col-8"                                                                                                     // 14
  }, "\n\t\t\t", HTML.Raw('<ul class="nav nav-tabs">\n\t\t\t\t<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#problem_detail_tpl">Details</a></li>\n\t\t\t\t<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#problem_test_tpl">Tests</a></li>\n\t\t\t\t<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#problem_upload_tpl">Upload</a></li>\n\t\t\t\t<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#problem_submission_main_tpl">Submissions</a></li>\n\t\t\t</ul>'), "\n\t\t\t", HTML.DIV({
    class: "tab-content"                                                                                               // 16
  }, "\n\t\t\t\t", HTML.DIV({                                                                                          // 17
    class: "tab-pane",                                                                                                 // 18
    id: "problem_detail_tpl"                                                                                           // 19
  }, Blaze._TemplateWith(function() {                                                                                  // 20
    return Spacebars.call(view.lookup("shareArgs"));                                                                   // 21
  }, function() {                                                                                                      // 22
    return Spacebars.include(view.lookupTemplate("problem_detail"));                                                   // 23
  })), "\n\t\t\t\t", HTML.DIV({                                                                                        // 24
    class: "tab-pane",                                                                                                 // 25
    id: "problem_test_tpl"                                                                                             // 26
  }, Blaze._TemplateWith(function() {                                                                                  // 27
    return Spacebars.call(view.lookup("shareArgs"));                                                                   // 28
  }, function() {                                                                                                      // 29
    return Spacebars.include(view.lookupTemplate("problem_test"));                                                     // 30
  })), "\n\t\t\t\t", HTML.DIV({                                                                                        // 31
    class: "tab-pane",                                                                                                 // 32
    id: "problem_upload_tpl"                                                                                           // 33
  }, Blaze._TemplateWith(function() {                                                                                  // 34
    return Spacebars.call(view.lookup("shareArgs"));                                                                   // 35
  }, function() {                                                                                                      // 36
    return Spacebars.include(view.lookupTemplate("problem_upload"));                                                   // 37
  })), "\n\t\t\t\t", HTML.DIV({                                                                                        // 38
    class: "tab-pane",                                                                                                 // 39
    id: "problem_submission_main_tpl"                                                                                  // 40
  }, Blaze._TemplateWith(function() {                                                                                  // 41
    return Spacebars.call(view.lookup("shareArgs"));                                                                   // 42
  }, function() {                                                                                                      // 43
    return Spacebars.include(view.lookupTemplate("submission_main"));                                                  // 44
  })), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                // 45
}));                                                                                                                   // 46
                                                                                                                       // 47
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"detail.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/detail.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Problems = void 0;                                                                                                 // 1
module.watch(require("/imports/api/problem.js"), {                                                                     // 1
	Problems: function (v) {                                                                                              // 1
		Problems = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
module.watch(require("./detail.html"));                                                                                // 1
Template.problem_detail.onCreated(function () {                                                                        // 4
	var _this = this;                                                                                                     // 4
                                                                                                                       //
	this.autorun(function () {                                                                                            // 5
		return _this.subscribe('Problems.findOne', _this.data.currentProblemId.get());                                       // 5
	});                                                                                                                   // 5
});                                                                                                                    // 6
Template.problem_detail.onRendered(function () {                                                                       // 8
	this.$('[class*=edit]').hide();                                                                                       // 9
});                                                                                                                    // 10
Template.problem_detail.helpers({                                                                                      // 12
	currentProblem: function () {                                                                                         // 13
		var problem = Problems.findOne({                                                                                     // 14
			_id: this.currentProblemId.get()                                                                                    // 14
		});                                                                                                                  // 14
                                                                                                                       //
		if (problem == undefined) {                                                                                          // 16
			this.currentProblemId.set(null);                                                                                    // 17
		}                                                                                                                    // 18
                                                                                                                       //
		return problem;                                                                                                      // 19
	}                                                                                                                     // 20
});                                                                                                                    // 12
Template.problem_detail.events({                                                                                       // 23
	'blur [class*=edit]': function (event, instance) {                                                                    // 24
		var _Meteor$call;                                                                                                    // 24
                                                                                                                       //
		var target = event.currentTarget;                                                                                    // 25
		var toggle = target.dataset.toggle;                                                                                  // 26
		var field = target.name;                                                                                             // 27
		var value = target.value;                                                                                            // 28
		instance.$(target).hide();                                                                                           // 30
		instance.$(toggle).show();                                                                                           // 31
		Meteor.call('Problems.update', this.currentProblemId.get(), (_Meteor$call = {}, _Meteor$call[field] = value, _Meteor$call));
	},                                                                                                                    // 34
	'click [class*=view]': function (event, instance) {                                                                   // 35
		if (!Meteor.isAdmin()) return;                                                                                       // 36
		var target = event.currentTarget;                                                                                    // 38
		var toggle = target.dataset.toggle;                                                                                  // 39
		instance.$(target).hide();                                                                                           // 41
		instance.$(toggle).show().focus();                                                                                   // 42
	},                                                                                                                    // 43
	'click [type=checkbox]': function (event) {                                                                           // 44
		var _Meteor$call2;                                                                                                   // 44
                                                                                                                       //
		var target = event.currentTarget;                                                                                    // 45
		var field = target.name;                                                                                             // 46
		var value = target.checked;                                                                                          // 47
		Meteor.call('Problems.update', this.currentProblemId.get(), (_Meteor$call2 = {}, _Meteor$call2[field] = value, _Meteor$call2));
	}                                                                                                                     // 50
});                                                                                                                    // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/list.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Problems = void 0;                                                                                                 // 1
module.watch(require("/imports/api/problem.js"), {                                                                     // 1
	Problems: function (v) {                                                                                              // 1
		Problems = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
module.watch(require("./list.html"));                                                                                  // 1
Template.problem_list.onCreated(function () {                                                                          // 4
	this.subscribe('Problems.findAll');                                                                                   // 5
});                                                                                                                    // 6
Template.problem_list.helpers({                                                                                        // 8
	problemList: function () {                                                                                            // 9
		return Problems.find({}, {                                                                                           // 10
			fields: {                                                                                                           // 10
				_id: 1,                                                                                                            // 10
				title: 1,                                                                                                          // 10
				isExam: 1,                                                                                                         // 10
				isPublic: 1                                                                                                        // 10
			},                                                                                                                  // 10
			sort: {                                                                                                             // 10
				title: 1                                                                                                           // 10
			}                                                                                                                   // 10
		});                                                                                                                  // 10
	}                                                                                                                     // 11
});                                                                                                                    // 8
Template.problem_list.events({                                                                                         // 14
	'click .insert-btn': function () {                                                                                    // 15
		Meteor.call('Problems.insert');                                                                                      // 16
	},                                                                                                                    // 17
	'click .remove-btn': function (event) {                                                                               // 18
		var id = event.currentTarget.dataset.id;                                                                             // 19
		Meteor.call('Problems.remove', {                                                                                     // 20
			_id: id                                                                                                             // 20
		});                                                                                                                  // 20
	},                                                                                                                    // 21
	'click .get-btn': function (event) {                                                                                  // 22
		var id = event.currentTarget.dataset.id;                                                                             // 23
		this.currentProblemId.set(id);                                                                                       // 24
	}                                                                                                                     // 25
});                                                                                                                    // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"test.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/test.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ProblemTests = void 0;                                                                                             // 1
module.watch(require("/imports/api/problem.js"), {                                                                     // 1
	ProblemTests: function (v) {                                                                                          // 1
		ProblemTests = v;                                                                                                    // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
module.watch(require("./test.html"));                                                                                  // 1
Template.problem_test.onCreated(function () {                                                                          // 4
	var _this = this;                                                                                                     // 4
                                                                                                                       //
	this.currentProblemTestId = new ReactiveVar();                                                                        // 5
	this.autorun(function () {                                                                                            // 6
		return _this.subscribe('ProblemTests.findOne', _this.currentProblemTestId.get());                                    // 6
	});                                                                                                                   // 6
	this.autorun(function () {                                                                                            // 7
		return _this.subscribe('ProblemTests.findAllByProblem', _this.data.currentProblemId.get());                          // 7
	});                                                                                                                   // 7
});                                                                                                                    // 8
Template.problem_test.onRendered(function () {                                                                         // 10
	this.$('[class*=edit]').hide();                                                                                       // 11
});                                                                                                                    // 12
Template.problem_test.helpers({                                                                                        // 14
	problemTestList: function () {                                                                                        // 15
		return ProblemTests.find({                                                                                           // 16
			problemId: this.currentProblemId.get()                                                                              // 16
		}, {                                                                                                                 // 16
			fields: {                                                                                                           // 16
				_id: 1,                                                                                                            // 16
				isPublic: 1                                                                                                        // 16
			},                                                                                                                  // 16
			sort: {                                                                                                             // 16
				_id: 1                                                                                                             // 16
			}                                                                                                                   // 16
		});                                                                                                                  // 16
	},                                                                                                                    // 17
	currentProblemTest: function () {                                                                                     // 18
		var problemTest = ProblemTests.findOne({                                                                             // 19
			_id: Template.instance().currentProblemTestId.get(),                                                                // 19
			problemId: this.currentProblemId.get()                                                                              // 19
		});                                                                                                                  // 19
                                                                                                                       //
		if (problemTest == undefined) {                                                                                      // 21
			Template.instance().currentProblemTestId.set(null);                                                                 // 22
		}                                                                                                                    // 23
                                                                                                                       //
		return problemTest;                                                                                                  // 24
	}                                                                                                                     // 25
});                                                                                                                    // 14
Template.problem_test.events({                                                                                         // 28
	'click .insert-btn': function () {                                                                                    // 29
		Meteor.call('ProblemTests.insert', this.currentProblemId.get());                                                     // 30
	},                                                                                                                    // 31
	'click .remove-btn': function (event) {                                                                               // 32
		var id = event.currentTarget.dataset.id;                                                                             // 33
		Meteor.call('ProblemTests.remove', {                                                                                 // 34
			_id: id                                                                                                             // 34
		});                                                                                                                  // 34
	},                                                                                                                    // 35
	'click .get-btn': function (event, instance) {                                                                        // 36
		var id = event.currentTarget.dataset.id;                                                                             // 37
		instance.currentProblemTestId.set(id);                                                                               // 38
	},                                                                                                                    // 39
	'blur [class*=edit]': function (event, instance) {                                                                    // 40
		var _Meteor$call;                                                                                                    // 40
                                                                                                                       //
		var target = event.currentTarget;                                                                                    // 41
		var toggle = target.dataset.toggle;                                                                                  // 42
		var field = target.name;                                                                                             // 43
		var value = target.value;                                                                                            // 44
		instance.$(target).hide();                                                                                           // 46
		instance.$(toggle).show();                                                                                           // 47
		Meteor.call('ProblemTests.update', instance.currentProblemTestId.get(), (_Meteor$call = {}, _Meteor$call[field] = value, _Meteor$call));
	},                                                                                                                    // 50
	'click [class*=view]': function (event, instance) {                                                                   // 51
		if (!Meteor.isAdmin()) return;                                                                                       // 52
		var target = event.currentTarget;                                                                                    // 54
		var toggle = target.dataset.toggle;                                                                                  // 55
		instance.$(target).hide();                                                                                           // 57
		instance.$(toggle).show().focus();                                                                                   // 58
	},                                                                                                                    // 59
	'click [type=checkbox]': function (event, instance) {                                                                 // 60
		var _Meteor$call2;                                                                                                   // 60
                                                                                                                       //
		var target = event.currentTarget;                                                                                    // 61
		var field = target.name;                                                                                             // 62
		var value = target.checked;                                                                                          // 63
		Meteor.call('ProblemTests.update', instance.currentProblemTestId.get(), (_Meteor$call2 = {}, _Meteor$call2[field] = value, _Meteor$call2));
	}                                                                                                                     // 66
});                                                                                                                    // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"upload.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/upload.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./upload.html"));                                                                                // 1
Template.problem_upload.events({                                                                                       // 3
	'submit .upload-form': function (event) {                                                                             // 4
		var target = event.currentTarget;                                                                                    // 5
		var lang = target.lang.value;                                                                                        // 6
		var code = target.code.value;                                                                                        // 7
		target.code.value = null;                                                                                            // 9
		event.preventDefault();                                                                                              // 10
		Meteor.call('Submissions.insert', this.currentProblemId.get(), Meteor.userId(), lang, code);                         // 11
	}                                                                                                                     // 12
});                                                                                                                    // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/problem/main.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./list.js"));                                                                                    // 1
module.watch(require("./detail.js"));                                                                                  // 1
module.watch(require("./test.js"));                                                                                    // 1
module.watch(require("./upload.js"));                                                                                  // 1
module.watch(require("../submission/main.js"));                                                                        // 1
module.watch(require("./main.html"));                                                                                  // 1
Template.problem_main.onCreated(function () {                                                                          // 8
	this.currentProblemId = new ReactiveVar();                                                                            // 9
});                                                                                                                    // 10
Template.problem_main.onRendered(function () {                                                                         // 12
	this.$('.nav-link')[0].click();                                                                                       // 13
});                                                                                                                    // 14
Template.problem_main.helpers({                                                                                        // 16
	shareArgs: function () {                                                                                              // 17
		return {                                                                                                             // 18
			currentProblemId: Template.instance().currentProblemId                                                              // 18
		};                                                                                                                   // 18
	}                                                                                                                     // 19
});                                                                                                                    // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"student":{"detail.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/student/detail.html                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.detail.js"), {                                                                        // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.detail.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/student/template.detail.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("student_detail");                                                                                // 2
Template["student_detail"] = new Template("Template.student_detail", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "card",                                                                                                     // 6
    style: function() {                                                                                                // 7
      return [ "height:700px; ", Blaze.Unless(function() {                                                             // 8
        return Spacebars.call(Spacebars.dot(view.lookup("currentStudentId"), "get"));                                  // 9
      }, function() {                                                                                                  // 10
        return "display:none";                                                                                         // 11
      }) ];                                                                                                            // 12
    }                                                                                                                  // 13
  }, "\n  \t\t", HTML.DIV({                                                                                            // 14
    class: "card-body"                                                                                                 // 15
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 16
    class: "form-group row"                                                                                            // 17
  }, "\n\t\t\t\t", HTML.Raw('<div class="col-2">Username:</div>'), "\n\t\t\t\t", HTML.DIV({                            // 18
    class: "col-10"                                                                                                    // 19
  }, "\n\t\t\t\t\t", HTML.DIV({                                                                                        // 20
    "data-toggle": ".username-edit",                                                                                   // 21
    class: "username-view card-text"                                                                                   // 22
  }, Blaze.View("lookup:currentStudent.username", function() {                                                         // 23
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentStudent"), "username"));                               // 24
  })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                    // 25
    "data-toggle": ".username-view",                                                                                   // 26
    class: "username-edit form-control",                                                                               // 27
    type: "text",                                                                                                      // 28
    name: "username",                                                                                                  // 29
    value: function() {                                                                                                // 30
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentStudent"), "username"));                             // 31
    }                                                                                                                  // 32
  }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                               // 33
    class: "form-group row"                                                                                            // 34
  }, "\n\t\t\t\t", HTML.Raw('<div class="col-2">Fullname:</div>'), "\n\t\t\t\t", HTML.DIV({                            // 35
    class: "col-10"                                                                                                    // 36
  }, "\n\t\t\t\t\t", HTML.DIV({                                                                                        // 37
    "data-toggle": ".fullname-edit",                                                                                   // 38
    class: "fullname-view card-text"                                                                                   // 39
  }, Blaze.View("lookup:currentStudent.fullname", function() {                                                         // 40
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentStudent"), "fullname"));                               // 41
  })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                    // 42
    "data-toggle": ".fullname-view",                                                                                   // 43
    class: "fullname-edit form-control",                                                                               // 44
    type: "text",                                                                                                      // 45
    name: "fullname",                                                                                                  // 46
    value: function() {                                                                                                // 47
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentStudent"), "fullname"));                             // 48
    }                                                                                                                  // 49
  }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                               // 50
    class: "form-group row"                                                                                            // 51
  }, "\n\t\t\t\t", HTML.Raw('<div class="col-2">Email:</div>'), "\n\t\t\t\t", HTML.DIV({                               // 52
    class: "col-10"                                                                                                    // 53
  }, "\n\t\t\t\t\t", HTML.DIV({                                                                                        // 54
    "data-toggle": ".email-edit",                                                                                      // 55
    class: "email-view card-text"                                                                                      // 56
  }, Blaze.View("lookup:currentStudent.emails.0.address", function() {                                                 // 57
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentStudent"), "emails", "0", "address"));                 // 58
  })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                    // 59
    "data-toggle": ".email-view",                                                                                      // 60
    class: "email-edit form-control",                                                                                  // 61
    type: "email",                                                                                                     // 62
    name: "email",                                                                                                     // 63
    value: function() {                                                                                                // 64
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentStudent"), "emails", "0", "address"));               // 65
    }                                                                                                                  // 66
  }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                               // 67
    class: "form-group row"                                                                                            // 68
  }, "\n\t\t\t\t", HTML.Raw('<div class="col-2">Year:</div>'), "\n\t\t\t\t", HTML.DIV({                                // 69
    class: "col-10"                                                                                                    // 70
  }, "\n\t\t\t\t\t", HTML.DIV({                                                                                        // 71
    "data-toggle": ".year-edit",                                                                                       // 72
    class: "year-view card-text"                                                                                       // 73
  }, Blaze.View("lookup:currentStudent.year", function() {                                                             // 74
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentStudent"), "year"));                                   // 75
  })), "\n  \t\t\t\t\t", HTML.INPUT({                                                                                  // 76
    "data-toggle": ".year-view",                                                                                       // 77
    class: "year-edit form-control",                                                                                   // 78
    type: "number",                                                                                                    // 79
    name: "year",                                                                                                      // 80
    value: function() {                                                                                                // 81
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentStudent"), "year"));                                 // 82
    }                                                                                                                  // 83
  }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t", Blaze.If(function() {                                                      // 84
    return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                       // 85
  }, function() {                                                                                                      // 86
    return [ "\n\t\t\t", HTML.DIV({                                                                                    // 87
      class: "form-group row"                                                                                          // 88
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 89
      class: "col-2"                                                                                                   // 90
    }, "Password:"), "\n\t\t\t\t", HTML.DIV({                                                                          // 91
      class: "col-10"                                                                                                  // 92
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                                      // 93
      "data-toggle": ".password-edit",                                                                                 // 94
      class: "password-view card-text"                                                                                 // 95
    }, "Click to set password"), "\n\t\t\t\t\t", HTML.INPUT({                                                          // 96
      "data-toggle": ".password-view",                                                                                 // 97
      class: "password-edit form-control",                                                                             // 98
      type: "password",                                                                                                // 99
      name: "password",                                                                                                // 100
      style: "display:none"                                                                                            // 101
    }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                             // 102
      class: "form-group row"                                                                                          // 103
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 104
      class: "col-2"                                                                                                   // 105
    }, "Admin:"), "\n\t\t\t\t", HTML.DIV({                                                                             // 106
      class: "col-10"                                                                                                  // 107
    }, HTML.INPUT({                                                                                                    // 108
      type: "checkbox",                                                                                                // 109
      name: "isAdmin",                                                                                                 // 110
      checked: function() {                                                                                            // 111
        return Spacebars.mustache(Spacebars.dot(view.lookup("currentStudent"), "isAdmin"));                            // 112
      }                                                                                                                // 113
    })), "\n\t\t\t"), "\n\t\t" ];                                                                                      // 114
  }, function() {                                                                                                      // 115
    return Blaze.If(function() {                                                                                       // 116
      return Spacebars.dataMustache(Spacebars.dot(view.lookup("$"), "Meteor", "isOwner"), Spacebars.dot(view.lookup("currentStudentId"), "get"));
    }, function() {                                                                                                    // 118
      return [ "\n\t\t\t", HTML.FORM({                                                                                 // 119
        class: "chgpwd-form"                                                                                           // 120
      }, "\n\t\t\t\t", HTML.DIV({                                                                                      // 121
        class: "form-group row"                                                                                        // 122
      }, "\n\t\t\t\t\t", HTML.DIV({                                                                                    // 123
        class: "col-2"                                                                                                 // 124
      }, "Old password:"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 125
        class: "col-10"                                                                                                // 126
      }, HTML.INPUT({                                                                                                  // 127
        class: "form-control",                                                                                         // 128
        type: "password",                                                                                              // 129
        name: "oldPassword"                                                                                            // 130
      })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                     // 131
        class: "form-group row"                                                                                        // 132
      }, "\n\t\t\t\t\t", HTML.DIV({                                                                                    // 133
        class: "col-2"                                                                                                 // 134
      }, "New password:"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 135
        class: "col-10"                                                                                                // 136
      }, HTML.INPUT({                                                                                                  // 137
        class: "form-control",                                                                                         // 138
        type: "password",                                                                                              // 139
        name: "newPassword"                                                                                            // 140
      })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                     // 141
        class: "offset-2"                                                                                              // 142
      }, HTML.BUTTON({                                                                                                 // 143
        class: "btn btn-default"                                                                                       // 144
      }, "Change Password")), "\n\t\t\t"), "\n\t\t" ];                                                                 // 145
    });                                                                                                                // 146
  }), "\n\t\t"), "\n\t");                                                                                              // 147
}));                                                                                                                   // 148
                                                                                                                       // 149
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/student/list.html                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.list.js"), {                                                                          // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.list.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/student/template.list.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("student_list");                                                                                  // 2
Template["student_list"] = new Template("Template.student_list", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "card"                                                                                                      // 6
  }, "\n  \t\t", HTML.DIV({                                                                                            // 7
    class: "card-header"                                                                                               // 8
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 9
    return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                       // 10
  }, function() {                                                                                                      // 11
    return [ "\n\t\t\t", HTML.BUTTON({                                                                                 // 12
      class: "btn btn-sm btn-primary insert-btn fa fa-plus"                                                            // 13
    }), "\n\t\t" ];                                                                                                    // 14
  }), "\n\t\t\t", HTML.Raw('<strong class="ml-1">Student List</strong>'), "\n  \t\t"), "\n\t  \t", HTML.UL({           // 15
    class: "list-group",                                                                                               // 16
    style: "height:700px"                                                                                              // 17
  }, "\n\t  \t", Blaze.Each(function() {                                                                               // 18
    return {                                                                                                           // 19
      _sequence: Spacebars.call(view.lookup("studentList")),                                                           // 20
      _variable: "student"                                                                                             // 21
    };                                                                                                                 // 22
  }, function() {                                                                                                      // 23
    return [ "\n\t    \t", HTML.LI({                                                                                   // 24
      "data-id": function() {                                                                                          // 25
        return Spacebars.mustache(Spacebars.dot(view.lookup("student"), "_id"));                                       // 26
      },                                                                                                               // 27
      class: function() {                                                                                              // 28
        return [ "list-group-item get-btn ", Blaze.If(function() {                                                     // 29
          return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("currentStudentId"), "get"), Spacebars.dot(view.lookup("student"), "_id"));
        }, function() {                                                                                                // 31
          return "active";                                                                                             // 32
        }) ];                                                                                                          // 33
      }                                                                                                                // 34
    }, "\n\t    \t", Blaze.If(function() {                                                                             // 35
      return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                     // 36
    }, function() {                                                                                                    // 37
      return [ "\n\t    \t\t", HTML.BUTTON({                                                                           // 38
        "data-id": function() {                                                                                        // 39
          return Spacebars.mustache(Spacebars.dot(view.lookup("student"), "_id"));                                     // 40
        },                                                                                                             // 41
        class: "btn btn-sm btn-danger remove-btn fa fa-remove"                                                         // 42
      }), "\n\t    \t" ];                                                                                              // 43
    }), "\n\t    \t\t", HTML.SPAN({                                                                                    // 44
      class: "ml-1"                                                                                                    // 45
    }, Blaze.View("lookup:student.username", function() {                                                              // 46
      return Spacebars.mustache(Spacebars.dot(view.lookup("student"), "username"));                                    // 47
    })), "\n\t    \t", Blaze.If(function() {                                                                           // 48
      return Spacebars.call(Spacebars.dot(view.lookup("student"), "isAdmin"));                                         // 49
    }, function() {                                                                                                    // 50
      return [ "\n\t    \t\t", HTML.SPAN({                                                                             // 51
        class: "ml-1 fa fa-user-secret"                                                                                // 52
      }), "\n\t    \t" ];                                                                                              // 53
    }), "\n\t    \t"), "\n\t\t" ];                                                                                     // 54
  }), "\n  \t\t"), "\n  \t");                                                                                          // 55
}));                                                                                                                   // 56
                                                                                                                       // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/student/main.html                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.main.js"), {                                                                          // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/student/template.main.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("student_main");                                                                                  // 2
Template["student_main"] = new Template("Template.student_main", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "row"                                                                                                       // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "col-4"                                                                                                     // 8
  }, Blaze._TemplateWith(function() {                                                                                  // 9
    return Spacebars.call(view.lookup("shareArgs"));                                                                   // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(view.lookupTemplate("student_list"));                                                     // 12
  })), "\n\t\t", HTML.DIV({                                                                                            // 13
    class: "col-8"                                                                                                     // 14
  }, "\n\t\t\t", HTML.Raw('<ul class="nav nav-tabs">\n\t\t\t\t<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#student_detail_tpl">Details</a></li>\n\t\t\t\t<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#student_submission_main_tpl">Submissions</a></li>\n\t\t\t</ul>'), "\n\t\t\t", HTML.DIV({
    class: "tab-content"                                                                                               // 16
  }, "\n\t\t\t\t", HTML.DIV({                                                                                          // 17
    class: "tab-pane",                                                                                                 // 18
    id: "student_detail_tpl"                                                                                           // 19
  }, Blaze._TemplateWith(function() {                                                                                  // 20
    return Spacebars.call(view.lookup("shareArgs"));                                                                   // 21
  }, function() {                                                                                                      // 22
    return Spacebars.include(view.lookupTemplate("student_detail"));                                                   // 23
  })), "\n\t\t\t\t", HTML.DIV({                                                                                        // 24
    class: "tab-pane",                                                                                                 // 25
    id: "student_submission_main_tpl"                                                                                  // 26
  }, Blaze._TemplateWith(function() {                                                                                  // 27
    return Spacebars.call(view.lookup("shareArgs"));                                                                   // 28
  }, function() {                                                                                                      // 29
    return Spacebars.include(view.lookupTemplate("submission_main"));                                                  // 30
  })), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                // 31
}));                                                                                                                   // 32
                                                                                                                       // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"detail.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/student/detail.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Students = void 0;                                                                                                 // 1
module.watch(require("/imports/api/student.js"), {                                                                     // 1
	Students: function (v) {                                                                                              // 1
		Students = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
module.watch(require("./detail.html"));                                                                                // 1
Template.student_detail.onCreated(function () {                                                                        // 4
	var _this = this;                                                                                                     // 4
                                                                                                                       //
	this.autorun(function () {                                                                                            // 5
		return _this.subscribe('Students.findOne', _this.data.currentStudentId.get());                                       // 5
	});                                                                                                                   // 5
});                                                                                                                    // 6
Template.student_detail.onRendered(function () {                                                                       // 8
	this.$('[class*=edit]').hide();                                                                                       // 9
});                                                                                                                    // 10
Template.student_detail.helpers({                                                                                      // 12
	currentStudent: function () {                                                                                         // 13
		var student = Students.findOne({                                                                                     // 14
			_id: this.currentStudentId.get()                                                                                    // 14
		});                                                                                                                  // 14
                                                                                                                       //
		if (student == undefined) {                                                                                          // 16
			this.currentStudentId.set(null);                                                                                    // 17
		}                                                                                                                    // 18
                                                                                                                       //
		return student;                                                                                                      // 19
	}                                                                                                                     // 20
});                                                                                                                    // 12
Template.student_detail.events({                                                                                       // 23
	'blur [class*=edit]': function (event, instance) {                                                                    // 24
		var _Meteor$call;                                                                                                    // 24
                                                                                                                       //
		var target = event.currentTarget;                                                                                    // 25
		var toggle = target.dataset.toggle;                                                                                  // 26
		var field = target.name;                                                                                             // 27
		var value = target.value;                                                                                            // 28
		instance.$(target).hide();                                                                                           // 30
		instance.$(toggle).show();                                                                                           // 31
		Meteor.call('Students.update', this.currentStudentId.get(), (_Meteor$call = {}, _Meteor$call[field] = value, _Meteor$call));
	},                                                                                                                    // 34
	'click [class*=view]': function (event, instance) {                                                                   // 35
		if (!Meteor.isAdmin()) return;                                                                                       // 36
		var target = event.currentTarget;                                                                                    // 38
		var toggle = target.dataset.toggle;                                                                                  // 39
		instance.$(target).hide();                                                                                           // 41
		instance.$(toggle).show().focus();                                                                                   // 42
	},                                                                                                                    // 43
	'click [type=checkbox]': function (event) {                                                                           // 44
		var _Meteor$call2;                                                                                                   // 44
                                                                                                                       //
		var target = event.currentTarget;                                                                                    // 45
		var field = target.name;                                                                                             // 46
		var value = target.checked;                                                                                          // 47
		Meteor.call('Students.update', this.currentStudentId.get(), (_Meteor$call2 = {}, _Meteor$call2[field] = value, _Meteor$call2));
	},                                                                                                                    // 50
	'submit .chgpwd-form': function (event) {                                                                             // 51
		var target = event.currentTarget;                                                                                    // 52
		var oldPassword = target.oldPassword.value;                                                                          // 53
		var newPassword = target.newPassword.value;                                                                          // 54
		event.preventDefault();                                                                                              // 56
		Meteor.call('Students.changePassword', oldPassword, newPassword);                                                    // 57
	}                                                                                                                     // 58
});                                                                                                                    // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/student/list.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Students = void 0;                                                                                                 // 1
module.watch(require("/imports/api/student.js"), {                                                                     // 1
	Students: function (v) {                                                                                              // 1
		Students = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
module.watch(require("./list.html"));                                                                                  // 1
Template.student_list.onCreated(function () {                                                                          // 4
	this.subscribe('Students.findAll');                                                                                   // 5
});                                                                                                                    // 6
Template.student_list.helpers({                                                                                        // 8
	studentList: function () {                                                                                            // 9
		return Students.find({}, {                                                                                           // 10
			fields: {                                                                                                           // 10
				_id: 1,                                                                                                            // 10
				username: 1,                                                                                                       // 10
				isAdmin: 1                                                                                                         // 10
			},                                                                                                                  // 10
			sort: {                                                                                                             // 10
				username: 1                                                                                                        // 10
			}                                                                                                                   // 10
		});                                                                                                                  // 10
	}                                                                                                                     // 11
});                                                                                                                    // 8
Template.student_list.events({                                                                                         // 14
	'click .insert-btn': function () {                                                                                    // 15
		Meteor.call('Students.insert');                                                                                      // 16
	},                                                                                                                    // 17
	'click .remove-btn': function (event) {                                                                               // 18
		var id = event.currentTarget.dataset.id;                                                                             // 19
		Meteor.call('Students.remove', {                                                                                     // 20
			_id: id                                                                                                             // 20
		});                                                                                                                  // 20
	},                                                                                                                    // 21
	'click .get-btn': function (event) {                                                                                  // 22
		var id = event.currentTarget.dataset.id;                                                                             // 23
		this.currentStudentId.set(id);                                                                                       // 24
	}                                                                                                                     // 25
});                                                                                                                    // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/student/main.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./list.js"));                                                                                    // 1
module.watch(require("./detail.js"));                                                                                  // 1
module.watch(require("../submission/main.js"));                                                                        // 1
module.watch(require("./main.html"));                                                                                  // 1
Template.student_main.onCreated(function () {                                                                          // 6
	this.currentStudentId = new ReactiveVar();                                                                            // 7
});                                                                                                                    // 8
Template.student_main.onRendered(function () {                                                                         // 10
	this.$('.nav-link')[0].click();                                                                                       // 11
});                                                                                                                    // 12
Template.student_main.helpers({                                                                                        // 14
	shareArgs: function () {                                                                                              // 15
		return {                                                                                                             // 16
			currentStudentId: Template.instance().currentStudentId                                                              // 16
		};                                                                                                                   // 16
	}                                                                                                                     // 17
});                                                                                                                    // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"submission":{"detail.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/submission/detail.html                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.detail.js"), {                                                                        // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.detail.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/submission/template.detail.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("submission_detail");                                                                             // 2
Template["submission_detail"] = new Template("Template.submission_detail", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "modal detail-modal"                                                                                        // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "modal-dialog",                                                                                             // 8
    style: "min-width:85%"                                                                                             // 9
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 10
    class: "modal-content"                                                                                             // 11
  }, "      \t\t\t\n\t\t\t\t", HTML.DIV({                                                                              // 12
    class: "modal-body"                                                                                                // 13
  }, "\n\t", HTML.UL({                                                                                                 // 14
    class: "nav nav-tabs"                                                                                              // 15
  }, "\n\t\t", HTML.LI({                                                                                               // 16
    class: "nav-item"                                                                                                  // 17
  }, HTML.A({                                                                                                          // 18
    class: "nav-link",                                                                                                 // 19
    "data-toggle": "tab",                                                                                              // 20
    href: function() {                                                                                                 // 21
      return [ "#", Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "_id")), "_detail_tpl" ];       // 22
    }                                                                                                                  // 23
  }, "Details")), "\n\t\t", HTML.LI({                                                                                  // 24
    class: "nav-item"                                                                                                  // 25
  }, HTML.A({                                                                                                          // 26
    class: "nav-link",                                                                                                 // 27
    "data-toggle": "tab",                                                                                              // 28
    href: function() {                                                                                                 // 29
      return [ "#", Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "_id")), "_result_tpl" ];       // 30
    }                                                                                                                  // 31
  }, "Results")), "\n\t\t", HTML.LI({                                                                                  // 32
    class: "nav-item"                                                                                                  // 33
  }, HTML.A({                                                                                                          // 34
    class: "nav-link",                                                                                                 // 35
    "data-toggle": "tab",                                                                                              // 36
    href: function() {                                                                                                 // 37
      return [ "#", Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "_id")), "_code_tpl" ];         // 38
    }                                                                                                                  // 39
  }, "Code")), "\n\t"), "\n\t", HTML.DIV({                                                                             // 40
    class: "tab-content",                                                                                              // 41
    style: function() {                                                                                                // 42
      return Blaze.Unless(function() {                                                                                 // 43
        return Spacebars.call(Spacebars.dot(view.lookup("currentSubmissionId"), "get"));                               // 44
      }, function() {                                                                                                  // 45
        return "display:none";                                                                                         // 46
      });                                                                                                              // 47
    }                                                                                                                  // 48
  }, "\n\t\t", HTML.DIV({                                                                                              // 49
    class: "tab-pane card",                                                                                            // 50
    id: function() {                                                                                                   // 51
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "_id")), "_detail_tpl" ];            // 52
    }                                                                                                                  // 53
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 54
    class: "card-body"                                                                                                 // 55
  }, "\n\t\t\t\t", HTML.DIV({                                                                                          // 56
    class: "form-group row"                                                                                            // 57
  }, "\n\t\t\t\t\t", HTML.Raw('<div class="col-2">Student:</div>'), "\n\t\t\t\t\t", HTML.DIV({                         // 58
    class: "col-10"                                                                                                    // 59
  }, Blaze.View("lookup:getStudentUsername", function() {                                                              // 60
    return Spacebars.mustache(view.lookup("getStudentUsername"), Spacebars.dot(view.lookup("currentSubmission"), "studentId"));
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                         // 62
    class: "form-group row"                                                                                            // 63
  }, "\n\t\t\t\t\t", HTML.Raw('<div class="col-2">Problem:</div>'), "\n\t\t\t\t\t", HTML.DIV({                         // 64
    class: "col-10"                                                                                                    // 65
  }, Blaze.View("lookup:getProblemTitle", function() {                                                                 // 66
    return Spacebars.mustache(view.lookup("getProblemTitle"), Spacebars.dot(view.lookup("currentSubmission"), "problemId"));
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                         // 68
    class: "form-group row"                                                                                            // 69
  }, "\n\t\t\t\t\t", HTML.Raw('<div class="col-2">Created at:</div>'), "\n\t\t\t\t\t", HTML.DIV({                      // 70
    class: "col-10"                                                                                                    // 71
  }, Blaze.View("lookup:moFormat", function() {                                                                        // 72
    return Spacebars.mustache(view.lookup("moFormat"), Spacebars.dataMustache(view.lookup("momentReactive"), Spacebars.dot(view.lookup("currentSubmission"), "createdAt")), "YYYY/MM/DD HH:mm:ss");
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                         // 74
    class: "form-group row"                                                                                            // 75
  }, "\n\t\t\t\t\t", HTML.Raw('<div class="col-2">Status:</div>'), "\n\t\t\t\t\t", HTML.DIV({                          // 76
    class: "col-10"                                                                                                    // 77
  }, Blaze.View("lookup:currentSubmission.status", function() {                                                        // 78
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "status"));                              // 79
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                         // 80
    class: "form-group row"                                                                                            // 81
  }, "\n\t\t\t\t\t", HTML.Raw('<div class="col-2">Score:</div>'), "\n\t\t\t\t\t", HTML.DIV({                           // 82
    class: "col-10"                                                                                                    // 83
  }, Blaze.View("lookup:currentSubmission.score", function() {                                                         // 84
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "score"));                               // 85
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                         // 86
    class: "form-group row"                                                                                            // 87
  }, "\n\t\t\t\t\t", HTML.Raw('<div class="col-2">Language:</div>'), "\n\t\t\t\t\t", HTML.DIV({                        // 88
    class: "col-10"                                                                                                    // 89
  }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                             // 90
    return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                       // 91
  }, function() {                                                                                                      // 92
    return [ "\n\t\t\t\t\t\t", HTML.LABEL({                                                                            // 93
      class: "mr-3"                                                                                                    // 94
    }, HTML.INPUT({                                                                                                    // 95
      type: "radio",                                                                                                   // 96
      name: "lang",                                                                                                    // 97
      value: "c",                                                                                                      // 98
      checked: function() {                                                                                            // 99
        return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("currentSubmission"), "lang"), "c");   // 100
      }                                                                                                                // 101
    }), " C"), "\n\t\t\t\t\t\t", HTML.LABEL({                                                                          // 102
      class: "mr-3"                                                                                                    // 103
    }, HTML.INPUT({                                                                                                    // 104
      type: "radio",                                                                                                   // 105
      name: "lang",                                                                                                    // 106
      value: "cpp",                                                                                                    // 107
      checked: function() {                                                                                            // 108
        return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("currentSubmission"), "lang"), "cpp");
      }                                                                                                                // 110
    }), " C++"), "\n\t\t\t\t\t" ];                                                                                     // 111
  }, function() {                                                                                                      // 112
    return [ "\n\t\t\t\t\t\t", Blaze.View("lookup:currentSubmission.lang", function() {                                // 113
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "lang"));                              // 114
    }), "\n\t\t\t\t\t" ];                                                                                              // 115
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                // 116
    return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                       // 117
  }, function() {                                                                                                      // 118
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 119
      class: "form-group row"                                                                                          // 120
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                                      // 121
      class: "col-2"                                                                                                   // 122
    }, "Exam:"), "\n\t\t\t\t\t", HTML.DIV({                                                                            // 123
      class: "col-10"                                                                                                  // 124
    }, HTML.INPUT({                                                                                                    // 125
      type: "checkbox",                                                                                                // 126
      name: "isExam",                                                                                                  // 127
      checked: function() {                                                                                            // 128
        return Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "isExam"));                          // 129
      }                                                                                                                // 130
    })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                  // 131
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                     // 132
    class: "tab-pane card",                                                                                            // 133
    id: function() {                                                                                                   // 134
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "_id")), "_result_tpl" ];            // 135
    }                                                                                                                  // 136
  }, "\n\t\t\t", HTML.Raw('<div class="card-header">\n\t\t\t\t<strong>Result List</strong>\n\t\t\t</div>'), "\n\t\t\t", HTML.UL({
    class: "list-group"                                                                                                // 138
  }, "\n\t\t\t", Blaze.Each(function() {                                                                               // 139
    return {                                                                                                           // 140
      _sequence: Spacebars.call(view.lookup("submissionResultList")),                                                  // 141
      _variable: "submissionResult"                                                                                    // 142
    };                                                                                                                 // 143
  }, function() {                                                                                                      // 144
    return [ "\n\t\t    \t", HTML.LI({                                                                                 // 145
      class: "list-group-item"                                                                                         // 146
    }, "\n\t\t    \t\t", HTML.DIV({                                                                                    // 147
      class: "row justify-content-between"                                                                             // 148
    }, "\n\t\t\t    \t\t", HTML.DIV({                                                                                  // 149
      class: "col-auto"                                                                                                // 150
    }, "Test #", Blaze.View("lookup:@index", function() {                                                              // 151
      return Spacebars.mustache(view.lookup("@index"));                                                                // 152
    })), "\n\t\t\t    \t\t", HTML.DIV({                                                                                // 153
      class: function() {                                                                                              // 154
        return [ "col-auto ", Spacebars.mustache(view.lookup("getStatusClass"), Spacebars.dot(view.lookup("submissionResult"), "status")) ];
      }                                                                                                                // 156
    }, Blaze.View("lookup:submissionResult.status", function() {                                                       // 157
      return Spacebars.mustache(Spacebars.dot(view.lookup("submissionResult"), "status"));                             // 158
    })), "\n\t\t\t    \t\t", HTML.DIV({                                                                                // 159
      class: "col-auto"                                                                                                // 160
    }, Blaze.View("lookup:submissionResult.timeUsed", function() {                                                     // 161
      return Spacebars.mustache(Spacebars.dot(view.lookup("submissionResult"), "timeUsed"));                           // 162
    }), " ms"), "\n\t\t\t    \t\t", HTML.DIV({                                                                         // 163
      class: "col-auto"                                                                                                // 164
    }, Blaze.View("lookup:submissionResult.memoryUsed", function() {                                                   // 165
      return Spacebars.mustache(Spacebars.dot(view.lookup("submissionResult"), "memoryUsed"));                         // 166
    }), " kb"), "\n\t\t\t    \t"), "\n\t\t    \t"), "\n\t\t\t" ];                                                      // 167
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                     // 168
    class: "tab-pane card",                                                                                            // 169
    id: function() {                                                                                                   // 170
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "_id")), "_code_tpl" ];              // 171
    }                                                                                                                  // 172
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 173
    class: "card-header"                                                                                               // 174
  }, "\n\t\t\t\tcode.", Blaze.View("lookup:currentSubmission.lang", function() {                                       // 175
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "lang"));                                // 176
  }), " ", HTML.Raw('<button data-clipboard-target=".code-view" class="ml-3 btn btn-sm btn-info fa fa-copy"></button>'), "\n\t\t\t"), "\n\t\t\t", HTML.P({
    style: "height:600px",                                                                                             // 178
    "data-toggle": ".code-edit",                                                                                       // 179
    class: "code-view"                                                                                                 // 180
  }, Blaze.View("lookup:currentSubmission.code", function() {                                                          // 181
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "code"));                                // 182
  })), "\n\t\t\t", HTML.TEXTAREA({                                                                                     // 183
    style: "height:600px",                                                                                             // 184
    "data-toggle": ".code-view",                                                                                       // 185
    class: "code-edit form-control",                                                                                   // 186
    name: "code",                                                                                                      // 187
    value: function() {                                                                                                // 188
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentSubmission"), "code"));                              // 189
    }                                                                                                                  // 190
  }), "\n\t\t"), "\n\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t");                                              // 191
}));                                                                                                                   // 192
                                                                                                                       // 193
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/submission/list.html                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.list.js"), {                                                                          // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.list.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/submission/template.list.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("submission_list");                                                                               // 2
Template["submission_list"] = new Template("Template.submission_list", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "card",                                                                                                     // 6
    style: function() {                                                                                                // 7
      return Blaze.Unless(function() {                                                                                 // 8
        return Spacebars.dataMustache(view.lookup("$or"), Spacebars.dot(view.lookup("currentProblemId"), "get"), Spacebars.dot(view.lookup("currentStudentId"), "get"));
      }, function() {                                                                                                  // 10
        return "display:none";                                                                                         // 11
      });                                                                                                              // 12
    }                                                                                                                  // 13
  }, HTML.Raw('\n  \t\t<div class="card-header">\n\t\t\t<strong class="ml-1">Submission List</strong>\n  \t\t</div>\n\t  \t'), HTML.UL({
    class: "list-group",                                                                                               // 15
    style: "height:660px"                                                                                              // 16
  }, "\n\t  \t", Blaze.Each(function() {                                                                               // 17
    return {                                                                                                           // 18
      _sequence: Spacebars.call(view.lookup("submissionList")),                                                        // 19
      _variable: "submission"                                                                                          // 20
    };                                                                                                                 // 21
  }, function() {                                                                                                      // 22
    return [ "\n\t    \t", HTML.LI({                                                                                   // 23
      "data-id": function() {                                                                                          // 24
        return Spacebars.mustache(Spacebars.dot(view.lookup("submission"), "_id"));                                    // 25
      },                                                                                                               // 26
      class: function() {                                                                                              // 27
        return [ "list-group-item get-btn ", Blaze.If(function() {                                                     // 28
          return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("currentSubmissionId"), "get"), Spacebars.dot(view.lookup("submission"), "_id"));
        }, function() {                                                                                                // 30
          return "active";                                                                                             // 31
        }) ];                                                                                                          // 32
      }                                                                                                                // 33
    }, "\n\t    \t\t", HTML.DIV({                                                                                      // 34
      class: "row justify-content-between"                                                                             // 35
    }, "\n\t\t    \t\t", HTML.DIV({                                                                                    // 36
      class: "col-auto"                                                                                                // 37
    }, "\n\t\t    \t\t", Blaze.If(function() {                                                                         // 38
      return Spacebars.call(Spacebars.dot(view.lookup("$"), "Meteor", "isAdmin"));                                     // 39
    }, function() {                                                                                                    // 40
      return [ "\n\t\t\t    \t\t", HTML.BUTTON({                                                                       // 41
        "data-id": function() {                                                                                        // 42
          return Spacebars.mustache(Spacebars.dot(view.lookup("submission"), "_id"));                                  // 43
        },                                                                                                             // 44
        class: "btn btn-sm btn-danger remove-btn fa fa-remove"                                                         // 45
      }), "\n\t\t    \t\t" ];                                                                                          // 46
    }), "\n\t\t    \t\t\t", HTML.SPAN({                                                                                // 47
      class: "ml-1"                                                                                                    // 48
    }, Blaze.View("lookup:getStudentUsername", function() {                                                            // 49
      return Spacebars.mustache(view.lookup("getStudentUsername"), Spacebars.dot(view.lookup("submission"), "studentId"));
    })), "\n\t\t    \t\t"), "\n\t\t    \t\t", HTML.DIV({                                                               // 51
      class: "col-auto"                                                                                                // 52
    }, Blaze.View("lookup:getProblemTitle", function() {                                                               // 53
      return Spacebars.mustache(view.lookup("getProblemTitle"), Spacebars.dot(view.lookup("submission"), "problemId"));
    }), "\n\t\t\t\t\t", Blaze.If(function() {                                                                          // 55
      return Spacebars.call(Spacebars.dot(view.lookup("submission"), "isExam"));                                       // 56
    }, function() {                                                                                                    // 57
      return [ "\n\t\t\t\t\t\t", HTML.SPAN({                                                                           // 58
        class: "ml-1 fa fa-book"                                                                                       // 59
      }), "\n\t\t\t\t\t" ];                                                                                            // 60
    }), "\n\t\t\t\t\t"), "\n\t\t    \t\t", HTML.DIV({                                                                  // 61
      class: "col-auto"                                                                                                // 62
    }, Blaze.View("lookup:moFromNow", function() {                                                                     // 63
      return Spacebars.mustache(view.lookup("moFromNow"), Spacebars.dataMustache(view.lookup("momentReactive"), Spacebars.dot(view.lookup("submission"), "createdAt")));
    })), "\n\t\t    \t\t", HTML.DIV({                                                                                  // 65
      class: function() {                                                                                              // 66
        return [ "col-auto ", Spacebars.mustache(view.lookup("getStatusClass"), Spacebars.dot(view.lookup("submission"), "status")) ];
      }                                                                                                                // 68
    }, Blaze.View("lookup:submission.status", function() {                                                             // 69
      return Spacebars.mustache(Spacebars.dot(view.lookup("submission"), "status"));                                   // 70
    })), "\n\t\t    \t"), "\n\t    \t"), "\n\t\t" ];                                                                   // 71
  }), "\n  \t\t"), "\n  \t");                                                                                          // 72
}));                                                                                                                   // 73
                                                                                                                       // 74
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/submission/main.html                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.main.js"), {                                                                          // 1
  "*": module.makeNsSetter()                                                                                           // 2
});                                                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/submission/template.main.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("submission_main");                                                                               // 2
Template["submission_main"] = new Template("Template.submission_main", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return [ Blaze._TemplateWith(function() {                                                                            // 5
    return Spacebars.call(view.lookup("shareArgs"));                                                                   // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("submission_list"));                                                  // 8
  }), "\t\n\t", Blaze._TemplateWith(function() {                                                                       // 9
    return Spacebars.call(view.lookup("shareArgs"));                                                                   // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(view.lookupTemplate("submission_detail"));                                                // 12
  }) ];                                                                                                                // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"detail.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/submission/detail.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Submissions = void 0,                                                                                              // 1
    SubmissionResults = void 0;                                                                                        // 1
module.watch(require("/imports/api/submission.js"), {                                                                  // 1
	Submissions: function (v) {                                                                                           // 1
		Submissions = v;                                                                                                     // 1
	},                                                                                                                    // 1
	SubmissionResults: function (v) {                                                                                     // 1
		SubmissionResults = v;                                                                                               // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
module.watch(require("./detail.html"));                                                                                // 1
Template.submission_detail.onCreated(function () {                                                                     // 4
	var _this = this;                                                                                                     // 4
                                                                                                                       //
	this.autorun(function () {                                                                                            // 5
		_this.subscribe('Submissions.findOne', _this.data.currentSubmissionId.get());                                        // 6
                                                                                                                       //
		_this.subscribe('SubmissionResults.findAllBySubmission', _this.data.currentSubmissionId.get());                      // 7
	});                                                                                                                   // 8
});                                                                                                                    // 9
Template.submission_detail.onRendered(function () {                                                                    // 11
	this.$('.nav-link')[0].click();                                                                                       // 12
	this.$('[class*=edit]').hide();                                                                                       // 13
});                                                                                                                    // 14
Template.submission_detail.helpers({                                                                                   // 16
	currentSubmission: function () {                                                                                      // 17
		var submission = Submissions.findOne({                                                                               // 18
			_id: this.currentSubmissionId.get()                                                                                 // 18
		});                                                                                                                  // 18
                                                                                                                       //
		if (submission == undefined) {                                                                                       // 20
			this.currentSubmissionId.set(null);                                                                                 // 21
		} else {                                                                                                             // 22
			Template.instance().$('.detail-modal').modal();                                                                     // 23
		}                                                                                                                    // 24
                                                                                                                       //
		return submission;                                                                                                   // 25
	},                                                                                                                    // 26
	submissionResultList: function () {                                                                                   // 27
		return SubmissionResults.find({                                                                                      // 28
			submissionId: this.currentSubmissionId.get()                                                                        // 28
		}, {                                                                                                                 // 28
			sort: {                                                                                                             // 28
				problemTestId: 1                                                                                                   // 28
			}                                                                                                                   // 28
		});                                                                                                                  // 28
	}                                                                                                                     // 29
});                                                                                                                    // 16
Template.submission_detail.events({                                                                                    // 32
	'blur [class*=edit]': function (event, instance) {                                                                    // 33
		var _Meteor$call;                                                                                                    // 33
                                                                                                                       //
		var target = event.currentTarget;                                                                                    // 34
		var toggle = target.dataset.toggle;                                                                                  // 35
		var field = target.name;                                                                                             // 36
		var value = target.value;                                                                                            // 37
		instance.$(target).hide();                                                                                           // 39
		instance.$(toggle).show();                                                                                           // 40
		Meteor.call('Submissions.update', this.currentSubmissionId.get(), (_Meteor$call = {}, _Meteor$call[field] = value, _Meteor$call));
	},                                                                                                                    // 43
	'click [class*=view]': function (event, instance) {                                                                   // 44
		if (!Meteor.isAdmin()) return;                                                                                       // 45
		var target = event.currentTarget;                                                                                    // 47
		var toggle = target.dataset.toggle;                                                                                  // 48
		instance.$(target).hide();                                                                                           // 50
		instance.$(toggle).show().focus();                                                                                   // 51
	},                                                                                                                    // 52
	'click [type=checkbox]': function (event) {                                                                           // 53
		var _Meteor$call2;                                                                                                   // 53
                                                                                                                       //
		var target = event.currentTarget;                                                                                    // 54
		var field = target.name;                                                                                             // 55
		var value = target.checked;                                                                                          // 56
		Meteor.call('Submissions.update', this.currentSubmissionId.get(), (_Meteor$call2 = {}, _Meteor$call2[field] = value, _Meteor$call2));
	},                                                                                                                    // 59
	'click [type=radio]': function (event) {                                                                              // 60
		var _Meteor$call3;                                                                                                   // 60
                                                                                                                       //
		var target = event.currentTarget;                                                                                    // 61
		var field = target.name;                                                                                             // 62
		var value = target.value;                                                                                            // 63
		Meteor.call('Submissions.update', this.currentSubmissionId.get(), (_Meteor$call3 = {}, _Meteor$call3[field] = value, _Meteor$call3));
	},                                                                                                                    // 66
	'hidden.bs.modal .detail-modal': function () {                                                                        // 67
		this.currentSubmissionId.set(null);                                                                                  // 68
	}                                                                                                                     // 69
});                                                                                                                    // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/submission/list.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Submissions = void 0;                                                                                              // 1
module.watch(require("/imports/api/submission.js"), {                                                                  // 1
	Submissions: function (v) {                                                                                           // 1
		Submissions = v;                                                                                                     // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
module.watch(require("./list.html"));                                                                                  // 1
Template.submission_list.onCreated(function () {                                                                       // 4
	var _this = this;                                                                                                     // 4
                                                                                                                       //
	this.autorun(function () {                                                                                            // 5
		var problemId = _this.data.currentProblemId ? _this.data.currentProblemId.get() : null;                              // 6
		var studentId = _this.data.currentStudentId ? _this.data.currentStudentId.get() : null;                              // 7
                                                                                                                       //
		_this.subscribe('Submissions.findAllByFilter', problemId, studentId);                                                // 8
	});                                                                                                                   // 9
});                                                                                                                    // 10
Template.submission_list.helpers({                                                                                     // 12
	submissionList: function () {                                                                                         // 13
		var problemId = this.currentProblemId ? this.currentProblemId.get() : null;                                          // 14
		var studentId = this.currentStudentId ? this.currentStudentId.get() : null;                                          // 15
		var filter = {                                                                                                       // 16
			$or: [{                                                                                                             // 16
				problemId: problemId                                                                                               // 16
			}, {                                                                                                                // 16
				studentId: studentId                                                                                               // 16
			}]                                                                                                                  // 16
		};                                                                                                                   // 16
		return Submissions.find(filter, {                                                                                    // 17
			fields: {                                                                                                           // 17
				_id: 1,                                                                                                            // 17
				problemId: 1,                                                                                                      // 17
				studentId: 1,                                                                                                      // 17
				createdAt: 1,                                                                                                      // 17
				status: 1,                                                                                                         // 17
				isExam: 1                                                                                                          // 17
			},                                                                                                                  // 17
			sort: {                                                                                                             // 17
				createdAt: -1                                                                                                      // 17
			}                                                                                                                   // 17
		});                                                                                                                  // 17
	}                                                                                                                     // 18
});                                                                                                                    // 12
Template.submission_list.events({                                                                                      // 21
	'click .remove-btn': function (event) {                                                                               // 22
		var id = event.currentTarget.dataset.id;                                                                             // 23
		Meteor.call('Submissions.remove', {                                                                                  // 24
			_id: id                                                                                                             // 24
		});                                                                                                                  // 24
	},                                                                                                                    // 25
	'click .get-btn': function (event) {                                                                                  // 26
		var id = event.currentTarget.dataset.id;                                                                             // 27
		this.currentSubmissionId.set(id);                                                                                    // 28
	}                                                                                                                     // 29
});                                                                                                                    // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/submission/main.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Problems = void 0;                                                                                                 // 1
module.watch(require("/imports/api/problem.js"), {                                                                     // 1
	Problems: function (v) {                                                                                              // 1
		Problems = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var Students = void 0;                                                                                                 // 1
module.watch(require("/imports/api/student.js"), {                                                                     // 1
	Students: function (v) {                                                                                              // 1
		Students = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
module.watch(require("./list.js"));                                                                                    // 1
module.watch(require("./detail.js"));                                                                                  // 1
module.watch(require("./main.html"));                                                                                  // 1
Template.submission_main.onCreated(function () {                                                                       // 7
	this.currentSubmissionId = new ReactiveVar();                                                                         // 8
});                                                                                                                    // 9
Template.submission_main.helpers({                                                                                     // 11
	shareArgs: function () {                                                                                              // 12
		return {                                                                                                             // 13
			currentProblemId: this.currentProblemId,                                                                            // 14
			currentStudentId: this.currentStudentId,                                                                            // 15
			currentSubmissionId: Template.instance().currentSubmissionId,                                                       // 16
			getProblemTitle: function (problemId) {                                                                             // 17
				return Meteor.getValue(Problems, problemId, 'title');                                                              // 18
			},                                                                                                                  // 19
			getStudentUsername: function (studentId) {                                                                          // 20
				return Meteor.getValue(Students, studentId, 'username');                                                           // 21
			},                                                                                                                  // 22
			getStatusClass: function (status) {                                                                                 // 23
				switch (status) {                                                                                                  // 24
					case 'Accepted':                                                                                                  // 25
						return 'text-success';                                                                                           // 25
                                                                                                                       //
					case 'Compile Error':                                                                                             // 26
						return 'text-warning';                                                                                           // 26
                                                                                                                       //
					case 'Pending':                                                                                                   // 27
					case 'Initializing':                                                                                              // 28
					case 'Compiling':                                                                                                 // 29
					case 'Running':                                                                                                   // 30
					case 'Judging':                                                                                                   // 31
						return 'text-info';                                                                                              // 31
                                                                                                                       //
					default:                                                                                                          // 32
						return 'text-danger';                                                                                            // 32
				}                                                                                                                  // 24
			}                                                                                                                   // 34
		};                                                                                                                   // 13
	}                                                                                                                     // 36
});                                                                                                                    // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"api":{"problem.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/problem.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
	Problems: function () {                                                                                               // 1
		return Problems;                                                                                                     // 1
	},                                                                                                                    // 1
	ProblemTests: function () {                                                                                           // 1
		return ProblemTests;                                                                                                 // 1
	}                                                                                                                     // 1
});                                                                                                                    // 1
var SubmissionResults = void 0;                                                                                        // 1
module.watch(require("./submission.js"), {                                                                             // 1
	SubmissionResults: function (v) {                                                                                     // 1
		SubmissionResults = v;                                                                                               // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
module.watch(require("./utility.js"));                                                                                 // 1
var Problems = new Mongo.Collection('Problems');                                                                       // 4
var ProblemTests = new Mongo.Collection('ProblemTests');                                                               // 5
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 7
	Meteor.publish('Problems.findAll', function () {                                                                      // 8
		var filter = {};                                                                                                     // 9
		var option = {                                                                                                       // 10
			fields: {                                                                                                           // 10
				_id: 1,                                                                                                            // 10
				title: 1,                                                                                                          // 10
				isExam: 1,                                                                                                         // 10
				isPublic: 1                                                                                                        // 10
			}                                                                                                                   // 10
		};                                                                                                                   // 10
                                                                                                                       //
		if (!Meteor.isAdmin()) {                                                                                             // 12
			filter.isPublic = true;                                                                                             // 13
		}                                                                                                                    // 14
                                                                                                                       //
		return Problems.find(filter, option);                                                                                // 15
	});                                                                                                                   // 16
	Meteor.publish('Problems.findOne', function (id) {                                                                    // 17
		var filter = {                                                                                                       // 18
			_id: id                                                                                                             // 18
		};                                                                                                                   // 18
		var option = {};                                                                                                     // 19
                                                                                                                       //
		if (!Meteor.isAdmin()) {                                                                                             // 21
			filter.isPublic = true;                                                                                             // 22
		}                                                                                                                    // 23
                                                                                                                       //
		return Problems.find(filter, option);                                                                                // 24
	});                                                                                                                   // 25
	Meteor.publish('ProblemTests.findAllByProblem', function (problemId) {                                                // 26
		var filter = {                                                                                                       // 27
			problemId: problemId                                                                                                // 27
		};                                                                                                                   // 27
		var option = {                                                                                                       // 28
			fields: {                                                                                                           // 28
				_id: 1,                                                                                                            // 28
				problemId: 1,                                                                                                      // 28
				isPublic: 1                                                                                                        // 28
			}                                                                                                                   // 28
		};                                                                                                                   // 28
                                                                                                                       //
		if (!Meteor.isAdmin()) {                                                                                             // 30
			if (!Meteor.getValue(Problems, problemId, 'isPublic')) {                                                            // 31
				filter.problemId = null;                                                                                           // 32
			}                                                                                                                   // 33
                                                                                                                       //
			filter.isPublic = true;                                                                                             // 34
		}                                                                                                                    // 35
                                                                                                                       //
		return ProblemTests.find(filter, option);                                                                            // 36
	});                                                                                                                   // 37
	Meteor.publish('ProblemTests.findOne', function (id) {                                                                // 38
		var filter = {                                                                                                       // 39
			_id: id                                                                                                             // 39
		};                                                                                                                   // 39
		var option = {};                                                                                                     // 40
                                                                                                                       //
		if (!Meteor.isAdmin()) {                                                                                             // 42
			var problemId = Meteor.getValue(ProblemTests, id, 'problemId');                                                     // 43
                                                                                                                       //
			if (!Meteor.getValue(Problems, problemId, 'isPublic')) {                                                            // 45
				filter._id = null;                                                                                                 // 46
			}                                                                                                                   // 47
                                                                                                                       //
			filter.isPublic = true;                                                                                             // 48
		}                                                                                                                    // 49
                                                                                                                       //
		return ProblemTests.find(filter, option);                                                                            // 50
	});                                                                                                                   // 51
}                                                                                                                      // 52
                                                                                                                       //
Meteor.methods({                                                                                                       // 54
	'Problems.insert': function () {                                                                                      // 55
		if (!Meteor.isAdmin()) return;                                                                                       // 56
		Problems.insert({                                                                                                    // 58
			title: 'Sample Title',                                                                                              // 59
			description: 'Sample Description',                                                                                  // 60
			inputFormat: 'Sample Input Format',                                                                                 // 61
			outputFormat: 'Sample Output Format',                                                                               // 62
			hint: 'Sample Hint',                                                                                                // 63
			isExam: false,                                                                                                      // 64
			isPublic: false                                                                                                     // 65
		});                                                                                                                  // 58
	},                                                                                                                    // 67
	'Problems.remove': function (filter) {                                                                                // 68
		if (!Meteor.isAdmin()) return;                                                                                       // 69
		Problems.find(filter).forEach(function (problem) {                                                                   // 71
			Meteor.call('ProblemTests.remove', {                                                                                // 72
				problemId: problem._id                                                                                             // 72
			});                                                                                                                 // 72
			Meteor.call('Submissions.remove', {                                                                                 // 73
				problemId: problem._id                                                                                             // 73
			});                                                                                                                 // 73
		});                                                                                                                  // 74
		Problems.remove(filter);                                                                                             // 75
	},                                                                                                                    // 76
	'Problems.update': function (id, option) {                                                                            // 77
		if (!Meteor.isAdmin()) return;                                                                                       // 78
		Problems.update({                                                                                                    // 80
			_id: id                                                                                                             // 80
		}, {                                                                                                                 // 80
			$set: option                                                                                                        // 80
		});                                                                                                                  // 80
	},                                                                                                                    // 81
	'ProblemTests.insert': function (problemId) {                                                                         // 82
		if (!Meteor.isAdmin()) return;                                                                                       // 83
		var problemTestId = ProblemTests.insert({                                                                            // 85
			problemId: problemId,                                                                                               // 86
			input: 'Sample Input',                                                                                              // 87
			output: 'Sample Output',                                                                                            // 88
			timeLimit: 1000,                                                                                                    // 89
			memoryLimit: 64000,                                                                                                 // 90
			score: 5,                                                                                                           // 91
			isPublic: false                                                                                                     // 92
		});                                                                                                                  // 85
                                                                                                                       //
		if (Meteor.isServer) {                                                                                               // 94
			Meteor.call('ProblemTests.createDir', problemTestId);                                                               // 95
		}                                                                                                                    // 96
	},                                                                                                                    // 97
	'ProblemTests.remove': function (filter) {                                                                            // 98
		if (!Meteor.isAdmin()) return;                                                                                       // 99
		ProblemTests.find(filter).forEach(function (problemTest) {                                                           // 101
			Meteor.call('SubmissionResults.remove', {                                                                           // 102
				problemTestId: problemTest._id                                                                                     // 102
			});                                                                                                                 // 102
                                                                                                                       //
			if (Meteor.isServer) {                                                                                              // 104
				Meteor.call('ProblemTests.removeDir', problemTest._id);                                                            // 105
			}                                                                                                                   // 106
		});                                                                                                                  // 107
		ProblemTests.remove(filter);                                                                                         // 108
	},                                                                                                                    // 109
	'ProblemTests.update': function (id, option) {                                                                        // 110
		if (!Meteor.isAdmin()) return;                                                                                       // 111
		ProblemTests.update({                                                                                                // 113
			_id: id                                                                                                             // 113
		}, {                                                                                                                 // 113
			$set: option                                                                                                        // 113
		});                                                                                                                  // 113
                                                                                                                       //
		if (Meteor.isServer) {                                                                                               // 115
			if (option.input) Meteor.call('ProblemTests.writeFile', id, 'input', option.input);                                 // 116
			if (option.output) Meteor.call('ProblemTests.writeFile', id, 'output', option.output);                              // 117
                                                                                                                       //
			if (option.score) {                                                                                                 // 118
				SubmissionResults.find({                                                                                           // 119
					problemTestId: id                                                                                                 // 119
				}).forEach(function (submissionResult) {                                                                           // 119
					Meteor.call('Submissions.getResult', submissionResult.submissionId);                                              // 120
				});                                                                                                                // 121
			}                                                                                                                   // 122
		}                                                                                                                    // 123
	}                                                                                                                     // 124
});                                                                                                                    // 54
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"student.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/student.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
	Students: function () {                                                                                               // 1
		return Students;                                                                                                     // 1
	}                                                                                                                     // 1
});                                                                                                                    // 1
var Random = void 0;                                                                                                   // 1
module.watch(require("meteor/random"), {                                                                               // 1
	Random: function (v) {                                                                                                // 1
		Random = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
module.watch(require("./utility.js"));                                                                                 // 1
var Students = Meteor.users;                                                                                           // 4
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 6
	Meteor.publish('Students.findAll', function () {                                                                      // 7
		var filter = {};                                                                                                     // 8
		var option = {                                                                                                       // 9
			fields: {                                                                                                           // 9
				_id: 1,                                                                                                            // 9
				username: 1,                                                                                                       // 9
				isAdmin: 1                                                                                                         // 9
			}                                                                                                                   // 9
		};                                                                                                                   // 9
		return Students.find(filter, option);                                                                                // 11
	});                                                                                                                   // 12
	Meteor.publish('Students.findOne', function (id) {                                                                    // 13
		var filter = {                                                                                                       // 14
			_id: id                                                                                                             // 14
		};                                                                                                                   // 14
		var option = {                                                                                                       // 15
			fields: {                                                                                                           // 15
				_id: 1,                                                                                                            // 15
				username: 1,                                                                                                       // 15
				fullname: 1,                                                                                                       // 15
				emails: 1,                                                                                                         // 15
				year: 1,                                                                                                           // 15
				isAdmin: 1                                                                                                         // 15
			}                                                                                                                   // 15
		};                                                                                                                   // 15
		return Students.find(filter, option);                                                                                // 17
	});                                                                                                                   // 18
}                                                                                                                      // 19
                                                                                                                       //
Meteor.methods({                                                                                                       // 21
	'Students.insert': function () {                                                                                      // 22
		if (!Meteor.isAdmin()) return;                                                                                       // 23
		Accounts.createUser({                                                                                                // 25
			username: 'Sample Username',                                                                                        // 26
			fullname: 'Sample Fullname',                                                                                        // 27
			password: Random.id(),                                                                                              // 28
			email: 'dsca@inrg.csie.ntu.edu.tw',                                                                                 // 29
			year: new Date().getFullYear(),                                                                                     // 30
			isAdmin: false                                                                                                      // 31
		});                                                                                                                  // 25
	},                                                                                                                    // 33
	'Students.remove': function (filter) {                                                                                // 34
		if (!Meteor.isAdmin()) return;                                                                                       // 35
		Students.find(filter).forEach(function (student) {                                                                   // 37
			Meteor.call('Submissions.remove', {                                                                                 // 38
				studentId: student._id                                                                                             // 38
			});                                                                                                                 // 38
		});                                                                                                                  // 39
		Students.remove(filter);                                                                                             // 40
	},                                                                                                                    // 41
	'Students.update': function (id, option) {                                                                            // 42
		if (!Meteor.isAdmin() || !Meteor.isServer) return;                                                                   // 43
                                                                                                                       //
		if (option.username) {                                                                                               // 45
			Accounts.setUsername(id, option.username);                                                                          // 46
			delete option.username;                                                                                             // 47
		}                                                                                                                    // 48
                                                                                                                       //
		if (option.password) {                                                                                               // 49
			Accounts.setPassword(id, option.password);                                                                          // 50
			delete option.password;                                                                                             // 51
		}                                                                                                                    // 52
                                                                                                                       //
		if (option.email) {                                                                                                  // 53
			Students.update({                                                                                                   // 54
				_id: id                                                                                                            // 54
			}, {                                                                                                                // 54
				$set: {                                                                                                            // 54
					emails: []                                                                                                        // 54
				}                                                                                                                  // 54
			});                                                                                                                 // 54
			Accounts.addEmail(id, option.email);                                                                                // 55
			delete option.email;                                                                                                // 56
		}                                                                                                                    // 57
                                                                                                                       //
		if (!_.isEmpty(option)) {                                                                                            // 58
			Students.update({                                                                                                   // 59
				_id: id                                                                                                            // 59
			}, {                                                                                                                // 59
				$set: option                                                                                                       // 59
			});                                                                                                                 // 59
		}                                                                                                                    // 60
	},                                                                                                                    // 61
	'Students.changePassword': function (oldPassword, newPassword) {                                                      // 62
		if (!Meteor.isServer) return;                                                                                        // 63
		Meteor.call('changePassword', oldPassword, newPassword);                                                             // 65
	}                                                                                                                     // 66
});                                                                                                                    // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"submission.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/submission.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
	Submissions: function () {                                                                                            // 1
		return Submissions;                                                                                                  // 1
	},                                                                                                                    // 1
	SubmissionResults: function () {                                                                                      // 1
		return SubmissionResults;                                                                                            // 1
	}                                                                                                                     // 1
});                                                                                                                    // 1
var Problems = void 0,                                                                                                 // 1
    ProblemTests = void 0;                                                                                             // 1
module.watch(require("./problem.js"), {                                                                                // 1
	Problems: function (v) {                                                                                              // 1
		Problems = v;                                                                                                        // 1
	},                                                                                                                    // 1
	ProblemTests: function (v) {                                                                                          // 1
		ProblemTests = v;                                                                                                    // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
module.watch(require("./utility.js"));                                                                                 // 1
var Submissions = new Mongo.Collection('Submissions');                                                                 // 4
var SubmissionResults = new Mongo.Collection('SubmissionResults');                                                     // 5
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 7
	Meteor.publish('Submissions.findAllByFilter', function (problemId, studentId) {                                       // 8
		var filter = {                                                                                                       // 9
			$or: [{                                                                                                             // 9
				problemId: problemId                                                                                               // 9
			}, {                                                                                                                // 9
				studentId: studentId,                                                                                              // 9
				studentId: studentId                                                                                               // 9
			}]                                                                                                                  // 9
		};                                                                                                                   // 9
		var option = {                                                                                                       // 10
			fields: {                                                                                                           // 10
				_id: 1,                                                                                                            // 10
				problemId: 1,                                                                                                      // 10
				studentId: 1,                                                                                                      // 10
				createdAt: 1,                                                                                                      // 10
				status: 1,                                                                                                         // 10
				score: 1,                                                                                                          // 10
				isExam: 1                                                                                                          // 10
			}                                                                                                                   // 10
		};                                                                                                                   // 10
		return Submissions.find(filter, option);                                                                             // 12
	});                                                                                                                   // 13
	Meteor.publish('Submissions.findOne', function (id) {                                                                 // 14
		var filter = {                                                                                                       // 15
			_id: id                                                                                                             // 15
		};                                                                                                                   // 15
		var option = {};                                                                                                     // 16
                                                                                                                       //
		if (!Meteor.isAdmin() && !Meteor.isOwner(Meteor.getValue(Submissions, id, 'studentId'))) {                           // 18
			option.fields = {                                                                                                   // 19
				code: 0                                                                                                            // 19
			};                                                                                                                  // 19
		}                                                                                                                    // 20
                                                                                                                       //
		return Submissions.find(filter, option);                                                                             // 21
	});                                                                                                                   // 22
	Meteor.publish('SubmissionResults.findAllBySubmission', function (submissionId) {                                     // 23
		var filter = {                                                                                                       // 24
			submissionId: submissionId                                                                                          // 24
		};                                                                                                                   // 24
		var option = {};                                                                                                     // 25
		return SubmissionResults.find(filter, option);                                                                       // 27
	});                                                                                                                   // 28
}                                                                                                                      // 29
                                                                                                                       //
Meteor.methods({                                                                                                       // 31
	'Submissions.insert': function (problemId, studentId, lang, code) {                                                   // 32
		if (!Meteor.isAdmin() && (!Meteor.isOwner(studentId) || !Meteor.getValue(Problems, problemId, 'isPublic'))) return;  // 33
		var submissionId = Submissions.insert({                                                                              // 35
			problemId: problemId,                                                                                               // 36
			studentId: studentId,                                                                                               // 37
			createdAt: new Date().getTime(),                                                                                    // 38
			status: 'Pending',                                                                                                  // 39
			score: 0,                                                                                                           // 40
			lang: lang,                                                                                                         // 41
			code: code,                                                                                                         // 42
			isExam: Meteor.getValue(Problems, problemId, 'isExam')                                                              // 43
		});                                                                                                                  // 35
                                                                                                                       //
		if (Meteor.isServer) {                                                                                               // 45
			Meteor.call('Submissions.createDir', submissionId);                                                                 // 46
		}                                                                                                                    // 47
	},                                                                                                                    // 48
	'Submissions.remove': function (filter) {                                                                             // 49
		if (!Meteor.isAdmin()) return;                                                                                       // 50
                                                                                                                       //
		if (Meteor.isServer) {                                                                                               // 52
			Submissions.find(filter).forEach(function (submission) {                                                            // 53
				Meteor.call('SubmissionResults.remove', {                                                                          // 54
					submissionId: submission._id                                                                                      // 54
				});                                                                                                                // 54
				Meteor.call('Submissions.removeDir', submission._id);                                                              // 55
			});                                                                                                                 // 56
		}                                                                                                                    // 57
                                                                                                                       //
		Submissions.remove(filter);                                                                                          // 58
	},                                                                                                                    // 59
	'Submissions.update': function (id, option) {                                                                         // 60
		if (!Meteor.isAdmin()) return;                                                                                       // 61
		Submissions.update({                                                                                                 // 63
			_id: id                                                                                                             // 63
		}, {                                                                                                                 // 63
			$set: option                                                                                                        // 63
		});                                                                                                                  // 63
                                                                                                                       //
		if (Meteor.isServer) {                                                                                               // 65
			Meteor.call('SubmissionResults.remove', {                                                                           // 66
				submissionId: id                                                                                                   // 66
			});                                                                                                                 // 66
			Meteor.call('Submissions.createDir', id);                                                                           // 67
		}                                                                                                                    // 68
	}                                                                                                                     // 69
});                                                                                                                    // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"utility.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/utility.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.getValue = function (collection, id, field) {                                                                   // 1
	var _fields;                                                                                                          // 1
                                                                                                                       //
	var doc = collection.findOne({                                                                                        // 2
		_id: id                                                                                                              // 2
	}, {                                                                                                                  // 2
		fields: (_fields = {}, _fields[field] = 1, _fields)                                                                  // 2
	});                                                                                                                   // 2
	return doc ? doc[field] : null;                                                                                       // 3
};                                                                                                                     // 4
                                                                                                                       //
Meteor.isAdmin = function () {                                                                                         // 6
	var user = Meteor.user();                                                                                             // 7
	return user && user.isAdmin;                                                                                          // 8
};                                                                                                                     // 9
                                                                                                                       //
Meteor.isOwner = function (id) {                                                                                       // 11
	var user = Meteor.user();                                                                                             // 12
	return user && user._id == id;                                                                                        // 13
};                                                                                                                     // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return [ HTML.UL({                                                                                                   // 4
    class: "nav nav-pills bg-secondary",                                                                               // 5
    style: "min-width:1200px"                                                                                          // 6
  }, "\n\t\t", HTML.Raw('<li class="nav-item"><a class="nav-link text-white"><strong>DSCA Judge</strong></a></li>'), "\n  \t\t", HTML.Raw('<li class="nav-item"><a class="nav-link text-white" data-toggle="pill" href="#problem_main_tpl">Problems</a></li>'), "\n\t\t", HTML.Raw('<li class="nav-item"><a class="nav-link text-white" data-toggle="pill" href="#student_main_tpl">Students</a></li>'), "\n\t\t", HTML.LI({
    class: "nav-item ml-auto text-white"                                                                               // 8
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 9
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 10
  }, function() {                                                                                                      // 11
    return [ "\n\t\t\t", HTML.FORM({                                                                                   // 12
      class: "form-inline logout-form"                                                                                 // 13
    }, "\n\t\t\t\t", HTML.STRONG({                                                                                     // 14
      class: "mr-2"                                                                                                    // 15
    }, "Hi,", Blaze.View("lookup:currentUser.fullname", function() {                                                   // 16
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "fullname"));                                // 17
    })), "\n\t\t\t\t", HTML.BUTTON({                                                                                   // 18
      class: "btn btn-warning"                                                                                         // 19
    }, "Logout"), "\n\t\t\t"), "\n\t\t" ];                                                                             // 20
  }, function() {                                                                                                      // 21
    return [ "\n\t\t\t", HTML.FORM({                                                                                   // 22
      class: "form-inline login-form"                                                                                  // 23
    }, "\n\t\t\t\t", HTML.INPUT({                                                                                      // 24
      type: "text",                                                                                                    // 25
      class: "form-control",                                                                                           // 26
      name: "username",                                                                                                // 27
      placeholder: "Username",                                                                                         // 28
      style: "width:150px"                                                                                             // 29
    }), "\n\t\t\t\t", HTML.INPUT({                                                                                     // 30
      type: "password",                                                                                                // 31
      class: "form-control",                                                                                           // 32
      name: "password",                                                                                                // 33
      placeholder: "Password",                                                                                         // 34
      style: "width:150px"                                                                                             // 35
    }), "\n\t\t\t\t", HTML.BUTTON({                                                                                    // 36
      class: "btn btn-primary"                                                                                         // 37
    }, "Login"), "\n  \t\t\t"), "\n  \t\t" ];                                                                          // 38
  }), "\n  \t\t"), "\n\t"), "\n\t", HTML.DIV({                                                                         // 39
    class: "tab-content",                                                                                              // 40
    style: "min-width:1200px; overflow-x:hidden"                                                                       // 41
  }, "\n\t\t", HTML.DIV({                                                                                              // 42
    class: "tab-pane",                                                                                                 // 43
    id: "problem_main_tpl"                                                                                             // 44
  }, Spacebars.include(view.lookupTemplate("problem_main"))), "\n\t\t", HTML.DIV({                                     // 45
    class: "tab-pane",                                                                                                 // 46
    id: "student_main_tpl"                                                                                             // 47
  }, Spacebars.include(view.lookupTemplate("student_main"))), "\n\t") ];                                               // 48
}));                                                                                                                   // 49
Meteor.startup(Template.body.renderToDocument);                                                                        // 50
                                                                                                                       // 51
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _this2 = this;                                                                                                     //
                                                                                                                       //
module.watch(require("/imports/ui/problem/main.js"));                                                                  // 1
module.watch(require("/imports/ui/student/main.js"));                                                                  // 1
MeteorMathJax.sourceUrl = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
Template.registerHelper("momentReactive", function (date) {                                                            // 6
	return momentReactive(date);                                                                                          // 6
});                                                                                                                    // 6
Template.body.onCreated(function () {                                                                                  // 8
	var _this = this;                                                                                                     // 8
                                                                                                                       //
	this.autorun(function () {                                                                                            // 9
		return _this.subscribe('Students.findOne', Meteor.userId());                                                         // 9
	});                                                                                                                   // 9
});                                                                                                                    // 10
Template.body.onRendered(function () {                                                                                 // 12
	_this2.$('.nav-link')[1].click();                                                                                     // 13
});                                                                                                                    // 14
Template.body.events({                                                                                                 // 16
	'submit .login-form': function (event) {                                                                              // 17
		var target = event.currentTarget;                                                                                    // 18
		var username = target.username.value;                                                                                // 19
		var password = target.password.value;                                                                                // 20
		event.preventDefault();                                                                                              // 22
		Meteor.loginWithPassword(username, password);                                                                        // 23
	},                                                                                                                    // 24
	'submit .logout-form': function (event) {                                                                             // 25
		event.preventDefault();                                                                                              // 26
		Meteor.logout();                                                                                                     // 27
	}                                                                                                                     // 28
});                                                                                                                    // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("./client/template.main.js");
require("./client/main.js");