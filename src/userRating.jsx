// userRating.jsx
import React, { useEffect, useState } from "react" // import react
import axios from "axios"
import "./movie.css"


// get user rating on movie
export default function UserRating(){
    const [rating, setRating] = useState(0)
    
    const getData = async() => {
        var user = JSON.parse(localStorage.getItem("token"))._id
        var movie = window.location.pathname.substring(7);
        console.log(user)
        console.log(movie)
        const res = await axios.get("http://localhost:3000/rating/user/"+user+"/"+movie)
        setRating(res.data.data)
        console.log(res)
    }
    
    useEffect(() => {
        getData()
    }, [])

    if(rating){
        return(
            rating.rating // if user rated the movie, show rating
        )       
    }else{
        return(
            "Not Rated" // if user does not rate the movie, show "Not Rated"
        )
    }
}