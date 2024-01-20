import bcrypt from "bcrypt";

async function hashPassword(nonHashedPassword) {
  let hashedPassword = "";
  await bcrypt.hash(nonHashedPassword, 15).then((hash) => {
    hashedPassword = hash;
  });
  return hashedPassword;
}

export default hashPassword;
