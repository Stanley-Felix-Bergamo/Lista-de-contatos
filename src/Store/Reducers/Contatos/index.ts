import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../../Models/Contatos'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 0,
      nome: 'João Ferreira Santos',
      email: 'João_Santos@gmail.com',
      telefone: 99420431
    },
    {
      id: 1,
      nome: 'Luiz Antonio Bergmo',
      email: 'Antonio2013@gmail.com',
      telefone: 36387643
    },
    {
      id: 2,
      nome: 'Luciana Almeida Felix',
      email: 'João_Santos@gmail.com',
      telefone: 99345933
    },
    {
      id: 3,
      nome: 'Bernaldo de Oliveira',
      email: 'Bernaldo_@gmail.com',
      telefone: 99554933
    },
    {
      id: 4,
      nome: 'Lucas otavio nair',
      email: 'Lucas_2011@gmail.com',
      telefone: 994455423
    },
    {
      id: 5,
      nome: 'Jorge reis',
      email: 'Jorge_123@gmai.com',
      telefone: 993455321
    }
  ]
}

const ContatosReducers = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const filtrarIndex = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (filtrarIndex >= 0) {
        state.itens[filtrarIndex] = action.payload
        alert('Contato Editado !')
      }
    },
    salvar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const verificaContatoExiste = state.itens.find(
        (item) => item.telefone === action.payload.telefone
      )
      if (verificaContatoExiste) {
        alert('Esse Telefone de contato já existe')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
        alert('Contato Cadastrado!')
      }
    }
  }
})

export const { remove, editar, salvar } = ContatosReducers.actions

export default ContatosReducers.reducer
