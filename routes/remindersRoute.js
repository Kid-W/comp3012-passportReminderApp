const express = require("express");
const router = express.Router();
const reminderController = require("../controllers/reminder_controller");
const { ensureAuthenticated } = require("../middleware/checkAuth");


//localhost:8000/reminder

router.get("/new",ensureAuthenticated, reminderController.new);
router.get("/:id",ensureAuthenticated, reminderController.listOne);
router.get("/:id/edit",ensureAuthenticated, reminderController.edit);
router.post("/",ensureAuthenticated, reminderController.create);
router.post("/update/:id", ensureAuthenticated, reminderController.update)
router.post("/delete/:id", ensureAuthenticated, reminderController.delete);

module.exports = router