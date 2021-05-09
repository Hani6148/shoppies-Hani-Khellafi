import React from "react"
import "./App.css"
import { MovieSearchResult } from "./context/MovieSearchContext"
import Header from "./component/Header"
import MovieCardGroup from "./component/MovieCardGroup"

import Footer from "./component/Footer"

function App() {
  return (

    <MovieSearchResult>
      <div className="App">
        <Header />
        <MovieCardGroup />
      </div>
      <Footer />
    </MovieSearchResult>

  );
}

export default App;
