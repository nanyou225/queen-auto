import React, { useState } from "react";
import { Link } from "react-router-dom";
import Catalogs from "../../data/catalog.json";
import "./DropdownC.css";

function DropdownC() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={dropdown ? "category__submenu clicked" : "category__submenu"}
      onClick={() => setDropdown(!dropdown)}
    >
      {Catalogs &&
        Catalogs.map((Catalog) => {
          if (Catalog.title === "Catalogue") {
            return (
              <li key={Catalog.id}>
                <Link
                  to={Catalog.path}
                  className="submenu__item"
                  onClick={() => setDropdown(false)}
                >
                  {Catalog.title}
                </Link>
              </li>
            );
          }

          return (
            <li key={Catalog.id}>
              <Link
                to={Catalog.path}
                className="submenu__item"
                onClick={() => setDropdown(false)}
              >
                {Catalog.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default DropdownC;
