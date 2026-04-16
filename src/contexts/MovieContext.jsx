import { createContext, useState, useContext, useEffect } from "react";

const movieContext = createContext()

export const useMovieContext = ()=> useContext(movieContext)

export const MovieProvider = ({children})=>{
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        const storedFav = localStorage.getItem("favorites")

        if(storedFav) setFavorites(JSON.parse(storedFav))
    },[])

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites))
    },[favorites])

    function addToFavorites(movie){
        setFavorites(prev => [...prev, movie])
    }

    function removeFav(movieId){
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    function isFavorites(movieId){
        return favorites.some(movie => movie.id === movieId)
    }

    const value={
        favorites,
        addToFavorites,
        removeFav,
        isFavorites
    }


    return <movieContext.Provider value={value}>
        {children}
    </movieContext.Provider>
}