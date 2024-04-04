import jwt from "jsonwebtoken";

const generateTokenCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  console.log("generate token hitß");

  res.cookie("jwt", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  return token;
};

export default generateTokenCookie;
