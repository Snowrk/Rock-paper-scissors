import styled from 'styled-components'

// MainContainer, ModelContainer, GameButton, GameContainer, FlexContainer, CloseButton

export const MainContainer = styled.div`
  background-color: #223a5f;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`

export const ModelContainer = styled.div`
  padding-block: 2rem;
  padding-inline: 3rem;
  position: relative;
  > img {
    width: 100%;
    object-fit: contain;
  }
  background-color: white;
`

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`

export const RulesButton = styled.button`
  border: none;
  background-color: white;
  color: black;
  font-family: Roboto;
  border-radius: 0.4rem;
  padding: 0.7rem;
  margin-left: auto;
`
