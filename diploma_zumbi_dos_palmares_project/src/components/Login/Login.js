import React, { useContext} from 'react';
import Title from '../Title/Title';
import { UsersContext } from '../../context/UsersProvider'

const Login = () => {
  const UsersCtx = useContext(UsersContext);
  return(
    <div>
      <Title title="Login"/>
      <div className="login">
        <div id="background-form">
          <form onSubmit={UsersCtx.authUser}>
            <input type="text" name="E-mail" placeholder="Email" id="email" required />
            <input type="password" name="email" placeholder="Senha" id="senha" required />

            <input type="submit" className='formButton' value="Entrar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;