import React from "react";
import { connect } from "react-redux";
import { submitReviewsData, changeProperty } from "./actions";
import { Grid, Row, Col, Button } from "react-bootstrap";
import  "./addReview.css"; 

class AddReview extends React.Component {
  constructor() {
    super();
    this.onSubmitReview = this.handleSubmitReview.bind(this);
    this.state = {
      title: "",
      description: ""
    };
  }

  handleSubmitReview(event) {
    this.props.submitReview("http://localhost:3002/api/reviews");
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
                name="title"
                type="text"
                value={this.props.title}
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

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeProperty: (propertyKey, value) => dispatch(changeProperty(propertyKey, value)),
    submitReview: url => dispatch(submitReviewsData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
