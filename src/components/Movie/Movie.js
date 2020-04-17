import React, { Component } from 'react';
import { API_KEY,API_Url } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import Movieinfo from '../elements/Movieinfo/Movieinfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar'
import FourColgrid from '../elements/fourcolgrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from'../elements/Spinner/Spinner';
import './Movie.css';


class Movie extends Component {
    render(){
        return(
            <div className='rmdb-movie'>
                <Navigation/>
                <MovieInfo/>
                <MovieInfoBar/>
                <FourColgrid/>
                <Spinner/>

                
            </div>
        )
    }
}



export default Movie;