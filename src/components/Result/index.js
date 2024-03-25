import {
  ResultContainer,
  Choice,
  PlayAgain,
  ChoiceContainer,
} from './stComponents'

const Result = props => {
  const {choicesList, reset, yourChoice, opponentChoice, rMsg} = props
  const idx = choicesList.findIndex(item => item.id === yourChoice)
  const oppIdx = choicesList.findIndex(item => item.id === opponentChoice)
  return (
    <ResultContainer>
      <ChoiceContainer>
        <Choice>
          <p>YOU</p>
          <img src={choicesList[idx].imageUrl} alt="your choice" />
        </Choice>
        <Choice>
          <p>OPPONENT</p>
          <img src={choicesList[oppIdx].imageUrl} alt="opponent choice" />
        </Choice>
      </ChoiceContainer>
      <p>{rMsg}</p>
      <PlayAgain onClick={reset}>PLAY AGAIN</PlayAgain>
    </ResultContainer>
  )
}

export default Result
