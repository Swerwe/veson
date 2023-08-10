import {createContext} from "react";
import {IContext} from "./types/types";
const UserContext = createContext<IContext>({
    products:[],
    filters:[],
    bestsellers:[],
    setProducts:() =>{
     return },
    setFilters:()=>{
    return
    },
    setBestsellers:()=>{
    return
    },
}

);
export default  UserContext