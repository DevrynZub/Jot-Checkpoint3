import { generateId } from "../utils/generateId"


export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.createdDate = new Date()
    this.timestamp = new Date(data.timestamp)
    this.note = data.note

  }
  get NoteTemplate() {
    return `<p class="selectable" onclick="app.CasesController.setActiveNotes('${this.title}')"`
  }







}


