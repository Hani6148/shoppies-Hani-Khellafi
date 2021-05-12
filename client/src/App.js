import React from "react"
import "./App.css"
import { MovieSearchResult } from "./context/MovieSearchContext"
import Header from "./component/Header"
import MovieCardGroup from "./component/MovieCardGroup"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./component/Footer"
import MovieFullView from "./component/MovieFullView"

function App() {
  return (

    <MovieSearchResult>
      <Router>

        <div className="App">
          <Header />
          <Route exact path="/" component={MovieCardGroup} />
          <Route exact path="/movie/:title" component={MovieFullView} />
        </div>
        <Footer />
      </Router>
    </MovieSearchResult>

  );
}

export default App;
