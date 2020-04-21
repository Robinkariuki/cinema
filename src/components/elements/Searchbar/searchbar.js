import React,{Component} from 'react';
import './searchbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends Component{
    state ={
        value:''
    }
    timeout = null;

    doSearch = (event) =>{
        this.setState({value: event.target.value})
        clearTimeout(this.timeout);

        this.timeout = setTimeout(()=>{
            this.props.callback(this.state.value);

        }, 500);
    } 
    render(){
        return(
            <div className='rmdb-searchbar'>
                <div className='rmdb-searchbar-content'>
                    
                    <FontAwesomeIcon className='rmdb-fa-search' icon='search' size='2x'/>
                    <input
                      type='text'
                      className='rmdb-searchbar-input'
                      placeholder='search'
                      onChange ={this.doSearch}
                      value={this.state.value}  
                    />
                    </div>
                </div>
                
            
        )
    }

}

export default SearchBar;