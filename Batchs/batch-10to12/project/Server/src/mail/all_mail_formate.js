import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config({ quiet: true })

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const newOtpSend = async (email, name, otp) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email, 
            subject: "Hello",
            text: "Hello world?",
            html: `hello ${name},
            your otp is ${otp}
            `, 
        });

        console.log("Message sent: %s", info.messageId);
    }
    catch (err) { console.log(err.message) }
}