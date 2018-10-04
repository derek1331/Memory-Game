import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav"
import CardConatainer from "./components/CardContainer"
import './index.css';

let score = 0;
let topScore = 0;
let clicked = [];


const reset = function(){
  score = 0;
  clicked = [];
}

const shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends Component { 



  state = {
    friends: shuffle(friends)
  };

  removeFriend = id => {

    const finder = clicked.find(function(element){
      return element === id;
    })

    // console.log(finder)

    clicked.push(id);
    
    if(id === finder){
      
      this.setState({ friends: shuffle(friends) });
      reset();
      console.log(clicked)
    } else {
    
    score++;
    
    if(score > topScore){
      topScore = score;}

    this.setState({ friends: shuffle(friends) });

    
  }


  };


  render() {
    return (
      <Wrapper>
        <Nav>        
          <ul>
            <li>
                Clicky Game
            </li>
            <li>
                Click on an image to Begin!
            </li>
            <li>
                Score: {score} | Top Score: {topScore}
            </li>
        </ul>
        </Nav>
        <Title>Friends List</Title>
        <CardConatainer>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
  
            image={friend.image}

          />
        ))}
        </CardConatainer>
    </Wrapper>
    );
  }

}

export default App;
