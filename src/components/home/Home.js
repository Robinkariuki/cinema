import React, { Component } from 'react';
import './Home.css';
import {API_KEY,API_Url,Image_Base_Url,Backdrop_Size,Poster_Size}from'../../config';
import Heroimage from '../elements/HeroImage/Heroimage';
import Searchbar from '../elements/Searchbar/searchbar';
import fourcolgrid from '../elements/fourcolgrid/FourColGrid';
import  Moviethumb from '../elements/Moviethumb/Moviethumb';
import LoadMore from '../elements/LoadMore/LoadMorebtn';
import Spinner from '../elements/Spinner/Spinner';
import FourColGrid from '../elements/fourcolgrid/FourColGrid';

class Home extends Component {
    state = {
        movies :[],
        heroImage : null,
        loading : false,
        currentpage : 0,
        totalpages : 0,
        searchterm : ''
 
    }
    componentDidMount(){
        this.setState({loading:true});
        const endpoint = `${API_Url}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(endpoint);
    }
    loadmoreitems =() =>{
        let endpoint ='';
        this.setState({loading:true});

        if(this.state.search ===''){
            endpoint =`${API_Url}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentpage+1}`
        }else{
            endpoint=`${API_Url}\search\movie?apikey=${API_KEY}&language=en-US&query${this.state.searchterm}&page=${this.state.currentpage+1}`
        }
        this.fetchItems(endpoint); 
    } 
    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result =>{
         this.setState({
              movies :[...this.state.movies, ...result.results],
              heroImage: this.state.heroImage || result.results[0],
              loading:false,
              currentpage:result.total_pages

        });
    })
}

    render(){
        return(
            <div className='rmdb-home'>
                <Heroimage/>
                <Searchbar/>
                <FourColGrid/>
                <Spinner/>
                <LoadMore/>
                
            </div>
        )
    }
}


export default Home;