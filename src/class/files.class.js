const fs = require('fs-extra')
const sharp = require('sharp')
const moment = require('moment')

class SaveFile {

    static saveFile(buffer, type_chart, type_file) {

        return new Promise(((resolve, reject) => {
            let path = moment().format('DDMMYYYY').toString()

            fs.mkdir("image/" + path, {recursive: true}, (err) => {
                if (err) reject(err)
            })
            resolve(path)
        }))

            .then(folder_name => `${folder_name}/${this.get_fileName(type_chart, type_file)}`)

            .then(async file_path => {
                     await sharp(buffer)
                        .resize(400, 300)
                        .jpeg({
                            quality: 70
                        })
                        .toFile('image/' + file_path);

                    return file_path

                },
                err => {
                    console.log(err)
                })

            .catch(err => console.log(err))
    }


    static get_fileName(typechart, typefile = 'png') {

        let timestamp = moment().unix()

        if (!typechart) {
            return `${timestamp}.${typefile}`
        }

        return `${typechart}${timestamp}.${typefile}`
    }

}

module.exports = SaveFile