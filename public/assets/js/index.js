console.log("hello from client");

const shoppingListElement = $("#shopping-list")


const shoppingList = async () => {



// fetch items from api

// const getNotesList = async () => {
 
//   const response = await fetch("/api/items")
//   const data = await response.json()
 
  
//   return data
  
return {
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
}
}

// }

// render list items

const renderListItems = (items) => {
  const listItems = items.map((items) => {
    return  ` <li
    class="list-group-item d-flex flex-row flex-wrap justify-content-between align-items-center"
    id="${items.id} "
  >
    <div>${items.name} </div>
    <div>
      <button class="btn btn-secondary" name="edit-btn">edit</button>
      <button class="btn btn-danger" name="delete-btn">delete</button>
    </div>
  </li>
  <li
    class="list-group-item d-flex flex-row flex-wrap justify-content-between align-items-center"
    id="b9a949db-c28e-4ce6-819f-bf01f49d8f6b"
  >`
  })
  .join("");
shoppingListElement.append(`<ul class="list-group">${listItems}</ul>`)

};



const onReady = async () => {
 const items = await getNotesList()
}
$document.ready(onReady)

