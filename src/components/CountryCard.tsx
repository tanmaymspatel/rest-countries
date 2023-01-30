import { useNavigate } from "react-router-dom";

interface ICountryCardProps {
    name: string,
    flag: string,
    population: number,
    region: string,
    capital: string,
}
/**
 * @returns a card illustration of country details
 */
function CountryCard({ name, flag, population, region, capital }: ICountryCardProps) {

    const navigate = useNavigate();

    return (
        <div className='card cursor-pointer'
            onClick={() => navigate(`${name}`)} // navigate to the clicked country detail page
        >
            <figure className='country-image-container'>
                <img src={flag} alt="flag" className='flag-image' />
            </figure>
            <div className='card-body'>
                <p className='country-name'>{name}</p>
                <div className='county-states'>
                    <p>
                        <span className='country-key'>Population:</span>
                        <span className='country-value'>{population}</span>
                    </p>
                    <p>
                        <span className='country-key'>Region:</span>
                        <span className='country-value'>{region}</span>
                    </p>
                    <p>
                        <span className='country-key'>Capital:</span>
                        <span className='country-value'>{capital}</span>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default CountryCard;