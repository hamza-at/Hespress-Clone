import React from "react";
import './styles.css';
const Card=(props)=> {
    return (
        <div className="card bg-dark text-white">
            <img src={props.src} className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                <p className="card-text">{props.date}</p>
            </div>
        </div>
    );
}

export default Card;