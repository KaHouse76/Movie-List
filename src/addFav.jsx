// addFav.jsx
import React, { useEffect, useState } from "react" // import react
import axios from "axios" // import axios
import "./movie.css" // import css

// add movie to favourite
export default function AddFav(){ 
    const getData = async() => {
        var user = JSON.parse(localStorage.getItem("token"))._id
        var movie = window.location.pathname.substring(8);
        const userData = {
            movieID: movie,
            userID: user
        }
        console.log(user)
        console.log(movie)
        const res = await axios.post("http://localhost:3000/api/addFav", userData)
        console.log(res)
        window.location.href="/movie/"+movie  
    }
    
    useEffect(() => {
        getData()
    }, [])
}