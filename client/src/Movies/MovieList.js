import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Link } from "react-router-dom";

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  // const id = props.match.params.id;
  // const movie = MovieList.find(movieTitle => movieTitle.id === id);
  // console.log("movie", movie);
  // console.log(id);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  /* <Link to={"/movies/${id}"}>   {"/movies/${props.match.params.id}"}       <Link to="/movies/:id">*/

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${props.id}`} key={movie.id}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    // <Link to={"/movies/${id}"}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    // </Link>
  );
}

export default MovieList;
