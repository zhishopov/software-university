import { createWriteStream } from "fs";

const writeStream = createWriteStream("./output.txt", {
  encoding: "utf-8",
  flags: "a",
});

writeStream.write("This is from writable stream ");
writeStream.write("Hello from Softuni");
writeStream.write("Final row");
writeStream.write("\n");

writeStream.end();
