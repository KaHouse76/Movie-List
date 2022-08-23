import React, { useEffect, useState } from "react"; // import react
import axios from "axios"
import {
    Container,
    Form,
    Button
} from "react-bootstrap"
import "./movie.css"
import { Helmet } from 'react-helmet';

export default function Login(){
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const login = async e => {
        e.preventDefault()
        const userData = {
            username: username,
            password: password
        }
        const res = await axios.post('http://localhost:3000/user/login', userData)
        console.log(res)
        const token = JSON.stringify(res.data.data)
        localStorage.setItem("token", token)
        window.location.reload()
    }

    if (localStorage.getItem("token")){
        window.location.href="/"
    }

    return(
        <Container>
            <Helmet>
                <title>Movie Rating | Login</title>
            </Helmet>
            <h1>Login</h1>
            <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className="formLabel">Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="formLabel">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </Container>      
    )
}