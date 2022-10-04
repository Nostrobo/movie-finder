import { useEffect } from "react";
import { useState } from "react";
import "./MFCardMovie.css"

const MFCardMovie = ({ movie, size }) => {
    const [loaded, setLoaded] = useState(false)
    // useEffect(() => {
    //     console.log('loaded')
    //     console.log(loaded)
    // }, [loaded])
    if (!movie) return
    let width;



    switch (size) {
        case "xs":
            width = "xs";
            break;
        case "s":
            width = "s";
            break;
        case "m":
            width = "m";
            break;
        case "l":
            width = "l";
            break;
        default: console.log("Wrong size")
    }

    const onLoad = () => {
        console.log('onload')
        setLoaded(true)
    }

    let movieDate = movie.release_date.split("-")[0]
    let posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
        <>
            <article className={`  ${!loaded ? "hidden" : "fadeIn mf-movie-card-container"}`} tabIndex="0">
                <img className={`mf-movie-img`} onLoad={onLoad} src={posterPath} alt="" loading="lazy"  />
                <div className="mf-movie-infos">
                    <span>{movie.title}</span>
                    <span>{movieDate}</span>
                </div>
            </article>
            <div className={`mf-movie-img-loader ${loaded ? "hidden-no-display" : ""}`} >

                <span>{movie.title}</span>
                <span>{movieDate}</span>
            </div>
        </>
    )
}

export default MFCardMovie;