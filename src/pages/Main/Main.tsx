import React, {createContext, useEffect, useState} from 'react';

import './Main.module.css';
import Navbar from "../../components/Navbar/Navbar";
import PromoBlock from "../../components/PromoBlock/PromoBlock";
import WinterSaleBlock from "../../components/WinterSaleBlock/WinterSaleBlock";
import Context from "../../context"
import fetchService from "../../API/fetchService";
import {IBestseller, IContext, IFilter, IProduct} from "../../types/types";
import DesignerBlock from "../../components/DesignerBlock/DesignerBlock";
import BestSellerBlock from "../../components/BestSellerBlock/BestSellerBlock";
import SingUpBanner from "../../components/SingUpBanner/SingUpBanner";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import PolicyBlock from "../../components/PolicyBlock/PolicyBlock";
import classes from "./Main.module.css"
function Main() {
    const [filters,setFilters] = useState<IFilter[]>([]);
    const [products,setProducts] = useState<IProduct[]>([]);
    const [bestsellers,setBestsellers] = useState<IBestseller[]>([]);
    const defaultContext:IContext = {
        products:products,
        setProducts:setProducts,
        filters:filters,
        setFilters:setFilters,
        bestsellers:bestsellers,
        setBestsellers:setBestsellers,
    }

    const fetch = async () => {
        const products = await fetchService.getProducts();
        defaultContext.setProducts(products);
        const filters = await fetchService.getFilters();
        defaultContext.setFilters(filters);

    }
    useEffect(() =>{
        fetch();
    },[])
    return (
        <Context.Provider value={defaultContext}>
            <div className={classes["Main"]}>
                <PromoBlock/>
                <WinterSaleBlock/>
                <DesignerBlock/>
                <BestSellerBlock className={classes["best-seller-block"]}/>
                <SingUpBanner/>
                <InfoBlock/>
                <PolicyBlock/>
            </div>
        </Context.Provider>

    );
}
export default Main;