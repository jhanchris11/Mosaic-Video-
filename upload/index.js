
import fs from 'fs'
import path from 'path'
import { S3 } from 'aws-sdk';
require('dotenv').config({ path: '../variables.env' })
const s3 = new S3({
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
    region: process.env.REGION
})
function uploadS3() {
    const arrMosaico = []
    return new Promise((resolve, reject) => {

        const rutaMosaico = path.join(__dirname, '../files/mosaico/')
        console.log(rutaMosaico)
        fs.readdir(rutaMosaico, function (err, files) {
            files.map(function(file) {
                let rutacompleto = rutaMosaico + file;
                console.log(arrMosaico)
                arrMosaico.push(rutacompleto)

            })
            resolve(arrMosaico)

        })

    })

}
export default uploadS3;