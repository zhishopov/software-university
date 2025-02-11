import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("Connected successfully");
} catch (error) {
  console.error("Could not connect to db");
}

// Take a reference for database and collection
const db = client.db("studentsDb");
const collection = db.collection("students");

const result = await collection.find().toArray();
console.log(result);
