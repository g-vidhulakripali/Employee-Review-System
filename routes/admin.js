const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin_controller");
const adminPerfomaceController = require("../controllers/admin_perfomance_controller");
const passport = require("passport");

router.get("/", adminController.admin);
router.get("/add-employee", adminController.addEmployee);
router.post("/create-employee", adminController.createEmployee);
router.post("/update/:id", adminController.update);
router.get("/update-to-admin/:id", adminController.updateToAdmin);
router.get("/update-to-user/:id", adminController.updateToUser);
router.get("/delete/:id", adminController.deleteUser);

router.get("/perfomace-review", adminPerfomaceController.performace);
router.get("/add-pr", adminPerfomaceController.addPerformance);
router.post("/create-pr/:id", adminPerfomaceController.createPerformance);
router.post(
  "/updatePerformance/:id",
  adminPerfomaceController.updateEmployeePerformance
);

module.exports = router;
