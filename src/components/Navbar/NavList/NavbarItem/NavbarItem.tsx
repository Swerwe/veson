import React from 'react';
import classes from "./NavbarItem.module.css";
import {Link} from "react-router-dom";
interface IProps{
    children?: string
    path:string
}
const  NavbarItem = (props:IProps) => {
    return (
        <Link to={props.path} className={classes.item}>
            {props.children}
        </Link>
    );
};

export default NavbarItem;