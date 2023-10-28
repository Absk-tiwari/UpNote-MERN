import NoteContext from '../Context/Notes/NoteContext'
import React, { useContext } from 'react'
import Noteitem from './Noteitem';

function Note() {
  const context = useContext(NoteContext);
  const { notes } = context;

  return (
    <div className='container my-3'>
      <div className='row my-2'>
        <h3>Uploaded</h3>
        {notes.map(note => { return <Noteitem key={note._id} note={note} /> })}
      </div>
    </div>
  )
}

export default Note