const express = require('express');
const { createTask } = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createTask);

module.exports = router;