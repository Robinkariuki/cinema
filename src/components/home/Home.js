import React, { Component } from 'react';
import './Home.css';
import Heroimage from '../elements/HeroImage/Heroimage';
import Searchbar from '../elements/Searchbar/searchbar';
import fourcolgrid from '../elements/fourcolgrid/FourColGrid';
import  Moviethumb from '../elements/Moviethumb/Moviethumb';
import LoadMore from '../elements/LoadMore/LoadMorebtn';
import Spinner from '../elements/Spinner/Spinner';
import FourColGrid from '../elements/fourcolgrid/FourColGrid';

class Home extends Component {
    state = {

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