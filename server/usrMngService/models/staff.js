import mongoose from "mongoose";

const { Schema, model } = mongoose;

const staffSchema = new Schema({
  staffName: {
    type: String,
    required: true,
  },
  
  staffPassword: {
    type: String,
    required: true,
    default: "",
  },
});

const staff = model("staff", staffSchema);
export default staff;
