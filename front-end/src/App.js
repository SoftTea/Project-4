import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import MainContainer from './MainContainer';
import Nav from './Nav';
import About from './About'
import Auth from './Auth';





class App extends Component {
  // 
  

  render() {
   

    return (

      <div className="App">
        
        < Nav />
        
        <Switch>
        
        <Route exact path='/home' component={()=>{
          return (<MainContainer/>)}}/>
        <Route exact path='/about' component={About} />
        <Route exact path='/sign-in' component={Auth} />
        {/* <Route exact path= "/artist" component={RelatedArtists}/>  */}
          

      </Switch>
      </div>
    );
  }
}

export default App;
