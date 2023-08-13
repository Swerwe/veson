import React, {useContext} from 'react';
import classes from "./BestSellerItem.module.css"
import UserContext from "../../../../context";
import {IBestseller} from "../../../../types/types";
import RatingVisual from "../../../RatingVisual/RatingVisual";

interface IProps {
    className?: string;
    data:IBestseller
}

const BestSellerItem = (props:IProps) => {
    return (
        <div className={classes.item}>
            <img className={classes.img} src={props.data?.img} alt={""}/>
            <span className={classes.status}>{props.data.status}</span>
            <span className={classes.title}>{props.data.title}</span>
            <span className={classes.price}>${props.data.price.toFixed(2)}</span>
            <RatingVisual className={classes.rating} rating={props.data.rating} rateNumber={props.data.ratesNumber}/>
            
        </div>
    );
};

export default BestSellerItem;