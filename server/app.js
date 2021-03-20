const express = require('express');
const app = express();

// Import Routes
 const authRoute = require('./routes/auth');

// Route Middlewares
 app.use('/api/user', authRoute);
 
// app.get('/', (req, res) => {
//     res.send('hello world')
// })
app.listen(3000, () => console.log('Server is live @ 3000'));
