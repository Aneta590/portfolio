const express = require("express");
const jwt=require("jsonwebtoken")
const app = express();
const cors = require("cors");
//defalt for http is 80 for HEROKU
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20C",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);
app.use(express.static("/frontend/build"));
app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
const User = require("./model");

const secret="gftazeuhd"
const achievements = [
  {
    title: "Portfolio",
    description:
      "J'ai développe mon portfolio et déployé en ligne cette application basée sur un backend express et un frontend React.",
    image:
      "https://studyadv.s3.amazonaws.com/production/blogs/images/000/000/635/original/maxresdefault.jpg",
  },
];

app.get("/api/achievements", (req, res) => {
  res.json(achievements);
});

// app.post("/api/achievements", (req, res) => {
//   res.json(achievements);
// });
app.post("/api/auth", async (req, res) => {
  const user = await User.find({ username: req.body.username });
  if(user){
   const token= jwt.sign({user},secret)
  res.json({token})
  }else {res.json({success:false, })}
  
});
