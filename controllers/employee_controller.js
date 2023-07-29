const Performance = require("../models/performanceSchema");

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

module.exports.addFeedback = async function (req, res) {
  // console.log(req.body);
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
