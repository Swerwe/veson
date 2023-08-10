import React from 'react';
import classes from "./SalesContent.module.css";
import SalesProductList from "./SalesProductList/SalesProductList";
const SalesContent = () => {
    return (
        <div className={classes.content}>
            <SalesProductList/>
            <button className={classes['more-btn']}>See More</button>
        </div>
    );
};

export default SalesContent;