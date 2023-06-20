import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
const NavBar = () => {
  return(
    <header className="NavBar">
      <h5>PREFEITURA DE CAMPINAS | DIPLOMA ZUMBI DOS PALMARES 2023</h5>
      <nav>
        <ul>
          <li>
            <NavLink to="/">PÁGINA INICIAL</NavLink>
          </li>
          {/* <li>
            <NavLink to="/Favorites">FAVORITOS</NavLink>
          </li> */}
          <li>
            <NavLink to="/Contact">FALE CONOSCO</NavLink>
          </li>
          {/* <li>
            <NavLink to="/Search">BUSCA</NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/Login">ENTRAR</NavLink>
          </li> */}
        </ul>
      </nav>
      <hr className="solid"/>
    </header>
  );
};

export default NavBar;