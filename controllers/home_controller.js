// Controller function to render the home page
module.exports.home = async function (req, res) {
  return res.render("home", {
    title: "Employee Review System | Home",
  });
};
