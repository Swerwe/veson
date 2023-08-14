import React, {useState} from 'react';
import classes from "./BestSellerBlock.module.css"
import BestSellerList from "./BestSellerList/BestSellerList";

interface IProps {
    className: string;
}

const BestSellerBlock = (props:IProps) => {
    const [toLoad,setToLoad] = useState<boolean>(false);
    return (
        <div className={[classes.main,props.className].join(' ')}>
            <span className={classes.title}>BESTS SELLER OUR VESON</span>
            <img
                className={classes.img}
                src={"https://i.ibb.co/1qjNYVn/Pair.jpg"}
            />
            <BestSellerList
            toLoad={toLoad}
            setToLoad={setToLoad}

            />
            {!toLoad && <button onClick={e => setToLoad(true)} className={classes.more}>See More</button>}



        </div>
    );
};

export default BestSellerBlock;