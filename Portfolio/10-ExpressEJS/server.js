const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); 
app.set("view engine", "ejs"); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
let posts = [];
let name = "";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

app.get("/login", (req, res) => {
  name = req.query.name;
  res.send(`Hola, ${name}. Has accedido usando GET.`);
});

app.post("/login", (req, res) => {
  name = req.body.name;
  res.send(`Hola, ${name}. Has accedido usando POST.`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

