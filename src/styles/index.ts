import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif

  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Campo = styled.input`
  border-radius: 8px;
  width: 100%;
  height: 32px;
  color: ${variaveis.cinza};
  border-color: ${variaveis.cinza};
  background-color: ${variaveis.branco};
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
`

export default EstiloGlobal
