import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom";

import restServices from '../services/restServices'

function CountryList() {

    const { getAllCountries } = restServices;
    const [countiresData, setCountiresData] = useState<any>([]);
    const navigate = useNavigate()

    const [searchText, setSearchText] = useState('');
    const [filterText, setFilterText] = useState('');
    const [filteredList, setFilteredList] = useState<any>();
    const [mapList, setMapList] = useState<any>();

    const getCountriesList = useCallback(() => {
        getAllCountries().then(res => setCountiresData(res.data));
    }, [getAllCountries])

    useEffect(() => {
        getCountriesList();
    }, [getCountriesList]);

    useEffect(() => {
        if (searchText) setCountiresData(countiresData.filter((country: any) => country.name.toLowerCase().includes(searchText.toLowerCase())))
    }, [searchText, countiresData])

    // const setList = useCallback(() => {
    //     filterText ? setMapList(filteredList) : setMapList(countiresData);
    // }, [filterText, filteredList, countiresData]);

    // useEffect(() => {
    //     setList()
    // }, [setList])

    // useEffect(() => {
    //     console.log({ mapList }, { filteredList });
    // })

    const searchByText = useCallback(() => {
        if (searchText) setCountiresData(countiresData.filter((country: any) => country.name.toLowerCase().includes(searchText.toLowerCase())))
    }, [searchText, countiresData]);

    useEffect(() => {
        searchByText();
    }, [searchByText])

    const cards = countiresData?.map((country: any, index: number) => {
        return (
            <div className='card cursor-pointer'
                key={index}
                onClick={() => navigate(`${country?.name}`)}
            >
                <figure className='country-image-container'>
                    <img src={country?.flags?.png} alt="flag" className='flag-image' />
                </figure>
                <div className='card-body'>
                    <p className='country-name'>{country?.name}</p>
                    <div className='county-states'>
                        <p>
                            <span className='country-key'>Population:</span>
                            <span className='country-value'>{country?.population}</span>
                        </p>
                        <p>
                            <span className='country-key'>Region:</span>
                            <span className='country-value'>{country?.region}</span>
                        </p>
                        <p>
                            <span className='country-key'>Capital:</span>
                            <span className='country-value'>{country?.capital}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    });




    return (
        <>
            <section className='section'>
                <div className='container'>
                    <div className='row align-items-center justify-content-between input-box'>
                        <div className='search-box form-control d-flex align-items-center'>
                            <label htmlFor="search" className='form-label cursor-pointer icon-search'></label>
                            <input type='text' className='flex-grow-1' autoComplete='off' id='search' placeholder='Search for a country...' onChange={(e) => setSearchText(e.target.value)} />
                        </div>
                        <div className='filter-box'>
                            <select className='form-control select-box cursor-pointer' name="region" id="select" onChange={(e) => setFilterText(e.target.value)}>
                                <option value="">Filter by Region</option>
                                <option value="africa">Africa</option>
                                <option value="america">America</option>
                                <option value="asia">Asia</option>
                                <option value="europe">Europe</option>
                                <option value="oceania">Oceania</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="container">
                    <div className='row row justify-content-between'>
                        {cards}
                    </div>
                </div>
            </section>
        </>
    )
};

export default CountryList;