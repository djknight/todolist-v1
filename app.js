const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//ejs to use the view engine
app.set("view engine", "ejs");

app.get("/", function (req, res) {

  var today = new Date();
//   var currentDay = today.getDay();
//   var day = "";

var options = {
    weekday:"long",
    day:"numeric",
    month:"long"
};
  var day = today.toLocaleDateString("en-US",options);


//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wensday";
//       break;
//     case 4:
//       day = "thursday";
//       break;
//     case 5:
//       day = "friday";
//       break;
//     case 6:
//       day = "saterday";
//       break;
//     default:
//   }
  //ejs file render html
  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("server started");
});
