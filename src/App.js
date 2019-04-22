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
    clickedCast: [],
    hscore: 0
  };


  // //func to create a shuffle method which will be called inside the shuffle func 
  // shuffledCast = (arr) => {
  //   for (var i = arr.length -1; i>0; i--){
  //     var x = Math.floor(Math.random() * (i +1))
  //   }
  //   return arr;

  // }

  // //shuffle func
  // shuffle = () => {

  //   const shuffledCast = shuffledCast(cast);
  //   this.setState({
  //     //sets cast to shuffle
  //     cast: shuffledCast
  //   })
  // }

  // scoreIncrease = () => {
  //   const newScore = this.state.score + 1;
  //   this.setState({
  //     score: newScore
  //   });

  //   if (newScore >= this.state.hscore) {
  //     this.setState({
  //       hscore: newScore
  //     })
  //   } else if (newScore === 12) {
  //     this.resetGame()
  //   }
  // }

  // resetGame = () => {
  //   this.setState({
  //     score: 0,
  //     clickedCast: [],
  //     hscore: 0
  //   });
  //   this.shuffle()
  // }


  clickTracker = id => {
    const clickedCast = this.state.clickedCast(id);

    if (this.state.clickedCast.indexOf(id) === -1) {
      this.scoreIncrease();
      this.setState({ clickedCast })
    } else {
      this.resetGame()
    }




    // if (clickedCast.includes(id)){
    //   this.setState({clickedCast: [], score: 0})
    //   return;
    // } else {
    //   clickedCast.push(id)

    //   if(clickedCast.length === 12){
    //     this.setState ({score: 12})
    //     return;
    //   }
    //   this.setState({cast, clickedCast, score: clickedCast.length});

    //   for (var i = cast.length -1; i >0; i--){
    //     var x = Math.floor(Math.random() * (i +1));

    //   }
    // }
  



  render() {
    return (
      <Wrapper>
        <Navbar 
        score={this.state.score} 
        hscore={this.state.hscore}></Navbar>

        {this.state.cast.map(cast => (
          <CastCard
            clickTracker={this.clickTracker}
            shuffle={this.shuffle}
            shuffledCast={this.shuffledCast}
            scoreIncrease={this.scoreIncrease}
            resetGame={this.resetGame}
            id={cast.id}
            key={cast.id}
            image={cast.image}
          />
        ))}
      </Wrapper>
    )
  }
  }
}

export default App;
