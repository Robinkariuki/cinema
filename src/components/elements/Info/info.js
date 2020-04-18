import React from 'react';
import { Poster_Size,Image_Base_Url, Backdrop_Size } from'../../../config';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moviethumb from '../Moviethumb/Moviethumb';
import './info.css';

const Info = (props)=>{
    return(
        <div className='rmdb-movieinfo' 
            style = {{
                background: props.movie.backdrop_path ? `url('${Image_Base_Url}${Backdrop_Size}${props.movie.backdrop_path}')` :'#000'
            }}
        >
           
        
         
         <div className ='rmdb-movieinfo-content'>
             <div className ="rmdb-movieinfo-thumb">
                 <Moviethumb 
                    image = {props.movie.poster_path ?`${Image_Base_Url}${Poster_Size}${props.movie.backdrop_path}` :'./images/no_image.jpg'}
                    clickable = {false}

                    />
                    
            </div>
            <div className='rmdb-movieinfo-text'>
                <h1>{props.movie.title}</h1>
                <h3>PLOT</h3>
                <p>{props.movie.overview}</p>
                <h3>IMBD RATTING</h3>
                <div className='imdb-rating'>
                    <meter min='0' max='100' optimum = '100' low='40' high ='70' value ={props.movie.vote_averge*10}></meter>
                    <p className= 'rmdb-score'>{props.movie.vote_averge}</p>
                </div>
                {props.directors.length > 1 ?<h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
                {props.directors.map( (element,i) => {
                    return <p key={i} className='rmdb-director'>{element.name}</p>

                })}                


            </div>
            <FontAwesomeIcon className='fa-film' name='fim' size='5x'/>
         </div>
        </div>
    )
}


export default Info;