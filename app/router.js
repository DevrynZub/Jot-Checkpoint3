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
      <div class="row m-none">
      <div class="col-4 bg-info text-white note-list">
      <section id="note-count"></section>
      <h5 class="mt-4"><span id="note-list"><span></h5>
      </div>
      <div class="col-8" id="active-note"></div>
      </div>
    </div>
    `
  }
]