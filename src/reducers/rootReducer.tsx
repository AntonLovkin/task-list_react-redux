import { combineReducers } from "redux";
import { NoteI, FormI, ActionTypes } from "../types";

function notesReducer(state: NoteI[] = [], action: ActionTypes): NoteI[] {
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

function formReducer(state: FormI = {type: "", showForm: false}, action: ActionTypes): FormI {
  switch (action.type) {
    case "TYPE_FORM":
    case "CLOSE_FORM":
      return { ...action.payload };
    default:
      return state;
  }
}

export default combineReducers({
  notes: notesReducer,
  form: formReducer,
});
