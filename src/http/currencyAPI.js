const BASE_URL = 'https://api.exchangerate.host/latest'

export const getAllCurrencies = async () => {
    const options = { method: 'GET', headers: { Accept: 'application/json' } };
    const data = fetch('https://api.fastforex.io/currencies?api_key=e8823da675-ee6a0e9bec-r7325m', options)
        .then(response => response.json())
        .then(response => response.currencies)
        .catch(err => console.error(err));
    return data

}