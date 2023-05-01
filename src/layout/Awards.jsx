import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";

class Awards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ["Semi Finalist in Erajaya Achievement Awards"],
    };
  }
  render() {
    return (
      <div id="awards" className="py-5">
        <Fragment>
          <hr />
          <h1>Awards</h1>
          <ul className="no-li">
            {this.state.data.map((data, key) => (
              <li key={key.toString()}>
                <FontAwesomeIcon icon={faAward} />
                {data}
              </li>
            ))}
          </ul>
        </Fragment>
      </div>
    );
  }
}

export default Awards;
