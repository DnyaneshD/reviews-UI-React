import React from "react";
import { connect } from "react-redux";
import {
  submitReviewsData,
  changeProperty,
  fetchReviewDetailsByReviewId
} from "./actions";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "./addReview.css";
import { withRouter } from "react-router-dom";
import Comment from "../Comment/Comment.js";

class AddReview extends React.Component {
  constructor() {
    super();
    this.onSubmitReview = this.handleSubmitReview.bind(this);
    this.onAddComments = this.handleRenderComments.bind(this);
    this.state = {
      showAddCommentsButton: false,
      showCommentsComponent: false
    };
  }

  handleSubmitReview(event) {
    this.props.submitReview("http://localhost:3002/api/reviews");
  }

  handleRenderComments(event) {
    this.setState({
      showCommentsComponent: true
    });
  }

  componentWillMount() {
    if (this.props.match.params.id !== "newReview") {
      this.props.fetchReviewDetailsByReviewId(this.props.match.params.id);
      this.setState({
        showAddCommentsButton: true
      });
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid container">
            <Col xs={12} md={12}>
              Reviews. Enjoy putting reviews here about anything and everything
            </Col>
          </Row>
          <Row className="show-grid container">
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
          <Row className="show-grid container">
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
          <Row className="show-grid container">
            <Col xs={4} md={2}>
              Tags
            </Col>
            <Col xs={1} md={4}>
              <input />
            </Col>
          </Row>
          <Row className="show-grid container .col-xs-4">
            <Col xs={10} md={10}>
              <Button className="btn pull-right" onClick={this.onSubmitReview}>
                Submit Review
              </Button>
            </Col>
          </Row>
          <Row className="show-grid container">
            <Col xs={8} md={4}>
              { this.state.showAddCommentsButton ? 
              <Button onClick={this.onAddComments}>Comments</Button>
              : null }
            </Col>
          </Row>
          
          { this.state.showCommentsComponent ?  <Comment />  : null}
          <Row className="show-grid container">
            <Col xs={8} md={4}>
              {this.props.socialReviews? this.props.socialReviews.map(socialReview => {
                const commentProps = {
                  key: socialReview.id,
                  Id: socialReview.id,
                  comment: socialReview.review
                };
                return <Comment {...commentProps} />;
              }): null}
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
    Id: state.addReviewReducer.Id,
    topic: state.addReviewReducer.topic,
    description: state.addReviewReducer.description,
    socialReviews: state.addReviewReducer.socialReviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeProperty: (propertyKey, value) =>
      dispatch(changeProperty(propertyKey, value)),
    submitReview: url => dispatch(submitReviewsData(url)),
    fetchReviewDetailsByReviewId: reveiwId =>
      dispatch(fetchReviewDetailsByReviewId(reveiwId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(AddReview)
);
