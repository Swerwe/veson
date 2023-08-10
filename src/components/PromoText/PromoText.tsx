import React from 'react';
import classes from './PromoText.module.css';
import VesonLogo from "../VesonLogo/VesonLogo";
interface IProps{
    className:string;
}
const PromoText = (props:IProps) => {
    return (
        <div className={[classes["text-container"],props.className].join(' ')}>
            <div className={classes.text}>Browse through our carefully curated collection of high-quality clothing and accessories  featuring the latest trends and styles <VesonLogo className={classes.logo}/></div>

        </div>
    );
};

export default PromoText;