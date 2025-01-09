import http from "http";
import messageBroker from "./message-broker.js";

import "./audit-system.js";
import "./reporting-service.js";

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === "/") {
    response.write("Home Page");
  } else if (url === "/create-user") {
    messageBroker.publish("userCreated", "Pesho");
    response.write("User created");
  } else if (url === "/delete-user") {
    messageBroker.publish("userDeleted", "Ivan");
    response.write("User deleted");
  } else {
    response.write("Not Found!");
  }

  response.end();
});

server.listen(3000);
console.log("Server is listening on http://localhost:3000...");
