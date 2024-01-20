import student from "../../models/student.js";
import ifStudentExists from "../../helper/studentExists.js";

export async function regNewStu(req, res) {
  try {
    if (ifStudentExists(req.body.triggerStuRollNo)) {
      const response = student.updateOne(
        { studentRollNo: req.body.triggerStuRollNo },
        { $set: { studentFaceDescriptor: req.body.triggerStuFaceDescriptor } }
      );

      if (
        response.acknowledged == true &&
        response.modifiedCount == 1 &&
        response.matchedCount == 1
      ) {
        return res.status(200).json({
          purposeCompleted: true,
          message: `-> studentFaceDescriptor updated.`,
        });
      } else {
        return res.status(200).json({
          purposeCompleted: false,
          ifStudentExists: false,
          message: `-> student is not of this org.`,
        });
      }
    } else {
      return res.status(200).json({
        purposeCompleted: false,
        message: `-> student with RollNo :- ${req.body.triggerStuRollNo} does not exit.`,
      });
    }
  } catch (err) {
    const errorPayload = {
      purposeCompleted: false,
      message: `-> student FaceDescriptor could not be updated / added.`,
      errorOccured: true,
    };

    res.log.error(err, "-> an error has occured in regNewStu function.");

    return res.status(500).json(errorPayload);
  }
}
