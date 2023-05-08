import "./navbar.scss";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { toggle, theme } = useContext(ThemeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Socialmente</span>
        </Link>
        <HomeOutlinedIcon />
        <GridOnOutlinedIcon />
        {theme ? (
          <DarkModeOutlinedIcon onClick={toggle} />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggle} />
        )}
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placehodler="Search" />
        </div>
      </div>
      <div className="right">
        <Person2OutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src={"/upload/" + currentUser.profilePic} alt="you" />
          <Link to={"/profile/" + currentUser.id}>
            <span>{currentUser.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
