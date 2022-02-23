import { createAction} from '@reduxjs/toolkit'

export const fetchCurrenciesRequest = createAction('currencies/fetchCurrenciesRequest')
export const fetchCurrenciesSuccess = createAction('currencies/fetchCurrenciesSuccess')
export const fetchCurrenciesError = createAction('currencies/fetchCurrenciesError')

export const addToFavorites = createAction('currencies/addToFavorites')
export const removeFromFavorites = createAction('currencies/removeFromFavorites')