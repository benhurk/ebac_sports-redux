import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.itens.find((p) => p.id === item.id)) {
        const favoritosSemProduto = state.itens.filter((p) => p.id !== item.id)
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(item)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
