import '/imports/api/_problem.js';
import '/imports/api/_student.js';
import '/imports/api/_submission.js';
import '/imports/api/problem.js';
import '/imports/api/student.js';
import '/imports/api/submission.js';
import path from 'path';

Meteor.rootPath = path.resolve('.').split(path.sep + '.meteor')[0]+'/';
Meteor.dataPath = Meteor.rootPath+'../DSCA_Data/';

/*Accounts.createUser({
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
}*/
/*import fs from 'fs';
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