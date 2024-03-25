import styled from 'styled-components'

export const ResultContainer = styled.div`
  padding-block: 10vh;
  padding-inline: 10vw;
  font-family: ROboto;
  text-align: center;
  color: white;
  > p {
    font-size: 2rem;
  }
`

export const ChoiceContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const Choice = styled.div`
  color: white;
  background-color: transparent;
  > img {
    min-width: 150px;
    width: 25vw;
    max-width: 250px;
    object-fit: contain;
  }
`

export const PlayAgain = styled.button`
  color: black;
  background-color: white;
  font-family: Roboto;
  min-width: 150px;
  width: 60%;
  padding: 0.7rem;
  border: none;
  border-radius: 0.4rem;
`
