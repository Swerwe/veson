import React from 'react';
import classes from "./ScrollingText.module.css"

interface IProps {
    className: string;
    children:string;
}

const ScrollingText = (props:IProps) => {
    return (
        <div className={props.className}>
            <p className={classes.marquee}>
                <span>{props.children}&nbsp;</span>
            </p>
            <p className={[classes.marquee,classes.marquee2].join(' ')}>
                <span>{props.children}&nbsp;</span>
            </p>
        </div>

    );
};

export default ScrollingText;