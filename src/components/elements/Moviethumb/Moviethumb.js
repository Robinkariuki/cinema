import React from 'react';
import './Moviethumb.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Moviethumb = (props)=>{
    return(
        <div className ='rmdb-moviethumb'>
            {props.clickable ?
            <Link to ={{pathname: `/${props.movieId}`, movieName:`${props.movieName}` }}>           
             <img src ={props.image} alt='moviethumb'/>
            </Link> 
            :
            <img src ={props.image} alt='moviethumb'/>
            }
        </div>
    )
}




export default Moviethumb;