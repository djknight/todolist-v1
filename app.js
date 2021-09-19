const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//items to render html item array
let items = ["Buy food","Cook food"];

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
  res.render("list", { kindOfDay: day, newListItem: items });
});
//post newItem function item
app.post("/", function (req, res) {
  let item = req.body.newItem;
  //array use
  items.push(item);
  //redirect for item home
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server started");
});
