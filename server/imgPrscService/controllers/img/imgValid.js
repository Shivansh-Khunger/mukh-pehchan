import axois from "axios";

import { regNewStu } from "../../../usrMngService/controllers/student/studentPrimitiveOps";

export async function SingleImgValid(req, res) {
  try {
    const arr = [0.2, 0.3, 0.5, 0.1];
    const formData = {
      purposeCompleted: true,
      triggerStuRollNo: req.body.triggerStuRollNo,
      triggerStuFaceDescriptor: reg.body.triggerStuFaceDescriptor,
    };

    res.status(200).json(formData);
  } catch (err) {
    res.log.error(err, "-> an error has occured in imgValid.js");
  }
}

export async function MultiImgValid(res, req) {
  try {
    const arr2 = [
      [0.61, 0.62, 0.63, 0.64],
      [0.65, 0.66, 0.67, 0.68],
      [0.69, 0.7, 0.71, 0.72],
      [0.73, 0.74, 0.75, 0.76],
    ];
    const formData = {
      purposeCompleted: true,
      triggerStuRollNo: req.body.triggerStuRollNo,
      triggerStuFaceDescriptor: reg.body.triggerStuFaceDescriptor,
    };

    res.status(200).json(formData);
  } catch (err) {}
}
