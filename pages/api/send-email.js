import { transporter, mailOptions } from '@/config/nodemail';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
   if (req.method === "POST") {
        const data = req.body

        if (!data.isFullName || !data.isTelephone || !data.isSecteur || !data.isMessage) {
            return res.status(400).json({ message: 'mauvaise requete' })
        }
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject : "Demande de service",
                text:  "test ",
                html: `<h1>Nom et prenoms : </h1> <p style="font-size: 20px">${data.isFullName}</p> <br> <h1>adresse email :</h1> <p style="font-size: 20px">${!data.isEmail ? 'adresse email non fournie' : data.isEmail}</p> <br> <h1>Telephone :</h1> <p style="font-size: 20px">${data.isTelephone}</p>  <br> <h1>Secteur d'activité :</h1> <p style="font-size: 20px">${data.isSecteur}</p> <br> <h1>Demande:</h1> <p style="font-size: 20px">${data.isMessage}</p> <br> <br>`}
            )


            return res.status(200).json({ succes: true})
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: 'mauvaise requete' })
        }
    }

    
    return res.status(400).json({ message: 'mauvaise requete' })
   
}
