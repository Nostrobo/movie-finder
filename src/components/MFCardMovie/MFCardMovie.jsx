import { useState } from "react";
import "./MFCardMovie.css"

const MFCardMovie = ({ movie, size }) => {
    const [loaded, setLoaded] = useState(false)
    if (!movie) return

    const onLoad = () => {
        console.log('onload')
        setLoaded(true)
    }

    let movieDate = movie.release_date.split("-")[0]
    let posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
        <>
            <article className={`${!loaded ? "hidden" : "fadeIn mf-movie-card-container"}`} tabIndex="0">
                <img className={`mf-movie-img`} onLoad={onLoad} src={posterPath} alt="" loading="lazy"  />
                <div className="mf-movie-infos">
                    <p>{movie.title}</p>
                    <p>{movieDate}</p>
                </div>
            </article>
            <div className={`mf-movie-img-loader ${loaded ? "hidden-no-display" : ""}`} >

                <p>{movie.title}</p>
                <p>{movieDate}</p>
            </div>
        </>
    )
}

export default MFCardMovie;