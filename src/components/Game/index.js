import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import Header from '../Header'
import Play from '../Play'
import Result from '../Result'
import {
  MainContainer,
  ModelContainer,
  CloseButton,
  RulesButton,
} from './styledComponents'

const resultMsg = {
  won: 'YOU WON',
  draw: 'IT IS DRAW',
  lose: 'YOU LOSE',
}

class Game extends Component {
  state = {yourChoice: '', score: 0, opponentChoice: '', rMsg: ''}

  saveId = id => {
    this.setState({yourChoice: id})
    this.setOpponent(id)
  }

  setOpponent = id => {
    const randomIdx = Math.floor(Math.random() * 3)
    const {choicesList} = this.props
    this.setState({opponentChoice: choicesList[randomIdx].id})
    this.updateScore(id, randomIdx)
  }

  updateScore = (id, randomIdx) => {
    const {choicesList} = this.props
    const setScore = () => {
      if (id === choicesList[randomIdx].id) {
        return 0
      }
      if (
        (choicesList.findIndex(item => item.id === id) + 1) %
          choicesList.length ===
        randomIdx
      ) {
        return 1
      }
      return -1
    }
    const scoreVal = setScore()
    const eMsg = scoreVal === -1 ? resultMsg.lose : resultMsg.draw
    const mMsg = scoreVal === 1 ? resultMsg.won : eMsg
    this.setState(prevState => ({
      score: prevState.score + scoreVal,
      rMsg: mMsg,
    }))
  }

  reset = () => this.setState({yourChoice: '', opponentChoice: ''})

  render() {
    console.log(this.state)
    const {choicesList} = this.props
    const {yourChoice, score, opponentChoice, rMsg} = this.state
    return (
      <MainContainer>
        <Header score={score} />
        {yourChoice.length > 0 ? (
          <Result
            yourChoice={yourChoice}
            reset={this.reset}
            choicesList={choicesList}
            opponentChoice={opponentChoice}
            rMsg={rMsg}
          />
        ) : (
          <Play choicesList={choicesList} func={this.saveId} />
        )}
        <Popup trigger={<RulesButton>Rules</RulesButton>} modal>
          {close => (
            <ModelContainer>
              <CloseButton onClick={close}>
                <RiCloseLine />
              </CloseButton>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </ModelContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default Game
