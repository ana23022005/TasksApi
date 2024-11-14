const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    dueDate: DataTypes.DATE,
    status: { type: DataTypes.STRING, defaultValue: 'pendente' },
    priority: DataTypes.STRING
});

module.exports = Task;
