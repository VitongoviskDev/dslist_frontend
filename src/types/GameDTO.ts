interface GameDTO{
    id: bigint,
    title: string,
    year: number,
    genre: string,
    platforms: string,
    score: Number,
    imgUrl: string,
    shortDescription: string,
    longDescription: string
} 

export default GameDTO;