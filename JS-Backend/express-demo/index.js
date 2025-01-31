import express from "express";

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

app.listen(3000, () =>
  console.log("Server is listening on http://localhost:3000...")
);
