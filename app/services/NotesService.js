import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { saveState } from "../utils/Store.js"


function _savedState() {
  saveState('notes', AppState.notes)
}


class NotesService {
  setActiveNote(caseId) {
    let selectedNote = AppState.notes.find(n => n.id == caseId)
    console.log(selectedNote)
    AppState.activeNote = selectedNote
    console.log('active-note', AppState.activeNote)
  }



  // saveNote(newRecords) {
  //   const theNotes = AppState.activeNote
  //   theNotes.description = newRecords
  //   // debugger
  //   _savedState()
  // }

  createNote(formData) {
    const newNote = new Note(formData)
    AppState.notes = [...AppState.notes, newNote]
    saveState('notes', AppState.notes)

  }

}



export const notesService = new NotesService()