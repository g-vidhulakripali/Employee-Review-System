const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee_controller");
const passport = require("passport");

router.get("/", employeeController.employee);
router.get("/perfomace-review", employeeController.employeeReview);
router.post("/addFeedback/:id", employeeController.addFeedback);

module.exports = router;
