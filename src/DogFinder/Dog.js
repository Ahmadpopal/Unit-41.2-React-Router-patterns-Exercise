import React from 'react'
import { Link } from 'react-router-dom'

import './Dog.css'


const Dog = ({name, src}) => {

 
    return(
        <Link to={`/dog/${name}`}>
        <div className="Dog">
            <h3 className="Dog-title">{name}</h3>
            <img className="Dog-img" src={src}/>
        </div>
        </Link>
    )
}

export default Dog