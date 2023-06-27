import React, { useContext} from 'react';
import './../Contact/Contact.css';
import Title from '../Title/Title';
import {SearchContext} from '../../context/SearchProvider';
import Person from '../Home/Person';

const Search = (props) => {
  const SearchCtx = useContext(SearchContext);
  const { searchResult } = useContext(SearchContext);
  return(
    <div>
      <Title title="Busca"/>
      <div className="Search">
        <div id="background-form">
          <div className='search'>
            <input type="text" id='name' onChange={(e) => SearchCtx.searchByName(e.target.value)}/>
          </div>

        </div>
        <div className='homeContent' style={{columnCount: 3}}>
          {searchResult.length != 0 ? searchResult.map((result) => {
            return (
              <div className='Home'>
                
                <Person key={result.id} person={result}/>
              </div>
            );
          }): null}
        </div>
      </div>
    </div>
  );
};
export default Search;