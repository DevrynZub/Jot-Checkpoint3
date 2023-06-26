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

  saveNote(noteDescription) {
    console.log(noteDescription);
    const currentNote = AppState.activeNote
    currentNote.description = noteDescription.description
    currentNote.reportedDate = new Date()

    const index = AppState.notes.findIndex(n => n.id == currentNote.id)
    console.log(index);
    AppState.notes.splice(index, 1, currentNote)
    AppState.emit('notes')

    // debugger
    console.log(AppState.notes, AppState.activeNote)
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

  removeNote(noteData) {
    console.log("checking this is working", noteData);
    let filteredArray = AppState.notes.filter(n => n.id != noteData)
    AppState.notes = filteredArray
    console.log('New array in AppState:', AppState.notes);
    saveState('notes', AppState.notes)
  }


}



export const notesService = new NotesService()