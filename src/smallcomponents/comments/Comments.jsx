import React, { useContext } from 'react'
import './Comments.scss'

import { AuthContext } from '../../context/authContext'

const Comments = () => {
    
    const {currentUser} = useContext(AuthContext);

    const comments = [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          name: "Amare Abebe",
          userID: 1,
          profilePic: "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            name: "Amare Abebe",
            userID: 1,
            profilePic: "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7",
          },
          
    ];

    return (
    <div className='comments'>
      <div className="write">
        <img src={currentUser.profilePic} alt="profile pic" />
        <input type="text" placeholder='write a comment' />
        <button>Send</button>
      </div>
      {comments.map(comment => (
        <div className="comment">
            <img src={comment.profilePic} alt="profilr pic" />
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className='date'>1 hour ago</span>

        </div>
      ))}
    </div>
  )
}

export default Comments
