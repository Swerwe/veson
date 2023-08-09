import React from 'react';
import {ReactComponent as CartLogo} from "../../../../img/icons/Cart_Icon.svg"
import classes from "./CartButton.module.css"
const CartButton = () => {
    return (
        <div className={classes.container}>
            <CartLogo className={classes.logo}/>
            <label className={classes.text}>Cart</label>
        </div>
    );
};

export default CartButton;