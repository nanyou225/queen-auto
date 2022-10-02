import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "remixicon/fonts/remixicon.css";
import "./HeaderStyle.css";

const navLinks = [
  { display: "Home", url: "#" },
  { display: "Contact", url: "#" },
  { display: "Connexion", url: "#" },
  { display: "Panier", url: "#" },
];

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <Link rel="stylesheet" href="">
                <span>QUEEN-AUTO</span>
              </Link>
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef}>
            <div className="nav__list__wrapper  d-flex align-items-center justify-content-between gap=5">
              <div className="nemu__left">
                <div className="custom__search">
                  <input
                    type="text"
                    placeholder="Rechercher un produit, une réference ou une marque"
                  />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>
              <ul className="nav__list">
                {navLinks &&
                  navLinks.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <Link href={item.url} onClick={menuToggle}>
                        {item.display}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="mobile__menu">
            <span>
              <i className="ri-menu-4-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
