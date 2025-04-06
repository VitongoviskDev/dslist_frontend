import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GameMinDTO } from '../../types/GameMinDTO'; // Certifique-se de ajustar o caminho
import GameCard from '../GameCard';

import './GameList.css'
import api from '../../axiosConfig';

interface GamesListProps {
  onClick: (id: number) => void;
}

const GamesList = (props: GamesListProps) => {
  const [games, setGames] = useState<GameMinDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await api.get<GameMinDTO[]>('/games');
        setGames(response.data); // Os dados agora têm tipagem!
      } catch (err) {
        setError('Erro ao carregar jogos');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='gamelist_container'>
      <ul className='list'>
        {games.map((game) => (
          <li key={game.id} className='list-item'>
            <GameCard game={game} onClick={props.onClick}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamesList;
