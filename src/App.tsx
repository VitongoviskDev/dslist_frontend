import React, { useEffect, useState } from 'react'
import GamesList from './Components/GameList/Index';
import GameSection from './Components/GameSection';

import './App.css';

const App = () => {
  const [gameId, setGameId] = useState<number>(1);

  const handleGameCardClick = (id: number) => {
    setGameId(id);
  }
  return (
    <div className="app_container">
      <GameSection gameId={gameId}/>
      <GamesList onClick={handleGameCardClick}/>
    </div>
  )
}

export default App