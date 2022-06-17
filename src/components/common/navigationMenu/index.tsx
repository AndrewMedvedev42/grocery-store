import { v4 as uuid } from 'uuid';
import {  Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Section } from "assets/styles/styled-components";
import { NavigationContainer } from "./styles";

import { categorysList } from "assets/data/categoryList";



const NavigationBar = () => {
    return (
        <NavigationContainer>
            <Section>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="about-us">About Us</Nav.Link>
                            <Nav.Link href="delivery">Delivery</Nav.Link>
                        </Nav>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            {
                                categorysList.map((category)=>{
                                    const {name,image} = category
                                    return (
                                        <NavDropdown.Item key={uuid()} href="/">
                                            <span>{name}</span>
                                        </NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>
                        <Button>
                            <img src="/" alt="profile icon" />
                        </Button>
                        <Button>
                            <img src="/" alt="basket icon" />
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Section>
        </NavigationContainer>
    )
}

export default NavigationBar