import React from 'react'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/SideBar/Sidebar'
import Rightbar from '../../component/Rightbar/Rightbar'
import Feed from '../../component/Feed/Feed'
import './Home.css'

function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  )
}

export default Home