import { useSelector } from 'react-redux';

import { InitialState, NoteI, summaryNoteType } from '../types';
import { separateAndCountByCategory } from '../utils';
import { SummaryHeader } from '.';

function Summary() {
  const notes: NoteI[] = useSelector((state: InitialState) => state.notes);
  const summaryList = separateAndCountByCategory(notes);

  return (
    <>
      {notes && notes.length > 0 && <div>
        <SummaryHeader />
        <ul>
          {summaryList.map((note: summaryNoteType) => {
            const { category, active, archived } = note;
            return <li id={category} className="note-summary">
              <span className="category">{category}</span>
              <span className="active">{active}</span>
              <span className="archived">{archived}</span>
            </li>
          })}

        </ul>
      </div>
      }</>);
}

export default Summary