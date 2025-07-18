const express = require('express');
const router = express.Router();
const {
  getBugs,
  createBug,
  updateBug,
  deleteBug
} = require('../controllers/bugController');

// Route: GET all bugs & POST new bug
router.route('/')
  .get(getBugs)        // GET /api/bugs
  .post(createBug);    // POST /api/bugs

// Route: PUT update bug & DELETE bug by ID
router.route('/:id')
  .put(updateBug)      // PUT /api/bugs/:id
  .delete(deleteBug);  // DELETE /api/bugs/:id

module.exports = router;
