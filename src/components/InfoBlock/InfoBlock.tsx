import React from 'react';
import classes from "./InfoBlock.module.css"
import Table from "./Table/Table";
import VesonLogo from "../VesonLogo/VesonLogo";

interface IProps {
    className: string;
}

const InfoBlock = () => {
    return (
        <div className={classes.main}>
            <div className={classes.slogan}>
                <VesonLogo className={classes.logo} color={"black"}/>
                <span className={classes.veson}>VESON</span>
                <span className={classes.text}>FASHION FOR ALL,<br/>EVERY DAY</span>

            </div>
            <Table className={classes.table}/>
            
        </div>
    );
};

export default InfoBlock;