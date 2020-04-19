import React from 'react';
import { Image_Base_Url } from '../../../config'
import './Actor.css';


const Actor = (props)=>{
    const Poster_Size ='w154';

    return(
        <div className='rmdb-actor'>
            <img
                src={props.actor.profile_path ? `${Image_Base_Url}${Poster_Size}${props.actor.profile_path}`: './images/no_image.jpg'}
                alt ='actorthumb'
                />
        <span className ='rmdb-actor-name'>{props.actor.name}</span>
        <span className ='rmdb-actor-characters'>{props.actor.character}</span>
            
        </div>
    )
}


export default Actor;