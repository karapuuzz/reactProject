import {useState, useEffect} from "react";
import {useSearchParams} from "react-router-dom"

import "./MoviesPage.css"

import {moviesService} from "../../services/movies.services";
import {MoviesList} from "./moviesList/MoviesList";

const  MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(null)
    const [totalPages, setTotalPages] = useState(null)
    const [query, setQuery] = useSearchParams({page:'1'})

    useEffect(() => {
        moviesService.getAll(query.get('page')).then(({data}) => {
            setMovies(data.results)
            setPage(data.page)
            setTotalPages(data.total_pages)
        })
    }, [query])
    
    const prevPage = () => {
      setQuery(value=>({page:value.get('page')-1}))
    }

    const nextPage = () => {
        setQuery(value=>({page:+value.get('page')+1}))
    }

    return (
        <div className="MoviesPage">
            <MoviesList movies={movies}/>
            <button disabled={page===1} className="prevPageBtn" onClick={prevPage}>Prev Page</button>
            <button disabled={page===totalPages} className="nextPageBtn" onClick={nextPage}>Next Page</button>
        </div>
    );
};

export default MoviesPage