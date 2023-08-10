import React from 'react';
import classes from "./SalesFilters.module.css"
import SaleFiltersItem from "./SaleFiltersItem/SaleFiltersItem";
import UserContext from "../../../../context";
import {useContext} from "react";
interface IProps {
    className: string;
}

const SalesFilters = (props:IProps) => {
    const filters = useContext(UserContext)?.filters;

    return (
        <div>
            {
                filters.map(x =>
                <SaleFiltersItem key ={Math.random()} filter={x} className={classes.item}/>
                )
            }

        </div>
    );
};

export default SalesFilters;