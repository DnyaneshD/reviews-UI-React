import React from 'react';
import './SingleLineReview.css';
import {Col} from 'react-bootstrap';

 export class SingleLineReview extends React.Component {
    render() {
      console.log(this.props);
      return (
        <Col xs={6} xsOffset={2}>
          <div className="container">
              <div className="left">
               <p>
                 Read by <br/>
                 14
               </p>
              </div>
              <div className="right">Short description of review is here... <a>more</a> <br/>
                On 12/12/2017
              </div> 
            </div>
        </Col>    
        );
    }
}