// Controller function to render the home page with a list of all students
module.exports.home = async function (req, res) {
  return res.render("home", {
    title: "Employee Review System | Home",
  });
};
