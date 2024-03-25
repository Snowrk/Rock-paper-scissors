import {GameButton, GameContainer, FlexContainer} from './styledComponents'

const Play = props => {
  const {choicesList, func} = props
  const onFunc1 = () => func(choicesList[0].id)
  const onFunc2 = () => func(choicesList[1].id)
  const onFunc3 = () => func(choicesList[2].id)
  return (
    <GameContainer>
      <FlexContainer>
        <GameButton data-testid="rockButton" onClick={onFunc1}>
          <img src={choicesList[0].imageUrl} alt={choicesList[0].id} />
        </GameButton>
        <GameButton data-testid="scissorsButton" onClick={onFunc2}>
          <img src={choicesList[1].imageUrl} alt={choicesList[1].id} />
        </GameButton>
      </FlexContainer>
      <GameButton data-testid="paperButton" onClick={onFunc3}>
        <img src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </GameButton>
    </GameContainer>
  )
}

export default Play
