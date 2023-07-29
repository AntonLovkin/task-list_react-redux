import { v4 as uuidv4 } from 'uuid';
import { getCurrentDateTime, getDatesFromNote } from '../utils';
import { AddNoteI } from '../types';
import { ACTION_TYPES } from '../utils';

const {ADD_NOTE,EDIT_NOTE,DELETE_NOTE,ARCHIVE_NOTE,TYPE_FORM,CLOSE_FORM } = ACTION_TYPES

export function addNote(note: AddNoteI) {
  const { content, category, name } = note;

  const id = uuidv4;
  const dates = getDatesFromNote(content);

  return {
    type: ADD_NOTE,
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

export function editNote(note: AddNoteI, id: string | undefined) {
  const { content, category, name } = note;

  const dates = getDatesFromNote(content);

  return {
    type: EDIT_NOTE,
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
    type: DELETE_NOTE,
    payload: id,
  };
}

export function archiveNote(id:string) {
  return {
    type: ARCHIVE_NOTE,
    payload: id,
  };
}

export function showFormByType(type:string) {
  return {
    type: TYPE_FORM,
    payload: {
        type: `${type}`,
        showForm: true,
    }
  };
}

export function closeForm() {
  return {
    type: CLOSE_FORM,
    payload: {
        type: '',
        showForm: false,
    }
  };
}
