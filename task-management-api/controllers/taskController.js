const { Task } = require('../models');

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, userId: req.user.id });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
