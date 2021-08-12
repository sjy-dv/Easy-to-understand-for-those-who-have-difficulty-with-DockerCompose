const app = require("express")();

app.get("/", (req, res) => {
  res.send("hello world - this node1 app");
});

app.listen(3000);
