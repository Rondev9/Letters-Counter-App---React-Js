import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {textInput: '', letterCount: 0}

  countTheLetters = event => {
    const {textInput} = this.state
    this.setState({textInput: event.target.value})
    this.setState({letterCount: textInput.length + 1})
  }

  render() {
    const {letterCount, textInput} = this.state
    return (
      <div className="lettersCalculatorAppContainer">
        <div className="lettersCalculatorContainer">
          <h1 className="title">Calculate the Letters you enter</h1>
          <label className="inputDescription">
            Enter the phrase
            <br />
            <input
              type="text"
              placeholder="Enter the phrase"
              className="inputBox"
              value={textInput}
              onChange={this.countTheLetters}
            />
          </label>

          <div>
            <p className="lettersCount">No.of letters: {letterCount}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
