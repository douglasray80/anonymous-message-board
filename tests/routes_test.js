// const mongoose = require('mongoose');
// const request = require('supertest');
// const { assert } = require('chai');

// const app = require('../src/app');

// mongoose.connect(process.env.MONGO_TEST_DB);

// suite('app/routes test', function() {
// 	test('has a module', function(done) {
// 		assert.isDefined(app);
// 		done();
// 	});

// 	let server;

// 	before(() => {
// 		server = app.listen(4001);
// 	});

// 	after(done => {
// 		mongoose.connection.close();
// 		server.close(done);
// 	});

// 	test('serves a webpage at "/"', function(done) {
// 		request(server)
// 			.get('/')
// 			.expect(200, done);
// 	});
// });
