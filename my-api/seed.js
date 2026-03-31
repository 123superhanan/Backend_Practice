// seed.js
const connectDB = require('./config/db');
const Course = require('./models/Course');
const Registration = require('./models/Registration');

const seedData = async () => {
  try {
    // Connect to database using your db.js
    await connectDB();
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await Course.deleteMany({});
    await Registration.deleteMany({});

    console.log('✅ Old data cleared.');

    // Sample Courses
    const courses = [
      {
        courseCode: 'CS101',
        title: 'Introduction to Programming',
        description:
          'Learn fundamentals of programming using JavaScript and Python. Perfect for beginners.',
        instructor: 'Dr. Ahmed Khan',
        credits: 3,
        capacity: 40,
        schedule: 'Monday & Wednesday 09:00 AM',
      },
      {
        courseCode: 'CS202',
        title: 'Database Systems',
        description: 'Master SQL, NoSQL databases, and database design principles.',
        instructor: 'Prof. Sara Malik',
        credits: 4,
        capacity: 35,
        schedule: 'Tuesday & Thursday 11:00 AM',
      },
      {
        courseCode: 'CS305',
        title: 'Web Development with MERN',
        description: 'Build full-stack web applications using MongoDB, Express, React & Node.js.',
        instructor: 'Mr. Usman Ali',
        credits: 3,
        capacity: 30,
        schedule: 'Monday & Wednesday 02:00 PM',
      },
      {
        courseCode: 'CS401',
        title: 'Data Structures & Algorithms',
        description:
          'Learn essential data structures and algorithms for problem solving and interviews.',
        instructor: 'Dr. Fatima Hassan',
        credits: 4,
        capacity: 25,
        schedule: 'Tuesday & Thursday 01:00 PM',
      },
    ];

    const insertedCourses = await Course.insertMany(courses);

    console.log(`🎉 Successfully seeded ${insertedCourses.length} courses!`);
    console.log('\n✅ Now go to: http://localhost:3000');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding Error:', error.message);
    process.exit(1);
  }
};

// Run the seeding
seedData();
