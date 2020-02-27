import ffmpeg from 'ffmpeg';
import path from 'path';
function Cortar(ruta) {

    let array = [], process, contador = 0;
    return new Promise((resolve, reject) => {
        ruta.forEach((element, i) => {

            process = new ffmpeg(element, (err, video) => {
                if (err) console.log('Error ' + err)

                video.setVideoSize("640x480");

                video.setDisableAudio();

                video.setVideoDuration('00:00:20');

                video.setVideoFrameRate(30);

                // video.setAudioFrequency(48)

                // video.setAudioCodec('libfaac');

                // video.setAudioCodec('libfaac')

                // video.setAudioCodec('libmp3lame');

                video.save(path.join(__dirname, `../files/cortados/${i}.mp4`), (err, file) => {

                    if (err) console.log(err)
                    console.log(`Se recorto correctamente el archivo ${file}`)

                    array.push(file);
            
                    if (contador >= ruta.length - 1) {
                        resolve(array);
                    }
                   
                    contador++;
                })
            })
        })
    })
}

export default Cortar;