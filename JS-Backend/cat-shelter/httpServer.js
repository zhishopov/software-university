import http from "http";
import { homeView } from "./views/home/index.js";
import { addCatView } from "./views/addCat.js";

const server = http.createServer((request, response) => {
  const url = request.url;

  response.writeHead(200, {
    "content-type": "text/html",
  });

  if (url === "/") {
    response.write(homeView);
  } else if (url === "/cats/add-cat") {
    response.write(addCatView);
  }

  response.end();
});

server.listen("3000");
console.log("Server listening on http://localhost:3000...");
