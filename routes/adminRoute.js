const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { ensureAuthenticated, forwardAuthenticated } = require("../middleware/checkAuth");
const session = require("express-session");


//localhost:8000/admin
router.get('/adminAccess', ensureAuthenticated, adminController.home)
router.get('/adminAccess', forwardAuthenticated)


module.exports = router