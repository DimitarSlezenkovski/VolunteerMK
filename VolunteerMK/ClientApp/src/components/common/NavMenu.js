import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { LoginMenu } from "../api-authorization/LoginMenu";
import "./NavMenu.css";
import { Grid } from "@material-ui/core/";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar
        style={{ background: "white", marginBottom: "6vh" }}
        fixed="top"
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <NavbarBrand tag={Link} to="/">
          VolunteerMK
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse
          className="d-sm-inline-flex flex-sm-row"
          isOpen={isOpen}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">
                Почетна
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/counter">
                Counter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/fetch-data">
                Fetch data
              </NavLink>
            </NavItem>
          </ul>
        </Collapse>
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse"
          isOpen={isOpen}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            <LoginMenu isOpen={isOpen}></LoginMenu>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};

export { NavMenu };
