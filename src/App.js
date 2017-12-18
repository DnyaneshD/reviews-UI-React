import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {SingleLineReview} from './components/SingleLineReview/SingleLineReview';
//import {Dom} from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  
  // render() {
    
  //   let names = ['Jake', 'Jon', 'Thruster','DD'];
  //   let singleLineReview = [];

  //   return (
  //      <div className="App">
  //       <div className="App-header">
  //         <h2>Welcome to React</h2>
  //       </div>
           
  //       <Grid>
  //         <Row className="show-grid">
  //           <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
  //           <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
  //         </Row>
  //       </Grid>  
          
  //       {names.map((name, index) => {
  //                   let props = {
  //                     key: index,
  //                     name: name,
  //                     index: index
  //                   }

  //               return <SingleLineReview {...props}/>;
  //       })}
  //       <p className="App-intro">
  //         To get started, start getting expressed here.
  //       </p>
  //     </div>
  //   );
  // }

   
  render(){

    let names = ['Jake', 'Jon', 'Thruster','DD'];

    const gridInstance = (
      <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}><code>Reviews</code></Col>          
          {names.map((name, index) => {
                    let props = {
                      key: index,
                      name: name,
                      index: index
                    }
                return <SingleLineReview {...props}/>;
        })}
        </Row>
      </Grid>

      <p className="App-intro">
         To get started, start getting expressed here.
      </p>
      </div>
    );
    return gridInstance;
  }
}

export default App;
