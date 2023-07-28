import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NotesList, Summary, Form } from "../components";
import { toggleShowForm } from '../actions/actions';
import { InitialState } from '../types';

function Homepage() {

  const [showAddForm, setShowAddForm] = useState(false)
  const showForm = useSelector((state: InitialState) => state.showForm);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleShowForm())
  };

  return (
    <>
      <NotesList showForm={handleClick}/>
      <button onClick={handleClick}>Add note</button>
      {showForm && <Form note={null} setShowForm={setShowAddForm} />}
      <Summary />
    </>
  )
}

export default Homepage