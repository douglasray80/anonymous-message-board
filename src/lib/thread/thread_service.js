const createThread = Thread => (board_name, delete_password, text) => {
	if (!board_name || !delete_password || !text)
		throw new Error(
			`Board: ${board_name}, Password: ${delete_password}, Text: ${text}`
		);

	const thread = new Thread({ board_name, delete_password, text });
	return thread.save();
};

const getBoard = Thread => board_name => {
	if (!board_name) throw new Error(`Board: ${board_name}`);

	return Thread.find({ board_name });
};

const getThread = Thread => thread_id => {
	if (!thread_id) throw new Error(`Thread: ${thread_id}`);

	return Thread.findById(thread_id);
};

const updateThread = Thread => thread_id => {
	if (!thread_id) throw new Error(`Thread: ${thread_id}`);

	return Thread.findByIdAndUpdate(thread_id, { reported: true });
};

module.exports = Thread => {
	return {
		createThread: createThread(Thread),
		getBoard: getBoard(Thread),
		getThread: getThread(Thread),
		updateThread: updateThread(Thread)
	};
};
