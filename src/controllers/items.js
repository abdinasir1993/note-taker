const getItems = (req, res) => {
    // get all items from files 

    //send all items as a response
    return res.json ( {
        items:[
        {
          id:"08f9c16f-d4da-483c-b68d-6d87c22776ab",
          name:"item 1",
        },
        {
          id:"b9a949db-c28e-4ce6-819f-bf01f49d8f6b",
          name:"item 2",
        },
        {
          id:"fd9d4b36-b2be-4dca-b725-3cf88f658e14",
          name:"item 3",
        },
        {
          id:"e60a270c-5a9e-4881-9fdd-b5e615e360d9",
          name:"item 4",
        }
      ]
      })
      }
      


module.exports = {
    getItems,
}
