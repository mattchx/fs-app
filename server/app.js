const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3001 
// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')
// const cors = require('cors')

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB')
);

// Middleware
app.use(express.json());
//app.use(cors())

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute)

// app.get('/', (req, res) => {
//     console.log("We got it!")
//     res.send("We got it!")
//     next()
// })

app.listen(PORT, () => console.log(`Server is live @ ${PORT}`));
