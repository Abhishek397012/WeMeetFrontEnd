import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.css";

class Card extends Component {
  static defaultProps = {
    value: 0,
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  };
  render() {
    return (
      <Fragment>
        <div className="col-sm-4 col-md-4 col-lg-2 WeMeetCard">
          <h2 className="WeMeetCard_content">{this.props.value}</h2>
          <h6 className="WeMeetCard_content">{this.props.title}</h6>
        </div>
      </Fragment>
    );
  }
}

export default Card;