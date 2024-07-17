import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  handleAddClick,
  weatherData,
  handleOpenMenu,
  handleCloseMenu,
  openMenu,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="wtwr logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <nav
        className={`header__menu ${openMenu === true && "header__menu-mobile"}`}
      >
        <ToggleSwitch />
        <button
          className="header__menu-close-button"
          type="button"
          onClick={handleCloseMenu}
        ></button>
        <button
          className="header__add-clothes-button"
          type="button"
          onClick={handleAddClick}
        >
          + Add clothes
        </button>
        <Link to="/profile" className="header__link">
          <div className="header__user-container">
            <p className="header__username">Terrence Tegegne</p>
            <img
              src={avatar}
              alt="Terrance Tegegne"
              className="header__avatar"
            />
          </div>
        </Link>
      </nav>
      <button className="header__menu-button" onClick={handleOpenMenu}></button>
    </header>
  );
}

export default Header;