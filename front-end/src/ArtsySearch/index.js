import React, {Component} from 'react';

class ArtsySearch extends Component {
 render () {
   
    return (
      <div>
      <form onSubmit = {this.props.searchArtsy.bind(null)} >
        <input  type='text' name='searchText' placeholder='Artist Name' onChange={this.props.handleChange} value={this.props.searchText}/>
        <input type='Submit' value='Search' readOnly/>
      </form>

      
      </div>
    )
  }
}


export default ArtsySearch;

// import React from 'react';
// import { Container, Row, Col, Input, Button } from 'mdbreact';

// class ArtsySearch extends React.Component  {
//   render() {
//     return(
//       <Container>
//         <Row>
//           <Col md="6">
//             <form onSubmit = {this.props.searchArtsy.bind(null)}>
//               <p className="h5 text-center mb-4">Search Artists</p>
//               <div className="grey-text">
//                 <Input label="Artist Name"  type="text" name='searchText'  onChange={this.props.handleChange} value={this.props.searchText} />
//               </div>
//               <div className="text-center">
//                 <Button>Search</Button>
//               </div>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// };

// export default ArtsySearch;

