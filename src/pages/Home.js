import React, { Fragment } from "react";
import Header from "../components/header/Header";
import NavbarCategory from "../components/navbarCategory/NavbarCategory";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <NavbarCategory />
      <h1>Page Accueil</h1>
    </Fragment>
  );
};

export default Home;
