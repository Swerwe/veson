import React from 'react';
import classes from "./SalesContent.module.css";
import SalesProductList from "./SalesProductList/SalesProductList";
const SalesContent = () => {
    return (
        <div>
            <SalesProductList/>
        </div>
    );
};

export default SalesContent;