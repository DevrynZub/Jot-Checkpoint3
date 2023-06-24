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
      <div class="col-4 bg-dark text-white">
      <h3><span id="note-list"><span>Note List</h3>
      </div>
      <div class="col-6" id="active-note">Test</div>
      </div>
    </div>
    `
  },
]