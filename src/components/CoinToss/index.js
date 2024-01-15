// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {coinnumber: 0, Heads: 0, Tails: 0, Total: 0}

  onclicking = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    this.setState({coinnumber: randomNumber})
  }

  getResults = () => {
    const {Heads, Tails, Total, coinnumber} = this.state
    if (coinnumber === 0) {
      this.setState(
        prevState => (
          {Heads: prevState.Heads + 1}, {Total: prevState.Total + 1}
        ),
      )
    } else {
      this.setState(
        prevState => (
          {Tails: prevState.Heads + 1}, {Total: prevState.Total + 1}
        ),
      )
    }
  }
  render() {
    this.getResults()
    const {Heads,Total,Tails,coinnumber} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {coinnumber === 0 && (
            <img
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="img"
            />
          )}
          {coinnumber === 1 && (
            <img
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="img"
            />
          )}
          <button className="button" onClick={this.onclicking}>
            Toss Coin
          </button>
          <div className="result">
            <p className="totol">Total: {Total}</p>
            <p className="heads">Heads: {Heads}</p>
            <p className="tails">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
