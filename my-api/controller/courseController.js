const Course = require('../models/Course');
const Registration = require('../models/Registration');

// Get all available courses (Home page)
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.render('index', { courses, title: 'Available Courses' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Show registration form for a specific course
exports.showRegisterForm = async (req, res) => {
  try {
    console.log('🔍 Requested Course ID:', req.params.id);

    const course = await Course.findById(req.params.id);

    if (!course) {
      console.log('❌ Course not found with ID:', req.params.id);
      return res.status(404).send(`Course not found.<br><br>
        <strong>Debug Info:</strong><br>
        Requested ID: ${req.params.id}<br>
        <a href="/">Go back to courses</a>`);
    }

    res.render('register', { course, title: 'Register for Course' });
  } catch (error) {
    console.error('Show Register Error:', error.name, error.message);

    if (error.name === 'CastError') {
      return res.status(400).send(`Invalid Course ID: ${req.params.id}<br>
        <a href="/">Go back to All Courses</a>`);
    }

    res.status(500).send('Server Error');
  }
};

// Register student for a course
// Register student for a course
// Register student for a course - IMPROVED
exports.registerCourse = async (req, res) => {
  try {
    console.log('Received Form Data:', req.body); // ← Debug
    console.log('Course ID from URL:', req.params.id); // ← Debug

    const { studentName, studentEmail } = req.body;
    const courseId = req.params.id;

    // Basic validation
    if (!studentName || !studentEmail) {
      return res.status(400).send('Name and Email are required!');
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).send('Course not found. Invalid Course ID.');
    }

    if (course.enrolled >= course.capacity) {
      return res.status(400).send('Sorry, this course is already full!');
    }

    // Create registration
    const registration = await Registration.create({
      studentName: studentName.trim(),
      studentEmail: studentEmail.trim().toLowerCase(),
      course: courseId,
    });

    // Update course enrolled count
    course.enrolled += 1;
    await course.save();

    console.log('Registration successful:', registration);
    res.redirect('/my-courses');
  } catch (error) {
    console.error('Registration Error Details:', error.message);
    console.error('Full Error:', error);
    res.status(500).send('Error registering for course: ' + error.message);
  }
};

// Get student's registered courses
exports.getMyCourses = async (req, res) => {
  try {
    const registrations = await Registration.find({ status: 'registered' })
      .populate('course')
      .sort({ createdAt: -1 });

    res.render('myCourses', {
      registrations,
      title: 'My Registered Courses',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Drop a course (Update registration status)
exports.dropCourse = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) return res.status(404).send('Registration not found');

    const course = await Course.findById(registration.course);

    registration.status = 'dropped';
    await registration.save();

    // Decrease enrolled count
    if (course) {
      course.enrolled = Math.max(0, course.enrolled - 1);
      await course.save();
    }

    res.redirect('/my-courses');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error dropping course');
  }
};
// ======================
// REST API Functions (JSON Response)
// ======================

// Get all courses as JSON (API)
exports.getAllCoursesAPI = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single course by ID (API)
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
