import React, { useContext} from "react";
import { PeopleListContext} from "../../context/PeopleListProvider";
import Title from '../Title/Title';
import Person from "../Home/Person";
import '../Login/Login.css'
import '../Home/Home.css'

const Favorites = () => {

  const { favorites } = useContext(PeopleListContext);

    return(
      <>
        <Title title="Favoritos"/>
        <div className='favoritesContent' style={{columnCount: 3}}>
          {favorites.length != 0 ? favorites.map((fav) => {
            return (
              

                <div className='Favorites'>

                  <Person key={fav.id} person={fav}/>

                </div>
              
            );
          }): <div className="Favorites"><div id="background-form"><h3 className='Message'>Nenhum favorito.</h3></div></div>}
        </div>
  
    </>
 
  );
};

export default Favorites;