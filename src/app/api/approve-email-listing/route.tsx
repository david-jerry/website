import { Resend } from 'resend';
import NewsLetterEmail from '@/components/emails/NewsLetterEmail';
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {

    const resend = new Resend(process.env.NEXT_RESEND_API)
    const data = await req.json()

    await resend.emails.send({
      from: process.env.NEXT_CONTACT_EMAIL,
      to: data['email'],
      subject: `[Hello] Newsletter Request`,
      react: <NewsLetterEmail email={data['email']} name={data['recipient']} phone={data['phone']} />,
    })

    return NextResponse.json({ message: "Email Sent" });
}