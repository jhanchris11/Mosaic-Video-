import path from 'path'
import fs from 'fs';
function Rutas() {
    const arr = []

    return new Promise((resolve, reject) => {
        const directoryPath = path.join(__dirname, '../ruta/')

        fs.readdir(directoryPath, function (err, files) {
            if (err) return console.log(err)

            files.map(function (file) {
                let ruta = directoryPath + file;
                arr.push(ruta);
            })

            resolve(arr);
        })

        
    })
}
export default Rutas;