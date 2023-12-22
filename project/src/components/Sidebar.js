import React from "react";
import "../styles/Sidebar.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  if (window.location.pathname === '/Home'|| window.location.pathname === '/') {
    return null; 
  }
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li className="row"
            id={window.location.pathname === val.link ? "active": "" }
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              
              <div id="icon">{val.Icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
