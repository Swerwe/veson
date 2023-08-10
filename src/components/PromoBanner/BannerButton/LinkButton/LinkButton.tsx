import React from 'react';
import {ReactComponent as LinkSvg} from "../../../../img/icons/_.svg";
import classes from "./LinkButton.module.css";
interface IProps{
    className:string;
}
const LinkButton = (props:IProps) => {
    return (
        <div className={[classes.container,props.className].join(' ')}>
            <LinkSvg className={classes.svg}/>
        </div>

    );
};

export default LinkButton;