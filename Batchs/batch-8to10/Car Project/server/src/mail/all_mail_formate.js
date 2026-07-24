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

export const user_new_otp = async (email,name,otp) => {
    try {
        console.log(email,name,otp)
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER, 
            to: email,
            subject: "Hello", 
            text: "Hello world?",
            html: `
            hello ${name} 
            wekcome to ${otp}
            `,
        });

        console.log("Message sent: %s", info.messageId);
    }
    catch (err) { console.log(err.message) }
}