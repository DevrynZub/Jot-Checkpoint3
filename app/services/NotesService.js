import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { saveState } from "../utils/Store.js"


function _saveState() {
  saveState('notes', AppState.notes)
}


class NotesService {
  setActiveNote(caseId) {
    let selectedNote = AppState.notes.find(n => n.id == caseId)
    console.log(selectedNote)
    AppState.activeNote = selectedNote
    console.log('active-note', AppState.activeNote)
  }

  saveCase(newContent) {
    const theNote = AppState.activeNote
    theNote.report = newContent
    // debugger
    // console.log(AppState.cases, AppState.activeCase)
    _saveState()
  }
  createNote(noteData) {
    const newNote = new Note(noteData)
    console.log(newNote)

    AppState.notes.push(newNote)
    AppState.emit('notes')


    console.log(AppState.notes)
    _saveState()
  }

}



export const notesService = new NotesService()