import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
    <Navbar staticTop>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">CoolApp</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <LinkContainer to={{ pathname: '/'}}>
                <NavItem eventKey={1} href="#">Users</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/state'}}>
                <NavItem eventKey={2} href="#">State</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/settings'}}>
                <NavItem eventKey={3} href="#">Settings</NavItem>
            </LinkContainer>
        </Nav>
    </Navbar>
);

export default Header;