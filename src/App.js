import React from 'react';
import './App.css';
import Challenge from './Component/Challenge';
import Footer from './Component/Footer';
import Landing from './Component/Landing';
import Nav from "./Component/Nav"

const totalTime = 60;

class App extends React.Component {

  state = {
    selectedParagraph: "hello world",
    timerStarted: 0,
    timeRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0,
  }

  render() {
    return (
      <div className="App flex flex-col">
        <Nav />
        <Landing />
        <Challenge
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
