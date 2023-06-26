import { AppState } from "../AppState.js";
import { setHTML, setText } from "../utils/Writer.js";
import { notesService } from "../services/NotesService.js";
import { Note } from "../models/Note.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";

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

  createNote() {
    event?.preventDefault()
    let form = event?.target
    const formData = getFormData(form)
    console.log(formData);
    notesService.createNote(formData)
  }
}



