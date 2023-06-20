import React, { useContext} from 'react';
import './../Contact/Contact.css';
import Title from '../Title/Title';
import {PeopleListContext} from '../../context/PeopleListProvider';
import Person from '../Home/Person';

const Search = (props) => {
  const SearchCtx = useContext(PeopleListContext);
  const { search } = useContext(PeopleListContext);
  return(
    <div>
      <Title title="Busca"/>
      <div className="Search">
        <div id="background-form">
          <form onSubmit={SearchCtx.onSearchSubmit}> 
            <input type="text" name="nome" placeholder="Digite o nome do homenageado" id="name" required />
            <input type="submit" className='formButton' value="Buscar" />
          </form>
          { search.name != null ? <Person key={search.id} person={search}/>: null }
        </div>
      </div>
    </div>
  );
};
export default Search;