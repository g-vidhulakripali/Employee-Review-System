const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users_controller");
const passport = require("passport");

// User Sign Up route
router.get("/sign-up", usersController.signUp);

// User Sign In route
router.get("/sign-in", usersController.signIn);

// User Sign Out route
router.get("/sign-out", usersController.destroySession);

// Create User route
router.post("/create", usersController.create);

// Create User Session route using passport as middleware for authentication
router.post(
  "/create-session",
  passport.authenticate("local", {
    failureRedirect: "/users/sign-in",
  }),
  usersController.createSession
);

module.exports = router;
