/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';
const ThreadService = require('../lib/thread');

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
					text,
					delete_password
				);
				res.json(threads);
				// res.redirect(`/b/${board}`);
			} catch (err) {
				next(err);
			}
		})
		.get(async (req, res, next) => {
			const board_name = req.params.board;

			try {
				const threads = await ThreadService.getBoard(board_name);
				res.json(threads);
			} catch (err) {
				next(err);
			}
		})
		.put(async (req, res, next) => {
			const thread_id = req.body.thread_id;
			try {
				const thread = await ThreadService.updateThread(thread_id);
				res.json(thread);
			} catch (err) {
				next(err);
			}
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
