import logo from "../../assets/logo.svg"
import "./MFHeader.css"

const MFHeader = () => {
    return (
        <header className="mf-header-container">
            <h1>
                <img src={logo} alt="Movie finder" className="mf-logo" />
            </h1>
            <div className="mf-search-bar-container">
                <input className="mf-searchbar" placeholder="Rechercher un film" aria-label="Rechercher un film"/>
            </div>
        </header>
    )
}

export default MFHeader;