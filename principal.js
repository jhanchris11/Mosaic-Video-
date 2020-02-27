// import Rutas from './files/index';

import Cortar from './cortar/index';
import Rutas from './capturar/index'
import moldear from './moldear/index';
import uploadS3 from './upload/index';
import sendemail from './email/index';
// import sendmail from './mail/index';
// import sendemail from './email/index';
// import uploadS3 from './upload/index';
// // const array = ['../ruta/0.mp4', '../ruta/1.mp4', '../ruta/2.mp4', '../ruta/3.mp4']
// const email = process.env.email.split(',')
async function initProcess() {

    try {
        const obtenerRuta = await Rutas()
        await Cortar(obtenerRuta)
        const urlMosaico = await moldear()
        const urlS3 = await uploadS3(urlMosaico)
        const urlEmail = await sendemail(urlS3)
        console.log(urlEmail)
    } catch (error) {
        console.log(error)
    }

}
initProcess();