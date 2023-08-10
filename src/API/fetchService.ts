import axios from "axios";
import {IBestseller, IFilter, IProduct} from "../types/types";

export default class fetchService{

    static async getFilters():Promise<IFilter[]>{
        const response =await axios.get('https://my-json-server.typicode.com/Swerwe/FakeDB/filters');
        return await response.data;

    }
    static async getProducts():Promise<IProduct[]>{
        const response =await axios.get('https://my-json-server.typicode.com/Swerwe/FakeDB/products');
        return await response.data;
    }
    static async getBestsellers():Promise<IBestseller[]>{
        const response =await axios.get('https://my-json-server.typicode.com/Swerwe/FakeDB/bestsellers');
        return await response.data;
    }
}