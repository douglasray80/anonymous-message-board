'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const apiRoutes = require('./routes');
const fccTestingRoutes = require('../routes/fcctesting.js');

const app = express();

app.use(
	helmet({
		referrerPolicy: { policy: 'same-origin' },
		frameguard: { action: 'same-origin' },
		dnsPrefetchControl: { allow: false }
	})
);

app.use(morgan('dev'));

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({ origin: '*' })); //USED FOR FCC TESTING PURPOSES ONLY!

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Sample front-end
app.route('/b/:board/').get((req, res) => {
	res.sendFile(process.cwd() + '/views/board.html');
});
app.route('/b/:board/:threadid').get((req, res) => {
	res.sendFile(process.cwd() + '/views/thread.html');
});

//Index page (static HTML)
app.route('/').get((req, res) => {
	res.sendFile(process.cwd() + '/views/index.html');
});

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API
apiRoutes(app);

//404 Not Found Middleware
app.use((req, res, next) => {
	res.status(404).json({ error: 'not found' });
});

app.use((err, req, res, next) => {
	res.status(500).json({ error: err.message });
});

module.exports = app;
