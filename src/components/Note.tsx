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
    const { id, createdAt, content, dates = '', category, name } = note;

    const dispatch = useDispatch();

    const deleteBtnClick = () => {
        dispatch(deleteNote(id))
    };

    const archiveBtnClick = () => {
        dispatch(archiveNote(id))
    };
    
    return (
        <li className="flex items-center gap-2.5 m-2.5 p-2.5 rounded-xl shadow-sm bg-gray-light text-gray-dark sm:leading-6">
            <span className="flex-initial basis-1/12">{name}</span>
            <span className="flex-initial basis-1/12">{createdAt}</span>
            <span className="hidden sm:inline-block flex-initial basis-1/12">{category}</span>
            <span className="flex-1">{content}</span>
            <span className="flex-initial basis-1/12">{dates}</span>
            <div className='flex gap-0.5 flex-col sm:flex-row flex-initial'>
            <div
                className="flex-initial basis-1/3 inline-block p-1 sm:p-2 bg-yellow/75 hover:bg-orange rounded-lg"
                onClick={() => editBtnClick(note)}>
                <Icon src={editIcon} alt={"edit button"} />
            </div>
            <div
                className="flex-initial basis-1/3 inline-block p-1 sm:p-2 bg-blue/75 hover:bg-blue rounded-lg"
                onClick={archiveBtnClick}>
                <Icon src={isArchived ? unarchiveIcon : archiveIcon} alt={"archive button"} />
            </div>
            <div
                className="flex-initial basis-1/3 inline-block p-2 sm:p-3 bg-red hover:bg-red rounded-lg"
                onClick={deleteBtnClick}>
                <Icon src={deleteIcon} alt={"delete button"} />
                </div>
                </div>

        </li>
    );
}

export default Note