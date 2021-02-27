import React from 'react';
import { useParams } from 'react-router-dom'

import DogInfo from './DogInfo'


const GetDog = ({dogs}) => {

    const { name } = useParams();
if(name){
    const DOG =dogs.find( 
        dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        return <DogInfo dog={DOG}/>
}
return null;
}




export default GetDog