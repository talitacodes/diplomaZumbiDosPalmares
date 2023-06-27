import React, { useContext} from 'react';
import '../Image/Image.css'
import LikeButton from '../LikeButton/LikeButton';
import { UsersContext } from '../../context/UsersProvider'

const Image = (props) => {

  const { authenticated } = useContext(UsersContext);

  return(
    <div className='imageContainer'>

      {authenticated ?  <LikeButton person={props.person}/>: null}
      <img className='image' src={props.person.imageUrl} alt='Imagem da pessoa homenageada'/>
    </div>
  )
}

export default Image;