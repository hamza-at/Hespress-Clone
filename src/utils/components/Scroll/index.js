import React from 'react';
import './styles.css'
const Scroll = (props)=>{

    return (
        <div className="body">
            {props.children}
        </div>
    );}

export default Scroll;