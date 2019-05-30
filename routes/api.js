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
				res.redirect(`/b/${board}/`);
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
				res.send('success');
			} catch (err) {
				next(err);
			}
		})
		.delete(async (req, res, next) => {
			const thread_id = req.body.thread_id;
			const delete_password = req.body.delete_password;

			try {
				const thread = await ThreadService.deleteThread(
					thread_id,
					delete_password
				);
				res.send('success');
			} catch (err) {
				res.send(err.message);
				next(err);
			}
		});

	app
		.route('/api/replies/:board')
		.post(async (req, res, next) => {
			const board_name = req.params.board;
			const thread_id = req.body.thread_id;
			const text = req.body.text;
			const delete_password = req.body.delete_password;
			try {
				const thread = await ThreadService.postReply(
					thread_id,
					text,
					delete_password
				);
				res.redirect(`/b/${board_name}/${thread_id}`);
			} catch (err) {
				next(err);
			}
		})
		.get(async (req, res, next) => {
			const thread_id = req.query.thread_id;
			try {
				const thread = await ThreadService.getThread(thread_id);
				res.json(thread);
			} catch (err) {
				next(err);
			}
		})
		.put(async (req, res, next) => {
			const thread_id = req.body.thread_id;
			const reply_id = req.body.reply_id;
			try {
				const thread = await ThreadService.updateReply(thread_id, reply_id);
				res.send('success');
			} catch (err) {
				next(err);
			}
		})
		.delete(async (req, res, next) => {
			const thread_id = req.body.thread_id;
			const reply_id = req.body.reply_id;
			const delete_password = req.body.delete_password;
			try {
				const thread = await ThreadService.deleteReply(
					thread_id,
					reply_id,
					delete_password
				);
				res.send('success');
			} catch (err) {
				res.send(err.message);
				next(err);
			}
		});
};
