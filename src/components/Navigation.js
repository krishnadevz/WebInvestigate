import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react'
const  Navigation = ()=> {
    return (
        <div>
        <Navbar collapseOnSelect  expand="md" variant="light" bg="primary"  className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold ">
          WebTest🔍
        </Navbar.Brand>
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="font-weight-bold ">
                <Nav.Link href="/">Accessibility</Nav.Link>
                <Nav.Link href="/pract">BestPractices</Nav.Link>
                <Nav.Link href="/performance">Performance</Nav.Link>
                <Nav.Link href="/seo">SEO</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}
export default Navigation;