import React from 'react';
import classes from "./RatingVisual.module.css"
import StarIcon from "../StarIcon/StarIcon";
interface IProps {
    className?: string;
    rating:number;
    rateNumber:number

}

const RatingVisual = (props:IProps) => {
    const starArr = [];
    for (let i = 1;i<=5;i++){
        if (i<=props.rating){
            starArr.push(1)
        }else{
            starArr.push(0)
        }
    }
    return (
        <div className={[classes.container,props.className].join(' ')}>
            {starArr.map(x=>{
                if (x){
                    return <StarIcon key={Math.random()} color={"rgb(255,165,0)"} className={classes.star}/>
                }else{
                    return <StarIcon key={Math.random()} color={"rgba(255,165,0,0.5)"} className={classes.star}/>
                }

            }
            )
            }
            <div className={classes["rate-number"]}>({props.rateNumber})</div>


        </div>
    );
};

export default RatingVisual;