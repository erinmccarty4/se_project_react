import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";

function SideBar({ handleEditClick, handleLogOut }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__info">
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar}
          alt={currentUser?.name}
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <button className="sidebar__edit" onClick={handleEditClick}>
        Update Profile Data
      </button>
      <button onClick={handleLogOut} className="sidebar__logout">
        Log Out
      </button>
    </div>
  );
}

export default SideBar;
