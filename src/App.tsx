import React, {createContext, useEffect, useState} from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import PromoBlock from "./components/PromoBlock/PromoBlock";
import WinterSaleBlock from "./components/WinterSaleBlock/WinterSaleBlock";
import Context from "./context"
import fetchService from "./API/fetchService";
import {IBestseller, IContext, IFilter, IProduct} from "./types/types";
import DesignerBlock from "./components/DesignerBlock/DesignerBlock";
import BestSellerBlock from "./components/BestSellerBlock/BestSellerBlock";
import SingUpBanner from "./components/SingUpBanner/SingUpBanner";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import PolicyBlock from "./components/PolicyBlock/PolicyBlock";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";

function App() {

  return (
      <BrowserRouter>
          <Navbar className={"nav"}/>
          <Routes>
              <Route path="/main" element={<Main/>}>
              </Route>
              <Route path="/about" element={<About/>}>
              </Route>

          </Routes>


      </BrowserRouter>


  );
}

export default App;
