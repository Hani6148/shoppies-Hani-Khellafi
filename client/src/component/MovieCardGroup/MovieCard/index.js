import React from 'react'

function MovieCard(props) {
    return (
        <div class="col-sm-4" style={{ marginBottom: "5vh" }}>
            <div className="card" >
                <img className="card-img-top" style={{ height: "60vh" }} src={props.movieImg} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "5vh" }}>{props.movieTitle}</h5>
                    <p className="card-text">
                        {props.movieYear}
                    </p>
                    <a href="#" className="btn btn-primary">Nominate</a>
                </div>
            </div>
        </div>
    )
}

export default MovieCard