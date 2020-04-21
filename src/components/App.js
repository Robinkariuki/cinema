import React from 'react';
import Header from './header/Header';
import Home from './home/Home';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Movie from '../components/Movie/Movie';
import NotFound from '../components/elements/NotFound/NotFound';
const App = ()=>{
    return(
      <BrowserRouter basename="/cinema/">
        <React.Fragment>
          <Header/>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/:movieId' component={Movie} exact />
            
            <Route component ={NotFound} />          

          </Switch>




        </React.Fragment>

      </BrowserRouter> 
    )
}


export default App; 