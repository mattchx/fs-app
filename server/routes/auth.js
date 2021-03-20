const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.send("Rendering file")
})


router.post('/signup', (req, res) => {
    res.send('Signup')
})

module.exports = router