import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState =(props)=>{
    const notesInit =[
        {
          "_id": "653949f2d4d7b7c6684e262f5",
          "user": "6537fff3a3c033cdc598e17b",
          "title": "Need to escape",
          "description": "Just don't go periodically , don't have a single and same routine!",
          "tags": "General",
          "date": "2023-10-25T17:01:38.499Z",
          "__v": 0
        },
        {
          "_id": "653949f2d4de7b7c6684262f5",
          "user": "6537fff3a3c033cdc598e17b",
          "title": "Need to escape",
          "description": "Just don't go periodically , don't have a single and same routine!",
          "tags": "General",
          "date": "2023-10-25T17:01:38.499Z",
          "__v": 0
        },
        {
          "_id": "653949f2d4d7geb7c6684262f5",
          "user": "6537fff3a3c033cdc598e17b",
          "title": "Need to escape",
          "description": "Just don't go periodically , don't have a single and same routine!",
          "tags": "General",
          "date": "2023-10-25T17:01:38.499Z",
          "__v": 0
        },
        {
          "_id": "653949f2d4d7b7cge6684262f5",
          "user": "6537fff3a3c033cdc598e17b",
          "title": "Need to escape",
          "description": "Just don't go periodically , don't have a single and same routine!",
          "tags": "General",
          "date": "2023-10-25T17:01:38.499Z",
          "__v": 0
        },
        {
          "_id": "653949fsf2d4d7b7c6684262f5",
          "user": "6537fff3a3c033cdc598e17b",
          "title": "Need to escape",
          "description": "Just don't go periodically , don't have a single and same routine!",
          "tags": "General",
          "date": "2023-10-25T17:01:38.499Z",
          "__v": 0
        },
        {
          "_id": "653949f2d4d7b7csf6684262f5",
          "user": "6537fff3a3c033cdc598e17b",
          "title": "Need to escape",
          "description": "Just don't go periodically , don't have a single and same routine!",
          "tags": "General",
          "date": "2023-10-25T17:01:38.499Z",
          "__v": 0
        },
        {
          "_id": "653949f2df4d7b7c6684262f5",
          "user": "6537fff3a3c033cdc598e17b",
          "title": "Need to escape",
          "description": "Just don't go periodically , don't have a single and same routine!",
          "tags": "General",
          "date": "2023-10-25T17:01:38.499Z",
          "__v": 0
        },
        {
          "_id": "653adf9b57cb92f8d1b07cb989",
          "user": "6537fff3a3c033cdc598e17b",
          "title": "Need to escape",
          "description": "Just don't go periodically , don't have a single and same routine!",
          "tags": "General",
          "date": "2023-10-26T17:01:11.401Z",
          "__v": 0
        }
      ];
      
    const [notes,setNotes] = useState(notesInit);
   
    const addNote = (title, description, tag) => {
      console.log('gointo add');

      const note = {
        "_id": "sdsdsdsd",
        "user": "sdsdsdsdsdsd",
        "title": "Need to escape ADDED",
        "description": "Just don't go periodically ADDED!",
        "tags": "General ADDED",
        "date": "2023-10-26T17:01:11.401Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }

    const editNote = () => {

    }
 
    const deleteNote = (id) => {
      console.log(`Deleting note with id ${id}`);
      const newNote = notes.filter(note=>{return note._id!==id});
      setNotes(newNote)
    }

    return (
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;