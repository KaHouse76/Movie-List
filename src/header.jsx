// header.jsx
import React, { useState } from "react"; // import react
import Logo from "./logo.png"
import {
    Navbar, // import Navbar
    Container, // import Container
    Nav, // import Nav
    Form, // import From
    FormControl, // import FormControl
    Button, // import Button
   } from "react-bootstrap";

// header
export default function Header(){
    const [searchValue, setSearchValue] = useState()
    var user = ""
    if(localStorage.getItem("token")){
        user = (JSON.parse(localStorage.getItem("token"))._id)
    }
    
    // search movie
    const search = (e) => {
        e.preventDefault()
        if(searchValue)
        window.location.href="/search/"+searchValue
    }

    // logout
    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        window.location.href="/"
    }

    return(
        // Navigation Bar at the top
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Form className="d-flex" onSubmit={search}>
                    <FormControl
                        type="search"
                        placeholder="Search Movie Title"
                        className="me-2"
                        aria-label="Search"
                        onChange={e => setSearchValue(e.target.value)}
                    />
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />  
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {localStorage.getItem("token")?<Nav.Link href={"/favMovie/"+user}>Favourite Movie</Nav.Link>:" "}
                </Nav>
                {
                    localStorage.getItem("token")?<Navbar.Text>Hello! {JSON.parse(localStorage.getItem("token")).username} <Button onClick={logout}>Logout</Button></Navbar.Text>:<Button href="http://localhost:8080/login">Login</Button>
                }  
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}