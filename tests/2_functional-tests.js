// /*
//  *
//  *
//  *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
//  *       -----[Keep the tests in the same order!]-----
//  *       (if additional are added, keep them at the very end!)
//  */

const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
	suite('API ROUTING FOR /api/threads/:board', function() {
		suite('POST', function() {
			test('posts a thread with text and delete_password fields', function(done) {
				chai
					.request(server)
					.post('/api/threads/test_board')
					.send({
						text: 'some text',
						delete_password: 'pass'
					})
					.end(function(err, res) {
						assert.equal(res.status, 200);
						done();
					});
			});

			test('posts a thread without delete_password field', function(done) {
				chai
					.request(server)
					.post('/api/threads/test_board')
					.send({ text: 'some text' })
					.end(function(err, res) {
						assert.equal(res.status, 500);
						done();
					});
			});

			test('posts a thread without text field', function(done) {
				chai
					.request(server)
					.post('/api/threads/test_board')
					.send({ delete_password: 'some password' })
					.end(function(err, res) {
						assert.equal(res.status, 500);
						done();
					});
			});
		});

		suite('GET', function() {
			test('gets all threads on a given board', function(done) {
				chai
					.request(server)
					.get('/api/threads/test_board')
					.send({
						thread_id: '5cf0313018801237927126c3'
					})
					.end(function(err, res) {
						// assertions go here...
						assert.equal(res.status, 200);
						done();
					});
			});
		});

		suite('DELETE', function() {
			test('deletes a thread successfully', function(done) {
				chai
					.request(server)
					.delete('/api/threads/test_board')
					.send({
						thread_id: '5cf03698db993b3cf768c6ea',
						delete_password: 'password'
					})
					.end(function(err, res) {
						// assertions go here...
						assert.equal(res.status, 200);
						done();
					});
			});

			test('sends delete request with incorrect password', function(done) {
				chai
					.request(server)
					.delete('/api/threads/test_board')
					.send({
						thread_id: '5cf03942b2caf142a1cac991',
						delete_password: 'wrong'
					})
					.end(function(err, res) {
						// assertions go here...
						assert.equal(res.status, 200);
						assert.equal(res.text, 'incorrect password');
						done();
					});
			});
		});

		suite('PUT', function() {
			test('updates a thread', function(done) {
				chai
					.request(server)
					.put('/api/threads/test_board')
					.send({
						thread_id: '5cf0313018801237927126c3'
					})
					.end(function(err, res) {
						// assertions go here...
						assert.equal(res.status, 200);
						done();
					});
			});
		});
	});

	suite('API ROUTING FOR /api/replies/:board', function() {
		suite('POST', function() {
			test('posts a reply', function(done) {
				chai
					.request(server)
					.post('/api/replies/test_board')
					.send({
						thread_id: '5cf0313018801237927126c3',
						text: 'some reply text',
						delete_password: 'pass'
					})
					.end(function(err, res) {
						// assertions go here...
						assert.equal(res.status, 200);
						done();
					});
			});
		});

		suite('GET', function() {
			test('gets all replies on a given thread', function(done) {
				chai
					.request(server)
					.get('/api/replies/test_board?thread_id=5cf0313018801237927126c3')
					.send({})
					.end(function(err, res) {
						// assertions go here...
						assert.equal(res.status, 200);
						done();
					});
			});
		});

		suite('PUT', function() {
			test('updates a reply', function(done) {
				chai
					.request(server)
					.put('/api/replies/test_board')
					.send({
						thread_id: '5cf0313018801237927126c3',
						reply_id: '5cf03985ceed2f42dd35907e'
					})
					.end(function(err, res) {
						// assertions go here...
						assert.equal(res.status, 200);
						done();
					});
			});
		});

		suite('DELETE', function() {
			test('deletes a reply', function(done) {
				chai
					.request(server)
					.delete('/api/replies/test_board')
					.send({
						thread_id: '12345',
						reply_id: '54321',
						delete_password: 'some password'
					})
					.end(function(err, res) {
						// assertions go here...
						assert.equal(res.status, 200);
						done();
					});
			});
		});
	});
});
