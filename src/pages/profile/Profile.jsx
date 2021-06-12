import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Post from "../../components/post/Post";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <div className="profileSide">
              <img
                className="profileUserImg"
                src="assets/person/6.jpeg"
                alt=""
              />
              </div>
              <div className="pro">
                <div className="description">
                  __nishit_khalpada__  <button>Edit Profile</button>
                  <br/>
                  0 posts &nbsp; 313 Followers  &nbsp; 512 Following
                  <br/>
                  <br/>
                  From: Rajkot/India<br/>
                  Computer Engineer
                  <br/>
                  hbjcbsevcwkdcnks
                  <br/>
                  ejndrfvusdir
                  <br/>
                </div>
              </div>
            </div>
            
            
            <div className="profileInfo">
                <h4 className="profileInfoName">Nishit Khalpada</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar/>
          </div>
        </div>
      </div>
    </>
  );
}
