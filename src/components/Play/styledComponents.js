import styled from 'styled-components'

// MainContainer, ModelContainer, GameButton, GameContainer, FlexContainer, CloseButton

export const GameButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  > img {
    min-width: 150px;
    width: 25vw;
    max-width: 250px;
    object-fit: contain;
  }
`

export const GameContainer = styled.div`
  padding-block: 10vh;
  padding-inline: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`
