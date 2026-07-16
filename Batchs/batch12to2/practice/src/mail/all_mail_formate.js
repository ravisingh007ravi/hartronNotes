import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config({quiet:true})

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const user_otp_verification_mail = async (fname, email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Verify Your Account",
            html: `
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
                                Welcome, ${fname} 👋
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

            `
        });

        console.log("Message sent: %s", info.messageId);
    } catch (err) {
        console.error("Verification failed:", err.message);
    }
}