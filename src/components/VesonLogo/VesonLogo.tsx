import React from 'react';
import logo from  "../../img/icons/logo.png"
import classes from "./VesonLogo.module.css";
const VesonLogo = () => {
    return (
        <div className={classes.container}>
            <img className={classes.img}  src={logo} alt={''}/>
        </div>
    );
};

export default VesonLogo;