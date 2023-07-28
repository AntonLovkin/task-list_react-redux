import { NoteI, InitialState } from "../types";
import { Form } from ".";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteNote, archiveNote, editNote, toggleShowForm} from "../actions/actions";

interface NoteProps {
    note: NoteI;
}

function Note({note}: NoteProps) {
    // console.log(note)
    const { id, createdAt, content, dates = '', category, name } = note;

    const showForm = useSelector((state: InitialState) => state.showForm);
    // const [showForm, setShowForm] = useState(false)
    const dispatch = useDispatch();

    const deleteBtnClick = () => {
        dispatch(deleteNote(id))
    };

    const archiveBtnClick = () => {
        dispatch(archiveNote(id))
    };

    const editBtnClick = () => {
        // setShowForm(true)
        dispatch(toggleShowForm())
        // dispatch(editNote(id))
    };
    
    return (
        <li id={id}>
            <span className="name">{name}</span>
            <span className="created">{createdAt}</span>
            <span className="category">{category}</span>
            <span className="content">{content}</span>
            <span className="dates">{dates}</span>
            {/* <img className="editButton edit" src="../icons/edit.svg" alt="edit button" />
            <img className="archiveButton archive" src="../icons/edit.svg" alt="{typeBtn} button" />
            <img id="delete-btn" className="deleteButton delete" src="../icons/delete.png" alt="delete button" /> */}
            <button className="editButton edit" onClick={editBtnClick}>Edit</button>
            <button className="archiveButton archive" onClick={archiveBtnClick}>Archive</button>
            <button className="deleteButton delete" onClick={deleteBtnClick}>Delete</button>
            {showForm && <Form note={note} />}
        </li>
    )
}

export default Note