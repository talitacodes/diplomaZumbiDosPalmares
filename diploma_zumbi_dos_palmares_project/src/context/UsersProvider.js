import React, { useState,  useEffect } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
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

export const UsersContext = React.createContext();

const UsersProvider = (props) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [isAdmin, setAdmin] = useState(false);

    const authUser =  async (event) => {
        console.log("funcao login");
        console.log(event.target.email.value);
        console.log(event.target.password.value);

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('Usuário logado com sucesso', user);
                setAuthenticated(true);
                getUsers(email);
            })
            .catch((error) => {
                console.log('Problemas ao logar usuário', error);
                alert('Problemas ao logar usuário', error);
                setAuthenticated(false);

            });

    }

    const userLogout =  async () => {

        auth.signOut()
          .then(() => {
            setAuthenticated(false);
          })
          .catch((error) => {
            console.log(error);
          });
    };

    const getUsers = async (email) => {
        console.log("entrei no getUsers");
        try {
            
            const q = query(collection(db, "users"), where('email', '==', email));
    
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());

                if(doc.data().isAdmin == true){
                    setAdmin(true);
                  }else{
                    setAdmin(false);
                }
              });

          
    
        } catch (error) {
          console.error('Erro ao buscar documentos:', error);
        }
    };

    useEffect(() => {
        console.log("user effect")
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setAuthenticated(!!user);
        });
      
        return () => unsubscribe();
    }, []);

    return (
        <UsersContext.Provider value={{ authenticated: authenticated, authUser: authUser, isAdmin: isAdmin, userLogout: userLogout}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;