import React from 'react';
import NavbarItem from "./NavbarItem/NavbarItem";
import classes from './NavList.module.css'
interface IProps{
    className:string
}
const NavList = (props:IProps) => {
    return (
        <div className={[classes.navlist,props.className].join(' ')}>
            <NavbarItem>About Us</NavbarItem>
            <NavbarItem>Collection</NavbarItem>
            <NavbarItem>Contact</NavbarItem>
        </div>
    );
};

export default NavList;