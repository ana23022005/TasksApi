const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Category = sequelize.define('Category', {
    name: DataTypes.STRING
});

module.exports = Category;