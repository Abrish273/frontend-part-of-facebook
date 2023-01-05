import React from 'react'
import './home.scss';
import Stories from '../../smallcomponents/Stories/Stories'
import Posts from '../../smallcomponents/Posts/Posts'
import Post from '../../smallcomponents/Post/post'

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
      <Post />
      <h1>Home</h1>
    </div>
  )
}

export default Home
