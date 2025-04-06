import { useState } from 'react';
import { GameMinDTO } from '../../types/GameMinDTO'

import './GameCard.css'

interface GameCardProps{
  onClick: (id: number) => void;
  game: GameMinDTO;
}

const GameCard = (props: GameCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="gamecard_container"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onClick={() => props.onClick(props.game.id)}>
        <div className="image">
            <img src={props.game.imgUrl} alt="" />
        </div>
        <div className="text_content">
            <h2 className="title">{props.game.title}</h2>
            <p className="year">{props.game.year}</p>
            {hovered && <p className="short_description">{props.game.shortDescription}</p>}
        </div>
    </div>
  )
}

export default GameCard