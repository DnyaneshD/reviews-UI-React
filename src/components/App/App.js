import React, { Component } from 'react';
import './App.css';
import SingleLineReview from '../SingleLineReview/SingleLineReview';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { fetchItemsData } from '../../actions/items';

class App extends Component {
  
  render() {

    console.log(this.props.items);

    const gridInstance = (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>Reviews. Enjoy putting reviews here about anything and everything</Col>          
            {this.props.items.map((review) => {
                      let props = {
                        key: review.id,
                        id: review.id,
                        topic: review.topic,
                        numberOfViews: review.numberOfViews,
                        lastUpdated: review.lastUpdated
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

  componentWillMount(){
    this.props.fetchData('http://localhost:3002/api/reviews');
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(fetchItemsData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

