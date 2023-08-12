import React from 'react';
import classes from "./SoonBlock.module.css"
import SoonItem from "./SoonItem/SoonItem";

interface IProps {
    className: string;
}

const SoonBlock = (props:IProps) => {
    return (
        <div className={[classes['soon-block'],props.className].join(' ')}>
            <SoonItem img={"https://i.ibb.co/Y7pgpTs/soon1.jpg"} className={classes.item}/>
            <SoonItem img={"https://i.ibb.co/x1yyDRH/soon2.jpg"} className={classes.item}/>
        </div>
    );
};

export default SoonBlock;