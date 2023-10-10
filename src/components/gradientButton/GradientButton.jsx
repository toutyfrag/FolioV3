import React from "react";
import "./gradientButton.css";
import PropTypes from "prop-types";

// Gradient buttons
//props.content to pass the value
function GradientButton(props) {
  return <button className="gradientButton">{props.content}</button>;
}
// PropTypes to force 'content' being used
GradientButton.propTypes = {
  content: PropTypes.string.isRequired,
};

export default GradientButton;
