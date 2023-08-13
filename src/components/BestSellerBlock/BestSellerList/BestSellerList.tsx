import React, {useContext, useEffect} from 'react';
import classes from "./BestSellerList.module.css"
import BestSellerItem from "./BestSellerItem/BestSellerItem";
import {useState} from "react";
import {IBestseller} from "../../../types/types";
import fetchService from "../../../API/fetchService";
import UserContext from "../../../context";
interface IProps {
    className: string;

}


const BestSellerList = () => {
    const context = useContext(UserContext);
    const fetch = async () =>{
        const bestSellers = await fetchService.getBestsellers();
        context.setBestsellers(bestSellers);
    }
    useEffect(()=>{
        fetch();
    },[])

    return (
        <div className={classes.list}>
            {context.bestsellers.map(bestseller =>
                <BestSellerItem key={Math.random()} data={bestseller}/>
            )}

        </div>
    );
};

export default BestSellerList;