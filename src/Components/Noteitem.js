import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext';
function Noteitem(props) {
    const { note } = props;
    const context = useContext(NoteContext);
    const {deleteNote} = context;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">{note.title}</h5>
                        <i className='fa fa-edit text-primary mx-2' ></i>
                        <i className='fa fa-trash text-danger mx-2' onClick={()=>deleteNote(note._id)}></i>
                    </div>

                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem