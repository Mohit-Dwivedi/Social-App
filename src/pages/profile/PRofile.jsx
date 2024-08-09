import React from 'react'
import './tyle.css'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/SideBar/Sidebar'
import Rightbar from '../../component/Rightbar/Rightbar'
import Feed from '../../component/Feed/Feed'

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profilecover">
                    <img className='profileCoverImg' src="assests/post/3.jpeg" alt="" />
                    <img className='profileUserImg' src="assests/post/7.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Safak Koncaoglu</h4>
                    <h4 className="profileInfoDesc">Safak Koncaoglu</h4>
                </div>
            </div>
            <div className="profileBottom">
                 <Feed />
                 <Rightbar profile/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile