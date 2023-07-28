import { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { InitialState } from '../types';
import { addNote } from '../actions/actions';

function Form() {
  const [name, setName] = useState('Books');
  const [content, setContent] = useState("3/5/2023, I moved it from 5/5/2023");
  const [category, setCategory] = useState('Task');

  const dispatch = useDispatch();

  const handleFormSubmit: React.FormEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    
    dispatch(addNote({name, content, category}));
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Note Name:</label>
      <input type="text" id="name" required defaultValue={name} />
      <label htmlFor="content">Note Content:</label>
      <input type="text" id="content" required defaultValue={content} />
      <label htmlFor="category">Category:</label>
      <select id="category" required>
        <option value="Task">Task</option>
        <option value="Random Thought">Random Thought</option>
        <option value="Idea">Idea</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" id="cancel-btn">Cancel</button>
    </form>
  )
}

export default Form;