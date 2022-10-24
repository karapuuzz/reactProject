
import './MovieListCard.css'
import {Poster} from "../posterPreview/PosterPreview";

import {
    useNavigate
} from "react-router-dom"

const MovieListCard = ({movie}) => {
    const {title, overview, release_date, vote_average, vote_count, poster_path, id} = movie
    let navigate = useNavigate();
    return(
        <div className="movieCard">
            <div onClick={()=>{navigate("movie/"+ id)}}>
                <Poster poster_path={poster_path} />
            </div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                Release date: {release_date}
            </div>
        </div>
    )
}

export {
    MovieListCard
}