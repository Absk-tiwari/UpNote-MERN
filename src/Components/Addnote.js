import React, {useContext, useState} from 'react';
import NoteContext from '../Context/Notes/NoteContext';

function AddNote() {
  const context = useContext(NoteContext);
  //eslint-disable-next-line
   const { addNote } = context;

  const [note , setNote] =  useState({title : "", description : "", tag : ""})
  const onchange = (e) => {
    console.log({...note});
    setNote({...note, [e.target.name]: e.target.value});
  }

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
  }
    return (
      <>
       <div className='container my-3'>
          <h2>Add One</h2>
        
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" onChange={onchange} className="form-control"  name='title' id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tags</label>
            <input type="text" onChange={onchange} className="form-control" name='tag' id="tag"/>
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" onChange={onchange} className="form-control" name='description' id="desc"/>
          </div>
           
          <button type="sumit" className="btn btn-success btn-round-sm" onClick={handleClick} >Submit</button>
        </form>
        </div>
      </>
    )
  }
  
  export default AddNote