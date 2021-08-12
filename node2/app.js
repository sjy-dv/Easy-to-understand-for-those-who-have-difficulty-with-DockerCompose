const app = require("express")();

app.get("/", (req, res) => {
  res.send("hello world - this node2 app");
});

app.listen(3001);
