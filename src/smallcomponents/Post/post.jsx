import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";

import Comments from '../comments/Comments'

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Post = ({post}) => {
  
  const liked = false;
  
  const [commentOpen, setCommentOpen] = useState(false);
  
  return (
    <div className='post'>
      <div className="container">
          <div className="user">
            <div className="userInfo">
              <img src={post.profilePic} alt="image" />
              <div className="details">
                <Link to={`/profile/${post.userID}`} style={{textDecoration:"none", color:"inherit"}}>
                  <span className='name'>{post.name}</span>
                </Link>
                <span className="date">1 min ago</span>
              </div>
            </div>
            <MoreHorizOutlinedIcon />
          </div>
          <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="image" />

          </div>
          <div className="info">
            <div className="item">
              { liked ? <FavoriteOutlinedIcon /> : FavoriteBorderOutlinedIcon }
              12 likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              <TextsmsOutlinedIcon />
              12 Comments
            </div>
            <div className="item">
              <ShareOutlinedIcon />
              share
            </div>  
          </div>
          {commentOpen && <Comments />}
        </div>
      </div>
  )
}

export default Post
