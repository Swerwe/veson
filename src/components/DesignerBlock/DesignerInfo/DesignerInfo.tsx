import React from 'react';
import classes from "./DesignerInfo.module.css"
import DesignerProfile from "../DesignerProfile/DesignerProfile";

interface IProps {
    className: string;
}

const DesignerInfo = (props:IProps) => {
    return (
        <div className={classes.container}>
            <div className={classes['title-container']}>
                <span className={[classes.title, classes.first].join(' ')}
                >Collaboration x</span>
                <span className={[classes.title, classes.second].join(' ')}
                >James Visual</span>
            </div>
            <DesignerProfile className={classes.designer}/>
            <span className={classes.info}>
                Elevate your style with our exclusive collaboration with a top designer
            </span>
        </div>
    );
};

export default DesignerInfo;