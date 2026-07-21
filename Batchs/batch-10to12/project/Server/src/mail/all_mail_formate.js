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
            from: '"Example Team" <team@example.com>', // sender address
            to: email, // list of recipients
            subject: "Hello", // subject line
            text: "Hello world?", // plain text body
            html: `hello ${name},
            your otp is ${otp}
            `, // HTML body
        });

        console.log("Message sent: %s", info.messageId);
    }
    catch (err) { console.log(err.message) }
}