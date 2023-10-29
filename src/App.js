import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import NoteState from './Context/Notes/NoteState';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AuthState from './Context/Auth/AuthState';

function App() {
  return (
    <>
    <NoteState>
      <AuthState>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/> }/>
            <Route exact path='/about' element={<About/> }/>
            <Route exact path='/login' element={<Login/> }/>
            <Route exact path='/signup' element={<Signup/> }/>
          </Routes>
        </Router>
      </div>
      </AuthState>
    </NoteState>
    </>
  );
}

export default App;
