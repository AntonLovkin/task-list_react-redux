export interface NoteI {
    id: string,
    createdAt: string,
    content: string,
    category: string,
    name: string,
    dates: string,
    isArchived: boolean,
};

export interface InitialState {
  notes: NoteI[];
  showForm: boolean;
}

export type summaryNoteType = {
  category: string;
  active: number;
  archived: number;
}

type AddNoteAction = {
  type: "ADD_NOTE";
  payload: NoteI;
};

type EditNoteAction = {
  type: "EDIT_NOTE";
  payload: {
    id: string;
  };
};

type DeleteNoteAction = {
  type: "DELETE_NOTE";
  payload: string;
};

type ArchiveNoteAction = {
  type: "ARCHIVE_NOTE";
  payload: string;
};

type ToggleFormAction = {
  type: "TOGGLE_FORM";
};


export type ActionTypes =
  | AddNoteAction
  | EditNoteAction
  | DeleteNoteAction
  | ArchiveNoteAction
  | ToggleFormAction;