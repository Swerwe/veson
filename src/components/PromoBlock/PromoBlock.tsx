import React from 'react';
import PromoBanner from "../PromoBanner/PromoBanner";
import classes from "./PromoBlock.module.css"
import PromoText from "../PromoText/PromoText";
const PromoBlock = () => {
    return (
        <div className={classes["promo-block"]}>
            <PromoBanner className={classes.banner}/>
            <PromoText className={classes.promo}/>
        </div>
    );
};

export default PromoBlock;