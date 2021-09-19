const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//ejs to use the view engine
app.set("view engine", "ejs");
//bodyParser for newItem
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {

  var today = new Date();

var options = {
    weekday:"long",
    day:"numeric",
    month:"long"
};
  var day = today.toLocaleDateString("en-US",options);

  //ejs file render html
  res.render("list", { kindOfDay: day });
});
//post newItem function
app.post("/",function(req, res){
    var item = req.body.newItem;
    console.log(item);
});

app.listen(3000, function () {
  console.log("server started");
});
