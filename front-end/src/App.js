import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  testFetch = async() => {
    const testData = {
      "actor_name": " FROM react",
      "actor_age": "34",
      "actor_photo_url": "aaaaaaaaa",
      "shows": []
  }
    const actors = await fetch(`http://localhost:8000/api/actors/`, {method: 'POST',
      body: JSON.stringify(testData),
      credentials: 'include',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        
      },
      
  });
    const responseParse = await actors.json();
    console.log(responseParse);
  }

  apiKey = async () => {
    const test = await fetch('http://localhost:8000/artsy/');
    const responseParse = await test.json();
    
    console.log(responseParse);
  }

  componentDidMount () {
    this.testFetch();
    this.apiKey();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
