// removeFav.jsx
import React, { useEffect, useState } from "react" // import react
import axios from "axios"
import "./movie.css"

// remove movie from favourite
export default function RemoveFav(){ 
    const getData = async() => {
        var user = JSON.parse(localStorage.getItem("token"))._id
        var movie = window.location.pathname.substring(11);
        const userData = {
            movieID: movie,
            userID: user
        }
        console.log(user)
        console.log(movie)
        const res = await axios.post("http://localhost:3000/api/removeFav", userData)
        console.log(res)
        window.location.href="/movie/"+movie  
    }
    
    useEffect(() => {
        getData()
    }, [])
}