const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee_controller");
const passport = require("passport");

// Employee Dashboard route
router.get("/", passport.checkAuthentication, employeeController.employee);

// Employee Performance Review route
router.get(
  "/perfomace-review",
  passport.checkAuthentication,
  employeeController.employeeReview
);

// Add Feedback route
router.post(
  "/addFeedback/:id",
  passport.checkAuthentication,
  employeeController.addFeedback
);

module.exports = router;
