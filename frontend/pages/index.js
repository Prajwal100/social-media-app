import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <>
      <Head>
        <title>Social Media App</title>
      </Head>

      <Layout></Layout>
    </>
    // <div className="feed">
    //   <div className="feedWrapper">
    //     <div className="share">
    //       <div className="shareWrapper">
    //         <div className="shareTop">
    //           <img
    //             className="shareProfileImg"
    //             src="person/noAvatar.png"
    //             alt=""
    //           />
    //           <input
    //             placeholder="What's in your mind "
    //             className="shareInput"
    //           />
    //         </div>
    //         <hr className="shareHr" />
    //         {/* {file && (
    //           <div className="shareImgContainer">
    //             <img className="shareImg" src="" alt="" />
    //           </div>
    //         )} */}
    //         <form className="shareBottom">
    //           {/* <div className="shareOptions">
    //             <label htmlFor="file" className="shareOption">
    //               <PermMedia htmlColor="tomato" className="shareIcon" />
    //               <span className="shareOptionText">Photo or Video</span>
    //               <input
    //                 style={{ display: "none" }}
    //                 type="file"
    //                 id="file"
    //                 accept=".png,.jpeg,.jpg"
    //               />
    //             </label>
    //             <div className="shareOption">
    //               <Label htmlColor="blue" className="shareIcon" />
    //               <span className="shareOptionText">Tag</span>
    //             </div>
    //             <div className="shareOption">
    //               <Room htmlColor="green" className="shareIcon" />
    //               <span className="shareOptionText">Location</span>
    //             </div>
    //             <div className="shareOption">
    //               <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
    //               <span className="shareOptionText">Feelings</span>
    //             </div>
    //           </div> */}
    //           <button className="shareButton" type="submit">
    //             Share
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //     <div className="post">
    //       <div className="postWrapper">
    //         <div className="postTop">
    //           <div className="postTopLeft">
    //             {/* <Link to={`/profile/${user.username}`}> */}
    //             <img
    //               className="postProfileImg"
    //               // src={
    //               //   user.profilePicture
    //               //     ? PF + user.profilePicture
    //               //     : PF + "person/noAvatar.png"
    //               // }
    //               alt=""
    //             />
    //             {/* </Link> */}
    //             <span className="postUsername">Test</span>
    //             <span className="postDate">test</span>
    //           </div>
    //           <div className="postTopRight">{/* <MoreVert /> */}</div>
    //         </div>
    //         <div className="postCenter">
    //           <span className="postText">test</span>
    //           <img className="postImg" alt="" />
    //         </div>
    //         <div className="postBottom">
    //           <div className="postBottomLeft">
    //             <img
    //               className="likeIcon"
    //               // src={`${PF}like.png`}
    //               // onClick={likeHandler}
    //               alt=""
    //             />
    //             <img
    //               className="likeIcon"
    //               // src={`${PF}heart.png`}
    //               // onClick={likeHandler}
    //               alt=""
    //             />
    //             <span className="postLikeCounter">3 people like it</span>
    //           </div>
    //           <div className="postBottomRight">
    //             <span className="postCommentText">3 comments</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
