import http from "http";
import { homeView } from "./views/home/index.js";
import { addCatView } from "./views/addCat.js";
import { addBreedView } from "./views/addBreed.js";
import siteCss from "./content/styles/site.css.js";

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === "/styles/site.css") {
    response.writeHead(200, {
      "content-type": "text/css",
    });
    response.write(siteCss);

    return response.end();
  }

  response.writeHead(200, {
    "content-type": "text/html",
  });

  if (url === "/") {
    response.write(homeView);
  } else if (url === "/cats/add-breed") {
    response.write(addBreedView);
  } else if (url === "/cats/add-cat") {
    response.write(addCatView);
  }

  response.end();
});

server.listen("3000");
console.log("Server listening on http://localhost:3000...");
