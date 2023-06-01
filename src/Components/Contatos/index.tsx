import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { remove } from '../../Store/Reducers/Contatos'
import ContatoClass from '../../Models/Contatos'

import { Botao, BotaoSalvar } from '../../styles'
import * as S from './styles'

type Props = ContatoClass

const Contatos = ({ nome, email, telefone, id }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const dispatch = useDispatch()

  return (
    <S.Card>
      {estaEditando ? (
        <>
          <S.Msg>Editando contato: {nome}</S.Msg>
        </>
      ) : (
        ''
      )}
      <label>Nome:</label>
      <S.Input disabled={!estaEditando} placeholder={nome} />
      <label>Email:</label>
      <S.Input disabled={!estaEditando} placeholder={email} />
      <label>Telefone:</label>
      <S.Input disabled={!estaEditando} placeholder={telefone.toString()} />
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
            <S.BotaoRemoverCancelar onClick={() => dispatch(remove(id))}>
              Remover
            </S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcaoes>
    </S.Card>
  )
}

export default Contatos
