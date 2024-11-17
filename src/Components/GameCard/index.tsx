import { GameMinDTO } from '../../types/GameMinDTO'

import './GameCard.css'

interface GameCardProps{
    game: GameMinDTO;
}

const GameCard = (props: GameCardProps) => {
  return (
    <div className="gamecard_container">
        <div className="image">
            <img src={props.game.imgUrl} alt="" />
        </div>
        <div className="text_content">
            <h2 className="title">{props.game.title}</h2>
            <p className="year">{props.game.year}</p>
            <p className="short_description">{props.game.shortDescription}</p>
        </div>
    </div>
  )
}

export default GameCard