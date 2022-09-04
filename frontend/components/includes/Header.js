import React from "react";
import Link from "next/link";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
export default function Header() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className="logo">SocaiApp</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Friends</span>
          <span className="topbarLink">Groups</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link href="/profile">
          <img src="" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}
