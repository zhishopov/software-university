import { createWriteStream, createReadStream } from "fs";

const readStream = createReadStream(
  "../../../../../../../Users/jivkoslav/Desktop/software-university/JS-Backend/streams-utils/streams/input.txt",
  {
    encoding: "utf-8",
    highWaterMark: 1000,
  }
);
const writeStream = createWriteStream("./output.txt", {
  encoding: "utf-8",
});

readStream.pipe(writeStream);
