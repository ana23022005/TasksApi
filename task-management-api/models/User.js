const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    defaultPriority: { type: DataTypes.STRING, defaultValue: 'normal' }
}, {
    hooks: {
        beforeCreate: async (user) => {
            user.password = await bcrypt.hash(user.password, 10);
        }
    }
});