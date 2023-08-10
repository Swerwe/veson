import React from 'react';
import classes from "./BannerButton.module.css";
import LinkButton from "./LinkButton/LinkButton";
interface IProps{
    className:string;
}
const BannerButton = (props:IProps) => {
    return (
        <div className={[props.className,classes.container].join(' ')}>
            <span className={classes.text}>Shop Now</span>
            <LinkButton className={classes.link}/>
        </div>
    );
};

export default BannerButton;