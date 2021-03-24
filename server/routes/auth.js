// Dependency imports
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Local imports
const User = require('../model/User');
const { signupValidation, loginValidation } = require('../validation');
const { response } = require('express');

// SIGN UP
router.post('/signup', async (req, res) => {
  console.log(req.body);
  const { error } = signupValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user exists in DB
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send({ error: 'Email already exists.' });
  console.log('we made it this far');

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
    res.status(200).send({ user: user._id }).redirect('http://localhost:3000/login')
  } catch (err) {
    res.status(400).send(err);
  }
});

// LOG IN
router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.send({error: error.details[0].message});

  // Check if user exists in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({error:'Email does not exist.'});

  // Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send({error:'Invalid password'});

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
});

module.exports = router;
