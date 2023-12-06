import { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import './App.css'

const App = () => {
  const [liked, setLiked] = useState(false); 
  //  false so it starts off 'unliked'

  const LikeButton = () => {
    if (liked) {
      // if liked then clicked will log unliked
      console.log('Unlike')
    } else {
      // if unliked then clicked will log liked
      console.log('Liked')
    }
    setLiked(!liked)
  }

  return (
    <div className="container">
      <button onClick={LikeButton} className='button'>
        {liked ? <FaHeart fill="#FF0000" /> : <FaRegHeart />}
      </button>
    </div>
  );
};
//  liked ? checks if the liked state is true
// if liked renders  faheart with the fill prop set to red
// : fagegheart if like is false then just render the empty heart
export default App;
