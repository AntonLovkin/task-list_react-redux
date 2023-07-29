import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Note, NotesHeader, Form } from '.';
import { NoteI, InitialState } from '../types';
import { showFormByType } from "../actions/actions";
import { FORM_TYPES } from '../utils';

type EditBtnClickFunction = (note: NoteI) => void;

function Notes() {
    const [noteData, setNoteData] = useState<NoteI | null>(null);

    const notes: NoteI[] = useSelector((state: InitialState) => state.notes)
    const { type, showForm } = useSelector((state: InitialState) => state.form);

    const activeNotes = notes.filter(note => !note.isArchived);
    const archivedNotes = notes.filter(note => note.isArchived);

    const dispatch = useDispatch();

    const editBtnClick: EditBtnClickFunction = (note) => {
        dispatch(showFormByType(FORM_TYPES.EDIT));
        setNoteData(note);
    };

    const handleClick = () => {
        dispatch(showFormByType(FORM_TYPES.ADD))
    };
console.log(notes)
    return (<div>
        <NotesHeader />
        <ul>
            {activeNotes
                && activeNotes.length > 0
                && activeNotes.map(note => <Note
                    note={note}
                    editBtnClick={editBtnClick}
                    isArchived={false}
                />)}
        </ul>

        <button onClick={handleClick}>Add note</button>
        {showForm
            && type === FORM_TYPES.ADD
            && <Form note={null} />}
        {showForm
            && type === FORM_TYPES.EDIT
            && <Form note={noteData} />}

        {archivedNotes
            && archivedNotes.length > 0
            && <div>
                <h2>Archived notes list</h2>
                <ul>
                    {archivedNotes.map(note => <Note
                        note={note}
                        editBtnClick={editBtnClick}
                        isArchived={true}
                    />)}
                </ul>
            </div>}
    </div>);
}

export default Notes