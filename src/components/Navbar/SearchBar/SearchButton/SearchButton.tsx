import React from 'react';
import classes from './SearchButton.module.css';
import {ReactComponent as SearchLogo} from "../../../../img/icons/Search_Icon.svg"

const SearchButton = () => {
    return (
        <div className={classes.container}>
            <SearchLogo className={classes.logo}/>
            <label className={classes.text}>Search</label>
        </div>
    );
};

export default SearchButton;