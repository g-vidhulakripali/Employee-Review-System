const User = require("../models/userSchema");
const Performance = require("../models/performanceSchema");

// Controller function to render the performace page
module.exports.performace = async function (req, res) {
  try {
    const employees = await User.find({});
    const performances = await Performance.find({})
      .populate("employee", "name employeeID")
      .populate("reviewer", "name");
    return res.render("admin_performance_review", {
      title: "Employee Review System  | Employee Performance Review",
      employees: employees,
      performaces: performances,
    });
  } catch (err) {
    console.log("Error in Finding the Employee", err);
    return res.redirect("back");
  }
};

// Controller function to render the addPerformance form page
module.exports.addPerformance = async function (req, res) {
  try {
    const employees = await User.find({});
    return res.render("admin_add_pr", {
      title: "Employee Review System  | Add Employee Performance",
      employees: employees,
    });
  } catch (err) {
    console.log("Error in Finding the Employee", err);
    return res.redirect("back");
  }
};

// Controller function to create Performace
module.exports.createPerformance = async function (req, res) {
  try {
    Performance.create({
      employee: req.body.employee,
      jobKnowledge: req.body.jk,
      qualityOfWork: req.body.qw,
      productivity: req.body.prod,
      communication: req.body.com,
      problemSolving: req.body.ps,
      reviewer: req.params.id,
    });
    req.flash("success", "Performace of Employee is Successfully Created");
    return res.redirect("/admin/perfomace-review");
  } catch (err) {
    console.log("Error in creating the Performace", err);
    return res.redirect("back");
  }
};

// Controller function to updade the employee performace
module.exports.updateEmployeePerformance = async function (req, res) {
  const id = req.params.id;
  // // Access the employeeID from req.body using the name attribute with employee._id
  const jobKnowledge = req.body[`jk_${id}`];
  const qualityOfWork = req.body[`qw_${id}`];
  const productivity = req.body[`prod_${id}`];
  const communication = req.body[`com_${id}`];
  const problemSolving = req.body[`ps_${id}`];
  const reviewer = req.body.employee;

  console.log(jobKnowledge);
  // // Construct the update object with the fields that need to be updated
  const updateObject = {};
  // updateObject.employee = id;
  if (jobKnowledge) updateObject.jobKnowledge = jobKnowledge;
  if (qualityOfWork) updateObject.qualityOfWork = qualityOfWork;
  if (productivity) updateObject.productivity = productivity;
  if (communication) updateObject.communication = communication;
  if (problemSolving) updateObject.problemSolving = problemSolving;
  if (reviewer) updateObject.reviewer = reviewer;

  console.log(updateObject);

  try {
    const updatedPerformance = await Performance.findByIdAndUpdate(
      id,
      updateObject,
      { new: true }
    );
    console.log("Updated Successfully", updatedPerformance);
    req.flash("success", "Updated Successfully");
    return res.redirect("back");
  } catch (err) {
    req.flash("error", "Unable to Update");
    console.log("Error in updating", err);
    return res.redirect("back");
  }
};
