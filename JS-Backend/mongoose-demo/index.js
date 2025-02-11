import mongoose, {Schema, model} from "mongoose";

const uri = "mongodb://localhost:27017/studentsDb";

try {
  await mongoose.connect(uri);
  console.log("Connected to db successfully");
} catch (error) {
  console.log("Cannot connect to db ");
}

const studentSchema = new Schema({
  name: String,
  age: Number
});

const Student = model("Student", studentSchema);

const students = await Student.find();
console.log(students);

// Insert data into db #1
const newStudent = new Student({name: "Ivo", age: 24});
await newStudent.save();

// Insert data into db #1
await Student.create({name: "Niki", age: 19});