import menu from "../assets/menu.svg";
import user from "../assets/user.svg";
import logout from "../assets/logout.svg";
import "./Header.css";

export function Header() {
  return (
    <div className="header-container">
      <img src={menu} alt="menu-icon" className="menu-icon" />
      <h1 className="header-title">BookApp</h1>
      <div className="right-header">
        <div className="user-container">
          <img src={user} alt="user-icon" />
        </div>
        <img src={logout} alt="logout-icon" />
      </div>
    </div>
  );
}
