const User = require("../models/userSchema");

// Controller function to render the sign-up form page
module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  return res.render("user_sign_up", {
    title: "Employee Review System  | Sign Up",
  });
};

// Controller function to render the sign-in form page
module.exports.signIn = function (req, res) {
  console.log(req.body);
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  return res.render("user_sign_in", {
    title: "Employee Review System  | Sign In",
    message: req.flash("error")[0],
  });
};

// Controller function to create a new user account
module.exports.create = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    req.flash("error", "Password Doesn't Match");
    console.log("Password Doesn't Match");
    return res.redirect("back");
  }

  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      try {
        await User.create({
          employeeID: req.body.employeeID,
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
          isAdmin: false,
        });
        req.flash("success", "Account Successfully Created");
        return res.redirect("/users/sign-in");
      } catch (err) {
        console.log("Error in creating user while signing up", err);
        return;
      }
    } else {
      req.flash("error", "Account Already Exists");
      return res.redirect("back");
    }
  } catch (err) {
    console.log("Error in finding user in signing up", err);
    return;
  }
};
// Controller function to create a user session (user login)
module.exports.createSession = function (req, res) {
  req.flash("success", "Logged in Successfully");
  return res.redirect("/");
};

// Controller function to destroy a user session (user logout)
module.exports.destroySession = function (req, res) {
  req.logout(function (err) {
    if (err) {
      req.flash("error", "Unable to Logout!");
      console.log("Error in the user controller", err);
      return res.redirect("back");
    }
  });
  req.flash("success", "Logged Out!");
  return res.redirect("/");
};
