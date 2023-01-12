const express = require("express");
const { body, validationResult } = require('express-validator');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/TrainPNR",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Database connected");
    else console.log("Database error");
  }
);

const Schema = {
    BookedFrom: String,
    BoardingAt: String,
    To: String,
    PNR: String,
    TrainNoName: Number, String,
    class: String,  
    Name: String,
    Age: Number,
    Gender: String,
    coch: String,
    berthnotype:Number, String,
    Details:String,
  
};
const monmodel = mongoose.model("NEWCOL", Schema);


app.get('/fetch', function (req, res) {
    // fetchid = req.params.ID;
    monmodel.find(({  }),function (err, val) {
        res.send(val);
    })
})



app.get("/fetch/:PNR", (req, res, next) => {
    const id = req.params.PNR;
    monmodel.find({ PNR: id } )
      .populate("PNR")
      .exec()
      .then((docs) => {
        // res.status(200).json(docs);
        res.send(docs)
          
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
});


app.listen(3000, (req, res) => {
  console.log('Express API is running at port 3000');
})




