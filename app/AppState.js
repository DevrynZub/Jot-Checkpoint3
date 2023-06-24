import { Note } from "./models/Note.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  /** @type {import('./models/Note.js').Note[]} */

  notes = [
    new Note({
      title: 'History Class',
      Data: Date(),
      note: "History class notes, let see if we can get this to show up",
    }),
    new Note({
      title: 'English Class',
      Data: Date(),
      note: "History class notes, let see if we can get this to show up",
    }),
    new Note({
      title: 'Math Class',
      Data: Date(),
      note: "History class notes, let see if we can get this to show up"
    })

  ]



  note = null










  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
