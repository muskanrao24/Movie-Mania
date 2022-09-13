import React, { useState } from 'react'
import { MovieList } from './MovieList';

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export const Search = () => {

    const API_BASE = "https://api.themoviedb.org/3";
    const API_KEY = "b57b8d755f0a091b919dccd91fb70e7f";

    const [query, setQuery] = useState("");
    const [url, setUrl] = useState(`${API_BASE}/movie/popular?api_key=${API_KEY}`);

    const handleChange = (event) => {
        setQuery(event.target.value);
        setUrl(event.target.value ? `${API_BASE}/search/movie?query=${event.target.value}&api_key=${API_KEY}` : `${API_BASE}/movie/popular?api_key=${API_KEY}`);
    }
    return (
        <>
            <input className="search_movies" type="search" placeholder='Search for movie titles here...' onChange={handleChange} />
            <QueryClientProvider client={queryClient}>
                <MovieList key={query} url={url} />
            </QueryClientProvider>
        </>
    )
}
