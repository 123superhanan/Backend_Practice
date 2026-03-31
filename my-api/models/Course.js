const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    courseCode: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    credits: { type: Number, required: true },
    capacity: { type: Number, required: true },
    enrolled: { type: Number, default: 0 },
    schedule: { type: String }, // e.g., "Mon-Wed 10:00 AM"
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
