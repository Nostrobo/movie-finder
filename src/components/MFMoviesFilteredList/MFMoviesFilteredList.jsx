import "./MFMoviesFilteredList.css"
import MFCardMovie from "../MFCardMovie/MFCardMovie";

const MFMoviesFilteredList = ({ movies }) => {
    if (!movies) return
  

    return (
        <>
            {movies.map((movie, key) => {
                return (
                        <MFCardMovie movie={movie} key={"movie"+key} />
                    )
            })

            }
        </>

    )
}

export default MFMoviesFilteredList;