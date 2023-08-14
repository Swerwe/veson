import React from 'react';
import classes from "./RegistrationBanner.module.css"
import VesonLogo from "../../VesonLogo/VesonLogo";
import LinkButton from "../../PromoBanner/BannerButton/LinkButton/LinkButton";

interface IProps {
    className: string;
}

const RegistrationBanner = (props:IProps) => {
    return (
        <div className={[classes.main,props.className].join(' ')}>
            <span className={classes.title}>
                GET AHEAD OF THE FASHION GAME AND BE THE FIRST TO SHOP OUR LATEST COLLECTION
            </span>
            <span className={classes.text}>Sign up for early access and discover a world of fashion before anyone else. Don't miss out on your chance to elevate your wardrobe with our exclusive designs</span>
            <VesonLogo className={classes.logo} color={"white"}/>
            <span className={classes.veson}>VESON</span>
            <button className={classes.email}>Your Email Address</button>
            <LinkButton className={classes.link} color={"white"}/>
            <button className={classes.more}>Learn More</button>
            
        </div>
    );
};

export default RegistrationBanner;