const fs = require("fs")
const path = require("path")
const { fileURLToPath } = require("url")

const readDataFromFile = (fileName) => {
    filePath = path.join (__dirname, `../data/${fileName}.json`)
const rawData = fs.readFileSync{filePath, "utf8"}
return JSON.parse(rawdata)
}

const writeDataToFile = () => {}
 
module.exports = {
    readDataFromFile,
    writeDataToFile
}

