import React from "react";

class Exps extends React.Component {
  render() {
    return (
      <>
        <div className="spacing py-2">
          <h4>{this.props.title}</h4>
          <span>{this.props.date}</span>
        </div>
        <span className="disabled-text">{this.props.name}</span>
        <p> {this.props.children}</p>
      </>
    );
  }
}

export default Exps;
