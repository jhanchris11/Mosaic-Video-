

import aws from 'aws-sdk';
// import { join } from 'path';
// import { readFile } from 'fs';
import fs from 'fs'
import path from 'path'
import { readFile } from 'fs'
import { join } from 'path'
require('dotenv/config')
// require('dotenv').config({ path: '../variables.env' })
const { accessKeyId, secretAccessKey, region, Bucket } = process.env;
const s3 = new aws.S3({
    accessKeyId,
    secretAccessKey,
    region,
    s3BucketEndpoint: false,
    endpoint: "https://s3.amazonaws.com"
})
function uploadS3(urlMosaico) {

    console.log(urlMosaico)

    console.log('Llegooooo')
    let contador = 0;
    let array = [];
    return new Promise((resolve, reject) => {

        // const ruta = 'D:\Christian\Escritorio\reto\files\mosaico'
        setTimeout(function () {
            // console.log(uploadPath);
            console.log('hola')
            urlMosaico.map(element => {
                readFile(join(__dirname, element), (err, data) => {
                    let pathfile = path.join(__dirname, '../files/mosaico/')
                    // console.log(pathfile)
                    fs.readdir(pathfile, (err, files) => {
                        if (err) console.log(err)
                        files.map(function (file) {
                            let fileContent = fs.readFileSync(element)
                            let params = {
                                Bucket,
                                Key: file,
                                Body: fileContent
                            }
                            s3.putObject(params, (err, data) => {
                                if (err) console.log(err)
                                array.push(`https://${Bucket}.s3.${region}.amazonaws.com/${file}`)
                                if (contador <= files.length - 1) {
                                    console.log(files.length)
                                    console.log(file)
                                    // console.log(array)

                                }
                                contador++;
                                resolve(array)


                            })
                        })
                    })

                })
            })

        }, 10000)

    })
}
export default uploadS3