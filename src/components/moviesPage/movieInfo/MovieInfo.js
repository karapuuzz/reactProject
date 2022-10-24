import {useParams} from "react-router-dom";
import {useState, useEffect} from "react"

import {Poster} from "../posterPreview/PosterPreview"
import './MovieInfo.css'

const MovieInfo = () => {
    let {id} = useParams();
    const [movieById, setMovieById] = useState([]);

    useEffect(()=>{
            fetch('https://api.themoviedb.org/3/movie/' + id +'?api_key=2bac066c5373a2521f278d590fcd5c69')
                .then(value => value.json())
                .then(value => {
                    setMovieById(value)
                });
        }, []);

    return (
        <div className="MovieInfo">
            <div className="PosterTitle">
                <div className="Poster">
                    <Poster poster_path={movieById.poster_path}/>
                </div>
                <div>
                   <h3>
                       {movieById.title}
                   </h3>
                    <h5>{movieById.vote_average}     vote count:{movieById.vote_count}</h5>
                    {movieById.release_date}
                    <h4>{movieById.overview}</h4>
                </div>
            </div>
        </div>
    )
}

export {
    MovieInfo
}