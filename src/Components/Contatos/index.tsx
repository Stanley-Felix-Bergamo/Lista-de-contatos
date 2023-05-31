import { useState } from 'react'
import { MainContainer, Botao, BotaoSalvar } from '../../styles'
import * as S from './styles'
const Contatos = () => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <MainContainer>
      <S.Card>
        {estaEditando ? (
          <>
            <S.Msg>Editando contato: Alberto Ferreira Santos</S.Msg>
          </>
        ) : (
          ''
        )}
        <label>Nome:</label>
        <S.Input
          placeholder="Alberto Ferreira Santos"
          disabled={!estaEditando}
        />
        <label>E-mail:</label>
        <S.Input placeholder="Alberto@outlook.com" disabled={!estaEditando} />
        <label>Telefone:</label>
        <S.Input placeholder="(16)9435-4392" disabled={!estaEditando} />
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
