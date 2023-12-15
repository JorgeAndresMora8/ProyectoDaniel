import nodemailer from "nodemailer"
import { ADMIN_EMAIL } from "../config/Env.js";

 let transporter = nodemailer.createTransport({
    service: "gmail", 
    port: 587,
    auth: {
      user: "jorgeandresmm2002@gmail.com", 
      pass: "xsuutqaoqqaztzzk", 
    },
  });


  export async function sendEmail(email, cart, total){ 


      await transporter.sendMail({ 
        from:"Food Market", 
        to:ADMIN_EMAIL, 
        subject:"Purchase", 
        html:`<h1>Hello ${email}</h1>
              <h2>Your purchase is on its way.</h2>
              <p>Thanks for be a part of this family</p>
              <b>TOTAL: ${total}</b>`
              
      })

      await transporter.sendMail({ 
        from:"Food Market", 
        to:email, 
        subject:"Purchase", 
        html:`<h1>Hello ${email}</h1>
        <h2>Your purchase is on its way.</h2>
        <p>Thanks for be a part of this family</p>
        <b>TOTAL: ${total}</b>`
      })
}


