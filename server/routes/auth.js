const express = require('express');
const router = express.Router();
const User = require('../model/User');
const { signupValidation, loginValidation } = require('../validation');
const bcrypt = require('bcrypt');

// SIGN UP
router.post('/signup', async (req, res) => {
  const { error } = signupValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user exists in DB
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send('Email already exists.');

  // Has password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.status(200).send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// LOG IN
router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

   // Check if user exists in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email does not exist.');

  // Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send('Invalid password');

  res.send('Logged in')
});

module.exports = router;
