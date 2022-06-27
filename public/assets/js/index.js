console.log("hello from client");

const NotesListElement = $("#notes-list");

const NewNoteElement = $("#icons");

const newNoteForm = $("#new-note-form");

const listContainer = $("#list-container");

const navbar = $("#navbar");

const notesInput = $("#notes-item-input");

// not rendering items-list

// fetch items from api

const getNotesList = async () => {
  const response = await fetch("/api/items");
  const data = await response.json();
  return data;
};

const handleClickNewNote = (event) => {
  const target = $(event.target);

  if (target.is('i[name= "new-note"]')) {
    const newNote = target.attr("new-note");

    console.log("its working");
    renderNoteForm();
  }
};

//this is not working

const handleClickSavedNote = async (event) => {
  event.preventDefault();
  const target = $(event.target);
  if (target.is('i[name= "save-note"]')) {
    const saveNote = target.attr("save-note");
    console.log("saveNote");
  }
  const newItem = notesInput.val();
  if (!newItem) {
    console.log("handle error");
  } else {
    console.log("newItem");
    // create a post request payload

    const payload = {
      name: newItem,
    };

    // make a post requst to api/items
    const response = await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify{payload},
      Headers: {
        "content-type": "application/json",
      },

    });
    const data = await response.json();

    window.location.assign("/");
    console.log(data);
  }
};

const handleClick = (event) => {
  const target = $(event.target);
  if (target.is(`button[name="edit-btn"]`)) {
    const itemId = target.attr("data-items-id");
    console.log("edit", itemId);
  }
  if (target.is(`button[name="delete-btn"]`)) {
    const itemId = target.attr("data-items-id");
    console.log("delete", itemId);
  }
};

// handleSubmit = (event) => {

//   event.preventdefault()
//   console.log("submit")
// }

// newNoteform.submit(handSubmit)

// render list items

const renderListItems = (items) => {
  const listItems = items
    .map((item) => {
      return `<li
    class="list-group-item d-flex flex-row flex-wrap justify-content-between align-items-center"
    id="${item.id}"
  >
    <div>${item.name} </div>
    <div>
      <button class="btn btn-secondary" name="edit-btn"data-items-id="${item.id}">edit</button>
      <button class="btn btn-danger" name="delete-btn"data-items-id="${item.id}">delete</button>
    </div>
  </li>`;
    })
    .join("");
  NotesListElement.append(
    `<ul class="list-group" id="items-list-container">${listItems}</ul>`
  );
  $("#items-list-container").click(handleClick);
};

const renderNoteForm = () => {
  console.log("render");

  listContainer.append(`<div new-notes-form class="col-8">
  <input
    class="note-title"
    id = "notes-item-input"
    placeholder="Note Title"
    maxlength="28"
    type="text"
  />
  <textarea class="note-textarea" placeholder="Note Text"></textarea>
</div>`);
};

navbar.click(handleClickNewNote);
navbar.click(handleClickSavedNote);
const onReady = async () => {
  const { items } = await getNotesList();
  renderListItems(items);
};
$(document).ready(onReady);
