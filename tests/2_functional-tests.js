// /*
//  *
//  *
//  *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
//  *       -----[Keep the tests in the same order!]-----
//  *       (if additional are added, keep them at the very end!)
//  */

// const mongoose = require('mongoose');
// const request = require('supertest');
// // const chaiHttp = require('chai-http');
// const chai = require('chai');
// const assert = chai.assert;
// const app = require('../src/app');

// mongoose.connect(process.env.MONGO_TEST_DB, {
// 	useNewUrlParser: true,
// 	useCreateIndex: true,
// 	useFindAndModify: false
// });

// // chai.use(chaiHttp);

// suite('Functional Tests', function() {
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

// 	suite('API ROUTING FOR /api/threads/:board', function() {
// 		suite('POST', function() {
// 			test('can post a thread', function(done) {
// 				request(server)
// 					.post('/api/threads/some-board')
// 					.expect(200)
// 					.end();
// 			});
// 		});

// 		suite('GET', function() {
// 			test('can get a thread', function(done) {
// 				request(server)
// 					.get('/api/threads/some-board')
// 					.expect(200, done);
// 			});
// 		});

// 		suite('DELETE', function() {});

// 		suite('PUT', function() {});
// 	});

// 	suite('API ROUTING FOR /api/replies/:board', function() {
// 		suite('POST', function() {});

// 		suite('GET', function() {});

// 		suite('PUT', function() {});

// 		suite('DELETE', function() {});
// 	});
// });
