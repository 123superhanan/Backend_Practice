const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    status: { type: String, enum: ['registered', 'dropped'], default: 'registered' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Registration', registrationSchema);
