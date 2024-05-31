import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
    {
        courseNo: String,
        courseName: String,
        sections: [
          {
            section: String,
            day: String,
            dayLab: String,
            time: String,
            timeLab: String,
            room: String,
            roomLab: String,
            examTime: String,
            teacher: [{
                type: String,
                fullName: String
            }],
            coTeachers: [{
                type: String,
                fullName: String
            }]
          }
        ]
    }
);

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
