import React from 'react';
import classes from "./SingUpBanner.module.css"
import ScrollingText from "./ScrollingText/ScrollingText";
import RegistrationBanner from "./RegistrationBanner/RegistrationBanner";

interface IProps {
    className: string;
}

const SingUpBanner = () => {
    return (
        <div className={classes.main}>
            <ScrollingText className={classes.scroll}>ELEVATE YOUR WARDROBE WITH OUR UNIQUE DESIGNS</ScrollingText>
            <RegistrationBanner className={classes.banner}/>
        </div>
    );
};

export default SingUpBanner;