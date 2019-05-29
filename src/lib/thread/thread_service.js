const createThread = Thread => (board_name, delete_password, text) => {
	if (!board_name || !delete_password || !text)
		throw new Error(
			`Board: ${board_name}, Password: ${delete_password}, Text: ${text}`
		);

	const thread = new Thread({ board_name, delete_password, text });
	return thread.save();
};

module.exports = Thread => {
	return {
		createThread: createThread(Thread)
	};
};
