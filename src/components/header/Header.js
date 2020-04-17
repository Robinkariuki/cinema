import React from 'react';
import { link } from 'react-router-dom';
import './Header.css'
 const Header = ()=>{
     return(
         <div>
                <nav className="mb-4 navbar navbar-expand-lg navbar navbar-dark bg-dark  rmdb-header">
                <a className="navbar-brand" href="#">
                    <link>
                    <img className='img' src="https://www.freepngimg.com/thumb/the_flash/5-2-flash-free-png-image.png" height="35" alt="image"></img>
                   
                    </link>
                    </a>
               
            </nav> 
             
         </div>
     )
 }



export default Header;