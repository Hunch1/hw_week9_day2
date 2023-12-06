import { useState } from 'react';
import "./State.css"

const State = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Dylan"
    }
  });
  // ... spreads through through object
  const handleClick = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: 'Alexander'
      }
    });
  };

  return (
    <div>
      <p>The Player name is : {game.player.name} !!!</p>
      <button onClick={handleClick}>Update Name</button>
    </div>
  );
};

export default State;
