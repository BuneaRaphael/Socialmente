import "./rightbar.scss";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
const Rightbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>This Text</span>
          <div className="user">
            <div className="userinfo">
              <img src={"/upload/" + currentUser.profilePic} alt="" />
              <span>{currentUser.username}</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Unfollow</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src={"/upload/" + currentUser.profilePic} alt="" />
              <span>{currentUser.username}</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Unfollow</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userinfo">
              <img src={"/upload/" + currentUser.profilePic} alt="" />
              <p>
                <span>{currentUser.username}</span> Changed their profile
                picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src={"/upload/" + currentUser.profilePic} alt="" />
              <p>
                <span>{currentUser.username}</span> Changed their profile
                picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src={"/upload/" + currentUser.profilePic} alt="" />
              <p>
                <span>{currentUser.username}</span> Changed their profile
                picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userinfo">
              <img src={"/upload/" + currentUser.profilePic} alt="" />
              <div className="online" />
              <span>{currentUser.username}</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src={"/upload/" + currentUser.profilePic} alt="" />
              <div className="online" />
              <span>{currentUser.username} </span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src={"/upload/" + currentUser.profilePic} alt="" />
              <div className="online" />
              <span>{currentUser.username}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
