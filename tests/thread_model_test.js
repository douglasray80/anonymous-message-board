// const mongoose = require('mongoose');
// const { assert } = require('chai');

// const Thread = require('../src/lib/thread/thread_model');

// mongoose.connect(process.env.MONGO_TEST_DB, { useNewUrlParser: true });

// suite('Thread Model test', () => {
// 	before(async () => {
// 		await Thread.deleteMany();
// 	});

// 	afterEach(async () => {
// 		await Thread.deleteMany();
// 	});

// 	after(async () => {
// 		await mongoose.connection.close();
// 	});

// 	test('has a module', () => {
// 		assert.isDefined(Thread);
// 	});

// 	suite('get thread', () => {
// 		test('gets a thread', async () => {
// 			const thread = new Thread({ text: 'foo', delete_password: 'bar' });
// 			await thread.save();

// 			const foundThread = await Thread.findOne({ text: 'foo' });
// 			const expected = 'foo';
// 			const actual = foundThread.text;
// 			assert.equal(actual, expected);
// 		});
// 	});

// 	suite('save thread', () => {
// 		test('saves a thread', async () => {
// 			const thread = new Thread({ text: 'foo', delete_password: 'bar' });
// 			const savedThread = await thread.save();
// 			const expected = 'foo';
// 			const actual = savedThread.text;
// 			assert.equal(actual, expected);
// 		});
// 	});

// 	suite('update thread', () => {
// 		test('updates a thread', async () => {
// 			const thread = new Thread({ text: 'foo', delete_password: 'bar' });
// 			await thread.save();

// 			thread.text = 'bar';
// 			const updatedThread = await thread.save();

// 			const expected = 'bar';
// 			const actual = updatedThread.text;
// 			assert.equal(actual, expected);
// 		});
// 	});
// });
