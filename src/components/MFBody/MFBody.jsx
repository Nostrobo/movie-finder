import "./MFBody.css"
import MFCardTopMovie from "../MFCardTopMovie/MFCardTopMovie"
import MFMovieSortable from "../MFMoviesSortable/MFMovieSortable"

const MFBody = () => {
    return (
        <>
            <MFCardTopMovie />
            <MFMovieSortable />
        </>
    )
}

export default MFBody;