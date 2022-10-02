import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Catalogs from "../../data/catalog.json";
import garagePs from "../../data/garagePatner.json";
import "./NavbarCategory.css";

const NavbarCategory = () => {
  return (
    <header className="NavCatalog">
      <Container>
        <div className="catalog">
          <ul className="catalog__nav">
            <li className="catalog__item">
              <Link to="/catalog">Catalogue</Link>
              <ul className="dropdown">
                {Catalogs &&
                  Catalogs.map((Catalog) => {
                    return (
                      <li key={Catalog.id}>
                        <Link to="/catalog_item">{Catalog.title}</Link>
                      </li>
                    );
                  })}
              </ul>
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
            <li className="catalog__item">
              <Link to="/garagePartner">Garage Partenaire</Link>
              <ul className="garage__nav">
                {garagePs &&
                  garagePs.map((garageP) => {
                    return (
                      <li key={garageP.id} className="garage__item">
                        <Link to="/garagePatner">{garageP.title}</Link>
                      </li>
                    );
                  })}
              </ul>
            </li>
          </ul>
        </div>

        <div className="garage">
          <ul></ul>
        </div>
      </Container>
    </header>
  );
};

export default NavbarCategory;
