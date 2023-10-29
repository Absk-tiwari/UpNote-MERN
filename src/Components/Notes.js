import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import Noteitem from "./Noteitem";

function Note() {
  const context = useContext(NoteContext);
  const { notes, fetchNotes ,editNote} = context;
  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    fetchNotes();
    //eslint-disable-next-line
  }, []);
  const [note, setNote] = useState({etitle: "", edescription: "", etag : ""});

  const updateNote = (currentNote) => {
     setNote({id: currentNote._id, etitle : currentNote.title, edescription: currentNote.description, etag : currentNote.tags})
    ref.current.click();
  }

  const onchange=(e)=>{
      setNote({...note, [e.target.name] : e.target.value})
  }

  const submit=(e)=>{
    editNote({id:note.id,title: note.etitle,description: note.edescription,tag: note.etag});
    refClose.current.click();
    e.preventDefault();
  }

  return (
        <>
          <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch</button> 
          
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text" value={note.etitle} onChange={onchange} className="form-control"  name='etitle' id="etitle" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">Tags</label>
                    <input type="text" value={note.etag} onChange={onchange} className="form-control" name='etag' id="etag"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edesc" className="form-label">Description</label>
                    <input type="text" value={note.edescription} onChange={onchange} className="form-control" name='edescription' id="edesc"/>
                  </div>
                  
                </form>
                </div>
                <div className="modal-footer">
                  <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
                </div>
              </div>
            </div>
          
          </div>
        
          <div className="container my-3">
            <div className="row my-2">
              <h3>Previous</h3>
              {notes.map((note) => {
                return (
                  <Noteitem key={note._id} updateNote={updateNote} note={note} />
                );
              })}
            </div>
          </div>
        </>
  );
}

export default Note;
