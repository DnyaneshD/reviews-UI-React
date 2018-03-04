import React from "react";
import { Grid, Row, Col, Label, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { submitCommentData, changeProperty } from "./actions";
import { withRouter } from "react-router-dom";

class Comment extends React.Component {
  constructor() {
    super();
    this.onPostComments = this.handleSubmitComment.bind(this);
  }

  handleSubmitComment(event) {
    this.props.submitComment(this.props.match.params.id);
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={10} md={4}>
            <div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">With textarea</span>
                </div>
                <textarea
                  name="comment"
                  className="form-control"
                  value={this.props.comment}
                  onChange={this.handleChange.bind(this)}
                  aria-label="With textarea"
                />
              </div>
              <Button className="btn pull-right" onClick={this.onPostComments}>
                Post Comment
              </Button>
            </div>
            <div>
              <Label bsStyle="default">Default</Label>{" "}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }

  handleChange(e) {
    this.props.changeProperty(e.target.name, e.target.value);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    key: ownProps.Id,
    Id: ownProps.Id,
    comment: ownProps.comment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeProperty: (propertyKey, value) =>
      dispatch(changeProperty(propertyKey, value)),
    submitComment: url => dispatch(submitCommentData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Comment)
);
