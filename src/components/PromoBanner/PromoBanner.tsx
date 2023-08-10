import React from 'react';
import classes from "./PromoBanner.module.css";
import BannerButton from "./BannerButton/BannerButton";
import img from "../../img/design/main.jpeg"
interface IProps{
    className:string;
}
const PromoBanner = (props:IProps) => {
    return (
        <div className={[classes.container,props.className].join(' ')}>
            <h1 className={[classes.head,classes.child].join(' ')}>Fashion for All, Every Day</h1>
            <span className={[classes.child,classes.text].join(' ')}>
                Discover your personal style and make a statement with every outfit. Shop with us to elevate your wardrobe and bring your fashion game to the next level.
            </span>
            <BannerButton className={classes.btn}/>
        </div>
    );
};

export default PromoBanner;