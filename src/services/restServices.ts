import axios from "axios";
/**
 * API link for country data
 */
const api = 'https://restcountries.com/v2'
/**
 * @name getAllCountries
 * @description To get all the countries from the API
 */
const getAllCountries = () => axios.get(`${api}/all`);
/**
 * @name getSingleCountryDetails
 * @description To get details of the clicked country 
 * @param countryName 
 */
const getSingleCountryDetails = (countryName: string) => axios.get(`${api}/name/${countryName}`)

const restservices = {
    getAllCountries,
    getSingleCountryDetails
}

export default restservices;