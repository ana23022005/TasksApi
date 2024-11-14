require('dotenv').config();
const { sequelize } = require('./models');
const app = require('./app');

sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log("Server running...");
    });
}).catch(error => console.log(error));