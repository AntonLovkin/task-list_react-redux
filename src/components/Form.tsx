import { FormEventHandler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, editNote, closeForm } from '../actions/actions';
import { NoteI } from '../types';

type FormProps = {
  note: NoteI | null;
};

function Form({ note }: FormProps) {
  // console.log(note)
  const [formData, setFormData] = useState({ name: '', content: '', category: 'Task' });

  useEffect(() => {
    if (note) {
      setFormData(note)
    }
  }, [note])
  
  const dispatch = useDispatch();

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    // console.log(name, value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(formData)
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    
    if (note) {
      dispatch(editNote(formData, note.id));
    } else {
      dispatch(addNote(formData))
    }
    dispatch(closeForm())
  };

  return (
    <div className="fixed flex justify-center items-center overflow-hidden 
                top-0 left-0 w-full h-full bg-white/75 bg-opacity-75 transition-opacity">
      <div className="mt-10 sm:mx-auto sm:w-full rounded-lg sm:max-w-sm p-5 bg-white">
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <label
              className="text-start block pl-2 text-sm font-medium leading-6"
              htmlFor="name"
            >
              Note Name:
            </label>
            <div className="mt-2">
              <input
                autoFocus
                autoComplete='off'
                type="text"
                name="name"
                required value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 px-2 
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              className="text-start block pl-2 text-sm font-medium leading-6 text-gray-900"
              htmlFor="content"
            >
              Note content:
            </label>
            <div className="mt-2"
            >
              <input
                className="block w-full rounded-md border-0 py-1.5 px-2 
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="content"
                required value={formData.content}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              className="text-start block pl-2 text-sm font-medium leading-6 text-gray-900"
              htmlFor="category"
            >
              Note category:
            </label>
            <div className="mt-2">
              <select
                className="block w-full rounded-md border-0 p-2 
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 sm:text-sm sm:leading-6"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              className="transition ease-in-out delay-150 rounded-md w-20 
              bg-white/75 hover:bg-green/75 hover:text-white px-2 py-1 
              text-gray-600 ring-2 ring-inset ring-dark-gray"
              type="submit"
            >
              Save
            </button>
            <button
              className="transition ease-in-out delay-150 rounded-md w-20 
              bg-white/75 hover:bg-orange hover:text-white px-2 py-1 
              text-gray-600 ring-2 ring-inset ring-dark-gray"
              type="button"
              onClick={() => dispatch(closeForm())}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form;