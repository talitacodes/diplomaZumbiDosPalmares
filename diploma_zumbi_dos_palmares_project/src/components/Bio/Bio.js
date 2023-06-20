import React from "react";
import './Bio.css';
const Bio = () => {
    return(
      <div className="Bio">
        <div id="titulo">
          <h1>Nome</h1>
          <h3>Data de nascimento</h3>
        </div>
        <div> <img src="./images/8.jpg" alt="pessoa" id="imagem-detalhes"/></div>
        <p id="biografia">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris elit,
          condimentum eu nibh eu, tincidunt fringilla dolor. Mauris nulla dui,
          venenatis vitae urna sit amet, placerat commodo nunc. Sed ultricies
          tellus et magna tristique maximus. Quisque ut luctus dolor, ut volutpat
          magna. Fusce non arcu felis. Sed risus tortor, sollicitudin vitae augue in,
          congue tempus lectus. Quisque fringilla et nibh sit amet dignissim.
          Nunc odio nibh, sodales a imperdiet eu, egestas tristique mi.
          Quisque a finibus libero, vitae vestibulum sem. Aenean ac eros enim.
          Morbi cursus ante interdum ullamcorper consectetur.</p>  
        </div> 
    );
    
};

export default Bio;