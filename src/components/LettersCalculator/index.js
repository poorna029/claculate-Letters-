// Write your code here.
import './index.css'
import {Component, useState} from 'react'

const LettersCalculator = () => {
  const [lCount, setlCount] = useState(0)
  const [value, setValue] = useState('')

  const change = w => {
    setlCount(lCount + 1)
    setValue(w.target.value)
  }

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
            onChange={change}
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

export default LettersCalculator
// module.exports=LettersCalculator
