import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import authContext from '../Context/Auth/AuthContext';

function Login() {
   const {login} = useContext(authContext);
   //console.log(login)
    // const credentials ={};
   const [fields, setfields] = useState({email:"", password : ""})

   const process = e => {
    e.preventDefault();
    //eslint-disable-next-line
    console.log(fields);
    login(fields);
   }

   const onchange = e => {
    setfields({...fields, [e.target.name] : e.target.value})
   }
  return (
    <>
    <div className='container col-md-4 my-5'>
        <h3 className='my-3 text-center'><strong>LOGIN</strong></h3> 
        <p className='text-center mb-5'>To Create Your Notes</p>

    <form onSubmit={process}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label" >Email</label>
            <input type="email" className="form-control" name="email" onChange={onchange} id="email" value={fields.email}/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" onChange={onchange} className="form-control" id="password" value={fields.password}/>
        </div>
        <button type="submit" className="btn btn-success">Login</button>
        <Link type="submit" className="btn btn-primary mx-2" to="/signup">Register</Link>
    </form>
    </div>
    </>
  )
}

export default Login