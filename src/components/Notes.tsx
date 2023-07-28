import { connect } from 'react-redux';
import { Note } from '.';
import { InitialState } from '../store';

const mapStateToProps = (state: InitialState) => {
    return {
        notes: state.notes
    }
};

function Notes(props: InitialState) {
    // console.log(props.notes)
    return <ul>
        { props.notes.map(note => <Note note={note} />) }
    </ul>  
}

export default connect(mapStateToProps)(Notes)