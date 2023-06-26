import { generateId } from "../utils/GenerateId.js"


export class Note {

  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.createdDate = new Date()
    this.reportedDate = new Date(data.timestamp)
    this.description = data.description || ''
    this.color = data.color
  }


  get NoteTemplate() {
    return `<p class="selectable" onclick="app.NotesController.setActiveNote('${this.id}')">${this.name}<i class="mdi mdi-note" style="color:${this.color};"></i></p>
    <p class="">Created on: ${this.createdDate.toLocaleDateString()}</p>
    <p class="">Updated on: ${this.reportedDate}</p>
    <button onclick="app.NotesController.removeNote('${this.id}')" class="btn btn-danger mdi mdi-delete"></button>`
  }

  get ActiveTemplate() {
    // textarea is basically an input field, so surround it with a <form onsubmit="app.notescontroller.saveNote(this.id)"> tag and add a button that says save
    // textarea name="description"
    // render the date in some format that's not the isostring (toLocaleDateString())
    return `
    <form onsubmit="app.NotesController.saveNote(this.id)">
    <textarea id="note-content" >${this.description}</textarea>
    <button>Save Note</button>
    </form>`

  }


  get dateFormatted() {
    let date = this.reportedDate
    return `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`
  }

  // async function
  // if (await Pop.confirm()){

  // }

}




