import React, { useContext, useState } from "react";
import "./Navigation.css";
import UserContext from "../auth/UserContext";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';


const Navigation = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen); 


  const loggedInNav = () => {
    let profilesLink = `/profiles/${currentUser.username}`;
    console.log(profilesLink);

    return (
      <Nav className="ml-auto">       
        <NavItem className="mr-3">
          <NavLink className="text-white" to={profilesLink}>
            {currentUser.username}'s Profiles
          </NavLink>
        </NavItem>        
        <NavItem className="mr-2">
          <NavLink className="text-white" to="/" onClick={logout}>
            Log Out
          </NavLink>
        </NavItem>
      </Nav>
    );
  }   
    
  const loggedOutNav = () => {
    return (
      <Nav className="ml-auto">
        <NavItem className="mr-3">
          <NavLink className="text-white" to="/login">
            Log In
          </NavLink>
        </NavItem>        
        <NavItem className="mr-2">
          <NavLink className="text-white" to="/register">
            Sign Up
          </NavLink>
        </NavItem>        
      </Nav>
    );
  }

  return (
    <div className="Navigation">
      <Navbar expand="md">
        <Nav>
          <NavItem className="mr-3">
            <NavLink className="text-white" to="/">
              WebSynth
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {currentUser ? loggedInNav() : loggedOutNav()}           
        </Collapse>
      </Navbar>
    </div>
  );  
}

export default Navigation;