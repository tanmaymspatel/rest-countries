interface ISearchBYRegionProps {
    setRegion: React.Dispatch<React.SetStateAction<string>>
}
/**
 * @returns A dropdown menu to filter countries via region 
 */
function SearchByRegion({ setRegion }: ISearchBYRegionProps) {
    return (
        <div className='filter-box'>
            <select className='form-control select-box cursor-pointer' name="region" id="select" onChange={(e) => setRegion(e.target.value)}>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
};

export default SearchByRegion;