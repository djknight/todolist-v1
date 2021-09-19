const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//items to render html item array
let items = ["Buy food", "Cook food"];

// work items for the workpage line of code
let workItems = [];

//ejs to use the view engine
app.set("view engine", "ejs");

//bodyParser for newItem
app.use(bodyParser.urlencoded({ extended: true }));

//css
app.use(express.static("public"));
app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);

  //ejs file render html
  res.render("list", { listTitle: day, newListItem: items });
});

//post newItem function item
app.post("/", function (req, res) {
  let item = req.body.newItem;

  //work + post req
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

//workpage
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItem: workItems });
});

app.listen(3000, function () {
  console.log("server started");
});
