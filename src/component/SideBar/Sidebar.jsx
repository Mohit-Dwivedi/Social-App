import React from 'react'
import './style.css'
import { MdOutlineRssFeed } from "react-icons/md";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { RiRedPacketLine } from "react-icons/ri";
import { MdEvent } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import {Users} from '../../dummyData'


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarLIST">
          <li className="sidebarListsitem">
            <MdOutlineRssFeed className='sidebarIcon' />
            <span className="sidebarListitemText">Feed</span>
          </li>
          <li className="sidebarListsitem">
            <BsFillChatSquareTextFill className='sidebarIcon' />
            <span className="sidebarListitemText">Chats</span>
          </li>
          <li className="sidebarListsitem">
            < FaCirclePlay className='sidebarIcon' />
            <span className="sidebarListitemText">Videos</span>
          </li>
          <li className="sidebarListsitem">
            < MdGroup className='sidebarIcon' />
            <span className="sidebarListitemText">Group</span>
          </li>
          <li className="sidebarListsitem">
            < FaBookmark className='sidebarIcon' />
            <span className="sidebarListitemText">Bookmarks</span>
          </li>
          <li className="sidebarListsitem">
            < GoQuestion className='sidebarIcon' />
            <span className="sidebarListitemText">Questions</span>
          </li>
          <li className="sidebarListsitem">
            < RiRedPacketLine className='sidebarIcon' />
            <span className="sidebarListitemText">Jobs</span>
          </li>
          <li className="sidebarListsitem">
            < MdEvent className='sidebarIcon' />
            <span className="sidebarListitemText">Events</span>
          </li>
          <li className="sidebarListsitem">
            < RiGraduationCapFill className='sidebarIcon' />
            <span className="sidebarListitemText">Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
       {Users.map(Users => (
           <li className="sidebarFrined">
           <img className='sidebarImage' src={Users.profilePicture} alt="" />
           <span className="sidebarFriedname">{Users.username}</span>
         </li>
       ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar