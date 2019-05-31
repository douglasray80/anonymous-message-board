const createThread = Thread => (board_name, text, delete_password) => {
	if (!board_name || !delete_password || !text)
		throw new Error(
			`Board: ${board_name}, Password: ${delete_password}, Text: ${text}`
		);

	const thread = new Thread({ board_name, delete_password, text });
	return thread.save();
};

const getBoard = Thread => board_name => {
	if (!board_name) throw new Error(`Board: ${board_name}`);

	return Thread.find({ board_name }, { replies: { $slice: -3 } })
		.select('-reported -delete_password')
		.select('-replies.reported -replies.delete_password')
		.sort('-bumped_on')
		.limit(10);
};

const getThread = Thread => thread_id => {
	if (!thread_id) throw new Error(`Thread: ${thread_id}`);

	return Thread.findById(thread_id).select('-reported -delete_password');
};

const updateThread = Thread => thread_id => {
	if (!thread_id) throw new Error(`Thread: ${thread_id}`);

	return Thread.findByIdAndUpdate(thread_id, { reported: true });
};

const deleteThread = Thread => async (thread_id, delete_password) => {
	if (!thread_id || !delete_password)
		throw new Error(`Thread: ${thread_id}, Password: ${delete_password}`);

	const thread = await Thread.findById(thread_id);

	if (thread.delete_password !== delete_password)
		throw new Error(`incorrect password`);

	return thread.remove();
};

const postReply = Thread => async (thread_id, text, delete_password) => {
	if (!thread_id || !text || !delete_password)
		throw new Error(
			`Thread: ${thread_id}, Text: ${text}, Password: ${delete_password}`
		);

	const thread = await Thread.findById(thread_id);
	thread.replies.push({ text, delete_password });
	thread.bumped_on = new Date();

	return thread.save();
};

const updateReply = Thread => async (thread_id, reply_id) => {
	if (!thread_id || !reply_id)
		throw new Error(`Thread: ${thread_id}, Reply: ${reply_id}`);

	const thread = await Thread.findOneAndUpdate(
		{ 'replies._id': reply_id },
		{ 'replies.$.reported': true }
	);

	return thread.save();
};

const deleteReply = Thread => async (thread_id, reply_id, delete_password) => {
	if (!thread_id || !reply_id || !delete_password)
		throw new Error(
			`Thread: ${thread_id}, Reply: ${reply_id}, Password: ${delete_password}`
		);

	const thread = await Thread.findById(thread_id);
	const reply = thread.replies.id(reply_id);

	if (reply.delete_password !== delete_password)
		throw new Error('incorrect password');

	thread.replies.id(reply_id).remove();
	return thread.save();
};

module.exports = Thread => {
	return {
		createThread: createThread(Thread),
		getBoard: getBoard(Thread),
		getThread: getThread(Thread),
		updateThread: updateThread(Thread),
		deleteThread: deleteThread(Thread),
		postReply: postReply(Thread),
		updateReply: updateReply(Thread),
		deleteReply: deleteReply(Thread)
	};
};
