import React, { useState, createContext, useEffect } from "react"
import axios from "axios"

export const MovieSearchContext = createContext()

export const MovieSearchResult = props => {
    const [movies, setMovies] = useState([{
        "Title": "Inception",
        "Year": "2010",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    }, {
        "Title": "Creed",
        "Year": "2015",
        "imdbID": "tt3076658",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmZkYjQzY2QtNjdkNC00YjkzLTk5NjUtY2MyNDNiYTBhN2M2XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
    }, {
        "Title": "The Italian Job",
        "Year": "2003",
        "imdbID": "tt0317740",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDYyNzYxNjYtNmYzMC00MTE0LWIwMmYtNTAyZDBjYTIxMTRhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    }, {
        "Title": "Saving Private Ryan",
        "Year": "1998",
        "imdbID": "tt0120815",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    }, {
        "Title": "Bruce Almighty",
        "Year": "2003",
        "imdbID": "tt0315327",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzMyZDhiZDUtYWUyMi00ZDQxLWE4NDQtMWFlMjI1YjVjMjZiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    }, {
        "Title": "Now You See Me",
        "Year": "2013",
        "imdbID": "tt1670345",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_SX300.jpg"
    }, {
        "Title": "War Dogs",
        "Year": "2016",
        "imdbID": "tt2005151",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg"
    }, {
        "Title": "Deadpool",
        "Year": "2016",
        "imdbID": "tt1431045",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },])
    const [bannerVisibility, setBannerVisibility] = useState(false)
    const [nominationList, setnominationList] = useState([])
    useEffect(() => {
        axios.get("/api/nominations")
            .then(data => {

                const nominated = data.data
                if (nominated.length == 4) {
                    setBannerVisibility(true)
                }
                setnominationList(nominated)


            })
    }, [])


    return (
        <MovieSearchContext.Provider value={[movies, setMovies, bannerVisibility, setBannerVisibility, nominationList, setnominationList]}>
            {props.children}

        </MovieSearchContext.Provider>
    )
}

