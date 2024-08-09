import React from 'react'
import './style.css'
import { IoMdPhotos } from "react-icons/io";
import { IoMdPricetag } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaRegSmile } from "react-icons/fa";

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareprofileImg' src="/assests/person/1.jpeg" alt="" />
                <input type="text" className='shareInput' placeholder='whats in your mind'/>
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <IoMdPhotos htmlColor="tomato" className='shareIcon' />
                        <span className='shareOptionText'>Photo or videios</span>
                    </div>
                    <div className="shareOption">
                        <IoMdPricetag htmlColor="tomato" className='shareIcon' />
                        <span className='shareOptionText'>Photo or videios</span>
                    </div>
                    <div className="shareOption">
                        <CiLocationOn htmlColor="green" className='shareIcon' />
                        <span className='shareOptionText'>Photo or videios</span>
                    </div>  
                    <div className="shareOption">
                        <FaRegSmile htmlColor="tomato" className='shareIcon' />
                        <span className='shareOptionText'>Photo or videios</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share