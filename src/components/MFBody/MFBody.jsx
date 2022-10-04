import "./MFBody.css"
import MFCardTopMovie from "../MFCardTopMovie/MFCardTopMovie"
import MFMovieSortable from "../MFMoviesSortable/MFMovieSortable"

const MFBody = () => {
    return (
        <main>
            <MFCardTopMovie />
            <MFMovieSortable />
        </main>
    )
}

export default MFBody;