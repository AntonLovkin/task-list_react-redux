import { combineReducers } from "redux";

function notesReducer(state = [], action) {
  // console.log(state)
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  notes: notesReducer,
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
