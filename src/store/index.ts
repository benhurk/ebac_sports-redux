import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'

import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'

export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
