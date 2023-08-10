import React from 'react';
import logo from  "../../img/icons/logo.png"
import classes from "./VesonLogo.module.css";
interface IProps{
    className:string
}
const VesonLogo = (props:IProps) => {
    return (
        <div className={[classes.container,props.className].join(' ')}>
            <img className={classes.img}  src={logo} alt={''}/>
        </div>
    );
};

export default VesonLogo;