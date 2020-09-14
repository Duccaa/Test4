import axios from 'axios'

export const getAllCountries = () => {
    return axios.get('https://restcountries.eu/rest/v2/all')
}

export const getCountriesByRegion = (region) => {
    return axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
}