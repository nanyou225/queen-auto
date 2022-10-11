import React, { useState } from "react";
import { Link } from "react-router-dom";
import garagePs from "../../data/garagePatner.json";
import "./DropdownG.css";

function DropdownG() {
  const [dropdownG, setDropdownG] = useState(false);

  return (
    <ul
      className={dropdownG ? "garage__submenu" : "garage__submenu"}
      onClick={() => setDropdownG(!dropdownG)}
    >
      {garagePs &&
        garagePs.map((garageP) => {
          if (garagePs.name === "Garage Partenaire") {
            return (
              <li key={garageP.id} className="submenu-item">
                <Link
                  to={garageP.path}
                  className="submenu__item"
                  onClick={() => setDropdownG(false)}
                >
                  {garageP.name}
                </Link>
              </li>
            );
          }
          return (
            <li key={garageP.id} className="submenu-item">
              <Link
                to={garageP.path}
                className="linkG"
                onClick={() => setDropdownG(false)}
              >
                {garageP.name}
                {garageP.logo}
                {garageP.location}
                {garageP.path}
                {garageP.day}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default DropdownG;
