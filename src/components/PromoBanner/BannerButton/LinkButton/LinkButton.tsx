import React from 'react';
import classes from "./LinkButton.module.css";
import {inspect} from "util";
interface IProps{
    className:string;
    color?:string
}
const LinkButton = (props:IProps) => {

        if (props.color === 'white'){
            return (

                    <img className={[classes.img,props.className].join(' ')}  src={"https://i.ibb.co/4sLz7yy/white.png"}/>

            )
        }else{
            return (

                    <img className={[classes.img,props.className].join(' ')} src={"https://i.ibb.co/ZGpNvh5/black.png"}/>

            )
        }




};

export default LinkButton;