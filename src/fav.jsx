// fav.jsx
import React, { useEffect, useState } from "react" // import react
import axios from "axios"
import "./movie.css"
import IsFav from "./isfav.png"
import NotFav from "./notfav.png"

// get whether the movie is favourite or not
export default function Fav(){
    const [fav, setFav] = useState(0)
    
    const getData = async() => {
        var user = JSON.parse(localStorage.getItem("token"))._id
        var movie = window.location.pathname.substring(7);
        console.log(user)
        console.log(movie)
        const userData ={
            movie: movie,
            user: user
        }
        console.log(userData)
        const res = await axios.post("http://localhost:3000/api/fav/", userData)
        setFav(res.data.data)
        console.log(res) 
    }
    
    useEffect(() => {
        getData()
    }, [])

    // add movie to favourite
    function addFav(){
        window.location.href="/addFav/"+window.location.pathname.substring(7)
    }

    // remove movie from favourite
    function removeFav(){
        window.location.href="/removeFav/"+window.location.pathname.substring(7)
    }

    if(localStorage.getItem("token")){
        if(fav){
            return(
                <img src={IsFav} className="favImg" onClick={(e) => removeFav()} /> // image with onClick to remove movie from favourite if movie is favourite
            )    
        }else{
            return(
                <img src={NotFav} className="favImg" onClick={(e) => addFav()} />  // image with onClick to add movie to favourite if movie is not favourite
            )
        }
    }else{
        return(
            <img src={NotFav} className="favImg" /> // image only without any onClick if user does not loggin
        )
    }
}