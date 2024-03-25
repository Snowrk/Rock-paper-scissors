// Container, TextContainer, Score
import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto;
  width: 100%;
`

export const TextContainer = styled.div`
  font-family: Roboto;
  color: white;
  > h1 {
    font-weight: 500;
    margin: 0;
  }
`

export const Score = styled.div`
  padding-inline: 2.5rem;
  background-color: white;
  color: black;
  border-radius: 0.5rem;
  text-align: center;
  font-family: Roboto;
`

export const Sc = styled.p`
  font-weight: bold;
  font-size: 2rem;
  font-family: Roboto;
`
