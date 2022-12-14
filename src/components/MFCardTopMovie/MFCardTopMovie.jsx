import "./MFCardTopMovie.css";
// import MFCardMovie from "../MFCardMovie/MFCardMovie";
import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import previousArrow from "../../assets/paginationpreviousarrow.svg"
import nextArrow from "../../assets/paginationnextarrow.svg"
import {api} from "../../api/api";
const MFCardMovie = React.lazy(() => import("../MFCardMovie/MFCardMovie"));


const MFCardTopMovie = () => {
    let topMovieLength = 10;
    const [topMovies, setTopMovies] = useState([]);
    const [topMoviesDesktop, setTopMoviesDesktop] = useState([]);
    const [sliderIndex, setSliderIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [viewportWidth, setWindowWidth] = useState(window.visualViewport.width)

    useEffect(() => {
        setIsLoading(true)
        api.getTopRatedMovies(topMovieLength, setTopMoviesDesktop, setTopMovies, setIsLoading)
    }, []);

    const handlePrevious = (e) => {
        e.preventDefault()
        if (sliderIndex - 1 >= 0) setSliderIndex(sliderIndex - 1)
    }

    const handleNext = (e) => {
        e.preventDefault()
        if (sliderIndex + 1 < topMoviesDesktop.length) setSliderIndex(sliderIndex + 1)
    }

    return (
        <section className="mf-top-movies-container">
            <h2>Les 10 meilleurs films</h2>
            <div className="mf-top-movies-slider">
                {isLoading
                    ? <div className="mf-loader">chargement</div>
                    :
                    [(viewportWidth > 760
                        ?
                        <div className="mf-slider-container-desktop">
                            <div className="mf-slider-button-container">
                                {sliderIndex !== 0 &&
                                    <button type="button" className="mf-slider-button" onClick={handlePrevious}>
                                        <img src={previousArrow} alt="Previous" />
                                    </button>
                                }
                            </div>
                            {topMoviesDesktop.length &&
                                <>
                                    {topMoviesDesktop[sliderIndex].map((movie, key) => (
                                        <Suspense fallback={"loaging..."}>
                                            <MFCardMovie key={movie.title} movie={movie} size='s' />
                                        </Suspense>))}
                                </>
                            }
                            <div className="mf-slider-button-container">
                                {sliderIndex !== topMoviesDesktop.length -1 &&
                                    <button type="button" className="mf-slider-button" onClick={handleNext}>
                                        <img src={nextArrow} alt="Next" />
                                    </button>
                                }
                            </div>
                        </div>

                        : topMovies.map((movie, key) => (
                            <Suspense fallback={"loaging..."}>
                                <MFCardMovie key={"topMovie" + key.toString()} movie={movie} size='s' />
                            </Suspense>

                        )

                        ))]
                }
            </div>
        </section>
    )
}

export default MFCardTopMovie;