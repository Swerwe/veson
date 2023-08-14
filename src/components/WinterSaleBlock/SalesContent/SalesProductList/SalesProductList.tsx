import React, {useContext, useState} from 'react';
import classes from "./SalesProductList.module.css"
import UserContext from "../../../../context";
import SalesProductItem from "./SalesProductItem/SalesProductItem";

interface IProps {
    className?: string;
    toLoad:boolean;
    setToLoad:(x:boolean) => void
}

const SalesProductList = (props:IProps) => {

    const context = useContext(UserContext);
    return (
        <div

            className={classes.list}
        >

            {context.products.slice(0,4).map( product =>
                <SalesProductItem key={Math.random()} className={classes.item} product={product}/>
            )}

            {props.toLoad && context.products.slice(4,context.products.length - 1).map( product =>
                <SalesProductItem key={Math.random()} className={classes.item} product={product}/>
            )}
        </div>
    );
};

export default SalesProductList;