import React from 'react';
import {ReactComponent as logo} from  "../../img/icons/logo.svg"
import classes from "./VesonLogo.module.css";
interface IProps{
    className:string;
    color?: string
}
const VesonLogo = (props:IProps) => {
    return (
        <div className={[classes.container,props.className].join(' ')}>
            <svg
                className={classes.img}
                xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path fill={props.color} d="M2118 5104 c-55 -29 -53 0 -58 -854 l-5 -796 -665 408 c-366 224 -680 410 -699 414 -71 14 -79 5 -311 -372 -208 -339 -214 -351 -215 -402 0 -44 4 -57 22 -72 13 -10 333 -208 713 -440 379 -232 690 -426 690 -430 0 -4 -311 -198 -690 -430 -380 -232 -700 -430 -713 -440 -18 -15 -22 -28 -22 -72 1 -51 7 -63 179 -343 98 -159 196 -318 217 -352 44 -68 80 -89 131 -79 18 4 332 190 698 414 l665 408 5 -796 c4 -620 8 -800 18 -817 29 -52 40 -53 482 -53 442 0 453 1 482 53 10 17 14 197 18 817 l5 796 665 -408 c366 -224 680 -410 699 -414 71 -14 79 -5 311 372 208 339 214 351 215 402 0 44 -4 57 -22 72 -13 10 -333 208 -713 440 -379 232 -690 426 -690 430 0 4 311 198 691 430 379 233 700 431 712 440 18 15 22 28 22 72 -1 51 -7 64 -179 343 -98 160 -196 318 -217 352 -44 68 -80 89 -131 79 -18 -4 -332 -190 -698 -414 l-665 -408 -5 796 c-4 620 -8 800 -18 817 -29 52 -39 53 -484 53 -345 -1 -417 -3 -440 -16z"/>
                </g>
            </svg>
        </div>
    );
};

export default VesonLogo;