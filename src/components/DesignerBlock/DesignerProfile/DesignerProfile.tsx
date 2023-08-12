import React from 'react';
import classes from "./DesignerProfile.module.css"

interface IProps {
    className: string;
}

const DesignerProfile = (props:IProps) => {
    return (
        <div className={[classes.designer,props.className].join(' ')}>

        </div>
    );
};

export default DesignerProfile;