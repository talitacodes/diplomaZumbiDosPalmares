import React, { useContext} from "react";
import { NavLink } from "react-router-dom";
import { UsersContext } from '../../context/UsersProvider'
import './Navbar.css';
const NavBar = () => {
  const { authenticated, isAdmin } = useContext(UsersContext);
  return(
    <header className="NavBar">
      <h5>PREFEITURA DE CAMPINAS | DIPLOMA ZUMBI DOS PALMARES 2023</h5>
      <nav>
        <ul>
          <li>
            <NavLink to="/">PÁGINA INICIAL</NavLink>
          </li>
          <li>
            <NavLink to="/Search">BUSCA</NavLink>
          </li>
          {
            authenticated ?  
            <li><NavLink to="/Favorites">FAVORITOS</NavLink>
            </li> : null
          }
          <li>
            <NavLink to="/Contact">FALE CONOSCO</NavLink>
          </li>
          {
            authenticated && isAdmin ?
            <li>
            <NavLink to="/New">NOVO HOMENAGEADO</NavLink>
            </li>: null
          }
       
          <li>
            <NavLink to="/Login">{!authenticated ? 'ENTRAR': 'MINHA CONTA'}</NavLink>
          </li>
        </ul>
      </nav>
      <hr className="solid"/>
    </header>
  );
};

export default NavBar;