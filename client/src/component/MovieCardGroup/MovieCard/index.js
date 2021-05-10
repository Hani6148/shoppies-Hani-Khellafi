import React, { useState, useContext } from 'react'
import { MovieSearchContext } from "./../../../context/MovieSearchContext"
import axios from "axios"

function MovieCard(props) {
    const [, , bannerVisibility, setBannerVisibility, nominationList, setNominationList] = useContext(MovieSearchContext)
    const [nominated, setNominated] = useState(false)
    const saveNomination = e => {
        e.preventDefault()
        console.log("hey")

        axios.get("/api/nominations")
            .then(data => {
                if (data.data.length < 37) {

                    axios.post("/api/nominations", {
                        title: props.movieTitle,
                        year: props.movieYear,
                        poster: props.movieImg
                    }).then(data => {
                        setNominated(true)
                        setNominationList(data.data)
                    })

                }

                else {
                    setBannerVisibility(true)
                }
            })



    }

    return (
        <div className="col-sm-3" style={{ marginBottom: "5vh" }}>
            <div className="card" >
                <img className="card-img-top" style={{ height: "60vh" }} src={props.movieImg} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "fit-content", minHeight: "7vh" }}>{props.movieTitle}</h5>
                    <p className="card-text">
                        {props.movieYear}
                    </p>
                    <a className={`btn btn-primary text-white ${nominated ? "disabled bg-secondary border border-white" : null}`} onClick={saveNomination} >{nominated ? "Nominated" : "Nominate"}</a>
                </div>
            </div>
        </div>
    )
}

export default MovieCard