import React, {createContext, useEffect, useState} from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import PromoBlock from "./components/PromoBlock/PromoBlock";
import WinterSaleBlock from "./components/WinterSaleBlock/WinterSaleBlock";
import Context from "./context"
import fetchService from "./API/fetchService";
import {IBestseller, IContext, IFilter, IProduct} from "./types/types";
import DesignerBlock from "./components/DesignerBlock/DesignerBlock";
function App() {
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
        const bestSellers = await fetchService.getBestsellers();
        defaultContext.setBestsellers(bestSellers);

    }
    useEffect(() =>{
        fetch();
    },[])
  return (
      <Context.Provider value={defaultContext}>
          <div className="App">
              <Navbar className={"nav"}/>
              <PromoBlock/>
              <WinterSaleBlock/>
              <DesignerBlock/>
          </div>
      </Context.Provider>

  );
}

export default App;
