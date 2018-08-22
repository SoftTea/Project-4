// import React from 'react';
// import { Link } from 'react-router-dom';

// function Nav () {
//   return (
//     // <ul>
//     //   <li> <Link to = '/home'>Home</Link> </li>
//     //   <li> <Link to = '/about'> About </Link> </li>
//     //   <li> <Link to = '/sign-in'> Sign-in??? </Link> </li>
//     // </ul>

    


//   )
// }




import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/home">
                        <strong>Relate an Artist</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="/home">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/about">About</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink  to="/sign-in">Sign-in??</NavLink>
                          </NavItem>
                          <NavItem>
                           
                          </NavItem>
                        </NavbarNav>
                        
                    </Collapse>
                </Navbar>
            
        );
    }
}

export default Nav;