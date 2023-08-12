import React from 'react';
import classes from "./DesignerBlock.module.css"
import DesignerInfo from "./DesignerInfo/DesignerInfo";
import SoonBlock from "./SoonBlock/SoonBlock";
import DesignerBanner from "./DesignerBanner/DesignerBanner";

interface IProps {
    className: string;
}

const DesignerBlock = () => {
    return (
        <div className={classes['main-block']}>
            <DesignerInfo className={classes.info}/>
            <SoonBlock className={classes.soon}/>
            <DesignerBanner className={classes.banner}/>

        </div>
    );
};

export default DesignerBlock;