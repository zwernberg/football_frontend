import React, { Component } from 'react';
import {Navbar, Nav, MenuItem, NavItem, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';
class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar fixedTop inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/" className="header">Schumacher Football</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem componentClass={Link} eventKey={1} href="/" to="/">SCOREBOARD</NavItem>
                        <NavItem componentClass={Link} eventKey={2} href="/standings" to="/standings">STANDINGS</NavItem>
                        {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation