import React from 'react'
import { Link } from "react-router-dom";
import garagePs from "../../data/garagePatner.json";
import "./DropdownG.css"

function DropdownG() {
  return (
    <ul className="garage__submenu">
    {garagePs &&
        garagePs.map((garageP) => {
          return (
            <li key={garageP.id} className="submenu-item">
              <Link to="/garagePatner">{garageP.title}</Link>
            </li>
          );
        })}
  </ul>
  )
}

export default DropdownG