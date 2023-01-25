import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import restservices from '../services/restServices'

function CountryDetails() {

    const { name } = useParams();
    const { getSingleCountryDetails } = restservices;
    const navigate = useNavigate();

    useEffect(() => {
        getSingleCountryDetails(name as string).then(res => console.log(res.data[0]))
    }, [getSingleCountryDetails, name]);

    return (<>
        <section className='section'>
            <div className='container'>
                <div className='btn-bacak'>
                    <button className='btn btn-light' onClick={() => navigate(-1)}>
                        <span>{`<-`}</span>
                        <span>Back</span>
                    </button>
                </div>
            </div>
        </section>
        <section>
            <div className='row justify-content-between align-items-center'>
                <div className='details-box'>
                    <figure></figure>
                </div>
                <div className='details-box'></div>
            </div>
        </section>
    </>
    )
};

export default CountryDetails;