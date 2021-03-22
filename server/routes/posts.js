const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
  res.send(req.user)
//   res.json({
//     posts: {
//       title: 'my first post',
//       desc: 'only for logged in users to see',
//     },
//   });
});

module.exports = router;
