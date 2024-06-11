import mongoose, { Schema } from "mongoose";

const tableSchema = new Schema({
  courseNo: String,
  courseName: String,
  section: String,
  day: String,
  dayLab: String,
  time: String,
  timeLab: String,
  room: String,
  roomLab: String,
  examTime: String,
  teacher: String,
  color: String
});

const Table = mongoose.models.Table || mongoose.model("Table", tableSchema);

export default Table;
