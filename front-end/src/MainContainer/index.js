import React, {Component} from 'react';
import queryString from 'query-string';
import ArtsySearch from '../ArtsySearch';
import SearchResults from '../SearchResults';
import RelatedArtists from '../RelatedArtists'


let traverson = require('traverson');
let JsonHalAdapter = require('traverson-hal');

traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);

class MainContainer extends Component {
   
  constructor () {
    super();
    this.state = {
      artsyAccessKey: '',
      searchText: '',
      artsySearchResults: [],
      pickedArtist: {},
      relatedArtists: [],
      searchActive: true,
    }
  }


  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
//   // TRAVERSAL EXAMPLE

//   testArtsy = () => {
//    const api = traverson.from('https://api.artsy.net/api').jsonHal();

// api.newRequest()
//   .follow('artist')
//   .withRequestOptions({
//     headers: {
//       'X-Xapp-Token': this.state.artsyAccessKey,
//       'Accept': 'application/vnd.artsy-v2+json'
//     }
//   })
//   .withTemplateParameters({ id: 'andy-warhol' })
//   .getResource(function(error, andyWarhol, traversal) {
//     console.log(andyWarhol)

//     traversal.continue().follow('genes').getResource(function(err, secondResource) {
      
//       // do something with the second resource
//       console.log(secondResource);

//     });
//   })
  
//   }


 pickedResult = (apiUrl) => {
  //  console.log('test', apiUrl);
   const api = traverson.from(apiUrl).jsonHal();
   let artistInfo;
   let relatedArtists;

api.newRequest()
  .withRequestOptions({
    headers: {
      'X-Xapp-Token': this.state.artsyAccessKey,
      'Accept': 'application/vnd.artsy-v2+json'
    }
  })
  .getResource(function(error, artist, traversal) {
    console.log(this, 'what is this??')
    artistInfo = artist;

    traversal.continue().follow('similar_artists').getResource(function(err, secondResource) {
      
      // do something with the second resource
      relatedArtists = secondResource._embedded.artists;
      
      console.log(relatedArtists, 'similar_artists??');
      console.log(artistInfo, 'this in picked');
  
      this.setState({
        pickedArtist: {...this.state.pickedArtist, ...artistInfo},
        relatedArtists: relatedArtists,
        searchActive: false,
      })

    }.bind(this));
  }.bind(this))
  
 

 }
  

  searchArtsy = async(e) => {

    e.preventDefault();
    const search = this.state.searchText
    const searchResults = await fetch (`https://api.artsy.net:443/api/search?q=${search}&size=10&type=artist`, {
      method: 'GET',
      headers: {'X-Xapp-Token':this.state.artsyAccessKey, "Accept": "application/json","Content-Type": "application/json"
  }
    })
    const foundArtists = await searchResults.json();
    const results = foundArtists._embedded.results;

    this.setState({
      artsySearchResults: results,
      searchText: ''
    })
   
  }

  // TEST FETCH FOR POST REQUEST TO DJANGO API
  // testFetch = async() => {
  //   const testData = {
  //     "actor_name": " FROM react",
  //     "actor_age": "34",
  //     "actor_photo_url": "aaaaaaaaa",
  //     "shows": []
  // }
  //   const actors = await fetch(`http://localhost:8000/api/actors/`, {method: 'POST',
  //     body: JSON.stringify(testData),
  //     credentials: 'include',
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
        
  //     },
      
  // });
  //   const responseParse = await actors.json();
  //   console.log(responseParse);
  // }

  apiKey = async () => {
    const test = await fetch('http://localhost:8000/artsy-access/');
    const responseParse = await test.json();
    
    console.log(responseParse);

    this.setState({
      artsyAccessKey: responseParse.token,
    }) 

  }

  componentDidMount () {
    // this.testFetch();
  
      this.apiKey();

     
      
    
  }

  render( ) {
    console.log(this.props, "STATE FOR MAIN CONTAINER");
    // if(this.state.artsyAccessKey !== '') {
    //   this.testArtsy();
    // }
    // let parsed = queryString.parse(window.location.search);
    // console.log(parsed);
    // if (parsed.reset === 'true' && this.state.searchActive === false) {
    //   console.log('THIS IS A TEST ')
    //   this.setState({
    //     searchActive: true,
    //   })
    // }

    const searchComponents = 
    (<div> 
      <h1> Search For Related Artists </h1>
      < ArtsySearch searchArtsy={this.searchArtsy} handleChange= {this.handleChange} searchText={this.state.searchText}/>
      < SearchResults pickedResult={this.pickedResult} artsySearchResults={this.state.artsySearchResults} /> 
    </div> )

    return (
      <div> 
       
       {this.state.searchActive ? ( searchComponents ) : ( < RelatedArtists pickedArtist={this.state.pickedArtist} relatedArtists={this.state.relatedArtists} pickedResult={this.pickedResult} />) }
      
      
      </div>
      
    )
  }
}

export default MainContainer