import "./MFMovieSortable.css"
import MFFilters from "../MFFilters/MFFilters";
import MFMoviesFilteredList from "../MFMoviesFilteredList/MFMoviesFilteredList"
import MFPagination from "../MFPagination/MFPagination";
import { useEffect, useState } from "react";
import {api} from "../../api/api"

const MFMovieSortable = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState("popularity")
    const [pageSelected, setPageSelected] = useState(1)
    const [amountPage, setAmountPage] = useState()


    const handleSetSortBy = value => {
        console.log(value)
        switch (value) {
            case 'popularity':
                setSortBy('popularity')
                break;
            case 'date':
                setSortBy('date')
                break;
            default: console.log("Unknown filter")
        }
    }

    const handleSetPageSelected = value => {
        setPageSelected(value);
    }

    useEffect(() => {
        setIsLoading(true)
        if(sortBy === 'popularity'){
            api.getPopularMovies(setMovies, setAmountPage, setIsLoading, pageSelected);
        }

        if(sortBy === 'date'){
            api.getLatestMovies(setMovies, setAmountPage, setIsLoading, pageSelected);
        }
    },[sortBy, pageSelected])

    return (
        <section className="mf-movie-sortable-container">
            <h2>Tous les films</h2>
            <MFFilters handleSetSortBy={handleSetSortBy} />
            <div className="mf-movie-filtered-list-container">
                {isLoading 
                ? null
                :<MFMoviesFilteredList movies={movies} />
                }
                
            </div>
            <MFPagination amountPage={amountPage} pageSelected={pageSelected} handleSetPageSelected={handleSetPageSelected} />

        </section>
    )
}

export default MFMovieSortable;