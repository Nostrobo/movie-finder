import axios from "axios";

export const api = {

    getPopularMovies : (setMovies, setAmountPage, setIsLoading, pageSelected) => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${pageSelected}`)
            .then((res) => {
                console.log(res)
                setMovies(res.data.results)
                setAmountPage(res.data.total_pages)
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => {
                setIsLoading(false)
            })
    },
    
    getLatestMovies : (setMovies, setAmountPage, setIsLoading, pageSelected) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${pageSelected}`)
            .then((res) => {
                console.log(res)
                setMovies(res.data.results)
                setAmountPage(res.data.total_pages)
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => {
                setIsLoading(false)
            })
    },

    getTopRatedMovies : (topMovieLength, setTopMoviesDesktop, setTopMovies, setIsLoading ) => {
         axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
                let arr = res.data.results.slice(0, topMovieLength);
                let arrDesktop = []
                arrDesktop.push(arr.slice(0, 5))
                arrDesktop.push(arr.slice(5, 10))

                setTopMoviesDesktop(arrDesktop)
                setTopMovies(arr)
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => {
                setIsLoading(false)
            })
    }
}











