import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import CastCard from "./components/CastCard";
import Wrapper from "./components/Wrapper"
import cast from "./cast.json";


class App extends Component {
  state = {
    score: 0,
    cast,
    clickedCast: []
  };

  clicked = event => {
    const currentCast = event.target;
    // const castClicked = this.state.clickedCast.indexOf(currentCast) > -1;

    const castClicked = this.state.cast.filter(cast => cast.event !== event);

    this.setState({cast});

    if (castClicked){
      this.setState({
        cast: this.state.cast.sort(function(a,b){
          return 0.5 - Math.random();
        }),
        clickedCast: [],
        score: 0
      });
      alert("You lost. Play again?")
    } else {
      this.setState({
        cast: this.state.cast.sort(function(a,b){
          return 0.5 - Math.random();
        }),
        clickedCast: this.state.clicked.concat(currentCast),
        score: this.state.score + 1
      },
      () => {
        if (this.state.score === 12){
          alert ("You win");
          this.setState({
            cast: this.state.cast.sort(function(a,b){
              return 0.5 - Math.random()
            }),
            clickedCast: [],
            score: 0
          })
        }
      })
    }
  };

  render(){
    return (
      <Wrapper>
      {this.state.cast.map(cast => (
        <CastCard
          // id={cast.id}
          key={cast.id}
          image={cast.image}
        />
      ))}
    </Wrapper>
    )
  }
}


export default App;
