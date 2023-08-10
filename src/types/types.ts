export interface IFilter{
    title:string;
    img:string;

}
export interface IProduct{
    title:string;
    img:string;
    price:number;
}
export interface IBestseller extends IProduct{

}
export interface IContext{
    products:IProduct[];
    setProducts: (products:IProduct[]) => void;
    filters:IFilter[];
    setFilters:(filters:IFilter[]) => void;
    bestsellers:IBestseller[];
    setBestsellers:(bestsellers:IBestseller[])=>void;

}