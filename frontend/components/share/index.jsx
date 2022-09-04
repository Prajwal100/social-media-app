import React from 'react'
import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions,
    Cancel,
  } from "@mui/icons-material";
function Share() {
  return (
    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img
          className="shareProfileImg"
          src="/assets/person/7.jpeg"
          alt=""
        />
        <input
          placeholder="What's on your mind, Prajwal? "
          className="shareInput"
        />
      </div>
      <hr className="shareHr" />
      {/* <div className="shareImgContainer">
          <img className="shareImg" src="" alt="" />
        </div> */}
      <form className="shareBottom">
        <div className="shareOptions">
          <label htmlFor="file" className="shareOption">
            <PermMedia htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
            />
          </label>
          <div className="shareOption">
            <Label htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
            <Room htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
            <span className="shareOptionText">Feelings</span>
          </div>
        </div>
        <button className="shareButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Share