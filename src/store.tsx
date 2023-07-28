import {legacy_createStore as createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import { v4 as uuidv4 } from 'uuid';

function getCurrentDateTime():string {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = String(now.getFullYear()).slice(-2);
  
  const formattedDate = `${day}.${month}.${year}`;

  return `${formattedDate}`;
};

interface NoteI {
    id: string,
    createdAt: string,
    content: string,
    category: string,
    name: string,
    dates: string,
    isArchived: boolean,
};

interface InitialState {
  notes: NoteI[];
}

const initialState: InitialState = {
    notes: [
        {
            id: uuidv4(),
            createdAt: getCurrentDateTime(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023",
            category: 'Idea',
            name: 'Books',
            dates: '3/5/2023',
            isArchived: true,
        },
        {
            id: uuidv4(),
            createdAt: getCurrentDateTime(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023',
            isArchived: false,
        },
        {
            id: uuidv4(),
            createdAt: getCurrentDateTime(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023',
            isArchived: false,
        },
        {
            id: uuidv4(),
            createdAt: getCurrentDateTime(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023, 5/5/2023',
            isArchived: false,
        },
        {
            id: uuidv4(),
            createdAt: getCurrentDateTime(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Task',
            name: 'Books',
            dates: '3/5/2023, 5/5/2023',
            isArchived: false,
        },
    ]
};

const store = createStore(rootReducer, initialState);

export type { InitialState, NoteI };
export default store;