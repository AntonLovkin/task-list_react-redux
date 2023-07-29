import { FormEventHandler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, editNote, closeForm } from '../actions/actions';
import { NoteI } from '../types';

type FormProps = {
  note: NoteI | null;
};

function Form({ note }: FormProps) {
  // console.log(note)
  const [formData, setFormData] = useState({ name: 'AddForm', content: 'AddForm', category: 'Task' });

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
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Note Name:</label>
      <input type="text" name="name" required value={formData.name} onChange={handleChange} />
      <label htmlFor="content">Note Content:</label>
      <input type="text" name="content" required value={formData.content} onChange={handleChange} />
      <label htmlFor="category">Category:</label>
      <select name="category" required value={formData.category} onChange={handleChange}>
        <option value="Task">Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={() => dispatch(closeForm())}>Cancel</button>
    </form>
  )
}

export default Form;