import "./MFCardMovie.css"

const MFCardMovie = ({ movie, size }) => {
    if (!movie) return

    let width;


    switch (size) {
        case "xs":
            width = "15%";
            break;
        case "s":
            width = "25%";
            break;
        case "m":
            width = "45%";
            break;
        case "l":
            width = "100%";
            break;
        default: console.log("Wrong size")
    }

    let movieDate = movie.release_date.split("-")[0]
    let posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
        <div className="mf-movie-card-container" style={{ 'width': width }}>
            <img className="mf-movie-img" src={posterPath} alt="" />
            <div className="mf-movie-infos">
                <span>{movie.title}</span>
                <span>{movieDate}</span>
            </div>
        </div>
    )
}

export default MFCardMovie;