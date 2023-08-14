import React from 'react';
import classes from "./Table.module.css"

interface IProps {
    className: string;
}

const Table = (props:IProps) => {
    return (
        <div className={[classes["grid-container"],props.className].join(' ')}>
            <div className={classes["column-name"]}>Navigation</div>
            <div className={classes["column-name"]}>Collection</div>
            <div className={classes["column-name"]}>Our Company</div>
            <div className={classes["column-name"]}>Contact</div>
            <div className={classes["element"]}>About Us</div>
            <div className={classes["element"]}>New Arrivals</div>
            <div className={classes["element"]}>Store</div>
            <div className={classes["element"]}>veson@info.com</div>
            <div className={classes["element"]}>Collection</div>
            <div className={classes["element"]}>Main Collection</div>
            <div className={classes["element"]}>About Us</div>
            <div className={classes["element"]}>+62 850 3320 0808</div>
            <div className={classes["element"]}>Contact</div>
            <div className={classes["element"]}>Women Collection</div>
            <div className={classes["element"]}>Careers</div>
        </div>
    );
};

export default Table;