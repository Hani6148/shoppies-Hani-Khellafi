import React from 'react'
import "./NominatedListItem.css"
function NominatedListItem(props) {


    return (

        <div className="col-sm-12" style={{ marginBottom: "1vh" }}>
            <div className="card" >
                <img className="card-img-top" style={{ height: "20vh" }} src={props.movieImg} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "fit-content" }}>{props.movieTitle}</h5>
                    <p className="card-text">
                        {props.movieYear}
                    </p>
                    <a className="btn btn-danger text-white" >Remove</a>
                </div>
            </div>
        </div>
    )
}

export default NominatedListItem