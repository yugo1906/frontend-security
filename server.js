const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.end();
});

// サーバーを起動する
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
