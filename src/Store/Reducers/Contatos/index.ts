import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../../Models/Contatos'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'João Ferreira Santos',
      email: 'João_Santos@gmail.com',
      telefone: 99420431
    },
    {
      id: 2,
      nome: 'Luiz Antonio Bergmo',
      email: 'Antonio2013@gmail.com',
      telefone: 36387643
    },
    {
      id: 3,
      nome: 'Luciana Almeida Felix',
      email: 'João_Santos@gmail.com',
      telefone: 99345933
    }
  ]
}

const ContatosReducers = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    }
  }
})

export const { remove } = ContatosReducers.actions

export default ContatosReducers.reducer
