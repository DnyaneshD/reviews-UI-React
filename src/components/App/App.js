import React, { Component } from 'react';
import './App.css';
import SingleLineReview from '../SingleLineReview/SingleLineReview';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  
  render() {

    let names = ['Jake', 'Jon', 'Thruster','DD'];

    const gridInstance = (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>Reviews. Enjoy putting reviews here about anything and everything</Col>          
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

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      //fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

