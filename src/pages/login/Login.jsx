import React, { useContext } from 'react'
import './login.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
//import { AuthContext } from '../../context/authContext';


const Login = () => {

  /*const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }
*/
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum unde. Accusantium quisquam corrupti beatae, adipisci magnam facere quasi a molestiae, soluta assumenda possimus, tempora delectus accusamus aliquam ad dolores?</p>
           <span>Don't you have an account</span>
           <Link to="/register">
              <button>Register</button>
           </Link>
        </div>
        <div className="right">
           <h1>Login</h1>
           <form>
              <input type="text" placeholder='username' />
              <input type="password" placeholder='password' />
              <button /*onClick={handleLogin}*/>Login</button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default Login
