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
});
