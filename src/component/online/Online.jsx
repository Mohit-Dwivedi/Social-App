import React from 'react'
import './style.css'

const Online = ({user}) => {
  return (
    <div>
         <li>
            <div className="rightbarconteiner">
              <img className='rightprofileImg' src={user.profilePicture} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
    </div>
  )
}

export default Online