import React, { useContext} from "react";
import { FavoritesContext } from "../../context/FavoritesProvider";
import Title from '../Title/Title';
import Person from "../Home/Person";
import '../Login/Login.css'

const Favorites = () => {

  const { favorites } = useContext(FavoritesContext);

    return(
      <>
        <Title title="Favoritos"/>

          {favorites.length != 0 ? favorites.map((fav) => {
            return (
              <div className='homeContent' style={{columnCount: 3}}>
                <div className='Home'>
                  <Person key={fav.id} person={fav}/>
                </div>
              </div>
            );
          }): <div className="Favorites"><div id="background-form"><h3 className='Message'>Nenhum favorito.</h3></div></div>}
  
    </>
 
  );
};

export default Favorites;