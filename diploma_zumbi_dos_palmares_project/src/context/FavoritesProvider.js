import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import {
    collection,
    addDoc,
    getDocs,
    query,
    where, 
    update
  } from 'firebase/firestore';

export const FavoritesContext = React.createContext();

const FavoritesProvider = (props) => {

  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    const favoritesAux = [];
    try {
      const q = query(collection(db, "peopleList"), where('isFavorite', '==', true));

      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        favoritesAux.push({ id: doc.id, ...doc.data() });
      });
  
      setFavorites(favoritesAux);
      console.log(favoritesAux);

    } catch (error) {
      console.error('Erro ao buscar documentos:', error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);


  const onFavorite = async (event) => {
    console.log("clickeeeeeeeeei");

    const newData = {
      name: event.name,
      bio: event.bio,
      birthdate: event.birthdate, 
      deathdate: event.deathdate, 
      imageUrl: event.imageUrl,
      isFavorite: event.isFavorite == true? false : true,
    };

    try {
          const docRef = await addDoc(collection(db, "peopleList"), event);
          console.log(docRef);
          getFavorites();
      } catch (error) {
          console.error('Error fetching collection: ', error);
      }
    };
        
    return (
      <FavoritesContext.Provider value={{ onFavorite: onFavorite, favorites: favorites }}>
        {props.children}
      </FavoritesContext.Provider>
    );
    
};

export default FavoritesProvider;