'use strict';

const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const v1routes = require('./routes/v1routes');
const v2routes = require('./routes/v2routes');

// middleware
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const { db, users, listItem } = require('./models/index.js')

// Prepare the express app
const app = express();

// app.use(cors());
// app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);
app.use(validator);

// Models
app.use(users);
app.use(listItem);

// Routes
app.use(v1routes);
app.use(v2routes);

// Catchalls
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
	server: app,
	start: (port) => {
		app.listen(port, () => {
			console.log(`Server Up on ${port}`);
		});
	},
};

