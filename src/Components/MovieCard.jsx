import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}){
    const {isFavorites, addToFavorites, removeFav} = useMovieContext();
    const favorite = isFavorites(movie.imdbID)
    function likeButton(e){
        e.preventDefault()
        if (favorite) removeFav(movie.imdbID);
        else addToFavorites(movie)
    }

    const imageUrl =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";


    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={imageUrl} alt={movie.Title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`}
                    onClick={likeButton}
                    >
                    {favorite ? "❤️" : "🤍"}</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>          
            </div>
        </div>
    )
}
export default MovieCard