import student from "../models/student.js";

async function ifStudentExists(inpRollNo) {
  try {
    const res = await student.findOne(
      {
        studentRollNo: inpRollNo,
      },
      { _id: true }
    );

    if (res) {
      return true;
    } else {
      return false;
    }
  } catch (err) {}
}

export default ifStudentExists;
