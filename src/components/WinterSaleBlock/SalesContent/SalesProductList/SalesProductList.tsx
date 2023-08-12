import React, {useContext} from 'react';
import classes from "./SalesProductList.module.css"
import UserContext from "../../../../context";
import SalesProductItem from "./SalesProductItem/SalesProductItem";

interface IProps {
    className: string;
}

const SalesProductList = () => {
    const context = useContext(UserContext);
    return (
        <div className={classes.list}>
            {context.products.map( product =>
                <SalesProductItem key={Math.random()} className={classes.item} product={product}/>
            )}
        </div>
    );
};

export default SalesProductList;