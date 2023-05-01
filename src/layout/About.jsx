import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";

class About extends React.Component {
  render() {
    return (
      <div id="about" className="py-5">
        <Fragment>
          <hr />
          <h1>LOREMIPSUM</h1>
          <span className="disabled-text">
            +62 822 4089 9428 | bramantyaaw@gmail.com
          </span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
            quidem unde magnam quia alias tempora similique facere, eum sunt
            earum dolor nam nostrum ea neque velit voluptatibus dolorum beatae
            aspernatur aliquam nihil dicta! Ratione accusantium incidunt
            nostrum? Doloribus, consequuntur amet! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequuntur exercitationem optio
            accusantium distinctio at praesentium, aliquid minus! Error nostrum
            vel asperiores, aliquam laborum suscipit delectus sint quae
            voluptatem commodi id!
          </p>
          <div>
            <FontAwesomeIcon icon={faGithub} size="2xl" />
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </div>
        </Fragment>
      </div>
    );
  }
}

export default About;
