// avgRating.jsx
import React, { useEffect, useState } from "react" // import react
import axios from "axios" // import axios
import "./movie.css" // import css

// get average rating of movie
export default function AvgRating(){

    const getRating = async() => {
        var query = window.location.pathname.substring(11);

        console.log(query)

        const res = await axios.get('http://localhost:3000/rating/avgRating/'+query)
        console.log(res)
        console.log(res.data.data[0]._id)
        console.log(res.data.data[0].avgRating)

        window.location.href="/updateRating/"+res.data.data[0]._id+"/"+res.data.data[0].avgRating

      }

      useEffect(() => {
        getRating()
      }, []) 


}