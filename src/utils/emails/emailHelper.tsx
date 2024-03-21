import nodemailer from "nodemailer";

type Payload = {
    recipient: string;
    subject: string;
    html: string;
};

const smtpSettings = {
    host: process.env.NEXT_SMTP_HOST,
    port: process.env.NEXT_SMTP_PORT !== undefined ? parseInt(process.env.NEXT_SMTP_PORT) : 576,
    auth: {
        user: process.env.NEXT_SMTP_USER,
        pass: process.env.NEXT_SMTP_PASSWORD,
    },
};

export const handleEmailFire = async (data: Payload) => {
    const transporter = nodemailer.createTransport({
        ...smtpSettings,
    });

    return await transporter.sendMail({
        from: process.env.NEXT_SMTP_FROM,
        ...data,
    });
};