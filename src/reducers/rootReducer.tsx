import { combineReducers } from "redux";

function notesReducer(state = [], action) {
  switch (action.type) {
    case "ADD_NEW_POST": {
      const { authorId, title, id } = action;
      return state.concat({ id, authorId, title, comments: [] });
    }
    default:
      return state;
  }
}

export default combineReducers({
  notes: notesReducer,
});