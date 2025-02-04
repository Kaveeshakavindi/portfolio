import { error } from "console";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";
import 'dotenv/config'

export async function POST(request: NextRequest) {
    const {email, name, message} = await request.json()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions: Mail.Options = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `message from ${name}, ${email}`,
        text: message
    }
    const sendEmailPromise = () => 
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function(err){
                if(!err){
                    resolve('Email sent')
                }else{
                    reject(err.message)
                }
            })
        })
        try{
            await sendEmailPromise()
            return NextResponse.json({message : 'Email sent'})
        }catch(err){
            return NextResponse.json({error: err}, {status: 500})
        }
}
