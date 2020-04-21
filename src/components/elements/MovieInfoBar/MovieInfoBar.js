import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MovieInfoBar.css';
import {calcTime, convertMoney} from '../../../helpers';


const MovieInfoBar = (props)=>{
    return(
        <div className='rmdb-movieinfobar '>
            <div className='rmdb-movieinfobar-content'>
                <div className='rmdb-movieinfobar-content-col'>
                    <FontAwesomeIcon className='fa-time' name='clock-o' size='2x'/>
    <span className ='rmdb-movieinfobar-info'>Running time:{calcTime(props.time)}</span>

                </div>
          <div className='rmdb-movieinfobar-content-col'>
              <FontAwesomeIcon className='fa-budget' name='money' size ='2x'/>
    <span className='rmdb-movieinfobar-info'>Budget:{convertMoney(props.budget)}</span>

              </div>
              <div className ='rmdb-movieinfobar-content-col'>
                  <FontAwesomeIcon className='fa-revenue' name='ticket' size='2x'/>
                  <span className ='rmdb-movieinfobar-info'> Revenue: {convertMoney(props.revenue)}</span>

                  </div>      

            </div>
            
        </div>
    )
}


export default MovieInfoBar;