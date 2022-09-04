import React from 'react'
import Post from '../post'
import Share from '../share'

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
       <Share />
        <Post />
      </div>
    </div>
  )
}

export default Feed