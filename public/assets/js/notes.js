const NewNoteElement = $("#icons")

const handleClick = (event) => {
    
const target = $(event.target)

if (target.is('i[name= "save-note]')) {

const saveNote = target.attr("name")
console.log(saveNote)
}
if (target.is('i[name="new-note"]')) {
    
   const newNote = target.attr("name")
   console.log(newNote)
    }
}

NewNoteElement.click(handleClick)
console.log("hi")