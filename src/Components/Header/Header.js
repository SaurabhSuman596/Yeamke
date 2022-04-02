import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { login, log_out } from "../../Redux/Actions/auth.action";
import { useNavigate, NavLink } from "react-router-dom";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };

  const logOutHandler = () => {
    dispatch(log_out());
  };
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <header className="header">
      <div className="header__left">
        <IconButton
          onClick={() => setSidebar(!sidebar)}
          className="header__hambutton"
        >
          {sidebar ? (
            <ClearIcon className="header__ham" fontSize="large" />
          ) : (
            <MenuIcon className="header__ham" fontSize="large" />
          )}
        </IconButton>
        <NavLink to="/">
          <img
            className="header__logo"
            src="https://cdn.wionews.com/images/wion-logo.png"
            alt="Yemke Logo"
          />
        </NavLink>

        <ul className="header__link">
          <li className="header__home">
            <NavLink className="header__navlink" to="/">
              HOME
            </NavLink>
          </li>
          <li className="header__video">
            <NavLink className="header__navlink" to="/search/:id">
              VIDEO
            </NavLink>
          </li>
          <li className="header__home">
            <NavLink className="header__navlink" to="/post">
              POST
            </NavLink>
          </li>
          <li className="header__home">
            <NavLink className="header__navlink" to="/about">
              ABOUT
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <div className="header__inputContainer">
          <form onSubmit={handleSubmit}>
            <input
              className="header__input"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="header__inputButton">
              <SearchIcon className="header__searchIcon" fontSize="large" />
            </button>
          </form>
        </div>
        <IconButton
          onClick={handleLogin}
          className="header__accountCircleButton"
        >
          {user ? (
            <img
              className="header__logoImg"
              src={user.photoURL}
              alt={user.name}
            />
          ) : (
            <AccountCircleIcon
              className="header__accountCircleIcon"
              fontSize="large"
            />
          )}
        </IconButton>
        <div onClick={logOutHandler} className="header__logout">
          LOG OUT
        </div>
      </div>
      {sidebar ? (
        <Sidebar />
      ) : (
        () => {
          return setSidebar(false);
        }
      )}
    </header>
  );
}

export default Header;
