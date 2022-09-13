import React from 'react'
import { MovieCard } from './MovieCard'
import { useQuery } from 'react-query'
import { Carousel } from './Carousel'

export const MovieList = (props) => {

    const fetchMovies = async () => {
        const url = props.url;
        const response = await fetch(url);
        return response.json();
    }

    const { data, status } = useQuery('movie', fetchMovies);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "error") {
        return <div>Error</div>;
    }

    return (
        <div className="container">

            <Carousel />

            <div className="row">
                {data.results.map(movie => {
                    return <MovieCard
                        key={movie.id}
                        movie_id={movie.id}
                        imgUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        title={movie.title}
                        description={movie.overview}
                        genre_ids={movie.genre_ids}
                        vote_average={movie.vote_average}
                    />
                })}
            </div>
        </div>
    )
}
