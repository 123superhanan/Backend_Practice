// const User = require('../models/userModel');

// // Show all users
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find().sort({ createdAt: -1 });
//     res.render('index', { users });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };

// // Show add form
// exports.showAddForm = (req, res) => {
//   res.render('addUser');
// };

// // Add user
// exports.addUser = async (req, res) => {
//   try {
//     await User.create(req.body);
//     res.redirect('/');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error adding user');
//   }
// };

// // === NEW: Show Edit Form ===
// exports.showEditForm = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).send('User not found');

//     res.render('editUser', { user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };

// // === NEW: Update User ===
// exports.updateUser = async (req, res) => {
//   try {
//     await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.redirect('/');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error updating user');
//   }
// };

// // === NEW: Delete User ===
// exports.deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.redirect('/');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error deleting user');
//   }
// };
const User = require('../models/userModel');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

// Get single user
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create user
exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating user',
      error: error.message,
    });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: user,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};