'use strict';

const userModel = require('./user.js');
const itemModel = require('./item.js');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:memory';

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
	db: sequelize,
	users: userModel(sequelize, DataTypes),
	listItem: itemModel(sequelize, DataTypes)
};
