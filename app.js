const express = require("express");
const app = express();
const models = require("./models");
const sequelize = require("sequelize");
const cors = require("cors");

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());

app.post("/post-score", async (req, res) => {
  let userName = req.body.userName;
  let wpm = req.body.wpm;
  let point = req.body.point;
  let differences = req.body.differences;
  let words = req.body.words;
  let accuracy = (((words - differences) / words) * 100).toFixed(2);

  let userPoint = await models.leaderboard.build({
    userName: userName,
    wpm: wpm,
    point: point,
    accuracy: accuracy,
  });
  userPoint.save().then(() => {
    res.json({ message: "success" });
  });
});

app.get("/leaderboard", (req, res) => {
  models.leaderboard
    .findAll({
      order: [["point", "DESC"]],
    })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

app.listen(8080, () => {
  console.log("the sercer is running");
});
