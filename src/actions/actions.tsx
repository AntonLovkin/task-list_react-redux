import { v4 as uuidv4 } from 'uuid';
import { getCurrentDateTime, getDatesFromNote } from '../utils';
import { NoteI } from '../types';

interface NoteProps {
  note: NoteI;
}

export function addNote(note:NoteProps) {
  const { content, category, name } = note;

  const id = uuidv4;
  const dates = getDatesFromNote(content);

  return {
    type: "ADD_NOTE",
    payload: {
      id,
      createdAt: getCurrentDateTime(),
      isArchived: false,
      content,
      category,
      name,
      dates,
    }
  };
}

export function editNote(note:NoteProps, id: string) {
  const { content, category, name } = note;

  const dates = getDatesFromNote(content);

  return {
    type: "EDIT_NOTE",
    payload: {
      id,
      editedAt: getCurrentDateTime(),
      isArchived: false,
      content,
      category,
      name,
      dates,
    }
  };
}

export function deleteNote(id:string) {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
}

export function archiveNote(id:string) {
  return {
    type: "ARCHIVE_NOTE",
    payload: id,
  };
}

export function toggleShowForm() {
  return {
    type: "TOGGLE_FORM",
  };
}

// actions.js
// import { ADD_TODO } from './actionTypes'; // Make sure to define ADD_TODO as a string constant.

// export const addTodo = (text) => {
//   return {
//     type: ADD_TODO,
//     payload: {
//       id: Date.now().toString(), // You can use any method to generate a unique ID.
//       text,
//       completed: false, // You can set other properties as needed for your todo.
//     },
//   };
// };
