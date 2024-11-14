const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Connected to MySQL'))
    .catch(error => console.error('Unable to connect:', error));

module.exports = sequelize;

const sequelize = require('./index');
const User = require('./User');
const Task = require('./Task');
const Category = require('./Category');

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Category, { foreignKey: 'userId' });
Category.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Task, { foreignKey: 'categoryId' });
Task.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = { sequelize, User, Task, Category };