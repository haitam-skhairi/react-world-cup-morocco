import React, { Component } from "react";
import Card from "./Card";
import memberInfo from "./info";

class Team extends Component {
  constructor() {
    super();
    this.state = { info: memberInfo, newArray: [], index: 0 };

    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {
    if (this.state.index < memberInfo.length) {
      this.setState((previous) => {
        return { index: previous.index + 1 };
      });
    }

    this.state.newArray.push(memberInfo[this.state.index]);
  }

  mapping(x) {
    const members = x.map((member) => (
      <Card
        image={member.image}
        key={member.id}
        name={member.name}
        position={member.position}
        born={member.born}
        height={member.height}
        nationality={member.nationality}
      />
    ));
    return members;
  }

  render() {
    return (
      <div className="row mt-5 justify-content-center align-item-center gap-3">
        <button onClick={this.clickEvent} className="btn btn-success py-3 fs-3">
          Add Player
        </button>
        {this.mapping(this.state.newArray)}
      </div>
    );
  }
}

export default Team;
