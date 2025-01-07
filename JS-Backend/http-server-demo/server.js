import http from "http";

const server = http.createServer((request, response) => {
  console.log("HTTP Request");

  // Get url from request
  const url = request.url;

  // Simple Routing
  if (url === "/") {
    response.write("Hello World!");
  } else if (url === "/cats") {
    response.write("Cats Page!");
  }

  response.end();
});

server.listen(3000);
console.log("Server listening on http://localhost:3000...");
