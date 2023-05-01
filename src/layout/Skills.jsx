import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import React, { Component, Fragment } from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        "Javascript",
        "HTML/HTML5",
        "CSS",
        "JQuery",
        "PHP",
        "Java",
        "Bootstrap",
        "SQL Server",
        "MySQL",
        "Laravel",
        "Codeigniter 3",
        "ReactJs",
        "NodeJs",
        "Golang",
      ],
    };
  }
  render() {
    return (
      <div id="skills" className="py-5">
        <Fragment>
          <hr />
          <h1>Skills</h1>
          <ul className="no-li">
            {this.state.data.map((data, key) => (
              <li key={key.toString()}>
                <FontAwesomeIcon icon={faCheckSquare} />
                {data}
              </li>
            ))}
          </ul>
        </Fragment>
      </div>
    );
  }
}

export default Skills;
