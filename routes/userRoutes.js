const express = require('express');
const router = express.Router();
const { RegisterUser } = require('../controllers/Auth');

router.post('/register-user', RegisterUser);

module.exports = router;  // Export the router


