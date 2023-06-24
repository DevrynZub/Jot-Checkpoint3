import { AppState } from "../AppState.js";
import { Note } from "../models/Note";
import { saveState } from "../utils/Store";


class NotesService {
  setActiveNote() {
    const selectedNote = AppState.notes.find(note => note.title == note)
    console.log('note service selected', selectedNote);

    AppState.activeNote
  }


}
