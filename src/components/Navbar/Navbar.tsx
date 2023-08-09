import React from 'react';

import classes from "./Navbar.module.css"
import NavList from "./NavList/NavList";
import VesonLogo from "../VesonLogo/VesonLogo";
import SearchBar from "./SearchBar/SearchBar";
const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <VesonLogo/>
            <NavList className={classes.list}/>
            <SearchBar className={classes.search}/>
        </div>
    );
};

export default Navbar;