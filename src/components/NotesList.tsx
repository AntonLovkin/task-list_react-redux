import { connect } from 'react-redux';
import { Notes, ArchivedNotes } from "."
import { InitialState } from '../types';

// const mapStateToProps = (state: InitialState) => {
//     return {
//         notes: state.notes
//     }
// };

function NotesList({showForm}) {
  return (
      <>
          <Notes showForm={showForm} />
          {/* <ArchivedNotes /> */}
      </>
  )
}

// export default connect(mapStateToProps)(NotesList)
export default NotesList