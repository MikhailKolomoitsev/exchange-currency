import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCurrencies } from '../http/currencyAPI'
import CurrencyCard from './CurrencyCard'
import { v4 as uuidv4 } from 'uuid';
import { currenciesOperations, currenciesSelectors } from '../redux/currencies'

const ListOfCurrencies = () => {
    const dispatch = useDispatch()
    const currencies = useSelector(currenciesSelectors.getCurrencies)

    useEffect(() => {
        dispatch(currenciesOperations.fetchBooks())
    }, [dispatch])
    function addToFavorites(name, value) {

    }

    return (
        <Container className='d-flex flex-column align-items-center m-3'>
            <form className='d-flex justify-content-between m-2'>
                <label>
                    All currencies:
                    <input type="text" name="name" style={{ marginLeft: 14 }} />
                </label>
                <input type="submit" value="Find" style={{ marginLeft: 14 }} />
            </form>
            <ul >
                {currencies && Object.keys(currencies).slice(0, 8).map(key =>
                    <CurrencyCard
                        key={uuidv4()}
                        name={currencies[key]}
                        shortName={key}>
                    </CurrencyCard>)}
            </ul>
        </Container>
    )
}

export default ListOfCurrencies