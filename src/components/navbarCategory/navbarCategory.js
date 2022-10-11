import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import DropdownC from "../dropdown/DropdownC";
import DropdownG from "../dropdown/DropdownG";

import "./NavbarCategory.css";

const NavbarCategory = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownG, setDropdownG] = useState(false);
  return (
    <header className="NavCatalog">
      <Container>
        <ul className="catalog__nav">
          <li
            className="dropdown"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <Link className="link" to="/catalog">
              Catalogue
            </Link>
            {dropdown && <DropdownC />}
          </li>
          <li className="catalog__item">
            <Link to="balai">Balai d'essuie-glace</Link>
          </li>
          <li className="catalog__item">
            <Link to="batterie">Batterie</Link>
          </li>
          <li className="catalog__item">
            <Link to="huile">Huile Moteur</Link>
          </li>
          <li className="catalog__item">
            <Link to="pneus">Pneus</Link>
          </li>
          <li className="catalog__item">
            <Link to="accessoire">Accessoires & Entretien</Link>
          </li>
          <li className="catalog__item">
            <Link to="outillage">Outillage</Link>
          </li>
          <li
            className="garage__item"
            onMouseEnter={() => setDropdownG(true)}
            onMouseLeave={() => setDropdownG(false)}
          >
            <Link className="linkG" to="/garagePartner">
              Garage Partenaire
            </Link>
            {dropdownG && <DropdownG />}
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default NavbarCategory;
