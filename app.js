const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./routes/userRoutes')


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("DB Connection Successfull"));

app.use(cors());
app.use(express.json());

// Add this root route handler
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Node.js Backend</h1>
        <p>Server is running successfully!</p>
    `);
});

app.use('/api/auth', User)



app.listen( process.env.PORT || 5000 , () => {
    console.log("Backend Server is Running")
})