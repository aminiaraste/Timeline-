const express = require('express');
const router = express.Router();
const userController = require('../controler/controlerfile');
router.get('/' , userController.homepage ); // Route for the homepage

module.exports = router; // Export the router to be used in the main app file