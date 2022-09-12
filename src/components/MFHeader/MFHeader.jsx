import logo from "../../assets/logo.svg"
import "./MFHeader.css"

const MFHeader = () => {
    return (
        <div className="mf-header-container">
            <h1>
                <img src={logo} alt="Movie finder" className="mf-logo" />
            </h1>
            <div className="mf-search-bar-container">
                <input className="mf-searchbar" placeholder="Rechercher un film" />
            </div>
        </div>
    )
}

export default MFHeader;