import React, { useContext } from 'react';
import './navbar.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';


import { DarkModeContext } from '../../context/darkModeContext';
//import { AuthContext } from '../../context/authContext';



const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  //const { currentUser } = useContext(AuthContext);
  
  return (

    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span>NewSocial</span>
        </Link>
        <HomeOutlinedIcon />
        {
          darkMode ? <WbSunnyOutlinedIcon onClick={toggle}/> : <DarkModeOutlinedIcon onClick={toggle}/>

        }
        <WidgetsOutlinedIcon />
        <div className='searchbar'>
          <SearchOutlinedIcon />
          <input type="text" placeholder="search..." />
        </div>
      </div>
      <div className="right"> 
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img /*src={currentUser.profilePic}*/ alt="person" />
          <span>Amare Abebe</span>  
        </div>
      </div>
    </div>
  )
}

export default Navbar

  
   
   /*npm audit fix --force */
          /*<span>Amare Abebe{currentUser.name}</span>  */