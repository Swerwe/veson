import React from 'react';
import classes from "./SoonItem.module.css"

interface IProps {
    className: string;
    img:string;
}

const SoonItem = (props:IProps) => {
    return (
        <div
            className={classes.item}
            style={{backgroundImage:`url(${props.img})`}}
        >
            <div className={classes.circle}>Soon!</div>
            
        </div>
    );
};

export default SoonItem;