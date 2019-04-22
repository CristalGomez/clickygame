import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
      <p className="title"> Greys Anatomy Memory Game</p>
      <p className="score">Score: {this.props.score}</p>
      </nav>
    );
  }
}

export default Navbar;