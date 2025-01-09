import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream("./input.txt", {
  encoding: "utf-8",
  highWaterMark: 1000,
});
const writeStream = createWriteStream("./output.txt", {
  encoding: "utf-8",
});

readStream.pipe(writeStream);
