import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FavoritosState = {
  listaId: number[]
}

const initialState: FavoritosState = {
  listaId: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload
      if (state.listaId.find((item) => item === produtoId)) {
        const favoritosSemProduto = state.listaId.filter((i) => i !== produtoId)
        state.listaId = favoritosSemProduto
      } else {
        state.listaId.push(produtoId)
      }
    }
  }
})

export const { toggle } = favoritosSlice.actions
export default favoritosSlice.reducer
