import { generateId } from "../utils/GenerateId.js"


export class Note {

  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.createdDate = new Date()
    this.reportedDate = new Date(data.timestamp)
    this.description = data.description
  }


  get NoteTemplate() {
    return `<p class="selectable" onclick="app.NotesController.setActiveNote('${this.id}')">${this.name}</p>`
  }

  get ActiveTemplate() {
    return `
    <p>${this.createdDate}</p>
    <textarea id="note-content">${this.description}</textarea>`
  }


  get dateFormatted() {
    let date = this.reportedDate
    return `${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`
  }



}




