import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { saveState } from "../utils/Store.js"


function _saveState() {
  saveState('notes', AppState.notes)
}


class NotesService {
  setActiveNote(noteId) {
    let selectedNote = AppState.notes.find(n => n.id == noteId)
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

  removeNote(noteId) {
    console.log("checking this is working :D", noteId);
  }


}



export const notesService = new NotesService()