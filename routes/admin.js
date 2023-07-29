const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin_controller");
const passport = require("passport");

router.get("/", adminController.admin);
router.get("/add-employee", adminController.addEmployee);
router.post("/create-employee", adminController.createEmployee);
router.post("/update/:id", adminController.update);
router.get("/update-to-admin/:id", adminController.updateToAdmin);
router.get("/update-to-user/:id", adminController.updateToUser);
router.get("/delete/:id", adminController.deleteUser);

module.exports = router;
