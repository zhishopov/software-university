import express from "express";
import path from "path";

const app = express();

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

app.listen(3000, () =>
  console.log("Server is listening on http://localhost:3000...")
);
