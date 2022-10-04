import "./MFMovieSortable.css"
import MFFilters from "../MFFilters/MFFilters";
import MFMoviesFilteredList from "../MFMoviesFilteredList/MFMoviesFilteredList"
import MFPagination from "../MFPagination/MFPagination";
import { useEffect, useState } from "react";
import axios from "axios";

const MFMovieSortable = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState({
        type: "popularity",
        order : "desc"

    })
    const [pageSelected, setPageSelected] = useState(1)
    const [amountPage, setAmountPage] = useState()


    const handleSetSortBy = value =>{
        let newFilter = {};
        switch (value){
            case  'alphabeticOrder':
                newFilter = {
                    type:'original_title',
                    order:"desc"
                }
                setSortBy(newFilter)
                
            break;
            case  'date':
                newFilter = {
                    type:'release_date',
                    order:"desc"
                }
                setSortBy(newFilter)
            break;
            default: console.log("Unknown filter")
        }
        setSortBy(setSortBy);
    }

    const handleSetPageSelected = value => {
        setPageSelected(value);
    }

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=${sortBy.type}.${sortBy.order}&page=${pageSelected}`, 	{
			// headers: {
			// 	'X-Rate-Limit': '2400',
			// }
		})
            .then((res) => {
                setMovies(res.data.results)
                setAmountPage(res.data.total_pages)
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => {
                setIsLoading(false)

            })
    }, [sortBy, pageSelected]);

    return (
        <div className="mf-movie-sortable-container">
            <h2>Tous les films</h2>
            <MFFilters handleSetSortBy={handleSetSortBy}/>
          
                    <div className="mf-movie-filtered-list-container">
                        <MFMoviesFilteredList movies={movies} />
                    </div>
                        <MFPagination amountPage={amountPage} pageSelected={pageSelected} handleSetPageSelected={handleSetPageSelected}/>
            
        </div>
    )
}

export default MFMovieSortable;