const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({
	board_name: String,
	text: String,
	bumped_on: { type: Date, default: Date.now },
	created_on: { type: Date, default: Date.now },
	delete_password: String,
	reported: { type: Boolean, default: false },
	replies: [
		{
			text: String,
			delete_password: String,
			created_on: { type: Date, default: Date.now },
			reported: { type: Boolean, default: false }
		}
	]
});

module.exports = mongoose.model('Thread', ThreadSchema);
