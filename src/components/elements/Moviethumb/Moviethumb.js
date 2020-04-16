import React from 'react';
import './Moviethumb.css';

const Moviethumb = (props)=>{
    return(
        <div className ='rmdb-moviethumb'>
            <img src ={props.image} alt='moviethumb'/>

        </div>
    )
}



export default Moviethumb;