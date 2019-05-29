/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';
const ThreadService = require('./lib/thread');

module.exports = app => {
	app
		.route('/api/threads/:board')
		.post(async (req, res, next) => {
			const board = req.params.board;
			const delete_password = req.body.delete_password;
			const text = req.body.text;

			try {
				const threads = await ThreadService.createThread(
					board,
					delete_password,
					text
				);
				res.json(threads);
			} catch (err) {
				next(err);
			}
		})
		.get((req, res, next) => {
			const board = req.params.board;
		})
		.put((req, res, next) => {
			const board = req.params.board;
		})
		.delete((req, res, next) => {
			const board = req.params.board;
		});

	app
		.route('/api/replies/:board')
		.post((req, res, next) => {
			const board = req.params.board;
		})
		.get((req, res, next) => {
			const board = req.params.board;
		})
		.put((req, res, next) => {
			const board = req.params.board;
		})
		.delete((req, res, next) => {
			const board = req.params.board;
		});
};
