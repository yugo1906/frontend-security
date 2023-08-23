const express = require("express");
const api = require("./routes/api");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/api", api);

app.get("/", (req, res, next) => {
  res.end();
});

app.get("/csp", (req, res) => {
  res.render("csp");
});

// サーバーを起動する
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
