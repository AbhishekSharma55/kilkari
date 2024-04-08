"use server"
import nodemailer from "nodemailer";
export async function sendMail({
  firstName,
  lastName,
  phoneNumber,
  message,
}: {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  message: string;
}) {
    const SMTP_EMAIL = "headshot360degree@gmail.com"
    const SMTP_PASSWORD = "caas pdpi shsy qadz"
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
        from: SMTP_EMAIL,
        to: SMTP_EMAIL,
        html: "name: "+firstName+lastName+"<br>"+"phone no: "+phoneNumber+"<br>"+"Message: "+message,
      });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
