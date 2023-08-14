import React from 'react';
import classes from "./SalesContent.module.css";
import SalesProductList from "./SalesProductList/SalesProductList";
import {useState} from "react";
const SalesContent = () => {
    const [toLoad,setToLoad] = useState(false);
    return (
        <div className={classes.content}>
            <SalesProductList toLoad={toLoad} setToLoad={setToLoad}/>
            {!toLoad &&
            <button
                onClick={e => setToLoad(true)}
                className={classes['more-btn']}
            >See More
            </button>
            }

        </div>
    );
};

export default SalesContent;