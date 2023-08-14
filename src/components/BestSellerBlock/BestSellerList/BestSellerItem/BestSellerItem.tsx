import React, {useContext, useState} from 'react';
import classes from "./BestSellerItem.module.css"
import UserContext from "../../../../context";
import {IBestseller} from "../../../../types/types";
import RatingVisual from "../../../RatingVisual/RatingVisual";

interface IProps {
    className?: string;
    data:IBestseller
}

const BestSellerItem = (props:IProps) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const onMouseOver = () => {
        setHovered(true)

    }
    const onMouseLeave = () => {
        setHovered(false)

    }
    return (
        <div className={classes.item}>

            <img

                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                className={[classes.img,hovered?classes["hovered"]:""].join(' ')}
                src={props.data?.img}
                alt={""}/>
            <span className={classes.status}>{props.data.status}</span>
            <span className={classes.title}>{props.data.title}</span>
            <span className={classes.price}>${props.data.price.toFixed(2)}</span>
            {hovered && <button   className={classes.cartbtn}>Add to cart</button>}
            {hovered && <button   className={classes.sizebtn}>Size Guide</button>}
            <RatingVisual className={classes.rating} rating={props.data.rating} rateNumber={props.data.ratesNumber}/>
            
        </div>
    );
};

export default BestSellerItem;