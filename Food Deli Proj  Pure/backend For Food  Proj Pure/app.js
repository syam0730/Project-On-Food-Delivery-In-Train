const express = require("express");
const { body, validationResult } = require('express-validator');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/FoodMenu",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Database connected");
    else console.log("Database error");
  }
);

const Schema = {
  // Id: Number,
  Name: String,
  Cost: Number,
  Details:String,
  
};
const monmodel = mongoose.model("NEWCOL", Schema);


app.post("/postData", async (req, res) => {
  console.log("inside post function");

  const data = new monmodel({
    // Id: Number,
    Name:req.body.Name,
    Cost: req.body.Cost,
    Details:req.body.Details,
  });

  res.send({
      status: 200,
      message: "Data Saved Successfully"
  })
  const val = await data.save();
  res.json(val);
})



app.get('/fetch', function (req, res) {
  // fetchid = req.params.ID;
  monmodel.find(({  }),function (err, val) {
      res.send(val);
  })
})


app.listen(3000, (req, res) => {
  console.log('Express API is running at port 3000');
})










// app.get('/fetch', function (req, res) {
//   // fetchid = req.params.ID;
//   monmodel.find(({  }),function (err, val) {
//       res.send(val);
//   })
// })