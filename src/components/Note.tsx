import { NoteI } from "../types";

interface NoteProps {
  note: NoteI;
}

function Note({note}: NoteProps) {
    // console.log(note)
    const { id, createdAt, content, dates = '', category, name } = note;
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
        </li>
    )
}

export default Note