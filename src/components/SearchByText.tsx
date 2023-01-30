interface ISearchTextProps {
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}
/**
 * @returns A search input component for seaching through the country data 
 */
function SearchByText({ setSearchText }: ISearchTextProps) {
    return (
        <div className='search-box form-control d-flex align-items-center'>
            <label htmlFor="search" className='form-label cursor-pointer icon-search'></label>
            <input type='text' className='flex-grow-1' autoComplete='off' id='search' placeholder='Search for a country...' onChange={(e) => setSearchText(e.target.value)} />
        </div>
    )
};

export default SearchByText;
