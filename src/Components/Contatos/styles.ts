import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  width: 100%;
  border-radius: 16px;
  background-color: ${variaveis.branco2};
  padding: 16px;
`

export const Texto = styled.p`
  padding-top: 7px;
`

export const BarraAcaoes = styled.div`
  padding: 16px;
  margin-top: 16px;
  border-top: 1px solid ${variaveis.sombraFraca};
`

export const BotaoRemoverCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
