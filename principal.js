// import Rutas from './files/index';

import Cortar from './cortar/index';
import Rutas from './capturar/index'
import moldear from './moldear/index';
// import uploadS3 from './upload/index';
// // const array = ['../ruta/0.mp4', '../ruta/1.mp4', '../ruta/2.mp4', '../ruta/3.mp4']
async function initProcess() {

    try {
        const obtenerRuta = await Rutas()
        console.log(obtenerRuta)
        const datos = await Cortar(obtenerRuta)
        console.log(datos)
        const datos2 = await moldear()
        console.log(datos2)
        // const datos2 = await uploadS3()
        // console.log(datos2)

    } catch (error) {
        console.log(error)
    }

}
initProcess();