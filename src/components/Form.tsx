import { FormEventHandler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, editNote, toggleShowForm } from '../actions/actions';

function Form({note}) {
  const [name, setName] = useState('Books');
  const [content, setContent] = useState("3/5/2023, I moved it from 5/5/2023");
  const [category, setCategory] = useState('Task');
  const [formData, setFormData] = useState({ name: '', content: '', category: 'Task' });

  useEffect(() => {
    console.log(formData)
    if (note) {
      // setName(note.name);
      // setContent(note.content);
      // setCategory(note.category);
      setFormData(note)
    }
  }, [note])
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData)
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    
    if (note) {
      dispatch(editNote(formData));
      dispatch(toggleShowForm());
    } else {
      dispatch(addNote(formData))
      // dispatch(addNote({ name, content, category }));
      // dispatch(editNote({ name, content, category }, id));
      dispatch(toggleShowForm());
    }
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
      <button type="button" onClick={() => dispatch(toggleShowForm())}>Cancel</button>
    </form>
  )
}

export default Form;