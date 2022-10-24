import './MoviesList.css'
import {MovieListCard} from "../moviesListCard/MovieListCard";

const MoviesList = ({movies}) => {
    return (
        <div className="moviesList">
            {movies.map(movie=><MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    )
}

export {MoviesList};