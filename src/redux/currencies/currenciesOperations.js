import * as currenciesActions from './currenciesActions'
import * as currencyAPI from '../../http/currencyAPI'

export const fetchBooks = () => async dispatch => {
    dispatch(currenciesActions.fetchCurrenciesRequest())

    try {
        const currencies = await currencyAPI.getAllCurrencies()
        dispatch(currenciesActions.fetchCurrenciesSuccess(currencies))
    } catch (error) {
        dispatch(currenciesActions.fetchCurrenciesError(error))
    }
}