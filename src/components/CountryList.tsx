import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import restServices from '../services/restServices'

function CountryList() {

    const { getAllCountries } = restServices;
    const [countiresData, setCountiresData] = useState<any>([]);
    const navigate = useNavigate()

    useEffect(() => {
        getAllCountries().then(res => setCountiresData(res.data)
        )
    }, [getAllCountries]);

    const cards = countiresData?.map((country: any, index: number) => {
        return (
            <div className='card cursor-pointer'
                key={index}
                onClick={() => navigate(`${country?.name}`)}
            >
                <figure>
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
    })

    return (
        <section className="section">
            <div className="container">
                <div className='row row justify-content-between'>
                    {cards}
                </div>
            </div>
        </section>
    )
};

export default CountryList;
