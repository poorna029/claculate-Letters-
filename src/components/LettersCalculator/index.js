// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {lCount: 0, value: ''}

  change = w => {
    this.setState(e => ({lCount: e.lCount + 1, value: w.target.value}))
  }

  render() {
    const {lCount, value} = this.state

    return (
      <div className="main">
        <div className="superClass p-12">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
          <div className="mb-3 sec">
            <h1 className="text-5xl text-white font-bold mb-4">
              Calculate the Letters you enter
            </h1>
            <label className="text-xs text-white mb-4" htmlFor="inp">
              Enter the phrase
            </label>
            <br />
            <input
              id="inp"
              type="text"
              value={value}
              placeholder="Enter the phrase"
              onChange={this.change}
              className="text-white bg-transparent mb-4 outline-white g"
            />
            <br />
            <p className="but" type="submit">
              No.of letters: {lCount}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
// module.exports=LettersCalculator
