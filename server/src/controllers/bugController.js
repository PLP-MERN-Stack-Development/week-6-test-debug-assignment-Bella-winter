const Bug = require('../models/Bug');

// @desc    Get all bugs
// @route   GET /api/bugs
exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.status(200).json(bugs);
  } catch (err) {
    next(err);
  }
};

// @desc    Create a new bug
// @route   POST /api/bugs
exports.createBug = async (req, res, next) => {
  try {
    const { title, description, status, priority } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    const bug = await Bug.create({ title, description, status, priority });
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
};

// @desc    Update a bug by ID
// @route   PUT /api/bugs/:id
exports.updateBug = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedBug = await Bug.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBug) {
      return res.status(404).json({ error: 'Bug not found' });
    }

    res.status(200).json(updatedBug);
  } catch (err) {
    next(err);
  }
};

// @desc    Delete a bug by ID
// @route   DELETE /api/bugs/:id
exports.deleteBug = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedBug = await Bug.findByIdAndDelete(id);

    if (!deletedBug) {
      return res.status(404).json({ error: 'Bug not found' });
    }

    res.status(200).json({ message: 'Bug deleted successfully' });
  } catch (err) {
    next(err);
  }
};
