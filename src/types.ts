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