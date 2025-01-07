import http from "http";

const server = http.createServer((request, response) => {
  const url = response.url;

  response.writeHead(200, {
    "content-type": "text/plain",
  });

  response.end();
});

server.listen("3000");
console.log("Server listening on http://localhost:3000...");
