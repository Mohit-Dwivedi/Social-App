import React from 'react'
import './style.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightBar = () => {
    return (
    <>
      <div className="birthdayContainer">
          <img className='birthdayImg' src="assests/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 others friends</b> have a bhirthday today
          </span>
        </div>
        <img className='rightbarAd' src="assests/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul>
        {Users.map(user => <Online key={user.id} user={user}/>)}
        </ul>
        </>
    )
  }
  const ProfileRightBar = () => {
    return (
      <>
      <h4 className="rightbarTitles">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightInfoKey">City:</span>
          <span className="rightInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightInfoKey">From:</span>
          <span className="rightInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightInfoKey">Relationship:</span>
          <span className="rightInfoValue">single</span>
        </div>
      </div>
      <h4 className='rightbarTitles'>User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightFollowing">
          <img src="assests/person/1.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightFollowing">
          <img src="assests/person/2.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightFollowing">
          <img src="assests/person/3.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightFollowing">
          <img src="assests/person/4.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightFollowing">
          <img src="assests/person/5.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightFollowing">
          <img src="assests/person/6.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightFollowing">
          <img src="assests/person/7.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollwingName">John Carter</span>
        </div>
        <div className="rightFollowing">
          <img src="assests/person/8.jpeg" alt="" className="rightFollowingImg" />
          <span className="rightbarFollwingName">John Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightWrapper">
      {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}

export default Rightbar