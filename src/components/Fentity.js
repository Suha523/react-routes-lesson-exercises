import React, { Component } from "react";
import "../styles/fentity.css";

class Fentity extends Component {
  render() {
    let fentityCategory = this.props.match.params.fentities;
    let name = this.props.match.params.name;
    let fentities = this.props.state[fentityCategory];
    let fentity = fentities.find((f) => f.name === name);
    console.log(fentity);

    return (
      <div id="creature-container">
        <h1>{fentity.name}</h1>
        <img src={fentity.imgUrl} alt="" />
        <div className="title">Power:</div>
        <div className="power text"> {fentity.power}</div>
        <div className="other text">{fentity.other}</div>
      </div>
    );
  }
}

export default Fentity;
