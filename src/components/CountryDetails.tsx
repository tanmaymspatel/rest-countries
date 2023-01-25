import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function CountryDetails() {

    const pr = useParams()

    useEffect(() => {
        console.log(pr);
    }, [pr]);

    return (
        <div>
            country details
        </div>
    )
};

export default CountryDetails;
