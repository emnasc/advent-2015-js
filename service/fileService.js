const fs = require('fs')

const inputFilesPath = "./static/input/"

function readInput(day) {
    const fileName = `2015-day${day}-input.txt`

    try {
        const input = fs.readFileSync(`${inputFilesPath}${fileName}`, 'utf-8')
        return input;
    } catch(err) {
        console.error(`Unable to read file ${fileName} - ${err}`)
    }
}

module.exports = { readInput }