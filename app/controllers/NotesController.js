import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";


function _drawNotes() {
  const notes = AppState.notes
  let template = ''
  console.log('notes');
  notes.forEach(n => template += n.NoteTemplate)
  setHTML('note-list')



}

export class NotesController {
  constructor() {
    console.log('This is my Notes Controller');

    _drawNotes()
  }
}

