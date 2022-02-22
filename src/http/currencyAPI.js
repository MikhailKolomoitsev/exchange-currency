import axios from "axios"

const BASE_URL = 'https://api.exchangerate.host/latest'


export const getAllCurrencies = async () => {
    try {
        const data = await axios.get(BASE_URL).then(({ data }) => data.rates)
        return data
    } catch (error) {
        console.log(error);
    }

}