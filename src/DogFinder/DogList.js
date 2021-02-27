import React from 'react'
import Dog from './Dog'

import './DogList.css'



const DogList = ({dogs}) => {
    return (
        <div className="DogList">
            <h1 className="DogList-title">Welcome to Search Dog Website</h1>
            {dogs.map(dog => (
                <Dog name={dog.name} src={dog.src}/>
            ))}
        </div>
    )
}


export default DogList