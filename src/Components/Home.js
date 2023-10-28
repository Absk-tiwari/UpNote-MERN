import AddNote from "./Addnote"
import Alert from "./Alert"
import Notes from "./Notes"

function Home() {
  
  return (
    <>
        <Alert message="Check if it even exists?"/> 
        <AddNote/> 
        <Notes/> 
    </>
  )
}

export default Home