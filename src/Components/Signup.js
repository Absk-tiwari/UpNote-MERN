import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import authContext from '../Context/Auth/AuthContext';

function Signup() {
  const {signup} = useContext(authContext);
  //console.log(login)
  const [fields, setfields] = useState({name: "", email:"", password : "", cpassword: ""});

  const process = e => {
   e.preventDefault();
   console.log(fields);
   signup({name :fields.name,email: fields.email, password :fields.password});
   setfields({name: "", email:"", password : "", cpassword: ""})
  }

  const onchange = e => {
   setfields({...fields, [e.target.name] : e.target.value})
  }


  return (
    <>
    <div className='container col-md-4 my-4'>
        <h3 className='my-3 text-center'><strong>SIGNUP</strong></h3> 
        <p className='text-center mb-5'>To Create Your Notes</p>
    <form onSubmit={process}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label" >Your Name</label>
            <input type="text" className="form-control" name="name" onChange={onchange} id="name" value={fields.name}/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label" >Email</label>
            <input type="email" className="form-control" name="email" onChange={onchange} id="email" value={fields.email}/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Create Password</label>
            <input type="password" name="password" onChange={onchange} className="form-control" id="password" value={fields.password}/>
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" name="cpassword" onChange={onchange} className="form-control" id="cpassword" value={fields.cpassword}/>
        </div>

        <button type="submit" 
              disabled={fields.name.length < 5 || fields.email.length < 8 || fields.password.length < 8 || fields.cpassword.length < 8 ? true : ""}
         className="btn btn-success">Register</button>

        <Link className="btn btn-primary mx-2" to="/login">Login</Link>
    </form>
    </div>
    </>
  )
}

export default Signup