import { useState } from 'react'
import { MainContainer, Botao, BotaoSalvar } from '../../styles'
import * as S from './styles'
const Contatos = () => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <MainContainer>
      <S.Card>
        <S.Texto as="h2">Alberto Ferreira Santos</S.Texto>
        <S.Texto>Alberto@hotmail.com</S.Texto>
        <S.Texto>(16)92934-5032</S.Texto>
        <S.BarraAcaoes>
          {estaEditando ? (
            <>
              <BotaoSalvar>Salvar</BotaoSalvar>
              <S.BotaoRemoverCancelar onClick={() => setEstaEditando(false)}>
                Cancelar
              </S.BotaoRemoverCancelar>
            </>
          ) : (
            <>
              <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
              <S.BotaoRemoverCancelar>Remover</S.BotaoRemoverCancelar>
            </>
          )}
        </S.BarraAcaoes>
      </S.Card>
    </MainContainer>
  )
}

export default Contatos
