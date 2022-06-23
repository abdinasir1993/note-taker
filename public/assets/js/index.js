console.log("hello from client");

const NotesListElement = $("#Notes-list")






const getNotesList = async () => {
 
  const response = await fetch("/api/items")
  const data = await response.json()
 
  
  return data
 

}



const handleClick = (event) => {
  const target = $(event.target)
  if (target.is(`button[name="edit-btn"]`)) {
    const itemId = target.attr("data-items-id")
    console.log("edit", itemId)

  }
  if (target.is(`button[name="delete-btn"]`)) {
    const itemId = target.attr("data-items-id")
    console.log("delete", itemId)
    

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
NotesListElement.append(`<ul class="list-group" id="items-list-container">${listItems}</ul>`)
$("#items-list-container").click(handleClick)

};



const onReady = async () => {
 const { items } = await NotesList();
 renderListItems(items);
}
$(document).ready(onReady)

