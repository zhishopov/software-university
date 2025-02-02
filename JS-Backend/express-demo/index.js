import express from "express";
import path from "path";

const app = express();

/* MIDDLEWARE */
// Application Middleware
app.use((request, response, next) => {
  console.log(request.url);
  next();
});

// Path Middleware
app.use("/auth", (request, response, next) => {
  // Ignore the check. Used for simulation purposes.
  if (Math.random() < 0.5) {
    next(); // Valid user :)
  } else {
    response.status(401).send("Unauthorized");
  }
});

// Route Middleware
app.get(
  "/users",
  (request, response, next) => {
    console.log("Route middleware");
    next();
  },
  (request, response) => {
    response.send("Users Page!");
  }
);

app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.get("/cats", (request, response) => {
  response.send("Cats Page!");
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

app.get("*", (request, response) => {
  response.send("Page Not Found!");
});

app.listen(3000, () =>
  console.log("Server is listening on http://localhost:3000...")
);
