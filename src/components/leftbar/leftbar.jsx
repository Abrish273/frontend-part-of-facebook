import React, { useContext } from 'react'
import './leftbar.scss'

import A from '../../assets/1.png'
import B from '../../assets/2.png'
import C from '../../assets/3.png'
import D from '../../assets/4.png'
import E from '../../assets/5.png'
import F from '../../assets/6.png'
import G from '../../assets/7.png'
import H from '../../assets/8.png'
import I from '../../assets/9.png'
import J from '../../assets/10.png'
import K from '../../assets/11.png'
import L from '../../assets/12.png'
import M from '../../assets/13.png'
import N from '../../assets/friend.png'

import { AuthContext } from '../../context/authContext';

const Leftbar = () => {
  
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="first">
        <div className="single">
          <img src={currentUser.profilePic} alt="image" />
          <span>{currentUser.name}</span>
        </div>
        <div className="single">
          <img src={B} alt="image" />
          <span>Friends</span>
        </div>
        <div className="single">
          <img src={C} alt="image" />
          <span>Groups</span>
        </div>
        <div className="single">
          <img src={D} alt="image" />
          <span>Marketplace</span>
        </div>
        <div className="single">
          <img src={E} alt="image" />
          <span>Watch</span>
        </div>
        <div className="single">
          <img src={F} alt="image" />
          <span>Memories</span>
        </div>
      </div>
      <hr />
      <div className="second">
         <span>Your Shortcuts</span>
         <div className="single">
          <img src={G} alt="image" />
          <span>Events</span>
        </div>
        <div className="single">
          <img src={H} alt="image" />
          <span>Gaming</span>
        </div>
        <div className="single">
          <img src={I} alt="image" />
          <span>Gallery</span>
        </div>
        <div className="single">
          <img src={J} alt="image" />
          <span>Videos</span>
        </div>
        <div className="single">
          <img src={N} alt="image" />
          <span>Messages</span>
        </div>
      </div>
      <hr />
      <div className="third">
         <span>Others</span>
         <div className="single">
          <img src={K} alt="image" />
          <span>Fundraiser</span>
        </div>
        <div className="single">
          <img src={L} alt="image" />
          <span>Tutorial</span>
        </div>
        <div className="single">
          <img src={M} alt="image" />
          <span>Courses</span>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
