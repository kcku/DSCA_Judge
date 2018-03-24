var require = meteorInstall({"imports":{"api":{"_problem.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/_problem.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let ProblemTests;
module.watch(require("./problem.js"), {
	ProblemTests(v) {
		ProblemTests = v;
	}

}, 0);
let ps;
module.watch(require("child_process"), {
	default(v) {
		ps = v;
	}

}, 1);
let fs;
module.watch(require("fs"), {
	default(v) {
		fs = v;
	}

}, 2);
Meteor.methods({
	'ProblemTests.createDir'(id) {
		const problemTest = ProblemTests.findOne({
			_id: id
		});
		const dirpath = Meteor.dataPath + id;
		Meteor.wrapAsync(fs.mkdir)(dirpath);
		Meteor.call('ProblemTests.writeFile', id, 'input', problemTest.input);
		Meteor.call('ProblemTests.writeFile', id, 'output', problemTest.output);
	},

	'ProblemTests.writeFile'(id, field, content) {
		const filepath = Meteor.dataPath + id + '/' + field;
		Meteor.wrapAsync(fs.writeFile)(filepath, content);
	},

	'ProblemTests.removeDir'(id) {
		const dirpath = Meteor.dataPath + id;
		Meteor.wrapAsync(ps.exec)('rm -rf ' + dirpath);
	}

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_student.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/_student.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Accounts.onCreateUser((option, user) => {
	return _.extend(user, _.pick(option, 'fullname', 'year', 'isAdmin'));
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_submission.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/_submission.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Submissions, SubmissionResults;
module.watch(require("./submission.js"), {
	Submissions(v) {
		Submissions = v;
	},

	SubmissionResults(v) {
		SubmissionResults = v;
	}

}, 0);
let ProblemTests;
module.watch(require("./problem.js"), {
	ProblemTests(v) {
		ProblemTests = v;
	}

}, 1);
let ps;
module.watch(require("child_process"), {
	default(v) {
		ps = v;
	}

}, 2);
let fs;
module.watch(require("fs"), {
	default(v) {
		fs = v;
	}

}, 3);
Meteor.methods({
	'Submissions.createDir'(id) {
		Submissions.update({
			_id: id
		}, {
			$set: {
				status: 'Initializing',
				score: 0
			}
		});
		const submission = Submissions.findOne({
			_id: id
		});
		const dirpath = Meteor.dataPath + id;
		const filepath = Meteor.dataPath + id + '/code.' + submission.lang;
		const execpath = Meteor.dataPath + id + '/exec';
		Meteor.wrapAsync(ps.exec)('mkdir -p ' + dirpath);
		Meteor.wrapAsync(fs.writeFile)(filepath, submission.code);
		Submissions.update({
			_id: id
		}, {
			$set: {
				status: 'Compiling'
			}
		});

		try {
			if (submission.lang == 'c') {
				Meteor.wrapAsync(ps.exec)('gcc ' + filepath + ' -o' + execpath + ' -O2 -std=c99 -lm');
			} else if (submission.lang == 'cpp') {
				Meteor.wrapAsync(ps.exec)('g++ ' + filepath + ' -o' + execpath + ' -O2 -std=c++11');
			} else {
				Submissions.update({
					_id: id
				}, {
					$set: {
						status: 'Language Error'
					}
				});
				return;
			}
		} catch (e) {
			Submissions.update({
				_id: id
			}, {
				$set: {
					status: 'Compile Error'
				}
			});
			return;
		}

		Submissions.update({
			_id: id
		}, {
			$set: {
				status: 'Running'
			}
		});
		const filter = {
			problemId: submission.problemId
		};
		if (!submission.isExam) filter.isPublic = true;
		ProblemTests.find(filter).forEach(problemTest => {
			Meteor.call('SubmissionResults.insert', problemTest._id, id);
		});
		Meteor.call('Submissions.getResult', id);
	},

	'Submissions.removeDir'(id) {
		const dirpath = Meteor.dataPath + id;
		Meteor.wrapAsync(ps.exec)('rm -rf ' + dirpath);
	},

	'Submissions.getResult'(id) {
		const result = {
			status: null,
			score: 0
		};
		SubmissionResults.find({
			submissionId: id
		}).forEach(submissionResult => {
			if (submissionResult.status == "Accepted") result.score += Number(Meteor.getValue(ProblemTests, submissionResult.problemTestId, 'score'));
			if (submissionResult.status != 'Accepted' || result.status == null) result.status = submissionResult.status;
		});
		Submissions.update({
			_id: id
		}, {
			$set: result
		});
	},

	'SubmissionResults.createDir'(id) {
		SubmissionResults.update({
			_id: id
		}, {
			$set: {
				status: 'Initializing'
			}
		});
		const submissionResult = SubmissionResults.findOne({
			_id: id
		});
		const problemTest = ProblemTests.findOne({
			_id: submissionResult.problemTestId
		}, {
			fields: {
				timeLimit: 1,
				memoryLimit: 1
			}
		});
		const execpath = Meteor.dataPath + submissionResult.submissionId + '/exec';
		const inpath = Meteor.dataPath + submissionResult.problemTestId + '/input';
		const anspath = Meteor.dataPath + submissionResult.problemTestId + '/output';
		const dirpath = Meteor.dataPath + id;
		const outpath = Meteor.dataPath + id + '/output';
		const respath = Meteor.dataPath + id + '/result';
		const execcmd = Meteor.rootPath + 'sandbox/runner ' + problemTest.timeLimit + ' ' + problemTest.memoryLimit + ' ' + execpath + ' < ' + inpath + ' > ' + outpath + ' 2>' + respath;
		Meteor.wrapAsync(ps.exec)('mkdir -p ' + dirpath);
		SubmissionResults.update({
			_id: id
		}, {
			$set: {
				status: 'Running'
			}
		});
		Meteor.wrapAsync(ps.exec)(execcmd, {
			stdio: 'inherit'
		});
		SubmissionResults.update({
			_id: id
		}, {
			$set: {
				status: 'Judging'
			}
		});
		let result = null;

		try {
			result = JSON.parse(Meteor.wrapAsync(fs.readFile)(respath));
		} catch (e) {
			result = {
				status: 'Runtime Error',
				timeUsed: 0,
				memoryUsed: 0
			};
		}

		if (result.status == 'OK') {
			try {
				Meteor.wrapAsync(ps.exec)('diff -w ' + outpath + ' ' + anspath);
				result.status = 'Accepted';
			} catch (e) {
				result.status = 'Wrong Answer';
			}
		}

		SubmissionResults.update({
			_id: id
		}, {
			$set: result
		});
	},

	'SubmissionResults.removeDir'(id) {
		const dirpath = Meteor.dataPath + id;
		Meteor.wrapAsync(ps.exec)('rm -rf ' + dirpath);
	},

	'SubmissionResults.insert'(problemTestId, submissionId) {
		const submissionResultId = SubmissionResults.insert({
			problemTestId: problemTestId,
			submissionId: submissionId,
			timeUsed: null,
			memoryUsed: null,
			status: 'Pending'
		});
		Meteor.call('SubmissionResults.createDir', submissionResultId);
	},

	'SubmissionResults.remove'(filter) {
		SubmissionResults.find(filter).forEach(submissionResult => {
			Meteor.call('SubmissionResults.removeDir', submissionResult._id);
		});
		SubmissionResults.remove(filter);
	}

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"problem.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/problem.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
	Problems: () => Problems,
	ProblemTests: () => ProblemTests
});
let SubmissionResults;
module.watch(require("./submission.js"), {
	SubmissionResults(v) {
		SubmissionResults = v;
	}

}, 0);
module.watch(require("./utility.js"));
const Problems = new Mongo.Collection('Problems');
const ProblemTests = new Mongo.Collection('ProblemTests');

if (Meteor.isServer) {
	Meteor.publish('Problems.findAll', function () {
		const filter = {};
		const option = {
			fields: {
				_id: 1,
				title: 1,
				isExam: 1,
				isPublic: 1
			}
		};

		if (!Meteor.isAdmin()) {
			filter.isPublic = true;
		}

		return Problems.find(filter, option);
	});
	Meteor.publish('Problems.findOne', function (id) {
		const filter = {
			_id: id
		};
		const option = {};

		if (!Meteor.isAdmin()) {
			filter.isPublic = true;
		}

		return Problems.find(filter, option);
	});
	Meteor.publish('ProblemTests.findAllByProblem', function (problemId) {
		const filter = {
			problemId: problemId
		};
		const option = {
			fields: {
				_id: 1,
				problemId: 1,
				isPublic: 1
			}
		};

		if (!Meteor.isAdmin()) {
			if (!Meteor.getValue(Problems, problemId, 'isPublic')) {
				filter.problemId = null;
			}

			filter.isPublic = true;
		}

		return ProblemTests.find(filter, option);
	});
	Meteor.publish('ProblemTests.findOne', function (id) {
		const filter = {
			_id: id
		};
		const option = {};

		if (!Meteor.isAdmin()) {
			const problemId = Meteor.getValue(ProblemTests, id, 'problemId');

			if (!Meteor.getValue(Problems, problemId, 'isPublic')) {
				filter._id = null;
			}

			filter.isPublic = true;
		}

		return ProblemTests.find(filter, option);
	});
}

Meteor.methods({
	'Problems.insert'() {
		if (!Meteor.isAdmin()) return;
		Problems.insert({
			title: 'Sample Title',
			description: 'Sample Description',
			inputFormat: 'Sample Input Format',
			outputFormat: 'Sample Output Format',
			hint: 'Sample Hint',
			isExam: false,
			isPublic: false
		});
	},

	'Problems.remove'(filter) {
		if (!Meteor.isAdmin()) return;
		Problems.find(filter).forEach(problem => {
			Meteor.call('ProblemTests.remove', {
				problemId: problem._id
			});
			Meteor.call('Submissions.remove', {
				problemId: problem._id
			});
		});
		Problems.remove(filter);
	},

	'Problems.update'(id, option) {
		if (!Meteor.isAdmin()) return;
		Problems.update({
			_id: id
		}, {
			$set: option
		});
	},

	'ProblemTests.insert'(problemId) {
		if (!Meteor.isAdmin()) return;
		const problemTestId = ProblemTests.insert({
			problemId: problemId,
			input: 'Sample Input',
			output: 'Sample Output',
			timeLimit: 1000,
			memoryLimit: 64000,
			score: 5,
			isPublic: false
		});

		if (Meteor.isServer) {
			Meteor.call('ProblemTests.createDir', problemTestId);
		}
	},

	'ProblemTests.remove'(filter) {
		if (!Meteor.isAdmin()) return;
		ProblemTests.find(filter).forEach(problemTest => {
			Meteor.call('SubmissionResults.remove', {
				problemTestId: problemTest._id
			});

			if (Meteor.isServer) {
				Meteor.call('ProblemTests.removeDir', problemTest._id);
			}
		});
		ProblemTests.remove(filter);
	},

	'ProblemTests.update'(id, option) {
		if (!Meteor.isAdmin()) return;
		ProblemTests.update({
			_id: id
		}, {
			$set: option
		});

		if (Meteor.isServer) {
			if (option.input) Meteor.call('ProblemTests.writeFile', id, 'input', option.input);
			if (option.output) Meteor.call('ProblemTests.writeFile', id, 'output', option.output);

			if (option.score) {
				SubmissionResults.find({
					problemTestId: id
				}).forEach(submissionResult => {
					Meteor.call('Submissions.getResult', submissionResult.submissionId);
				});
			}
		}
	}

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"student.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/student.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
	Students: () => Students
});
let Random;
module.watch(require("meteor/random"), {
	Random(v) {
		Random = v;
	}

}, 0);
module.watch(require("./utility.js"));
const Students = Meteor.users;

if (Meteor.isServer) {
	Meteor.publish('Students.findAll', function () {
		const filter = {};
		const option = {
			fields: {
				_id: 1,
				username: 1,
				isAdmin: 1
			}
		};
		return Students.find(filter, option);
	});
	Meteor.publish('Students.findOne', function (id) {
		const filter = {
			_id: id
		};
		const option = {
			fields: {
				_id: 1,
				username: 1,
				fullname: 1,
				emails: 1,
				year: 1,
				isAdmin: 1
			}
		};
		return Students.find(filter, option);
	});
}

Meteor.methods({
	'Students.insert'() {
		if (!Meteor.isAdmin()) return;
		Accounts.createUser({
			username: 'Sample Username',
			fullname: 'Sample Fullname',
			password: Random.id(),
			email: 'dsca@inrg.csie.ntu.edu.tw',
			year: new Date().getFullYear(),
			isAdmin: false
		});
	},

	'Students.remove'(filter) {
		if (!Meteor.isAdmin()) return;
		Students.find(filter).forEach(student => {
			Meteor.call('Submissions.remove', {
				studentId: student._id
			});
		});
		Students.remove(filter);
	},

	'Students.update'(id, option) {
		if (!Meteor.isAdmin() || !Meteor.isServer) return;

		if (option.username) {
			Accounts.setUsername(id, option.username);
			delete option.username;
		}

		if (option.password) {
			Accounts.setPassword(id, option.password);
			delete option.password;
		}

		if (option.email) {
			Students.update({
				_id: id
			}, {
				$set: {
					emails: []
				}
			});
			Accounts.addEmail(id, option.email);
			delete option.email;
		}

		if (!_.isEmpty(option)) {
			Students.update({
				_id: id
			}, {
				$set: option
			});
		}
	},

	'Students.changePassword'(oldPassword, newPassword) {
		if (!Meteor.isServer) return;
		Meteor.call('changePassword', oldPassword, newPassword);
	}

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"submission.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/submission.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
	Submissions: () => Submissions,
	SubmissionResults: () => SubmissionResults
});
let Problems, ProblemTests;
module.watch(require("./problem.js"), {
	Problems(v) {
		Problems = v;
	},

	ProblemTests(v) {
		ProblemTests = v;
	}

}, 0);
module.watch(require("./utility.js"));
const Submissions = new Mongo.Collection('Submissions');
const SubmissionResults = new Mongo.Collection('SubmissionResults');

if (Meteor.isServer) {
	Meteor.publish('Submissions.findAllByFilter', function (problemId, studentId) {
		const filter = {
			$or: [{
				problemId: problemId
			}, {
				studentId,
				studentId
			}]
		};
		const option = {
			fields: {
				_id: 1,
				problemId: 1,
				studentId: 1,
				createdAt: 1,
				status: 1,
				score: 1,
				isExam: 1
			}
		};
		return Submissions.find(filter, option);
	});
	Meteor.publish('Submissions.findOne', function (id) {
		const filter = {
			_id: id
		};
		const option = {};

		if (!Meteor.isAdmin() && !Meteor.isOwner(Meteor.getValue(Submissions, id, 'studentId'))) {
			option.fields = {
				code: 0
			};
		}

		return Submissions.find(filter, option);
	});
	Meteor.publish('SubmissionResults.findAllBySubmission', function (submissionId) {
		const filter = {
			submissionId: submissionId
		};
		const option = {};
		return SubmissionResults.find(filter, option);
	});
}

Meteor.methods({
	'Submissions.insert'(problemId, studentId, lang, code) {
		if (!Meteor.isAdmin() && (!Meteor.isOwner(studentId) || !Meteor.getValue(Problems, problemId, 'isPublic'))) return;
		const submissionId = Submissions.insert({
			problemId: problemId,
			studentId: studentId,
			createdAt: new Date().getTime(),
			status: 'Pending',
			score: 0,
			lang: lang,
			code: code,
			isExam: Meteor.getValue(Problems, problemId, 'isExam')
		});

		if (Meteor.isServer) {
			Meteor.call('Submissions.createDir', submissionId);
		}
	},

	'Submissions.remove'(filter) {
		if (!Meteor.isAdmin()) return;

		if (Meteor.isServer) {
			Submissions.find(filter).forEach(submission => {
				Meteor.call('SubmissionResults.remove', {
					submissionId: submission._id
				});
				Meteor.call('Submissions.removeDir', submission._id);
			});
		}

		Submissions.remove(filter);
	},

	'Submissions.update'(id, option) {
		if (!Meteor.isAdmin()) return;
		Submissions.update({
			_id: id
		}, {
			$set: option
		});

		if (Meteor.isServer) {
			Meteor.call('SubmissionResults.remove', {
				submissionId: id
			});
			Meteor.call('Submissions.createDir', id);
		}
	}

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"utility.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/utility.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.getValue = function (collection, id, field) {
	const doc = collection.findOne({
		_id: id
	}, {
		fields: {
			[field]: 1
		}
	});
	return doc ? doc[field] : null;
};

Meteor.isAdmin = function () {
	const user = Meteor.user();
	return user && user.isAdmin;
};

Meteor.isOwner = function (id) {
	const user = Meteor.user();
	return user && user._id == id;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/main.js                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("/imports/api/_problem.js"));
module.watch(require("/imports/api/_student.js"));
module.watch(require("/imports/api/_submission.js"));
module.watch(require("/imports/api/problem.js"));
module.watch(require("/imports/api/student.js"));
module.watch(require("/imports/api/submission.js"));
let path;
module.watch(require("path"), {
	default(v) {
		path = v;
	}

}, 0);
Meteor.rootPath = path.resolve('.').split(path.sep + '.meteor')[0] + '/';
Meteor.dataPath = Meteor.rootPath + '../DSCA_Data/'; /*Accounts.createUser({
                                                     	username: 'R04922075',
                                                     	fullname: 'kcku',
                                                     	password: '123456',
                                                     	email: 'r04922075@csie.ntu.edu.tw',
                                                     	year: 2016,
                                                     	isAdmin: true
                                                     });#include <cstdio>
                                                     int main() {
                                                         char line[100];
                                                         scanf("%s", line);
                                                         printf("%s", line);
                                                     }
                                                     #include <cstdio>
                                                     int main() {
                                                         char line[100];
                                                         gets(line);
                                                         puts(line);
                                                     }*/ /*import fs from 'fs';
                                                         const file = Meteor.wrapAsync(fs.readFile)(Meteor.rootPath+'../studentlist', 'utf-8');
                                                         const json = file.split('\n');
                                                         for (let i = 0; i < json.length-1; i++) {
                                                         	const value = JSON.parse(json[i].trim());
                                                         	const student = {
                                                         		username: value.user,
                                                         		fullname: value.name,
                                                         		password: value.pass,
                                                         		isAdmin: value.admin,
                                                         		email: value.user+'@ntu.edu.tw',
                                                         		year: value.year
                                                         	};
                                                         	//console.log(student);
                                                         	Accounts.createUser(student);
                                                         }*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvX3Byb2JsZW0uanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL19zdHVkZW50LmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9fc3VibWlzc2lvbi5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvcHJvYmxlbS5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc3R1ZGVudC5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvc3VibWlzc2lvbi5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvdXRpbGl0eS5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsiUHJvYmxlbVRlc3RzIiwibW9kdWxlIiwid2F0Y2giLCJyZXF1aXJlIiwidiIsInBzIiwiZGVmYXVsdCIsImZzIiwiTWV0ZW9yIiwibWV0aG9kcyIsImlkIiwicHJvYmxlbVRlc3QiLCJmaW5kT25lIiwiX2lkIiwiZGlycGF0aCIsImRhdGFQYXRoIiwid3JhcEFzeW5jIiwibWtkaXIiLCJjYWxsIiwiaW5wdXQiLCJvdXRwdXQiLCJmaWVsZCIsImNvbnRlbnQiLCJmaWxlcGF0aCIsIndyaXRlRmlsZSIsImV4ZWMiLCJBY2NvdW50cyIsIm9uQ3JlYXRlVXNlciIsIm9wdGlvbiIsInVzZXIiLCJfIiwiZXh0ZW5kIiwicGljayIsIlN1Ym1pc3Npb25zIiwiU3VibWlzc2lvblJlc3VsdHMiLCJ1cGRhdGUiLCIkc2V0Iiwic3RhdHVzIiwic2NvcmUiLCJzdWJtaXNzaW9uIiwibGFuZyIsImV4ZWNwYXRoIiwiY29kZSIsImUiLCJmaWx0ZXIiLCJwcm9ibGVtSWQiLCJpc0V4YW0iLCJpc1B1YmxpYyIsImZpbmQiLCJmb3JFYWNoIiwicmVzdWx0Iiwic3VibWlzc2lvbklkIiwic3VibWlzc2lvblJlc3VsdCIsIk51bWJlciIsImdldFZhbHVlIiwicHJvYmxlbVRlc3RJZCIsImZpZWxkcyIsInRpbWVMaW1pdCIsIm1lbW9yeUxpbWl0IiwiaW5wYXRoIiwiYW5zcGF0aCIsIm91dHBhdGgiLCJyZXNwYXRoIiwiZXhlY2NtZCIsInJvb3RQYXRoIiwic3RkaW8iLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZSIsInRpbWVVc2VkIiwibWVtb3J5VXNlZCIsInN1Ym1pc3Npb25SZXN1bHRJZCIsImluc2VydCIsInJlbW92ZSIsImV4cG9ydCIsIlByb2JsZW1zIiwiTW9uZ28iLCJDb2xsZWN0aW9uIiwiaXNTZXJ2ZXIiLCJwdWJsaXNoIiwidGl0bGUiLCJpc0FkbWluIiwiZGVzY3JpcHRpb24iLCJpbnB1dEZvcm1hdCIsIm91dHB1dEZvcm1hdCIsImhpbnQiLCJwcm9ibGVtIiwiU3R1ZGVudHMiLCJSYW5kb20iLCJ1c2VycyIsInVzZXJuYW1lIiwiZnVsbG5hbWUiLCJlbWFpbHMiLCJ5ZWFyIiwiY3JlYXRlVXNlciIsInBhc3N3b3JkIiwiZW1haWwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzdHVkZW50Iiwic3R1ZGVudElkIiwic2V0VXNlcm5hbWUiLCJzZXRQYXNzd29yZCIsImFkZEVtYWlsIiwiaXNFbXB0eSIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCIkb3IiLCJjcmVhdGVkQXQiLCJpc093bmVyIiwiZ2V0VGltZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJwYXRoIiwicmVzb2x2ZSIsInNwbGl0Iiwic2VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLFlBQUo7QUFBaUJDLE9BQU9DLEtBQVAsQ0FBYUMsUUFBUSxjQUFSLENBQWIsRUFBcUM7QUFBQ0gsY0FBYUksQ0FBYixFQUFlO0FBQUNKLGlCQUFhSSxDQUFiO0FBQWU7O0FBQWhDLENBQXJDLEVBQXVFLENBQXZFO0FBQTBFLElBQUlDLEVBQUo7QUFBT0osT0FBT0MsS0FBUCxDQUFhQyxRQUFRLGVBQVIsQ0FBYixFQUFzQztBQUFDRyxTQUFRRixDQUFSLEVBQVU7QUFBQ0MsT0FBR0QsQ0FB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QUFRQSxLQUFLb0QsT0FBcEI7QUFDQSxDQUhEOztBQUtBekUsT0FBT3FHLE9BQVAsR0FBaUIsVUFBU25HLEVBQVQsRUFBYTtBQUM3QixPQUFNbUIsT0FBT3JCLE9BQU9xQixJQUFQLEVBQWI7QUFDQSxRQUFPQSxRQUFRQSxLQUFLaEIsR0FBTCxJQUFZSCxFQUEzQjtBQUNBLENBSEQsQzs7Ozs7Ozs7Ozs7QUNWQVQsT0FBT0MsS0FBUCxDQUFhQyxRQUFRLDBCQUFSLENBQWI7QUFBa0RGLE9BQU9DLEtBQVAsQ0FBYUMsUUFBUSwwQkFBUixDQUFiO0FBQWtERixPQUFPQyxLQUFQLENBQWFDLFFBQVEsNkJBQVIsQ0FBYjtBQUFxREYsT0FBT0MsS0FBUCxDQUFhQyxRQUFRLHlCQUFSLENBQWI7QUFBaURGLE9BQU9DLEtBQVAsQ0FBYUMsUUFBUSx5QkFBUixDQUFiO0FBQWlERixPQUFPQyxLQUFQLENBQWFDLFFBQVEsNEJBQVIsQ0FBYjtBQUFvRCxJQUFJOEcsSUFBSjtBQUFTaEgsT0FBT0MsS0FBUCxDQUFhQyxRQUFRLE1BQVIsQ0FBYixFQUE2QjtBQUFDRyxTQUFRRixDQUFSLEVBQVU7QUFBQzZHLFNBQUs3RyxDQUFMO0FBQU87O0FBQW5CLENBQTdCLEVBQWtELENBQWxEO0FBUXhUSSxPQUFPd0QsUUFBUCxHQUFrQmlELEtBQUtDLE9BQUwsQ0FBYSxHQUFiLEVBQWtCQyxLQUFsQixDQUF3QkYsS0FBS0csR0FBTCxHQUFXLFNBQW5DLEVBQThDLENBQTlDLElBQWlELEdBQW5FO0FBQ0E1RyxPQUFPTyxRQUFQLEdBQWtCUCxPQUFPd0QsUUFBUCxHQUFnQixlQUFsQyxDLENBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFtQkEiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2JsZW1UZXN0cyB9IGZyb20gJy4vcHJvYmxlbS5qcyc7XG5pbXBvcnQgcHMgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5NZXRlb3IubWV0aG9kcyh7XG5cdCdQcm9ibGVtVGVzdHMuY3JlYXRlRGlyJyhpZCkge1xuXHRcdGNvbnN0IHByb2JsZW1UZXN0ID0gUHJvYmxlbVRlc3RzLmZpbmRPbmUoeyBfaWQ6IGlkIH0pO1xuXHRcdGNvbnN0IGRpcnBhdGggPSBNZXRlb3IuZGF0YVBhdGgraWQ7XG5cblx0XHRNZXRlb3Iud3JhcEFzeW5jKGZzLm1rZGlyKShkaXJwYXRoKTtcblx0XHRNZXRlb3IuY2FsbCgnUHJvYmxlbVRlc3RzLndyaXRlRmlsZScsIGlkLCAnaW5wdXQnLCBwcm9ibGVtVGVzdC5pbnB1dCk7XG5cdFx0TWV0ZW9yLmNhbGwoJ1Byb2JsZW1UZXN0cy53cml0ZUZpbGUnLCBpZCwgJ291dHB1dCcsIHByb2JsZW1UZXN0Lm91dHB1dCk7XG5cdH0sXG5cdCdQcm9ibGVtVGVzdHMud3JpdGVGaWxlJyhpZCwgZmllbGQsIGNvbnRlbnQpIHtcblx0XHRjb25zdCBmaWxlcGF0aCA9IE1ldGVvci5kYXRhUGF0aCtpZCsnLycrZmllbGQ7XG5cdFx0TWV0ZW9yLndyYXBBc3luYyhmcy53cml0ZUZpbGUpKGZpbGVwYXRoLCBjb250ZW50KTtcblx0fSxcblx0J1Byb2JsZW1UZXN0cy5yZW1vdmVEaXInKGlkKSB7XHRcblx0XHRjb25zdCBkaXJwYXRoID0gTWV0ZW9yLmRhdGFQYXRoK2lkO1xuXHRcdE1ldGVvci53cmFwQXN5bmMocHMuZXhlYykoJ3JtIC1yZiAnK2RpcnBhdGgpO1xuXHR9XG59KTsiLCJBY2NvdW50cy5vbkNyZWF0ZVVzZXIoKG9wdGlvbiwgdXNlcikgPT4ge1xuXHRyZXR1cm4gXy5leHRlbmQodXNlciwgXy5waWNrKG9wdGlvbiwgJ2Z1bGxuYW1lJywgJ3llYXInLCAnaXNBZG1pbicpKTtcbn0pOyIsImltcG9ydCB7IFN1Ym1pc3Npb25zLCBTdWJtaXNzaW9uUmVzdWx0cyB9IGZyb20gJy4vc3VibWlzc2lvbi5qcyc7XG5pbXBvcnQgeyBQcm9ibGVtVGVzdHMgfSBmcm9tICcuL3Byb2JsZW0uanMnO1xuaW1wb3J0IHBzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuTWV0ZW9yLm1ldGhvZHMoe1xuXHQnU3VibWlzc2lvbnMuY3JlYXRlRGlyJyhpZCkge1xuXHRcdFN1Ym1pc3Npb25zLnVwZGF0ZSh7IF9pZDogaWQgfSwgeyAkc2V0OiB7IHN0YXR1czogJ0luaXRpYWxpemluZycsIHNjb3JlOiAwIH19KTtcblx0XHRcblx0XHRjb25zdCBzdWJtaXNzaW9uID0gU3VibWlzc2lvbnMuZmluZE9uZSh7IF9pZDogaWQgfSk7XG5cdFx0Y29uc3QgZGlycGF0aCAgPSBNZXRlb3IuZGF0YVBhdGgraWQ7XG5cdFx0Y29uc3QgZmlsZXBhdGggPSBNZXRlb3IuZGF0YVBhdGgraWQrJy9jb2RlLicrc3VibWlzc2lvbi5sYW5nO1xuXHRcdGNvbnN0IGV4ZWNwYXRoID0gTWV0ZW9yLmRhdGFQYXRoK2lkKycvZXhlYyc7XG5cdFx0XG5cdFx0TWV0ZW9yLndyYXBBc3luYyhwcy5leGVjKSgnbWtkaXIgLXAgJytkaXJwYXRoKTtcblx0XHRNZXRlb3Iud3JhcEFzeW5jKGZzLndyaXRlRmlsZSkoZmlsZXBhdGgsIHN1Ym1pc3Npb24uY29kZSk7XG5cdFx0XG5cdFx0U3VibWlzc2lvbnMudXBkYXRlKHsgX2lkOiBpZCB9LCB7ICRzZXQ6IHsgc3RhdHVzOiAnQ29tcGlsaW5nJyB9fSk7XG5cblx0XHR0cnl7XG5cdFx0XHRpZiAoc3VibWlzc2lvbi5sYW5nID09ICdjJykge1xuXHRcdFx0XHRNZXRlb3Iud3JhcEFzeW5jKHBzLmV4ZWMpKCdnY2MgJytmaWxlcGF0aCsnIC1vJytleGVjcGF0aCsnIC1PMiAtc3RkPWM5OSAtbG0nKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHN1Ym1pc3Npb24ubGFuZyA9PSAnY3BwJykge1xuXHRcdFx0XHRNZXRlb3Iud3JhcEFzeW5jKHBzLmV4ZWMpKCdnKysgJytmaWxlcGF0aCsnIC1vJytleGVjcGF0aCsnIC1PMiAtc3RkPWMrKzExJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRTdWJtaXNzaW9ucy51cGRhdGUoeyBfaWQ6IGlkIH0sIHsgJHNldDogeyBzdGF0dXM6ICdMYW5ndWFnZSBFcnJvcicgfX0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRTdWJtaXNzaW9ucy51cGRhdGUoeyBfaWQ6IGlkIH0sIHsgJHNldDogeyBzdGF0dXM6ICdDb21waWxlIEVycm9yJyB9fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFN1Ym1pc3Npb25zLnVwZGF0ZSh7IF9pZDogaWQgfSwgeyAkc2V0OiB7IHN0YXR1czogJ1J1bm5pbmcnIH19KTtcblxuXHRcdGNvbnN0IGZpbHRlciA9IHsgcHJvYmxlbUlkOiBzdWJtaXNzaW9uLnByb2JsZW1JZCB9O1xuXHRcdGlmICghc3VibWlzc2lvbi5pc0V4YW0pIGZpbHRlci5pc1B1YmxpYyA9IHRydWU7XG5cblx0XHRQcm9ibGVtVGVzdHMuZmluZChmaWx0ZXIpLmZvckVhY2goKHByb2JsZW1UZXN0KSA9PiB7XG5cdFx0XHRNZXRlb3IuY2FsbCgnU3VibWlzc2lvblJlc3VsdHMuaW5zZXJ0JywgcHJvYmxlbVRlc3QuX2lkLCBpZCk7XG5cdFx0fSlcblx0XHRNZXRlb3IuY2FsbCgnU3VibWlzc2lvbnMuZ2V0UmVzdWx0JywgaWQpO1xuXHR9LFxuXHQnU3VibWlzc2lvbnMucmVtb3ZlRGlyJyhpZCkge1xuXHRcdGNvbnN0IGRpcnBhdGggPSBNZXRlb3IuZGF0YVBhdGgraWQ7XG5cdFx0TWV0ZW9yLndyYXBBc3luYyhwcy5leGVjKSgncm0gLXJmICcrZGlycGF0aCk7XG5cdH0sXG5cdCdTdWJtaXNzaW9ucy5nZXRSZXN1bHQnKGlkKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0geyBzdGF0dXM6IG51bGwsIHNjb3JlOiAwXHR9O1xuXG5cdFx0U3VibWlzc2lvblJlc3VsdHMuZmluZCh7IHN1Ym1pc3Npb25JZDogaWQgfSkuZm9yRWFjaCgoc3VibWlzc2lvblJlc3VsdCkgPT4ge1xuXHRcdFx0aWYgKHN1Ym1pc3Npb25SZXN1bHQuc3RhdHVzID09IFwiQWNjZXB0ZWRcIilcblx0XHRcdFx0cmVzdWx0LnNjb3JlICs9IE51bWJlcihNZXRlb3IuZ2V0VmFsdWUoUHJvYmxlbVRlc3RzLCBzdWJtaXNzaW9uUmVzdWx0LnByb2JsZW1UZXN0SWQsICdzY29yZScpKTtcblx0XHRcdFxuXHRcdFx0aWYgKHN1Ym1pc3Npb25SZXN1bHQuc3RhdHVzICE9ICdBY2NlcHRlZCcgfHwgcmVzdWx0LnN0YXR1cyA9PSBudWxsKVxuXHRcdFx0XHRyZXN1bHQuc3RhdHVzID0gc3VibWlzc2lvblJlc3VsdC5zdGF0dXM7XG5cdFx0fSk7XG5cdFx0U3VibWlzc2lvbnMudXBkYXRlKHsgX2lkOiBpZCB9LCB7ICRzZXQ6IHJlc3VsdCB9KTtcblx0fSxcblx0J1N1Ym1pc3Npb25SZXN1bHRzLmNyZWF0ZURpcicoaWQpIHtcblx0XHRTdWJtaXNzaW9uUmVzdWx0cy51cGRhdGUoeyBfaWQ6IGlkIH0sIHsgJHNldDogeyBzdGF0dXM6ICdJbml0aWFsaXppbmcnIH19KTtcblxuXHRcdGNvbnN0IHN1Ym1pc3Npb25SZXN1bHQgPSBTdWJtaXNzaW9uUmVzdWx0cy5maW5kT25lKHsgX2lkOiBpZCB9KTtcblx0XHRjb25zdCBwcm9ibGVtVGVzdCA9IFByb2JsZW1UZXN0cy5maW5kT25lKHsgX2lkOiBzdWJtaXNzaW9uUmVzdWx0LnByb2JsZW1UZXN0SWQgfSwgeyBmaWVsZHM6IHsgdGltZUxpbWl0OiAxLCBtZW1vcnlMaW1pdDogMSB9fSk7XG5cdFx0Y29uc3QgZXhlY3BhdGggPSBNZXRlb3IuZGF0YVBhdGgrc3VibWlzc2lvblJlc3VsdC5zdWJtaXNzaW9uSWQrJy9leGVjJztcblx0XHRjb25zdCBpbnBhdGggID0gTWV0ZW9yLmRhdGFQYXRoK3N1Ym1pc3Npb25SZXN1bHQucHJvYmxlbVRlc3RJZCsnL2lucHV0Jztcblx0XHRjb25zdCBhbnNwYXRoID0gTWV0ZW9yLmRhdGFQYXRoK3N1Ym1pc3Npb25SZXN1bHQucHJvYmxlbVRlc3RJZCsnL291dHB1dCc7XG5cdFx0Y29uc3QgZGlycGF0aCA9IE1ldGVvci5kYXRhUGF0aCtpZDtcblx0XHRjb25zdCBvdXRwYXRoID0gTWV0ZW9yLmRhdGFQYXRoK2lkKycvb3V0cHV0Jztcblx0XHRjb25zdCByZXNwYXRoID0gTWV0ZW9yLmRhdGFQYXRoK2lkKycvcmVzdWx0Jztcblx0XHRjb25zdCBleGVjY21kID0gTWV0ZW9yLnJvb3RQYXRoKydzYW5kYm94L3J1bm5lciAnK3Byb2JsZW1UZXN0LnRpbWVMaW1pdCsnICcrcHJvYmxlbVRlc3QubWVtb3J5TGltaXQrJyAnK2V4ZWNwYXRoKycgPCAnK2lucGF0aCsnID4gJytvdXRwYXRoKycgMj4nK3Jlc3BhdGg7XG5cblx0XHRNZXRlb3Iud3JhcEFzeW5jKHBzLmV4ZWMpKCdta2RpciAtcCAnK2RpcnBhdGgpO1xuXG5cdFx0U3VibWlzc2lvblJlc3VsdHMudXBkYXRlKHsgX2lkOiBpZCB9LCB7ICRzZXQ6IHsgc3RhdHVzOiAnUnVubmluZycgfX0pO1xuXG5cdFx0TWV0ZW9yLndyYXBBc3luYyhwcy5leGVjKShleGVjY21kLCB7IHN0ZGlvOiAnaW5oZXJpdCcgfSk7XG5cblx0XHRTdWJtaXNzaW9uUmVzdWx0cy51cGRhdGUoeyBfaWQ6IGlkIH0sIHsgJHNldDogeyBzdGF0dXM6ICdKdWRnaW5nJyB9fSk7XG5cblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHR0cnkge1xuXHRcdFx0cmVzdWx0ID0gSlNPTi5wYXJzZShNZXRlb3Iud3JhcEFzeW5jKGZzLnJlYWRGaWxlKShyZXNwYXRoKSk7XG5cdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRyZXN1bHQgPSB7IHN0YXR1czogJ1J1bnRpbWUgRXJyb3InLCB0aW1lVXNlZDogMCwgbWVtb3J5VXNlZDogMCB9O1xuXHRcdH1cblx0XHRpZiAocmVzdWx0LnN0YXR1cyA9PSAnT0snKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRNZXRlb3Iud3JhcEFzeW5jKHBzLmV4ZWMpKCdkaWZmIC13ICcrb3V0cGF0aCsnICcrYW5zcGF0aCk7XG5cdFx0XHRcdHJlc3VsdC5zdGF0dXMgPSAnQWNjZXB0ZWQnO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdHJlc3VsdC5zdGF0dXMgPSAnV3JvbmcgQW5zd2VyJztcblx0XHRcdH1cblx0XHR9XG5cdFx0U3VibWlzc2lvblJlc3VsdHMudXBkYXRlKHsgX2lkOiBpZCB9LCB7ICRzZXQ6IHJlc3VsdCB9KTtcblx0fSxcblx0J1N1Ym1pc3Npb25SZXN1bHRzLnJlbW92ZURpcicoaWQpIHtcblx0XHRjb25zdCBkaXJwYXRoID0gTWV0ZW9yLmRhdGFQYXRoK2lkO1xuXHRcdE1ldGVvci53cmFwQXN5bmMocHMuZXhlYykoJ3JtIC1yZiAnK2RpcnBhdGgpO1xuXHR9LFxuXHQnU3VibWlzc2lvblJlc3VsdHMuaW5zZXJ0Jyhwcm9ibGVtVGVzdElkLCBzdWJtaXNzaW9uSWQpIHtcblx0XHRjb25zdCBzdWJtaXNzaW9uUmVzdWx0SWQgPSBTdWJtaXNzaW9uUmVzdWx0cy5pbnNlcnQoe1xuXHRcdFx0cHJvYmxlbVRlc3RJZDogcHJvYmxlbVRlc3RJZCxcblx0XHRcdHN1Ym1pc3Npb25JZDogc3VibWlzc2lvbklkLFxuXHRcdFx0dGltZVVzZWQ6IG51bGwsXG5cdFx0XHRtZW1vcnlVc2VkOiBudWxsLFxuXHRcdFx0c3RhdHVzOiAnUGVuZGluZydcblx0XHR9KTtcblx0XHRNZXRlb3IuY2FsbCgnU3VibWlzc2lvblJlc3VsdHMuY3JlYXRlRGlyJywgc3VibWlzc2lvblJlc3VsdElkKTtcblx0fSxcblx0J1N1Ym1pc3Npb25SZXN1bHRzLnJlbW92ZScoZmlsdGVyKSB7XG5cdFx0U3VibWlzc2lvblJlc3VsdHMuZmluZChmaWx0ZXIpLmZvckVhY2goKHN1Ym1pc3Npb25SZXN1bHQpID0+IHtcblx0XHRcdE1ldGVvci5jYWxsKCdTdWJtaXNzaW9uUmVzdWx0cy5yZW1vdmVEaXInLCBzdWJtaXNzaW9uUmVzdWx0Ll9pZCk7XG5cdFx0fSk7XG5cdFx0U3VibWlzc2lvblJlc3VsdHMucmVtb3ZlKGZpbHRlcik7XG5cdH1cbn0pOyIsImltcG9ydCB7IFN1Ym1pc3Npb25SZXN1bHRzIH0gZnJvbSAnLi9zdWJtaXNzaW9uLmpzJztcclxuaW1wb3J0ICcuL3V0aWxpdHkuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2JsZW1zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ1Byb2JsZW1zJyk7XHJcbmV4cG9ydCBjb25zdCBQcm9ibGVtVGVzdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignUHJvYmxlbVRlc3RzJyk7XHJcblxyXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcblx0TWV0ZW9yLnB1Ymxpc2goJ1Byb2JsZW1zLmZpbmRBbGwnLCBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IGZpbHRlciA9IHt9O1xyXG5cdFx0Y29uc3Qgb3B0aW9uID0geyBmaWVsZHM6IHsgX2lkOiAxLCB0aXRsZTogMSwgaXNFeGFtOiAxLCBpc1B1YmxpYzogMSB9fTtcclxuXHJcblx0XHRpZiAoIU1ldGVvci5pc0FkbWluKCkpIHtcclxuXHRcdFx0ZmlsdGVyLmlzUHVibGljID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBQcm9ibGVtcy5maW5kKGZpbHRlciwgb3B0aW9uKTtcclxuXHR9KTtcclxuXHRNZXRlb3IucHVibGlzaCgnUHJvYmxlbXMuZmluZE9uZScsIGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRjb25zdCBmaWx0ZXIgPSB7IF9pZDogaWQgfTtcclxuXHRcdGNvbnN0IG9wdGlvbiA9IHt9O1xyXG5cclxuXHRcdGlmICghTWV0ZW9yLmlzQWRtaW4oKSkge1xyXG5cdFx0XHRmaWx0ZXIuaXNQdWJsaWMgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFByb2JsZW1zLmZpbmQoZmlsdGVyLCBvcHRpb24pO1xyXG5cdH0pO1xyXG5cdE1ldGVvci5wdWJsaXNoKCdQcm9ibGVtVGVzdHMuZmluZEFsbEJ5UHJvYmxlbScsIGZ1bmN0aW9uKHByb2JsZW1JZCkge1xyXG5cdFx0Y29uc3QgZmlsdGVyID0geyBwcm9ibGVtSWQ6IHByb2JsZW1JZCB9O1xyXG5cdFx0Y29uc3Qgb3B0aW9uID0geyBmaWVsZHM6IHsgX2lkOiAxLCBwcm9ibGVtSWQ6IDEsIGlzUHVibGljOiAxIH19O1xyXG5cclxuXHRcdGlmICghTWV0ZW9yLmlzQWRtaW4oKSkge1xyXG5cdFx0XHRpZiAoIU1ldGVvci5nZXRWYWx1ZShQcm9ibGVtcywgcHJvYmxlbUlkLCAnaXNQdWJsaWMnKSkge1xyXG5cdFx0XHRcdGZpbHRlci5wcm9ibGVtSWQgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZpbHRlci5pc1B1YmxpYyA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gUHJvYmxlbVRlc3RzLmZpbmQoZmlsdGVyLCBvcHRpb24pO1xyXG5cdH0pO1xyXG5cdE1ldGVvci5wdWJsaXNoKCdQcm9ibGVtVGVzdHMuZmluZE9uZScsIGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRjb25zdCBmaWx0ZXIgPSB7IF9pZDogaWQgfTtcclxuXHRcdGNvbnN0IG9wdGlvbiA9IHt9O1xyXG5cclxuXHRcdGlmICghTWV0ZW9yLmlzQWRtaW4oKSkge1xyXG5cdFx0XHRjb25zdCBwcm9ibGVtSWQgPSBNZXRlb3IuZ2V0VmFsdWUoUHJvYmxlbVRlc3RzLCBpZCwgJ3Byb2JsZW1JZCcpO1xyXG5cclxuXHRcdFx0aWYgKCFNZXRlb3IuZ2V0VmFsdWUoUHJvYmxlbXMsIHByb2JsZW1JZCwgJ2lzUHVibGljJykpIHtcclxuXHRcdFx0XHRmaWx0ZXIuX2lkID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRmaWx0ZXIuaXNQdWJsaWMgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFByb2JsZW1UZXN0cy5maW5kKGZpbHRlciwgb3B0aW9uKTtcclxuXHR9KTtcclxufVxyXG5cclxuTWV0ZW9yLm1ldGhvZHMoe1xyXG5cdCdQcm9ibGVtcy5pbnNlcnQnKCkge1xyXG5cdFx0aWYgKCFNZXRlb3IuaXNBZG1pbigpKSByZXR1cm47XHJcblxyXG5cdFx0UHJvYmxlbXMuaW5zZXJ0KHtcclxuXHRcdFx0dGl0bGU6ICdTYW1wbGUgVGl0bGUnLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogJ1NhbXBsZSBEZXNjcmlwdGlvbicsXHJcblx0XHRcdGlucHV0Rm9ybWF0OiAnU2FtcGxlIElucHV0IEZvcm1hdCcsXHJcblx0XHRcdG91dHB1dEZvcm1hdDogJ1NhbXBsZSBPdXRwdXQgRm9ybWF0JyxcclxuXHRcdFx0aGludDogJ1NhbXBsZSBIaW50JyxcclxuXHRcdFx0aXNFeGFtOiBmYWxzZSxcclxuXHRcdFx0aXNQdWJsaWM6IGZhbHNlXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdCdQcm9ibGVtcy5yZW1vdmUnKGZpbHRlcikge1xyXG5cdFx0aWYgKCFNZXRlb3IuaXNBZG1pbigpKSByZXR1cm47XHJcblxyXG5cdFx0UHJvYmxlbXMuZmluZChmaWx0ZXIpLmZvckVhY2goKHByb2JsZW0pID0+IHtcclxuXHRcdFx0TWV0ZW9yLmNhbGwoJ1Byb2JsZW1UZXN0cy5yZW1vdmUnLCB7IHByb2JsZW1JZDogcHJvYmxlbS5faWQgfSk7XHJcblx0XHRcdE1ldGVvci5jYWxsKCdTdWJtaXNzaW9ucy5yZW1vdmUnLCB7IHByb2JsZW1JZDogcHJvYmxlbS5faWQgfSk7XHRcclxuXHRcdH0pO1xyXG5cdFx0UHJvYmxlbXMucmVtb3ZlKGZpbHRlcik7XHJcblx0fSxcclxuXHQnUHJvYmxlbXMudXBkYXRlJyhpZCwgb3B0aW9uKSB7XHJcblx0XHRpZiAoIU1ldGVvci5pc0FkbWluKCkpIHJldHVybjtcclxuXHJcblx0XHRQcm9ibGVtcy51cGRhdGUoeyBfaWQ6IGlkIH0sIHsgJHNldDogb3B0aW9uIH0pO1xyXG5cdH0sXHJcblx0J1Byb2JsZW1UZXN0cy5pbnNlcnQnKHByb2JsZW1JZCkge1xyXG5cdFx0aWYgKCFNZXRlb3IuaXNBZG1pbigpKSByZXR1cm47XHJcblxyXG5cdFx0Y29uc3QgcHJvYmxlbVRlc3RJZCA9IFByb2JsZW1UZXN0cy5pbnNlcnQoe1xyXG5cdFx0XHRwcm9ibGVtSWQ6IHByb2JsZW1JZCxcclxuXHRcdFx0aW5wdXQ6ICdTYW1wbGUgSW5wdXQnLFxyXG5cdFx0XHRvdXRwdXQ6ICdTYW1wbGUgT3V0cHV0JyxcclxuXHRcdFx0dGltZUxpbWl0OiAxMDAwLFxyXG5cdFx0XHRtZW1vcnlMaW1pdDogNjQwMDAsXHJcblx0XHRcdHNjb3JlOiA1LFxyXG5cdFx0XHRpc1B1YmxpYzogZmFsc2VcclxuXHRcdH0pO1xyXG5cdFx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG5cdFx0XHRNZXRlb3IuY2FsbCgnUHJvYmxlbVRlc3RzLmNyZWF0ZURpcicsIHByb2JsZW1UZXN0SWQpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0J1Byb2JsZW1UZXN0cy5yZW1vdmUnKGZpbHRlcikge1xyXG5cdFx0aWYgKCFNZXRlb3IuaXNBZG1pbigpKSByZXR1cm47XHJcblxyXG5cdFx0UHJvYmxlbVRlc3RzLmZpbmQoZmlsdGVyKS5mb3JFYWNoKChwcm9ibGVtVGVzdCkgPT4ge1xyXG5cdFx0XHRNZXRlb3IuY2FsbCgnU3VibWlzc2lvblJlc3VsdHMucmVtb3ZlJywgeyBwcm9ibGVtVGVzdElkOiBwcm9ibGVtVGVzdC5faWQgfSk7XHJcblxyXG5cdFx0XHRpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcblx0XHRcdFx0TWV0ZW9yLmNhbGwoJ1Byb2JsZW1UZXN0cy5yZW1vdmVEaXInLCBwcm9ibGVtVGVzdC5faWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFByb2JsZW1UZXN0cy5yZW1vdmUoZmlsdGVyKTtcclxuXHR9LFxyXG5cdCdQcm9ibGVtVGVzdHMudXBkYXRlJyhpZCwgb3B0aW9uKSB7XHJcblx0XHRpZiAoIU1ldGVvci5pc0FkbWluKCkpIHJldHVybjtcclxuXHJcblx0XHRQcm9ibGVtVGVzdHMudXBkYXRlKHsgX2lkOiBpZCB9LCB7ICRzZXQ6IG9wdGlvbiB9KTtcclxuXHJcblx0XHRpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XHJcblx0XHRcdGlmIChvcHRpb24uaW5wdXQpIE1ldGVvci5jYWxsKCdQcm9ibGVtVGVzdHMud3JpdGVGaWxlJywgaWQsICdpbnB1dCcsIG9wdGlvbi5pbnB1dCk7XHJcblx0XHRcdGlmIChvcHRpb24ub3V0cHV0KSBNZXRlb3IuY2FsbCgnUHJvYmxlbVRlc3RzLndyaXRlRmlsZScsIGlkLCAnb3V0cHV0Jywgb3B0aW9uLm91dHB1dCk7XHJcblx0XHRcdGlmIChvcHRpb24uc2NvcmUpIHtcclxuXHRcdFx0XHRTdWJtaXNzaW9uUmVzdWx0cy5maW5kKHsgcHJvYmxlbVRlc3RJZDogaWQgfSkuZm9yRWFjaCgoc3VibWlzc2lvblJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdFx0TWV0ZW9yLmNhbGwoJ1N1Ym1pc3Npb25zLmdldFJlc3VsdCcsIHN1Ym1pc3Npb25SZXN1bHQuc3VibWlzc2lvbklkKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSk7IiwiaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSAnbWV0ZW9yL3JhbmRvbSc7XG5pbXBvcnQgJy4vdXRpbGl0eS5qcyc7XG5cbmV4cG9ydCBjb25zdCBTdHVkZW50cyA9IE1ldGVvci51c2VycztcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRNZXRlb3IucHVibGlzaCgnU3R1ZGVudHMuZmluZEFsbCcsIGZ1bmN0aW9uKCkge1xuXHRcdGNvbnN0IGZpbHRlciA9IHt9O1xuXHRcdGNvbnN0IG9wdGlvbiA9IHsgZmllbGRzOiB7IF9pZDogMSwgdXNlcm5hbWU6IDEsIGlzQWRtaW46IDEgfX07XG5cblx0XHRyZXR1cm4gU3R1ZGVudHMuZmluZChmaWx0ZXIsIG9wdGlvbik7XG5cdH0pO1xuXHRNZXRlb3IucHVibGlzaCgnU3R1ZGVudHMuZmluZE9uZScsIGZ1bmN0aW9uKGlkKSB7XG5cdFx0Y29uc3QgZmlsdGVyID0geyBfaWQ6IGlkIH07XG5cdFx0Y29uc3Qgb3B0aW9uID0geyBmaWVsZHM6IHsgX2lkOiAxLCB1c2VybmFtZTogMSwgZnVsbG5hbWU6IDEsIGVtYWlsczogMSwgeWVhcjogMSwgaXNBZG1pbjogMSB9fTtcblxuXHRcdHJldHVybiBTdHVkZW50cy5maW5kKGZpbHRlciwgb3B0aW9uKTtcblx0fSk7XG59XG5cbk1ldGVvci5tZXRob2RzKHtcblx0J1N0dWRlbnRzLmluc2VydCcoKSB7XG5cdFx0aWYgKCFNZXRlb3IuaXNBZG1pbigpKSByZXR1cm47XG5cblx0XHRBY2NvdW50cy5jcmVhdGVVc2VyKHtcblx0XHRcdHVzZXJuYW1lOiAnU2FtcGxlIFVzZXJuYW1lJyxcblx0XHRcdGZ1bGxuYW1lOiAnU2FtcGxlIEZ1bGxuYW1lJyxcblx0XHRcdHBhc3N3b3JkOiBSYW5kb20uaWQoKSxcblx0XHRcdGVtYWlsOiAnZHNjYUBpbnJnLmNzaWUubnR1LmVkdS50dycsXHRcblx0XHRcdHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcblx0XHRcdGlzQWRtaW46IGZhbHNlXG5cdFx0fSk7XG5cdH0sXG5cdCdTdHVkZW50cy5yZW1vdmUnKGZpbHRlcikge1xuXHRcdGlmICghTWV0ZW9yLmlzQWRtaW4oKSkgcmV0dXJuO1xuXG5cdFx0U3R1ZGVudHMuZmluZChmaWx0ZXIpLmZvckVhY2goKHN0dWRlbnQpID0+IHtcblx0XHRcdE1ldGVvci5jYWxsKCdTdWJtaXNzaW9ucy5yZW1vdmUnLCB7IHN0dWRlbnRJZDogc3R1ZGVudC5faWQgfSk7XG5cdFx0fSk7XG5cdFx0U3R1ZGVudHMucmVtb3ZlKGZpbHRlcik7XG5cdH0sXG5cdCdTdHVkZW50cy51cGRhdGUnKGlkLCBvcHRpb24pIHtcblx0XHRpZiAoIU1ldGVvci5pc0FkbWluKCkgfHwgIU1ldGVvci5pc1NlcnZlcikgcmV0dXJuO1xuXG5cdFx0aWYgKG9wdGlvbi51c2VybmFtZSkge1xuXHRcdFx0QWNjb3VudHMuc2V0VXNlcm5hbWUoaWQsIG9wdGlvbi51c2VybmFtZSk7XG5cdFx0XHRkZWxldGUgb3B0aW9uLnVzZXJuYW1lO1xuXHRcdH1cblx0XHRpZiAob3B0aW9uLnBhc3N3b3JkKSB7XG5cdFx0XHRBY2NvdW50cy5zZXRQYXNzd29yZChpZCwgb3B0aW9uLnBhc3N3b3JkKTtcblx0XHRcdGRlbGV0ZSBvcHRpb24ucGFzc3dvcmQ7XG5cdFx0fVxuXHRcdGlmIChvcHRpb24uZW1haWwpIHtcblx0XHRcdFN0dWRlbnRzLnVwZGF0ZSh7IF9pZDogaWQgfSwgeyAkc2V0OiB7IGVtYWlsczogW10gfX0pO1xuXHRcdFx0QWNjb3VudHMuYWRkRW1haWwoaWQsIG9wdGlvbi5lbWFpbCk7XG5cdFx0XHRkZWxldGUgb3B0aW9uLmVtYWlsO1xuXHRcdH1cblx0XHRpZiAoIV8uaXNFbXB0eShvcHRpb24pKSB7XG5cdFx0XHRTdHVkZW50cy51cGRhdGUoeyBfaWQ6IGlkIH0sIHsgJHNldDogb3B0aW9uIH0pO1xuXHRcdH1cblx0fSxcblx0J1N0dWRlbnRzLmNoYW5nZVBhc3N3b3JkJyhvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpIHtcblx0XHRpZiAoIU1ldGVvci5pc1NlcnZlcikgcmV0dXJuO1xuXG5cdFx0TWV0ZW9yLmNhbGwoJ2NoYW5nZVBhc3N3b3JkJywgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKTtcblx0fVxufSk7IiwiaW1wb3J0IHsgUHJvYmxlbXMsIFByb2JsZW1UZXN0cyB9IGZyb20gJy4vcHJvYmxlbS5qcyc7XHJcbmltcG9ydCAnLi91dGlsaXR5LmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJtaXNzaW9ucyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdTdWJtaXNzaW9ucycpO1xyXG5leHBvcnQgY29uc3QgU3VibWlzc2lvblJlc3VsdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignU3VibWlzc2lvblJlc3VsdHMnKTtcclxuXHJcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcclxuXHRNZXRlb3IucHVibGlzaCgnU3VibWlzc2lvbnMuZmluZEFsbEJ5RmlsdGVyJywgZnVuY3Rpb24ocHJvYmxlbUlkLCBzdHVkZW50SWQpIHtcclxuXHRcdGNvbnN0IGZpbHRlciA9IHsgJG9yOiBbeyBwcm9ibGVtSWQ6IHByb2JsZW1JZCB9LCB7IHN0dWRlbnRJZCwgc3R1ZGVudElkIH1dfTtcclxuXHRcdGNvbnN0IG9wdGlvbiA9IHsgZmllbGRzOiB7IF9pZDogMSwgcHJvYmxlbUlkOiAxLCBzdHVkZW50SWQ6IDEsIGNyZWF0ZWRBdDogMSwgc3RhdHVzOiAxLCBzY29yZTogMSwgaXNFeGFtOiAxIH19O1xyXG5cclxuXHRcdHJldHVybiBTdWJtaXNzaW9ucy5maW5kKGZpbHRlciwgb3B0aW9uKTtcclxuXHR9KTtcclxuXHRNZXRlb3IucHVibGlzaCgnU3VibWlzc2lvbnMuZmluZE9uZScsIGZ1bmN0aW9uKGlkKSB7XHJcblx0XHRjb25zdCBmaWx0ZXIgPSB7IF9pZDogaWQgfTtcclxuXHRcdGNvbnN0IG9wdGlvbiA9IHt9O1xyXG5cclxuXHRcdGlmICghTWV0ZW9yLmlzQWRtaW4oKSAmJiAhTWV0ZW9yLmlzT3duZXIoTWV0ZW9yLmdldFZhbHVlKFN1Ym1pc3Npb25zLCBpZCwgJ3N0dWRlbnRJZCcpKSkge1xyXG5cdFx0XHRvcHRpb24uZmllbGRzID0geyBjb2RlOiAwIH07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gU3VibWlzc2lvbnMuZmluZChmaWx0ZXIsIG9wdGlvbik7XHJcblx0fSk7XHJcblx0TWV0ZW9yLnB1Ymxpc2goJ1N1Ym1pc3Npb25SZXN1bHRzLmZpbmRBbGxCeVN1Ym1pc3Npb24nLCBmdW5jdGlvbihzdWJtaXNzaW9uSWQpIHtcclxuXHRcdGNvbnN0IGZpbHRlciA9IHsgc3VibWlzc2lvbklkOiBzdWJtaXNzaW9uSWQgfTtcclxuXHRcdGNvbnN0IG9wdGlvbiA9IHt9O1xyXG5cclxuXHRcdHJldHVybiBTdWJtaXNzaW9uUmVzdWx0cy5maW5kKGZpbHRlciwgb3B0aW9uKTtcclxuXHR9KTtcclxufVxyXG5cclxuTWV0ZW9yLm1ldGhvZHMoe1xyXG5cdCdTdWJtaXNzaW9ucy5pbnNlcnQnKHByb2JsZW1JZCwgc3R1ZGVudElkLCBsYW5nLCBjb2RlKSB7XHJcblx0XHRpZiAoIU1ldGVvci5pc0FkbWluKCkgJiYgKCFNZXRlb3IuaXNPd25lcihzdHVkZW50SWQpIHx8ICFNZXRlb3IuZ2V0VmFsdWUoUHJvYmxlbXMsIHByb2JsZW1JZCwgJ2lzUHVibGljJykpKSByZXR1cm47XHJcblx0XHRcclxuXHRcdGNvbnN0IHN1Ym1pc3Npb25JZCA9IFN1Ym1pc3Npb25zLmluc2VydCh7XHJcblx0XHRcdHByb2JsZW1JZDogcHJvYmxlbUlkLFxyXG5cdFx0XHRzdHVkZW50SWQ6IHN0dWRlbnRJZCxcclxuXHRcdFx0Y3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuXHRcdFx0c3RhdHVzOiAnUGVuZGluZycsXHJcblx0XHRcdHNjb3JlOiAwLFxyXG5cdFx0XHRsYW5nOiBsYW5nLFxyXG5cdFx0XHRjb2RlOiBjb2RlLFxyXG5cdFx0XHRpc0V4YW06IE1ldGVvci5nZXRWYWx1ZShQcm9ibGVtcywgcHJvYmxlbUlkLCAnaXNFeGFtJylcclxuXHRcdH0pO1xyXG5cdFx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG5cdFx0XHRNZXRlb3IuY2FsbCgnU3VibWlzc2lvbnMuY3JlYXRlRGlyJywgc3VibWlzc2lvbklkKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdCdTdWJtaXNzaW9ucy5yZW1vdmUnKGZpbHRlcikge1xyXG5cdFx0aWYgKCFNZXRlb3IuaXNBZG1pbigpKSByZXR1cm47XHJcblxyXG5cdFx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG5cdFx0XHRTdWJtaXNzaW9ucy5maW5kKGZpbHRlcikuZm9yRWFjaCgoc3VibWlzc2lvbikgPT4ge1xyXG5cdFx0XHRcdE1ldGVvci5jYWxsKCdTdWJtaXNzaW9uUmVzdWx0cy5yZW1vdmUnLCB7IHN1Ym1pc3Npb25JZDogc3VibWlzc2lvbi5faWQgfSk7XHJcblx0XHRcdFx0TWV0ZW9yLmNhbGwoJ1N1Ym1pc3Npb25zLnJlbW92ZURpcicsIHN1Ym1pc3Npb24uX2lkKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRTdWJtaXNzaW9ucy5yZW1vdmUoZmlsdGVyKTtcclxuXHR9LFxyXG5cdCdTdWJtaXNzaW9ucy51cGRhdGUnKGlkLCBvcHRpb24pIHtcclxuXHRcdGlmICghTWV0ZW9yLmlzQWRtaW4oKSkgcmV0dXJuO1xyXG5cclxuXHRcdFN1Ym1pc3Npb25zLnVwZGF0ZSh7IF9pZDogaWQgfSwgeyAkc2V0OiBvcHRpb24gfSk7XHJcblxyXG5cdFx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xyXG5cdFx0XHRNZXRlb3IuY2FsbCgnU3VibWlzc2lvblJlc3VsdHMucmVtb3ZlJywgeyBzdWJtaXNzaW9uSWQ6IGlkIH0pO1xyXG5cdFx0XHRNZXRlb3IuY2FsbCgnU3VibWlzc2lvbnMuY3JlYXRlRGlyJywgaWQpO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7IiwiTWV0ZW9yLmdldFZhbHVlID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgaWQsIGZpZWxkKSB7XG5cdGNvbnN0IGRvYyA9IGNvbGxlY3Rpb24uZmluZE9uZSh7IF9pZDogaWQgfSwgeyBmaWVsZHM6IHsgW2ZpZWxkXTogMSB9fSk7XG5cdHJldHVybiBkb2MgPyBkb2NbZmllbGRdIDogbnVsbDtcbn1cblxuTWV0ZW9yLmlzQWRtaW4gPSBmdW5jdGlvbigpIHtcblx0Y29uc3QgdXNlciA9IE1ldGVvci51c2VyKCk7XG5cdHJldHVybiB1c2VyICYmIHVzZXIuaXNBZG1pbjtcbn1cblxuTWV0ZW9yLmlzT3duZXIgPSBmdW5jdGlvbihpZCkge1xuXHRjb25zdCB1c2VyID0gTWV0ZW9yLnVzZXIoKTtcblx0cmV0dXJuIHVzZXIgJiYgdXNlci5faWQgPT0gaWQ7XG59IiwiaW1wb3J0ICcvaW1wb3J0cy9hcGkvX3Byb2JsZW0uanMnO1xuaW1wb3J0ICcvaW1wb3J0cy9hcGkvX3N0dWRlbnQuanMnO1xuaW1wb3J0ICcvaW1wb3J0cy9hcGkvX3N1Ym1pc3Npb24uanMnO1xuaW1wb3J0ICcvaW1wb3J0cy9hcGkvcHJvYmxlbS5qcyc7XG5pbXBvcnQgJy9pbXBvcnRzL2FwaS9zdHVkZW50LmpzJztcbmltcG9ydCAnL2ltcG9ydHMvYXBpL3N1Ym1pc3Npb24uanMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbk1ldGVvci5yb290UGF0aCA9IHBhdGgucmVzb2x2ZSgnLicpLnNwbGl0KHBhdGguc2VwICsgJy5tZXRlb3InKVswXSsnLyc7XG5NZXRlb3IuZGF0YVBhdGggPSBNZXRlb3Iucm9vdFBhdGgrJy4uL0RTQ0FfRGF0YS8nO1xuXG4vKkFjY291bnRzLmNyZWF0ZVVzZXIoe1xuXHR1c2VybmFtZTogJ1IwNDkyMjA3NScsXG5cdGZ1bGxuYW1lOiAna2NrdScsXG5cdHBhc3N3b3JkOiAnMTIzNDU2Jyxcblx0ZW1haWw6ICdyMDQ5MjIwNzVAY3NpZS5udHUuZWR1LnR3Jyxcblx0eWVhcjogMjAxNixcblx0aXNBZG1pbjogdHJ1ZVxufSk7I2luY2x1ZGUgPGNzdGRpbz5cbmludCBtYWluKCkge1xuICAgIGNoYXIgbGluZVsxMDBdO1xuICAgIHNjYW5mKFwiJXNcIiwgbGluZSk7XG4gICAgcHJpbnRmKFwiJXNcIiwgbGluZSk7XG59XG4jaW5jbHVkZSA8Y3N0ZGlvPlxuaW50IG1haW4oKSB7XG4gICAgY2hhciBsaW5lWzEwMF07XG4gICAgZ2V0cyhsaW5lKTtcbiAgICBwdXRzKGxpbmUpO1xufSovXG4vKmltcG9ydCBmcyBmcm9tICdmcyc7XG5jb25zdCBmaWxlID0gTWV0ZW9yLndyYXBBc3luYyhmcy5yZWFkRmlsZSkoTWV0ZW9yLnJvb3RQYXRoKycuLi9zdHVkZW50bGlzdCcsICd1dGYtOCcpO1xuY29uc3QganNvbiA9IGZpbGUuc3BsaXQoJ1xcbicpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uLmxlbmd0aC0xOyBpKyspIHtcblx0Y29uc3QgdmFsdWUgPSBKU09OLnBhcnNlKGpzb25baV0udHJpbSgpKTtcblx0Y29uc3Qgc3R1ZGVudCA9IHtcblx0XHR1c2VybmFtZTogdmFsdWUudXNlcixcblx0XHRmdWxsbmFtZTogdmFsdWUubmFtZSxcblx0XHRwYXNzd29yZDogdmFsdWUucGFzcyxcblx0XHRpc0FkbWluOiB2YWx1ZS5hZG1pbixcblx0XHRlbWFpbDogdmFsdWUudXNlcisnQG50dS5lZHUudHcnLFxuXHRcdHllYXI6IHZhbHVlLnllYXJcblx0fTtcblx0Ly9jb25zb2xlLmxvZyhzdHVkZW50KTtcblx0QWNjb3VudHMuY3JlYXRlVXNlcihzdHVkZW50KTtcbn0qLyJdfQ==
