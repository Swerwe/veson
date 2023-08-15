import React from 'react';

import classes from "./Navbar.module.css"
import NavList from "./NavList/NavList";
import VesonLogo from "../VesonLogo/VesonLogo";
import SearchBar from "./SearchBar/SearchBar";
import {Link} from "react-router-dom";
interface IProps{
    className:string;
}
const Navbar = (props:IProps) => {
    return (
        <div className={[classes.navbar,props.className].join(' ')}>
            <Link to={"/main"}><VesonLogo className={classes.logo}/></Link>
            <NavList className={classes.list}/>
            <SearchBar className={classes.search}/>
        </div>
    );
};

export default Navbar;