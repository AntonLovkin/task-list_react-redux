import { NoteI } from "../types";
import { useDispatch } from 'react-redux';
import { deleteNote, archiveNote } from "../actions/actions";
import { Icon } from '.';
import editIcon from '../icons/edit.svg';
import archiveIcon from '../icons/archive.svg';
import unarchiveIcon from '../icons/unarchive.svg';
import deleteIcon from '../icons/delete.png';

interface NoteProps {
    note: NoteI;
    editBtnClick: (note: NoteI) => void;
    isArchived: boolean;
}

function Note({note, editBtnClick, isArchived}: NoteProps) {
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
            <div
                className="edit"
                onClick={() => editBtnClick(note)}>
                <Icon src={editIcon} alt={"edit button"} />
            </div>
            <div
                className="archive"
                onClick={archiveBtnClick}>
                <Icon src={isArchived ? unarchiveIcon : archiveIcon} alt={"archive button"} />
            </div>
            <div
                className="delete"
                onClick={deleteBtnClick}>
                <Icon src={deleteIcon} alt={"delete button"} />
            </div>

        </li>
    );
}

export default Note