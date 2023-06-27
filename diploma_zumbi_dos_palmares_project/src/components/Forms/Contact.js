import React, { useContext} from 'react';
import './Contact.css';
import { ContactsFormContext } from '../../context/ContactFormProvider';
import Title from '../Title/Title';

const Contact = (props) => {
  const ContactsCtx = useContext(ContactsFormContext);
  return(
    <div>
      <Title title="Formulário de Contato"/>
      <div className="Contact">
        <div id="background-form">
          <form onSubmit={ContactsCtx.onContactsFormSubmit}>
            <input type="text" name="nome" placeholder="Digite o seu nome" id="name" required />
            <input type="text" name="email" placeholder="Digite o seu email" id="email" required />
            <textarea id="comments" name="comentarios" rows="5" cols="33" placeholder="Digite seu comentário"
                required></textarea>
            <input type="submit" className='formButton' value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;