import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import restservices from '../services/restServices'

function CountryDetails() {

    const { name } = useParams();
    const { getSingleCountryDetails } = restservices;
    const navigate = useNavigate();
    const [countryDetails, setCountryDetails] = useState<any>({});
    const [tld, setTld] = useState();
    const [cur, setCur] = useState();
    const [lang, setLang] = useState<any>([]);
    const [langString, setLangString] = useState();
    const [borderCountries, setBorderCountries] = useState<string[]>([]);

    useEffect(() => {
        if (name) {
            getSingleCountryDetails(name as string).then(res => {
                setCountryDetails(res.data[0]);
                setTld(res.data[0].topLevelDomain[0]);
                setCur(res.data[0].currencies[0].code);
                setLang(res.data[0].languages)
                setBorderCountries(res.data[0].borders)
            })
        }
    }, [getSingleCountryDetails, name]);



    useEffect(() => {
        const newLan = (lang?.map((l: any) => l.name));
        setLangString(newLan.join(', '));
    }, [lang]);

    const borders = borderCountries?.map((borderCoutry: string, index: number) => {
        return <span className="border-country countryinfo-value d-flex align-items-center justify-content-center" key={index}>{borderCoutry}</span>
    })
    return (
        < >
            <section className='section'>
                <div className='container'>
                    <div>
                        <button className='btn-back btn btn-light d-flex align-items-center justify-content-center' onClick={() => navigate(-1)}>
                            <span className='icon-back'></span>
                            <span>Back</span>
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='details-box'>
                            <img src={countryDetails.flag} alt="country-flag" className='country-image' />
                        </div>
                        <div className='details-box'>
                            <h3 className='country-name'>{countryDetails?.name}</h3>
                            <div className='row justify-content-between'>
                                <div className='coutry-info'>
                                    <p className='country-detail-line'>
                                        <span className='countryinfo-key'>Native Name:</span>
                                        <span className='countryinfo-value'>{countryDetails.nativeName}</span>
                                    </p>
                                    <p className='country-detail-line'>
                                        <span className='countryinfo-key'>Population:</span>
                                        <span className='countryinfo-value'>{countryDetails.popultion}</span>
                                    </p>
                                    <p className='country-detail-line'>
                                        <span className='countryinfo-key'>Region:</span>
                                        <span className='countryinfo-value'>{countryDetails.region}</span>
                                    </p>
                                    <p className='country-detail-line'>
                                        <span className='countryinfo-key'>Sub Region:</span>
                                        <span className='countryinfo-value'>{countryDetails.subregion}</span>
                                    </p>
                                    <p className='country-detail-line'>
                                        <span className='countryinfo-key'>Capital:</span>
                                        <span className='countryinfo-value'>{countryDetails.capital}</span>
                                    </p>
                                </div>
                                <div className='country-info'>
                                    <p className='country-detail-line'>
                                        <span className='countryinfo-key'>Top level Domain:</span>
                                        <span className='countryinfo-value'>{tld}</span>
                                    </p>
                                    <p className='country-detail-line'>
                                        <span className='countryinfo-key'>Currencies:</span>
                                        <span className='countryinfo-value'>{cur}</span>
                                    </p>
                                    <p className='country-detail-line'>
                                        <span className='countryinfo-key'>Languages:</span>
                                        <span className='countryinfo-value'>{langString}</span>
                                    </p>
                                </div>

                            </div>
                            <div className='d-flex country-borders'>
                                <p className='countryinfo-key border-country-label'>Border Countries:</p>
                                {countryDetails.borders ? (
                                    <div className='row'>
                                        {borders}
                                    </div>
                                ) : <span className=' countryinfo-value'> null</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default CountryDetails;