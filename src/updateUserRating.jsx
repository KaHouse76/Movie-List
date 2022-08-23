// updateUserRating.jsx
import React, { useEffect, useState } from "react" // import react
import axios from "axios"
import "./movie.css"

// update user rating on movie
export default function UpdateUserRating(){
    const updateRating = async() => {
        var query = window.location.pathname.split('/', 5);
        const userData = {
            movieID: query[2],
            userID: query[3],
            rating: query[4]
        }

        console.log(query)
        console.log(userData)

        const res = await axios.post('http://localhost:3000/rating/updateRating', userData)
        console.log(res)
        window.location.href="/avgRating/"+userData.movieID
      }
    
      useEffect(() => {
        updateRating()
      }, []) 
}