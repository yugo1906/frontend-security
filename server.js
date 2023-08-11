const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  // 引数はレスポンスbodyにして、レスポンスを返す
  res.end("Top Page: Hello World!");
});

// サーバーを起動する
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
