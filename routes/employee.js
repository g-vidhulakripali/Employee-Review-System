const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin_controller");
const passport = require("passport");

router.get("/", adminController.admin);
