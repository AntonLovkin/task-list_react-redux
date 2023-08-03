import { Icon } from '.';
import editIcon from '../icons/edit.svg';
import archiveIcon from '../icons/archive.svg';
import deleteIcon from '../icons/delete.png';

function NotesHeader() {
  return (
    <div className="flex sticky top-0 items-center gap-2.5 m-2.5 p-2.5 border-2 border-black
     rounded-md shadow-md bg-gradient-to-r from-blue to-red font-bold">
      <span className="flex-initial basis-1/12">Name</span>
      <span className="flex-initial basis-1/12">Created</span>
      <span className="hidden sm:inline-block flex-initial basis-1/12">Category</span>
      <span className="flex-1">Content</span>
      <span className="flex-initial basis-1/12 mr-2">Dates</span>
      <span className="inline-block sm:hidden flex-initial basis-1/12">Tools</span>
      <div className='hidden sm:flex gap-0.5 flex-col sm:flex-row flex-initial'>
        <span className="flex-initial basis-1/3 inline-block p-2">
          <Icon src={editIcon} alt="edit button" />
        </span>
        <span className="flex-initial basis-1/3 inline-block p-2">
          <Icon src={archiveIcon} alt="archive button" />
        </span>
        <span className="flex-initial basis-1/3 inline-block p-3">
          <Icon src={deleteIcon} alt="delete button" />
        </span>
      </div>
    </div>
  );
}

export default NotesHeader