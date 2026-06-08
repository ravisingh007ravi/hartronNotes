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
            subject: 'Welcome Verify Your Account - OTP Code',
            text: "Hello world?",
            html: `
            <!doctype html>
            <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Verify Your Account</title>
            </head>

            <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">

                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
                    <tr>
                        <td align="center">

                            <table width="600" cellpadding="0" cellspacing="0"
                                style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,0.1);">

                                <!-- Header -->
                                <tr>
                                    <td align="center"
                                        style="background:#111827;color:#ffffff;padding:30px 20px;">
                                        <h1 style="margin:0;font-size:28px;">
                                            My Cloth Company
                                        </h1>
                                        <p style="margin-top:8px;color:#d1d5db;">
                                            Fashion That Defines You
                                        </p>
                                    </td>
                                </tr>

                                <!-- Content -->
                                <tr>
                                    <td style="padding:40px 30px;color:#374151;">

                                        <h2 style="margin-top:0;">
                                            Welcome, Ravi Singh 👋
                                        </h2>

                                        <p style="font-size:16px;line-height:1.7;">
                                            Thank you for registering with
                                            <strong>My Cloth Company</strong>.
                                            To complete your account verification,
                                            please use the OTP below:
                                        </p>

                                        <!-- OTP Box -->
                                        <div style="
                                            background:#f3f4f6;
                                            border:2px dashed #111827;
                                            border-radius:10px;
                                            padding:20px;
                                            text-align:center;
                                            margin:30px 0;
                                        ">
                                            <p style="margin:0;font-size:14px;color:#6b7280;">
                                                YOUR VERIFICATION CODE
                                            </p>
                                            <h1 style="
                                                margin:10px 0 0;
                                                letter-spacing:8px;
                                                color:#111827;
                                                font-size:42px;
                                            ">
                                                ${otp}
                                            </h1>
                                        </div>

                                        <p style="font-size:15px;">
                                            ⏳ This OTP will expire in
                                            <strong>5 minutes</strong>.
                                        </p>

                                        <p style="font-size:15px;line-height:1.7;">
                                            If you did not create an account with us,
                                            please ignore this email. Your account
                                            will not be activated without verification.
                                        </p>

                                        <p style="margin-top:30px;">
                                            Regards,<br>
                                            <strong>My Cloth Company Team</strong>
                                        </p>

                                    </td>
                                </tr>

                                <!-- Footer -->
                                <tr>
                                    <td align="center"
                                        style="background:#f9fafb;padding:20px;color:#6b7280;font-size:13px;">
                                        © 2026 My Cloth Company. All rights reserved.
                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>
                </table>

            </body>
            </html>
            `,
        });
        console.log("Message sent: %s", info.messageId);
    }
    catch (err) { console.error("Verification failed:", err); }
}

export const resend_otp = async (fname, lname, email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: 'ravi6680singh@gmail.com',
            to: email,
            subject: 'Verify Your Account - OTP Code',
            html: `
            <!doctype html>
            <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Verify Your Account</title>
            </head>

            <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">

                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
                    <tr>
                        <td align="center">

                            <table width="600" cellpadding="0" cellspacing="0"
                                style="background:#ffffff;border-radius:12px;overflow:hidden;">

                                <tr>
                                    <td align="center"
                                        style="background:#111827;color:#ffffff;padding:30px 20px;">
                                        <h1 style="margin:0;font-size:28px;">
                                            My Cloth Company
                                        </h1>
                                        <p style="margin-top:8px;color:#d1d5db;">
                                            Fashion That Defines You
                                        </p>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:40px 30px;color:#374151;">

                                        <h2 style="margin-top:0;">
                                            Welcome 👋
                                        </h2>

                                        <p style="font-size:16px;line-height:1.7;">
                                            Thank you for registering with
                                            <strong>My Cloth Company</strong>.
                                            Please verify your account using the OTP below:
                                        </p>

                                        <div style="
                                            background:#f3f4f6;
                                            border:2px dashed #111827;
                                            border-radius:10px;
                                            padding:20px;
                                            text-align:center;
                                            margin:30px 0;
                                        ">
                                            <p style="margin:0;font-size:14px;color:#6b7280;">
                                                YOUR VERIFICATION CODE
                                            </p>

                                            <h1 style="
                                                margin:10px 0 0;
                                                letter-spacing:8px;
                                                color:#111827;
                                                font-size:42px;
                                            ">
                                                ${otp}
                                            </h1>
                                        </div>

                                        <p style="font-size:15px;">
                                            ⏳ This OTP will expire in
                                            <strong>5 minutes</strong>.
                                        </p>

                                        <p style="font-size:15px;line-height:1.7;">
                                            If you did not request this OTP,
                                            please ignore this email.
                                        </p>

                                        <p style="margin-top:30px;">
                                            Regards,<br>
                                            <strong>My Cloth Company Team</strong>
                                        </p>

                                    </td>
                                </tr>

                                <tr>
                                    <td align="center"
                                        style="background:#f9fafb;padding:20px;color:#6b7280;font-size:13px;">
                                        © 2026 My Cloth Company. All rights reserved.
                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>
                </table>

            </body>
            </html>
            `
        });

        console.error('Resend OTP:', info.messageId);


    } catch (err) {
        console.error('Verification failed:', err);
    }
};