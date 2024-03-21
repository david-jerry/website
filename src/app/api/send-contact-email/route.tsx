import { Resend } from 'resend';
import HelloEmail from '@/components/emails/HelloEmail';
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const resend = new Resend(process.env.NEXT_RESEND_API)
    const data = await req.json()

    await resend.emails.send({
      from: process.env.NEXT_CONTACT_EMAIL,
      to: "jeremiahedavid@gmail.com",
      subject: `[Job] New Request`,
      react: <HelloEmail email={data['email']} name={data['recipient']} message={data['message']} phone={data['phone']} />,
    })

    return NextResponse.json({ message: "Email Sent" });
}