import { ProblemTests } from './problem.js';
import ps from 'child_process';
import fs from 'fs';

Meteor.methods({
	'ProblemTests.createDir'(id) {
		const problemTest = ProblemTests.findOne({ _id: id });
		const dirpath = Meteor.dataPath+id;

		Meteor.wrapAsync(fs.mkdir)(dirpath);
		Meteor.call('ProblemTests.writeFile', id, 'input', problemTest.input);
		Meteor.call('ProblemTests.writeFile', id, 'output', problemTest.output);
	},
	'ProblemTests.writeFile'(id, field, content) {
		const filepath = Meteor.dataPath+id+'/'+field;
		Meteor.wrapAsync(fs.writeFile)(filepath, content);
	},
	'ProblemTests.removeDir'(id) {	
		const dirpath = Meteor.dataPath+id;
		Meteor.wrapAsync(ps.exec)('rm -rf '+dirpath);
	}
});