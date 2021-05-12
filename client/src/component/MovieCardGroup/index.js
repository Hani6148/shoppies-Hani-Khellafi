import React, { useState, useContext } from 'react'
import { MovieSearchContext } from "./../../context/MovieSearchContext"
import MovieCard from "./MovieCard"
import shortid from 'shortid';

import "./MovieCardGroup.css"

function MovieCardGroup() {


    const [nominated, setNominated] = useState(false)
    const [movies, setMovies, , , nominationList, ,] = useContext(MovieSearchContext)
    const nominatedTitles = nominationList.map(person => person.imdbID)
    const defaultPoster = "https://lh6.googleusercontent.com/proxy/hIgFSMyx4VsuoQh8h-ZfI3IiK9uFSLZ7pG67H_1RwEBDEPiWX-odcJ0PkWriAPeqwKyC6n-12UTrNmQF2ul9DAjwKMljG3zSCCTDoTVDPexFHV9l_JD5WMbmpnUJqWLqYA=s0-d"
    console.log("--------------------------------------------------- movie.nominated", nominatedTitles)

    const newList = movies.map(movie => {
        const checkInclud = nominatedTitles.includes(movie.imdbID)
        if (checkInclud) {
            movie.nominated = true
            return movie
        }
        else {
            movie.nominated = false
            return movie
        }
    })
    console.log("this is the new list", newList)
    return (
        <div class="row movie-container">
            {   newList.map((movie, i) => {

                let poster = true
                if (movie.Poster == "N/A") {
                    poster = false
                }
                return (<MovieCard movieId={movie.imdbID} nominated={movie.nominated} key={shortid.generate()} movieImg={poster ? movie.Poster : defaultPoster} movieTitle={movie.Title} movieYear={movie.Year} />)
            })
            }
        </div>
    )
}

export default MovieCardGroup