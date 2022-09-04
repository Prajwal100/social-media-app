import React from 'react';
import Link from 'next/link'
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
  } from  "@mui/icons-material";
import Online from '../feed/online';
export default function RightSidebar(){
    const HomeRightbar = () => {
        return (
          <>
            <div className="birthdayContainer">
              <img className="birthdayImg" src="assets/gift.png" alt="" />
              <span className="birthdayText">
                <b>Demo User</b> and <b>3 other friends</b> have a birhday today.
              </span>
            </div>
            <h4 className="rightbarTitle  pt-4">Online Friends</h4>
            <ul className="rightbarFriendList">
              {/* {Users.map((u) => (
                <Online key={u.id} user={u} />
              ))} */}
              
              <Online />
              <Online />
              <Online />
              <Online />
              <Online />
              <Online />
              
            </ul>
          </>
        );
      };
    const ProfileRightbar = () => {
        return (
          <>
            <button className="rightbarFollowButton" >
            Follow
            {/* <Add /> */}
              </button>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">KTM</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">PKR</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">
                Single
                </span>
              </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
            <Link
                  href={"/profile/"}
                  style={{ textDecoration: "none" }}
                >
                  <div className="rightbarFollowing">
                    <img
                      src=""
                      alt=""
                      className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">Prajwal</span>
                  </div>
                </Link>
            </div>
          </>
        );
      };
    return (
        <div className="rightbar">
        <div className="rightbarWrapper">
        <HomeRightbar />
        </div>
      </div>
    )
}