import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

{/* <Card>
        <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
        <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button href="#">Button</Button>
        </CardBody>
    </Card> */}

function RelatedArtists (props) { 
  console.log(props.relatedArtists);
  const artist = props.pickedArtist;
  const relatedArtists = props.relatedArtists;
  const relatedArtistsMap = relatedArtists.map( (artist,index)=>{

    return (
      // <div key={index}>
      //   <img src={artist._links.thumbnail.href} alt={`A popular work by ${artist.name}`} onClick={props.pickedResult.bind(null,artist._links.self.href)}></img>
      //   <h3>{artist.name}</h3>
      // </div>
    <div className='row' key={index}>
      <Card className="col" >
        <CardImage className="mx-auto img-fluid" src={artist._links.thumbnail.href} />
        <CardBody >
            <CardTitle className='text-center'>{artist.name}</CardTitle>
            <CardText className='text-center'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button  block onClick={props.pickedResult.bind(null,artist._links.self.href)} >Button</Button>
        </CardBody>
    </Card>
    </div>
    )
  } )
  console.log()
  return  ( 
    // <div > 
    //   <img src={artist._links.thumbnail.href} ></img>
    //   <h1> {artist.name}</h1>
    //    <h2> {artist.birthday} - {artist.deathday}</h2>
    //    <h2> Hometown: {artist.hometown}</h2>
    //    <h4> - Biography - </h4>
    //    <p> {artist.biography}</p>
    //    <h1 className="text-center"> RelatedArtists Artists</h1>
    //    {relatedArtistsMap}
       

    // </div>
  <div> 
    <div className='row'>
      <Card className="col" >
        <CardImage className="mx-auto img-fluid" src={artist._links.thumbnail.href} />
        <CardBody >
            <CardTitle className='text-center'>{artist.name}</CardTitle>
            <CardText className='text-center'>
            
              {artist.birthday} - {artist.deathday}
            
            </CardText>
            <CardText className='text-center'> Hometown: {artist.hometown}</CardText>
            <CardText className='text-center'> - Biography -  </CardText>
            <CardText className='text-center'> {artist.biography}</CardText>
            
        </CardBody>
    </Card>
     </div>
            
      <h2 className='text-center'> - Related Artists - </h2> 
            
    {relatedArtistsMap}
    </div>
    
  )
}

export default RelatedArtists;