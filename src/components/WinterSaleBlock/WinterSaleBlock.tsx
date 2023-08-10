import React, {useContext, useEffect} from 'react';
import classes from "./WinterSaleBlock.module.css";
import SalesNavigation from "./SalesNavigation/SalesNavigation";
import SalesContent from "./SalesContent/SalesContent";
import Context from "../../context";
const WinterSaleBlock = () => {
    const context = useContext(Context);
    return (
        <div>
            <SalesNavigation/>
            <SalesContent/>
            
        </div>
    );
};

export default WinterSaleBlock;