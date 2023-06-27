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

    const fetchPeopleList = async () => {
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

    useEffect(() => {
        fetchPeopleList();
    }, []);


    return (
        <PeopleListContext.Provider value={{ peopleList: peopleList}}>
            {props.children}
        </PeopleListContext.Provider>
    );
};

export default PeopleListProvider;