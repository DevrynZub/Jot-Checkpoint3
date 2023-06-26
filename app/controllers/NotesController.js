import { AppState } from "../AppState.js";
import { setHTML, setText } from "../utils/Writer.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";



function _drawNoteList() {
  const notes = AppState.notes
  let template = ''
  notes.forEach(note => template += note.NoteTemplate)
  setHTML('note-list', template)
  setText('note-count', notes.length)
}

function _drawActiveNote() {
  const activeNote = AppState.activeNote
  if (activeNote) {
    setHTML('active-note', activeNote.ActiveTemplate)
  } else {
    setHTML('active-note', "there is nothing active")
  }
  return
}





export class NotesController {
  constructor() {

    console.log('This is my Notes Controller');

    _drawNoteList()
    _drawActiveNote()

    AppState.on('notes', _drawNoteList)
    AppState.on('activeNote', _drawActiveNote)

  }

  setActiveNote(caseId) {
    console.log('showing active note', caseId)
    notesService.setActiveNote(caseId)

  }

  createNote(event) {
    event.preventDefault()
    const form = event.target
    // log form data
    let noteData = getFormData(form)
    console.log(noteData)
    notesService.createNote(noteData)
  }


  async removeNote(noteId) {
    if (await Pop.confirm('Are you sure you want to delete?'))
      notesService.removeNote(noteId)

  }
}



