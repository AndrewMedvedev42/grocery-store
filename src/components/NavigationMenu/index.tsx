import { categoriesList } from "./data";
import { NavigationContainer } from "./styles";

import {  Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <NavigationContainer>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="about-us">About Us</Nav.Link>
                            <Nav.Link href="delivery">Delivery</Nav.Link>
                        </Nav>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            {
                                categoriesList.map((category)=>{
                                    const {name,image} = category
                                    return (
                                        <NavDropdown.Item href="/">
                                            <img src={image} alt={`${name} icon`} />
                                            <span>{name}</span>
                                        </NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>
                        <div>
                            <img src="/" alt="profile icon" />
                        </div>
                    </Navbar.Collapse>
                    {/* <div>
                        <span>+00000000</span>
                        <span>from 10:00 to 20:00</span>
                    </div>
                    <div>
                        <img src="/" alt="basket icon" />
                    </div> */}
                </Container>
            </Navbar>
        </NavigationContainer>
    )
}

export default NavigationBar