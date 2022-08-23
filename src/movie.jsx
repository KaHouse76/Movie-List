// movie.jsx
import React, { useEffect, useState } from "react" // import react
import axios from "axios"
import {
    Container,
    Row,
    Col
} from "react-bootstrap"
import "./movie.css"
import StarRatings from 'react-star-ratings'
import UserRating from "./userRating"
import Fav from './fav'
import { Helmet } from 'react-helmet';

// get movie detail
export default function Movie(){
    const [movie, setMovie] = useState(0);
    
    const getData = async() => {
        var query = window.location.pathname.substring(7);
        const res = await axios.get("http://localhost:3000/api/movie/"+query).catch(() => {window.location.href="/"})
        setMovie(res.data.data)
        console.log(res)
    }

    // update rating
    function changeRating(newRating, name) {
        var user = JSON.parse(localStorage.getItem("token"))._id
        window.location.href="/userRating/"+movie._id+"/"+user+"/"+newRating
    }
    
    useEffect(() => {
        getData()
    }, [])

    return(
        <Container>
            <Helmet>
                <title>Movie Rating | Movie</title>
            </Helmet>
            <Row>
                <Col xs={12} md={9}><h1>{movie.title} <Fav /></h1></Col>
                <Col xs={12} md={3}><StarRatings rating={movie.rating} starRatedColor="yellow" starHoverColor="orange" changeRating={changeRating} numberOfStars={5} /><h1> You: <UserRating /></h1></Col>
            </Row>
            <Row>
                <Col><h6>{movie.duration} | {movie.category} | {movie.releaseyear}</h6></Col>
            </Row>
            <Row>
                <Col xs={12} md={4}><img width="100%" src={("../" + movie.poster)}/></Col>
                <Col xs={12} md={8}><iframe width="100%" height="100%" src={movie.youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
            </Row>
            <Row>
                <Col><br/><h6>{movie.description}</h6></Col>
            </Row>
            <Row>
                <Col><br/><h6>Director: {movie.director}</h6></Col>
            </Row>
            <Row>
                <Col><br/><h6>Leading Actors/Actresses: {movie.leading}</h6></Col>
            </Row>
        </Container>
    )
}