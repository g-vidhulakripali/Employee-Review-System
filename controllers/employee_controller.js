const Performance = require("../models/performanceSchema");

// Controller function to render employee home page
module.exports.employee = async function (req, res) {
  try {
    const performaces = await Performance.find({})
      .populate("employee", "name employeeID")
      .populate("reviewer", "name");
    return res.render("employee_home", {
      title: "Employee Review System  | Employee Dashboard",
      performaces: performaces,
    });
  } catch (err) {
    console.log(`Error in finding the Performace ${err}`);
    return res.render("back");
  }
};

// Controller function to render the employee review page
module.exports.employeeReview = async function (req, res) {
  try {
    const performaces = await Performance.find({})
      .populate("employee", "name employeeID")
      .populate("reviewer", "name");
    return res.render("employee_performance_review", {
      title: "Employee Review System  | Employee FeedBack",
      performaces: performaces,
    });
  } catch (err) {
    console.log(`Error in finding the Performace ${err}`);
    return res.render("back");
  }
};

// Controller function to add feedback
module.exports.addFeedback = async function (req, res) {
  try {
    await Performance.updateOne(
      { _id: req.params.id },
      { feedback: req.body.feedback }
    );
    req.flash("success", "Updated Successfully");
    return res.redirect("back");
  } catch (err) {
    req.flash("error", "Unable to Update");
    console.log("Error in updating", err);
    return res.redirect("back");
  }
};
