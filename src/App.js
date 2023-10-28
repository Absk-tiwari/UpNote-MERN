import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import NoteState from './Context/Notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/> }/>
            <Route exact path='/about' element={<About/> }/>
          </Routes>
        </Router>
      </div>
    </NoteState>
    </>
  );
}

export default App;
