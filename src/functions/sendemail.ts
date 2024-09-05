'use server'
import { Resend } from "resend"

function generateHtml(name: string, message: string) {

    return ` <!DOCTYPE html>
<html lang="en">
<head>
    <style>
        /* Inconsolata font is not a standard font, so we'll use a fallback font */
        @font-face {
            font-family: 'Inconsolata';
            src: url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400&display=swap');
        }
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="font-family: 'Inconsolata', monospace; margin: 0; padding: 0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: inherit;">
        <tr>
            <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="20"
                    style="background-color: inherit; border: 1px solid #DC2626;">
                    <tr>
                        <td align="left" style="font-size: 16px;">
                            <h2 style="font-weight: bold; margin-top: 0;">Dear, ${name}, Thanks for visiting Johnogbonna.dev!</h2>
                            <p>Hi, ${name}!</p>
                            <p>I appreciate you taking the time to visit my website and also leaving me a message.</p>
                            <p><span style="font-weight: bold;">Your Message:</span>${message}</p>
                            <p>I'll reach out to you soon!</p>
                            <p>You can reach me directly at my personal email: <a href="mailto:johnny.ogb@gmail.com">johnny.ogb@gmail.com</a></p>
                            <p>Best regards,<br>John Ogbonna</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
    `
}

export async function sendEmail(name: string, email: string, message: string) {
    'use server'
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
        from: 'no-reply@johnogbonna.com',
        to: [`johnny.ogb@gmail.com`, `${email}`],
        subject: 'Thanks for leaving a message on Johnogbonna.dev!',
        html: generateHtml(name, message)
    })
    if (error) {
        // alert('Whoops! Something went wrong, try sending again later!')
        console.log(error)
    }
    else {
        alert('Thanks for your message! I will get back to you soon!')
    }
}