import axios from "axios"
import React, { useEffect, useState, useContext } from 'react'
import { MovieSearchContext } from "./../../context/MovieSearchContext"

const API_URL = "https://www.omdbapi.com/?";
const API_KEY = "4379d9ae";
const queryType = "Movie";

function MovieFullView(props) {
    const [, , bannerVisibility, setBannerVisibility, nominationList, setNominationList] = useContext(MovieSearchContext)
    const nominatedTitles = nominationList.map(person => person.imdbID)
    const [movieData, setMovieData] = useState({})
    const checkInclud = nominatedTitles.includes(movieData.imdbID)
    const saveNomination = e => {
        e.preventDefault()
        console.log("hey")

        axios.get("/api/nominations")
            .then(data => {
                if (data.data.length < 4) {

                    axios.post("/api/nominations", {
                        title: movieData.Title,
                        year: movieData.Year,
                        poster: movieData.Poster,
                        imdbID: movieData.imdbID
                    }).then(data => {
                        setNominationList(data.data)
                    })

                }

                else {
                    setBannerVisibility(true)
                }
            })



    }

    useEffect(() => {
        console.log("handle", props.match.params.title)
        const { title } = props.match.params

        console.log(`${API_URL}&type=${queryType}&apikey=${API_KEY}&plot="full"&i=${title}`)
        axios.get(`${API_URL}&type=${queryType}&apikey=${API_KEY}&plot="full"&i=${title}`)
            .then(response => {
                console.log(response.data)
                setMovieData(response.data)
            })
    }, [])


    return (
        <div className="col-sm-12" style={{ marginBottom: "5vh" }}>
            <div className="card" style={{ flexDirection: "row", minHeight: "60vh" }} >
                <img className="card-img" style={{ height: "60vh", width: "20vw" }} src={movieData.Poster} />
                <div className="card-body">
                    <h4 className="card-title" style={{ height: "fit-content", minHeight: "7vh" }}>{movieData.Title}</h4>
                    <h5 className="card-title">Plot</h5>

                    <p className="card-text">{movieData.Plot}</p>
                    <h5 className="card-title">Actors</h5>

                    <p className="card-text">{movieData.Actors}</p>
                    <h5 className="card-title">Genre</h5>
                    <p className="card-text">{movieData.Genre}</p>
                    <h5 className="card-title">Year</h5>
                    <p className="card-text">
                        {movieData.Year}
                    </p>
                    <a className={`btn btn-primary text-white ${checkInclud ? "disabled bg-secondary border border-white" : null}`} onClick={saveNomination} >{checkInclud ? "Nominated" : "Nominate"}</a>

                </div>
            </div>
        </div>
    )
}




export default MovieFullView