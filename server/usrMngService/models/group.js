import mongoose from "mongoose";

const { Schema, model } = mongoose;

const groupSchema = new Schema({
  groupStudents: {
    type: [String],
    required: true,
  },

  groupStudentNo: {
    type: Number,
    required: true,
  },
  
  groupTimeTable: {
    type: Schema.Types.Mixed,
    default: {},
  },
});

const group = model("group", groupSchema);
export default group;
