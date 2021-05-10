import React, { useState } from 'react'
import axios from "axios"

function MovieCard(props) {

    const [nominated, setNominated] = useState(false)
    const saveNomination = e => {
        e.preventDefault()
        console.log("hey")

        axios.get("/api/nominations")
            .then(data => {
                if (data.data.length < 4) {

                    axios.post("/api/nominations", {
                        title: props.movieTitle,
                        year: props.movieYear,
                        poster: props.movieImg
                    }).then(data => {
                        setNominated(true)
                    })

                }

                else {
                    alert("you reach mazimum ")
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
                    <a className={`btn btn-primary ${nominated ? "disabled bg-secondary text-white  border border-white" : null}`} onClick={saveNomination} >{nominated ? "Nominated" : "Nominate"}</a>
                </div>
            </div>
        </div>
    )
}

export default MovieCard