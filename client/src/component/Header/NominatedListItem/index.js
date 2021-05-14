import React, { useState, useContext } from 'react'
import "./NominatedListItem.css"
import { MovieSearchContext } from "./../../../context/MovieSearchContext"
import axios from "axios"
function NominatedListItem(props) {
    // using state and functions to update states of banner visibiluty and nomination lists
    const [, , bannerVisibility, setBannerVisibility, nominationList, setNominationList] = useContext(MovieSearchContext)

    // deleting entry from nomination list
    const deleteEntry = e => {

        e.preventDefault()
        console.log(props.Id)

        axios.delete(`/api/nominations/${props.Id}`)
            .then(data => {

                setBannerVisibility(false)
                if (nominationList.length == 1) {
                    props.setNominationVisibility(false)
                }
                setNominationList(data.data)


            })



    }
    return (

        <div className="col-sm-12" style={{ marginBottom: "1vh" }}>
            <div className="card" >
                <img className="card-img-top" style={{ height: "20vh" }} src={props.movieImg} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "fit-content" }}>{props.movieTitle}</h5>
                    <p className="card-text">
                        {props.movieYear}
                    </p>
                    <a className="btn btn-danger text-white" onClick={deleteEntry}>Remove</a>
                </div>
            </div>
        </div>
    )
}

export default NominatedListItem







