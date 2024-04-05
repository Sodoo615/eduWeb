import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sodoo888615@gmail.com",
    pass: "zsme xebx oonc arse",
  },
});

export async function sendResetCodeByEmail(email, code) {
  const mailOptions = {
    from: "sodoo888615@gmail.com",
    to: email,
    subject: "Password Reset Code",
    text: `Your verification code for
password reset is: ${code}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return code;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}