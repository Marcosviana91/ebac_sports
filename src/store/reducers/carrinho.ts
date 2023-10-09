//Slice do carrinho
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const n_produto = action.payload
      if (state.itens.find((produto) => produto.id === n_produto.id)) {
        alert('Produto já adicionado...')
      } else {
        state.itens = [...state.itens, n_produto]
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
