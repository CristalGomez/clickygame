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
    hscore: 0,
    message: ""
  };

  shuffleCards = () =>{
    this.state.cast.sort(()=>Math.random() - 0.5)
  }

  youWin = () => {
    if (this.state.score === 12){
      this.setState({message: "you win!"})
    }
  }



  resetGame=() => {
    if (this.state.score > this.state.hscore){
      this.setState({hscore: this.state.score});
      this.youWin()
    }
    this.state.cast.forEach(element => {
      element.count = 0;
    });
    this.setState({score: 0});
    return true;
  }


  // clickTracker = id => {
  //   this.state.cast.find((element, i) => {
  //     if (element.id === id){
  //       this.setState({message: "you lose"});
  //       this.resetGame()
  //     } else if (cast[i].count === 0){
  //       cast[i].count = cast[i].count +1;
  //       this.setState({score: this.state.score + 1}, () => {
  //         // console.log(this.state.score)
  //       });
  //       this.shuffleCards();
  //       return true;
  //     }
  //   })
  // }

  clickTracker = id => {
    //id is the id from cast.json
    console.log(id)
    this.state.cast.find((element, i) => {
      console.log(i)
      //id: index of image clicked
      //element: img id, img href, count: 0 (if clicked twice, count goes up by 1 & then resets to 0)
      if (element.id === id) {
        //if element's id matches id clicked
        console.log(element)
      //if cast @ index of i (whatever chosen) 
      //count: returns the total # of components in children, equal to the # of times that a cb passed to a map/forEa would be invoked
        if(cast[i].count === 0){
          //cast: from cast.json
          console.log(cast)
          //incrementing by one when clicked
          cast[i].count = cast[i].count + 1;
          //updated score
          this.setState({score : this.state.score + 1},()=>{
            // console.log(this.state.score);
          });
          //calling shuffledcards func
          this.shuffleCards()
          return true; 
        } else {
          this.setState({message: "you lose"})
          this.resetGame();
        }
      }
    });
  }


  render() {
    return (
      <Wrapper>
        <Navbar 
        score={this.state.score} 
        message={this.state.message}
        hscore={this.state.hscore}></Navbar>

        {this.state.cast.map(cast => (
          <CastCard
            clickTracker={this.clickTracker}
            shuffle={this.shuffle}
            // resetGame={this.resetGame}
            id={cast.id}
            key={cast.id}
            image={cast.image}
          />
        ))}
      </Wrapper>
    )
  }
  
}

export default App;
