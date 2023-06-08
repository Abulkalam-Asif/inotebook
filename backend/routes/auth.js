const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = 'Harryisagoodb$oy';

// ROUTE 1: Create a user using : POST "/api/auth/creteuser". No login required
router.post('/createuser', [
  body('name', "Enter a valid name").isLength({ min: 3 }),
  body('email', "Enter a valid email").isEmail(),
  body('password', "Password must be at least 5 characters long").isLength({ min: 5 })
], async (req, res) => {
  // If there are errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  // Check whether the user with the same email exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success: false, error: "Sorry, a user with this email already exists!" });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });
    const data = {
      user: {
        id: user.id
      }
    };
    const authtoken = jwt.sign(data, JWT_SECRET)
    res.json({ success: true, message: "Signed up successfully!", authtoken });
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ success: false, error: "Internal server error occurred" });
  }
})


// ROUTE 2: Authenticate a user using : POST "/api/auth/login". No login required
router.post('/login', [
  body('email', "Enter a valid email").isEmail(),
  body('password', "Password cannot be blank").exists(),
], async (req, res) => {
  // If there are errors, return bad request and the errors
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log(errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, error: 'Please login with correct credentials' });
    }
    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) {
      return res.status(400).json({ success: false, error: 'Please login with correct credentials' });
    }
    const data = {
      user: {
        id: user.id
      }
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ success: true, message: "Logged in Successfully!", authtoken });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal server error occurred!" });
  }
})

// ROUTE 3: Get logged in user details : POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json({ success: true, user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Internal server error occurred" });
  }
})

module.exports = router;