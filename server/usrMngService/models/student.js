import mongoose from "mongoose";

const { Schema, model } = mongoose;

const studentSchema = new Schema({
  studentName: {
    type: String,
    required: true,
  },

  studentRollNo: {
    type: String,
    required: true,
  },

  studentGroup: {
    type: Number,
    required: true,
  },

  studentSession: {
    type: String,
    required: true,
    default: "2022-26",
  },

  studentSem: {
    type: String,
    required: true,
  },

  studentFaceDescriptor: {
    type: String,
    required: true,
    default: "",
  },

  subjectAttendance: [
    {
      subject: {
        type: String,
        required: true,
      },
      attendance: {
        type: Number,
        required: true,
      },
    },
  ],
});

const student = model("students", studentSchema);
export default student;
