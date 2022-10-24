
const Poster = ({poster_path}) => {
    return(
      <div>
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`}  alt=""/>
      </div>
  )
}

export {
    Poster
}
