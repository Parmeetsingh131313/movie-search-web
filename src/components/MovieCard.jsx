
const MovieCard = ({movie: {id, title, poster_path, vote_average, release_date, original_language}}) => {
  return (
    <div className='movie-card'>
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} />
    </div>
  )
}

export default MovieCard
