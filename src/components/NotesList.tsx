import { connect } from 'react-redux';
import { Notes, ArchivedNotes } from "."
import { InitialState } from '../types';

const mapStateToProps = (state: InitialState) => {
    return {
        notes: state.notes
    }
};

function NotesList() {
  return (
      <>
          <Notes />
          <ArchivedNotes />
      </>
  )
}

export default connect(mapStateToProps)(NotesList)