// const express = require('express');
// const app = express();

// require('./config/db');

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const userRoutes = require('./routes/userRoutes');
// app.use('/', userRoutes);

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
const express = require('express');
const app = express();

require('./config/db'); // Your MongoDB connection

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Important for JSON body in PUT/POST

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes); // All routes prefixed with /api (recommended for APIs)

app.listen(3000, () => {
  console.log('REST API Server running on http://localhost:3000');
});