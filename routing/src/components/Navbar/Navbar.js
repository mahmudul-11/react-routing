import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/friends"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Friends
            </NavLink>
            <NavLink
                to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
            >
                Contact
            </NavLink>
        </div>
    );
};

export default Navbar;