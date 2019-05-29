/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

module.exports = function(app) {
	app
		.route('/api/threads/:board')
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
