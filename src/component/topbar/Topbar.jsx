import React from 'react'
import "./Topbar.css"
import {IoIosPersonAdd} from "react-icons/io"
import {FaSearch} from "react-icons/fa"
import {IoChatboxEllipses} from "react-icons/io5"
import {IoMdNotifications} from "react-icons/io"

const Topbar = () => {
  return (
    <div className='topbarcontainer'>
        <div className="topbarLeft">
            <span className="logo">Lamasocial</span>
        </div>
        <div className="topbarcenter">
            <div className="Searchabr">
                <FaSearch className='SearchIcon'/>
                <input type="text" placeholder='Search for friend, post or video' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">HomePage</span>
                <span className="topbarLink">TimeLine</span>
            </div>
            <div className="topbaIcons">
                <div className="topbarIconsItem">
                    <IoIosPersonAdd />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconsItem">
                    <IoChatboxEllipses />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconsItem">
                    <IoMdNotifications />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assests/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default Topbar