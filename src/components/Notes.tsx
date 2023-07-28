import { connect } from 'react-redux';
import { Note, NotesHeader } from '.';
import { InitialState } from '../types';

const mapStateToProps = (state: InitialState) => {
    return {
        notes: state.notes
    }
};

function Notes({notes}: InitialState) {
    // console.log(props.notes)
    const activeNotes = notes.filter(note => !note.isArchived);
    const archivedNotes = notes.filter(note => note.isArchived);

    return (<div>
        <ul>
            <NotesHeader />
            {activeNotes && activeNotes.length > 0 && activeNotes.map(note => <Note note={note} />)}
        </ul>
        <h2>Archived notes list</h2>
        <ul>
            {archivedNotes && archivedNotes.length > 0 && archivedNotes.map(note => <Note note={note} />)}
        </ul>
    </div>);
}

export default connect(mapStateToProps)(Notes)