// const express = require('express');
// const router = express.Router();
// const userController = require('../controller/userController');

// // GET Routes
// router.get('/', userController.getUsers); // List all users
// router.get('/add', userController.showAddForm); // Show add form

// // New Routes for Update & Delete
// router.get('/edit/:id', userController.showEditForm); // Show edit form
// router.post('/edit/:id', userController.updateUser); // Handle update
// router.post('/delete/:id', userController.deleteUser); // Handle delete

// // POST for Create
// router.post('/users', userController.addUser);

// module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// RESTful Routes
router.get('/users', userController.getUsers); // GET all users
router.post('/users', userController.addUser); // CREATE user

router.put('/users/:id', userController.updateUser); // UPDATE user
router.delete('/users/:id', userController.deleteUser); // DELETE user

// Optional: GET single user
router.get('/users/:id', userController.getUserById);

module.exports = router;