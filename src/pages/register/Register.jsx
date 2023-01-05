import React from 'react'
import './register.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const Register = () => {
  return (
  <div className='register'>
    <div className="card">
      <div className="left">
        <h1>Hello social</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum unde. Accusantium quisquam corrupti beatae, adipisci magnam facere quasi a molestiae, soluta assumenda possimus, tempora delectus accusamus aliquam ad dolores?</p>
         <span>Do you have an account</span>
         <Link to="/login">
            <button>Login</button>
         </Link>
      </div>
      <div className="right">
         <h1>Login</h1>
         <form>
            <input type="text" placeholder='username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='password' />
            <input type="text" placeholder='Name' />
            <button>Register</button>
         </form>
      </div>
    </div>
  </div>
  )
}

export default Register
