import student from "../../models/student.js";
import ifStudentExists from "../../helper/studentExists.js";
import hashPassword from "../../helper/hashPassword.js";

export async function regNewStu(req, res) {
  try {
    if (await ifStudentExists(req.body.triggerStuRollNo)) {
      const triggerStuFaceDescriptor = req.body.triggerStuFaceDescriptor;
      const stringifiedArray = JSON.stringify(triggerStuFaceDescriptor);
      const hashedArray = await hashPassword(stringifiedArray);

      const response = await student.updateOne(
        { studentRollNo: req.body.triggerStuRollNo },
        { $set: { studentFaceDescriptor: hashedArray } }
      );

      console.log(response);

      if (response.modifiedCount == 1) {
        res.status(200).json({
          purposeCompleted: true,
          message: `-> studentFaceDescriptor updated.`,
        });
      } else {
        res.status(200).json({
          purposeCompleted: false,
          ifStudentExists: false,
          message: `-> student is not of this org.`,
        });
      }
    } else {
      res.status(200).json({
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

    res.status(500).json(errorPayload);
  }
}

// export async function updateAtt(req, res) {
//   try {
//     const currentGroup = await group.findOne(
//       { groupNo: req.body.groupNo },
//       { groupStudents: true, groupTimeTable: true }
//     );

//     const now = new Date();
//     const currentDay = now.toLocaleString("en-us", { weekday: "long" });
//     const currentTime = now.getHours() + ":" + now.getMinutes();

//     const todayTimetable = currentGroup.groupTimeTable[currentDay];

//     if (todayTimetable) {
//       const times = Object.keys(todayTimetable).map((time) => {
//         const [hours, minutes] = time.split(":");
//         return new Date(
//           now.getFullYear(),
//           now.getMonth(),
//           now.getDate(),
//           hours,
//           minutes
//         );
//       });

//       const nearestTime = times.reduce((nearest, current) => {
//         return Math.abs(current - now) < Math.abs(nearest - now)
//           ? current
//           : nearest;
//       });

//       const nearestTimeString =
//         nearestTime.getHours().toString().padStart(2, "0") +
//         ":" +
//         nearestTime.getMinutes().toString().padStart(2, "0");
//       const nearestSubject = todayTimetable[nearestTimeString];

//       await student.updateMany(
//         {
//           studentGroup: req.body.groupNo,
//           "subjectAttendance.subject": nearestSubject,
//         },
//         { $inc: { "subjectAttendance.$.attendance": 1 } }
//       );
//     }
//   } catch (err) {}
// }


export async function updateAtt(req, res) {
  try {
    const currentGroup = await group.findOne(
      { groupNo: req.body.groupNo },
      { groupStudents: true, groupTimeTable: true }
    );

    const now = new Date();
    const currentDay = now.toLocaleString("en-us", { weekday: "long" });
    const currentTime = now.getHours() + ":" + now.getMinutes();

    const todayTimetable = currentGroup.groupTimeTable[currentDay];

    if (todayTimetable) {
      const times = Object.keys(todayTimetable).map((time) => {
        const [hours, minutes] = time.split(":");
        return new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          hours,
          minutes
        );
      });

      const nearestTime = times.reduce((nearest, current) => {
        return Math.abs(current - now) < Math.abs(nearest - now)
          ? current
          : nearest;
      });

      const nearestTimeString =
        nearestTime.getHours().toString().padStart(2, "0") +
        ":" +
        nearestTime.getMinutes().toString().padStart(2, "0");
      const nearestSubject = todayTimetable[nearestTimeString];

      await student.updateMany(
        {
          studentGroup: req.body.groupNo,
          "subjectAttendance.subject": nearestSubject,
        },
        { $inc: { "subjectAttendance.$.attendance": 1 } }
      );
    }
  } catch (err) {}
}
