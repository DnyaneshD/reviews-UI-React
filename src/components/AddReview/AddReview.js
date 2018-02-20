import React from "react";
import { connect } from "react-redux";
import { submitReviewsData, changeProperty, fetchReviewDetailsByReviewId } from "./actions";
import { Grid, Row, Col, Button } from "react-bootstrap";
import  "./addReview.css"; 
import { withRouter } from 'react-router-dom';

class AddReview extends React.Component {
  
  constructor() {
    super();
    this.onSubmitReview = this.handleSubmitReview.bind(this);
  }

  handleSubmitReview(event) {
    this.props.submitReview("http://localhost:3002/api/reviews");
  }

  componentWillMount(){
    if(this.props.match.params.id !== "newReview"){
      this.props.fetchReviewDetailsByReviewId(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              Reviews. Enjoy putting reviews here about anything and everything
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={8} md={2}>
              Title
            </Col>
            <Col xs={1} md={8}>
              <input
                name="topic"
                type="text"
                value={this.props.topic}
                onChange={this.handleChange.bind(this)}
                placeholder="Give a nice title..."
              />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={4} md={2}>
              Description
            </Col>
            <Col xs={4} md={8}>
              <textarea
                name="description"
                className=".textArea-Size" 
                type="text"
                value={this.props.description}
                onChange={this.handleChange.bind(this)}
                placeholder="Write your own description do not copy paste..."
              />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={4} md={2}>
              Tags
            </Col>
            <Col xs={1} md={4}>
              <input />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={8} md={4}>
              <Button onClick={this.onSubmitReview}>Submit Review</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  handleChange(e) {
    this.props.changeProperty(e.target.name, e.target.value);
  }
}

const mapStateToProps = (state) => {
  return {
    topic: state.topic,
    description: state.description
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeProperty: (propertyKey, value) => dispatch(changeProperty(propertyKey, value)),
    submitReview: url => dispatch(submitReviewsData(url)),
    fetchReviewDetailsByReviewId: reveiwId => dispatch(fetchReviewDetailsByReviewId(reveiwId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddReview));
