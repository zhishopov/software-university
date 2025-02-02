import express from "express";
import handlebars from "express-handlebars";

import cats from "./cats.js";

const app = express();

// Add handlebars engine to express and set it as default
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", { cat: cats[0] });
});

app.get("/add-cat", (req, res) => {
  res.render("addCat");
});

app.get("/add-breed", (req, res) => {
  res.render("addBreed");
});

app.listen(2000, () =>
  console.log("Server listening on http://localhost:2000...")
);
