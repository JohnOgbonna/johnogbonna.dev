import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend";


export async function GET() {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
        from: 'no-reply@johnogbonna.com',
        to: 'johnny.ogb@gmail.com',
        subject: 'Test Email',
        text: 'Hello, John! This is a test email sent with Resend.'
    })
    if(error){
        console.log(error)
    }
    try {
        return NextResponse.json({ message: 'hello world' })
    } catch (err) {
        return NextResponse.json({ err })
    }

}