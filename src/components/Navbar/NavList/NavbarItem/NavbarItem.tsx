import React from 'react';
import classes from "./NavbarItem.module.css";
interface IProps{
    children?: string
}
const  NavbarItem = (props:IProps) => {
    return (
        <div className={classes.item}>
            {props.children}
        </div>
    );
};

export default NavbarItem;