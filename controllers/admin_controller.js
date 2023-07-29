const User = require("../models/userSchema");
const Performance = require("../models/performanceSchema");

module.exports.admin = async function (req, res) {
  try {
    const employees = await User.find({});
    return res.render("admin_home", {
      title: "Employee Review System  | Admin Dashboard",
      employees: employees,
    });
  } catch (err) {
    console.log(`Error in finding the Employee ${err}`);
    return res.render("back");
  }
};

module.exports.addEmployee = function (req, res) {
  return res.render("user_sign_up_employee", {
    title: "Employee Review System  | Add Employee",
  });
};

module.exports.createEmployee = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    req.flash("error", "Password Doesn't Match");
    console.log("Password Doesn't Match");
    return res.redirect("back");
  }

  try {
    let user = await User.findOne({ email: req.body.email });
    let empID = await User.findOne({ employeeID: req.body.employeeID });
    // console.log(req.body);
    if (!user) {
      try {
        if (!empID) {
          await User.create({
            employeeID: req.body.employeeID,
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            isAdmin: req.body.isAdmin,
          });
          req.flash("success", "Employee Successfully Created");
          return res.redirect("/");
        } else {
          req.flash("error", "Employee ID is not Unique");
          return res.redirect("back");
        }
      } catch (err) {
        console.log("Error in creating Employee", err);
        return res.redirect("back");
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

module.exports.update = async function (req, res) {
  const id = req.params.id;
  // Access the employeeID from req.body using the name attribute with employee._id
  const employeeID = req.body[`employeeID_${id}`];
  const name = req.body[`name_${id}`];
  const email = req.body[`email_${id}`];
  console.log(`Employee ID for ${id}: ${employeeID} || ${name} || ${email}`);

  try {
    if (employeeID) {
      await User.updateOne({ _id: id }, { employeeID: employeeID });
    }
    if (name) {
      await User.updateOne({ _id: id }, { name: name });
    }

    if (email) {
      await User.updateOne({ _id: id }, { email: email });
    }
    req.flash("success", "Updated Successfully");
    return res.redirect("back");
  } catch (err) {
    req.flash("error", "Unable to Update");
    console.log("Error in updating", err);
    return res.redirect("back");
  }
};

module.exports.updateToAdmin = async function (req, res) {
  console.log(req.params);
  const id = req.params.id;
  console.log("This is update to Admin");
  try {
    const emp = await User.updateOne({ _id: id }, { isAdmin: true });
    console.log(emp);
    return res.redirect("back");
  } catch (err) {
    req.flash("error", "Unable to make the user as Admin");
    console.log("Error in updating to Admin", err);
    return res.redirect("back");
  }
};

module.exports.updateToUser = async function (req, res) {
  const id = req.params.id;
  try {
    const emp = await User.updateOne({ _id: id }, { isAdmin: false });
    // console.log(emp);
    return res.redirect("back");
  } catch (err) {
    req.flash("error", "Unable to make the admin as User");
    console.log("Error in updating to User", err);
    return res.redirect("back");
  }
};

module.exports.deleteUser = async function (req, res) {
  //   console.log(req.params.id);
  //   console.log(req.body);
  const id = req.params.id;
  const adminId = req.params.adminId;
  try {
    const user = await User.findById(id);
    // const perfomace = await Performance.find({ reviewer: id });
    const admin = await User.findById(adminId);
    if (!user) {
      req.flash("error", "User not found");
      return res.redirect("back");
    }

    // console.log(perfomace.id);
    await Performance.deleteMany({ employee: user });

    await Performance.updateMany(
      { reviewer: id },
      { $set: { reviewer: adminId } }
    );

    await User.deleteOne({ _id: id });

    req.flash("success", "User deleted successfully");
    return res.redirect("back");
  } catch (err) {
    req.flash("error", "Unable to delete");
    console.log("Error in deleting the User", err);
    return res.redirect("back");
  }
};
