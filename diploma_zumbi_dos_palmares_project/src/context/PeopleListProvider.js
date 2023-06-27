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
    
  } from 'firebase/firestore';

export const PeopleListContext = React.createContext();

const PeopleListProvider = (props) => {

    const [peopleList, setPeopleList] = useState([]);

    const [favorites, setFavorites] = useState([]);

    const fetchPeopleList = async () => {
        console.log("atualizando home");
        const peopleListAux = [];
        try {
            const querySnapshot = await getDocs(collection(db, 'peopleList'));
            querySnapshot.forEach((doc) => {
                peopleListAux.push({ id: doc.id, ...doc.data() });
            });
            setPeopleList(peopleListAux);
            console.log(peopleListAux);
        } catch (error) {
            console.error('Error fetching collection: ', error);
        }
    };

    const onFavorite = async (event) => {
        console.log("clickeeeeeeeeei");
        console.log(event);

        try {

            const itemRef = doc(db, "peopleList", event.id);

            await updateDoc(itemRef, {
            isFavorite: event.isFavorite == true ? false : true,
            });

            await getFavorites();

            await fetchPeopleList();
    
        } catch (error) {
              console.error('Error fetching collection: ', error);
        }
    };

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
            
    const onNewPersonSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        const newPerson = {
            name: event.target.name.value,
            bio: event.target.bio.value,
            birthdate: event.target.birthdate.value, 
            deathdate: event.target.deathdate.value, 
            imageUrl: event.target.imageUrl.value,
            isFavorite: false,
        };
        try {
            const docRef = await addDoc(collection(db, "peopleList"), newPerson);
            console.log(docRef);
            fetchPeopleList();
            alert("Cadastro realizado com sucesso!");

        } catch (error) {
            console.error('Error fetching collection: ', error);
            alert("Ocorreu um erro ao cadastrar novo homenageado");
        }
    };

    useEffect(() => {
        fetchPeopleList();
        getFavorites();
    }, []);


    return (
        <PeopleListContext.Provider value={{ peopleList: peopleList, onFavorite: onFavorite, favorites: favorites, onNewPersonSubmit: onNewPersonSubmit }}>
            {props.children}
        </PeopleListContext.Provider>
    );
};

export default PeopleListProvider;