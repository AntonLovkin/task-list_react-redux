import {legacy_createStore as createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import { v4 as uuidv4 } from 'uuid';
import { InitialState } from "./types";
import { getCurrentDateTime } from "./utils";

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
            category: 'Random Thought',
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
        {
            id: uuidv4(),
            createdAt: getCurrentDateTime(),
            content: "I'm gonna have a dentist appointment on the 3/5/2023, I moved it from 5/5/2023",
            category: 'Random Thought',
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
        
    ],
    form: {
        type: "",
        showForm: false,
    }
};

const store = createStore(rootReducer, initialState);

export default store;