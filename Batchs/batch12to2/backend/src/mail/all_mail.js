import nodemailer from "nodemailer"
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const first_user_otp = async (fname, lname, email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: 'ravi6680singh@gmail.com',
            to: email,
            subject: "Hello",
            text: "Hello world?",
            html: `
            <b>Hello world?\</b>
            <h1>${fname}</h1>
            <h1>${lname}</h1>
            <h1>${otp}</h1>
            `,
        });
        console.log(info)
        console.log("Message sent: %s", info.messageId);
    }
    catch (err) { console.error("Verification failed:", err); }
}

export const resend_otp = () => {

}