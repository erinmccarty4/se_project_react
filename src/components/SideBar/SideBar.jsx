import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function SideBar({ weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <div className="sidebar">
      <p className="sidebar__date-time">
        {currentDate}, {weatherData?.city}
      </p>
      <img className="sidebar__avatar" src={avatar} alt="Terrence Tegegne" />
      <p className="sidebar__username">Erin McCarty</p>
      <button type="button" className="sidebar__change-profile-info">
        Change profile data
      </button>
      <button type="button" className="sidebar__log-out">
        Log out
      </button>
    </div>
  );
}

export default SideBar;
