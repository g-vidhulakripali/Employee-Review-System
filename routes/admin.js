const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin_controller");
const adminPerfomaceController = require("../controllers/admin_perfomance_controller");
const passport = require("passport");

router.get("/", passport.checkAdminAccess, adminController.admin);
router.get(
  "/add-employee",
  passport.checkAdminAccess,
  adminController.addEmployee
);
router.post(
  "/create-employee",
  passport.checkAdminAccess,
  adminController.createEmployee
);
router.post("/update/:id", passport.checkAdminAccess, adminController.update);
router.get(
  "/update-to-admin/:id",
  passport.checkAdminAccess,
  adminController.updateToAdmin
);
router.get(
  "/update-to-user/:id",
  passport.checkAdminAccess,
  adminController.updateToUser
);
router.get(
  "/delete/:id/deleteBy/:adminId",
  passport.checkAdminAccess,
  adminController.deleteUser
);

router.get(
  "/perfomace-review",
  passport.checkAdminAccess,
  adminPerfomaceController.performace
);
router.get(
  "/add-pr",
  passport.checkAdminAccess,
  adminPerfomaceController.addPerformance
);
router.post(
  "/create-pr/:id",
  passport.checkAdminAccess,
  adminPerfomaceController.createPerformance
);
router.post(
  "/updatePerformance/:id",
  passport.checkAdminAccess,
  adminPerfomaceController.updateEmployeePerformance
);

module.exports = router;
