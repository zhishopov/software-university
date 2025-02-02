import express from "express";
import path from "path";

const app = express();

/* MIDDLEWARE */
// Application Middleware
app.use((request, response, next) => {
  console.log(request.url);
  next();
});

// Route Middleware
app.use("/auth", (request, response, next) => {
  if (Math.random() < 0.5) {
    next();
  } else {
    response.status(401).send("Unauthorized");
  }
});

app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.get("/cats", (request, response) => {
  response.send("Cats Page!");
});

app.get("*", (request, response) => {
  response.send("Page Not Found!");
});

// Paths can have params
// Express automatically stores the param in the request as a object
app.get("/cats/:catId", (request, response) => {
  const catId = request.params.catId;
  response.send(`Cat Page | ${catId}`);
});

// Downlaod a file
app.get("/download", (request, response) => {
  response.download("./cat.jpeg");
});

app.get("/download2", (requset, response) => {
  response.sendFile(path.resolve("./cat.jpeg"));
});

// Working with json
app.get("/data", (request, response) => {
  response.json({
    name: "Data",
    grades: [1, 2, 3, 4, 5],
  });
});

// Using redirect
app.get("/redirect", (request, response) => {
  if (Math.random() < 0.5) {
    response.redirect("/");
  } else {
    response.redirect("/404");
  }
});

app.get("/auth/profile", (request, response) => {
  response.send("Profile Page!");
});

app.listen(3000, () =>
  console.log("Server is listening on http://localhost:3000...")
);
