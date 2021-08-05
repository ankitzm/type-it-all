import React from 'react';
import './App.css';
import Challenge from './Component/Challenge';
import Footer from './Component/Footer';
import Landing from './Component/Landing';
import Nav from "./Component/Nav"

import { SAMPLE_PARAGRAPHS } from './data/sampleParagraph';

const totalTime = 60;
// const apiURL = "http://metaphorpsum.com/paragraphs/1/8"   // defining api url


const defaultState = {
  selectedParagraph: "hello world",
  timerStarted: 0,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: []
}

class App extends React.Component {

  state = defaultState

  fetchNewParagraphFallback = () => {
    const data = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ];

    const selectedParagraphArray = data.split("")
    const testInfo = selectedParagraphArray.map(selectedLetter => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      }
    });

    this.setState({ ...defaultState, testInfo, selectedParagraph: data }) // shorthand of this.setState({testInfo:testInfo})

  }

  // fetchNewParagraph = () => {
  //   fetch(apiURL)
  //     .then(response => response.text())
  //     .then((data) => {
  //       this.setState({ selectedParagraph: data })

  //       const selectedParagraphArray = data.split("")
  //       const testInfo = selectedParagraphArray.map(selectedLetter => {
  //         return {
  //           testLetter: selectedLetter,
  //           status: "notAttempted",
  //         }
  //       });

  //       this.setState({ ...defaultState, testInfo, selectedParagraph: data }) // shorthand of this.setState({testInfo:testInfo})
  //     })
  // }


  // API
  componentDidMount() {
    this.fetchNewParagraphFallback();
  }


  // timer handler
  startTimer = () => {
    this.setState({ timerStarted: true })
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // wpm change
        const timeSpent = totalTime - this.state.timeRemaining;
        const wpm = this.state.timeRemaining > 0 ?
          (this.state.words / timeSpent) * totalTime :
          0

        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm)
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }

  // start again/retry
  startAgain = () => { this.fetchNewParagraphFallback() }

  // handle user input
  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) this.startTimer()     //timer implementation

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted"
          },
          ...this.state.testInfo.slice(1)
        ],
        characters,
        words,
      });

      return;
    }

    if (index > this.state.selectedParagraph.length) {
      this.setState({ words, characters })
      return;
    }

    // the big logic

    // copy of testInfo
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notAttempted"
    }

    // check for correct type letter
    const isCorrect = testInfo[index].testLetter === inputValue[index]

    // update status in testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    // update the state
    this.setState({
      testInfo,
      words,
      characters
    })

  }

  /**  THE ALGORITHM
         * 1. Handle the underflow case - all characters should be shown as not-attempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace case
         *      - Mark the [index+1] element as notAttempted
         *        (irrespective of whether the index is less than zero)
         *      - But, don't forget to check for the overflow here
         *        (index + 1 -> out of bound, when index === length-1)
         * 4. Update the status in test info
         *      1. Find out the last character in the inputValue and it's index
         *      2. Check if the character at same index in testInfo (state) matches
         *      3. Yes -> Correct
         *         No  -> Incorrect (Mistake++)
         * 5. Irrespective of the case, characters, words and wpm can be updated
         */


  render() {
    // console.log(this.state.testInfo);
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
          testInfo={this.state.testInfo}
          inputHandler={this.handleUserInput}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
