import bcrypt from "bcrypt";
import staff from "../../models/staff.js";
import group from "../../models/group.js";

export async function staffLogin(req, res) {
  try {
    // getting the triggerUser
    const triggerStaff = await staff.findOne(
      { staffEmail: req.body.staffEmail },
      { staffEmail: true, staffPassword: true }
    );

    // checking if provided password is correct
    const receivedPassword = String(req.body.staffPassword);
    const isPasswordCorrect = await bcrypt.compare(
      receivedPassword,
      triggerStaff.staffPassword
    );

    if (isPasswordCorrect) {
      res.status(200).json({
        purposeCompleted: true,
        message: "user has been logged in",
      });
    } else {
      res.status(401).json({
        purposeCompleted: false,
        message: "password is incorrect",
      });
    }
  } catch (err) {
    const errorPayload = {
      purposeCompleted: false,
      message: `-> an error has occured while comparing credentials for user: ${req.body.staffEmail}.`,
      errorOccured: true,
    };

    res.log.error(err, "-> an error has occured in the userLogin function");
    return res.status(500).json(errorPayload);
  }
}

