import React, {useContext, useEffect} from 'react';
import classes from "./BestSellerList.module.css"
import BestSellerItem from "./BestSellerItem/BestSellerItem";
import {useState} from "react";
import {IBestseller} from "../../../types/types";
import fetchService from "../../../API/fetchService";
import UserContext from "../../../context";
interface IProps {
    className?: string;
    toLoad:boolean;
    setToLoad:(x:boolean) => void

}


const BestSellerList = (props:IProps) => {
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
            {context.bestsellers.slice(0,4).map(bestseller =>
                <BestSellerItem key={Math.random()} data={bestseller}/>
            )}
            {props.toLoad && context.bestsellers.slice(4,context.bestsellers.length).map(bestseller =>
                <BestSellerItem key={Math.random()} data={bestseller}/>
            ) }

        </div>
    );
};

export default BestSellerList;