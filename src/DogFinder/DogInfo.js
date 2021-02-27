import React from 'react';
import {Link} from "react-router-dom";

import './DogInfo.css'


const DogInfo = ({dog}) => {

    return (
        <div className="DogInfo">
            <h1 className="DogInfo-title">{dog.name}</h1>
            <div className="DogInfo-divs">
            <img className="DogInfo-img" src={dog.src}/>
            </div>
            <div className="DogInfo-divs" id="DogInfo-description">
            <h3>Name: {dog.name}</h3>
            <p>Age: {dog.age}</p>
            <h4>Facts</h4>         
                {dog.facts.map( fact => (
                    <p>{fact}</p>
                ))}
                <Link className="Nav-Link" to="/">Go Back</Link>
            </div>
        </div>
    )

}


export default DogInfo