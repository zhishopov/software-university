import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.get("/cats", (request, response) => {
  response.send("Cats Page!");
});

app.listen(3000, () =>
  console.log("Server is listening on http://localhost:3000...")
);
