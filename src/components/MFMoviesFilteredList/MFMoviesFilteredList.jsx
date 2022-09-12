import "./MFMoviesFilteredList.css"
import MFCardMovie from "../MFCardMovie/MFCardMovie";

const MFMoviesFilteredList = ({ movies }) => {
    if (!movies) return
    let viewportWidth = window.visualViewport.width;
    let cardSize;
    if(viewportWidth > 760) {
         cardSize = 'xs'
    } else {
        cardSize = 'm'
    }

    return (
        <>
            {movies.map((movie, key) => {
                return (
                        <MFCardMovie movie={movie} size={cardSize} key={"movie"+key} />
                    )
            })

            }
        </>

    )
}

export default MFMoviesFilteredList;