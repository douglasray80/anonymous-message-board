/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

const { expect } = require('chai');

module.exports = function(app) {
	app.route('/api/threads/:board');

	app.route('/api/replies/:board');
};
