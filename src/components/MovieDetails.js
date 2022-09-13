import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {

    const [details, setDetails] = useState({
        belongs_to_collection: {},
        production_companies: []
    });

    // get movie_id from the url itself
    const { movie_id } = useParams();
    
    // fallback img url to use if image is unavailable
    const fallBackImgPath = "https://images.unsplash.com/photo-1555861496-0666c8981751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80";

    const fetchMovieDetails = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b57b8d755f0a091b919dccd91fb70e7f&language=en`;
        const response = await fetch(url);
        const data = await response.json();
        setDetails(data);
    }

    useEffect(() => {
        fetchMovieDetails();
    }, [])

    return (
        <div className="container movie_details">
            
            <h1>{details.title}</h1>
            <h2>{details.tagline}</h2>
            <p>{details.overview}</p>
            <img src={(details.backdrop_path) ? `https://image.tmdb.org/t/p/w500${details.backdrop_path}` : fallBackImgPath} alt="backdrop" />
            <img src={(details.poster_path) ? `https://image.tmdb.org/t/p/w500${details.poster_path}` : fallBackImgPath} alt="poster" />

            <h2>Production Companies:</h2>
            {details.production_companies.map(company => {
                return <div key={company.id}>
                    <img src={(company.logo_path)?`https://image.tmdb.org/t/p/w500${company.logo_path}`:null} alt={company.name} />
                </div>
            })}
            
            <h3>Budget</h3><p>{details.budget}</p>
            <h3>Revenue</h3><p>{details.revenue}</p>
            <h3>Poularity</h3><p>{details.popularity}</p>
            <h3>Runtime</h3><p>{details.runtime} minutes</p>
            <h3>Average vote</h3><p>{details.vote_average}</p>
            <h3>Vote count</h3><p>{details.vote_count}</p>

            <a href={details.homepage} rel="noreferrer" target="_blank">Visit homepage</a>

        </div>
    )
}
