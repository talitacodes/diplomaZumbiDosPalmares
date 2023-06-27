import React, { useContext } from 'react';
import '../LikeButton/LikeButton.css'
import { FavoritesContext } from '../../context/FavoritesProvider';

const LikeButton = (props) => {
  // const [liked, setLiked] = useState(false);
  // const { liked } = useContext(FavoritesContext);
  const FavoritesCtx = useContext(FavoritesContext);
  return (
    <button onClick={() => FavoritesCtx.onFavorite(props.person)}>
      {props.person.isFavorite ? '❤️' : '🤍'}
    </button>
  );
};

export default LikeButton;