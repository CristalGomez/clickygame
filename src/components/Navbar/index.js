import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (

      <nav className="navbar">
      <p className="title"> Greys Anatomy Memory Game</p>
      <p className="score">Score: {this.props.score} Highscore: {this.props.hscore}
      {this.props.message}</p>
      </nav>

    );
  }
}

export default Navbar;