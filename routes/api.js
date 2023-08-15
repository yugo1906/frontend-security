const express = require("express");
const router = express.Router();
const getCurrentTimestamp = require("../utils/current_timestamp");

router.get("/", (req, res) => {
  res.setHeader("X-Timestamp", getCurrentTimestamp());
  let message = req.query.message;
  const lang = req.headers["x-lang"];

  if (message === "") {
    res.status(400);
    if (lang === "en") {
      message = "message is empty.";
    } else {
      message = "messageの値が空です。";
    }
  }
  res.send({ message });
});

router.use(express.json());
router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
})

module.exports = router;