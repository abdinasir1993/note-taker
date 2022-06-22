const path = require("path")

const renderHomePage = (req, res) => {
    //return the index.html file
    // get file path
    const filePath = path.join(__dirname, "../../public/index.html" )
    
    // send file
    return res.sendFile(filePath);
}
const renderCreatePage = (req, res) => {
    //return the index.html file
    // get file path
    const filePath = path.join(__dirname, "../../public/create.html" )
    
    // send file
    return res.sendFile(filePath);
}

const renderEditPage = (req, res) => {
    //return the index.html file
    // get file path
    const filePath = path.join(__dirname, "../../public/edit.html" )
    
    // send file
    return res.sendFile(filePath);
}
module.exports = {
    renderHomePage,
    renderCreatePage,
    renderEditPage,

}