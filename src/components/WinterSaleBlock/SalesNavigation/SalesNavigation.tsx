import React from 'react';
import classes from "./SalesNavigation.module.css"
import SalesFilters from "./SalesFilters/SalesFilters";

interface IProps {
    className: string;
}

const SalesNavigation = () => {
    return (
        <div>
            <h1 className={classes.header}>Winter Sale 2023</h1>
            <SalesFilters className={classes.filters}/>
        </div>
    );
};

export default SalesNavigation;