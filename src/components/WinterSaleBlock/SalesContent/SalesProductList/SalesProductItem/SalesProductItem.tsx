import React from 'react';
import classes from "./SalesProductItem.module.css"
import {IProduct} from "../../../../../types/types";

interface IProps {
    className: string;
    product:IProduct;
}

const SalesProductItem = (props:IProps) => {
    return (
        <div className={classes.item}>
            <div className={classes.image} style={{backgroundImage: `url(${props.product.img})`}}>

            </div>
            <span className={classes.title}>
                {props.product.title}
            </span>
            <span className={classes.price}>
                ${props.product.price.toFixed(2)}
            </span>
            <button className={classes['detail-button']}>Detail</button>
        </div>
    );
};

export default SalesProductItem;