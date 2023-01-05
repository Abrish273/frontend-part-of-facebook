import React from 'react'
import './Posts.scss';
import Post from '../Post/post'
const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "Amare Abebe",
      userID: 1,
      profilePic: "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quibusdam provident voluptatem perspiciatis nisi nihil facilis praesentium nam perferendis expedita iusto, ipsum vel facere, voluptatum ab consectetur in! Et, ad!",
      img: "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7",
    },
    {
        id: 2,
        name: "Ayele Abebe",
        userID: 1,
        profilePic: "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quibusdam provident voluptatem perspiciatis nisi nihil facilis praesentium nam perferendis expedita iusto, ipsum vel facere, voluptatum ab consectetur in! Et, ad!",
        img: "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7",
      },
      {
        id: 3,
        name: "Ayele Abebe",
        userID: 1,
        profilePic: "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quibusdam provident voluptatem perspiciatis nisi nihil facilis praesentium nam perferendis expedita iusto, ipsum vel facere, voluptatum ab consectetur in! Et, ad!",
        img: "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7",
      },
      {
        id: 4,
        name: "Ayele Abebe",
        userID: 1,
        profilePic: "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quibusdam provident voluptatem perspiciatis nisi nihil facilis praesentium nam perferendis expedita iusto, ipsum vel facere, voluptatum ab consectetur in! Et, ad!",
        img: "https://images.app.goo.gl/vsqjiMWm7jFe4fPd7",
      },
  ];
  
  return (
    <div className='posts'>
       {
          posts.map(post => (
          <Post post={post} key={post.id} />
         ))}
    </div>
  )
}

export default Posts
