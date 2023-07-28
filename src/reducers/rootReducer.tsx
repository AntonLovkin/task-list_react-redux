import { combineReducers } from "redux";

function notesReducer(state = [], action) {
  console.log(state, action)
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

function showFormReducer(state = false, action) {
  console.log(state, action)
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

// // reducer.js
// import { ADD_TODO, TOGGLE_TODO } from './actionTypes'; // Make sure to import your action type constants.

// const initialState = {
//   todos: [],
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };
//     case TOGGLE_TODO:
//       const { id } = action.payload;
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === id ? { ...todo, completed: !todo.completed } : todo
//         ),
//       };
//     // Other cases for handling different actions...
//     default:
//       return state;
//   }
// };

// export default reducer;
