import React from 'react'
import { AddComment, Comment, MoreVert, ShareRounded } from "@mui/icons-material";

function Post() {
  return (
    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          {/* <Link to={`/profile/${user.username}`}> */}
          <img
            className="postProfileImg"
            src="assets/person/noAvatar.png"
            alt=""
          />
          {/* </Link> */}
          <span className="postUsername">Prajwal Rai</span>
          <span className="postDate">10 min ago</span>
        </div>
        <div className="postTopRight"><MoreVert /></div>
      </div>
      <div className="postCenter">
        <span className="postText">test</span>
        <img className="postImg" src="/assets/post/3.jpeg" alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
         
          <img
            className="likeIcon"
            src="/assets/heart.png"

            // onClick={likeHandler}
            alt=""
          />
          <span className="postLikeCounter">3.1k likes</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText"><Comment />3 comments</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText"><ShareRounded /> 3 share</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Post