// updateRating.jsx
import React, { useEffect, useState } from "react" // import react
import axios from "axios"
import "./movie.css"

// update average rating of movie
export default function UpdateRating(){
    const updateRating = async() => {
        var query = window.location.pathname.split('/', 4);

        console.log(query)
        const ratingData = {
            movieID: query[2],
            avgRating: query[3]
        }

        const res = await axios.post('http://localhost:3000/api/updateRating', ratingData)
        console.log(res)
        window.location.href="/movie/"+ratingData.movieID
      }
    
      useEffect(() => {
        updateRating()
      }, []) 
}