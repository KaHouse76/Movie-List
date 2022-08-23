// favMovie.jsx
import React, { useEffect, useState } from "react"; // import react
import axios from "axios"
import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap"
import "./movie.css"
import Star from "./star.png"
import { Helmet } from 'react-helmet';

// get favourite movie list
export default function FavMovie(){
    const [movies, setMovies] = useState([])
    var user = JSON.parse(localStorage.getItem("token"))._id
    console.log(user)
    const getData = async() => {
        const res = await axios.get('http://localhost:3000/api/favMovies/'+user)
        setMovies(res.data.data)
      }
    
      useEffect(() => {
        getData()
      }, [])
    
    return(
        // movies list
        <Container>
            <Helmet>
                <title>Movie Rating | Favourite</title>
            </Helmet>
            <Row>
                <h1>Favourite movies</h1>
            </Row>
            <Row>
                {movies.map((movieData, k) => ( 
                    <Col key={k} xs={12} md={4} lg={2} className="mb-3">
                        <Card bg="dark">
                            <Card.Link href={"/movie/" + movieData._id}>
                            <Card.Img className="cardImage" variant="top" src={"../" +movieData.poster}  />
                            </Card.Link>
                            <Card.Body>
                                <Card.Link className="cardLink" href={"/movie/" + movieData._id} style={{ textDecoration: "none" }}>
                                <Card.Title>{movieData.title}</Card.Title>
                                </Card.Link>
                            </Card.Body>
                            <Card.Footer>
                                <img src={Star} width="15px" height="15px" /> {movieData.rating}
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}