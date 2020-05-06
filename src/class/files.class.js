const fs = require('fs')
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

            .then(file_path => {
                    fs.writeFileSync('image/' + file_path, buffer)

                    return file_path
                },
                err => {
                    console.log(err)
                })
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