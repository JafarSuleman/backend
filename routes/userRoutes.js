const express = require('express');
const router = express.Router();
const { RegisterUser, LoginUser } = require('../controllers/Auth');

router.post('/register-user', RegisterUser);
router.post('/login', LoginUser);

module.exports = router;  // Export the router


