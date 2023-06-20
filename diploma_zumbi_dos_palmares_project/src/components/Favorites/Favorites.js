import React from "react";
import './Favorites.css';
const Favorites = () => {
    return(
      <div id="titulo">
        <h1>Favoritos</h1>
        <section>
          <div className="row">
            <div className="column">
              <img src="./images/1.jpg" alt="pessoa"/>
              <h4>KATARINA ALVES</h4>

            </div>
            <div className="column">
              <img src="./images/2.jpg" alt="pessoa"/>
              <h4>ELISE COSTA</h4>

            </div>
            <div className="column">
              <img src="./images/3.jpg" alt="pessoa"/>
              <h4>LÚCIAN FERREIRA</h4>

            </div>
        </div>
      </section>
    </div>
 
     
    );
};

export default Favorites;