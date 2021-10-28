'use strict';

const itemModel = (sequelize, DataTypes) => sequelize.define('Item', {
	name: { type: DataTypes.STRING, required: true },
	quantity: { type: DataTypes.STRING, required: false },
	category: { type: DataTypes.STRING, required: false }
});

module.exports = itemModel;
