import React from 'react';
import NavbarItem from "./NavbarItem/NavbarItem";
import classes from './NavList.module.css'
interface IProps{
    className:string
}
const NavList = (props:IProps) => {
    return (
        <div className={[classes.navlist,props.className].join(' ')}>
            <NavbarItem path={"/about"}>About Us</NavbarItem>
            <NavbarItem path={"/collection"}>Collection</NavbarItem>
            <NavbarItem path={"contact"}>Contact</NavbarItem>
        </div>
    );
};

export default NavList;