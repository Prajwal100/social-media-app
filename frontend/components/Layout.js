import React from "react";
import Feed from "./feed";
import Header from "./includes/Header";
import LeftSidebar from "./includes/LeftSidebar";
import RightSidebar from "./includes/RightSidebar";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </>
  );
};

export default Layout;
