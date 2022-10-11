import "./MFFilters.css"
import { useEffect, useState } from "react";
import axios from "axios";


const MFFilters = ({handleSetSortBy}) => {

    const [genresOptions, setGenresOptions] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                setGenresOptions(res.data.genres)
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => {
            })
    }, []);


    return (
        <div className="mf-filters-sort-container">
            <div className="mf-sort-container">
                <label htmlFor="sort-select">Trier par:</label>
                <select name="" id="sort-select" onChange={(e)=>handleSetSortBy(e.target.value)}>
                    <option value="popularity">Popularité</option>
                    <option value="date">Date</option>
                </select>
            </div>
            <div className="mf-filters-container">
                <label htmlFor="genre-filter">Filtrer par:</label>
                <select name="genre-filter" id="genre-filter" defaultValue={{ label: "Genre", value: 0 }} onChange={e => console.log(e.target.value)}>
                    {genresOptions.map((genre, key) => {
                        return <option value={genre.name} key={"genre"+key}>{genre.name}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default MFFilters;