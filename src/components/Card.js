import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card w-sm-100 col-md-6 col-lg-4 bg-dark text-white">
        <img src={this.props.image} className="card-img-top h-100" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center fs-2">{this.props.name}</h5>
          <p className="card-text text-center fs-4">{this.props.position}</p>
          <div className="info fs-5 mt-4">
            <p>
              <b>Born:</b> {this.props.born}
            </p>
            <p>
              <b>Height:</b> {this.props.height}
            </p>
            <p>
              <b>Nationality:</b> {this.props.nationality}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
