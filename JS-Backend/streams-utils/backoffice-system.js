import http from "http";

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === "/") {
    response.write("Home Page");
  } else if (url === "/create-user") {
    response.write("User Created");
  } else {
    response.write("Not Found!");
  }

  response.end();
});

server.listen(3000);
console.log("Server is listening on http://localhost:3000...");
