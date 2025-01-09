import { createReadStream } from "fs";

const readStream = createReadStream("./input.html");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("Stream ended !!!");
});
