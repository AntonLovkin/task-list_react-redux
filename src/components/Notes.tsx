import { connect, useSelector } from 'react-redux';
import { Note, NotesHeader, Form } from '.';
import { NoteI, InitialState } from '../types';

// const mapStateToProps = (state: InitialState) => {
//     return {
//         notes: state.notes
//     }
// };

function Notes() {
// function Notes({ notes }: InitialState) {
    const notes: NoteI[] = useSelector((state: InitialState) => state.notes)
    // console.log(props.notes)
    const activeNotes = notes.filter(note => !note.isArchived);
    const archivedNotes = notes.filter(note => note.isArchived);

    // const editNote = (id, notesList) => {
    //     const note = notesList.filter(note => id === note.id);
    //     console.log(note);
    //     return note;
    // }

    return (<div>
        <ul>
            <NotesHeader />
            {/* {showForm && <Form note={note} />} */}
            {activeNotes && activeNotes.length > 0 && activeNotes.map(note => <Note note={note} />)}
        </ul>
        <h2>Archived notes list</h2>
        <ul>
            {archivedNotes && archivedNotes.length > 0 && archivedNotes.map(note => <Note note={note} />)}
        </ul>
    </div>);
}

// export default connect(mapStateToProps)(Notes)
export default Notes