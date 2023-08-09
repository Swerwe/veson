import React from 'react';
import SearchButton from "./SearchButton/SearchButton";
import CartButton from "./CartButton/CartButton";
import classes from "./SearchBar.module.css"
interface IProps{
    className:string;
}
const SearchBar = (props:IProps) => {
    return (
        <div className={[classes.searchbar,props.className].join(' ')}>
            <SearchButton/>
            <CartButton/>
        </div>
    );
};

export default SearchBar;