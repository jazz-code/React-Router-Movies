import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Router>
        <SavedList list={savedList} />
        <div>
          {/* <Link to={"/movies/${id}"}>Test</Link> */}
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={Movie} />
        </div>
      </Router>
    </div>
  );
};

/* <Link to={"/movies/${props.match.params.id}"}> */

export default App;
