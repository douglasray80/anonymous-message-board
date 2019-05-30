const chai = require('chai');
const sinon = require('sinon');
const ThreadService = require('../src/lib/thread/thread_service');

const assert = chai.assert;

suite('Thread Service test', function() {
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

	suite('getBoard test', function() {
		test('list all threads for a given board_name', function(done) {
			const find = sinon.spy();
			let board_name;

			const MockModel = function(data) {
				board_name = data.board_name;

				return {
					...data,
					find
				};
			};

			const threadService = ThreadService(MockModel);

			threadService.getBoard('foo');

			const expected = true;
			const actual = find.calledOnce;

			assert.equal(actual, expected);
			assert.equal(board_name, 'foo');
		});
	});

	suite('getThread', function() {
		test('gets a thread', function(done) {
			const findById = sinon.spy();
			let thread_id;

			const MockModel = function(data) {
				thread_id = data.thread_id;

				return {
					...data,
					findById
				};
			};

			const threadService = ThreadService(MockModel);

			threadService.getThread('some_thread_id');

			const expected = true;
			const actual = findById.calledOnce;

			assert.equal(actual, expected);
			assert.equal(thread_id, 'some_thread_id');
		});
	});

	suite('updateThread', function() {
		test('updates a thread', function(done) {
			const findByIdAndUpdate = sinon.spy();
			let thread_id;

			const MockModel = function(data) {
				thread_id = data.thread_id;

				return {
					...data,
					findByIdAndUpdate
				};
			};

			const threadService = ThreadService(MockModel);
			threadService.updateThread('some_thread_id');

			const expected = true;
			const actual = findByIdAndUpdate.calledOnce;

			assert.equal(actual, expected);
			assert.equal(thread_id, 'some_thread_id');
		});
	});

	suite('deleteThread', function() {
		test('deletes a thread', function(done) {
			const findByIdAndDelete = sinon.spy();
			let thread_id;
			let delete_password;

			const MockModel = function(data) {
				thread_id = data.thread_id;
				delete_password = data.delete_password;

				return {
					...data,
					findByIdAndDelete
				};
			};

			const threadService = ThreadService(MockModel);
			threadService.deleteThread('some_thread_id', 'some_delete_password');

			const expected = true;
			const actual = findByIdAndDelete.calledOnce;

			assert.equal(actual, expected);
			assert.equal(thread_id, 'some_thread_id');
			assert.equal(delete_password, 'some_delete_password');
		});
	});

	suite('postReply test', function() {
		test('posts a reply to a given thread', function(done) {
			const findByIdAndUpdate = sinon.spy();
			let thread_id;
			let text;
			let delete_password;

			const MockModel = function(data) {
				thread_id = data.thread_id;
				text = data.text;
				delete_password = data.delete_password;

				return {
					...data,
					findByIdAndUpdate
				};
			};

			const threadService = ThreadService(MockModel);
			threadService.postReply(
				'some_thread_id',
				'some_text',
				'some_delete_password'
			);

			const expected = true;
			const actual = findByIdAndUpdate.calledOnce;

			assert.equal(actual, expected);
			assert.equal(thread_id, 'some_thread_id');
			assert.equal(text, 'some_text');
			assert.equal(delete_password, 'some_delete_password');
		});
	});

	suite('updateReply', function() {
		test('updates a reply', function(done) {
			const findByIdAndUpdate = sinon.spy();
			let thread_id;
			let reply_id;

			const MockModel = function(data) {
				thread_id = data.thread_id;
				reply_id = data.reply_id;

				return {
					...data,
					findByIdAndUpdate
				};
			};

			const threadService = ThreadService(MockModel);
			threadService.updateReply('some_thread_id', 'some_reply_id');

			const expected = true;
			const actual = findByIdAndUpdate.calledOnce;

			assert.equal(actual, expected);
			assert.equal(thread_id, 'some_thread_id');
			assert.equal(reply_id, 'some_reply_id');
		});
	});

	suite('deleteReply test', function() {
		test('deletes a reply', function(done) {
			const findByIdAndUpdate = sinon.spy();
			let thread_id;
			let reply_id;
			let delete_password;

			const MockModel = function(data) {
				thread_id = data.thread_id;
				reply_id = data.reply_id;
				delete_password = data.delete_password;

				return {
					...data,
					findByIdAndUpdate
				};
			};

			const threadService = ThreadService(MockModel);
			threadService.deleteReply(
				'some_thread_id',
				'some_reply_id',
				'some_delete_password'
			);

			const expected = true;
			const actual = findByIdAndUpdate.calledOnce;

			assert.equal(actual, expected);
			assert.equal(thread_id, 'some_thread_id');
			assert.equal(reply_id, 'some_reply_id');
			assert.equal(delete_password, 'some_delete_password');
		});
	});
});
