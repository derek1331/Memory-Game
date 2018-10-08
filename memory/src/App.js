import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav"
import CardConatainer from "./components/CardContainer"
import Footer from "./components/Footer";
import './index.css';

let score = 0;
let topScore = 0;
let clicked = [];

const reset = function(){
  score = 0;
  clicked = [];
}

const shuffleCards = function(array) {
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

const navInstructions = function() {
  
  const instructions = document.getElementsByClassName("titleBackground")[0];
  const container = document.getElementsByClassName("container")[0];
  const navLink = document.getElementsByClassName("navInstructions")[0];


  if(instructions.style.display === "inherit"){
    instructions.style.display = "none";
    container.style.padding = "100px 100px 0px 100px";
    navLink.style.color = "white"

  } else {
    instructions.style.display = "inherit";
    container.style.padding = "0px 100px 0px 100px";
    navLink.style.color = "darkgoldenrod"

  }

}

const hide = () => {

  const instructions = document.getElementsByClassName("titleBackground")[0];
  const container = document.getElementsByClassName("container")[0];
  const navLink = document.getElementsByClassName("navInstructions")[0];


  if(instructions.style.display === "inherit"){
    instructions.style.display = "none";
    container.style.padding = "100px 100px 0px 100px";
    navLink.style.color = "white"

  } 
}

class App extends Component { 



  state = {
    friends: shuffleCards(friends)
  };

  gamePlay = id => {

    const correctIncorrect = document.getElementsByClassName('correctIncorrect')[0];


    const alreadyClicked = clicked.find(function(element){
      return element === id;
    })

    // console.log(alreadyClicked)

    clicked.push(id);
    
    if(id === alreadyClicked){
      
      correctIncorrect.textContent = "Ha you're an idiot!!!";
      correctIncorrect.classList.add("incorrect");
      setTimeout(function () {
        correctIncorrect.classList.remove("incorrect");
      },300);

      this.setState({ friends: shuffleCards(friends) });
      reset();
      console.log(clicked)
    } else {
    
    score++;
    
    if(score > topScore){
      topScore = score;
  
    }
    correctIncorrect.textContent = "Correct Answer!";
    correctIncorrect.classList.add("correct");
    setTimeout(function () {
      correctIncorrect.classList.remove("correct");
    },300);

    this.setState({ friends: shuffleCards(friends) });
    }


  };


  render() {
    return (
      <Wrapper>
        <Nav>        
          <ul>
            <li className="navInstructions" onClick={navInstructions}>
                Instructions
            </li>
            <li className="correctIncorrect">
                Click on an image to Begin!
            </li>
            <li>
                Score: {score} | Top Score: {topScore}
            </li>
        </ul>
        </Nav>
        <Title>
          <h2 className="hide" onClick={hide}>
            Hide
          </h2>
        </Title>
        <CardConatainer>
        {this.state.friends.map(friend => (
          <FriendCard
            gamePlay={this.gamePlay}
            id={friend.id}
            key={friend.id}
  
            image={friend.image}

          />
        ))}
        </CardConatainer>
        <Footer />
    </Wrapper>
    );
  }

}

export default App;
