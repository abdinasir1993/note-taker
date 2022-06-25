
const {readDataFromFile} = require("../utils/filereadwrite")

const getItems = (req, res) => {
    // get all items from files 
const items = readDataFromFile("items")
    //send all items as a response
   
    return res.json (items)
      
    

}
module.exports = {
    getItems,
}
