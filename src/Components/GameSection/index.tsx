import { useEffect, useState } from 'react'
import GameDTO from '../../types/GameDTO';

import './GameSection.css'
import api from '../../axiosConfig';

interface GameSectionProps {
  gameId: number;
}

const GameSection = (props: GameSectionProps) => {
  const [game, setGame] = useState<GameDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fecthGame = async () => {
      try {
        const response = await api.get<GameDTO>(`/games/${props.gameId}`);
        setGame(response.data); // Os dados agora têm tipagem!
      } catch (err) {
        setError('Erro ao carregar jogos');
      } finally {
        setLoading(false);
      }
    };

    fecthGame();
  }, [props.gameId])

  return (
    <section className="game_section">
      <div className="container">
        {
          loading ? <p>Carregando...</p> :
          error ? <p>ERRO: {error}</p> :
          game &&
          <>
            <div className="image_container">
              <img src={game.imgUrl} alt={`${game.title} thumbnail`} />
            </div>
            <div className="text_container">
              <h1 className="game_title">{game.title}</h1>
              <p className="game_year">{game.year}</p>
              <p className="full_description">{game.longDescription}</p>
            </div>
          </>
        }
      </div>
    </section>
  )
}

export default GameSection