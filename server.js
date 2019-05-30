'use strict';

const mongoose = require('mongoose');
const app = require('./src/app');
const runner = require('./test-runner');

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
});

if (process.env.NODE_ENV === 'test') {
	console.log('Running Tests...');
	setTimeout(function() {
		try {
			runner.run();
		} catch (e) {
			var error = e;
			console.log('Tests are not valid:');
			console.log(error);
		}
	}, 3500);
} else {
	app.listen(process.env.PORT || 3000, function() {
		console.log('Listening on port ' + process.env.PORT);
	});
}
