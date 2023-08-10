import React from 'react';
import classes from "./SaleFiltersItem.module.css"
import {IFilter} from "../../../../../types/types";

interface IProps {
    className: string;
    filter:IFilter;

}

const SaleFiltersItem = (props:IProps) => {
    return (
        <div className={classes.item}>
            <img className={classes.img} src={props.filter.img}/>
            <span className={classes.title}>{props.filter.title}</span>


        </div>
    );
};

export default SaleFiltersItem;