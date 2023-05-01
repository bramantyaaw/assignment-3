import React, { Component, Fragment } from "react";
import Exps from "../components/Exps";

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          title: "ANDROID DEVELOPER",
          date: "2018 - 2019",
          name: "Erajaya",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem unde magnam quia alias tempora similique facere, eum sunt earum dolor nam nostrum ea neque velit voluptatibus dolorum beatae aspernatur aliquam nihil dicta!",
        },
        {
          title: "WEB DEVELOPER",
          date: "2019",
          name: "Redbit",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem unde magnam quia alias tempora similique facere, eum sunt earum dolor nam nostrum ea neque velit voluptatibus dolorum beatae aspernatur aliquam nihil dicta!",
        },
        {
          title: "WEB DEVELOPER",
          date: "2021 - 2023",
          name: "Erajaya",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem unde magnam quia alias tempora similique facere, eum sunt earum dolor nam nostrum ea neque velit voluptatibus dolorum beatae aspernatur aliquam nihil dicta!",
        },
      ],
    };
  }

  render() {
    return (
      <div id="experience" className="py-5">
        <Fragment>
          <hr />
          <h1>Experience</h1>
          <ul className="no-li">
            {this.state.data.map((data, key) => (
              <li key={key.toString()}>
                <Exps title={data.title} date={data.date} name={data.name}>
                  {" "}
                  {data.text}
                </Exps>
              </li>
            ))}
          </ul>
        </Fragment>
      </div>
    );
  }
}

export default Experience;
