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
    const [search, setSearch] = useState([]);

    const onSearchSubmit = async (event) => {
    
        peopleList.forEach(function(item, i) {
            console.log(item.name);
            console.log(event.target.name.value);
            if(item.name == event.target.name.value){
                setSearch(item); 
            }
        });
    }    

    const fetchPeopleList = async () => {
        const peopleListAux = [];
        try {
            const querySnapshot = await getDocs(collection(db, 'peopleList'));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                peopleListAux.push({ id: doc.id, ...doc.data() });
            });
            setPeopleList(peopleListAux);
            console.log(peopleListAux);
        } catch (error) {
            console.error('Error fetching collection: ', error);
        }
    };

    useEffect(() => {
        fetchPeopleList();
        console.log("[PeopleProvider]");
    }, []);


    return (
        <PeopleListContext.Provider value={{ peopleList: peopleList, onSearchSubmit: onSearchSubmit, search: search}}>
            {props.children}
        </PeopleListContext.Provider>
    );
};

export default PeopleListProvider;