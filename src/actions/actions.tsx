import { v4 as uuidv4 } from 'uuid';
import { getCurrentDateTime, getDatesFromNote } from '../utils';
import { NoteI } from '../types';

export function addNote(note:NoteI) {
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

export function editNote(note:NoteI, id: string) {
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
