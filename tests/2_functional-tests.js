// /*
//  *
//  *
//  *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
//  *       -----[Keep the tests in the same order!]-----
//  *       (if additional are added, keep them at the very end!)
//  */
const mongoose = require('mongoose');
const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;

chai.use(chaiHttp);

const server = require('../server');
const Thread = require('../lib/thread/thread_model');

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
						thread_id: '5cf0ffd79bfd172506b59028'
					})
					.end(function(err, res) {
						assert.equal(res.status, 200);
						assert.equal(res.type, 'application/json');
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
						thread_id: '5cf10027d97e0d2561d3717e',
						delete_password: 'pass'
					})
					.end(function(err, res) {
						assert.equal(res.status, 200);
						assert.equal(res.text, 'success');
						done();
					});
			});

			test('sends delete request with incorrect password', function(done) {
				chai
					.request(server)
					.delete('/api/threads/test_board')
					.send({
						thread_id: '5cf0ffd79bfd172506b59028',
						delete_password: 'wrong'
					})
					.end(function(err, res) {
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
						thread_id: '5cf0ffefbab1b9251c951e44'
					})
					.end(function(err, res) {
						assert.equal(res.status, 200);
						assert.equal(res.text, 'success');
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
						thread_id: '5cf0ffefbab1b9251c951e44',
						text: 'some reply text',
						delete_password: 'pass'
					})
					.end(function(err, res) {
						assert.equal(res.status, 200);
						done();
					});
			});
		});

		suite('GET', function() {
			test('gets all replies on a given thread', function(done) {
				chai
					.request(server)
					.get('/api/replies/test_board?thread_id=5cf0ffefbab1b9251c951e44')
					.send({})
					.end(function(err, res) {
						assert.equal(res.status, 200);
						assert.equal(res.type, 'application/json');
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
						thread_id: '5cf0ffefbab1b9251c951e44',
						reply_id: '5cf10028d97e0d2561d3717f'
					})
					.end(function(err, res) {
						assert.equal(res.status, 200);
						assert.equal(res.text, 'success');
						done();
					});
			});
		});

		suite('DELETE', function() {
			test('sends a delete request with incorrect password', function(done) {
				chai
					.request(server)
					.delete('/api/replies/test_board')
					.send({
						thread_id: '5cf0ffefbab1b9251c951e44',
						reply_id: '5cf1002ec1d3e52576676e90',
						delete_password: 'wrong'
					})
					.end(function(err, res) {
						assert.equal(res.status, 200);
						assert.equal(res.text, 'incorrect password');
						done();
					});
			});

			test('deletes a reply', function(done) {
				chai
					.request(server)
					.delete('/api/replies/test_board')
					.send({
						thread_id: '5cf0ffefbab1b9251c951e44',
						reply_id: '5cf1002ec1d3e52576676e90',
						delete_password: 'pass'
					})
					.end(function(err, res) {
						assert.equal(res.status, 200);
						assert.equal(res.text, 'success');
						done();
					});
			});
		});
	});
});
