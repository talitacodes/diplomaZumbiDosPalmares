import React, { useContext} from 'react';
import Title from '../Title/Title';
import { UsersContext } from '../../context/UsersProvider'
import '../Login/Login.css'

const Login = () => {
  const UsersCtx = useContext(UsersContext);
  const { authenticated } = useContext(UsersContext);
  return(
    <>
     <Title title= {!authenticated ? 'ENTRAR': 'MINHA CONTA'}/>
     <div className="Login">
        <div id="background-form">
          {
            authenticated ? 
            <div className='Logout'>  
              <h3 className='Message'>Usuário autenticado com sucesso!</h3>
              <button className='formButton' onClick={() => UsersCtx.userLogout()}>
                Sair
              </button>
            </div>
            :       
            <div>
              <form onSubmit={UsersCtx.authUser}>
                <input type="email" placeholder="Email" id="email" required />
                <input type="password" placeholder="Senha" id="password" required />

                <input type="submit" className='formButton' value="Entrar" />
              </form>
            </div>
          }
        </div>
      </div> 
    </>
  );
};

export default Login;