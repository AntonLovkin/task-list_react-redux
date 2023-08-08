import { useSelector } from 'react-redux';

import { InitialState, NoteI, summaryNoteType } from '../types';
import { separateAndCountByCategory } from '../utils';
import { SummaryHeader } from '.';

function Summary() {
  const notes: NoteI[] = useSelector((state: InitialState) => state.notes);
  const summaryList = separateAndCountByCategory(notes);

  return (
    <div className='min-w-max'>
      {notes && notes.length > 0 && <div>
        <h2 className='font-bold text-start p-4 mt-8 underline'>Summary list</h2>
        <SummaryHeader />
        <ul>
          {summaryList.map((note: summaryNoteType) => {
            const { category, active, archived } = note;
            return <li key={category} className="flex justify-around align-center p-2 m-2 rounded-md bg-white">
              <span className="flex-1 text-center">{category}</span>
              <span className="flex-1">{active}</span>
              <span className="flex-1 text-blue" >{archived}</span>
            </li>
          })}
        </ul>
      </div>
      }</div>);
}

export default Summary