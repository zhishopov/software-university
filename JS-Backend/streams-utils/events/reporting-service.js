import messageBroker from "./message-broker.js";

messageBroker.on("userCreated", userCreated);

function userCreated(username) {
  console.log(`Reporting Service: ${username}`);
}
