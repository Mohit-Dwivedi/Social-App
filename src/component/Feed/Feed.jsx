import React from 'react'
import './style.css'
import Share from '../Share/Share'
import Spot from '../Spot/Spot'
import {Posts} from "../../dummyData.js"

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Spot key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default Feed