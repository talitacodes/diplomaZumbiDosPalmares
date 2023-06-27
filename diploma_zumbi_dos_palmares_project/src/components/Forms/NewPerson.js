import React, { useContext} from 'react';
import './Contact.css';
import { PeopleListContext } from '../../context/PeopleListProvider';
import Title from '../Title/Title';

const NewPerson = (props) => {
  const PeopleCtx = useContext(PeopleListContext);
  return(
    <div>
      <Title title="Adicionar novo homenageado"/>
      <div className="Contact">
        <div id="background-form">
          <form onSubmit={PeopleCtx.onNewPersonSubmit}>
            <input type="text" name="nome" placeholder="Digite o seu nome" id="name" maxlength="100" required />
            <textarea id="bio" name="bio" maxlength="1000" placeholder="Biografia"required />
            <input type="date" id="birthdate" name="birthte" />
            <input type="date" id="deathdate" name="deathdate" />
            <input type="url" id="imageUrl" name="imageUrl" placeholder="Url da imagem" />

            <input type="submit" className='formButton' value="Adicionar" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewPerson;