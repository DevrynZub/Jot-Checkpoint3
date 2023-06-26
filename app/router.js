import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { NotesController } from "./controllers/NotesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: NotesController,
    view: /*html*/`
    <div class="container-fluid">
      <div class="row">
      <div class="col-4">
      <section id="note-count"></section>
      <h5><span id="note-list"><span>Saved Note List</h5>
      </div>
      <div class="col-8" id="active-note"></div>
      </div>
    </div>
    `
  }
]