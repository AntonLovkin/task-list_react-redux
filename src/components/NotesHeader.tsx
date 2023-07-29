import { Icon } from '.';
import editIcon from '../icons/edit.svg';
import archiveIcon from '../icons/archive.svg';
import deleteIcon from '../icons/delete.png';

function NotesHeader() {
  return (
    <div className="table-header">
      <span className="name">Name</span>
      <span className="created">Created</span>
      <span className="category">Category</span>
      <span className="content">Content</span>
      <span className="dates">Dates</span>
      <span className="edit"><Icon src={editIcon} alt={"edit button"} /></span>
      <span className="archive"><Icon src={archiveIcon} alt={"archive button"} /></span>
      <span className="delete"><Icon src={deleteIcon} alt={"delete button"} /></span>
    </div>
  );
}

export default NotesHeader