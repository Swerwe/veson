import React from 'react';
import classes from "./SalesProductItem.module.css"
import {IProduct} from "../../../../../types/types";
import {useState} from "react";
import {useRef} from "react/index";
interface IProps {
    className: string;
    product:IProduct;
}

const SalesProductItem = (props:IProps) => {
    const [hovered, setHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseOut = () => {
        setHovered(false);
    };


    return (
        <div className={classes.item}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseOut}
                className={classes.image}
                style={{backgroundImage: `url(${props.product.img})`,
                    filter:(hovered)?"brightness(50%)":"brightness(100%)"


                }}>

            </div>
            <span  className={classes.title}>
                {props.product.title}
            </span>
            <span className={classes.price}>
                ${props.product.price.toFixed(2)}
            </span>
            {hovered && <button   className={classes.cartbtn}>Add to cart</button>}
            {hovered && <button   className={classes.sizebtn}>Size Guide</button>}
            <button className={classes['detail-button']}>Detail</button>
        </div>
    );
};

export default SalesProductItem;