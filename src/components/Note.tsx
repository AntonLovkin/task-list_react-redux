import { NoteI } from "../types";
import { useDispatch } from 'react-redux';
import { deleteNote, archiveNote } from "../actions/actions";

interface NoteProps {
    note: NoteI;
    editBtnClick: (note: NoteI) => void;
}

function Note({note, editBtnClick}: NoteProps) {
    // console.log(note)
    const { id, createdAt, content, dates = '', category, name } = note;

    const dispatch = useDispatch();

    const deleteBtnClick = () => {
        dispatch(deleteNote(id))
    };

    const archiveBtnClick = () => {
        dispatch(archiveNote(id))
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
            <button className="editButton edit" onClick={() => editBtnClick(note)}>Edit</button>
            <button className="archiveButton archive" onClick={archiveBtnClick}>Archive</button>
            <button className="deleteButton delete" onClick={deleteBtnClick}>Delete</button>
        </li>
    )
}

export default Note