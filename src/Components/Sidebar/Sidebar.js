import React from "react";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__ul">
        {SidebarData.map((data, index) => {
          return (
            <li key={index} className={`header__sidebar ${data.name}`}>
              <NavLink to={data.link}>{(data.icon, data.name)}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
