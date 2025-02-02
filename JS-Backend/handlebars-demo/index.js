import express from "express";
import handlebars from "express-handlebars";

const app = express();

// Add handlebars engine to express and set it as default
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", { layout: false });
});

app.listen(2000, () =>
  console.log("Server listening on http://localhost:2000...")
);
