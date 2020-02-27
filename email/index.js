require('dotenv/config')
// import mailer from 'nodemailer';


// const { user, password } = process.env

function sendemail(urlS3) {
    console.log('Holaaaaaa')
    console.log(urlS3)
    // const emailOption = mailer.createTransport({

    //     service: "gmail",
    //     auth: {
    //         user,
    //         password
    //     }
    // })

    // return new Promise((response, reject) => {
    //     emailOption.sendMail({
    //         from: `Dani :D <${user}>`, // Correo remitente :D
    //         to: sendmailers, // lista de destinatarios
    //         subject: "Ejemplo del reto", // Asunto :D
    //         html: `



    //         `
    //     })
    // })

}
export default sendemail;