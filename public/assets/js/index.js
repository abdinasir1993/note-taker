console.log("hello from client");

const shoppingListElement = $("#shopping-list")


const shoppingList = async () => {

// not rendering items-list

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

const handleClick = (event) => {
  const target = $(event.target)
  if (target.is(`button[name="edit-btn"]`)) {
    const itemId = target.attr("data-items-id")
    console.log("edit", itemId)

  }
  if (target.is(`button[name="delete-btn"]`)) {
    const itemId = target.attr("data-items-id")
    console.log("delete", itemId)
    //redirent to /edit/itemId

  }
}

const renderListItems = (items) => {
  const listItems = items.map((item) => {
    return  `<li
    class="list-group-item d-flex flex-row flex-wrap justify-content-between align-items-center"
    id="${item.id}"
  >
    <div>${item.name} </div>
    <div>
      <button class="btn btn-secondary" name="edit-btn"data-items-id="${item.id}">edit</button>
      <button class="btn btn-danger" name="delete-btn"data-items-id="${item.id}">delete</button>
    </div>
  </li>`
  })
  .join("");
shoppingListElement.append(`<ul class="list-group" id="shopping-list-container">${listItems}</ul>`)
$("#shopping-list-container").click(handleClick)

};



const onReady = async () => {
 const { items } = await shoppingList();
 renderListItems(items);
}
$(document).ready(onReady)

