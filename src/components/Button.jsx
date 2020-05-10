import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.handleOnClick}>
        {this.props.content} <i className={this.props.classNameIcon} />
      </button>
    );
  }
}

export default Button;
