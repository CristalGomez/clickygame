import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (

      <nav className="navbar">

      <p className="title"> Grey's Anatomy Memory Game</p>
      <p className="score">Score: {this.props.score} Highscore: {this.props.hscore}</p>
      <p className="message">{this.props.message}</p>
      </nav>

    );
  }
}

export default Navbar;