import { useEffect, useState, useCallback, useMemo } from 'react'

import restServices from '../services/restServices'
import CountryCard from './CountryCard';
import NoRecords from './NoRecords';
import SearchByRegion from './SearchByRegion';
import SearchByText from './SearchByText';
/**
 * @returns country list in form of cards
 */
function CountryList() {

    const { getAllCountries } = restServices;
    const [countiresData, setCountiresData] = useState<any>([]);
    // search input state
    const [searchText, setSearchText] = useState('');
    // filter by region state
    const [region, setRegion] = useState('');
    /**
     * @name getCountriesList
     * @description API call for getting all the country data
     */
    const getCountriesList = useCallback(() => {
        getAllCountries()
            .then(res => setCountiresData(res.data))
            .catch(() => console.log("error in getting country data"));
    }, [getAllCountries])
    // calling the getCountriesList() function
    useEffect(() => {
        getCountriesList();
    }, [getCountriesList]);
    /**
     * @name bySearch
     * @description to filter data by search input text 
     */
    const bySearch = (country: any, searchText: string) => {
        if (searchText) {
            return country.name.toLowerCase().includes(searchText.toLowerCase());
        } else return country;
    }
    /**
     * @name byRegion
     * @description to filter data by selected region
     */
    const byRegion = (country: any, region: string) => {
        if (region) {
            return country.region.toLowerCase() === region.toLowerCase();
        } else return country;
    }
    /**
     * @name filteredList
     * @description Logic for filtering the country data
     */
    const filteredList = useCallback((countiresData: any, searchText: string, region: string) => {
        return countiresData
            .filter((country: any) => bySearch(country, searchText))
            .filter((country: any) => byRegion(country, region))
    }, [])
    // to store the country data after filtering
    const list = useMemo(() => {
        return filteredList(countiresData, searchText, region);
    }, [countiresData, filteredList, searchText, region]);
    // country data in card form
    const cards = list?.map((country: any, index: number) => {
        return (
            <CountryCard
                key={index}
                name={country?.name}
                flag={country?.flags?.png}
                population={country?.population}
                region={country?.region}
                capital={country?.capital}
            />
        )
    });

    return (
        <>
            <section className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-between input-box'>
                        <SearchByText setSearchText={setSearchText} />
                        <SearchByRegion setRegion={setRegion} />
                    </div>
                </div>
            </section>
            <section >
                <div className="container">
                    <div className='row country-list-row'>
                        {((searchText || region) && !list.length) ? <NoRecords /> : cards}
                    </div>
                </div>
            </section>
        </>
    )
};

export default CountryList;