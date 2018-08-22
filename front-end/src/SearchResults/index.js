import React from 'react';
import {  Card, CardBody, } from 'mdbreact';
import { get } from 'traverson/lib/media_type_registry';

function searchResults (props) {
  const resultsArray = props.artsySearchResults;
  console.log(props);
  const mapResults = resultsArray.map( (item, index) => {
    // console.log(item);
    const artistName = item.title;
    const artistApiPath = item._links.self.href;
    const color = ["mdb-color lighten-2","success-color","red lighten-1","info-color","pink lighten-2","indigo"]
    const randomNumber = getRandomIntInclusive(0,color.length-1)
    return (
      // <li key={index} onClick={props.pickedResult.bind(null, artistApiPath)} >{artistName}</li>
      <Card color={color[randomNumber]} text="white" className="text-center" key={index} onClick={props.pickedResult.bind(null, artistApiPath)}>
<CardBody>
  {artistName}
</CardBody>
</Card>
    )
  })
  return (
    <div>
      {mapResults}
    </div>
  )
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}




export default searchResults;