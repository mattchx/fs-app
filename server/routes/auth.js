const express = require('express');
const router = express.Router();
const User = require('../model/User');
const { signupValidation } = require('../validation');
const bcrypt = require('bcrypt');

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
    res.status(200).send({user: user._id});
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
