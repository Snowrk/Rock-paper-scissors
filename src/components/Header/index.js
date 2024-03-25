import {Container, TextContainer, Score, Sc} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <Container>
      <TextContainer>
        <h1>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </h1>
      </TextContainer>
      <Score>
        <p>Score</p>
        <Sc>{score}</Sc>
      </Score>
    </Container>
  )
}

export default Header
