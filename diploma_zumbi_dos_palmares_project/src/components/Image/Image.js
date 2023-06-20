import React from 'react';
import '../Image/Image.css'
const Image = (props) => {
  return(
    <div className='imageContainer'>
      <img className='image' src={props.imageUrl} alt='Imagem da pessoa homenageada'/>
    </div>
  )
}

export default Image;