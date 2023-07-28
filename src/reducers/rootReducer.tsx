import { combineReducers } from "redux";
import { NoteI, ActionTypes } from "../types";

function notesReducer(state: NoteI[] = [], action: ActionTypes): NoteI[] {
  // console.log(state, action)
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "EDIT_NOTE":
      return [...state.map(note => note.id !== action.payload.id ? note : {...note, ...action.payload})];
    case "DELETE_NOTE":
      return [...state.filter(note => note.id !== action.payload)];
    case "ARCHIVE_NOTE":
      return [...state.map(note => note.id !== action.payload ? note : {...note, isArchived: !note.isArchived})];
    default:
      return state;
  }
}

function showFormReducer(state: boolean = false, action: ActionTypes): boolean {
  // console.log(state, action)
  switch (action.type) {
    case "TOGGLE_FORM":
      return !state;
    default:
      return state;
  }
}

export default combineReducers({
  notes: notesReducer,
  showForm: showFormReducer,
});
