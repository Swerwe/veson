import React from 'react';
import classes from "./DesignerBanner.module.css"
import VesonLogo from "../../VesonLogo/VesonLogo";
import DesignerProfile from "../DesignerProfile/DesignerProfile";

interface IProps {
    className: string;
}

const DesignerBanner = (props:IProps) => {
    return (
        <div className={[classes.main,props.className].join(' ')}>
            <span className={classes.title}>Get Exclusive on <br/>
                Sunday, 12 March 2023</span>
            <span className={classes.countdown}>Countdown</span>
            <span className={[classes.time,classes.day].join(' ')}> 19 Day</span>
            <span className={[classes.time,classes.hour].join(' ')}> 21 Hours</span>
            <VesonLogo className={classes.logo} color={"white"}/>
            <span className={classes.x}>x</span>
            <DesignerProfile className={classes.designer}/>
            <button className={classes.register}>Register</button>
            <button className={classes.learn}>Learn more</button>

        </div>
    );
};

export default DesignerBanner;