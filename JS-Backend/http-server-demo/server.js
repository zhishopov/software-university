import http from "http";

const server = http.createServer((request, response) => {
  console.log("HTTP Request");

  response.write("Hello world");
  response.end();
});

server.listen(3000);
console.log("Server listening on http://localhost:3000...");
