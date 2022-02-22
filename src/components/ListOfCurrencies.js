import React, { useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { getAllCurrencies } from '../http/currencyAPI'
import CurrencyCard from './CurrencyCard'

const ListOfCurrencies = () => {
    const [currencies, setCurrencies] = useState([])
    const [hasError, setHasError] = useState(false)
    useEffect(() => {
        getAllCurrencies().then(response => setCurrencies(Object.keys(response))).catch(err => setHasError(true))
    }, [])
    console.log(currencies);
    return (
        <Container>
            <ul>
                {hasError ? <div>Error occured.</div> : currencies.map(i => <CurrencyCard name={i} key={i}></CurrencyCard>)}
            </ul>
        </Container>
    )
}

export default ListOfCurrencies