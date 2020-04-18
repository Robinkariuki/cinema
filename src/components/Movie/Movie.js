import React, { Component } from 'react';
import { API_KEY,API_Url } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColgrid from '../elements/fourcolgrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from'../elements/Spinner/Spinner';
import Info from '../elements/Info/info'

import './Movie.css';
import { JsxEmit } from 'typescript';


class Movie extends Component {
    state={
        movie:null,
        actors:null,
        directors:[],
        loading: false
     
    }
    componentDidMount(){
        this.setState({loading:true})
        //fetch the movie..
        const endpoint =`${API_Url}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endpoint);

    }
    fetchItems= (endpoint)=>{
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            console.log(result)
            if (result.status_code){
                this.setState({loading:false})
            }else{
                this.setState({movie:result}, ()=>{
                    const endpoint = `${API_Url}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`
                    fetch(endpoint)
                    .then(result => result.json())
                    .then(result =>{
                        const directors =result.crew.filter((member)=> member.job ==='Director');

                        this.setState({
                            actors:result.cast,
                            directors,
                            loading:false

                        })
                    })
                } )
            }
          
            
        })
        .catch(error =>console.error('Error',error))
        

    }

    render(){
        return(
            <div className='rmdb-movie'>
                <Navigation/>
                <Info/>
                <MovieInfoBar/>
                {/* <FourColgrid/> */}
                <Spinner/>

                
            </div>
        )
    }
}



export default Movie;