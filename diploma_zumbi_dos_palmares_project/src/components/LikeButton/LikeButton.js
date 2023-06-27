import React, { useContext } from 'react';
import '../LikeButton/LikeButton.css'
import { PeopleListContext } from '../../context/PeopleListProvider';
import likedSvg from '../../assets/heart-regular.svg';
import likeSvg from '../../assets/heart-solid.svg';


const LikeButton = (props) => {

  const FavoritesCtx = useContext(PeopleListContext);
  return (
    <button className='likeButton' onClick={() => FavoritesCtx.onFavorite(props.person)}>
      {props.person.isFavorite ? <img className='svg' src={likeSvg} alt="Ícone SVG"/> : 
      <img className='svg' src={likedSvg} alt="Ícone SVG"/>}
    </button>
  );
};

export default LikeButton;