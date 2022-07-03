const path = require("path")

const renderHomePage = (req, res) => {
    //return the index.html file
    // get file path
    const filePath = path.join(__dirname, "../../public/index.html" )
   
    // send file
    return res.sendFile(filePath);
}
const renderNotesPage = (req, res) => {
    //return the index.html file
    // get file path
    const filePath = path.join(__dirname, "../../public/notes.html" )
    
    // send file
    return res.sendFile(filePath);
}


module.exports = {
    renderHomePage,
    renderNotesPage,

}