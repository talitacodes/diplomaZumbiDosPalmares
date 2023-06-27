import React, { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const UsersContext = React.createContext();

const UsersProvider = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    const authUser = (event) => {
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
            })
            .catch((error) => {
                console.log('Problemas ao logar usuário', error);
                alert('Problemas ao logar usuário', error);
                setAuthenticated(false);

            });

    }

    return (
        <UsersContext.Provider value={{ authenticated: authenticated, authUser: authUser }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;