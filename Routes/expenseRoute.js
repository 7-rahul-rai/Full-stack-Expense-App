var express = require("express");
var router = express.Router();
const expenseCtrl = require("../Controllers/expenseController");

router.get("/", expenseCtrl.home);
router.get("/show", expenseCtrl.showExpense);

router.post("/expense", expenseCtrl.postExpense);
router.get("/delete/:id", expenseCtrl.deleteExpense);
router.get("/edit/:id", expenseCtrl.editexpense);
router.post("/update/:id", expenseCtrl.updatexpense);

module.exports = router;
