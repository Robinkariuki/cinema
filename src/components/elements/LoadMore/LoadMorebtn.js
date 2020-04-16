import React from 'react';
import './LoadMorebtn.css';

const LoadMorebtn = (props)=>{
    return(
        <div className ='rmdb-loadmorebtn' onClick={props.onClick}>
            <p>{props.text}</p>
            

        </div> 
    )
}

export default LoadMorebtn;