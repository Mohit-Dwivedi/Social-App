import React, { useState } from 'react'
import './style.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import {Users} from "../../dummyData.js"

const Spot = ({post}) => {

    const [like, setlike] = useState(post.like)
    const [isliked, setisliked] = useState(false)

    const likehandler = () => {
        setlike(isliked ? like-1 : like+1)
        setisliked(!isliked)
    }
  return (
    <div className='spot'>
        <div className="spotWrapper">
            <div className="spotTop">
                <div className="spotTopLeft">
                    <img className='spotProfileImg' src={Users.filter(u => u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="spotUserName">{Users.filter(u => u.id===post.userId)[0].username}</span>
                    <span className="spotDate">{post.date}</span>
                </div>
                <div className="spotTopRight">
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div className="spotCenter">
                <span className="spotText">{post?.desc}</span>
                <img className='spotImg' src={post.photo} alt="" />
            </div>
            <div className="spotBottom">
                <div className="spotBottomLeft">
                    <img className='spotLikeIcon' src="/assests/like.png" onClick={likehandler} alt="" />
                    <img className='spotLikeIcon' src="/assests/heart.png" onClick={likehandler} alt="" />
                    <span className="likecounter">{like} people liked it</span>
                </div>
                <div className="spotBottomRight">
                    <div className="spotCommentText">{post.comment} comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Spot