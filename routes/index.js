const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");
const passport = require("passport");

console.log("router loaded");

// Home route
router.get("/", passport.checkAuthentication, homeController.home);

// Users routes
router.use("/users", require("./users"));
router.use("/admin", require("./admin"));
router.use("/employee", require("./employee"));

// 404 route - Page Not Found
router.use((req, res) => {
  return res.status(404).render("404", {
    title: "Employee Review System  | 404",
  });
});

module.exports = router;
