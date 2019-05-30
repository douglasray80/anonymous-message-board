const chai = require('chai');
const sinon = require('sinon');
const ThreadService = require('../src/lib/thread/thread_service');

const assert = chai.assert;

suite('ThreadService test', function() {
	test('has a module', function(done) {
		assert.isDefined(ThreadService);
		done();
	});

	suite('createThread test', function() {
		test('creates a thread', function(done) {
			const save = sinon.spy();
			let board_name;
			let delete_password;
			let text;

			const MockModel = function(data) {
				board_name = data.board_name;
				delete_password = data.delete_password;
				text = data.text;

				return {
					...data,
					save
				};
			};

			const threadService = ThreadService(MockModel);

			threadService.createThread('foo', 'foo', 'foo');

			const expected = true;
			const actual = save.calledOnce;

			assert.equal(actual, expected);
			assert.equal(board_name, 'foo');
			assert.equal(delete_password, 'foo');
			assert.equal(text, 'foo');
			done();
		});
	});

	suite('getThread', function() {
		test('gets a thread', function(done) {});
	});

	suite('updateThread', function() {
		test('updates a thread', function(done) {});
	});

	suite('deleteThread', function() {
		test('deletes a thread', function(done) {});
	});

	suite('getThreads test', function() {
		test('list all threads for a given board_name', function(done) {});
	});

	suite('postReply test', function() {
		test('posts a reply to a given thread', function(done) {});
	});

	suite('updateReply', function() {
		test('updates a reply', function(done) {});
	});

	suite('deleteReply test', function() {
		test('deletes a reply', function(done) {});
	});
});
