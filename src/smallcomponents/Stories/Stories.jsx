import React, { useContext } from 'react'
import './Stories.scss'
import { AuthContext } from '../../context/authContext'

const Person = ({ name }) => {
   
  const {currentUser} = useContext(AuthContext);

  const stories = [
   {
    id: 1,
    name:"Amare Abebe",
    img: "https://images.app.goo.gl/PSBafB46XwrAG91PA"
   },
   {
    id: 2,
    name:"Amare Abebe",
    img: "https://images.app.goo.gl/PSBafB46XwrAG91PA"
   },
   {
    id: 3,
    name:"Amare Abebe",
    img: "https://images.app.goo.gl/PSBafB46XwrAG91PA"
   },
   {
    id: 4,
    name:"Amare Abebe",
    img: "https://images.app.goo.gl/PSBafB46XwrAG91PA"
   },
  ];

  return (
    <div className='stories'>
      <div className='story'>
        <img src={currentUser.profilePic} alt="alt" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div> 
      {stories.map(story => (
        <div className='story' key={story.id}>
          <img src={story.img} alt="alt" />
          <span>{story.name}</span>
        </div>   
      ))}
    </div>
  )
}

export default Person
