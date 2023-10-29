import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState =(props)=>{
    const notesInit =[];
    // eslint-disable-next-line
    const host = 'http://192.168.93.154:1901'      
    const [notes, setNotes] = useState(notesInit);
   
    const fetchNotes = async() => {
       try{
  
          const response = await fetch(`${host}/api/notes/fetchall`,{
            method : 'GET',
            headers : {
              'Content-Type' : 'application/json',
              'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzN2ZmZjNhM2MwMzNjZGM1OThlMTdiIn0sImlhdCI6MTY5ODE3MTM4MH0.rP-ygqi1OZ4PIFsz2tHV6glU7vLceWnS-tYWjOgMIwg'
            }
          });
          const data = await response.json();
          setNotes(data);
  
       }catch(error) {
          alert(error.message);
          console.log(error.message);        
       }
    }

    const addNote = async ({title, description, tag}) => {
       try{

          const response = await fetch(`${host}/api/notes/create`, {
              method : 'POST',
              headers : {
                'Content-Type': 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzN2ZmZjNhM2MwMzNjZGM1OThlMTdiIn0sImlhdCI6MTY5ODE3MTM4MH0.rP-ygqi1OZ4PIFsz2tHV6glU7vLceWnS-tYWjOgMIwg'
              },
              body: JSON.stringify({title,description,tag})
          });
          const added = await response.json();
          setNotes(notes.concat(added));

      } catch (error) {
        alert(error.message);
        console.log(error.message);        
      }
    }

    const editNote = async({id, title, description, tag}) => {
      try{
         await fetch(`${host}/api/notes/update/${id}`,{
          method : 'PUT',
          headers : {
            'Content-Type' : 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzN2ZmZjNhM2MwMzNjZGM1OThlMTdiIn0sImlhdCI6MTY5ODE3MTM4MH0.rP-ygqi1OZ4PIFsz2tHV6glU7vLceWnS-tYWjOgMIwg'
          },
          body : JSON.stringify({title: title, description: description,tag: tag})
        });
 
        const newNote = JSON.parse(JSON.stringify(notes));
       
        for(let i=0; i < notes.length; i++){
          if(notes[i]._id === id){
            newNote[i].title = title;
            newNote[i].description = description;
            newNote[i].tag = tag;
            break;
          }
        }
        setNotes(newNote);

      } catch (error) {
        alert(error.message);
        console.log(error.message);        
      }
    }
 
    const deleteNote = async(id) => {
      console.log(`Deleting note with id ${id}`);
      try {
          const response = await fetch(`${host}/api/notes/delete/${id}`, {
            method : 'DELETE',
            headers : {
              'Content-Type': 'application/json',
              'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzN2ZmZjNhM2MwMzNjZGM1OThlMTdiIn0sImlhdCI6MTY5ODE3MTM4MH0.rP-ygqi1OZ4PIFsz2tHV6glU7vLceWnS-tYWjOgMIwg'
            }
          });
          if(response){
            const newNote = notes.filter(item=>{return item._id!==id});
            setNotes(newNote)
          }
        
      } catch (error) {
        alert(error.message);
        console.log(error.message);        
      }
    }

    return (
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote, fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;