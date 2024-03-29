import React, { Component } from 'react';
import {API_KEY,API_Url,Image_Base_Url,Backdrop_Size,Poster_Size}from'../../config';
import Heroimage from '../elements/HeroImage/Heroimage';
import Searchbar from '../elements/Searchbar/searchbar';
import  Moviethumb from '../elements/Moviethumb/Moviethumb';
import LoadMorebtn from '../elements/LoadMore/LoadMorebtn';
import Spinner from '../elements/Spinner/Spinner';
import FourColGrid from '../elements/fourcolgrid/FourColGrid';
import './Home.css';

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
        const endpoint = `${API_Url}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(endpoint);
    }
    searchItems= (searchterm) =>{
    
        let endpoint = '';
        this.setState({
            movies:[],
            loading:true,
            searchterm

        })
        if(searchterm === ''){
            endpoint = `${API_Url}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        }else{
            endpoint = `${API_Url}search/movie?api_key=${API_KEY}&language=en-US&query=${searchterm}`;
        }
        this.fetchItems(endpoint);

    }
  loadmoreitems =() =>{
        let endpoint ='';
        this.setState({loading:true});

       
        endpoint =`${API_Url}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentpage + 1}`;
       
            
        
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
              currentpage:result.page,
              totalpages: result.total_pages


        });
    })
    .catch(error => console.error('Error:',error))
    
}

    render(){
        return(
            <div className='rmdb-home'>
                {this.state.heroImage ?
                <div>
                  <Heroimage 
                        image={`${Image_Base_Url}${Backdrop_Size}${this.state.heroImage.backdrop_path}`}
                        title={this.state.heroImage.original_title}
                        text={this.state.heroImage.overview}
                        />
                        

                    <Searchbar callback={this.searchItems}/>

                    </div> : null }
                <div className ='rmdb-home-grid'>
                    <FourColGrid
                      header ={this.state.searchterm ? 'search Result' : 'popular Movies'}
                      loading = {this.state.loading}
                
                    >
                      {this.state.movies.map((element,i)=>{
                          return <Moviethumb
                                  key ={i}
                                  clickable ={true}
                                  image ={element.poster_path?`${Image_Base_Url}${Poster_Size}${element.poster_path}` :'./images/no_image.jpg'}
                                  movieId ={element.id}
                                  movieName ={element.original_title}
                                  />
                      })}  

                    </FourColGrid>
                    {this.state.loading ? <Spinner/> : null}
                    {(this.state.currentpage <= this.state.totalpages && !this.state.loading) ?
                      <LoadMorebtn text ='Load More' onClick ={this.loadmoreitems}/>
                      : null }

                </div>
                
                
                
            </div>
        )
    }
}


export default Home;