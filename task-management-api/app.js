const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

module.exports = app;