import React from 'react';
import classes from "./PolicyBlock.module.css"

interface IProps {
    className: string;
}

const PolicyBlock = () => {
    return (
        <div className={classes.main}>
            <div className={[classes.copyright,classes.element].join(' ')}>Copyright @ 2023 Veson, All right reserved</div>
            <div className={[classes.element].join(' ')}>Customers Service</div>
            <div className={[classes.element].join(' ')}>Terms & Conditions</div>
            <div className={[classes.element].join(' ')}>Privacy Policy</div>

        </div>
    );
};

export default PolicyBlock;