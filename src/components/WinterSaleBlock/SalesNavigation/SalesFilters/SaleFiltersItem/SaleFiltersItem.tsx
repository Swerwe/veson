import React from 'react';
import classes from "./SaleFiltersItem.module.css"
import {IFilter} from "../../../../../types/types";

interface IProps {
    className: string;
    filter:IFilter;

}

const SaleFiltersItem = (props:IProps) => {
    return (
        <div>
            {props.filter.title}
        </div>
    );
};

export default SaleFiltersItem;