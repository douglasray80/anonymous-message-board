const sinon = require('sinon');
const { assert } = require('chai');

const ThreadService = require('../src/lib/thread/thread_service');

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
			const MockModel = {
				find: sinon.spy()
			};

			const threadService = ThreadService(MockModel);

			threadService.getBoard('foo');

			const expected = true;
			const actual = MockModel.find.calledOnce;

			assert.equal(actual, expected);
			done();
		});
	});

	suite('getThread test', function() {
		test('gets a thread', function(done) {
			const MockModel = {
				findById: sinon.spy()
			};

			const threadService = ThreadService(MockModel);

			threadService.getThread('some_thread_id');

			const expected = true;
			const actual = MockModel.findById.calledOnce;

			assert.equal(actual, expected);
			done();
		});
	});

	suite('updateThread', function() {
		test('updates a thread', function(done) {
			const MockModel = {
				findByIdAndUpdate: sinon.spy()
			};

			const threadService = ThreadService(MockModel);
			threadService.updateThread('some_thread_id');

			const expected = true;
			const actual = MockModel.findByIdAndUpdate.calledOnce;

			assert.equal(actual, expected);
			done();
		});
	});

	suite('deleteThread', function() {
		test('deletes a thread', function(done) {
			const MockModel = {
				findByIdAndDelete: sinon.spy()
			};

			const threadService = ThreadService(MockModel);
			threadService.deleteThread('some_thread_id', 'some_delete_password');

			const expected = true;
			const actual = MockModel.findByIdAndDelete.calledOnce;

			assert.equal(actual, expected);
			done();
		});
	});

	suite('postReply test', function() {
		test('posts a reply to a given thread', function(done) {
			const MockModel = {
				findByIdAndUpdate: sinon.spy()
			};

			const threadService = ThreadService(MockModel);
			threadService.postReply(
				'some_thread_id',
				'some_text',
				'some_delete_password'
			);

			const expected = true;
			const actual = MockModel.findByIdAndUpdate.calledOnce;

			assert.equal(actual, expected);
			done();
		});
	});

	suite('updateReply', function() {
		test('updates a reply', function(done) {
			const MockModel = {
				findByIdAndUpdate: sinon.spy()
			};

			const threadService = ThreadService(MockModel);
			threadService.updateReply('some_thread_id', 'some_reply_id');

			const expected = true;
			const actual = MockModel.findByIdAndUpdate.calledOnce;

			assert.equal(actual, expected);
			done();
		});
	});

	suite('deleteReply test', function() {
		test('deletes a reply', function(done) {
			const MockModel = {
				findByIdAndUpdate: sinon.spy()
			};

			const threadService = ThreadService(MockModel);
			threadService.deleteReply(
				'some_thread_id',
				'some_reply_id',
				'some_delete_password'
			);

			const expected = true;
			const actual = MockModel.findByIdAndUpdate.calledOnce;

			assert.equal(actual, expected);
			done();
		});
	});
});
