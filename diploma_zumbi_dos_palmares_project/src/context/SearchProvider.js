import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    setDoc,
    getDoc,
    query,
    where,
    orderBy,
    startAt, 
    endAt
  } from 'firebase/firestore';

  
export const SearchContext = React.createContext();

const SearchProvider = (props) => {

  const [searchResult, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const searchByName = async (event) => {
    const resultListAux = [];

    if (event === undefined) {
      return ;
    }

    try {

      const q = query(collection(db, "peopleList"), where('name', '>=', event), where('name', '<=', event + '\uf8ff'));

      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        resultListAux.push({ id: doc.id, ...doc.data() });
      });
  
      setSearchTerm(resultListAux);
      console.log(resultListAux);

    } catch (error) {
      console.error('Erro ao buscar documentos:', error);
    }
  };

  useEffect(() => {
    searchByName();
  }, []);

  return (
    <SearchContext.Provider value={{ searchByName: searchByName, searchResult: searchResult}}>
      {props.children}
    </SearchContext.Provider>
    
    // <div>
    //   <form onSubmit={handleSearch}>
    //     <input
    //       type="text"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <button type="submit">Buscar</button>
    //   </form>
    //   {searchResults.map((result) => (
    //     <div key={result.id}>{/* Renderize os resultados da busca aqui */}</div>
    //   ))}
    // </div>
  );
};


export default SearchProvider;