const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Bug title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Bug description is required'],
    },
    status: {
      type: String,
      enum: ['open', 'in-progress', 'resolved'],
      default: 'open',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;
