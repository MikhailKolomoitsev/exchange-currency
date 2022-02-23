import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as currenciesActions from './currenciesActions'

const entities = createReducer([], {
    [currenciesActions.fetchCurrenciesSuccess]:(_, action)=>action.payload
})

const isLoading = createReducer(false, {
    [currenciesActions.fetchCurrenciesRequest]:()=>true,
    [currenciesActions.fetchCurrenciesSuccess]:()=>false,
    [currenciesActions.fetchCurrenciesError]:()=>false
})

const error = createReducer(null, {
    [currenciesActions.fetchCurrenciesError]: (_, action) => action.payload,
    [currenciesActions.fetchCurrenciesRequest]: () => null,
})
const favorites = createReducer([], {
    [currenciesActions.addToFavorites]: (state, { payload }) => {
        return { ...state, payload }
    },
    [currenciesActions.removeFromFavorites]: (state, { payload }) => state.filter(({ id }) => id !== payload),
})

export default combineReducers({
    entities,
    isLoading,
    error,
    favorites,
})