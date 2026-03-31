const express = require('express');
const router = express.Router();
const courseController = require('../controller/courseController');

// ======================
// MVC Routes (Web Pages)
// ======================

// Home - Show all available courses
router.get('/', courseController.getAllCourses);

// Show registration form for a course
router.get('/register/:id', courseController.showRegisterForm);

// Handle course registration (Form Submit)
router.post('/register/:id', courseController.registerCourse);

// Show student's registered courses
router.get('/my-courses', courseController.getMyCourses);

// Drop a registered course
router.post('/drop/:id', courseController.dropCourse);

// ======================
// Optional REST API Routes (for future use)
// ======================

// REST API - Get all courses
router.get('/api/courses', courseController.getAllCoursesAPI);

// REST API - Get single course
router.get('/api/courses/:id', courseController.getCourseById);

// You can add more API routes later (Create Course, Update Course, etc.)

module.exports = router;
