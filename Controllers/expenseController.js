const { where } = require("sequelize");
const db = require("../Models/index");
const expenses = db.expenses;

const home = (req, res) => {
  res.render("index.ejs");
};

const postExpense = async (req, res) => {
  var { expenseName, amount, category } = req.body;
  var data = await expenses.create({
    expenseName,
    amount,
    category,
  });
  res.redirect("/show");
};

const showExpense = async (req, res) => {
  const data = await expenses.findAll();
  res.render("show.ejs", { data });
};

const deleteExpense = async (req, res) => {
  var id = req.params.id;
  await expenses.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/show");
};

const editexpense = async (req, res) => {
  var id = req.params.id;
  var data = await expenses.findOne({
    where: {
      id: id,
    },
  });
  res.render("edit.ejs", { data });
};

const updatexpense = async (req, res) => {
  var id = req.params.id;
  var { expenseName, amount, category } = req.body;
  await expenses.update(
    {
      expenseName,
      amount,
      category,
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.redirect("/show");
};
module.exports = {
  postExpense,
  home,
  showExpense,
  deleteExpense,
  editexpense,
  updatexpense,
};
