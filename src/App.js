
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/navbar';
import Leftbar from './components/leftbar/leftbar';
import Rightbar from './components/rightbar/rightbar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import './style.scss'

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
//import { AuthContext } from './context/authContext';


function App() {
  
  const currentUser = true;
  //const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);

  /*To create a layout(one component chnaging schema) */
  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{display:"flex"}}>
           <Leftbar />
           <div style={{ flex:6 }} >
              <Outlet />
           </div>
           <Rightbar />
        </div>
      </div>
    )
  }

  /*To create only a loggedin person can see the home and the profile page 
  unless goto the Login page*/
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }

  /*To create a route between a login and and register page */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile/:id",
          element:<Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
 
export default App;
