class usersCtrl {
  index = (req, res) => {
    res.render("index", { title: "Users" });
  };
}

module.exports = new usersCtrl();
